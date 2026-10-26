// Exam-style calculator for quiz questions. Keys are limited to what the current unit needs.
// Expressions are parsed by a tiny recursive-descent parser (no eval).
import { h } from './ui.js';
import { sfx } from './audio.js';

/** Unit 3 needs only the four operations and brackets. */
export const UNIT3_KEYS = [
  ['C', '(', ')', '⌫'],
  ['7', '8', '9', '÷'],
  ['4', '5', '6', '×'],
  ['1', '2', '3', '−'],
  ['0', '.', '=', '+']
];

export function evaluate(expr) {
  const src = expr.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-').replace(/,/g, '').replace(/\s+/g, '');
  let i = 0;
  const peek = () => src[i];
  const number = () => {
    const m = src.slice(i).match(/^\d*\.?\d+|^\d+\./);
    if (!m) throw new Error('Expected a number');
    i += m[0].length;
    return parseFloat(m[0]);
  };
  const factor = () => {
    if (peek() === '-') { i++; return -factor(); }
    if (peek() === '+') { i++; return factor(); }
    if (peek() === '(') {
      i++;
      const v = expression();
      if (peek() === ')') i++; // forgive a missing closing bracket at the end
      return v;
    }
    return number();
  };
  const term = () => {
    let v = factor();
    while (peek() === '*' || peek() === '/' || peek() === '(') {
      const op = peek() === '(' ? '*' : src[i++]; // "2(3)" means 2 × 3
      const r = factor();
      if (op === '/' && r === 0) throw new Error("Can't divide by 0");
      v = op === '*' ? v * r : v / r;
    }
    return v;
  };
  const expression = () => {
    let v = term();
    while (peek() === '+' || peek() === '-') v = src[i++] === '+' ? v + term() : v - term();
    return v;
  };
  if (!src) return null;
  const v = expression();
  if (i < src.length) throw new Error('Check the expression');
  return Math.round(v * 1e10) / 1e10;
}

const fmt = n => n.toLocaleString('en-US', { maximumFractionDigits: 6 });

/**
 * Calculator panel. useAnswer(value) is called by the "Use as answer" button (omit to hide that button).
 */
export function calculator({ keys = UNIT3_KEYS, useAnswer } = {}) {
  let last = null;
  const display = h('input', { type: 'text', class: 'calc-display', inputmode: 'none', autocomplete: 'off', 'aria-label': 'Calculator input', placeholder: '0' });
  const result = h('div', { class: 'calc-result', 'aria-live': 'polite' }, ' ');
  const use = useAnswer ? h('button', { class: 'btn teal small', disabled: true }, '↓ Use as answer') : null;

  const run = () => {
    try {
      const v = evaluate(display.value);
      if (v == null) return;
      last = v;
      result.textContent = `${display.value} = ${fmt(v)}`;
      result.classList.remove('err');
      display.value = String(v);
      if (use) use.disabled = false;
    } catch (e) {
      result.textContent = e.message;
      result.classList.add('err');
    }
  };
  const press = k => {
    sfx('click');
    if (k === 'C') { display.value = ''; result.textContent = ' '; last = null; if (use) use.disabled = true; }
    else if (k === '⌫') display.value = display.value.slice(0, -1);
    else if (k === '=') run();
    else display.value += k;
  };
  display.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); e.stopPropagation(); run(); }
    if (e.key === 'Escape') press('C');
  });
  // Typed * and / are shown as × and ÷ so it reads like the exam.
  display.addEventListener('input', () => { display.value = display.value.replace(/\*/g, '×').replace(/\//g, '÷'); });
  if (use) use.onclick = () => { if (last != null) useAnswer(last); };

  const pad = h('div', { class: 'calc-keys' }, keys.flat().map(k =>
    h('button', { type: 'button', class: `calc-key ${/[0-9.]/.test(k) ? '' : k === '=' ? 'eq' : 'op'}`, onclick: () => press(k) }, k)));
  const body = h('div', { class: 'calc-body' }, display, result, pad, use);
  const toggle = h('button', { type: 'button', class: 'btn ghost small calc-toggle', 'aria-expanded': 'true' }, '🧮 Hide calculator');
  toggle.onclick = () => {
    const hidden = body.classList.toggle('hidden');
    toggle.textContent = hidden ? '🧮 Show calculator' : '🧮 Hide calculator';
    toggle.setAttribute('aria-expanded', String(!hidden));
  };
  return h('div', { class: 'calc' }, toggle, body);
}
