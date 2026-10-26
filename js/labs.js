// Interactive "Play" labs. Each lab gets a container and calls onWin() once its challenge is beaten.
import { h, money, pct, round, slider, svg, lineChart, barChart, speakButton, toast, shuffle } from './ui.js';
import { sortWidget } from './quiz.js';
import { sfx } from './audio.js';

export function renderLab(el, lab, onWin) {
  const fn = LABS[lab.type];
  if (!fn) { el.append(h('p', {}, `Unknown lab: ${lab.type}`)); return; }
  fn(el, lab, onWin);
}

function challengeBox(text) {
  const box = h('div', { class: 'challenge', html: text });
  box.win = msg => { if (box.classList.contains('won')) return false; box.classList.add('won'); box.innerHTML = `✅ ${msg || text}`; return true; };
  return box;
}

/** A list of challenges checked in order; onWin fires when all are beaten. */
function challengeList(texts, onWin) {
  const boxes = texts.map(t => challengeBox(t));
  const done = new Set();
  const wrap = h('div', {}, boxes);
  wrap.check = results => {
    results.forEach((ok, i) => {
      if (ok && !done.has(i)) { done.add(i); boxes[i].win(); sfx('good'); toast('Challenge done!'); }
    });
    if (done.size === texts.length && !wrap.fired) { wrap.fired = true; onWin(); }
  };
  return wrap;
}

// 6.5 / 6.6: the Berlin pop-up project, shared by the Gantt chart and critical path labs.
const PROJECT = [
  { id: 'A', name: 'Sign the lease', dur: 3, after: [], from: 1, to: 2 },
  { id: 'B', name: 'Fit out the store', dur: 5, after: ['A'], from: 2, to: 4 },
  { id: 'C', name: 'Recruit staff', dur: 4, after: ['A'], from: 2, to: 3 },
  { id: 'D', name: 'Train staff', dur: 2, after: ['C'], from: 3, to: 4 },
  { id: 'E', name: 'Ship stock from Porto', dur: 6, after: [], from: 1, to: 4 },
  { id: 'F', name: 'Stock shelves, soft launch', dur: 1, after: ['B', 'D', 'E'], from: 4, to: 5 },
  { id: 'G', name: 'Marketing campaign', dur: 2, after: ['C'], from: 3, to: 5 }];
const NETWORK = PROJECT;
/** Forward and backward pass over the activity-on-arrow network (nodes 1–5). */
function cpaSolve(dur) {
  const est = { 1: 0 }, lft = {};
  for (let n = 2; n <= 5; n++) est[n] = Math.max(...NETWORK.filter(a => a.to === n).map(a => est[a.from] + dur[a.id]));
  lft[5] = est[5];
  for (let n = 4; n >= 1; n--) lft[n] = Math.min(...NETWORK.filter(a => a.from === n).map(a => lft[a.to] - dur[a.id]));
  const fl = Object.fromEntries(NETWORK.map(a => [a.id, lft[a.to] - dur[a.id] - est[a.from]]));
  const ff = Object.fromEntries(NETWORK.map(a => [a.id, est[a.to] - dur[a.id] - est[a.from]]));
  return { est, lft, fl, ff, len: est[5] };
}

const LABS = {
  // ------------------------------------------------------------ classify
  sort(el, lab, onWin) {
    const render = () => {
      el.replaceChildren(h('h2', {}, `🎮 ${lab.title}`), challengeBox(lab.challenge));
      const ch = el.lastChild;
      el.append(sortWidget({ buckets: lab.buckets, items: lab.items }, (all, right, total) => {
        if (all) { ch.win(`${lab.challenge} Done!`); onWin(); }
        else el.append(h('p', { class: 'muted', style: 'margin-top:10px' }, `${right}/${total} correct.`),
          h('button', { class: 'btn ghost', onclick: render }, '🔁 Shuffle and try again'));
      }));
    };
    render();
  },

  // ------------------------------------------------------------ pick the best option per scenario
  scenarios(el, lab, onWin) {
    const solved = new Set();
    const ch = challengeBox(lab.challenge);
    el.append(h('h2', {}, `🎮 ${lab.title}`), ch);
    lab.items.forEach((it, i) => {
      const fb = h('div');
      const opts = shuffle(it.options).map(o => {
        const b = h('button', { class: 'opt', html: o.t });
        b.onclick = () => {
          b.classList.add(o.ok ? 'correct' : 'wrong');
          sfx(o.ok ? 'good' : 'bad');
          fb.replaceChildren(h('div', { class: `feedback ${o.ok ? 'good' : 'bad'}` }, o.fb));
          if (o.ok) {
            opts.forEach(x => { x.disabled = true; });
            solved.add(i);
            if (solved.size === lab.items.length && ch.win()) onWin();
          }
        };
        return b;
      });
      el.append(h('div', { class: 'card flat', style: 'background:var(--card-2)' },
        h('div', { class: 'spread', style: 'align-items:start' }, h('p', { html: `<b>${i + 1}.</b> ${it.s}` }), speakButton(it.s)),
        h('div', { class: 'options' }, opts), fb));
    });
  },

  // ------------------------------------------------------------ 1.2 unlimited vs limited liability
  liability(el, lab, onWin) {
    const ASSETS = 8000, SAVINGS = 6000;   // what the business owns; Noah's own money outside the business
    const s = { debts: 5000, ltd: false };
    const kpis = h('div', { class: 'kpis' });
    const note = h('p', { class: 'muted small' });
    const challenges = challengeList([
      'As a <b>sole trader</b>, find the smallest debt that wipes out <b>all</b> of Noah\'s personal savings.',
      'Keep that debt and switch to a <b>Ltd company</b>. How much of Noah\'s own savings is lost now?',
      'Find the <b>highest</b> debt where it makes no difference to Noah which legal form he chose.'
    ], onWin);
    const sole = h('button', { class: 'btn small', onclick: () => { s.ltd = false; update(); } }, '🧍 Sole trader');
    const ltd = h('button', { class: 'btn small', onclick: () => { s.ltd = true; update(); } }, '🏢 Ltd company');
    const update = () => {
      const fromBusiness = Math.min(s.debts, ASSETS), gap = s.debts - fromBusiness;
      const fromNoah = s.ltd ? 0 : Math.min(SAVINGS, gap), unpaid = gap - fromNoah;
      sole.className = `btn small${s.ltd ? ' ghost' : ''}`;
      ltd.className = `btn small${s.ltd ? '' : ' ghost'}`;
      kpis.replaceChildren(kpi(money(fromBusiness), 'Paid from business assets'),
        kpi(money(fromNoah), 'Paid from Noah\'s own savings', fromNoah ? 'bad' : 'good'),
        kpi(money(unpaid), s.ltd ? 'Lost by creditors' : 'Noah still owes', unpaid ? 'bad' : ''));
      note.innerHTML = !gap
        ? 'The business can sell its assets and pay every debt. The legal form doesn\'t matter yet.'
        : s.ltd
          ? 'The company is a <b>separate legal entity</b>: its debts are not Noah\'s. He loses what he put into the business, but his own savings are safe. The creditors take the loss.'
          : `As a sole trader, the business <i>is</i> Noah. Its debts are his debts, so his own savings go too${unpaid ? ', and he still owes more: he could be made bankrupt' : ''}.`;
      challenges.check([!s.ltd && s.debts === ASSETS + SAVINGS, s.ltd && s.debts === ASSETS + SAVINGS, s.debts === ASSETS]);
    };
    el.append(h('h2', {}, `🎮 ${lab.title || 'Who pays the debts?'}`),
      h('p', { class: 'muted' }, `Noah's business owns ${money(ASSETS)} of stock and equipment. Outside the business he has ${money(SAVINGS)} of savings. The business fails. Change its debts and its legal form.`),
      challenges,
      h('div', { class: 'lab-grid' },
        h('div', {}, h('div', { class: 'row', style: 'margin-bottom:12px' }, sole, ltd),
          slider({ label: 'Debts when the business fails', min: 0, max: 30000, step: 1000, value: s.debts, fmt: money, oninput: v => { s.debts = v; update(); } })),
        h('div', {}, kpis, note)));
    update();
  },

  // ------------------------------------------------------------ 1.5 economies and diseconomies of scale
  scale(el, lab, onWin) {
    // Long-run average cost per pair: AC = 10000/q + 10 + 0.04q, lowest at q = 500 (AC = $50).
    const ac = q => 10000 / q + 10 + 0.04 * q;
    const s = { q: 100 };
    const kpis = h('div', { class: 'kpis' });
    const chartBox = h('div');
    const note = h('p', { class: 'muted small' });
    const challenges = challengeList([
      'Find the output where the <b>average cost per pair is lowest</b>.',
      'Find the output <b>above</b> that level where average cost is back to what it was at <b>250 pairs</b>.'
    ], onWin);
    const pts = [];
    for (let q = 50; q <= 1000; q += 25) pts.push([q, ac(q)]);
    const update = () => {
      const a = ac(s.q);
      kpis.replaceChildren(kpi(money(a, 2), 'Average cost per pair'), kpi(money(a * s.q), 'Total cost per month'),
        kpi(s.q < 500 ? 'Economies' : s.q > 500 ? 'Diseconomies' : 'Most efficient', s.q === 500 ? 'size' : 'of scale', s.q > 500 ? 'bad' : 'good'));
      chartBox.replaceChildren(lineChart([{ name: 'Average cost per pair', color: 'var(--chart-1)', points: pts }],
        { xLabel: 'Pairs customised per month', yMin: 0, markers: [{ x: s.q, label: `${s.q} pairs`, color: 'var(--accent)' }], xTicks: [50, 250, 500, 750, 1000] }));
      note.innerHTML = s.q < 500
        ? '<b>Economies of scale:</b> bigger orders of blank sneakers and paint get bulk discounts, a faster machine is used more fully, and fixed costs are spread over more pairs. Average cost falls.'
        : s.q > 500
          ? '<b>Diseconomies of scale:</b> more staff and more sites are harder to coordinate, messages get lost and people feel like a number. Average cost rises again.'
          : 'This is the most efficient size for SoleFlip: the lowest average cost.';
      challenges.check([s.q === 500, s.q === 1000]);
    };
    el.append(h('h2', {}, `🎮 ${lab.title || 'How big should SoleFlip get?'}`),
      h('p', { class: 'muted' }, 'Grow SoleFlip and watch what happens to the cost of each pair.'), challenges,
      h('div', { class: 'lab-grid' },
        h('div', {}, slider({ label: 'Pairs per month', min: 50, max: 1000, step: 50, value: s.q, fmt: v => v, oninput: v => { s.q = v; update(); } }), kpis),
        h('div', {}, chartBox, note)));
    update();
  },

  // ------------------------------------------------------------ 3.3 profit simulator
  profit(el, lab, onWin) {
    const s = { p: 120, vc: 35, fc: 1500, q: 30 };
    const kpis = h('div', { class: 'kpis' });
    const chartBox = h('div');
    const note = h('p', { class: 'muted small' });
    const challenges = challengeList([
      'Set the quantity to the <b>break-even point</b>: the smallest number of pairs where SoleFlip makes no loss.',
      'Make at least <b>$3,000 profit</b> while selling <b>no more than 40 pairs</b>.'
    ], onWin);
    const update = () => {
      const tr = s.p * s.q, tvc = s.vc * s.q, tc = s.fc + tvc, profit = tr - tc;
      const be = s.p > s.vc ? Math.ceil(s.fc / (s.p - s.vc)) : null;
      kpis.replaceChildren(
        kpi(money(tr), 'Total revenue'), kpi(money(tvc), 'Total variable cost'),
        kpi(money(tc), 'Total cost'), kpi(money(profit), profit >= 0 ? 'Profit' : 'Loss', profit >= 0 ? 'good' : 'bad'));
      const qs = [0, 100];
      chartBox.replaceChildren(lineChart([
        { name: 'Total revenue', color: 'var(--chart-2)', points: qs.map(q => [q, s.p * q]) },
        { name: 'Total cost', color: 'var(--chart-4)', points: qs.map(q => [q, s.fc + s.vc * q]) },
        { name: 'Fixed cost', color: 'var(--chart-3)', points: qs.map(q => [q, s.fc]), dash: '6 4' }
      ], { xLabel: 'Pairs sold per month', markers: [{ x: s.q, label: `${s.q} pairs`, color: 'var(--accent)' }], xTicks: [0, 25, 50, 75, 100] }));
      note.innerHTML = s.p <= s.vc
        ? '⚠️ The price is below the variable cost: every pair <b>loses</b> money. It can never break even.'
        : `Each pair adds <b>${money(s.p - s.vc)}</b> towards fixed costs (price − variable cost). Where the lines cross, revenue = cost.`;
      challenges.check([s.q === be, profit >= 3000 && s.q <= 40]);
    };
    const sl = (label, key, min, max, step, fmt) => slider({ label, min, max, step, value: s[key], fmt, oninput: v => { s[key] = v; update(); } });
    el.append(h('h2', {}, '🎮 SoleFlip profit simulator'),
      h('p', { class: 'muted' }, 'Move the sliders and watch total revenue and total cost change.'), challenges,
      h('div', { class: 'lab-grid' },
        h('div', {}, sl('Price per pair', 'p', 40, 250, 5, money), sl('Variable cost per pair', 'vc', 10, 120, 1, money),
          sl('Fixed costs per month', 'fc', 500, 5000, 100, money), sl('Pairs sold', 'q', 0, 100, 1, v => v)),
        h('div', {}, kpis, chartBox, note)));
    update();
  },

  // ------------------------------------------------------------ 3.4 P&L builder
  pnl(el, lab, onWin) {
    const s = { rev: 180000, cos: 72000, exp: 60000, int: 3000, tax: 20, div: 10000 };
    const table = h('div', { class: 'table-wrap' });
    const chartBox = h('div');
    const challenges = challengeList([
      'Get <b>retained profit above $40,000</b> without changing sales revenue or dividends.',
      'Find a combination where the business makes a <b>gross profit but a loss before tax</b>.'
    ], onWin);
    const update = () => {
      const gp = s.rev - s.cos, pbit = gp - s.exp, pbt = pbit - s.int;
      const tax = pbt > 0 ? pbt * s.tax / 100 : 0, pfp = pbt - tax, ret = pfp - s.div;
      const row = (l, v, cls = '') => h('tr', { class: cls }, h('td', {}, l), h('td', { class: v < 0 ? 'neg' : '' }, v < 0 ? `(${Math.abs(v).toLocaleString('en-US')})` : v.toLocaleString('en-US')));
      table.replaceChildren(h('table', { class: 'fin' },
        row('Sales revenue', s.rev), row('Cost of sales', -s.cos), row('Gross profit', gp, 'total'),
        row('Expenses', -s.exp), row('Profit before interest and tax', pbit, 'total'), row('Interest', -s.int),
        row('Profit before tax', pbt, 'total'), row(`Tax (${s.tax}%)`, -round(tax, 0)), row('Profit for period', round(pfp, 0), 'total'),
        row('Dividends', -s.div), row('Retained profit', round(ret, 0), 'total')));
      chartBox.replaceChildren(barChart([
        { label: 'Revenue', value: s.rev, color: 'var(--chart-2)' }, { label: 'Gross', value: gp, color: 'var(--chart-1)' },
        { label: 'PBIT', value: pbit, color: 'var(--chart-1)' }, { label: 'PBT', value: pbt, color: 'var(--chart-1)' },
        { label: 'Period', value: pfp, color: 'var(--chart-3)' }, { label: 'Retained', value: ret, color: ret >= 0 ? 'var(--good)' : 'var(--bad)' }
      ].map(b => ({ ...b, color: b.value < 0 ? 'var(--bad)' : b.color })), { showValues: true }));
      challenges.check([s.rev === 180000 && s.div === 10000 && ret > 40000, gp > 0 && pbt < 0]);
    };
    const sl = (label, key, min, max, step, fmt = money) => slider({ label, min, max, step, value: s[key], fmt, oninput: v => { s[key] = v; update(); } });
    el.append(h('h2', {}, '🎮 Build SoleFlip\'s profit and loss account'),
      h('p', { class: 'muted' }, 'Change the numbers and watch the profit flow down the statement.'), challenges,
      h('div', { class: 'lab-grid' },
        h('div', {}, sl('Sales revenue', 'rev', 50000, 300000, 5000), sl('Cost of sales', 'cos', 20000, 200000, 2000),
          sl('Expenses', 'exp', 10000, 150000, 2000), sl('Interest', 'int', 0, 20000, 500), sl('Tax rate', 'tax', 0, 40, 1, v => `${v}%`),
          sl('Dividends', 'div', 0, 40000, 1000)),
        h('div', {}, table, chartBox)));
    update();
  },

  // ------------------------------------------------------------ 3.4 depreciation (HL)
  depreciation(el, lab, onWin) {
    const s = { cost: 20000, res: 2000, yrs: 4 };
    const TOTAL_UNITS = 60000;
    const kpis = h('div', { class: 'kpis' });
    const chartBox = h('div');
    const tableBox = h('div', { class: 'table-wrap' });
    const ch = challengeBox('Make the <b>straight-line</b> depreciation exactly <b>$3,000 per year</b>.');
    const update = () => {
      const sl = (s.cost - s.res) / s.yrs;
      // Machines are usually used more when new: units per year fall each year.
      const weights = [...Array(s.yrs)].map((_, i) => s.yrs - i);
      const wsum = weights.reduce((a, b) => a + b, 0);
      const units = weights.map(w => Math.round(TOTAL_UNITS * w / wsum));
      const perUnit = (s.cost - s.res) / TOTAL_UNITS;
      let bvS = s.cost, bvU = s.cost;
      const ptsS = [[0, s.cost]], ptsU = [[0, s.cost]], rows = [];
      for (let y = 1; y <= s.yrs; y++) {
        const du = perUnit * units[y - 1];
        bvS -= sl; bvU -= du;
        ptsS.push([y, bvS]); ptsU.push([y, bvU]);
        rows.push(h('tr', {}, h('td', {}, `Year ${y}`), h('td', {}, money(sl)), h('td', {}, units[y - 1].toLocaleString('en-US')), h('td', {}, money(du))));
      }
      kpis.replaceChildren(kpi(money(sl), 'Straight-line per year'), kpi(`$${round(perUnit, 3)}`, 'Per unit produced'), kpi(money(s.res), 'Residual value'));
      chartBox.replaceChildren(lineChart([
        { name: 'Straight line', color: 'var(--chart-1)', points: ptsS, dots: true },
        { name: 'Units of production', color: 'var(--chart-2)', points: ptsU, dots: true }
      ], { xLabel: 'Year', xTicks: [...Array(s.yrs + 1)].map((_, i) => i), xFmt: x => String(x), hLines: [{ y: s.res, label: 'residual value', color: 'var(--chart-3)' }] }));
      tableBox.replaceChildren(h('table', { class: 'fin' }, h('tr', {}, h('th', {}, ''), h('th', {}, 'Straight line'), h('th', {}, 'Units made'), h('th', {}, 'Units of production')), rows));
      if (Math.abs(sl - 3000) < 0.01 && ch.win()) onWin();
    };
    const sl = (label, key, min, max, step, fmt = money) => slider({ label, min, max, step, value: s[key], fmt, oninput: v => { s[key] = v; update(); } });
    el.append(h('h2', {}, '🎮 Depreciation lab ', h('span', { class: 'tag' }, 'HL only')),
      h('p', { class: 'muted' }, `A laser machine is expected to make ${TOTAL_UNITS.toLocaleString('en-US')} pairs over its life, more when it's new. Compare how the two methods reduce its book value.`), ch,
      h('div', { class: 'lab-grid' },
        h('div', {}, sl('Purchase cost', 'cost', 5000, 50000, 1000), sl('Residual value', 'res', 0, 10000, 500), sl('Life span (years)', 'yrs', 2, 10, 1, v => `${v} years`)),
        h('div', {}, kpis, chartBox, tableBox)));
    update();
  },

  // ------------------------------------------------------------ 3.5 / 3.6 ratio dashboard with business decisions
  ratios(el, lab, onWin) {
    const base = { cash: 8000, debtors: 6000, stock: 16000, overdraft: 2000, creditors: 10000, stl: 3000, ncl: 45000, shares: 64000, retained: 26000, ppe: 120000 };
    const PL = { rev: 180000, cos: 72000, gp: 108000, pbit: 48000 };
    let b = { ...base };
    const eff = lab.mode === 'efficiency';
    const kpis = h('div', { class: 'kpis' });
    const bsBox = h('div', { class: 'table-wrap' });
    const msg = h('div');
    const ch = challengeBox(eff
      ? 'Get <b>stock turnover under 60 days</b>, <b>debtor days under 10</b> and <b>gearing under 30%</b>.'
      : 'Get the <b>acid-test ratio to 1.5 or more</b> without pushing <b>gearing above 35%</b>.');

    const calc = () => {
      const ca = b.cash + b.debtors + b.stock, cl = b.overdraft + b.creditors + b.stl, eq = b.shares + b.retained, ce = b.ncl + eq;
      return {
        ca, cl, ce, cr: ca / cl, acid: (ca - b.stock) / cl, gpm: PL.gp / PL.rev * 100, pm: PL.pbit / PL.rev * 100, roce: PL.pbit / ce * 100,
        stockTimes: PL.cos / b.stock, stockDays: b.stock / PL.cos * 365, debtorDays: b.debtors / PL.rev * 365,
        creditorDays: b.creditors / PL.cos * 365, gearing: b.ncl / ce * 100
      };
    };
    const light = (v, good, warn) => good(v) ? 'good' : warn(v) ? 'warn' : 'bad';

    const actions = eff ? [
      { t: '📦 Switch to just-in-time: sell off $6k of stock', ok: () => b.stock >= 6000, run: () => { b.stock -= 6000; b.cash += 6000; },
        why: 'Less stock sitting around → stock turnover <b>days fall</b>. Risk: running out if demand spikes.' },
      { t: '💸 Offer 2% early-payment discount: collect $3k from debtors', ok: () => b.debtors >= 3000, run: () => { b.debtors -= 3000; b.cash += 3000; },
        why: 'Customers pay faster → <b>debtor days fall</b>. Cost: the discount slightly reduces profit.' },
      { t: '🤝 Negotiate 30 days more credit from suppliers', ok: () => b.creditors < 25000, run: () => { b.creditors += 5000; b.cash += 5000; },
        why: 'You keep cash longer → <b>creditor days rise</b>. Push too far and suppliers may stop giving credit.' },
      { t: '📈 Issue $15k shares to repay part of the loan', ok: () => b.ncl >= 15000, run: () => { b.ncl -= 15000; b.shares += 15000; },
        why: 'Less debt, more equity → <b>gearing falls</b>. The owners now share control with new shareholders.' },
      { t: '🏦 Borrow $20k long-term to buy a new machine', ok: () => true, run: () => { b.ncl += 20000; b.ppe += 20000; },
        why: 'More long-term debt → <b>gearing rises</b>.' }
    ] : [
      { t: '🏷️ Sell $4k of excess stock (at cost) for cash', ok: () => b.stock >= 4000, run: () => { b.stock -= 4000; b.cash += 4000; },
        why: 'Stock becomes cash: the current ratio stays the same, but the <b>acid test rises</b> (cash counts, stock doesn\'t).' },
      { t: '📞 Chase debtors: collect $3k', ok: () => b.debtors >= 3000, run: () => { b.debtors -= 3000; b.cash += 3000; },
        why: 'Debtors fall and cash rises by the same amount. Both are current assets, so <b>neither ratio changes</b>. Good for cash, not for the ratios.' },
      { t: '🏦 Take a $10k long-term bank loan', ok: () => true, run: () => { b.cash += 10000; b.ncl += 10000; },
        why: 'Cash up, but the debt is non-current, so <b>both liquidity ratios rise</b>. However, <b>gearing rises</b> too.' },
      { t: '💳 Use cash to pay off the overdraft', ok: () => b.overdraft > 0 && b.cash >= b.overdraft, run: () => { b.cash -= b.overdraft; b.overdraft = 0; },
        why: 'Current assets and current liabilities both fall. With a ratio above 1, the <b>current ratio rises</b>, but the acid test can fall.' },
      { t: '🚚 Buy $5k more stock on credit', ok: () => true, run: () => { b.stock += 5000; b.creditors += 5000; },
        why: 'Stock and creditors both rise → <b>both ratios fall</b> (the acid test most, because stock doesn\'t count).' },
      { t: '📈 Issue $10k of new shares', ok: () => true, run: () => { b.cash += 10000; b.shares += 10000; },
        why: 'Cash up and no new debt → liquidity rises and <b>gearing falls</b>. The cost: the owners give up some control.' }
    ];

    const update = () => {
      const r = calc();
      const items = eff ? [
        kpi(`${round(r.stockTimes, 1)}×`, `Stock turnover (${round(r.stockDays, 0)} days)`, light(r.stockDays, v => v < 60, v => v < 90)),
        kpi(`${round(r.debtorDays, 1)}`, 'Debtor days', light(r.debtorDays, v => v < 10, v => v < 30)),
        kpi(`${round(r.creditorDays, 1)}`, 'Creditor days', light(r.creditorDays, v => v >= 30 && v <= 75, v => v >= 20 && v <= 90)),
        kpi(pct(r.gearing), 'Gearing', light(r.gearing, v => v < 30, v => v <= 50)),
        kpi(round(r.cr, 2), 'Current ratio', light(r.cr, v => v >= 1.5 && v <= 2.5, v => v >= 1))
      ] : [
        kpi(pct(r.gpm), 'Gross profit margin'), kpi(pct(r.pm), 'Profit margin'), kpi(pct(r.roce), 'ROCE'),
        kpi(round(r.cr, 2), 'Current ratio', light(r.cr, v => v >= 1.5 && v <= 2.5, v => v >= 1)),
        kpi(round(r.acid, 2), 'Acid-test ratio', light(r.acid, v => v >= 1, v => v >= 0.8)),
        kpi(pct(r.gearing), 'Gearing', light(r.gearing, v => v <= 35, v => v <= 50))
      ];
      kpis.replaceChildren(...items);
      const line = (l, v, cls = '') => h('tr', { class: cls }, h('td', {}, l), h('td', {}, v.toLocaleString('en-US')));
      bsBox.replaceChildren(h('table', { class: 'fin' },
        h('tr', { class: 'head' }, h('td', {}, 'Current assets'), h('td', {})), line('Cash', b.cash), line('Debtors', b.debtors), line('Stock', b.stock), line('Total current assets', r.ca, 'total'),
        h('tr', { class: 'head' }, h('td', {}, 'Current liabilities'), h('td', {})), line('Overdraft', b.overdraft), line('Creditors', b.creditors), line('Short-term loans', b.stl), line('Total current liabilities', r.cl, 'total'),
        h('tr', { class: 'head' }, h('td', {}, 'Long-term'), h('td', {})), line('Non-current liabilities', b.ncl), line('Total equity', b.shares + b.retained), line('Capital employed', r.ce, 'total')));
      buttons.forEach((btn, i) => { btn.disabled = !actions[i].ok(); });
      const won = eff ? r.stockDays < 60 && r.debtorDays < 10 && r.gearing < 30 : r.acid >= 1.5 && r.gearing <= 35;
      if (won && ch.win()) onWin();
    };
    const buttons = actions.map(a => {
      const btn = h('button', { class: 'btn ghost small', style: 'text-align:left' }, a.t);
      btn.onclick = () => {
        const before = calc();
        a.run(); sfx('click');
        const after = calc();
        const delta = eff
          ? `Stock days ${round(before.stockDays, 0)} → ${round(after.stockDays, 0)} · debtor days ${round(before.debtorDays, 1)} → ${round(after.debtorDays, 1)} · creditor days ${round(before.creditorDays, 1)} → ${round(after.creditorDays, 1)} · gearing ${pct(before.gearing)} → ${pct(after.gearing)}`
          : `Current ratio ${round(before.cr, 2)} → ${round(after.cr, 2)} · acid test ${round(before.acid, 2)} → ${round(after.acid, 2)} · gearing ${pct(before.gearing)} → ${pct(after.gearing)}`;
        msg.replaceChildren(h('div', { class: 'example', html: `${a.why}<br><span class="small muted">${delta}</span>` }));
        update();
      };
      return btn;
    });
    el.append(h('h2', {}, eff ? '🎮 Efficiency control room ' : '🎮 Liquidity control room', eff ? h('span', { class: 'tag' }, 'HL only') : null),
      h('p', { class: 'muted' }, 'This is SoleFlip Ltd\'s real balance sheet from 3.4. Make business decisions and watch the ratios react. Green = healthy, yellow = watch it, red = problem.'),
      ch, kpis, h('div', { class: 'actions' }, buttons), msg,
      h('details', {}, h('summary', { class: 'muted' }, 'Show the balance sheet figures'), bsBox),
      h('button', { class: 'btn ghost small', style: 'margin-top:10px', onclick: () => { b = { ...base }; msg.replaceChildren(); update(); } }, '↺ Reset'),
      ...(eff ? [h('p', { class: 'muted small', style: 'margin-top:8px' }, 'Simplification: the closing stock is used as average stock, and P&L figures (revenue $180k, cost of sales $72k) stay fixed.')] : []));
    update();
  },

  // ------------------------------------------------------------ 3.7 cash flow forecast
  cashflow(el, lab, onWin) {
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    const SALES = [8000, 7000, 9000, 12000, 15000, 18000];
    const s = { credit: 50, supplierCredit: false, machine: 'cash', month: 2 };
    const OPENING = 5000, OD = -5000, FIXED = 6000, STOCK_PCT = 0.4, DEC_SALES = 10000;
    const tableBox = h('div', { class: 'table-wrap' });
    const chartBox = h('div');
    const kpis = h('div', { class: 'kpis' });
    const ch = challengeBox('Get the laser machine <b>and</b> never go below the <b>−$5,000 overdraft limit</b> <b>and</b> finish June with <b>at least $5,000</b>.');
    const update = () => {
      const sales = SALES.map((v, i) => v + (s.machine !== 'none' && i > s.month ? 3000 : 0)); // machine adds custom-design sales from the month after
      let bal = OPENING;
      const rows = { open: [], inSales: [], inLoan: [], outStock: [], outFixed: [], outMachine: [], net: [], close: [] };
      sales.forEach((v, i) => {
        const prev = i ? sales[i - 1] : DEC_SALES;
        const inflowSales = v * (1 - s.credit / 100) + prev * (s.credit / 100);
        const loan = s.machine === 'loan' && i === s.month ? 20000 : 0;
        const stock = (s.supplierCredit ? prev : v) * STOCK_PCT;
        let mach = 0;
        if (s.machine === 'cash' && i === s.month) mach = 20000;
        if (s.machine === 'lease' && i >= s.month) mach = 900;
        if (s.machine === 'loan' && i === s.month) mach = 20000;
        if (s.machine === 'loan' && i > s.month) mach = 450; // repayment + interest
        const net = inflowSales + loan - stock - FIXED - mach;
        rows.open.push(bal); rows.inSales.push(inflowSales); rows.inLoan.push(loan); rows.outStock.push(stock);
        rows.outFixed.push(FIXED); rows.outMachine.push(mach); rows.net.push(net);
        bal += net; rows.close.push(bal);
      });
      const r = (label, arr, cls = '') => h('tr', { class: cls }, h('td', {}, label), ...arr.map(v => h('td', { class: v < 0 ? 'neg' : '' }, Math.round(v).toLocaleString('en-US'))));
      tableBox.replaceChildren(h('table', { class: 'fin' }, h('tr', {}, h('th', {}, ''), ...MONTHS.map(m => h('th', {}, m))),
        r('Opening balance', rows.open), h('tr', { class: 'head' }, h('td', {}, 'Cash in'), ...MONTHS.map(() => h('td', {}))),
        r('Sales received', rows.inSales), r('Bank loan', rows.inLoan),
        h('tr', { class: 'head' }, h('td', {}, 'Cash out'), ...MONTHS.map(() => h('td', {}))),
        r('Stock', rows.outStock), r('Rent + wages', rows.outFixed), r('Machine / lease / loan', rows.outMachine),
        r('Net cash flow', rows.net, 'total'), r('Closing balance', rows.close, 'total')));
      chartBox.replaceChildren(lineChart([{ name: 'Closing balance', color: 'var(--chart-1)', points: rows.close.map((v, i) => [i, v]), dots: true }],
        { xTicks: [0, 1, 2, 3, 4, 5], xFmt: x => MONTHS[x], yMin: Math.min(OD - 2000, ...rows.close), hLines: [{ y: OD, label: 'overdraft limit', color: 'var(--bad)' }] }));
      const low = Math.min(...rows.close), end = rows.close[5];
      kpis.replaceChildren(kpi(money(low), 'Lowest balance', low < OD ? 'bad' : low < 0 ? 'warn' : 'good'), kpi(money(end), 'June closing', end >= 5000 ? 'good' : 'warn'),
        kpi(money(sales.reduce((a, b) => a + b, 0)), 'Total sales Jan–Jun'));
      if (s.machine !== 'none' && low >= OD && end >= 5000 && ch.win()) onWin();
    };
    const select = (label, opts, key, cast = v => v) => {
      const sel = h('select', {}, opts.map(([v, t]) => h('option', { value: v, selected: String(s[key]) === String(v) }, t)));
      sel.onchange = () => { s[key] = cast(sel.value); sfx('click'); update(); };
      return h('div', { class: 'slider' }, h('label', {}, label), sel);
    };
    el.append(h('h2', {}, '🎮 SoleFlip cash flow forecast'),
      h('p', { class: 'muted' }, 'Opening cash $5,000. Rent and wages $6,000 a month. Stock costs 40% of sales. The $20,000 laser machine adds about $3,000 of sales a month once it is running. Change how they run things.'),
      ch,
      h('div', { class: 'lab-grid' },
        h('div', {},
          slider({ label: 'Sales on credit (paid next month)', min: 0, max: 100, step: 10, value: s.credit, fmt: v => `${v}%`, oninput: v => { s.credit = v; update(); } }),
          select('Pay suppliers for stock', [[false, 'Same month (cash)'], [true, 'Next month (trade credit)']], 'supplierCredit', v => v === 'true'),
          select('Laser machine: how to pay?', [['cash', 'Buy with cash ($20,000)'], ['loan', 'Bank loan ($450/month)'], ['lease', 'Lease ($900/month)'], ['none', "Don't get it"]], 'machine'),
          select('Month to get the machine', MONTHS.map((m, i) => [i, m]), 'month', Number)),
        h('div', {}, kpis, chartBox)),
      tableBox);
    update();
  },

  // ------------------------------------------------------------ 3.8 investment appraisal
  investment(el, lab, onWin) {
    const P = {
      A: { name: 'A · Laser machine', cost: 20000, flows: [6000, 8000, 9000, 7000, 0], color: 'var(--chart-1)' },
      B: { name: 'B · Second pop-up store', cost: 20000, flows: [2000, 4000, 8000, 10000, 12000], color: 'var(--chart-2)' }
    };
    let rate = 6;
    const resBox = h('div');
    const chartBox = h('div');
    const ch = challengeBox('<span class="tag">HL</span> Find the <b>lowest whole-number discount rate</b> at which Project B\'s NPV turns <b>negative</b>.');

    const df = (r, n) => round(1 / (1 + r / 100) ** n, 4); // exam tables use 4 decimal places
    const years = p => { let n = p.flows.length; while (n > 0 && !p.flows[n - 1]) n--; return n; };
    const payback = p => {
      let cum = -p.cost;
      for (let i = 0; i < p.flows.length; i++) {
        if (cum + p.flows[i] >= 0) {
          const m = Math.ceil(-cum / p.flows[i] * 12 - 1e-9);
          return m === 12 ? { y: i + 1, m: 0 } : { y: i, m };
        }
        cum += p.flows[i];
      }
      return null;
    };
    const arr = p => { const n = years(p); return n ? ((p.flows.reduce((a, b) => a + b, 0) - p.cost) / n) / p.cost * 100 : 0; };
    const npv = (p, r) => p.flows.reduce((a, f, i) => a + f * df(r, i + 1), 0) - p.cost;

    const update = () => {
      const res = Object.values(P).map(p => ({ p, pb: payback(p), arr: arr(p), npv: npv(p, rate) }));
      const best = (fn, better) => res.reduce((a, b) => (better(fn(b), fn(a)) ? b : a));
      const pbMonths = x => x.pb ? x.pb.y * 12 + x.pb.m : Infinity;
      const wPb = best(pbMonths, (a, b) => a < b), wArr = best(x => x.arr, (a, b) => a > b), wNpv = best(x => x.npv, (a, b) => a > b);
      resBox.replaceChildren(h('div', { class: 'table-wrap' }, h('table', { class: 'fin' },
        h('tr', {}, h('th', {}, ''), ...res.map(x => h('th', {}, x.p.name))),
        h('tr', {}, h('td', {}, 'Payback'), ...res.map(x => h('td', {}, (x.pb ? `${x.pb.y} yrs ${x.pb.m} mths` : 'not within 5 yrs') + (x === wPb ? ' 🏆' : '')))),
        h('tr', {}, h('td', {}, 'ARR'), ...res.map(x => h('td', {}, pct(x.arr) + (x === wArr ? ' 🏆' : '')))),
        h('tr', {}, h('td', {}, `NPV at ${rate}% (HL)`), ...res.map(x => h('td', { class: x.npv < 0 ? 'neg' : '' }, money(x.npv, 2) + (x === wNpv ? ' 🏆' : '')))))),
        h('p', { class: 'muted small', style: 'margin-top:8px' },
          wPb === wArr && wArr === wNpv ? `${wPb.p.name} wins on every method.` : 'The methods disagree! Payback rewards getting your money back fast (less risk); ARR and NPV reward total profit. That is exactly what "evaluate" questions want you to discuss.'));
      chartBox.replaceChildren(lineChart(Object.values(P).map(p => {
        let c = -p.cost;
        return { name: `${p.name.split(' · ')[0]} cumulative cash`, color: p.color, dots: true, points: [[0, c], ...p.flows.map((f, i) => [i + 1, (c += f)])] };
      }), { xLabel: 'Year', xTicks: [0, 1, 2, 3, 4, 5], xFmt: x => String(x), yMin: -20000 }));
      if (npv(P.B, rate) < 0 && npv(P.B, rate - 1) >= 0 && ch.win(`Spot on: at ${rate}% Project B's NPV turns negative. (That break-even rate is called the IRR, which you don't need for IB.)`)) onWin();
    };
    const editor = p => {
      const inp = (val, on) => { const i = h('input', { type: 'number', value: val, step: 500, style: 'max-width:110px;padding:6px 8px' }); i.oninput = () => { on(+i.value || 0); update(); }; return i; };
      return h('div', { class: 'card flat', style: 'background:var(--card-2)' }, h('h3', {}, p.name),
        h('div', { class: 'row small' }, h('span', {}, 'Cost'), inp(p.cost, v => { p.cost = v; })),
        h('div', { class: 'row small', style: 'margin-top:6px' }, p.flows.map((f, i) => h('span', { class: 'row', style: 'gap:4px' }, `Y${i + 1}`, inp(f, v => { p.flows[i] = v; })))));
    };
    el.append(h('h2', {}, '🎮 Investment showdown'),
      h('p', { class: 'muted' }, 'SoleFlip can afford only one project. Edit the forecasts and the discount rate, and see which project each method prefers.'), ch,
      slider({ label: 'Discount rate (for NPV)', min: 1, max: 25, step: 1, value: rate, fmt: v => `${v}%`, oninput: v => { rate = v; update(); } }),
      resBox, chartBox, editor(P.A), editor(P.B));
    update();
  },

  // ------------------------------------------------------------ 3.9 variance analysis
  variance(el, lab, onWin) {
    const ROWS = [
      { item: 'Revenue', type: 'rev', budget: 24000, actual: 21500 },
      { item: 'Stock purchases', type: 'cost', budget: 9000, actual: 8100 },
      { item: 'Wages', type: 'cost', budget: 5000, actual: 5600 },
      { item: 'Marketing', type: 'cost', budget: 1500, actual: 1200 },
      { item: 'Utilities', type: 'cost', budget: 400, actual: 460 }
    ];
    const ch = challengeBox('Fill in every variance (amount + F or A) correctly.');
    const inputs = ROWS.map(r => {
      const amt = h('input', { type: 'text', inputmode: 'decimal', placeholder: '$', style: 'max-width:100px;padding:6px 8px' });
      const sel = h('select', { style: 'max-width:90px;padding:6px 8px' }, h('option', { value: '' }, '?'), h('option', { value: 'F' }, 'F'), h('option', { value: 'A' }, 'A'));
      return { r, amt, sel, mark: h('span') };
    });
    const check = h('button', { class: 'btn', style: 'margin-top:12px' }, 'Check');
    const result = h('div');
    check.onclick = () => {
      let all = true;
      for (const x of inputs) {
        const diff = x.r.actual - x.r.budget;
        const want = x.r.type === 'rev' ? (diff >= 0 ? 'F' : 'A') : (diff <= 0 ? 'F' : 'A');
        const ok = Math.abs((parseFloat(x.amt.value.replace(/[$,\s−-]/g, '')) || -1) - Math.abs(diff)) < 0.5 && x.sel.value === want;
        x.mark.textContent = ok ? '✅' : `❌ ${Math.abs(diff).toLocaleString('en-US')} ${want}`;
        if (!ok) all = false;
      }
      sfx(all ? 'good' : 'bad');
      const bp = ROWS[0].budget - ROWS.slice(1).reduce((a, r) => a + r.budget, 0);
      const ap = ROWS[0].actual - ROWS.slice(1).reduce((a, r) => a + r.actual, 0);
      result.replaceChildren(h('div', { class: `feedback ${all ? 'good' : 'bad'}`, html: all
        ? `<b>All correct!</b> Budgeted profit ${money(bp)}, actual ${money(ap)}: <b>${money(Math.abs(ap - bp))} ${ap >= bp ? 'favourable' : 'adverse'}</b> overall. Notice the link: lower sales → less stock bought (favourable), but that isn't a real saving.`
        : 'Some are off. Remember: for <b>costs</b>, spending more than budget is adverse; for <b>revenue</b>, earning less is adverse.' }));
      if (all && ch.win()) onWin();
    };
    el.append(h('h2', {}, '🎮 Variance detective ', h('span', { class: 'tag' }, 'HL only')),
      h('p', { class: 'muted' }, 'SoleFlip online shop, July. Work out each variance (actual − budget), then decide: good for profit (F) or bad for profit (A)?'), ch,
      h('div', { class: 'table-wrap' }, h('table', { class: 'fin' },
        h('tr', {}, h('th', {}, 'Item'), h('th', {}, 'Budget'), h('th', {}, 'Actual'), h('th', {}, 'Variance $'), h('th', {}, 'F/A'), h('th', {}, '')),
        inputs.map(x => h('tr', {}, h('td', {}, x.r.item), h('td', {}, x.r.budget.toLocaleString('en-US')), h('td', {}, x.r.actual.toLocaleString('en-US')),
          h('td', {}, x.amt), h('td', {}, x.sel), h('td', {}, x.mark))))),
      check, result);
  },

  // ------------------------------------------------------------ 2.2 span of control and levels of hierarchy
  structure(el, lab, onWin) {
    const s = { n: 40, span: 3 };
    const kpis = h('div', { class: 'kpis' });
    const chart = h('div', { class: 'pyramid' });
    const note = h('p', { class: 'muted small' });
    const challenges = challengeList([
      'With <b>40 staff</b>, make a <b>flat</b> structure: no more than 3 levels of hierarchy.',
      'Keep 40 staff in 3 levels, using the <b>narrowest</b> span of control that still works.',
      'With <b>120 staff</b>, find the smallest span of control that fits them into <b>4 levels</b>.'
    ], onWin);
    // Fill the hierarchy from the top: level k holds at most span^k people.
    const layers = (n, span) => {
      const out = [];
      for (let left = n, k = 0; left > 0; k++) { const c = Math.min(span ** k, left); out.push(c); left -= c; }
      return out;
    };
    const update = () => {
      const ls = layers(s.n, s.span), levels = ls.length;
      // Managers = everyone in the levels above the bottom one who has someone reporting to them.
      let managers = 0;
      for (let k = 0; k < levels - 1; k++) managers += k < levels - 2 ? ls[k] : Math.ceil(ls[k + 1] / s.span);
      kpis.replaceChildren(kpi(levels, 'Levels of hierarchy', levels <= 3 ? 'good' : levels >= 5 ? 'bad' : 'warn'),
        kpi(managers, 'People managing others'), kpi(`${Math.round(600 / s.span)} min`, 'Weekly time a manager has per direct report'));
      const max = Math.max(...ls);
      chart.replaceChildren(...ls.map((c, k) => h('div', { class: 'pyr-row' },
        h('span', { class: 'pyr-l' }, `L${k + 1}`),
        h('div', { class: 'pyr-track' }, h('span', { style: `width:${Math.max(4, c / max * 100)}%` })),
        h('span', { class: 'pyr-n' }, c))));
      note.innerHTML = levels >= 5
        ? '<b>Tall structure:</b> narrow spans, close supervision and clear promotion steps, but messages pass through many levels and decisions are slow.'
        : levels <= 3
          ? '<b>Flat structure:</b> short chain of command and fast communication, but each manager has many direct reports, so staff need to work without close supervision.'
          : 'Somewhere in between. Change the span and watch the number of levels and managers.';
      challenges.check([s.n === 40 && levels <= 3, s.n === 40 && levels === 3 && s.span === 6, s.n === 120 && levels === 4 && s.span === 5]);
    };
    el.append(h('h2', {}, `🎮 ${lab.title || 'Design SoleFlip\'s hierarchy'}`),
      h('p', { class: 'muted' }, 'Choose how many staff SoleFlip has and how many people report to each manager. Each manager has about 10 hours a week for their team.'), challenges,
      h('div', { class: 'lab-grid' },
        h('div', {}, slider({ label: 'Staff (including Noah at the top)', min: 10, max: 120, step: 5, value: s.n, oninput: v => { s.n = v; update(); } }),
          slider({ label: 'Span of control', min: 2, max: 10, value: s.span, oninput: v => { s.span = v; update(); } }), kpis),
        h('div', {}, chart, note)));
    update();
  },

  // ------------------------------------------------------------ 2.4 time rate vs piece rate
  payschemes(el, lab, onWin) {
    const HOURS = 30, RATE = 20, TIME_PAY = HOURS * RATE;   // time rate: $20 an hour for a 30-hour week
    const s = { pairs: 50, piece: 8 };
    const kpis = h('div', { class: 'kpis' });
    const chartBox = h('div');
    const note = h('p', { class: 'muted small' });
    const challenges = challengeList([
      'At <b>$8 a pair</b>, find the weekly output where piece rate pays Omar <b>exactly the same</b> as time rate.',
      'Omar makes <b>100 pairs</b> a week. Set a piece rate that pays him <b>at least $50 more</b> than time rate, while SoleFlip\'s labour cost stays at <b>$7 a pair or less</b>.'
    ], onWin);
    const update = () => {
      const piecePay = s.pairs * s.piece, diff = piecePay - TIME_PAY;
      kpis.replaceChildren(kpi(money(TIME_PAY), 'Time rate pay (30 h × $20)'), kpi(money(piecePay), 'Piece rate pay', diff >= 0 ? 'good' : 'bad'),
        kpi(money(TIME_PAY / s.pairs, 2), 'Labour cost per pair on time rate'), kpi(money(s.piece, 2), 'Labour cost per pair on piece rate'));
      chartBox.replaceChildren(barChart([
        { label: 'Time rate', value: TIME_PAY, color: 'var(--chart-3)' },
        { label: 'Piece rate', value: piecePay, color: 'var(--chart-1)' }], { showValues: true, title: 'Omar\'s weekly pay' }));
      note.innerHTML = diff > 0
        ? `Piece rate pays <b>${money(diff)} more</b>. Fast workers love it, but watch out: rushing can hurt quality, and pay drops if there is no work.`
        : diff < 0
          ? `Time rate pays <b>${money(-diff)} more</b>. Time rate is safer for Omar and better for careful work, but it doesn't reward extra effort.`
          : 'Both schemes pay the same at this output.';
      challenges.check([s.piece === 8 && piecePay === TIME_PAY, s.pairs === 100 && diff >= 50 && s.piece <= 7]);
    };
    el.append(h('h2', {}, `🎮 ${lab.title || 'Time rate or piece rate?'}`),
      h('p', { class: 'muted' }, 'Omar customises sneakers. Compare paying him by the hour with paying him per pair finished.'), challenges,
      h('div', { class: 'lab-grid' },
        h('div', {}, slider({ label: 'Pairs finished per week', min: 20, max: 120, step: 5, value: s.pairs, oninput: v => { s.pairs = v; update(); } }),
          slider({ label: 'Piece rate per pair', min: 4, max: 15, step: 0.5, value: s.piece, fmt: v => money(v, 2), oninput: v => { s.piece = v; update(); } }), kpis),
        h('div', {}, chartBox, note)));
    update();
  },

  // ------------------------------------------------------------ 4.2 perception (positioning) map
  position(el, lab, onWin) {
    // x = price (1 cheap … 10 expensive), y = style (1 classic/plain … 10 bold/statement)
    const RIVALS = [
      { n: 'Nike AF1', x: 5, y: 3 }, { n: 'Adidas Samba', x: 5, y: 4 }, { n: 'Veja', x: 6, y: 2 },
      { n: 'H&M basics', x: 2, y: 2 }, { n: 'Crocs collabs', x: 2, y: 9 }, { n: 'KickBack customs', x: 8, y: 8 },
      { n: 'Balenciaga', x: 10, y: 9 }];
    const s = { x: 3, y: 5 };
    const mapBox = h('div');
    const kpis = h('div', { class: 'kpis' });
    const note = h('p', { class: 'muted small' });
    const challenges = challengeList([
      'Find <b>any gap</b> in the market: a spot at least 2.5 squares from every rival.',
      'Find a gap that fits SoleFlip\'s <b>target market</b> (teens on a budget who want bold designs): price <b>6 or lower</b> and style <b>7 or higher</b>.'
    ], onWin);
    const S = 30, O = 34;   // grid square size and offset
    const X = v => O + (v - 0.5) * S, Y = v => O + (10.5 - v) * S;
    const update = () => {
      const near = RIVALS.map(r => ({ ...r, d: Math.hypot(r.x - s.x, r.y - s.y) })).sort((a, b) => a.d - b.d)[0];
      const gap = near.d >= 2.5, fits = gap && s.x <= 6 && s.y >= 7;
      const root = svg('svg', { viewBox: `0 0 ${O * 2 + S * 10} ${O * 2 + S * 10}`, class: 'chart', role: 'img', 'aria-label': 'Perception map' });
      const mid = O + 5 * S;
      root.append(svg('line', { x1: O, x2: O + S * 10, y1: mid, y2: mid, stroke: 'var(--muted)' }),
        svg('line', { x1: mid, x2: mid, y1: O, y2: O + S * 10, stroke: 'var(--muted)' }),
        svg('text', { x: O + S * 10, y: mid - 6, 'text-anchor': 'end' }, 'High price →'),
        svg('text', { x: O, y: mid - 6 }, '← Low price'),
        svg('text', { x: mid + 6, y: O + 10 }, 'Bold / statement'),
        svg('text', { x: mid + 6, y: O + S * 10 - 4 }, 'Classic / plain'));
      root.append(svg('circle', { cx: X(s.x), cy: Y(s.y), r: S * 2.5, fill: gap ? 'var(--good)' : 'var(--bad)', 'fill-opacity': .12 }));
      for (const r of RIVALS) root.append(svg('circle', { cx: X(r.x), cy: Y(r.y), r: 7, fill: 'var(--chart-3)' }),
        svg('text', { x: X(r.x), y: Y(r.y) - 11, 'text-anchor': 'middle' }, r.n));
      root.append(svg('circle', { cx: X(s.x), cy: Y(s.y), r: 9, fill: 'var(--accent)' }),
        svg('text', { x: X(s.x), y: Y(s.y) + 22, 'text-anchor': 'middle', style: 'fill:var(--accent);font-weight:700' }, 'Originals'));
      mapBox.replaceChildren(root);
      kpis.replaceChildren(kpi(near.n, 'Closest rival'), kpi(round(near.d, 1), 'Distance to it', gap ? 'good' : 'bad'));
      note.innerHTML = fits
        ? 'A gap that fits the target market: bold designs at a price teens can afford. Now check there is real <b>demand</b> there (market research, 4.4).'
        : gap
          ? 'This is a gap, but does it fit SoleFlip\'s customers? A gap in the market is only useful if there is a market in the gap.'
          : `Crowded: you would compete head-on with <b>${near.n}</b>, which has a bigger budget. You'd need a strong USP to win.`;
      challenges.check([gap, fits]);
    };
    el.append(h('h2', {}, `🎮 ${lab.title || 'Position SoleFlip Originals'}`),
      h('p', { class: 'muted' }, 'This perception map shows how teen customers see sneaker brands. Move SoleFlip\'s new sneaker around it.'), challenges,
      h('div', { class: 'lab-grid' },
        h('div', {}, slider({ label: 'Price (1 = cheap, 10 = luxury)', min: 1, max: 10, value: s.x, oninput: v => { s.x = v; update(); } }),
          slider({ label: 'Style (1 = plain, 10 = bold)', min: 1, max: 10, value: s.y, oninput: v => { s.y = v; update(); } }), kpis, note),
        h('div', {}, mapBox)));
    update();
  },

  // ------------------------------------------------------------ 4.3 moving averages and forecasting (HL)
  forecast(el, lab, onWin) {
    // SoleFlip online sales, $000 per quarter. Trend rises $2k a quarter; seasonal variations Q1 −4, Q2 +2, Q3 −6, Q4 +8.
    const DATA = [16, 24, 18, 34, 24, 32, 26, 42, 32, 40, 34, 50];
    const qName = i => `Y${Math.floor(i / 4) + 1} Q${i % 4 + 1}`;
    const s = { mode: 3, fc: 30 };
    const ma = mode => DATA.map((_, i) => {
      if (mode === 3) return i >= 1 && i <= 10 ? (DATA[i - 1] + DATA[i] + DATA[i + 1]) / 3 : null;
      if (i < 2 || i > 9) return null;
      const a = DATA.slice(i - 2, i + 2).reduce((x, y) => x + y, 0), b = DATA.slice(i - 1, i + 3).reduce((x, y) => x + y, 0);
      return (a + b) / 8;
    });
    const chartBox = h('div');
    const tableBox = h('div', { class: 'table-wrap' });
    const note = h('p', { class: 'muted small' });
    const challenges = challengeList([
      'Pick the moving average that <b>removes the seasonal pattern</b> and leaves a smooth trend.',
      'Forecast sales for <b>Y4 Q1</b>: extend the trend, then add the average Q1 seasonal variation.'
    ], onWin);
    const b3 = h('button', { class: 'btn small', onclick: () => { s.mode = 3; update(); } }, '3-part');
    const b4 = h('button', { class: 'btn small', onclick: () => { s.mode = 4; update(); } }, '4-part centred');
    const update = () => {
      const m = ma(s.mode);
      b3.className = `btn small${s.mode === 3 ? '' : ' ghost'}`;
      b4.className = `btn small${s.mode === 4 ? '' : ' ghost'}`;
      chartBox.replaceChildren(lineChart([
        { name: 'Actual sales', color: 'var(--chart-1)', points: DATA.map((v, i) => [i + 1, v]), dots: true },
        { name: 'Moving average (trend)', color: 'var(--chart-2)', points: m.map((v, i) => [i + 1, v]).filter(p => p[1] != null) },
        { name: 'Your forecast', color: 'var(--accent)', points: [[13, s.fc]], dots: true }
      ], { xLabel: 'Quarter ($000 of sales)', xTicks: [1, 5, 9, 13], xFmt: x => qName(x - 1) }));
      tableBox.replaceChildren(h('table', { class: 'fin' },
        h('tr', {}, h('th', {}, 'Quarter'), h('th', {}, 'Sales'), h('th', {}, 'Trend'), h('th', {}, 'Variation')),
        DATA.map((v, i) => h('tr', {}, h('td', {}, qName(i)), h('td', {}, v),
          h('td', {}, m[i] == null ? '' : round(m[i], 2)), h('td', {}, m[i] == null ? '' : round(v - m[i], 2))))));
      note.innerHTML = s.mode === 3
        ? 'A 3-part average mixes different quarters each time, so the seasonal ups and downs still show. Sales data with <b>4 seasons</b> needs a 4-part average.'
        : 'Smooth! Each 4-part average contains one of every quarter, so the seasonal effects cancel out. Centring puts each average on a real quarter. Variation = actual − trend.';
      challenges.check([s.mode === 4, s.fc === 40]);
    };
    el.append(h('h2', {}, `🎮 ${lab.title || 'Forecast SoleFlip\'s online sales'} `, h('span', { class: 'tag' }, 'HL only')),
      h('p', { class: 'muted' }, 'Three years of quarterly online sales ($000). The app calculates the moving averages for you (you won\'t need to in the exam): find the trend, then forecast the next quarter.'), challenges,
      h('div', { class: 'lab-grid' },
        h('div', {}, h('div', { class: 'row', style: 'margin-bottom:12px' }, b3, b4),
          slider({ label: 'Your forecast for Y4 Q1 ($000)', min: 20, max: 60, value: s.fc, oninput: v => { s.fc = v; update(); } }), note),
        h('div', {}, chartBox, tableBox)));
    update();
  },

  // ------------------------------------------------------------ 4.5 product life cycle and extension strategies
  plc(el, lab, onWin) {
    const base = t => t <= 0 ? 0 : 1000 * (t / 24) ** 2 * Math.exp(2 * (1 - t / 24));   // launch at month 6, peak at month 30
    const ext = u => u <= 0 ? 0 : 400 * (u / 10) ** 2 * Math.exp(2 * (1 - u / 10));
    const s = { m: 6, ext: 0 };
    const sales = m => Math.round(base(m - 6) + (s.ext ? ext(m - s.ext) : 0));
    // Monthly cash flow: $40 contribution a pair, minus development ($8k/month) or marketing ($10k/month until month 17, then $4k).
    const cash = m => m < 6 ? -8000 : sales(m) * 40 - (m < 18 ? 10000 : 4000);
    const stage = m => m < 6 ? 'Development' : m < 14 ? 'Introduction' : m < 28 ? 'Growth' : m < 46 ? 'Maturity' : 'Decline';
    const firstPositive = () => { for (let m = 0; m <= 60; m++) if (cash(m) > 0) return m; return -1; };
    const kpis = h('div', { class: 'kpis' });
    const chartBox = h('div');
    const note = h('p', { class: 'muted small' });
    const challenges = challengeList([
      'Move to the <b>first month</b> when SoleFlip Originals brings in a <b>positive monthly cash flow</b>.',
      'Time an extension strategy so monthly sales stay at <b>700 pairs or more</b> from month 30 all the way to month 60.'
    ], onWin);
    const months = [...Array(61)].map((_, i) => i);
    const update = () => {
      kpis.replaceChildren(kpi(stage(s.m), 'Stage'), kpi(sales(s.m), 'Pairs sold this month'),
        kpi(money(cash(s.m)), 'Cash flow this month', cash(s.m) >= 0 ? 'good' : 'bad'));
      chartBox.replaceChildren(lineChart([
        { name: 'Sales (pairs)', color: 'var(--chart-1)', points: months.map(m => [m, sales(m)]) },
        { name: 'Cash flow ($00)', color: 'var(--chart-2)', points: months.map(m => [m, cash(m) / 100]) }
      ], { xLabel: 'Months since development began', xTicks: [0, 6, 14, 28, 46, 60], xFmt: x => String(x),
        markers: [{ x: s.m, label: stage(s.m), color: 'var(--accent)' }].concat(s.ext ? [{ x: s.ext, label: 'extension', color: 'var(--chart-3)' }] : []),
        hLines: [{ y: 700, label: '700 pairs', color: 'var(--chart-4)' }] }));
      const st = stage(s.m);
      note.innerHTML = st === 'Development' ? 'Designing and testing: costs but no sales, so cash flow is negative.'
        : st === 'Introduction' ? 'Launched: sales are low and marketing is expensive. Cash flow is usually still negative.'
          : st === 'Growth' ? 'Sales rise fast, competitors notice, and cash flow turns positive.'
            : st === 'Maturity' ? 'Sales peak and level off. Marketing costs fall, so this is the best time for cash. Plan an extension strategy now.'
              : 'Sales fall. Without an extension strategy, the product will eventually be withdrawn.';
      let held = s.ext > 0;
      for (let m = 30; m <= 60; m++) if (sales(m) < 700) held = false;
      challenges.check([s.m === firstPositive(), held]);
    };
    el.append(h('h2', {}, `🎮 ${lab.title || 'The life of SoleFlip Originals'}`),
      h('p', { class: 'muted' }, 'Move through the product\'s life. An extension strategy (e.g. new colourways and a German launch) adds a second wave of sales.'), challenges,
      h('div', { class: 'lab-grid' },
        h('div', {}, slider({ label: 'Month', min: 0, max: 60, value: s.m, oninput: v => { s.m = v; update(); } }),
          slider({ label: 'Launch extension strategy in month', min: 0, max: 60, value: s.ext, fmt: v => v ? `month ${v}` : 'none', oninput: v => { s.ext = v; update(); } }), kpis, note),
        h('div', {}, chartBox)));
    update();
  },

  // ------------------------------------------------------------ 5.4 location: weighted factor scoring
  location(el, lab, onWin) {
    const FACTORS = ['Cheap land and rent', 'Low labour costs', 'Near customers', 'Near the Porto factory', 'Skilled labour'];
    const SITES = [
      { n: 'Copenhagen', sc: [1, 1, 5, 2, 5] },
      { n: 'Køge', sc: [4, 2, 4, 2, 3] },
      { n: 'Porto', sc: [5, 5, 1, 5, 3] }];
    const w = [3, 3, 3, 3, 3];
    const tableBox = h('div', { class: 'table-wrap' });
    const chartBox = h('div');
    const challenges = challengeList([
      'Change the weights so <b>Copenhagen</b> wins.',
      'Change the weights so <b>Køge</b> wins.'
    ], onWin);
    const update = () => {
      const tot = SITES.map(st => st.sc.reduce((a, v, i) => a + v * w[i], 0));
      const best = Math.max(...tot), winners = SITES.filter((_, i) => tot[i] === best);
      const win = winners.length === 1 ? winners[0].n : null;
      tableBox.replaceChildren(h('table', { class: 'fin' },
        h('tr', {}, h('th', {}, 'Factor (weight)'), SITES.map(st => h('th', {}, st.n))),
        FACTORS.map((f, i) => h('tr', {}, h('td', {}, `${f} (×${w[i]})`), SITES.map(st => h('td', {}, st.sc[i])))),
        h('tr', { class: 'total' }, h('td', {}, 'Weighted score'), tot.map(t => h('td', {}, t)))));
      chartBox.replaceChildren(barChart(SITES.map((st, i) => ({ label: st.n, value: tot[i], color: st.n === win ? 'var(--good)' : 'var(--chart-1)' })), { showValues: true }));
      challenges.check([win === 'Copenhagen', win === 'Køge']);
    };
    el.append(h('h2', {}, `🎮 ${lab.title || 'Where should the new workshop go?'}`),
      h('p', { class: 'muted' }, 'Each site is scored 1–5 on each factor. Weight the factors by how much they matter to SoleFlip (0 = not at all, 5 = a lot).'), challenges,
      h('div', { class: 'lab-grid' },
        h('div', {}, FACTORS.map((f, i) => slider({ label: f, min: 0, max: 5, value: w[i], oninput: v => { w[i] = v; update(); } }))),
        h('div', {}, chartBox, tableBox, h('p', { class: 'muted small', html: 'The scores are objective-looking, but the <b>weights</b> are judgements about priorities. Change them and the "best" site changes. Exam answers should say which factors matter most <i>for this business</i>, and why.' }))));
    update();
  },

  // ------------------------------------------------------------ 5.5 break-even, margin of safety and target profit
  breakeven(el, lab, onWin) {
    const s = { p: 120, vc: 35, fc: 1500, q: 30 };
    const kpis = h('div', { class: 'kpis' });
    const chartBox = h('div');
    const note = h('p', { class: 'muted small' });
    const challenges = challengeList([
      'Keep the costs at $35 and $1,500. Change only the <b>price</b> so the break-even quantity is <b>12 pairs</b>.',
      'Price $120, variable cost $35: cut the <b>fixed costs</b> so break-even is exactly <b>10 pairs</b>.',
      'Back to $120, $35 and $1,500: find the output that makes the <b>target profit of $1,900</b>.'
    ], onWin);
    const update = () => {
      const c = s.p - s.vc, beq = c > 0 ? Math.ceil(s.fc / c) : null;
      const profit = c * s.q - s.fc, mos = beq == null ? null : s.q - beq;
      kpis.replaceChildren(kpi(money(c), 'Contribution per pair'),
        kpi(beq == null ? 'never' : `${round(s.fc / c, 1)} → ${beq}`, 'Break-even quantity (pairs)'),
        kpi(mos == null ? '–' : mos, 'Margin of safety (pairs)', mos == null || mos < 0 ? 'bad' : 'good'),
        kpi(money(profit), profit >= 0 ? 'Profit' : 'Loss', profit >= 0 ? 'good' : 'bad'));
      const qs = [0, 60];
      chartBox.replaceChildren(lineChart([
        { name: 'Total revenue', color: 'var(--chart-2)', points: qs.map(q => [q, s.p * q]) },
        { name: 'Total cost', color: 'var(--chart-4)', points: qs.map(q => [q, s.fc + s.vc * q]) },
        { name: 'Fixed cost', color: 'var(--chart-3)', points: qs.map(q => [q, s.fc]), dash: '6 4' }
      ], { xLabel: 'Pairs sold per month', xTicks: [0, 15, 30, 45, 60],
        markers: [{ x: s.q, label: `output ${s.q}`, color: 'var(--accent)' }].concat(beq != null && beq <= 60 ? [{ x: s.fc / c, label: 'BEQ', color: 'var(--muted)' }] : []) }));
      note.innerHTML = c <= 0
        ? '⚠️ Price is not above variable cost, so each pair adds nothing towards fixed costs. SoleFlip can never break even.'
        : `Each pair contributes <b>${money(c)}</b> towards fixed costs, then profit. ${mos >= 0 ? `Sales could fall by <b>${mos} pairs</b> before SoleFlip makes a loss.` : `SoleFlip is <b>${-mos} pairs</b> short of break-even.`}`;
      const orig = s.p === 120 && s.vc === 35;
      challenges.check([s.vc === 35 && s.fc === 1500 && beq === 12, orig && beq === 10, orig && s.fc === 1500 && profit === 1900]);
    };
    const sl = (label, key, min, max, step, fmt) => slider({ label, min, max, step, value: s[key], fmt, oninput: v => { s[key] = v; update(); } });
    el.append(h('h2', {}, `🎮 ${lab.title || 'SoleFlip break-even lab'}`),
      h('p', { class: 'muted' }, 'Custom sneakers: change the price, costs and monthly output and watch break-even and the margin of safety move.'), challenges,
      h('div', { class: 'lab-grid' },
        h('div', {}, sl('Price per pair', 'p', 40, 250, 5, money), sl('Variable cost per pair', 'vc', 10, 120, 1, money),
          sl('Fixed costs per month', 'fc', 500, 4000, 50, money), sl('Pairs sold per month', 'q', 0, 60, 1, v => v), kpis),
        h('div', {}, chartBox, note)));
    update();
  },

  // ------------------------------------------------------------ 5.6 stock control chart (HL)
  stockcontrol(el, lab, onWin) {
    const s = { use: 40, lead: 2, buffer: 30, rol: 90, roq: 160 };
    const WEEKS = 12;
    const kpis = h('div', { class: 'kpis' });
    const chartBox = h('div');
    const note = h('p', { class: 'muted small' });
    const challenges = challengeList([
      'Lead time 2 weeks: set the <b>reorder level</b> so each delivery arrives exactly when stock falls to the <b>buffer</b>.',
      'The supplier\'s lead time rises to <b>3 weeks</b>. Reset the reorder level so you still never dip into the buffer stock.'
    ], onWin);
    // Piecewise-linear stock level: falls at `use` per week; an order is placed at the reorder level and arrives `lead` weeks later.
    const simulate = () => {
      let t = 0, st = s.buffer + s.roq, low = st;
      const pts = [[0, st]];
      while (t < WEEKS) {
        const tOrder = st > s.rol ? t + (st - s.rol) / s.use : t;
        const atOrder = Math.min(st, s.rol);
        if (tOrder > t) pts.push([tOrder, atOrder]);
        const tArrive = tOrder + s.lead;
        let before = atOrder - s.use * s.lead;
        if (before < 0) { pts.push([tOrder + atOrder / s.use, 0]); before = 0; }
        pts.push([tArrive, before]);
        low = Math.min(low, before);
        st = before + s.roq;
        pts.push([tArrive, st]);
        t = tArrive;
      }
      // Trim to the chart window.
      const out = [];
      for (let i = 0; i < pts.length; i++) {
        const [x, y] = pts[i];
        if (x <= WEEKS) { out.push([x, y]); continue; }
        const [px, py] = pts[i - 1];
        if (px < WEEKS) out.push([WEEKS, py + (y - py) * (WEEKS - px) / (x - px)]);
        break;
      }
      return { pts: out, low };
    };
    const update = () => {
      const { pts, low } = simulate(), ideal = s.buffer + s.use * s.lead;
      kpis.replaceChildren(kpi(s.buffer + s.roq, 'Maximum stock'), kpi(round(low, 0), 'Lowest stock reached', low <= 0 ? 'bad' : low < s.buffer ? 'warn' : 'good'),
        kpi(s.use * s.lead, 'Pairs used during the lead time'));
      chartBox.replaceChildren(lineChart([{ name: 'Stock of blank sneakers', color: 'var(--chart-1)', points: pts }],
        { xLabel: 'Weeks', xTicks: [0, 2, 4, 6, 8, 10, 12], xFmt: x => String(x),
          hLines: [{ y: s.rol, label: 'reorder level', color: 'var(--chart-2)' }, { y: s.buffer, label: 'buffer', color: 'var(--chart-4)' }] }));
      note.innerHTML = low <= 0
        ? '🚨 <b>Stock-out!</b> The workshop runs out before the delivery arrives: orders are delayed and customers go elsewhere.'
        : low < s.buffer
          ? 'Deliveries arrive late, so SoleFlip is eating into its buffer stock. Raise the reorder level.'
          : low > s.buffer
            ? 'Safe, but deliveries arrive while stock is still above the buffer, so SoleFlip holds more stock (and ties up more cash) than it needs.'
            : 'Each delivery arrives just as stock reaches the buffer. Reorder level = buffer + usage × lead time.';
      challenges.check([s.lead === 2 && s.rol === ideal, s.lead === 3 && s.rol === ideal]);
    };
    const sl = (label, key, min, max, step, fmt = v => v) => slider({ label, min, max, step, value: s[key], fmt, oninput: v => { s[key] = v; update(); } });
    el.append(h('h2', {}, `🎮 ${lab.title || 'Never run out of blanks'} `, h('span', { class: 'tag' }, 'HL only')),
      h('p', { class: 'muted' }, 'The workshop uses blank sneakers every week. Set when to reorder and how much, and watch the stock control chart.'), challenges,
      h('div', { class: 'lab-grid' },
        h('div', {}, sl('Usage (pairs per week)', 'use', 20, 60, 5), sl('Lead time (weeks)', 'lead', 1, 4, 1, v => `${v} wk`),
          sl('Buffer stock (pairs)', 'buffer', 0, 100, 10), sl('Reorder level (pairs)', 'rol', 0, 300, 10), sl('Reorder quantity (pairs)', 'roq', 50, 300, 10), kpis),
        h('div', {}, chartBox, note)));
    update();
  },

  // ------------------------------------------------------------ 6.3 decision tree (expected values)
  decisiontree(el, lab, onWin) {
    const s = { p: 0.6, win: 150, lose: 30 };   // store: probability of success, returns in $000
    const STORE_COST = 60, POP = { cost: 15, p: 0.6, hi: 55, lo: 30 };
    const treeBox = h('div');
    const kpis = h('div', { class: 'kpis' });
    const note = h('p', { class: 'muted small' });
    const challenges = challengeList([
      'Keep the returns at $150k and $30k. Find the <b>probability of success</b> at which the store and the pop-up give the <b>same</b> expected net gain.',
      'Probability back at 0.6, failure return $30k: find the <b>lowest success return</b> at which the store is still at least as good as the pop-up.'
    ], onWin);
    const k = v => `${v < 0 ? '−' : ''}$${round(Math.abs(v), 1)}k`;
    const update = () => {
      const evS = s.p * s.win + (1 - s.p) * s.lose, netS = evS - STORE_COST;
      const evP = POP.p * POP.hi + (1 - POP.p) * POP.lo, netP = evP - POP.cost;
      const best = netS > netP && netS > 0 ? 'store' : netP > 0 && netP > netS ? 'popup' : netS === netP ? 'tie' : 'online';
      // Tree: decision square → three branches; chance circles → outcomes.
      const W = 560, H = 300;
      const root = svg('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart', role: 'img', 'aria-label': 'Decision tree' });
      const line = (x1, y1, x2, y2) => root.append(svg('line', { x1, y1, x2, y2, stroke: 'var(--muted)', 'stroke-width': 2 }));
      const cut = (x, y) => { for (const d of [-4, 4]) root.append(svg('line', { x1: x + d - 5, y1: y + 7, x2: x + d + 5, y2: y - 7, stroke: 'var(--bad)', 'stroke-width': 2.5 })); };
      const txt = (x, y, t, anchor = 'start', style = '') => root.append(svg('text', { x, y, 'text-anchor': anchor, style: 'font-size:15px;' + style }, t));
      const D = [30, 150];
      const branches = [
        { y: 60, name: 'Berlin store', cost: STORE_COST, ev: evS, net: netS, key: 'store', outs: [[`Success (${round(s.p, 2)})`, s.win], [`Failure (${round(1 - s.p, 2)})`, s.lose]] },
        { y: 165, name: 'Pop-up', cost: POP.cost, ev: evP, net: netP, key: 'popup', outs: [[`High demand (${POP.p})`, POP.hi], [`Low demand (${round(1 - POP.p, 2)})`, POP.lo]] },
        { y: 265, name: 'Online only', cost: 0, ev: 0, net: 0, key: 'online', outs: [] }];
      for (const b of branches) {
        const cx = 250, chosen = best === b.key || (best === 'tie' && b.key !== 'online');
        // Elbow connector: square → x = 90, then a flat segment carrying the option's name and cost.
        line(D[0] + 28, D[1], 90, b.y);
        line(90, b.y, cx - (b.outs.length ? 14 : 0), b.y);
        if (!chosen) cut(205, b.y);
        txt(100, b.y - 8, b.name, 'start', 'font-weight:600');
        if (b.cost) txt(100, b.y + 20, `cost ${k(b.cost)}`);
        if (!b.outs.length) { txt(cx + 6, b.y + 5, '$0 (no change)'); continue; }
        root.append(svg('circle', { cx, cy: b.y, r: 14, fill: 'var(--card-2)', stroke: 'var(--chart-1)', 'stroke-width': 2 }));
        txt(cx, b.y + 36, `EV ${k(b.ev)}`, 'middle', 'fill:var(--chart-1);font-weight:600');
        b.outs.forEach(([label, v], i) => {
          const oy = b.y + (i ? 26 : -26);
          line(cx + 14, b.y, 428, oy);
          txt(300, oy + (i ? 18 : -7), label);
          txt(434, oy + 5, k(v), 'start', 'font-weight:600');
        });
      }
      root.append(svg('rect', { x: D[0], y: D[1] - 14, width: 28, height: 28, fill: 'var(--accent)', rx: 3 }));
      treeBox.replaceChildren(root);
      kpis.replaceChildren(kpi(k(netS), 'Store: expected net gain', best === 'store' ? 'good' : ''),
        kpi(k(netP), 'Pop-up: expected net gain', best === 'popup' ? 'good' : ''), kpi('$0k', 'Online only'));
      note.innerHTML = `Expected value = Σ (probability × outcome). Net gain = EV − cost. The cut branches (//) are rejected. ${best === 'store' ? 'Remember: the store still has a ' + Math.round((1 - s.p) * 100) + '% chance of a ' + k(s.lose - STORE_COST) + ' result.' : ''}`;
      challenges.check([s.win === 150 && s.lose === 30 && Math.abs(s.p - 0.5) < 1e-9,
        Math.abs(s.p - 0.6) < 1e-9 && s.lose === 30 && s.win === 130]);
    };
    const sl = (label, key, min, max, step, fmt) => slider({ label, min, max, step, value: s[key], fmt, oninput: v => { s[key] = v; update(); } });
    el.append(h('h2', {}, `🎮 ${lab.title || 'Berlin: store, pop-up or stay online?'}`),
      h('p', { class: 'muted' }, 'Change the store\'s probability of success and its returns, and watch the expected values decide.'), challenges,
      h('div', { class: 'lab-grid' },
        h('div', {}, sl('Store: probability of success', 'p', 0, 1, 0.05, v => round(v, 2)),
          sl('Store: return if it succeeds', 'win', 60, 250, 5, v => `$${v}k`), sl('Store: return if it fails', 'lose', 0, 80, 5, v => `$${v}k`), kpis, note),
        h('div', {}, treeBox)));
    update();
  },

  // ------------------------------------------------------------ 6.4 force field analysis
  forcefield(el, lab, onWin) {
    const DRIVING = [['German online sales are growing', 4], ['A store makes the brand visible', 3], ['Freja wants to run it', 2], ['Berlin rents are lower than Copenhagen', 2]];
    const RESTRAINING = [['Cost of about $60,000', 4], ['No German-speaking manager', 3], ['Staff fear being stretched', 2], ['Exchange-rate risk', 2]];
    const ACTIONS = [
      { t: '🏪 Start with a pop-up', fx: { r: [[0, -2]] } },
      { t: '🧑‍💼 Hire a German-speaking manager', fx: { r: [[1, -2], [0, 1]] } },
      { t: '🗣️ Involve staff in planning', fx: { r: [[2, -1]] } },
      { t: '💶 Price and pay suppliers in euros', fx: { r: [[3, -1]] } },
      { t: '📣 Run a German Instagram campaign first', fx: { d: [[0, 1]] } }];
    const on = new Set();
    const boxes = h('div', { class: 'lab-grid', style: 'grid-template-columns:1fr 1fr' });
    const kpis = h('div', { class: 'kpis' });
    const note = h('p', { class: 'muted small' });
    const challenges = challengeList([
      'Make the <b>driving forces</b> outweigh the <b>restraining forces</b>.',
      'Get driving forces ahead by <b>4 or more</b>, using <b>no more than 3</b> actions.'
    ], onWin);
    const btns = ACTIONS.map((a, i) => h('button', { class: 'btn small ghost', style: 'margin:0 6px 6px 0', onclick: () => { on.has(i) ? on.delete(i) : on.add(i); update(); } }, a.t));
    const bar = (label, v, color, right) => h('div', { style: 'margin-bottom:8px' },
      h('div', { class: 'small', style: right ? 'text-align:right' : '' }, `${label} (${v})`),
      h('div', { style: `display:flex;justify-content:${right ? 'flex-end' : 'flex-start'}` },
        h('span', { style: `display:block;height:12px;border-radius:6px;background:${color};width:${v * 20}%` })));
    const update = () => {
      const d = DRIVING.map(x => x[1]), r = RESTRAINING.map(x => x[1]);
      for (const i of on) { for (const [j, c] of ACTIONS[i].fx.d || []) d[j] += c; for (const [j, c] of ACTIONS[i].fx.r || []) r[j] += c; }
      const D = d.reduce((a, b) => a + b, 0), R = r.reduce((a, b) => a + b, 0);
      btns.forEach((b, i) => { b.className = `btn small${on.has(i) ? '' : ' ghost'}`; });
      boxes.replaceChildren(
        h('div', {}, h('b', {}, '➡️ Driving forces'), DRIVING.map(([l], i) => bar(l, d[i], 'var(--good)'))),
        h('div', {}, h('b', {}, '⬅️ Restraining forces'), RESTRAINING.map(([l], i) => bar(l, r[i], 'var(--bad)', true))));
      kpis.replaceChildren(kpi(D, 'Driving total', 'good'), kpi(R, 'Restraining total', 'bad'), kpi(D - R > 0 ? `+${D - R}` : D - R, 'Balance', D > R ? 'good' : 'bad'));
      note.innerHTML = D > R
        ? 'The change is likely to succeed. Notice that most of the gain came from <b>weakening restraining forces</b>, which is often cheaper and creates less resistance than pushing harder.'
        : 'Stalemate or worse: the forces against the change are at least as strong as the forces for it. Choose actions to shift the balance.';
      challenges.check([D > R, D - R >= 4 && on.size <= 3]);
    };
    el.append(h('h2', {}, `🎮 ${lab.title || 'Will the Berlin store happen?'} `, h('span', { class: 'tag' }, 'HL only')),
      h('p', { class: 'muted' }, 'Each force is scored 1 (weak) to 5 (strong). Choose actions to change the balance. Tap again to undo.'), challenges,
      h('div', {}, btns), kpis, boxes, note);
    update();
  },

  // ------------------------------------------------------------ 6.5 Gantt chart
  gantt(el, lab, onWin) {
    const T = PROJECT.map(a => ({ ...a, start: 0 }));
    const WEEKS = 14;
    const chart = h('div');
    const kpis = h('div', { class: 'kpis' });
    const note = h('p', { class: 'muted small' });
    const challenges = challengeList([
      'Make the plan <b>valid</b>: no task starts before the tasks it depends on have finished.',
      'Make it valid <b>and</b> open the store as early as possible: in <b>10 weeks</b>.'
    ], onWin);
    const end = a => a.start + a.dur;
    const ok = a => a.after.every(p => T.find(x => x.id === p) && end(T.find(x => x.id === p)) <= a.start);
    const update = () => {
      const finish = Math.max(...T.map(end)), valid = T.every(ok);
      chart.replaceChildren(...T.map(a => h('div', { style: 'display:flex;align-items:center;gap:6px;margin:6px 0' },
          h('div', { class: 'small', style: 'width:144px;flex:none' }, h('b', {}, `${a.id} `), `${a.name} (${a.dur} wk)`, a.after.length ? h('div', { class: 'muted' }, `after ${a.after.join(', ')}`) : null),
          h('button', { class: 'chip', onclick: () => { a.start = Math.max(0, a.start - 1); update(); } }, '◀'),
          h('div', { style: 'position:relative;flex:1;height:22px;border-radius:6px;background:repeating-linear-gradient(90deg, var(--card-2) 0 calc(100% / 14 - 1px), var(--line) 0 calc(100% / 14))' },
            h('span', { style: `position:absolute;top:2px;height:18px;border-radius:5px;left:${a.start / WEEKS * 100}%;width:${a.dur / WEEKS * 100}%;background:${ok(a) ? 'var(--chart-1)' : 'var(--bad)'}` })),
          h('button', { class: 'chip', onclick: () => { a.start = Math.min(WEEKS - a.dur, a.start + 1); update(); } }, '▶'))));
      kpis.replaceChildren(kpi(valid ? 'Valid' : `${T.filter(a => !ok(a)).length} clash(es)`, 'Plan', valid ? 'good' : 'bad'), kpi(`${finish} weeks`, 'Opening day'));
      note.innerHTML = valid
        ? finish === 10 ? 'Valid and as fast as possible. Tasks that run at the same time (in parallel) are what make this short.' : 'Valid, but the opening could be earlier. Which tasks can run at the same time?'
        : 'Red bars start before a task they depend on has finished. Move them later (▶), or move the earlier task sooner.';
      challenges.check([valid, valid && finish === 10]);
    };
    el.append(h('h2', {}, `🎮 ${lab.title || 'Plan the Berlin pop-up'} `, h('span', { class: 'tag' }, 'HL only')),
      h('p', { class: 'muted' }, 'Move each task bar to the week it starts. Every bar starts at week 0: fix the order first.'), challenges, kpis, chart, note);
    update();
  },

  // ------------------------------------------------------------ 6.6 critical path analysis (HL)
  cpa(el, lab, onWin) {
    const dur = Object.fromEntries(PROJECT.map(a => [a.id, a.dur]));
    const ORIG = { ...dur };
    const netBox = h('div');
    const tableBox = h('div', { class: 'table-wrap' });
    const kpis = h('div', { class: 'kpis' });
    const challenges = challengeList([
      'Fit-out (B) is running late. Find the <b>longest</b> B can take <b>without</b> delaying the opening (all other times as planned).',
      'Shipping from Porto (E) is delayed. Find the <b>longest</b> E can take without delaying the opening (all others as planned).',
      'Open in <b>9 weeks</b> by cutting <b>one</b> activity by just <b>1 week</b> (all others as planned).'
    ], onWin);
    const update = () => {
      const { est, lft, fl, ff, len } = cpaSolve(dur);
      const crit = id => fl[id] === 0;
      // Network: activity on arrow. Node positions:
      const P = { 1: [40, 150], 2: [170, 150], 3: [300, 62], 4: [430, 150], 5: [530, 150] };
      const W = 570, H = 260, R = 26;
      const root = svg('svg', { viewBox: `0 0 ${W} ${H}`, class: 'chart', role: 'img', 'aria-label': 'Critical path network' });
      for (const a of NETWORK) {
        const [x1, y1] = P[a.from], [x2, y2] = P[a.to], c = crit(a.id);
        const bend = a.id === 'E' ? 90 : 0;
        const mx = (x1 + x2) / 2, my = (y1 + y2) / 2 + bend;
        root.append(svg('path', { d: bend ? `M${x1},${y1 + R} Q${mx},${my + 30} ${x2},${y2 + R}` : `M${x1},${y1} L${x2},${y2}`,
          fill: 'none', stroke: c ? 'var(--bad)' : 'var(--muted)', 'stroke-width': c ? 3.5 : 2 }));
        root.append(svg('text', { x: mx, y: (bend ? my + 12 : my - 8), 'text-anchor': 'middle', style: `font-size:17px;font-weight:700;fill:${c ? 'var(--bad)' : 'var(--text)'}` }, `${a.id} ${dur[a.id]}`));
      }
      for (const [n, [x, y]] of Object.entries(P)) {
        root.append(svg('circle', { cx: x, cy: y, r: R, fill: 'var(--card)', stroke: 'var(--text)', 'stroke-width': 1.5 }),
          svg('line', { x1: x - R, x2: x + R, y1: y, y2: y, stroke: 'var(--text)' }), svg('line', { x1: x, x2: x, y1: y, y2: y + R, stroke: 'var(--text)' }),
          svg('text', { x, y: y - 8, 'text-anchor': 'middle', style: 'font-size:15px' }, n),
          svg('text', { x: x - 12, y: y + 19, 'text-anchor': 'middle', style: 'font-size:15px;font-weight:700' }, est[n]), svg('text', { x: x + 12, y: y + 19, 'text-anchor': 'middle', style: 'font-size:15px;font-weight:700' }, lft[n]));
      }
      netBox.replaceChildren(root, h('p', { class: 'muted small' }, 'Each node: number on top, EST bottom-left, LFT bottom-right. Red = critical path.'));
      tableBox.replaceChildren(h('table', { class: 'fin' },
        h('tr', {}, h('th', {}, 'Activity'), h('th', {}, 'Weeks'), h('th', {}, 'EST'), h('th', {}, 'LFT'), h('th', {}, 'Total float'), h('th', {}, 'Free float')),
        NETWORK.map(a => h('tr', { class: crit(a.id) ? 'total' : '' }, h('td', {}, `${a.id} ${a.name}`), h('td', {}, dur[a.id]),
          h('td', {}, est[a.from]), h('td', {}, lft[a.to]), h('td', {}, fl[a.id]), h('td', {}, ff[a.id])))));
      kpis.replaceChildren(kpi(`${len} weeks`, 'Project length', len <= 10 ? 'good' : 'bad'),
        kpi(NETWORK.filter(a => crit(a.id)).map(a => a.id).join(', '), 'Critical activities (zero float)'));
      const others = id => NETWORK.every(a => a.id === id || dur[a.id] === ORIG[a.id]);
      const diffs = NETWORK.filter(a => dur[a.id] !== ORIG[a.id]);
      challenges.check([others('B') && dur.B === 6 && len === 10, others('E') && dur.E === 9 && len === 10,
        diffs.length === 1 && dur[diffs[0].id] === ORIG[diffs[0].id] - 1 && len === 9]);
    };
    el.append(h('h2', {}, `🎮 ${lab.title || 'Find the critical path'} `, h('span', { class: 'tag' }, 'HL only')),
      h('p', { class: 'muted' }, 'The Berlin pop-up project as a network. Change how long each activity takes and watch the critical path and the floats.'), challenges,
      h('div', { class: 'lab-grid' },
        h('div', {}, NETWORK.map(a => slider({ label: `${a.id}: ${a.name}`, min: 1, max: 10, value: dur[a.id], fmt: v => `${v} wk`, oninput: v => { dur[a.id] = v; update(); } })), kpis),
        h('div', {}, netBox, tableBox)));
    update();
  },

  // ------------------------------------------------------------ 6.7 simple linear regression (HL)
  regression(el, lab, onWin) {
    const X = [5, 8, 10, 12, 15, 18, 20, 25], Y = [16, 20, 21, 25, 27, 33, 34, 39];   // ad spend ($00), online sales ($000)
    const n = X.length, mx = X.reduce((a, b) => a + b) / n, my = Y.reduce((a, b) => a + b) / n;
    let sxy = 0, sxx = 0, syy = 0;
    X.forEach((x, i) => { sxy += (x - mx) * (Y[i] - my); sxx += (x - mx) ** 2; syy += (Y[i] - my) ** 2; });
    const B = sxy / sxx, A0 = my - B * mx, r = sxy / Math.sqrt(sxx * syy);
    const sse = (a, b) => X.reduce((s, x, i) => s + (Y[i] - (a + b * x)) ** 2, 0), best = sse(A0, B);
    const s = { a: 4, b: 0.6, fc: 30 };
    const chartBox = h('div');
    const kpis = h('div', { class: 'kpis' });
    const note = h('p', { class: 'muted small' });
    const challenges = challengeList([
      'Fit the line: get the total squared error within <b>20%</b> of the best possible line.',
      'Use the best-fit line to forecast online sales if SoleFlip spends <b>$3,000</b> a month on ads (x = 30).'
    ], onWin);
    const update = () => {
      const e = sse(s.a, s.b);
      chartBox.replaceChildren(lineChart([
        { name: 'Months (data)', color: 'var(--chart-1)', points: X.map((x, i) => [x, Y[i]]), dots: true, dash: '0 1000' },
        { name: 'Your line', color: 'var(--accent)', points: [[0, s.a], [32, s.a + s.b * 32]] },
        { name: 'Your forecast', color: 'var(--chart-2)', points: [[30, s.fc]], dots: true }
      ], { xLabel: 'Instagram ad spend ($00 per month)', xTicks: [0, 8, 16, 24, 32], xFmt: x => String(x) }));
      kpis.replaceChildren(kpi(`y = ${round(s.a, 2)} + ${round(s.b, 2)}x`, 'Your line'), kpi(round(e, 1), 'Total squared error', e <= best * 1.2 ? 'good' : 'bad'),
        kpi(round(r, 2), 'Correlation coefficient r (interpret only)'));
      note.innerHTML = `Strong positive correlation: months with more ad spend had higher sales. But x = 30 is outside the data (5–25), so the forecast is <b>extrapolation</b>: less reliable. And correlation isn't proof that ads <i>cause</i> the sales.`;
      challenges.check([e <= best * 1.2, Math.abs(s.fc - (A0 + B * 30)) <= 1.5]);
    };
    el.append(h('h2', {}, `🎮 ${lab.title || 'Do ads drive sales?'} `, h('span', { class: 'tag' }, 'HL only')),
      h('p', { class: 'muted' }, 'Eight months of SoleFlip data. Move the line until it fits the dots as closely as possible, then forecast.'), challenges,
      h('div', { class: 'lab-grid' },
        h('div', {}, slider({ label: 'Intercept (sales with no ads, $000)', min: 0, max: 20, step: 0.5, value: s.a, oninput: v => { s.a = v; update(); } }),
          slider({ label: 'Slope (extra $000 per $100 of ads)', min: 0, max: 2.5, step: 0.05, value: s.b, fmt: v => round(v, 2), oninput: v => { s.b = v; update(); } }),
          slider({ label: 'Forecast at x = 30 ($000)', min: 20, max: 70, value: s.fc, oninput: v => { s.fc = v; update(); } }), kpis, note),
        h('div', {}, chartBox)));
    update();
  },
  // ------------------------------------------------------------ 6.10 descriptive statistics
  stats(el, lab, onWin) {
    const BASE = [12, 15, 15, 18, 20, 21, 23, 25];   // pairs sold on 8 days at the Berlin pop-up
    const s = { x: 40 };
    const chartBox = h('div');
    const kpis = h('div', { class: 'kpis' });
    const note = h('p', { class: 'muted small' });
    const challenges = challengeList([
      'Make day 9 a festival day so big that the <b>mean is at least 5 pairs above the median</b>.',
      'Find the day-9 sales that make the <b>mean equal the median</b>.',
      'Make sales as steady as you can: get the <b>standard deviation below 4</b>.'
    ], onWin);
    const median = a => a.length % 2 ? a[(a.length - 1) / 2] : (a[a.length / 2 - 1] + a[a.length / 2]) / 2;
    const update = () => {
      const data = [...BASE, s.x], sorted = [...data].sort((a, b) => a - b), n = data.length;
      const mean = data.reduce((a, b) => a + b, 0) / n, med = median(sorted);
      const lower = sorted.slice(0, Math.floor(n / 2)), upper = sorted.slice(Math.ceil(n / 2));
      const q1 = median(lower), q3 = median(upper);
      const sd = Math.sqrt(data.reduce((a, v) => a + (v - mean) ** 2, 0) / n);
      const counts = {}; data.forEach(v => { counts[v] = (counts[v] || 0) + 1; });
      const top = Math.max(...Object.values(counts)), modes = Object.keys(counts).filter(k => counts[k] === top);
      chartBox.replaceChildren(barChart(data.map((v, i) => ({ label: `D${i + 1}`, value: v, color: i === 8 ? 'var(--accent)' : 'var(--chart-1)' })),
        { hLines: [{ y: mean, label: `mean ${round(mean, 1)}`, color: 'var(--chart-2)' }, { y: med, label: `median ${med}`, color: 'var(--good)' }], title: 'Pairs sold each day' }));
      kpis.replaceChildren(kpi(round(mean, 2), 'Mean'), kpi(med, 'Median'), kpi(top > 1 ? modes.join(', ') : 'none', 'Mode'),
        kpi(`${q1} – ${q3}`, 'Q1 – Q3'), kpi(q3 - q1, 'Interquartile range'), kpi(round(sd, 2), 'Standard deviation', sd < 4 ? 'good' : ''));
      note.innerHTML = mean - med >= 5
        ? 'One extreme day (an <b>outlier</b>) drags the mean up, but the median and quartiles hardly move. That\'s why the median is often the better "typical day" when data has outliers.'
        : 'The standard deviation measures how spread out the days are around the mean: small = steady sales, large = unpredictable sales.';
      challenges.check([mean - med >= 5, Math.abs(mean - med) < 1e-9, sd < 4]);
    };
    el.append(h('h2', {}, `🎮 ${lab.title || 'What does a typical day look like?'}`),
      h('p', { class: 'muted' }, 'Pairs sold on the first 8 days of the Berlin pop-up are fixed. You choose day 9. Watch what happens to each statistic.'), challenges,
      h('div', { class: 'lab-grid' },
        h('div', {}, slider({ label: 'Pairs sold on day 9', min: 0, max: 90, value: s.x, oninput: v => { s.x = v; update(); } }), kpis, note),
        h('div', {}, chartBox)));
    update();
  },

  // ------------------------------------------------------------ 6.12 Hofstede's cultural dimensions (HL)
  hofstede(el, lab, onWin) {
    // Approximate scores (0-100) from Hofstede's research. PDI, IDV, MAS, UAI, LTO, IVR.
    const DIMS = ['Power distance', 'Individualism', 'Masculinity', 'Uncertainty avoidance', 'Long-term orientation', 'Indulgence'];
    const C = { Denmark: [18, 74, 16, 23, 35, 70], Germany: [35, 67, 66, 65, 83, 40], Portugal: [63, 27, 31, 99, 28, 33],
      Japan: [54, 46, 95, 92, 88, 42], USA: [40, 91, 62, 46, 26, 68], China: [80, 20, 66, 30, 87, 24] };
    const s = { c: 'USA' };
    const box = h('div');
    const note = h('p', { class: 'muted small' });
    const challenges = challengeList([
      'SoleFlip\'s Danish managers like staff to challenge the boss. Find the country where staff most expect the boss simply to decide (<b>highest power distance</b>).',
      'SoleFlip\'s "just try it" style worries people who dislike risk. Find the country with the <b>highest uncertainty avoidance</b>: where SoleFlip\'s factory is!',
      'Find the country <b>closest to Denmark on individualism</b>.'
    ], onWin);
    const others = Object.keys(C).filter(k => k !== 'Denmark');
    const btns = others.map(k => h('button', { class: 'btn small ghost', style: 'margin:0 6px 6px 0', onclick: () => { s.c = k; update(); } }, k));
    const row = (label, v, color) => h('div', { style: 'display:flex;align-items:center;gap:8px;margin:2px 0' },
      h('span', { class: 'small', style: 'width:72px;flex:none' }, label),
      h('span', { style: `display:block;height:12px;border-radius:6px;background:${color};width:${v * 0.8}%` }), h('span', { class: 'small' }, v));
    const update = () => {
      btns.forEach((b, i) => { b.className = `btn small${others[i] === s.c ? '' : ' ghost'}`; });
      box.replaceChildren(...DIMS.map((d, i) => h('div', { style: 'margin-bottom:10px' }, h('b', { class: 'small' }, d),
        row('Denmark', C.Denmark[i], 'var(--chart-1)'), row(s.c, C[s.c][i], 'var(--chart-2)'))));
      const gaps = DIMS.map((d, i) => [d, Math.abs(C[s.c][i] - C.Denmark[i])]).sort((a, b) => b[1] - a[1]);
      note.innerHTML = `Biggest difference from Denmark: <b>${gaps[0][0].toLowerCase()}</b> (${gaps[0][1]} points). That's where SoleFlip should adapt its management or marketing first.`;
      const maxBy = i => others.reduce((a, b) => C[b][i] > C[a][i] ? b : a);
      const closest = others.reduce((a, b) => Math.abs(C[b][1] - 74) < Math.abs(C[a][1] - 74) ? b : a);
      challenges.check([s.c === maxBy(0), s.c === maxBy(3), s.c === closest]);
    };
    el.append(h('h2', {}, `🎮 ${lab.title || 'Compare cultures'} `, h('span', { class: 'tag' }, 'HL only')),
      h('p', { class: 'muted' }, 'Compare Denmark with another country on Hofstede\'s six dimensions (approximate scores, 0–100).'), challenges,
      h('div', {}, btns), box, note);
    update();
  },

  // ------------------------------------------------------------ 6.13 contribution and absorption costing (HL)
  costing(el, lab, onWin) {
    const LINES = [
      { name: 'Resell', rev: 20000, vc: 12000, hours: 100, space: 20 },
      { name: 'Custom', rev: 15000, vc: 6000, hours: 400, space: 30 },
      { name: 'Cleaning', rev: 5000, vc: 1500, hours: 300, space: 50 }];
    const FIXED = 15000;
    const BASES = { hours: 'Labour hours', space: 'Floor space', rev: 'Sales revenue' };
    const s = { basis: 'rev', keep: [true, true, true], dropped: false };
    const tableBox = h('div', { class: 'table-wrap' });
    const kpis = h('div', { class: 'kpis' });
    const note = h('p', { class: 'muted small' });
    const challenges = challengeList([
      'Find an <b>allocation basis</b> that makes Cleaning look <b>loss-making</b> under absorption costing.',
      'Test the decision: <b>drop Cleaning</b>, see what happens to total profit, then bring it back.'
    ], onWin);
    const basisBtns = Object.entries(BASES).map(([k, l]) => h('button', { class: 'btn small ghost', style: 'margin:0 6px 6px 0', onclick: () => { s.basis = k; update(); } }, l));
    const keepBtns = LINES.map((l, i) => h('button', { class: 'chip', onclick: () => { s.keep[i] = !s.keep[i]; if (!s.keep[2]) s.dropped = true; update(); } }));
    const update = () => {
      const total = LINES.reduce((a, l) => a + l[s.basis], 0);
      const rows = LINES.map(l => { const share = FIXED * l[s.basis] / total; return { ...l, con: l.rev - l.vc, share, full: l.rev - l.vc - share }; });
      basisBtns.forEach((b, i) => { b.className = `btn small${Object.keys(BASES)[i] === s.basis ? '' : ' ghost'}`; });
      keepBtns.forEach((b, i) => { b.textContent = `${s.keep[i] ? '✅' : '❌'} ${LINES[i].name}`; });
      tableBox.replaceChildren(h('table', { class: 'fin' },
        h('tr', {}, h('th', {}, ''), ...rows.map(r => h('th', {}, r.name))),
        h('tr', {}, h('td', {}, 'Revenue'), ...rows.map(r => h('td', {}, money(r.rev)))),
        h('tr', {}, h('td', {}, 'Variable costs'), ...rows.map(r => h('td', {}, money(r.vc)))),
        h('tr', { class: 'total' }, h('td', {}, 'Contribution'), ...rows.map(r => h('td', {}, money(r.con)))),
        h('tr', {}, h('td', {}, `Share of $15,000 overheads (by ${BASES[s.basis].toLowerCase()})`), ...rows.map(r => h('td', {}, money(Math.round(r.share))))),
        h('tr', { class: 'total' }, h('td', {}, 'Profit (absorption costing)'), ...rows.map(r => h('td', { class: r.full < 0 ? 'neg' : '' }, money(Math.round(r.full)))))));
      const profit = rows.reduce((a, r, i) => a + (s.keep[i] ? r.con : 0), 0) - FIXED;
      kpis.replaceChildren(kpi(money(profit), 'SoleFlip total profit', profit >= 5500 ? 'good' : 'bad'));
      note.innerHTML = s.keep[2]
        ? 'Absorption costing shares out the overheads, so a line\'s "profit" depends on the basis you choose. Contribution doesn\'t: every line here has a positive contribution.'
        : 'Dropping Cleaning loses its $3,500 contribution, but the $15,000 of overheads stays. Total profit falls. A positive contribution helps pay the fixed costs.';
      challenges.check([rows[2].full < 0, s.dropped && s.keep.every(Boolean)]);
    };
    el.append(h('h2', {}, `🎮 ${lab.title || 'Which product line pays its way?'} `, h('span', { class: 'tag' }, 'HL only')),
      h('p', { class: 'muted' }, 'SoleFlip\'s three product lines in one month. Choose how overheads are shared out, and which lines to keep.'), challenges,
      h('div', {}, h('b', { class: 'small' }, 'Share overheads by: '), basisBtns), h('div', { style: 'margin:6px 0' }, h('b', { class: 'small' }, 'Keep: '), keepBtns),
      kpis, tableBox, note);
    update();
  }
};

function kpi(v, l, cls = '') {
  return h('div', { class: `kpi ${cls}` }, h('div', { class: 'v' }, v), h('div', { class: 'l' }, l));
}
