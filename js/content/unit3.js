// Unit 3: Finance and accounts (IB Business Management guide, first assessment 2024).
// Running case: SoleFlip, two 17-year-olds who clean, customise and resell sneakers.
// Numbers in 3.4–3.6 all come from the same SoleFlip Ltd accounts so the topics connect.

import { M, F, A, tbl } from './helpers.js';

const sf = '<b>SoleFlip</b>';

export const unit3 = {
  id: '3',
  title: 'Finance and accounts',
  emoji: '💰',
  blurb: 'Meet SoleFlip: Noah and Freja (both 17) clean, customise and resell sneakers. It started on Vinted and Instagram. Now they want a pop-up store, a laser machine and maybe investors. You are their finance brain for the whole unit.',
  sections: [
    // ------------------------------------------------------------------ 3.1
    {
      id: '3.1', title: 'Introduction to finance', emoji: '💸', minutes: 8, hl: false,
      goal: 'explain why businesses need finance and tell capital expenditure from revenue expenditure.',
      hook: `You just got <b>$1,200</b> from your summer job. Option A: a gaming PC you'll use (and maybe stream on) for 4 years. Option B: a summer of food delivery, cinema and energy drinks.<br><br>Both cost $1,200. But one leaves you <i>owning something</i>, and one is gone by August. Businesses make exactly this split, and it changes where the spending shows up in their accounts.`,
      cards: [
        { title: 'Why do businesses need finance?', html: `
          <p>Finance = money a business gets and uses. Every business needs it for three things:</p>
          <ul><li><b>Starting up</b>: equipment, first stock, website.</li>
              <li><b>Running</b>: wages, rent, materials, every single month.</li>
              <li><b>Growing</b>: a new shop, a new machine, a new market.</li></ul>
          <div class="example">${sf} started with Noah's $400 savings for cleaning kits. Now they need about $20,000 for a laser-engraving machine, and money to pay for stock before customers pay them.</div>` },
        { title: 'Capital expenditure (CapEx)', html: `
          <p><b>Capital expenditure</b> is spending on <b>[[non-current assets|non-current (fixed) assets]]</b>: things the business keeps and uses for <b>more than one year</b>.</p>
          <p>Examples: buildings, machines, vehicles, computers, shop fittings. Also intangible assets like buying a patent or a brand.</p>
          <div class="example">${sf} buys a $900 sneaker-cleaning station and a $1,500 laptop for design work. Both will be used for years, so this is capital expenditure.</div>
          <p class="muted small">It goes on the <b>[[balance sheet]]</b> as an asset, not straight into the costs of one year.</p>` },
        { title: 'Revenue expenditure (RevEx)', html: `
          <p><b>Revenue expenditure</b> is spending on the <b>day-to-day running</b> of the business. It's used up within the year.</p>
          <p>Examples: wages, rent, electricity, stock, marketing, insurance, repairs and maintenance.</p>
          <div class="example">${sf}'s cleaning fluid, shipping boxes, Instagram ads and the monthly Adobe subscription are all revenue expenditure.</div>
          <p class="muted small">It goes on the <b>[[profit and loss account]]</b> as an expense in the year it happens.</p>` },
        { title: 'The tricky ones', html: `
          <p>Ask yourself: <b>does this create or improve an asset that lasts more than a year?</b></p>
          <ul><li><b>Repairing</b> a broken machine → revenue (it just keeps it working).</li>
              <li><b>Upgrading</b> a machine so it does more → capital.</li>
              <li>Buying a van → capital. <b>Fuel</b> for the van → revenue.</li>
              <li>Buying software outright → capital. A <b>monthly subscription</b> → revenue.</li></ul>
          <div class="tip">"Define" questions are usually worth 2 marks: give a precise definition plus an example. For capital expenditure, say <i>"on non-current assets that are used for more than one year"</i>.</div>` }
      ],
      labs: [{
        type: 'sort', title: 'CapEx or RevEx? Sort SoleFlip\'s receipts',
        challenge: 'Sort all 10 receipts correctly in one go.',
        buckets: ['CapEx', 'RevEx'],
        items: [
          { t: '🧽 Laser-engraving machine, $20,000', b: 0 },
          { t: '📦 500 shipping boxes', b: 1 },
          { t: '💻 Laptop for designing custom sneakers', b: 0 },
          { t: '📱 Instagram ads for one month', b: 1 },
          { t: '🔧 Repairing the cleaning station', b: 1 },
          { t: '🚐 Second-hand delivery van', b: 0 },
          { t: '⛽ Fuel for the van', b: 1 },
          { t: '🧑‍🔧 Wages for a weekend helper', b: 1 },
          { t: '🏬 Shelves and lighting fitted in the pop-up store', b: 0 },
          { t: '👟 Sneakers bought to resell (stock)', b: 1 }
        ]
      }],
      worked: {
        title: 'Classify like an examiner',
        intro: `<p>${sf} spends $3,000 this month: $1,800 on a heat press for printing on sneakers, $700 on paint and laces, and $500 on fixing their old heat press.</p>`,
        steps: [
          { prompt: 'Which purchase will be used for more than one year?', answer: 'The <b>$1,800 heat press</b>. It\'s a non-current asset, so it is <b>capital expenditure</b>.' },
          { prompt: 'What about the paint and laces?', answer: 'They are used up when sneakers are customised, within the year. <b>Revenue expenditure</b> ($700).' },
          { prompt: 'And fixing the old heat press?', answer: 'A repair only keeps an existing asset working. It doesn\'t create a new asset, so it is <b>revenue expenditure</b> ($500).' },
          { prompt: 'Totals?', answer: 'CapEx = <b>$1,800</b> (balance sheet). RevEx = $700 + $500 = <b>$1,200</b> (profit and loss account).' }
        ],
        takeaway: 'Mixing up CapEx and RevEx changes reported profit. Putting the $1,800 press into this month\'s expenses would make SoleFlip look $1,800 less profitable than it is.'
      },
      quiz: [
        { id: '3.1-1', type: 'mcq', cmd: 'Identify', q: 'Which of these is <b>capital expenditure</b>?', options: ['Buying a delivery van', 'Paying staff wages', 'A month of TikTok ads', 'Fuel for the delivery van'], answer: 0, why: 'The van is a non-current asset used for several years. The others are day-to-day running costs.' },
        { id: '3.1-2', type: 'mcq', cmd: 'Identify', q: 'SoleFlip pays $300 to <b>repair</b> its broken cleaning machine. This is…', options: ['Revenue expenditure', 'Capital expenditure', 'Neither: it is an asset', 'Share capital'], answer: 0, why: 'A repair keeps an existing asset working. It doesn\'t create or improve a long-term asset, so it is revenue expenditure.' },
        { id: '3.1-3', type: 'tf', q: 'Capital expenditure is recorded in full as an expense on the profit and loss account in the year it is spent.', answer: false, why: 'False. Capital expenditure is recorded as a [[non-current asset]] on the <b>[[balance sheet]]</b> (its cost is then spread over time through [[depreciation]]).' },
        { id: '3.1-4', type: 'sort', q: 'Sort these café purchases.', buckets: ['CapEx', 'RevEx'], items: [
          { t: 'Espresso machine', b: 0 }, { t: 'Coffee beans', b: 1 }, { t: 'Barista wages', b: 1 },
          { t: 'New tables and chairs', b: 0 }, { t: 'Electricity bill', b: 1 }, { t: 'Delivery e-bike', b: 0 }], why: 'Long-lasting assets = CapEx. Things used up or paid regularly = RevEx.' },
        { id: '3.1-5', type: 'mcq', cmd: 'Define', q: 'Revenue expenditure is best defined as spending on…', options: ['day-to-day running costs that are used up within the year', 'assets that will be kept and used for more than one year', 'money raised by selling shares to new or existing owners', 'the money a business earns from selling its products'], answer: 0, why: 'Revenue expenditure = running costs (wages, rent, stock, ads). Don\'t confuse it with <i>revenue</i>, which is income from sales.' },
        { id: '3.1-6', type: 'mcq', cmd: 'Explain', q: 'Which is the <b>best</b> summary of why businesses need finance?', options: ['To start up, to pay running costs, and to grow', 'Only to pay shareholders their yearly dividends', 'Only when the business is making a loss that year', 'Mainly to avoid paying tax on its profits'], answer: 0, why: 'Start-up, running costs and expansion are the three core reasons.' }
      ],
      explain: 'Explain the difference between <b>capital</b> and <b>revenue expenditure</b> using two things <i>you</i> have spent money on.'
    },

    // ------------------------------------------------------------------ 3.2
    {
      id: '3.2', title: 'Sources of finance', emoji: '🏦', minutes: 12, hl: false,
      goal: 'name the internal and external sources of finance and choose the right one for a situation.',
      hook: `Ever watched <b>Dragons' Den</b> / <b>Shark Tank</b> (Løvens Hule)? Founders give away 20% of their company for $100k. Some later regret it badly, and some say it was the best deal they ever made.<br><br>Where money comes from matters as much as how much you get. Today: every way a business can get money, and how to pick the right one.`,
      cards: [
        { title: 'Internal sources: money from inside', html: `
          <ul><li><b>Personal funds</b>: the owner's own savings. The main source for <b>[[sole traders]]</b> starting out.</li>
              <li><b>Retained profit</b>: profit kept in the business instead of paid out to owners. Free, no interest, but only if you made a profit.</li>
              <li><b>Sale of assets</b>: selling things you no longer need (an old van, unused equipment). Also <i>sale and leaseback</i>.</li></ul>
          <div class="example">${sf} keeps $6,000 of last year's profit instead of Noah and Freja paying it to themselves. That's retained profit.</div>` },
        { title: 'External sources (1): owners and lenders', html: `
          <ul><li><b>Share capital</b>: selling shares (part-ownership) in a company. No repayment, but you share profits and control. Only for <b>[[companies]]</b>.</li>
              <li><b>Loan capital</b>: borrowing a fixed sum from a bank, repaid with <b>interest</b> over time (e.g. 5 years). A mortgage is a long-term loan secured on property.</li>
              <li><b>Overdraft</b>: the bank lets your account go below zero up to a limit. Flexible and short-term, but expensive interest.</li></ul>
          <div class="example">An overdraft works like a phone plan that lets you keep using data after your credit hits zero and sends you a big bill later.</div>` },
        { title: 'External sources (2): the rest of the list', html: `
          <ul><li><b>Trade credit</b>: suppliers let you <b>buy now, pay later</b> (often 30–90 days). Basically Klarna for businesses.</li>
              <li><b>Crowdfunding</b>: lots of people each give a small amount online (Kickstarter). In return they get rewards, equity, or nothing (donation).</li>
              <li><b>Leasing</b>: rent an asset instead of buying it, like a phone contract or car lease. No big upfront cost, but you never own it.</li>
              <li><b>Microfinance providers</b>: very small loans to [[entrepreneurs]] (often in low-income countries) who can't get bank loans, e.g. Grameen Bank.</li>
              <li><b>Business angels</b>: rich individuals who invest their own money in exchange for a share of the business, and often bring advice and contacts. The Dragons are business angels.</li></ul>` },
        { title: 'Short-term vs long-term', html: `
          <p><b>Short-term</b> (under 1 year): overdrafts, trade credit. For cash gaps and running costs.</p>
          <p><b>Long-term</b> (over 1 year): share capital, long-term loans, mortgages, business angels, leasing. For assets and expansion.</p>
          <div class="tip">Golden rule: <b>match the finance to the purpose</b>. Don't buy a 10-year machine with an overdraft, and don't sell shares to pay this month's electricity bill.</div>` },
        { title: 'How to choose the right source', html: `
          <p>When a question says "<b>recommend</b>" or "<b>evaluate</b>" a source, weigh up these factors:</p>
          <ul><li><b>Purpose</b>: what is the money for, and for how long?</li>
              <li><b>Cost</b>: interest, fees, or giving away part of the profits.</li>
              <li><b>Amount</b> needed.</li>
              <li><b>Legal structure / size</b>: [[sole traders]] can't sell shares.</li>
              <li><b>Control</b>: will the owners lose decision power?</li>
              <li><b>Existing debt ([[gearing]])</b>: more borrowing is riskier if you already owe a lot.</li></ul>
          <div class="tip">Strong answers name a source, apply it to the business in the case, and give a judgement, e.g. "A bank loan is most suitable <i>because</i>…, although…".</div>` }
      ],
      labs: [{
        type: 'scenarios', title: 'Finance matchmaker',
        challenge: 'Pick the best source for all 5 situations.',
        items: [
          { s: 'SoleFlip\'s customers pay 30 days after delivery, so for <b>3 weeks every December</b> the bank account is short by about $2,000.', options: [
            { t: 'Overdraft', ok: true, fb: 'Yes: short-term, flexible, you only pay interest on what you use.' },
            { t: 'Selling shares', ok: false, fb: 'Way too much for a short cash gap, and you\'d give away ownership forever.' },
            { t: '10-year bank loan', ok: false, fb: 'Long-term finance for a 3-week problem. You\'d pay interest for years.' }] },
          { s: 'Noah and Freja need <b>$20,000</b> for a laser machine that will last 6 years. They don\'t want to give up control.', options: [
            { t: 'Business angel', ok: false, fb: 'Possible, but they would give away part of the business, which is exactly what they don\'t want.' },
            { t: 'Bank loan (5 years)', ok: true, fb: 'Yes: long-term asset → long-term finance, and the owners keep full control.' },
            { t: 'Trade credit', ok: false, fb: 'Trade credit is for buying stock from suppliers, usually for 30–90 days.' }] },
          { s: 'A street-food seller in rural Kenya needs <b>$150</b> for a second cooking stove. Banks won\'t lend to her.', options: [
            { t: 'Microfinance provider', ok: true, fb: 'Exactly what microfinance is for: tiny loans to people banks won\'t serve.' },
            { t: 'Share capital', ok: false, fb: 'She is a sole trader. No shares to sell.' },
            { t: 'Business angel', ok: false, fb: 'Angels invest larger sums in high-growth businesses.' }] },
          { s: 'SoleFlip wants to launch its own sneaker design. Fans online are hyped and would <b>pre-order</b>.', options: [
            { t: 'Crowdfunding', ok: true, fb: 'Yes: raises money and proves demand at the same time. Pre-orders are the rewards.' },
            { t: 'Overdraft', ok: false, fb: 'Expensive, and it doesn\'t use the fan hype at all.' },
            { t: 'Sale of assets', ok: false, fb: 'They\'d have to sell equipment they need to make the product.' }] },
          { s: 'A growing tech startup needs <b>$300,000</b>, has no profits yet, and would love an experienced mentor.', options: [
            { t: 'Retained profit', ok: false, fb: 'No profits yet, so there is nothing to retain.' },
            { t: 'Business angel', ok: true, fb: 'Yes: angels take the risk on unprofitable startups and bring experience and contacts. The cost is giving up some ownership.' },
            { t: 'Trade credit', ok: false, fb: 'Not for $300k of investment.' }] }
        ]
      }],
      worked: {
        title: 'Recommend a source (exam style)',
        intro: `<p><b>Question:</b> ${sf} Ltd wants to open a pop-up store costing $35,000 in fittings and first stock. The owners have $6,000 in retained profit and already have a $15,000 bank loan. <i>Recommend</i> a source of finance. [4 marks]</p>`,
        steps: [
          { prompt: 'What is the money for, and how long is it needed?', answer: 'Fittings and stock for a store that should last years. That calls for <b>long-term</b> finance.' },
          { prompt: 'Can they use internal finance alone?', answer: 'Retained profit ($6,000) covers only part of $35,000. Use it, but more is needed.' },
          { prompt: 'Another loan or new shares? What\'s the problem with more debt?', answer: 'They already owe $15,000, so more borrowing raises <b>[[gearing]]</b> and interest costs. As a [[company|Ltd company]] they can sell <b>shares</b> (for example to family or a business angel), which needs no repayment.' },
          { prompt: 'Make a judgement.', answer: '"I recommend <b>$6,000 retained profit + $29,000 share capital</b>, because it avoids more interest on top of the existing loan. However, Noah and Freja would share control and future profits, so they should keep a majority (over 50%) of shares."' }
        ],
        takeaway: 'Name it → apply it to the case → weigh a downside → make a judgement. That structure gets the marks in "recommend" and "evaluate" questions.'
      },
      quiz: [
        { id: '3.2-1', type: 'mcq', cmd: 'Identify', q: 'Which is an <b>internal</b> source of finance?', options: ['Retained profit', 'Bank loan', 'Trade credit', 'Business angels'], answer: 0, why: 'Retained profit comes from within the business. The others come from outside.' },
        { id: '3.2-2', type: 'mcq', q: 'Which source can a <b>sole trader</b> NOT use?', options: ['Share capital', 'Personal funds', 'Overdraft', 'Leasing'], answer: 0, why: 'Only [[companies]] can issue shares.' },
        { id: '3.2-3', type: 'mcq', cmd: 'Recommend', q: 'A shop needs $3,000 for <b>two months</b> because customers pay late. Best source?', options: ['Overdraft', 'Share issue', 'Mortgage', 'Business angel'], answer: 0, why: 'A short-term cash gap calls for flexible short-term finance: an overdraft.' },
        { id: '3.2-4', type: 'tf', q: 'Trade credit means a supplier lets the business pay for goods later, for example after 30 or 60 days.', answer: true, why: 'True. It\'s a short-term external source.' },
        { id: '3.2-5', type: 'mcq', cmd: 'Explain', q: 'The main <b>drawback</b> of finance from a business angel is…', options: ['The owners give up part of the ownership and control', 'It must be repaid in full with high interest', 'It is only available to sole traders, not to companies', 'It is short-term, so it must be renewed every year'], answer: 0, why: 'Angels take equity (shares) and often a say in decisions.' },
        { id: '3.2-6', type: 'mcq', q: 'A key <b>advantage</b> of leasing equipment is…', options: ['No large upfront payment', 'The business owns the asset at once', 'It is always cheaper in total than buying', 'It counts as retained profit'], answer: 0, why: 'Leasing spreads the cost. But the business doesn\'t own the asset, and in total it can cost more than buying.' },
        { id: '3.2-7', type: 'sort', q: 'Short-term or long-term finance?', buckets: ['Short-term', 'Long-term'], items: [
          { t: 'Overdraft', b: 0 }, { t: 'Trade credit', b: 0 }, { t: 'Share capital', b: 1 }, { t: '10-year bank loan', b: 1 }, { t: 'Mortgage', b: 1 }], why: 'Short-term = under a year, for running costs and cash gaps.' },
        { id: '3.2-8', type: 'mcq', cmd: 'Define', q: 'Microfinance providers mainly…', options: ['give small loans to low-income entrepreneurs who lack access to banks', 'buy shares in large public companies listed on a stock exchange', 'lease machinery and vehicles to manufacturing businesses', 'offer large overdrafts to multinationals with short-term cash-flow gaps'], answer: 0, why: 'Tiny loans, often to people in developing economies.' }
      ],
      explain: 'Imagine you want to start a small business (sneakers, a YouTube channel, a food truck…). Which <b>two</b> sources of finance would you use, and why?'
    },

    // ------------------------------------------------------------------ 3.3
    {
      id: '3.3', title: 'Costs and revenues', emoji: '🧾', minutes: 10, hl: false,
      goal: 'classify costs (fixed, variable, semi-variable, direct, indirect) and calculate total cost, total revenue and profit.',
      hook: `<b>MrBeast</b> doesn't only make money from YouTube ads. There's Feastables chocolate, merch, sponsorships, licensing… Each one is a separate <b>revenue stream</b>.<br><br>And his costs? Some stay the same every month (studio rent, staff salaries). Others grow with every video (prize money, travel). Know which is which and you can predict profit.`,
      cards: [
        { title: 'Fixed vs variable costs', html: `
          <p><b>Fixed costs</b> don't change when output changes (in the short run): rent, salaries, insurance, loan interest.</p>
          <p><b>Variable costs</b> change directly with output: raw materials, packaging, shipping per order.</p>
          <div class="example">${sf}: the pop-up store rent is $1,200 a month whether they sell 5 pairs or 500 (fixed). Paint and laces cost $35 per pair customised (variable).</div>
          ${F`\text{TVC} = \text{variable cost per unit} \times \text{quantity}`}
          ${F`\text{TC} = \text{TFC} + \text{TVC}`}` },
        { title: 'Semi-variable costs', html: `
          <p><b>Semi-variable costs</b> have a fixed part <b>plus</b> a part that changes with use or output.</p>
          <ul><li>A phone plan: $20 base + extra for data over the limit.</li>
              <li>Electricity: fixed standing charge + per kWh used.</li>
              <li>A salesperson: basic salary + commission per sale.</li></ul>` },
        { title: 'Direct vs indirect costs', html: `
          <p><b>Direct costs</b> can be traced to <b>one specific product</b>: the materials in a custom sneaker, the hours a worker spent on it.</p>
          <p><b>Indirect costs (overheads)</b> are shared by the whole business and can't be tied to one product: rent, the accountant, insurance, marketing the brand.</p>
          <div class="example">${sf} sells cleaning services <i>and</i> custom designs. The paint is a direct cost of custom designs. The store rent is an indirect cost (both products use the store).</div>
          <div class="tip">Fixed/variable and direct/indirect are two <b>different</b> ways to classify costs. A cost can be direct <i>and</i> variable (materials), or indirect <i>and</i> fixed (rent).</div>` },
        { title: 'Revenue and revenue streams', html: `
          ${F`\text{TR} = \text{price} \times \text{quantity sold}`}
          <p><b>Revenue streams</b> are the different sources a business earns revenue from. More streams = less risk if one dries up.</p>
          <ul><li>Spotify: Premium subscriptions + advertising.</li>
              <li>${sf}: resale, custom designs, cleaning service, merch.</li></ul>
          ${F`\text{Profit} = \text{total revenue} - \text{total costs}`}
          <p class="muted small">Revenue ≠ profit. Revenue is all the money coming in from sales. Profit is what is left after costs.</p>` }
      ],
      labs: [{ type: 'profit' }],
      worked: {
        title: 'SoleFlip\'s custom-sneaker month',
        intro: '<p>Custom pairs sell for <b>$120</b>. Paint, laces and materials cost <b>$35 per pair</b>. Fixed costs (rent + software + insurance) are <b>$1,500 per month</b>. In March they sell <b>30 pairs</b>.</p>',
        steps: [
          { prompt: 'Total revenue?', answer: 'TR = $120 × 30 = <b>$3,600</b>' },
          { prompt: 'Total variable cost?', answer: 'TVC = $35 × 30 = <b>$1,050</b>' },
          { prompt: 'Total cost?', answer: 'TC = $1,500 + $1,050 = <b>$2,550</b>' },
          { prompt: 'Profit?', answer: 'Profit = $3,600 − $2,550 = <b>$1,050</b>' },
          { prompt: 'Bonus: each pair adds $120 − $35 = $85 towards fixed costs. How many pairs before they stop making a loss?', answer: '$1,500 ÷ $85 = 17.6 → <b>18 pairs</b>. That is [[break-even]], which you\'ll study in 5.5.' }
        ],
        takeaway: 'In "calculate" questions always write the formula, show the working and include units ($). Method marks can save you even if the final number is wrong.'
      },
      quiz: [
        { id: '3.3-1', type: 'mcq', q: 'Which is a <b>fixed</b> cost for a bubble-tea shop?', options: ['Monthly rent', 'Tapioca pearls', 'Plastic cups', 'Card payment fees per sale'], answer: 0, why: 'Rent doesn\'t change with the number of drinks sold.' },
        { id: '3.3-2', type: 'sort', q: 'Classify these costs.', buckets: ['Fixed', 'Variable', 'Semi-variable'], items: [
          { t: 'Shop rent', b: 0 }, { t: 'Sneaker paint', b: 1 }, { t: 'Packaging per order', b: 1 }, { t: 'Insurance', b: 0 },
          { t: 'Salesperson: salary + commission', b: 2 }, { t: 'Electricity: standing charge + usage', b: 2 }], why: 'Semi-variable = a fixed part + a part that changes with output or use.' },
        { id: '3.3-3', type: 'num', cmd: 'Calculate', q: 'SoleFlip sells 40 pairs at $120 each. Total revenue?', answer: 4800, unit: '$', display: '$4,800', why: 'TR = price × quantity = 120 × 40 = $4,800.' },
        { id: '3.3-4', type: 'num', cmd: 'Calculate', q: 'What is SoleFlip\'s <b>total cost</b> this month?' + tbl(['', ''], [['Fixed costs', '$1,500'], ['Variable cost per pair', '$35'], ['Pairs made', '40'], ['<b>Total cost</b>', A(2900, true)]]), answer: 2900, unit: '$', display: '$2,900', hint: 'TC = TFC + (VC per unit × quantity)', why: 'TC = 1,500 + 35 × 40 = 1,500 + 1,400 = $2,900.' },
        { id: '3.3-5', type: 'num', cmd: 'Calculate', q: 'Using the last two answers (TR $4,800, TC $2,900), what is the profit?', answer: 1900, unit: '$', display: '$1,900', why: 'Profit = TR − TC = 4,800 − 2,900 = $1,900.' },
        { id: '3.3-6', type: 'mcq', q: 'SoleFlip\'s store rent is shared by cleaning, resale and custom design. For custom design, the rent is…', options: ['an indirect cost (overhead)', 'a direct cost', 'a variable cost', 'revenue expenditure that counts as capital'], answer: 0, why: 'It can\'t be traced to one product line.' },
        { id: '3.3-7', type: 'mcq', cmd: 'Define', q: 'Feastables, merch, YouTube ads and sponsorships are examples of MrBeast\'s…', options: ['revenue streams', 'fixed costs', 'sources of finance', 'indirect costs'], answer: 0, why: 'Different sources of revenue.' },
        { id: '3.3-8', type: 'tf', q: 'If output doubles, total fixed costs double too.', answer: false, why: 'False. Fixed costs stay the same when output changes (in the short run). Variable costs double.' }
      ],
      explain: 'Pick a business you know (a gym, a gaming café, a festival…). Name one <b>fixed</b>, one <b>variable</b> and one <b>semi-variable</b> cost, and two of its <b>revenue streams</b>.'
    },

    // ------------------------------------------------------------------ 3.4
    {
      id: '3.4', title: 'Final accounts', emoji: '📒', minutes: 15, hl: 'part',
      goal: 'build a profit and loss account and a balance sheet, name intangible assets, and (HL) calculate depreciation.',
      hook: `Why would <b>Taylor Swift</b> re-record six whole albums? Because she didn't own the <i>masters</i> (the copyright of the original recordings), and someone else could profit from them.<br><br>Copyrights, brands and patents are <b>assets</b> even though you can't touch them. Today you'll learn the two documents that show what a business earns and what it owns: the <b>final accounts</b>.`,
      cards: [
        { title: 'Who reads the accounts, and why?', html: `
          <ul><li><b>[[shareholders|Shareholders]] / investors</b>: is it profitable? Dividends? Worth investing?</li>
              <li><b>Managers</b>: to plan, set targets and make decisions.</li>
              <li><b>Employees</b>: job security, pay rises.</li>
              <li><b>Banks / lenders</b>: can it repay a loan?</li>
              <li><b>Suppliers</b>: will we get paid if we give [[trade credit]]?</li>
              <li><b>Government</b>: how much tax is due?</li>
              <li><b>Competitors</b>: how are we doing compared with them?</li></ul>
          <div class="tip">For questions on [[stakeholders]]' use of accounts, link each stakeholder to a <b>specific interest</b>, e.g. "the bank looks at [[liquidity]] to judge whether the loan can be repaid".</div>` },
        { title: 'The profit and loss account (P&L)', html: `
          <p>Shows revenue, costs and profit <b>over a period</b> (usually one year). It's like a video of the year.</p>
          <div class="table-wrap"><table class="fin">
            <tr><td>Sales revenue</td><td>180,000</td></tr><tr><td>Cost of sales</td><td>(72,000)</td></tr>
            <tr class="total"><td>Gross profit</td><td>108,000</td></tr><tr><td>Expenses</td><td>(60,000)</td></tr>
            <tr class="total"><td>Profit before interest and tax</td><td>48,000</td></tr><tr><td>Interest</td><td>(3,000)</td></tr>
            <tr class="total"><td>Profit before tax</td><td>45,000</td></tr><tr><td>Tax (20%)</td><td>(9,000)</td></tr>
            <tr class="total"><td>Profit for period</td><td>36,000</td></tr><tr><td>Dividends</td><td>(10,000)</td></tr>
            <tr class="total"><td>Retained profit</td><td>26,000</td></tr></table></div>
          <p class="muted small">${sf} Ltd, year 1. <b>Cost of sales</b> = direct cost of the goods sold (the sneakers they resold, materials). <b>Expenses</b> = overheads (rent, wages, ads).</p>` },
        { title: 'The balance sheet', html: `
          <p>A <b>snapshot</b> of what a business owns and owes <b>on one day</b>. It's like a photo, not a video.</p>
          <ul><li><b>Assets</b>: what it owns. <b>Non-current assets</b> (kept over 1 year: machines, vans) and <b>current assets</b> (cash, debtors, stock).</li>
              <li><b>Liabilities</b>: what it owes. <b>Current</b> (due within 1 year: [[overdraft]], creditors, short-term loans) and <b>non-current</b> (long-term loans).</li>
              <li><b>Equity</b>: the owners' money: [[share capital]] + retained earnings.</li></ul>
          ${F`\text{Total assets} - \text{total liabilities} = \text{net assets} = \text{total equity}`}
          <p><b>Debtors</b> = customers who owe <i>you</i> money. <b>Creditors</b> = suppliers <i>you</i> owe money.</p>` },
        { title: 'SoleFlip Ltd balance sheet', html: `
          <div class="table-wrap"><table class="fin">
            <tr class="head"><td>Non-current assets</td><td></td></tr>
            <tr><td>Property, plant & equipment</td><td>150,000</td></tr><tr><td>Accumulated depreciation</td><td>(30,000)</td></tr>
            <tr class="total"><td>Total non-current assets</td><td>120,000</td></tr>
            <tr class="head"><td>Current assets</td><td></td></tr>
            <tr><td>Cash</td><td>8,000</td></tr><tr><td>Debtors</td><td>6,000</td></tr><tr><td>Stock</td><td>16,000</td></tr>
            <tr class="total"><td>Total current assets</td><td>30,000</td></tr>
            <tr class="total"><td>Total assets</td><td>150,000</td></tr>
            <tr class="head"><td>Current liabilities</td><td></td></tr>
            <tr><td>Overdraft</td><td>2,000</td></tr><tr><td>Creditors</td><td>10,000</td></tr><tr><td>Short-term loans</td><td>3,000</td></tr>
            <tr class="total"><td>Total current liabilities</td><td>15,000</td></tr>
            <tr class="head"><td>Non-current liabilities</td><td></td></tr><tr><td>Borrowing (long-term loan)</td><td>45,000</td></tr>
            <tr class="total"><td>Total liabilities</td><td>60,000</td></tr>
            <tr class="total"><td>Net assets</td><td>90,000</td></tr>
            <tr class="head"><td>Equity</td><td></td></tr><tr><td>Share capital</td><td>64,000</td></tr><tr><td>Retained earnings</td><td>26,000</td></tr>
            <tr class="total"><td>Total equity</td><td>90,000</td></tr></table></div>
          <p class="muted small">Net assets (90,000) = total equity (90,000). It balances. The retained profit from the P&L (26,000) shows up here as retained earnings.</p>` },
        { title: 'Intangible assets', html: `
          <p>Non-current assets you can't touch, but that have real value:</p>
          <ul><li><b>Patents</b>: exclusive right to an invention (e.g. a new phone technology).</li>
              <li><b>Copyrights</b>: rights to creative work: music, films, games, software (Taylor Swift's masters).</li>
              <li><b>Trademarks</b>: protected names, logos and slogans (Nike's swoosh, "Just Do It").</li>
              <li><b>Goodwill</b>: when a business is <b>bought</b> for more than its net assets are worth, the extra is goodwill (brand reputation, loyal customers, location).</li>
              <li><b>Brand value</b>: the value of the brand name itself.</li></ul>
          <p class="muted small">Intangibles are hard to value and can change quickly. One scandal can wipe out brand value.</p>` },
        { title: 'Depreciation (HL only)', html: `
          <p><b>Depreciation</b> = the fall in value of a non-current asset over time (wear and tear, becoming outdated). Your phone is worth less every year.</p>
          <p><b>Straight-line method</b>: the same amount every year.</p>
          ${F`\text{Annual depreciation} = \frac{\text{purchase cost} - \text{residual value}}{\text{life span (years)}}`}
          <p><b>Units of production method</b>: based on how much the asset is actually used.</p>
          ${F`\text{Depreciation per unit} = \frac{\text{purchase cost} - \text{residual value}}{\text{expected total units over its life}}`}${F`\text{Depreciation this year} = \text{per unit} \times \text{units made}`}
          <div class="example">Gaming laptop: cost $2,000, sells for $400 after 4 years. Straight-line: (2,000 − 400) ÷ 4 = <b>$400 per year</b>.</div>
          <p class="muted small">Depreciation is an <b>expense</b> on the P&L, and it reduces the value of the asset on the balance sheet (accumulated depreciation).</p>` }
      ],
      labs: [
        { type: 'pnl' },
        {
          type: 'sort', title: 'Build the balance sheet: where does each item go?',
          challenge: 'Put all 10 items in the right section.',
          buckets: ['Non-current asset', 'Current asset', 'Current liability', 'Non-current liability', 'Equity'],
          items: [
            { t: 'Laser machine', b: 0 }, { t: 'Patent on a sneaker-cleaning formula', b: 0 }, { t: 'Cash in the bank', b: 1 },
            { t: 'Customers who owe SoleFlip money (debtors)', b: 1 }, { t: 'Unsold sneakers (stock)', b: 1 },
            { t: 'Money owed to suppliers (creditors)', b: 2 }, { t: 'Overdraft', b: 2 }, { t: '5-year bank loan', b: 3 },
            { t: 'Share capital', b: 4 }, { t: 'Retained earnings', b: 4 }
          ]
        },
        { type: 'depreciation' }
      ],
      worked: {
        title: 'From sales to retained profit',
        intro: '<p>Last year a gaming café had sales revenue <b>$250,000</b>, cost of sales <b>$90,000</b>, expenses <b>$110,000</b>, interest <b>$5,000</b>, tax at <b>25%</b> of profit before tax, and paid <b>$15,000</b> in dividends.</p>',
        steps: [
          { prompt: 'Gross profit?', answer: '250,000 − 90,000 = <b>$160,000</b>' },
          { prompt: 'Profit before interest and tax?', answer: '160,000 − 110,000 = <b>$50,000</b>' },
          { prompt: 'Profit before tax?', answer: '50,000 − 5,000 = <b>$45,000</b>' },
          { prompt: 'Tax and profit for period?', answer: 'Tax = 25% × 45,000 = $11,250 → profit for period = <b>$33,750</b>' },
          { prompt: 'Retained profit?', answer: '33,750 − 15,000 = <b>$18,750</b>, which is added to retained earnings on the balance sheet.' }
        ],
        takeaway: 'Learn the P&L order by heart: Revenue → Gross profit → PBIT → PBT → Profit for period → Retained profit. Each step takes away one thing: cost of sales, expenses, interest, tax, dividends.'
      },
      quiz: [
        { id: '3.4-1', type: 'mcq', q: 'A supplier deciding whether to give SoleFlip 60 days of trade credit mostly wants to know…', options: ['whether SoleFlip can pay its short-term debts', 'how much corporation tax SoleFlip paid last year', 'how much the directors of SoleFlip are paid', 'how many followers SoleFlip has on Instagram'], answer: 0, why: 'Suppliers care about liquidity: will they get paid?' },
        { id: '3.4-2', type: 'num', cmd: 'Calculate', q: 'Sales revenue $180,000 and cost of sales $72,000. Gross profit?', answer: 108000, display: '$108,000', unit: '$', why: 'Gross profit = sales revenue − cost of sales.' },
        { id: '3.4-3', type: 'num', cmd: 'Calculate', q: 'Work down the profit and loss account to find the <b>profit for period</b>.' + tbl(['', '$'], [['Profit before interest and tax', '48,000'], ['Interest', '(3,000)'], ['Profit before tax', A(45000)], ['Tax (20% of profit before tax)', A(9000)], ['<b>Profit for period</b>', A(36000, true)]]), answer: 36000, display: '$36,000', unit: '$', hint: 'First PBT = PBIT − interest. Then subtract 20% tax.', why: 'PBT = 45,000. Tax = 9,000. Profit for period = $36,000.' },
        { id: '3.4-4', type: 'num', cmd: 'Calculate', q: 'Profit for period is $36,000 and dividends are $10,000. Retained profit?', answer: 26000, display: '$26,000', unit: '$', why: 'Retained profit = profit for period − dividends.' },
        { id: '3.4-5', type: 'mcq', q: 'Which is a <b>current asset</b>?', options: ['Debtors', 'Delivery van', 'Creditors', 'Share capital'], answer: 0, why: 'Debtors (money owed to you) will turn into cash within a year. Creditors is a liability.' },
        { id: '3.4-6', type: 'mcq', q: 'Which is an <b>intangible</b> asset?', options: ['A registered trademark logo', 'A new warehouse building', 'A stock of sneakers to sell', 'Cash held in the bank'], answer: 0, why: 'Trademarks can\'t be touched but have value.' },
        { id: '3.4-7', type: 'tf', q: 'Total assets − total liabilities = total equity.', answer: true, why: 'True. Net assets always equal total equity. That is why it is called a <i>balance</i> sheet.' },
        { id: '3.4-8', type: 'mcq', cmd: 'Define', q: 'Goodwill appears when…', options: ['a business is bought for more than the value of its net assets', 'customers leave lots of positive reviews about the business', 'the business gives a share of its profit to local charities', 'the business\'s non-current assets lose value over time'], answer: 0, why: 'Goodwill = price paid − net assets. The buyer pays extra for reputation, customers, location and so on.' },
        { id: '3.4-9', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> What is the van\'s annual <b>straight-line depreciation</b>?' + tbl(['Van', ''], [['Purchase cost', '$30,000'], ['Residual value', '$6,000'], ['Life span', '4 years']]), answer: 6000, display: '$6,000', unit: '$', why: '(30,000 − 6,000) ÷ 4 = $6,000 per year.' },
        { id: '3.4-10', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> What is this year\'s depreciation using the <b>units of production</b> method?' + tbl(['Machine', ''], [['Purchase cost', '$10,000'], ['Residual value', '$1,000'], ['Expected total units over its life', '90,000'], ['Units made this year', '30,000']]), answer: 3000, display: '$3,000', unit: '$', hint: 'Per unit = (cost − residual) ÷ total units.', why: '(10,000 − 1,000) ÷ 90,000 = $0.10 per unit × 30,000 = $3,000.' }
      ],
      explain: 'What is the difference between the <b>profit and loss account</b> and the <b>balance sheet</b>? (Hint: video vs photo.)'
    },

    // ------------------------------------------------------------------ 3.5
    {
      id: '3.5', title: 'Profitability and liquidity ratios', emoji: '📊', minutes: 12, hl: false,
      goal: 'calculate and interpret GPM, profit margin, ROCE, current ratio and acid-test ratio, and suggest ways to improve them.',
      hook: `Two sneaker resellers each made <b>$10,000 profit</b> last year. Equally good?<br><br>Reseller A sold $20,000 worth of sneakers. Reseller B sold $500,000 worth. One keeps half of every dollar; the other keeps 2 cents. <b>Ratios</b> turn raw numbers into comparisons that actually mean something.`,
      cards: [
        { title: 'Why ratios?', html: `
          <p>Raw numbers don't tell you much. Ratios let you compare:</p>
          <ul><li>with <b>last year</b> (getting better or worse?),</li>
              <li>with <b>competitors</b> or the industry average,</li>
              <li>with <b>targets</b>.</li></ul>
          <p><b>Profitability ratios</b>: how well it turns sales into profit. <b>Liquidity ratios</b>: can it pay bills due in the next 12 months?</p>` },
        { title: 'Gross profit margin & profit margin', html: `
          ${F`\text{GPM} = \frac{\text{gross profit}}{\text{sales revenue}} \times 100`}
          <p>How many cents of every $1 of sales are left after paying for the goods themselves.</p>
          ${F`\text{Profit margin} = \frac{\text{profit before interest and tax}}{\text{sales revenue}} \times 100`}
          <p>What is left after <i>all</i> operating expenses (rent, wages, ads) too.</p>
          <div class="example">${sf}: GPM = 108,000 ÷ 180,000 × 100 = <b>60%</b>. Profit margin = 48,000 ÷ 180,000 × 100 = <b>26.7%</b>. So expenses eat 33.3 cents of every $1 of sales.</div>
          <p><b>Improve GPM</b>: raise prices, find cheaper suppliers, cut waste. <b>Improve profit margin</b>: all of those, plus cutting expenses (cheaper rent, less wasted ad spend).</p>` },
        { title: 'ROCE: return on capital employed', html: `
          ${F`\text{ROCE} = \frac{\text{profit before interest and tax}}{\text{capital employed}} \times 100`}
          ${F`\text{Capital employed} = \text{non-current liabilities} + \text{total equity}`}
          <p>For every $100 invested long-term in the business, how much profit does it make? Compare it with the interest rate at a bank: if ROCE is lower, the owners would have done better leaving their money in a savings account.</p>
          <div class="example">${sf}: capital employed = 45,000 + 90,000 = 135,000. ROCE = 48,000 ÷ 135,000 × 100 = <b>35.6%</b>. Excellent.</div>` },
        { title: 'Current ratio & acid-test ratio', html: `
          ${F`\text{Current ratio} = \frac{\text{current assets}}{\text{current liabilities}}`}
          <p>Rule of thumb: <b>1.5 – 2</b> is comfortable. Below 1 means it may struggle to pay. Too high (e.g. 4) means cash or stock is sitting idle instead of being invested.</p>
          ${F`\text{Acid-test ratio} = \frac{\text{current assets} - \text{stock}}{\text{current liabilities}}`}
          <p>Stricter: it removes stock because stock might not sell quickly (imagine last season's sneakers). Around <b>1</b> is fine. Supermarkets often run below 1 because their stock sells within days.</p>
          <div class="example">${sf}: current ratio = 30,000 ÷ 15,000 = <b>2.0</b>. Acid test = (30,000 − 16,000) ÷ 15,000 = <b>0.93</b>. Healthy, but a lot of its liquidity is tied up in sneakers.</div>` },
        { title: 'Improving liquidity, and the limits of ratios', html: `
          <p><b>Improve liquidity</b>: sell off excess stock (even at a discount), get long-term finance instead of short-term, sell unused assets, issue shares, cut current liabilities.</p>
          <p><b>Limits</b> of ratio analysis:</p>
          <ul><li>Based on <b>past</b> data. Next year may be different.</li>
              <li>[[balance sheet|Balance sheet]] = <b>one day</b> (stock could be unusually high that day).</li>
              <li>Only useful <b>compared</b> with something.</li>
              <li>Ignores <b>qualitative</b> factors: staff morale, brand, the economy.</li></ul>
          <div class="tip">In "analyse" questions don't just calculate. Say what the number <i>means</i> for this business and compare it with something (last year, the industry, a benchmark).</div>` }
      ],
      labs: [{ type: 'ratios', mode: 'liquidity' }],
      worked: {
        title: 'Interpret, don\'t just calculate',
        intro: '<p>A bubble-tea chain: sales revenue $400,000, gross profit $260,000, PBIT $20,000. Current assets $30,000 (of which stock $6,000), current liabilities $40,000.</p>',
        steps: [
          { prompt: 'GPM?', answer: '260,000 ÷ 400,000 × 100 = <b>65%</b>. Ingredients are cheap compared with the price.' },
          { prompt: 'Profit margin?', answer: '20,000 ÷ 400,000 × 100 = <b>5%</b>.' },
          { prompt: 'What does the gap between 65% and 5% tell you?', answer: 'Expenses (rent in busy locations, staff wages, marketing) eat <b>60%</b> of revenue. The problem is <b>overheads</b>, not ingredients.' },
          { prompt: 'Current ratio and acid test?', answer: 'Current ratio = 30,000 ÷ 40,000 = <b>0.75</b>. Acid test = (30,000 − 6,000) ÷ 40,000 = <b>0.6</b>.' },
          { prompt: 'Judgement?', answer: 'Both are below 1, which looks risky. But a café sells stock for cash every day, so it can manage with low ratios. Still, it should watch cash closely and consider renegotiating rent.' }
        ],
        takeaway: 'Calculate → interpret (what does it mean?) → compare (benchmark, last year) → recommend. That is how "analyse" answers score.'
      },
      quiz: [
        { id: '3.5-1', type: 'num', cmd: 'Calculate', q: 'Gross profit $108,000, sales revenue $180,000. GPM (%)?', answer: 60, tol: 0.1, unit: '%', display: '60%', why: '108,000 ÷ 180,000 × 100 = 60%.' },
        { id: '3.5-2', type: 'num', cmd: 'Calculate', q: 'PBIT $48,000, sales revenue $180,000. Profit margin (%, 1 dp)?', answer: 26.7, tol: 0.1, unit: '%', display: '26.7%', why: '48,000 ÷ 180,000 × 100 = 26.67%.' },
        { id: '3.5-3', type: 'num', cmd: 'Calculate', q: 'What is the <b>ROCE</b> (%, 1 dp)?' + tbl(['', '$'], [['Profit before interest and tax', '48,000'], ['Non-current liabilities', '45,000'], ['Total equity', '90,000'], ['Capital employed', A(135000)]]), answer: 35.6, tol: 0.1, unit: '%', display: '35.6%', hint: 'Capital employed = non-current liabilities + equity.', why: 'Capital employed = 135,000. 48,000 ÷ 135,000 × 100 = 35.6%.' },
        { id: '3.5-4', type: 'num', cmd: 'Calculate', q: 'Current assets $30,000, current liabilities $15,000. Current ratio?', answer: 2, tol: 0.01, display: '2 (or 2:1)', why: '30,000 ÷ 15,000 = 2.' },
        { id: '3.5-5', type: 'num', cmd: 'Calculate', q: 'What is the <b>acid-test ratio</b> (2 dp)?' + tbl(['', '$'], [['Current assets', '30,000'], ['…of which stock', '16,000'], ['Current liabilities', '15,000']]), answer: 0.93, tol: 0.01, display: '0.93', why: '(30,000 − 16,000) ÷ 15,000 = 0.93.' },
        { id: '3.5-6', type: 'mcq', cmd: 'Explain', q: 'Why does the acid-test ratio leave out stock?', options: ['Stock may be hard to turn into cash quickly', 'Stock is a liability, not an asset', 'Stock is already counted in cash', 'Stock is a non-current asset that lasts years'], answer: 0, why: 'Stock might not sell soon (or only at a discount), so it is the least liquid current asset.' },
        { id: '3.5-7', type: 'mcq', q: 'Which action would improve <b>GPM</b>?', options: ['Switching to a cheaper supplier of sneakers', 'Cutting the marketing budget for next year', 'Taking out a bank loan to buy more stock', 'Chasing debtors so they pay SoleFlip faster'], answer: 0, why: 'GPM only depends on revenue and [[cost of sales]]. Marketing is an expense, so cutting it improves the profit margin, not GPM.' },
        { id: '3.5-8', type: 'tf', q: 'A current ratio of 5 is always a great sign.', answer: false, why: 'False. It may mean too much idle cash or stock that could be invested to earn more.' },
        { id: '3.5-9', type: 'mcq', q: 'SoleFlip collects $3,000 from debtors (they pay what they owe). What happens to the current ratio?', options: ['Stays the same', 'Rises', 'Falls', 'Rises, then falls'], answer: 0, why: 'Debtors fall by $3,000 and cash rises by $3,000. Both are current assets, so the total doesn\'t change. Try it in the lab!' }
      ],
      explain: 'Explain why a business could have a high <b>profit margin</b> but still be in trouble because of a low <b>acid-test ratio</b>.'
    },

    // ------------------------------------------------------------------ 3.6
    {
      id: '3.6', title: 'Debt/efficiency ratio analysis', emoji: '⚙️', minutes: 12, hl: true,
      goal: 'calculate and interpret stock turnover, debtor days, creditor days and gearing, and explain insolvency vs bankruptcy.',
      hook: `You lent a mate $50 for concert tickets. It's been <b>3 months</b>. You still haven't got it back, and now <i>you</i> can't afford the festival.<br><br>Businesses have the same problem with customers who pay late (<b>debtor days</b>), and the reverse with suppliers they pay late (<b>creditor days</b>). Efficiency ratios measure how fast money moves.`,
      cards: [
        { title: 'Stock turnover', html: `
          ${F`\text{Stock turnover (times)} = \frac{\text{cost of sales}}{\text{average stock}}`}
          ${F`\text{Stock turnover (days)} = \frac{\text{average stock}}{\text{cost of sales}} \times 365`}
          ${F`\text{Average stock} = \frac{\text{opening stock} + \text{closing stock}}{2}`}
          <p>How often stock is sold and replaced. A <b>higher</b> number of times (or fewer days) is generally better: less money tied up, less risk of stock going out of fashion.</p>
          <div class="example">${sf}: 72,000 ÷ 16,000 = <b>4.5 times</b> a year = every <b>81 days</b>. A sneaker can go out of hype in 81 days. Room to improve.</div>
          <p class="muted small">It depends on the industry: a fruit shop needs a turnover of days, a car dealer can run for months.</p>` },
        { title: 'Debtor days & creditor days', html: `
          ${F`\text{Debtor days} = \frac{\text{debtors}}{\text{total sales revenue}} \times 365`}
          <p>Average number of days customers take to pay. <b>Lower is better</b> (cash comes in faster).</p>
          ${F`\text{Creditor days} = \frac{\text{creditors}}{\text{cost of sales}} \times 365`}
          <p>Average number of days the business takes to pay its suppliers. <b>Higher</b> helps cash flow, but paying too late hurts relationships, and suppliers may stop giving credit.</p>
          <div class="example">${sf}: debtor days = 6,000 ÷ 180,000 × 365 = <b>12.2 days</b>. Creditor days = 10,000 ÷ 72,000 × 365 = <b>50.7 days</b>. Customers pay in ~12 days while SoleFlip pays suppliers in ~51. Great for cash.</div>` },
        { title: 'Gearing ratio', html: `
          ${F`\text{Gearing} = \frac{\text{non-current liabilities}}{\text{capital employed}} \times 100`}
          <p>How much of the long-term finance is <b>borrowed</b>.</p>
          <ul><li><b>Above 50%</b>: highly geared. Lots of interest to pay, risky if interest rates rise or sales drop.</li>
              <li><b>Below 25%</b>: low gearing. Safe, but maybe too cautious about growth.</li></ul>
          <div class="example">${sf}: 45,000 ÷ 135,000 × 100 = <b>33.3%</b>. Moderate.</div>
          <p><b>Reduce gearing</b>: issue shares, use [[retained profit]], repay loans.</p>` },
        { title: 'Improving efficiency', html: `
          <ul><li><b>Stock turnover</b>: [[just-in-time|just-in-time (JIT)]] ordering, sell slow-moving stock at a discount, stock fewer product lines.</li>
              <li><b>Debtor days</b>: shorter credit terms, discounts for early payment, chase late payers, <b>debt factoring</b> (sell your debts to a factoring company for cash now, minus a fee).</li>
              <li><b>Creditor days</b>: negotiate longer payment terms with suppliers, without damaging the relationship.</li></ul>` },
        { title: 'Insolvency vs bankruptcy', html: `
          <p><b>Insolvency</b> is a <b>financial situation</b>: the business (or person) can't pay its debts when they are due.</p>
          <p><b>Bankruptcy</b> is a <b>legal process</b>: a court officially declares an <i>individual</i> unable to pay, and their assets are sold to repay creditors. For [[companies]], the equivalent is usually called <b>liquidation</b>.</p>
          <p>Insolvency can sometimes be fixed (new finance, restructuring). Bankruptcy is the legal end point.</p>
          <div class="tip">Efficiency and gearing ratios are early warning signs. A rising gearing ratio plus rising debtor days is a classic route to insolvency.</div>` }
      ],
      labs: [{ type: 'ratios', mode: 'efficiency' }],
      worked: {
        title: 'Diagnose a struggling business',
        intro: '<p>An electronics retailer: cost of sales $600,000, opening stock $140,000, closing stock $160,000, sales revenue $900,000, debtors $150,000, creditors $40,000, non-current liabilities $500,000, total equity $300,000.</p>',
        steps: [
          { prompt: 'Average stock and stock turnover (times)?', answer: 'Average = (140,000 + 160,000) ÷ 2 = 150,000. Turnover = 600,000 ÷ 150,000 = <b>4 times</b> (≈ 91 days).' },
          { prompt: 'Debtor days?', answer: '150,000 ÷ 900,000 × 365 = <b>60.8 days</b>' },
          { prompt: 'Creditor days?', answer: '40,000 ÷ 600,000 × 365 = <b>24.3 days</b>' },
          { prompt: 'Gearing?', answer: 'Capital employed = 800,000. 500,000 ÷ 800,000 × 100 = <b>62.5%</b>' },
          { prompt: 'Diagnosis?', answer: 'Customers take ~61 days to pay, but it pays suppliers in ~24 days, so cash goes out faster than it comes in. Electronics go out of date quickly, so 91 days of stock is risky. And it is highly geared (62.5%). Recommend: chase debtors / factoring, negotiate longer supplier credit, cut stock levels, and avoid more borrowing.' }
        ],
        takeaway: 'Look at debtor days and creditor days together: you want customers to pay you before you have to pay your suppliers.'
      },
      quiz: [
        { id: '3.6-1', type: 'num', cmd: 'Calculate', q: 'Cost of sales $72,000, average stock $16,000. Stock turnover (number of times)?', answer: 4.5, tol: 0.01, display: '4.5 times', why: '72,000 ÷ 16,000 = 4.5.' },
        { id: '3.6-2', type: 'num', cmd: 'Calculate', q: 'Same numbers: stock turnover in <b>days</b> (1 dp)?', answer: 81.1, tol: 0.15, display: '81.1 days', why: '16,000 ÷ 72,000 × 365 = 81.1 days.' },
        { id: '3.6-3', type: 'num', cmd: 'Calculate', q: 'Debtors $6,000, sales revenue $180,000. Debtor days (1 dp)?', answer: 12.2, tol: 0.1, display: '12.2 days', why: '6,000 ÷ 180,000 × 365 = 12.2.' },
        { id: '3.6-4', type: 'num', cmd: 'Calculate', q: 'Creditors $10,000, cost of sales $72,000. Creditor days (1 dp)?', answer: 50.7, tol: 0.1, display: '50.7 days', why: '10,000 ÷ 72,000 × 365 = 50.7.' },
        { id: '3.6-5', type: 'num', cmd: 'Calculate', q: 'Non-current liabilities $45,000, total equity $90,000. Gearing (%, 1 dp)?', answer: 33.3, tol: 0.1, unit: '%', display: '33.3%', why: '45,000 ÷ (45,000 + 90,000) × 100 = 33.3%.' },
        { id: '3.6-6', type: 'mcq', cmd: 'Explain', q: 'A gearing ratio of 65% means…', options: ['the business is highly geared and exposed to rising interest rates', 'the business has no long-term debt at all', '65% of the business\'s sales revenue is profit', 'the business is insolvent and must stop trading at once by law'], answer: 0, why: 'Over 50% = highly geared: most long-term finance is borrowed.' },
        { id: '3.6-7', type: 'mcq', q: 'Which would most likely <b>reduce debtor days</b>?', options: ['Offering a 2% discount for paying within 10 days', 'Extending customers\' credit terms to 90 days', 'Buying more of its stock from suppliers on credit', 'Taking out a long-term loan to pay its creditors'], answer: 0, why: 'Early-payment discounts encourage customers to pay faster.' },
        { id: '3.6-8', type: 'mcq', cmd: 'Distinguish', q: 'Which statement is correct?', options: ['Insolvency is being unable to pay debts when due; bankruptcy is the legal process declared by a court', 'Bankruptcy and insolvency mean exactly the same thing: a business that has run out of cash', 'Insolvency is the court order that closes a business; bankruptcy is a short-term cash-flow problem', 'Only profitable businesses can become insolvent, because only they are allowed to borrow money'], answer: 0, why: 'Insolvency = the financial situation; bankruptcy = the legal status/process (liquidation for companies).' },
        { id: '3.6-9', type: 'tf', q: 'For a fresh-fruit shop, a high stock turnover is a good thing.', answer: true, why: 'True. Fruit goes off fast, so it needs to sell quickly.' }
      ],
      explain: 'Explain to a friend why a business wants <b>low debtor days</b> but <b>high creditor days</b>. Use the "lending your mate money" idea.'
    },

    // ------------------------------------------------------------------ 3.7
    {
      id: '3.7', title: 'Cash flow', emoji: '💧', minutes: 12, hl: false,
      goal: 'explain profit vs cash flow, the working capital cycle, build a cash flow forecast and suggest fixes for cash problems.',
      hook: `You sell your old PS5 to a classmate for <b>$400</b>. Great deal: you only paid $250 for it. You made $150 profit!<br><br>He'll pay you "next month". Tonight you want pizza and you have $0.<br><br>That is the difference between <b>profit</b> and <b>cash</b>. And it is the No.1 reason small businesses fail: not lack of profit, but running out of cash.`,
      cards: [
        { title: 'Profit ≠ cash', html: `
          <p><b>Profit</b> = revenue − costs, counted when a sale is <b>made</b>, even if the customer hasn't paid yet.</p>
          <p><b>Cash flow</b> = actual money coming <b>in</b> and going <b>out</b> of the bank account, and <b>when</b> it happens.</p>
          <p>A profitable business can run out of cash if:</p>
          <ul><li>customers buy on <b>credit</b> and pay later,</li>
              <li>it buys lots of <b>stock</b> before selling it,</li>
              <li>it spends on big <b>assets</b> ([[capital expenditure]]),</li>
              <li>sales are <b>seasonal</b> (a ski shop in summer).</li></ul>
          <div class="tip">"Cash is king." Many profitable businesses still go [[insolvent]] because the cash ran out first.</div>` },
        { title: 'Working capital & the working capital cycle', html: `
          ${F`\text{Working capital} = \text{current assets} - \text{current liabilities}`}
          <p>The money available for day-to-day running.</p>
          <p><b>Working capital cycle</b>: the time between paying out cash for materials and receiving cash from customers.</p>
          <p style="font-size:1.05rem">💵 Cash → 📦 buy stock/materials → 🛠 produce → 🛒 sell (often on credit) → 🧾 debtors → 💵 cash</p>
          <div class="example">${sf} pays for sneakers on day 0, cleans/customises them for 10 days, sells on day 25, and the customer pays on day 40. Cash is tied up for 40 days, minus however long the supplier gives them to pay.</div>` },
        { title: 'The cash flow forecast', html: `
          <p>A forecast of cash in and out, month by month.</p>
          <div class="table-wrap"><table class="fin">
            <tr><th></th><th>Jan</th><th>Feb</th></tr>
            <tr><td>Opening balance</td><td>2,000</td><td>1,500</td></tr>
            <tr><td>Cash inflows (sales, loans…)</td><td>8,000</td><td>11,000</td></tr>
            <tr><td>Cash outflows (stock, wages, rent…)</td><td>8,500</td><td>9,000</td></tr>
            <tr><td>Net cash flow (in − out)</td><td class="neg">−500</td><td>2,000</td></tr>
            <tr class="total"><td>Closing balance</td><td>1,500</td><td>3,500</td></tr></table></div>
          ${F`\text{Closing balance} = \text{opening balance} + \text{net cash flow}`}${F`\text{Closing balance this month} = \text{opening balance next month}`}
          <p class="muted small">Forecasts can be wrong: sales can disappoint, costs rise, the economy changes. They are a plan, not a promise.</p>` },
        { title: 'Investment, profit and cash flow', html: `
          <p>Investing (e.g. in a new machine) <b>uses cash now</b> and should bring <b>profit later</b>. So a growing business often has <b>low cash</b> even when profits look good.</p>
          <p>Growing too fast and running out of cash is called <b>overtrading</b>.</p>
          <div class="example">${sf} buys a $20,000 laser machine in March. Profits from custom designs go up from April, but the bank balance is negative until summer.</div>` },
        { title: 'Fixing cash flow problems', html: `
          <p><b>1. Reduce cash outflows</b>: negotiate longer credit from suppliers, lease instead of buy, cut unnecessary costs, delay big spending.</p>
          <p><b>2. Improve cash inflows</b>: chase debtors, give shorter credit terms, offer discounts for paying cash, run a sale to clear stock, change the product mix.</p>
          <p><b>3. Get extra finance</b>: [[overdraft]], short-term loan, sell unused assets, [[debt factoring]].</p>
          <div class="tip">Each strategy has a downside, e.g. shorter credit terms might push customers to competitors. "Evaluate" answers need that downside.</div>` }
      ],
      labs: [{ type: 'cashflow' }],
      worked: {
        title: 'Complete the forecast',
        intro: '<p>A food truck starts April with <b>$1,000</b>. April: sales $6,000, a $4,000 new fryer, wages and ingredients $3,500. May: sales $9,000, wages and ingredients $4,500.</p>',
        steps: [
          { prompt: 'April net cash flow?', answer: '6,000 − (4,000 + 3,500) = <b>−$1,500</b>' },
          { prompt: 'April closing balance?', answer: '1,000 + (−1,500) = <b>−$500</b>. They need an overdraft!' },
          { prompt: 'May opening balance?', answer: 'Same as April closing: <b>−$500</b>' },
          { prompt: 'May net cash flow and closing balance?', answer: '9,000 − 4,500 = +4,500 → closing = −500 + 4,500 = <b>$4,000</b>' },
          { prompt: 'What could they have done about April?', answer: 'Lease the fryer instead of buying it (spreads the $4,000), or arrange a <b>short overdraft</b> in advance. The problem is only timing: the business is profitable.' }
        ],
        takeaway: 'Always carry the closing balance forward as next month\'s opening balance. Most mistakes on cash flow questions come from forgetting this.'
      },
      quiz: [
        { id: '3.7-1', type: 'tf', q: 'A profitable business can\'t run out of cash.', answer: false, why: 'False. Credit sales, stock purchases and big investments can drain cash even when profit is high.' },
        { id: '3.7-2', type: 'mcq', cmd: 'Explain', q: 'Which is the best explanation of why profit and cash can differ?', options: ['Credit sales count as revenue before the cash is received', 'Profit includes the share capital raised in the year', 'Cash flow includes depreciation as an outflow', 'Profit is always higher than cash in a business that is growing'], answer: 0, why: 'Revenue is recorded when the sale is made; cash arrives when the customer pays.' },
        { id: '3.7-3', type: 'num', cmd: 'Calculate', q: 'Complete the forecast.' + tbl(['', 'January ($)'], [['Opening balance', '2,000'], ['Cash inflows', '9,000'], ['Cash outflows', '12,500'], ['Net cash flow', A(-3500)], ['<b>Closing balance</b>', A(-1500, true)]]), answer: -1500, display: '−$1,500', unit: '$', why: '2,000 + 9,000 − 12,500 = −1,500.' },
        { id: '3.7-4', type: 'num', cmd: 'Calculate', q: 'Current assets $30,000 and current liabilities $15,000. Working capital?', answer: 15000, display: '$15,000', unit: '$', why: 'Working capital = CA − CL.' },
        { id: '3.7-5', type: 'mcq', q: 'The correct order of the working capital cycle is…', options: ['Cash → stock → production → sales → debtors → cash', 'Cash → debtors → sales → production → stock → cash', 'Cash → sales → stock → production → debtors → cash', 'Stock → cash → debtors → production → sales → cash'], answer: 0, why: 'Money goes out for materials first and comes back when customers pay.' },
        { id: '3.7-6', type: 'mcq', cmd: 'Recommend', q: 'A toy shop is short of cash every November (it buys Christmas stock), but customers pay in December. Best fix?', options: ['A short-term overdraft', 'Issue new shares', 'A 20-year mortgage', 'Sell the shop\'s tills'], answer: 0, why: 'A seasonal, temporary gap calls for flexible short-term finance.' },
        { id: '3.7-7', type: 'mcq', q: 'Which would <b>improve cash inflows</b>?', options: ['Offering a discount for immediate payment', 'Giving customers 90 days to pay instead of 30', 'Buying extra stock before prices rise', 'Paying suppliers earlier than agreed'], answer: 0, why: 'Discounts encourage customers to pay sooner.' },
        { id: '3.7-8', type: 'tf', q: 'March\'s closing balance is April\'s opening balance.', answer: true, why: 'True: the forecast rolls forward.' }
      ],
      explain: 'Explain the <b>PS5 story</b> in your own words: how can you make a profit and still have no money?'
    },

    // ------------------------------------------------------------------ 3.8
    {
      id: '3.8', title: 'Investment appraisal', emoji: '🔮', minutes: 15, hl: 'part',
      goal: 'calculate and evaluate payback period, average rate of return (ARR) and (HL) net present value (NPV).',
      hook: `Would you rather have <b>$100 today</b> or <b>$100 in three years</b>?<br><br>Easy: today. You could invest it, prices rise in the meantime, and who knows what happens in three years. Businesses ask the same question about every big investment: <i>is this worth the money, and how quickly do we get it back?</i>`,
      cards: [
        { title: 'What is investment appraisal?', html: `
          <p>Methods to judge whether a capital investment (machine, store, new product) is worth it, using its <b>forecast net cash flows</b> (cash in − cash out each year).</p>
          <p>Three methods:</p>
          <ol><li><b>Payback period</b>: how fast do we get the money back?</li>
              <li><b>Average rate of return (ARR)</b>: average yearly profit as a % of the cost.</li>
              <li><b>Net present value (NPV)</b> <span class="tag">HL</span>: total value in today's money.</li></ol>
          <div class="example">${sf}: laser machine cost <b>$20,000</b>. Forecast net cash flows: Y1 $6,000, Y2 $8,000, Y3 $9,000, Y4 $7,000.</div>` },
        { title: '1. Payback period', html: `
          <p>Add up the net cash flows year by year (<b>cumulative</b>) until the cost is covered.</p>
          <div class="table-wrap"><table class="fin"><tr><th>Year</th><th>Net cash flow</th><th>Cumulative</th></tr>
            <tr><td>0</td><td class="neg">(20,000)</td><td class="neg">(20,000)</td></tr>
            <tr><td>1</td><td>6,000</td><td class="neg">(14,000)</td></tr>
            <tr><td>2</td><td>8,000</td><td class="neg">(6,000)</td></tr>
            <tr><td>3</td><td>9,000</td><td>3,000</td></tr></table></div>
          <p>After year 2 we still need <b>$6,000</b>. Year 3 brings $9,000.</p>
          ${F`\text{Months} = \frac{\text{amount still needed}}{\text{net cash flow of that year}} \times 12 = \frac{6{,}000}{9{,}000} \times 12 = 8`}
          <p>Payback = <b>2 years 8 months</b>. ✅ Simple, focuses on risk and cash. ❌ Ignores everything after payback and ignores profitability.</p>` },
        { title: '2. Average rate of return (ARR)', html: `
          ${F`\text{ARR} = \frac{\text{average annual profit}}{\text{cost of investment}} \times 100`}${F`\text{average annual profit} = \frac{\text{total returns} - \text{cost of investment}}{\text{years of use}}`}
          <p>Total returns = 6,000 + 8,000 + 9,000 + 7,000 = 30,000<br>
             Total profit = 30,000 − 20,000 = 10,000<br>
             Per year = 10,000 ÷ 4 = 2,500<br>
             ARR = 2,500 ÷ 20,000 × 100 = <b>12.5%</b></p>
          <p>Compare with the interest rate on a loan or savings, or with other projects. ✅ Shows profitability, easy to compare. ❌ Ignores <b>timing</b>: $9,000 in year 1 counts the same as $9,000 in year 4.</p>` },
        { title: '3. Net present value (HL only)', html: `
          <p>Money in the future is worth less than money today (you could earn interest, there's inflation, and the future is risky). So we <b>discount</b> future cash flows to <b>present values</b>.</p>
          ${F`\text{Present value} = \text{net cash flow} \times \text{discount factor}`}${F`\text{NPV} = \sum \text{present values} - \text{cost of investment}`}
          <p>Discount factors are given in the exam (table). At 6%:</p>
          <div class="table-wrap"><table class="fin"><tr><th>Year</th><th>Cash flow</th><th>DF (6%)</th><th>PV</th></tr>
            <tr><td>1</td><td>6,000</td><td>0.9434</td><td>5,660.40</td></tr>
            <tr><td>2</td><td>8,000</td><td>0.8900</td><td>7,120.00</td></tr>
            <tr><td>3</td><td>9,000</td><td>0.8396</td><td>7,556.40</td></tr>
            <tr><td>4</td><td>7,000</td><td>0.7921</td><td>5,544.70</td></tr>
            <tr class="total"><td>Total PV</td><td></td><td></td><td>25,881.50</td></tr></table></div>
          <p>NPV = 25,881.50 − 20,000 = <b>$5,881.50</b>. Positive → worth investing at 6%.</p>
          <p>✅ Takes the time value of money into account. ❌ The discount rate is a guess; it's harder to explain.</p>` },
        { title: 'Beyond the numbers', html: `
          <p>All three methods rely on <b>forecasts</b>, which are guesses. A strong answer also brings in <b>qualitative</b> factors:</p>
          <ul><li>Risk: is demand for custom sneakers a trend that could fade?</li>
              <li>Fit with the business's objectives and brand.</li>
              <li>Impact on staff, ethics, the environment.</li>
              <li>What competitors are doing.</li></ul>
          <div class="tip">"Evaluate whether SoleFlip should invest" = use the numbers (payback, ARR, NPV), weigh up both sides including qualitative factors, then give a clear <b>judgement</b>.</div>` }
      ],
      labs: [{ type: 'investment' }],
      worked: {
        title: 'Should Freja buy a streaming setup?',
        intro: '<p>Freja wants a <b>$3,000</b> pro streaming setup for SoleFlip live sneaker-customising streams. Expected net cash flow from sponsorships and extra sales: Y1 $1,200, Y2 $1,200, Y3 $1,500. Assume a 3-year life.</p>',
        steps: [
          { prompt: 'Cumulative after year 2?', answer: '−3,000 + 1,200 + 1,200 = <b>−$600</b>' },
          { prompt: 'Payback period?', answer: '600 ÷ 1,500 × 12 = 4.8 months → about <b>2 years 5 months</b> (round up so you don\'t overstate how fast it pays back).' },
          { prompt: 'ARR?', answer: 'Total returns 3,900 − 3,000 = 900 profit ÷ 3 years = 300 per year. 300 ÷ 3,000 × 100 = <b>10%</b>' },
          { prompt: 'HL: NPV at 10%? (DFs: 0.9091, 0.8264, 0.7513)', answer: '1,200 × 0.9091 = 1,090.92; 1,200 × 0.8264 = 991.68; 1,500 × 0.7513 = 1,126.95. Total = 3,209.55 → NPV = <b>$209.55</b>' },
          { prompt: 'Judgement?', answer: 'It pays back within its life and NPV is positive, but only just. Payback comes late in a 3-year life, so it is risky if streaming trends change. Maybe go ahead, but start with a cheaper setup or lease the equipment.' }
        ],
        takeaway: 'When payback is close to the end of the asset\'s life and NPV is barely positive, the investment is risky. Say so in your evaluation.'
      },
      quiz: [
        { id: '3.8-1', type: 'mcq', cmd: 'Define', q: 'The payback period is…', options: ['the time it takes for net cash flows to cover the cost of an investment', 'the average annual profit of an investment as a percentage of its cost', 'the total value of an investment\'s future cash flows in today\'s money', 'the time it takes a business to repay the bank loan used to invest'], answer: 0, why: 'Payback = time to get your money back.' },
        { id: '3.8-2', type: 'num', cmd: 'Calculate', q: 'The machine costs $20,000. Payback = 2 years and <b>how many months</b>?' + tbl(['Year', 'Net cash flow ($)', 'Cumulative ($)'], [['0', '(20,000)', '(20,000)'], ['1', '6,000', A(-14000)], ['2', '8,000', A(-6000)], ['3', '9,000', A(3000)]]), answer: 8, tol: 0.05, unit: 'months', display: '8 months', hint: 'After year 2 you still need $6,000. What fraction of year 3\'s $9,000 is that?', why: '6,000 ÷ 9,000 × 12 = 8 months.' },
        { id: '3.8-3', type: 'num', cmd: 'Calculate', q: 'What is the <b>ARR</b> (%)?' + tbl(['', ''], [['Cost of investment', '$20,000'], ['Total returns over its life', '$30,000'], ['Years of use', '4']]), answer: 12.5, tol: 0.05, unit: '%', display: '12.5%', why: '(30,000 − 20,000) ÷ 4 = 2,500. 2,500 ÷ 20,000 × 100 = 12.5%.' },
        { id: '3.8-4', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> Complete the table to find the <b>NPV</b>.' + tbl(['Year', 'Net cash flow ($)', 'Discount factor (6%)', 'Present value ($)'], [['0', '(20,000)', '1.0000', '(20,000)'], ['1', '6,000', '0.9434', A(5660.4)], ['2', '8,000', '0.8900', A(7120)], ['3', '9,000', '0.8396', A(7556.4)], ['4', '7,000', '0.7921', A(5544.7)], ['<b>NPV</b>', '', '', A(5881.5, true)]]), answer: 5881.5, tol: 2, unit: '$', display: '$5,881.50', hint: 'Multiply each cash flow by its factor, add them up, subtract the cost.', why: 'PVs: 5,660.40 + 7,120 + 7,556.40 + 5,544.70 = 25,881.50. NPV = 25,881.50 − 20,000 = 5,881.50.' },
        { id: '3.8-5', type: 'num', cmd: 'Calculate', q: 'A machine costs $10,000 and brings in $4,000 every year. Payback period in <b>months</b>?', answer: 30, tol: 0.05, unit: 'months', display: '30 months (2 years 6 months)', why: '10,000 ÷ 4,000 = 2.5 years = 30 months.' },
        { id: '3.8-6', type: 'mcq', cmd: 'Explain', q: 'Why is $100 today worth more than $100 in three years?', options: ['It could be invested to earn interest, and inflation reduces future purchasing power', 'Banks charge fees for holding money, so money held longer shrinks', 'Money depreciates like a machine, losing a fixed amount each year', 'It isn\'t; $100 is always $100, so today and in three years they are worth the same'], answer: 0, why: 'Opportunity cost, inflation and risk: the time value of money.' },
        { id: '3.8-7', type: 'mcq', q: 'A key weakness of ARR is that it…', options: ['ignores the timing of cash flows', 'ignores profit', 'is impossible to compare with interest rates', 'only works for HL students'], answer: 0, why: 'ARR averages profit, so early and late cash count the same.' },
        { id: '3.8-8', type: 'mcq', q: 'A key weakness of the payback method is that it…', options: ['ignores cash flows after the payback point', 'is very hard to calculate without a computer', 'needs a table of discount factors to work out', 'only measures profitability, not time taken'], answer: 0, why: 'A project that earns a fortune in year 5 can look worse than a quick but small one.' },
        { id: '3.8-9', type: 'tf', q: '<span class="tag">HL</span> If the NPV is negative at a 10% discount rate, the investment returns less than 10% a year.', answer: true, why: 'True. It doesn\'t cover the required return, so on financial grounds it should be rejected.' }
      ],
      explain: 'You can buy a $1,500 gaming laptop that you\'ll use to earn money editing videos. Which of the three methods would you use to decide, and <b>why</b>?'
    },

    // ------------------------------------------------------------------ 3.9
    {
      id: '3.9', title: 'Budgets', emoji: '🎯', minutes: 10, hl: true,
      goal: 'explain why budgets matter, tell cost centres from profit centres, construct a budget and calculate and interpret variances.',
      hook: `Roskilde Festival. You budget <b>$300</b> for food, merch and transport. By Saturday you have $40 left and two days to go.<br><br>Where did it go? Comparing what you <i>planned</i> with what <i>actually</i> happened is <b>variance analysis</b>. Businesses do it every month, and it's how managers spot problems before they become disasters.`,
      cards: [
        { title: 'What is a budget?', html: `
          <p>A <b>budget</b> is a financial plan for the future: expected revenue and spending for a set period (e.g. a month or a year).</p>
          <p>Why bother?</p>
          <ul><li><b>Planning</b>: think ahead about what you'll need.</li>
              <li><b>Control</b>: compare actual with planned and spot problems.</li>
              <li><b>Coordination</b>: departments work towards the same plan.</li>
              <li><b>[[motivation|Motivation]]</b>: targets to aim for (if realistic!).</li>
              <li><b>Accountability</b>: managers are responsible for their budgets.</li></ul>
          <p class="muted small">Limits: a budget can be unrealistic, rigid when things change, or lead to "spend it or lose it" behaviour at year-end.</p>` },
        { title: 'Cost centres vs profit centres', html: `
          <p><b>Cost centre</b>: a part of the business where <b>costs</b> are recorded, but it doesn't earn revenue itself. E.g. the HR department, IT, a warehouse.</p>
          <p><b>Profit centre</b>: a part of the business that has <b>both costs and revenue</b>, so you can work out its profit. E.g. a single store, a product line.</p>
          <div class="example">${sf}: the online shop, the pop-up store and the custom-design service are profit centres. The Instagram/marketing team is a cost centre.</div>
          <p>✅ Managers can see which parts perform, it motivates and gives responsibility. ❌ Sharing overheads between centres can be unfair, and centres may compete instead of cooperating.</p>` },
        { title: 'Variances', html: `
          ${F`\text{Variance} = \text{actual figure} - \text{budgeted figure}`}
          <p><b>Favourable (F)</b>: better for profit than planned. <b>Adverse (A)</b>: worse for profit than planned.</p>
          <div class="table-wrap"><table class="fin"><tr><th>Item</th><th>Budget</th><th>Actual</th><th>Variance</th></tr>
            <tr><td>Revenue</td><td>50,000</td><td>54,000</td><td>4,000 F</td></tr>
            <tr><td>Materials cost</td><td>12,000</td><td>14,500</td><td>2,500 A</td></tr>
            <tr><td>Marketing cost</td><td>5,000</td><td>4,200</td><td>800 F</td></tr></table></div>
          <div class="tip">The trap: for <b>costs</b>, spending <i>more</i> than budget is <b>adverse</b>. For <b>revenue</b>, earning <i>more</i> is <b>favourable</b>. Always ask: "is this good or bad for profit?"</div>` },
        { title: 'Using variances to make decisions', html: `
          <p>A variance is a <b>question</b>, not an answer. Find out <i>why</i>:</p>
          <ul><li>Adverse materials: did prices rise, or is there waste? Or did we just sell more (more sales need more materials)?</li>
              <li>Favourable marketing: smart savings, or did we cut ads and lose future sales?</li></ul>
          <p>Managers then act: change suppliers, re-train staff, adjust prices, or update an unrealistic budget.</p>
          <div class="tip">"Favourable" isn't automatically good, and "adverse" isn't automatically bad. Evaluate the cause.</div>` }
      ],
      labs: [{ type: 'variance' }],
      worked: {
        title: 'SoleFlip\'s pop-up store, June',
        intro: '<p>Budget: revenue $20,000, stock purchases $8,000, wages $4,000, rent $1,500. Actual: revenue $18,500, stock purchases $7,200, wages $4,600, rent $1,500.</p>',
        steps: [
          { prompt: 'Revenue variance?', answer: '18,500 − 20,000 = −1,500 → revenue is lower than planned: <b>$1,500 adverse</b>' },
          { prompt: 'Stock purchases variance?', answer: '7,200 − 8,000 = −800 → spent less than planned: <b>$800 favourable</b>' },
          { prompt: 'Wages variance?', answer: '4,600 − 4,000 = +600 → spent more than planned: <b>$600 adverse</b>' },
          { prompt: 'Profit impact?', answer: 'Budgeted profit = 20,000 − 13,500 = 6,500. Actual = 18,500 − 13,300 = 5,200. <b>$1,300 adverse</b> overall (−1,500 + 800 − 600 + 0).' },
          { prompt: 'What might explain it?', answer: 'Fewer sales → they bought less stock (favourable but linked). Wages up: maybe extra staff for a launch event that didn\'t pull in sales. Next step: review the staff rota and the marketing for the event.' }
        ],
        takeaway: 'Variances are often linked: lower sales → lower material costs. Spot these links to show analysis.'
      },
      quiz: [
        { id: '3.9-1', type: 'mcq', cmd: 'Define', q: 'A budget is…', options: ['a financial plan of expected revenue and spending for a future period', 'a record of the revenue, costs and profit the business made last year', 'a type of short-term loan used to pay for planned spending', 'the difference between the actual figures and the planned figures'], answer: 0, why: 'A budget looks forward. The last option describes a variance.' },
        { id: '3.9-2', type: 'mcq', q: 'SoleFlip\'s pop-up store records its own sales and costs. It is a…', options: ['profit centre', 'cost centre', 'variance', 'source of finance'], answer: 0, why: 'It has both revenue and costs.' },
        { id: '3.9-3', type: 'mcq', q: 'The HR department is usually a…', options: ['cost centre', 'profit centre', 'revenue stream', 'current asset'], answer: 0, why: 'It incurs costs but doesn\'t sell anything itself.' },
        { id: '3.9-4', type: 'mcq', cmd: 'Calculate', q: 'What is the <b>marketing cost variance</b>?' + tbl(['', 'Budget', 'Actual'], [['Marketing cost', '$8,000', '$9,500']]), options: ['$1,500 adverse', '$1,500 favourable', '$9,500 adverse', '$17,500 favourable'], answer: 0, why: 'Cost higher than planned → worse for profit → adverse.' },
        { id: '3.9-5', type: 'mcq', cmd: 'Calculate', q: 'What is the <b>revenue variance</b>?' + tbl(['', 'Budget', 'Actual'], [['Sales revenue', '$50,000', '$46,000']]), options: ['$4,000 adverse', '$4,000 favourable', '$46,000 adverse', 'No variance'], answer: 0, why: 'Less revenue than planned → adverse.' },
        { id: '3.9-6', type: 'tf', q: 'A favourable variance is always good news for the business.', answer: false, why: 'False. A favourable cost variance could come from cheaper, lower-quality materials or cutting important spending.' },
        { id: '3.9-7', type: 'sort', q: 'Favourable or adverse?', buckets: ['Favourable', 'Adverse'], items: [
          { t: 'Revenue: budget $10k, actual $12k', b: 0 }, { t: 'Wages: budget $5k, actual $5.6k', b: 1 },
          { t: 'Rent: budget $2k, actual $1.8k', b: 0 }, { t: 'Revenue: budget $30k, actual $27k', b: 1 },
          { t: 'Materials: budget $4k, actual $4.4k', b: 1 }], why: 'Good for profit = F. Bad for profit = A.' },
        { id: '3.9-8', type: 'mcq', q: 'Which is a <b>limitation</b> of budgets?', options: ['They can be unrealistic and become out of date when conditions change', 'They make any kind of planning for the future impossible', 'They can only be used by sole traders, not by companies', 'They show the business\'s assets and liabilities on one particular date'], answer: 0, why: 'Budgets are based on forecasts, and the world changes.' }
      ],
      explain: 'Explain why a <b>favourable</b> variance isn\'t always good news. Use your own example (festival, gaming, a business…).'
    }
  ],

  formulas: [
    { group: '3.3 Costs and revenues', items: [
      { name: 'Total cost', f: M`\text{TC} = \text{total fixed costs} + \text{total variable costs}` },
      { name: 'Total variable cost', f: M`\text{TVC} = \text{variable cost per unit} \times \text{quantity}` },
      { name: 'Total revenue', f: M`\text{TR} = \text{price} \times \text{quantity sold}` },
      { name: 'Profit', f: M`\text{Profit} = \text{total revenue} - \text{total costs}` }] },
    { group: '3.4 Final accounts', items: [
      { name: 'Gross profit', f: M`\text{Gross profit} = \text{sales revenue} - \text{cost of sales}` },
      { name: 'Profit before interest and tax', f: M`\text{PBIT} = \text{gross profit} - \text{expenses}` },
      { name: 'Retained profit', f: M`\text{Retained profit} = \text{profit for period} - \text{dividends}` },
      { name: 'Balance sheet', f: M`\text{Total assets} - \text{total liabilities} = \text{total equity}` },
      { name: 'Straight-line depreciation', f: M`\frac{\text{purchase cost} - \text{residual value}}{\text{life span (years)}}`, hl: true },
      { name: 'Units of production depreciation', f: M`\frac{\text{purchase cost} - \text{residual value}}{\text{expected total units}} \times \text{units produced in the year}`, hl: true }] },
    { group: '3.5 Profitability and liquidity ratios', items: [
      { name: 'Gross profit margin', f: M`\frac{\text{gross profit}}{\text{sales revenue}} \times 100` },
      { name: 'Profit margin', f: M`\frac{\text{profit before interest and tax}}{\text{sales revenue}} \times 100` },
      { name: 'ROCE', f: M`\frac{\text{profit before interest and tax}}{\text{capital employed}} \times 100`, note: M`\text{Capital employed} = \text{non-current liabilities} + \text{total equity}` },
      { name: 'Current ratio', f: M`\frac{\text{current assets}}{\text{current liabilities}}` },
      { name: 'Acid-test ratio', f: M`\frac{\text{current assets} - \text{stock}}{\text{current liabilities}}` }] },
    { group: '3.6 Debt/efficiency ratios', items: [
      { name: 'Stock turnover (times)', f: M`\frac{\text{cost of sales}}{\text{average stock}}`, hl: true, note: M`\text{Average stock} = \frac{\text{opening stock} + \text{closing stock}}{2}` },
      { name: 'Stock turnover (days)', f: M`\frac{\text{average stock}}{\text{cost of sales}} \times 365`, hl: true },
      { name: 'Debtor days', f: M`\frac{\text{debtors}}{\text{total sales revenue}} \times 365`, hl: true },
      { name: 'Creditor days', f: M`\frac{\text{creditors}}{\text{cost of sales}} \times 365`, hl: true },
      { name: 'Gearing ratio', f: M`\frac{\text{non-current liabilities}}{\text{capital employed}} \times 100`, hl: true }] },
    { group: '3.7 Cash flow', items: [
      { name: 'Working capital', f: M`\text{current assets} - \text{current liabilities}` },
      { name: 'Net cash flow', f: M`\text{cash inflows} - \text{cash outflows}` },
      { name: 'Closing balance', f: M`\text{opening balance} + \text{net cash flow}` }] },
    { group: '3.8 Investment appraisal', items: [
      { name: 'Payback (part year)', f: M`\text{Months} = \frac{\text{additional cash needed}}{\text{net cash flow in that year}} \times 12` },
      { name: 'ARR', f: M`\frac{\text{average annual profit}}{\text{cost of investment}} \times 100`, note: M`\text{average annual profit} = \frac{\text{total returns} - \text{cost of investment}}{\text{years of use}}` },
      { name: 'Net present value', f: M`\text{NPV} = \sum \text{PV} - \text{cost of investment}`, hl: true, note: M`\text{PV} = \text{net cash flow} \times \text{discount factor}` + M`\text{Discount factor} = \frac{1}{(1+r)^n}` + 'In the exam you are given a table of discount factors.' }] },
    { group: '3.9 Budgets', items: [
      { name: 'Variance', f: M`\text{Variance} = \text{actual} - \text{budgeted}`, hl: true, note: 'Favourable = better for profit than budgeted; adverse = worse.' }] }
  ]
};
