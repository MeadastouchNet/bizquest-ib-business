// Interactive "Play" labs. Each lab gets a container and calls onWin() once its challenge is beaten.
import { h, money, pct, round, slider, lineChart, barChart, speakButton, toast } from './ui.js';
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
      const opts = it.options.map(o => {
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
  }
};

function kpi(v, l, cls = '') {
  return h('div', { class: `kpi ${cls}` }, h('div', { class: 'v' }, v), h('div', { class: 'l' }, l));
}
