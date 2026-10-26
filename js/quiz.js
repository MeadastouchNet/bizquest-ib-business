// Quiz engine. Question types:
//   mcq:  { q, options: [...], answer: index, why }
//   tf:   { q, answer: true|false, why }
//   num:  { q, answer: number, tol (absolute, default 0.5% of answer), unit, why, hint }
//   sort: { q, buckets: [...], items: [{ t, b: bucketIndex }], why }
// Every question also has { id, cmd? (IB command term) }.
import { h, shuffle, reward, speakButton } from './ui.js';
import { sfx } from './audio.js';
import { calculator } from './calc.js';
import * as store from './store.js';

function parseNum(s) {
  const n = parseFloat(String(s).replace(/[$,%\s]/g, '').replace('−', '-'));
  return Number.isFinite(n) ? n : null;
}
function numCorrect(q, v) {
  const tol = q.tol ?? Math.max(0.01, Math.abs(q.answer) * 0.005);
  return v != null && Math.abs(v - q.answer) <= tol + 1e-9;
}

/**
 * Renders one question into `el`. Calls done(correct) once the learner has answered and pressed Next.
 * `onAnswer(correct)` fires immediately when marked (before Next).
 */
export function renderQuestion(el, q, { meta = '', onAnswer, done } = {}) {
  el.replaceChildren();
  const fb = h('div');
  const next = h('button', { class: 'btn hidden', style: 'margin-top:12px' }, 'Next →');
  let answered = false;

  const finish = (ok, extra = '') => {
    if (answered) return;
    answered = true;
    sfx(ok ? 'good' : 'bad');
    onAnswer && onAnswer(ok);
    fb.replaceChildren(h('div', { class: `feedback ${ok ? 'good' : 'bad'}`, html:
      `<b>${ok ? pickPraise() : 'Not quite.'}</b> ${extra}${q.why ? `<div style="margin-top:6px">${q.why}</div>` : ''}` }));
    next.classList.remove('hidden');
    next.focus();
  };
  next.onclick = () => done && done(answered);

  const header = h('div', { class: 'q-meta' }, h('span', {}, meta), q.cmd ? h('span', {}, `Command term: ${q.cmd}`) : null);
  const text = h('div', { class: 'spread', style: 'align-items:start' },
    h('div', { class: 'q-text', html: q.q }), speakButton(() => q.q + (q.options ? '. Options: ' + q.options.join('. ') : '')));
  el.append(header, text);

  if (q.type === 'mcq' || q.type === 'tf') {
    const opts = q.type === 'tf'
      ? [{ label: 'True', val: true }, { label: 'False', val: false }]
      : shuffle(q.options.map((o, i) => ({ label: o, val: i })));
    const wrap = h('div', { class: 'options' });
    const buttons = opts.map(o => {
      const b = h('button', { class: 'opt', html: o.label });
      b.onclick = () => {
        const ok = o.val === q.answer;
        buttons.forEach((x, i) => { x.disabled = true; if (opts[i].val === q.answer) x.classList.add('correct'); });
        if (!ok) b.classList.add('wrong');
        finish(ok);
      };
      return b;
    });
    wrap.append(...buttons);
    el.append(wrap);
    if (q.cmd === 'Calculate') el.append(calculator());
  } else if (q.type === 'num') {
    const input = h('input', { type: 'text', inputmode: 'decimal', placeholder: 'Your answer', 'aria-label': 'Your answer' });
    const check = h('button', { class: 'btn' }, 'Check');
    const hint = q.hint ? h('button', { class: 'btn ghost small' }, '💡 Hint') : null;
    const hintBox = h('div', { class: 'muted small', style: 'margin-top:8px' });
    if (hint) hint.onclick = () => { hintBox.innerHTML = q.hint; hint.remove(); };
    const go = () => {
      const v = parseNum(input.value);
      if (v == null) { input.focus(); return; }
      input.disabled = check.disabled = true;
      const ok = numCorrect(q, v);
      finish(ok, ok ? '' : `The answer is <b>${q.display || q.answer}${q.unit && !q.display ? ' ' + q.unit : ''}</b>.`);
    };
    check.onclick = go;
    input.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
    el.append(h('div', { class: 'num-input' }, input, q.unit ? h('span', { class: 'muted' }, q.unit) : null, check), h('div', {}, hint, hintBox),
      calculator({ useAnswer: v => { if (!input.disabled) { input.value = String(v); input.focus(); } } }));
    setTimeout(() => input.focus(), 50);
  } else if (q.type === 'sort') {
    el.append(sortWidget(q, ok => finish(ok, ok ? '' : 'Wrong ones are in red; the right bucket is shown in green.')));
  }
  el.append(fb, next);
}

/** Sort/classify widget, also reused by labs. onChecked(allCorrect). */
export function sortWidget(q, onChecked, { retry = false } = {}) {
  const chosen = new Map();
  const items = shuffle(q.items);
  const rows = items.map(it => {
    const chips = q.buckets.map((b, bi) => {
      const c = h('button', { class: 'chip' }, b);
      c.onclick = () => {
        if (c.disabled) return;
        chosen.set(it, bi);
        chips.forEach(x => x.classList.remove('sel'));
        c.classList.add('sel');
        sfx('click');
        check.disabled = chosen.size < items.length;
      };
      return c;
    });
    it._chips = chips;
    return h('div', { class: 'sort-item' }, h('span', { html: it.t }), h('div', { class: 'choices' }, chips));
  });
  const check = h('button', { class: 'btn', disabled: true, style: 'margin-top:12px' }, 'Check');
  check.onclick = () => {
    let all = true;
    for (const it of items) {
      const pick = chosen.get(it);
      it._chips.forEach((c, bi) => {
        c.disabled = true;
        c.classList.remove('sel');
        if (bi === it.b) c.classList.add('right');
        else if (bi === pick) c.classList.add('wrongc');
      });
      if (pick !== it.b) all = false;
    }
    check.remove();
    onChecked(all, items.filter(it => chosen.get(it) === it.b).length, items.length);
  };
  return h('div', {}, h('div', { class: 'card flat', style: 'padding:8px 14px;margin:0' }, rows), check);
}

const PRAISE = ['Nice!', 'Correct!', 'Spot on.', 'Yes!', 'Nailed it.', 'Exactly.', 'CFO material.'];
const pickPraise = () => PRAISE[Math.floor(Math.random() * PRAISE.length)];

/**
 * Runs a list of questions. Wrong answers are asked once more at the end (not counted as first attempts).
 * questions: [{ q, sec }]. Calls onFinish({ right, total }) with first-attempt score.
 */
export function runQuiz(el, questions, { mode = 'lesson', title = 'Quiz', xpRight = 10, xpRetry = 3, onFinish } = {}) {
  const queue = questions.map(x => ({ ...x, first: true }));
  let i = 0, right = 0, total = questions.length;
  const box = h('div', { class: 'card' });
  const progress = h('div', { class: 'bar', style: 'margin-bottom:12px' }, h('span', { style: 'width:0%' }));
  el.replaceChildren(progress, box);

  const step = () => {
    if (i >= queue.length) { onFinish && onFinish({ right, total }); return; }
    const item = queue[i];
    progress.firstChild.style.width = `${(i / queue.length) * 100}%`;
    const meta = item.first ? `${title} · ${i + 1} / ${queue.length}` : `🔁 Second chance`;
    renderQuestion(box, item.q, {
      meta,
      onAnswer: ok => {
        store.recordAnswer(item.q, item.sec, ok, { firstAttempt: item.first, mode });
        if (ok) { if (item.first) right++; reward(item.first ? xpRight : xpRetry); }
        else if (item.first) queue.push({ ...item, first: false });
      },
      done: () => { i++; step(); }
    });
  };
  step();
}
