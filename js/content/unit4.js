// Unit 4: Marketing (IB Business Management guide, first assessment 2024).
// Running case: SoleFlip Ltd launches its own sneaker, SoleFlip Originals, designed by Freja and made by a partner
// factory in Porto. Sami (marketing lead, from Unit 2) runs the launch. SoleFlip's 2026 revenue of $180,000 is the
// same figure as in the Unit 3 accounts; the Danish resale-and-custom market grows from $4.0m to $5.0m (4.1).
// Originals cost $50 a pair to make and ship (4.5), and the German launch in 4.6 follows the Unit 2 plan.

import { M, F, A, tbl } from './helpers.js';

const sf = '<b>SoleFlip</b>';
const og = '<b>SoleFlip Originals</b>';

export const unit4 = {
  id: '4',
  title: 'Marketing',
  emoji: '📣',
  blurb: 'SoleFlip is done only reselling other brands\' sneakers. Freja has designed SoleFlip Originals, a bold sneaker made in Porto. Who will buy it, what should it cost, how do you get it noticed, and could it sell in Germany? You are SoleFlip\'s marketing team for this unit.',
  sections: [
    // ------------------------------------------------------------------ 4.1
    {
      id: '4.1', title: 'Introduction to marketing', emoji: '🎯', minutes: 10, hl: false,
      goal: 'define marketing, compare market and product orientation, and calculate and interpret market size, market growth and market share.',
      hook: `${sf}'s sales grew from <b>$160,000</b> to <b>$180,000</b> this year. Noah is celebrating. Sami isn't: "The whole market grew much faster than us."<br><br>How can a business grow and fall behind at the same time? And who is "winning" a market anyway?`,
      cards: [
        { title: 'What is marketing?', html: `
          <p><b>Marketing</b> is the management process of identifying, anticipating and satisfying customers' needs and wants, profitably.</p>
          <p>It's much more than adverts: it decides what to sell, to whom, at what price, where and how to tell people about it.</p>
          <p>Marketing links to every other function: a campaign that works needs more stock (operations), more staff (HR) and cash up front (finance).</p>
          <p><b>Goods</b> are physical (sneakers). <b>Services</b> are intangible (cleaning sneakers): you can't store them, test them first or separate them from the person providing them, so quality varies. That's why services rely more on people, processes and physical evidence (4.5).</p>` },
        { title: 'Market vs product orientation', html: `
          <p>A <b>market-oriented</b> business starts with the customer: it researches what people want, then designs a product to match.</p>
          <p>A <b>product-oriented</b> business starts with the product: it makes what it is good at and believes people will buy it because it is high quality or innovative.</p>
          <ul><li>Market orientation: less risk of a flop, but research costs money and can lead to copying what already exists.</li>
              <li>Product orientation: can create breakthrough products nobody asked for (the first iPhone), but risks making something nobody wants.</li></ul>
          <div class="example">${sf} asked 300 followers what they wanted before designing Originals: market-oriented. A luxury watchmaker that makes the most precise watch it can is product-oriented.</div>` },
        { title: 'Market size, growth and share', html: `
          <p><b>Market size</b> is the total sales in a market, in value ($) or volume (units).</p>
          <p><b>Market growth</b> is the percentage change in market size over a period.</p>
          ${F`\text{Market growth} = \frac{\text{this year's market size} - \text{last year's}}{\text{last year's market size}} \times 100`}
          <p><b>Market share</b> is one business's sales as a percentage of the whole market.</p>
          ${F`\text{Market share} = \frac{\text{a firm's sales}}{\text{total sales in the market}} \times 100`}
          <div class="example">The Danish resale-and-custom sneaker market grew from $4.0m to $5.0m: growth = 1.0 ÷ 4.0 × 100 = <b>25%</b>. ${sf} sold $180,000: share = 180,000 ÷ 5,000,000 × 100 = <b>3.6%</b>.</div>` },
        { title: 'Market leadership', html: `
          <p>The <b>market leader</b> is the business with the biggest market share. In ${sf}'s market that's KickBack, with $1.2m of $5.0m: <b>24%</b>.</p>
          <p>Why a big share matters:</p>
          <ul><li><b>[[economies of scale|Economies of scale]]</b>: bigger orders, lower cost per unit.</li>
              <li><b>Brand power</b>: shoppers trust the leader, and retailers give it the best shelf space.</li>
              <li><b>Pricing power</b>: the leader can often set prices others follow.</li></ul>
          <div class="tip">Always interpret share alongside market growth. Sales can rise while share falls (the market grew faster), and share can rise while sales fall (the market shrank faster).</div>` }
      ],
      labs: [
        {
          type: 'sort', title: 'Market or product oriented?',
          challenge: 'Sort all 8 correctly in one go.',
          buckets: ['Market oriented', 'Product oriented'],
          items: [
            { t: '📊 Polls followers before choosing the next colourway', b: 0 },
            { t: '🛒 Stocks what the sales data says is trending', b: 0 },
            { t: '🎧 Runs a focus group before designing a festival range', b: 0 },
            { t: '🔁 Changes the menu after reading customer reviews', b: 0 },
            { t: '🔬 Builds the fastest chip it can, then looks for buyers', b: 1 },
            { t: '⌚ Makes the most precise watch possible, whatever the cost', b: 1 },
            { t: '🧪 An inventor patents a gadget and then tries to sell it', b: 1 },
            { t: '🎨 An artist paints what they love and opens a gallery', b: 1 }
          ]
        },
        {
          type: 'scenarios', title: 'Read the market',
          challenge: 'Choose the right interpretation in all 3 cases.',
          items: [
            { s: 'A bubble-tea chain\'s sales rose 10%, while the bubble-tea market grew 30%.', options: [
              { t: 'Its market share fell: rivals grew faster', ok: true, fb: 'Yes: it grew, but more slowly than the market, so its slice of the market shrank.' },
              { t: 'Its market share rose by 10%', ok: false, fb: 'Share depends on how the whole market changed, not just its own sales.' },
              { t: 'It is now the market leader', ok: false, fb: 'Nothing here says it has the biggest share.' }] },
            { s: 'DVD sales at a shop fell 20%, but the DVD market fell 50%.', options: [
              { t: 'Its market share rose, in a shrinking market', ok: true, fb: 'Yes: it lost sales more slowly than rivals, so its share went up. But the market itself is dying.' },
              { t: 'It is doing badly in every way', ok: false, fb: 'Its share actually rose: it is beating rivals, in a declining market.' },
              { t: 'Its market share fell by 20%', ok: false, fb: 'Share rose, because the market fell faster than its sales.' }] },
            { s: 'Two brands each have 20% market share. Brand A\'s market is worth $10m, Brand B\'s is worth $500m.', options: [
              { t: 'Brand B has far higher sales', ok: true, fb: 'Yes: 20% of $500m = $100m vs 20% of $10m = $2m. Share only makes sense alongside market size.' },
              { t: 'They have the same sales', ok: false, fb: 'Same share, very different market sizes.' },
              { t: 'Brand A has higher sales', ok: false, fb: '20% of $10m is only $2m.' }] }
          ]
        }
      ],
      worked: {
        title: 'Growing, but losing ground (exam style)',
        intro: '<p><b>Data:</b> the Danish resale-and-custom sneaker market was worth <b>$4.0m</b> in 2025 and <b>$5.0m</b> in 2026. SoleFlip\'s sales were <b>$160,000</b> and <b>$180,000</b>. (a) <i>Calculate</i> SoleFlip\'s market share in both years. [2 marks] (b) <i>Explain</i> what the figures show. [4 marks]</p>',
        steps: [
          { prompt: 'Market share in 2025?', answer: '160,000 ÷ 4,000,000 × 100 = <b>4.0%</b>' },
          { prompt: 'Market share in 2026?', answer: '180,000 ÷ 5,000,000 × 100 = <b>3.6%</b>' },
          { prompt: 'How fast did SoleFlip grow, and how fast did the market grow?', answer: 'SoleFlip: 20,000 ÷ 160,000 × 100 = <b>12.5%</b>. Market: 1.0 ÷ 4.0 × 100 = <b>25%</b>.' },
          { prompt: 'Explain what this means.', answer: 'SoleFlip\'s sales rose, but the market grew twice as fast, so its share fell from 4.0% to 3.6%. Rivals such as KickBack are winning more of the new customers. Being in a growing market is good news, but SoleFlip needs something new (like Originals) to keep up.' }
        ],
        takeaway: 'Show both calculations with % signs, then interpret: compare the firm\'s growth with the market\'s growth.'
      },
      quiz: [
        { id: '4.1-1', type: 'mcq', cmd: 'Define', q: '<b>Marketing</b> is best described as…', options: ['identifying, anticipating and satisfying customer needs and wants profitably', 'advertising a product on as many media channels as the marketing budget allows', 'selling as many units as possible, whatever the price or the profit', 'producing goods at the lowest possible cost per unit for the market'], answer: 0, why: 'Marketing starts with customers\' needs and wants, and must be profitable. Advertising is only one part of promotion.' },
        { id: '4.1-2', type: 'num', cmd: 'Calculate', q: 'Complete the table to find SoleFlip\'s <b>market share</b> in 2026.' + tbl(['', '2026'], [['Total market sales', '$5,000,000'], ['SoleFlip\'s sales', '$180,000'], ['<b>Market share (%)</b>', A(3.6, true)]]), answer: 3.6, tol: 0.05, unit: '%', display: '3.6%', hint: 'Firm\'s sales ÷ total market sales × 100', why: '180,000 ÷ 5,000,000 × 100 = 3.6%.' },
        { id: '4.1-3', type: 'num', cmd: 'Calculate', q: 'The market grew from <b>$4.0m</b> to <b>$5.0m</b>. What was the <b>market growth</b>?', answer: 25, unit: '%', display: '25%', hint: 'Change ÷ old value × 100', why: '(5.0 − 4.0) ÷ 4.0 × 100 = 25%.' },
        { id: '4.1-4', type: 'num', cmd: 'Calculate', q: 'KickBack has a <b>24%</b> share of a market worth <b>$5.0m</b>. What are its sales in $?', answer: 1200000, unit: '$', display: '$1,200,000', hint: 'Sales = share ÷ 100 × market size', why: '24 ÷ 100 × 5,000,000 = $1,200,000.' },
        { id: '4.1-5', type: 'tf', q: 'If a business\'s sales rise, its market share must rise too.', answer: false, why: 'False. If the whole market grows faster than the business, its share falls even though its sales rose (SoleFlip: sales +12.5%, share 4.0% → 3.6%).' },
        { id: '4.1-6', type: 'mcq', cmd: 'Identify', q: 'Which is an example of <b>product orientation</b>?', options: ['A tech firm builds the most powerful drone it can, then looks for buyers', 'A café asks customers which new drinks they want before changing its menu', 'A clothing brand tracks TikTok trends and makes those styles within weeks', 'A gym runs a survey to find out which classes members want added next'], answer: 0, why: 'Product orientation starts with the product and what the business can make, not with customer research.' },
        { id: '4.1-7', type: 'mcq', cmd: 'Explain', q: 'Why does a large <b>market share</b> often help a business?', options: ['It brings economies of scale and stronger brand and pricing power', 'It guarantees that the business makes a profit every single year', 'It means the market itself is growing faster than all other markets', 'It means the business no longer needs to spend money on marketing'], answer: 0, why: 'A leader buys in bulk, is trusted by customers and retailers, and can often set prices. But share doesn\'t guarantee profit, and leaders still market.' },
        { id: '4.1-8', type: 'mcq', cmd: 'Distinguish', q: 'Which is a feature of a <b>service</b> rather than a good?', options: ['It can\'t be stored: an unsold haircut slot is lost', 'It can be stored in a warehouse until a customer orders it', 'It can be checked for faults before it reaches the customer', 'It is identical every time, because a machine produces it'], answer: 0, why: 'Services are intangible and perishable, and quality depends on the person providing them. Goods can be stored and checked before sale.' }
      ],
      explain: 'Think of a market you know (energy drinks, streaming, gaming headsets…). Explain to a mate who the <b>market leader</b> is, and why being the leader helps them.'
    },

    // ------------------------------------------------------------------ 4.2
    {
      id: '4.2', title: 'Marketing planning', emoji: '🗺️', minutes: 14, hl: false,
      goal: 'explain the elements of a marketing plan, segment and target a market, use a perception map to find a position and a USP, and apply the Ansoff matrix.',
      hook: `Freja's sneaker design is ready. Noah wants to "sell it to everyone". Sami says that's how you sell it to no one.<br><br>Who exactly is ${og} for? Where does it fit next to Nike, Veja and KickBack? And why would anyone pick it over them?`,
      cards: [
        { title: 'The marketing plan', html: `
          <p>A <b>marketing plan</b> sets out how a business will reach its marketing objectives. It usually covers:</p>
          <ul><li><b>Marketing objectives</b>: e.g. sell 2,000 pairs of Originals in year 1 (SMART).</li>
              <li><b>Market analysis</b>: the market, customers and competitors (from market research).</li>
              <li><b>Target market</b> and <b>positioning</b>.</li>
              <li><b>The marketing mix</b> (the 7 Ps): the actions to take.</li>
              <li><b>Marketing [[budget]]</b> and a <b>timeline</b>, plus how success will be measured.</li></ul>
          <p>A plan gives direction, makes the team work together and lets managers check progress. But it takes time, and markets can change faster than the plan.</p>` },
        { title: 'Market segmentation', html: `
          <p><b>Market segmentation</b> splits a market into groups of customers with similar characteristics or needs. Common bases:</p>
          <ul><li><b>Demographic</b>: age, gender, income, education.</li>
              <li><b>Geographic</b>: country, region, city or countryside.</li>
              <li><b>Psychographic</b>: lifestyle, values, interests, personality.</li>
              <li><b>Behavioural</b>: how people buy: how often, loyalty, what benefit they want.</li></ul>
          <div class="example">Sneaker buyers in Denmark could be split into: collectors (behavioural), 15–24-year-olds (demographic), people who care about sustainability (psychographic), Copenhagen vs rest of Denmark (geographic).</div>` },
        { title: 'Targeting: mass or niche?', html: `
          <p>The <b>target market</b> is the segment(s) a business chooses to aim its product and marketing at.</p>
          <ul><li><b>Mass marketing</b>: one product and message for the whole market (Coca-Cola). Huge sales and economies of scale, but strong competition.</li>
              <li><b>Niche marketing</b>: a product for a small, specific segment. Less competition and higher prices, but a small market and risky if tastes change.</li></ul>
          <div class="example">${og} targets a niche: 15–24-year-olds in Scandinavia who want bold, limited sneakers and care about sustainability, but have student budgets.</div>` },
        { title: 'Positioning and perception maps', html: `
          <p><b>Market positioning</b> is how customers see a product compared with its rivals. A <b>perception map</b> (positioning map) shows this on two axes that matter to customers, e.g. price and style.</p>
          <ul><li>It shows where competitors cluster, and <b>gaps in the market</b>.</li>
              <li>A gap is only an opportunity if there is <b>demand</b> in it.</li>
              <li>Maps are based on customer perceptions, which come from research and can be subjective.</li></ul>
          <div class="tip">When you draw a perception map in the exam, label both axes with clear opposites (low price ↔ high price) and name every brand.</div>` },
        { title: 'Unique selling point (USP)', html: `
          <p>A <b>unique selling point (USP)</b> is a feature or benefit that makes a product different from its competitors and gives customers a reason to choose it.</p>
          <p>It can come from design, quality, price, service, a story or values. A USP helps a business <b>differentiate</b> itself, charge more and build loyalty.</p>
          <div class="example">${og}' USP: every pair has a hand-painted detail by the SoleFlip workshop and a sole made from recycled sneakers. Nike can't easily copy "made by people you can follow on TikTok".</div>` },
        { title: 'The Ansoff matrix (toolkit)', html: `
          <p>The <b>Ansoff matrix</b> is a toolkit item (you can use it in any unit). It shows four growth strategies, by product (existing/new) and market (existing/new):</p>
          <div class="table-wrap"><table class="fin"><tr><th></th><th>Existing products</th><th>New products</th></tr>
            <tr><td><b>Existing markets</b></td><td>Market penetration (lowest risk)</td><td>Product development</td></tr>
            <tr><td><b>New markets</b></td><td>Market development</td><td>Diversification (highest risk)</td></tr></table></div>
          <div class="example">Selling more cleaning in Copenhagen = market penetration. Launching Originals to existing Danish customers = product development. Selling cleaning in Germany = market development. Opening a café = diversification.</div>` }
      ],
      labs: [
        { type: 'position', title: 'Position SoleFlip Originals' },
        {
          type: 'sort', title: 'Which Ansoff strategy?',
          challenge: 'Sort all 8 into the right box of the Ansoff matrix in one go.',
          buckets: ['Market penetration', 'Product development', 'Market development', 'Diversification'],
          items: [
            { t: '🏷️ A 2-for-1 cleaning deal for existing Copenhagen customers', b: 0 },
            { t: '📣 More Instagram ads for the same products in Denmark', b: 0 },
            { t: '👟 Launching Originals to SoleFlip\'s Danish followers', b: 1 },
            { t: '🧢 Adding SoleFlip caps for existing customers', b: 1 },
            { t: '🇩🇪 Selling the cleaning service in Berlin', b: 2 },
            { t: '🏫 Selling existing products to a new segment: over-40s', b: 2 },
            { t: '☕ Opening a coffee bar', b: 3 },
            { t: '🎮 Launching a mobile game in the US', b: 3 }
          ]
        }
      ],
      worked: {
        title: 'Plan the Originals launch (exam style)',
        intro: `<p><b>Question:</b> ${sf} plans to launch ${og} at $90 a pair, mainly through its website and its Copenhagen store. <i>Explain</i> how ${sf} could use segmentation, targeting and positioning to plan the launch. [6 marks]</p>`,
        steps: [
          { prompt: 'Which bases of segmentation fit Originals?', answer: '<b>Demographic</b> (age 15–24, student income), <b>psychographic</b> (cares about sustainability and standing out) and <b>geographic</b> (Scandinavia, where SoleFlip is known).' },
          { prompt: 'Mass or niche targeting? Why?', answer: '<b>Niche</b>: SoleFlip is small and can\'t match Nike\'s ad budgets, but it can win a specific group that big brands serve badly.' },
          { prompt: 'Where should Originals sit on a perception map (price vs style)?', answer: 'Mid-priced but <b>bold</b>: in the gap between cheap bold (Crocs collabs) and expensive bold (KickBack customs, Balenciaga).' },
          { prompt: 'What USP supports that position?', answer: 'Hand-painted details + recycled soles + a brand teens follow online. It justifies $90 and is hard for big brands to copy.' },
          { prompt: 'Which Ansoff strategy is this, and how risky?', answer: '<b>Product development</b>: a new product for SoleFlip\'s existing market. Medium risk: SoleFlip knows its customers, but has never made its own sneaker.' }
        ],
        takeaway: 'Use the terms in order (segment → target → position → USP), and apply each to the case. Generic theory scores little.'
      },
      quiz: [
        { id: '4.2-1', type: 'mcq', cmd: 'Define', q: '<b>Market segmentation</b> means…', options: ['dividing a market into groups of customers with similar characteristics', 'choosing one single price for every customer in the whole market', 'dividing a business into separate departments by function, product or region', 'measuring the share of the market that each competitor controls'], answer: 0, why: 'Segmentation groups customers (by age, location, lifestyle, buying behaviour…). The business then chooses which segments to target.' },
        { id: '4.2-2', type: 'sort', q: 'Which base of segmentation is each?', buckets: ['Demographic', 'Geographic', 'Psychographic', 'Behavioural'], items: [
          { t: 'Aged 15–24', b: 0 }, { t: 'Household income', b: 0 }, { t: 'Lives in Copenhagen', b: 1 }, { t: 'Northern Germany', b: 1 },
          { t: 'Values sustainability', b: 2 }, { t: 'Into streetwear culture', b: 2 }, { t: 'Buys a new pair every month', b: 3 }, { t: 'Loyal to one brand', b: 3 }], why: 'Demographic = who they are (age, income); geographic = where; psychographic = lifestyle and values; behavioural = how they buy.' },
        { id: '4.2-3', type: 'mcq', cmd: 'Identify', q: 'SoleFlip launches Originals to its existing Danish customers. On the <b>Ansoff matrix</b> this is…', options: ['product development', 'market development', 'market penetration', 'diversification'], answer: 0, why: 'New product, existing market = product development.' },
        { id: '4.2-4', type: 'mcq', cmd: 'Identify', q: 'Which Ansoff strategy carries the <b>highest risk</b>?', options: ['Diversification', 'Market penetration', 'Product development', 'Market development'], answer: 0, why: 'Diversification means a new product in a new market: the business knows neither.' },
        { id: '4.2-5', type: 'mcq', cmd: 'Explain', q: 'What is the main purpose of a <b>perception map</b>?', options: ['To show how customers see brands against rivals, and spot gaps', 'To show where each competitor has its stores, offices and warehouses', 'To show how a product\'s sales change over its whole life', 'To show the cost of each brand\'s marketing campaigns'], answer: 0, why: 'It plots customer perceptions on two features (e.g. price and quality) to show positions and gaps in the market.' },
        { id: '4.2-6', type: 'tf', q: 'A gap on a perception map is always a profitable opportunity.', answer: false, why: 'False. There may be no demand in the gap (e.g. nobody wants very expensive, very plain sneakers). Market research must check.' },
        { id: '4.2-7', type: 'mcq', cmd: 'Distinguish', q: 'Which is a disadvantage of <b>niche marketing</b> compared with mass marketing?', options: ['A small market, so the business is exposed if tastes change', 'Strong competition from many large brands for the same buyers', 'It needs huge advertising budgets to reach the whole market', 'Customers will only ever accept the lowest prices on offer'], answer: 0, why: 'Niches have less competition and allow higher prices, but sales are limited and depend on one small group.' },
        { id: '4.2-8', type: 'mcq', cmd: 'Define', q: 'A <b>USP</b> is…', options: ['a feature or benefit that makes a product stand out from rivals', 'the price at which a product sells the highest possible number of units', 'the segment of the market a business aims its products at', 'the share of total sales a business has in its market'], answer: 0, why: 'A unique selling point gives customers a reason to choose this product over competitors.' }
      ],
      explain: 'Pick a brand you like. Explain to a mate who its <b>target market</b> is, where it sits on a <b>perception map</b>, and what its <b>USP</b> is.'
    },

    // ------------------------------------------------------------------ 4.3
    {
      id: '4.3', title: 'Sales forecasting', emoji: '🔮', minutes: 14, hl: true,
      goal: 'calculate three-part and four-part centred moving averages, find seasonal variations and use them to forecast sales, and evaluate forecasting.',
      hook: `Every December ${sf}'s online orders explode, and every March they crash. Last year Noah ordered stock based on December and was stuck with 200 pairs in spring.<br><br>Can you see past the seasons to the real direction of sales, and predict next quarter?`,
      cards: [
        { title: 'Why forecast sales?', html: `
          <p><span class="tag">HL</span> <b>Sales forecasting</b> means predicting future sales, usually from past sales data.</p>
          <p>Every function needs it: operations (how much to make or buy), HR (how many staff), finance (cash flow and [[budget|budgets]]) and marketing (when to promote).</p>
          <div class="tip">Forecasts are estimates. In evaluation questions, say what they're based on (past data) and what could make them wrong (new competitors, a recession, a viral trend).</div>` },
        { title: 'Moving averages', html: `
          <p>A <b>moving average</b> smooths out ups and downs to show the underlying trend. You average a fixed number of periods, then move one period on.</p>
          <p><b>Three-part moving average</b> (e.g. for months): average periods 1–3, then 2–4, then 3–5…</p>
          <div class="example">App downloads (000) in months 1–4: 120, 150, 180, 210. Averages: (120 + 150 + 180) ÷ 3 = <b>150</b> (centred on month 2), then (150 + 180 + 210) ÷ 3 = <b>180</b> (month 3).</div>
          <p><b>Four-part centred moving average</b> (for quarterly data): a 4-part average falls <i>between</i> two quarters, so average two neighbouring 4-part averages to centre it on a quarter.</p>
          ${F`\text{Centred MA} = \frac{\text{4-part average}_1 + \text{4-part average}_2}{2}`}` },
        { title: 'Trend and variations', html: `
          <p>Sales data is made of:</p>
          <ul><li><b>Trend</b>: the long-term direction (the moving average shows it).</li>
              <li><b>Seasonal variation</b>: regular changes within a year (Christmas, summer festivals).</li>
              <li><b>Cyclical variation</b>: changes over several years with the business cycle (booms and recessions).</li>
              <li><b>Random variation</b>: one-off, unpredictable events (a viral video, a storm, a pandemic).</li></ul>
          ${F`\text{Seasonal variation} = \text{actual sales} - \text{trend}`}
          <div class="example">${sf}'s Q3 sales were $18k when the trend was $24k: seasonal variation = 18 − 24 = <b>−$6k</b>.</div>` },
        { title: 'Making the forecast', html: `
          <ol><li>Calculate the trend with moving averages.</li>
              <li>Extend the trend into the future (e.g. it rises about $2k a quarter).</li>
              <li>Find the <b>average seasonal variation</b> for the quarter you're forecasting.</li>
              <li>Forecast = projected trend + average seasonal variation.</li></ol>
          ${F`\text{Forecast} = \text{projected trend} + \text{average seasonal variation}`}
          <p><b>Benefits</b>: simple, uses real data, shows seasonal patterns for planning stock and staff. <b>Limitations</b>: assumes the past continues, ignores new events and qualitative factors, and gets less reliable the further ahead you look.</p>
          <p class="muted small">Another forecasting tool, from the toolkit: [[simple linear regression]] (6.7).</p>` }
      ],
      labs: [{ type: 'forecast', title: 'Forecast SoleFlip\'s online sales' }],
      worked: {
        title: 'Centred moving average and seasonal variation',
        intro: '<p>A festival-merch shop\'s sales ($000): Y1 Q1 <b>40</b>, Q2 <b>60</b>, Q3 <b>50</b>, Q4 <b>90</b>, Y2 Q1 <b>48</b>. <i>Calculate</i> the four-part centred moving average for Y1 Q3 and the seasonal variation for that quarter. [4 marks]</p>',
        steps: [
          { prompt: 'First 4-part average (Y1 Q1–Q4)?', answer: '(40 + 60 + 50 + 90) ÷ 4 = 240 ÷ 4 = <b>60</b>' },
          { prompt: 'Second 4-part average (Y1 Q2–Y2 Q1)?', answer: '(60 + 50 + 90 + 48) ÷ 4 = 248 ÷ 4 = <b>62</b>' },
          { prompt: 'Centred moving average for Y1 Q3?', answer: '(60 + 62) ÷ 2 = <b>61</b>: the trend value for Y1 Q3.' },
          { prompt: 'Seasonal variation for Y1 Q3?', answer: 'Actual − trend = 50 − 61 = <b>−11</b> ($11k below trend).' },
          { prompt: 'What does that tell the shop?', answer: 'Q3 is a weak quarter, so the shop should order less stock and roster fewer staff then, and save cash for the Q4 peak.' }
        ],
        takeaway: 'Show every average. A centred moving average always takes two steps: two 4-part averages, then their average.'
      },
      quiz: [
        { id: '4.3-1', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> Monthly sales (units) were <b>120, 150, 180</b>. What is the three-part moving average?', answer: 150, display: '150', hint: 'Add the three and divide by 3.', why: '(120 + 150 + 180) ÷ 3 = 450 ÷ 3 = 150.' },
        { id: '4.3-2', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> Complete the table to find the <b>four-part centred moving average</b> for Y1 Q3 (sales in $000).' + tbl(['Quarter', 'Sales', 'Working'], [['Y1 Q1', '40', ''], ['Y1 Q2', '60', ''], ['Y1 Q3', '50', ''], ['Y1 Q4', '90', ''], ['Y2 Q1', '48', ''], ['4-part average 1 (Y1 Q1–Q4)', '', A(60)], ['4-part average 2 (Y1 Q2–Y2 Q1)', '', A(62)], ['<b>Centred MA for Y1 Q3</b>', '', A(61, true)]]), answer: 61, display: '61', why: '(40+60+50+90) ÷ 4 = 60; (60+50+90+48) ÷ 4 = 62; (60 + 62) ÷ 2 = 61.' },
        { id: '4.3-3', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> Actual sales in a quarter were <b>$50k</b> and the trend was <b>$61k</b>. What is the seasonal variation (in $000)?', answer: -11, display: '−11', hint: 'Actual − trend. It can be negative.', why: '50 − 61 = −11: sales were $11k below the trend.' },
        { id: '4.3-4', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> The trend for Y3 Q4 is <b>$120k</b> and is rising by <b>$5k</b> per quarter. The average seasonal variation for Q2 is <b>+$12k</b>. What is the forecast for <b>Y4 Q2</b> (in $000)?', answer: 142, unit: '$000', display: '142 ($142k)', hint: 'Y4 Q2 is two quarters after Y3 Q4.', why: 'Trend for Y4 Q2 = 120 + 2 × 5 = 130. Forecast = 130 + 12 = $142k.' },
        { id: '4.3-5', type: 'mcq', cmd: 'Explain', q: '<span class="tag">HL</span> Why is a <b>four-part</b> moving average used for quarterly data?', options: ['Each average includes one of every quarter, so seasonal effects cancel out', 'It is quicker to calculate than a three-part average for any data set', 'It always produces higher forecasts, so the business orders more stock', 'It removes all random variation completely, so the forecasts are always accurate'], answer: 0, why: 'Four quarters = one full year of seasons, so each average contains one Q1, Q2, Q3 and Q4 and the seasonal pattern is smoothed away.' },
        { id: '4.3-6', type: 'sort', q: '<span class="tag">HL</span> Which kind of variation is each?', buckets: ['Seasonal', 'Cyclical', 'Random'], items: [
          { t: 'Ice-cream sales peak every summer', b: 0 }, { t: 'Sneaker sales jump every December', b: 0 },
          { t: 'Car sales fall in a recession', b: 1 }, { t: 'Spending rises in an economic boom', b: 1 },
          { t: 'A celebrity posts your product and it goes viral', b: 2 }, { t: 'A flood closes the store for a week', b: 2 }], why: 'Seasonal = regular, within a year. Cyclical = the business cycle over several years. Random = unpredictable one-offs.' },
        { id: '4.3-7', type: 'tf', q: '<span class="tag">HL</span> A forecast based on moving averages will be accurate as long as the calculations are correct.', answer: false, why: 'False. It assumes the past pattern continues. New competitors, a recession or a viral trend can make even a perfectly calculated forecast wrong.' },
        { id: '4.3-8', type: 'mcq', cmd: 'Identify', q: '<span class="tag">HL</span> Which department uses a sales forecast to decide <b>how many staff</b> to hire for December?', options: ['Human resources', 'Finance', 'Operations', 'Marketing'], answer: 0, why: 'HR uses the forecast for workforce planning. Operations uses it for output and stock, finance for cash flow, marketing for promotions.' }
      ],
      explain: 'Think of something with a seasonal pattern in your life (gym visits, game sales, festival tickets…). Explain to a mate the <b>trend</b>, the <b>seasonal variation</b>, and one <b>random</b> event that could wreck a forecast.'
    },

    // ------------------------------------------------------------------ 4.4
    {
      id: '4.4', title: 'Market research', emoji: '🔍', minutes: 12, hl: false,
      goal: 'compare primary and secondary research, choose research methods and sampling methods, tell qualitative from quantitative data, and explain ethical issues.',
      hook: `Sami posted a poll: "Would you buy a $90 SoleFlip sneaker?" <b>82%</b> said yes. Noah wants to order 5,000 pairs.<br><br>But who answered? SoleFlip's biggest fans. Would the other 99% of teenagers say the same? How do you ask the right people the right way?`,
      cards: [
        { title: 'Why research the market?', html: `
          <p><b>Market research</b> is collecting and analysing information about customers, competitors and the market to make better marketing decisions.</p>
          <p>It helps a business find out what customers want, how much they would pay, who the competitors are, and whether a product might succeed, <i>before</i> spending money on it.</p>
          <div class="example">Before ordering from the Porto factory, ${sf} needs to know which colourways sell, the price teens accept, and how many pairs to order.</div>` },
        { title: 'Primary research', html: `
          <p><b>Primary research</b> (field research) collects new data for a specific purpose, for the first time.</p>
          <ul><li><b>Surveys and questionnaires</b>: many people, easy to compare; but poorly designed questions give poor data.</li>
              <li><b>Interviews</b>: one-to-one, detailed answers; slow and costly.</li>
              <li><b>Focus groups</b>: a small group discusses a product, led by a moderator; rich opinions, but loud members can sway the group.</li>
              <li><b>Observation</b>: watching what people actually do (e.g. which shelf they go to first).</li></ul>
          <p>✅ Up to date, specific to the business, not available to rivals. ❌ Expensive and time-consuming.</p>` },
        { title: 'Secondary research', html: `
          <p><b>Secondary research</b> (desk research) uses data that already exists, collected by someone else for another purpose.</p>
          <p>Sources: market analyses and industry reports, government statistics (e.g. Statistics Denmark), academic journals, media articles, competitors' websites and annual reports.</p>
          <p>✅ Cheap or free, quick, often covers whole markets. ❌ May be out of date, not exactly what the business needs, and rivals can see it too.</p>
          <div class="tip">Businesses usually start with secondary research (what already exists?) and then fill the gaps with primary research.</div>` },
        { title: 'Qualitative vs quantitative data', html: `
          <p><b>Quantitative data</b> is numerical: how many, how much, what percentage. E.g. "62% would pay $90". Easy to analyse and compare, but doesn't explain <i>why</i>.</p>
          <p><b>Qualitative data</b> is about opinions, feelings and reasons. E.g. "I'd buy it if the sole were recycled". Rich insight, but harder to analyse and to generalise.</p>
          <div class="example">Sami runs a survey of 400 teens (quantitative) and then two focus groups of 8 (qualitative) to understand the numbers.</div>` },
        { title: 'Sampling methods', html: `
          <p>A <b>sample</b> is the group of people from the population who are actually asked. The bigger and more representative, the more reliable the results.</p>
          <ul><li><b>Random sampling</b>: everyone in the population has an equal chance of being picked.</li>
              <li><b>Stratified sampling</b>: split the population into groups (strata), then pick randomly from each in proportion to its size.</li>
              <li><b>Quota sampling</b>: split into groups and interview a set number from each, chosen by the researcher (not random).</li>
              <li><b>Cluster sampling</b>: pick a few areas (clusters) at random and survey people there; cheaper when the population is spread out.</li>
              <li><b>Convenience sampling</b>: ask whoever is easiest to reach. Quick but often biased.</li>
              <li><b>Snowball sampling</b>: respondents recruit others they know; useful for hard-to-reach groups (e.g. sneaker collectors).</li></ul>` },
        { title: 'Ethics of market research', html: `
          <p>Research must be done ethically:</p>
          <ul><li><b>Informed consent</b>: people know what the research is for and agree to take part.</li>
              <li><b>Privacy</b>: personal data is kept safe and used only as promised (in the EU, the GDPR law).</li>
              <li><b>No harm or pressure</b>: especially with children and vulnerable people.</li>
              <li><b>Honesty</b>: results aren't faked or cherry-picked to please the boss.</li></ul>
          <div class="example">${sf} can't secretly track customers' phones in the store, and needs parental consent for under-15s in its surveys.</div>` }
      ],
      labs: [
        {
          type: 'sort', title: 'Primary or secondary?',
          challenge: 'Sort all 8 sources correctly in one go.',
          buckets: ['Primary', 'Secondary'],
          items: [
            { t: '📋 A survey of 400 teens in Copenhagen', b: 0 },
            { t: '🗣️ A focus group testing three colourways', b: 0 },
            { t: '👀 Watching which shelf customers visit first', b: 0 },
            { t: '🎙️ Interviews with five sneaker collectors', b: 0 },
            { t: '📈 Statistics Denmark data on 15–24-year-olds', b: 1 },
            { t: '📰 A news article on sneaker resale prices', b: 1 },
            { t: '📑 Nike\'s annual report', b: 1 },
            { t: '📚 An industry report on the European sneaker market', b: 1 }
          ]
        },
        {
          type: 'scenarios', title: 'Pick the sample',
          challenge: 'Choose the best sampling method in all 3 cases.',
          items: [
            { s: 'Sami wants views from Danish 15–24-year-olds, and knows that 60% of SoleFlip\'s buyers are boys and 40% girls. He wants the sample to match that, chosen fairly.', options: [
              { t: 'Stratified sampling', ok: true, fb: 'Yes: split into boys and girls, then pick randomly within each group in a 60:40 ratio.' },
              { t: 'Convenience sampling', ok: false, fb: 'Asking whoever is nearby won\'t match the 60:40 split and is likely to be biased.' },
              { t: 'Snowball sampling', ok: false, fb: 'Friends recruit friends, so the sample will be similar people, not representative.' }] },
            { s: 'SoleFlip wants to talk to rare-sneaker collectors. There is no list of them, but collectors know each other.', options: [
              { t: 'Snowball sampling', ok: true, fb: 'Yes: each collector introduces others, reaching a hidden group.' },
              { t: 'Random sampling', ok: false, fb: 'You can\'t pick randomly from a population you have no list of.' },
              { t: 'Cluster sampling of whole towns', ok: false, fb: 'Most people in a town aren\'t collectors, so it would waste time and money.' }] },
            { s: 'With one afternoon and no budget, Sami wants a quick feel for reactions to a new logo before a proper survey.', options: [
              { t: 'Convenience sampling of store visitors', ok: true, fb: 'Yes: fast and free. Fine for a first impression, as long as he remembers it may be biased.' },
              { t: 'A national random sample of 2,000 people', ok: false, fb: 'Far too slow and expensive for a quick logo check.' },
              { t: 'Hire a research agency for a stratified study', ok: false, fb: 'Good quality, but not possible with no budget and one afternoon.' }] }
          ]
        }
      ],
      worked: {
        title: 'Design research for Originals (exam style)',
        intro: `<p><b>Question:</b> Before ordering 2,000 pairs of ${og}, ${sf} wants to know the price teens will pay and which colourways they prefer. <i>Explain</i> a suitable research plan. [6 marks]</p>`,
        steps: [
          { prompt: 'What secondary research should come first?', answer: 'Industry reports and competitors\' prices: what similar sneakers sell for, and how big the teen sneaker market is. Cheap and quick.' },
          { prompt: 'Which primary method fits "what price would you pay"?', answer: 'An <b>online survey</b> giving <b>quantitative</b> data from many teens, e.g. "Would you buy at $70 / $90 / $110?"' },
          { prompt: 'And for "which colourway, and why"?', answer: 'A <b>focus group</b> of 8–10 target customers handling samples, for <b>qualitative</b> reasons behind their choices.' },
          { prompt: 'How should the survey sample be chosen?', answer: 'Not just SoleFlip\'s followers (biased: they already love the brand). <b>Stratified</b> or <b>quota</b> sampling of 15–24-year-olds by age and gender, so it represents the target market.' },
          { prompt: 'What ethical points must SoleFlip follow?', answer: 'Informed consent (parents\' consent for younger teens), keep personal data private under GDPR, and report the results honestly.' }
        ],
        takeaway: 'A good research answer combines secondary + primary, quantitative + qualitative, and justifies the sample.'
      },
      quiz: [
        { id: '4.4-1', type: 'mcq', cmd: 'Distinguish', q: 'What is the key difference between <b>primary</b> and <b>secondary</b> research?', options: ['Primary collects new data for this purpose; secondary uses existing data', 'Primary is always quantitative; secondary is always qualitative', 'Primary is carried out online; secondary is always carried out in person', 'Primary is cheaper and quicker; secondary is more expensive and slow'], answer: 0, why: 'Primary = first-hand, new, specific. Secondary = already exists, gathered by someone else. Primary is usually the more expensive one.' },
        { id: '4.4-2', type: 'mcq', cmd: 'Identify', q: 'Which gives <b>qualitative</b> data?', options: ['A focus group discussing why they like a design', 'A survey showing 62% would pay $90 for a pair', 'Sales figures for the last twelve months by store', 'The number of visitors to the website each day'], answer: 0, why: 'Qualitative = opinions and reasons. The others are numbers (quantitative).' },
        { id: '4.4-3', type: 'mcq', cmd: 'Identify', q: 'A researcher stands outside a shopping centre and asks the first 50 people who walk past. This is…', options: ['convenience sampling', 'random sampling', 'stratified sampling', 'quota sampling'], answer: 0, why: 'Easiest people to reach = convenience. Random would give everyone in the population an equal chance.' },
        { id: '4.4-4', type: 'mcq', cmd: 'Explain', q: 'Why might Sami\'s Instagram poll (82% "yes") be <b>unreliable</b>?', options: ['Only existing fans answered, so the sample is biased', 'Instagram polls can only collect qualitative data', 'Polls are a form of secondary research, so they are always out of date', 'The sample is too large to be analysed properly'], answer: 0, why: 'Followers already like SoleFlip. They don\'t represent the wider target market, so the result overstates demand.' },
        { id: '4.4-5', type: 'sort', q: 'Advantage of primary or of secondary research?', buckets: ['Primary', 'Secondary'], items: [
          { t: 'Up to date and specific to the business', b: 0 }, { t: 'Competitors can\'t see the results', b: 0 }, { t: 'Can ask exactly the questions you need', b: 0 },
          { t: 'Cheap or free to get', b: 1 }, { t: 'Quick to find', b: 1 }, { t: 'Can cover a whole national market', b: 1 }], why: 'Primary is tailored, current and private. Secondary is cheap, fast and broad.' },
        { id: '4.4-6', type: 'tf', q: 'In quota sampling, the people in each group are chosen at random.', answer: false, why: 'False. In quota sampling the researcher chooses who fills each quota. Choosing randomly within groups is stratified sampling.' },
        { id: '4.4-7', type: 'num', cmd: 'Calculate', q: 'Six teens said the most they would pay for Originals was: <b>$70, $80, $90, $90, $100, $110</b>. What is the <b>mean</b>?', answer: 90, unit: '$', display: '$90', hint: 'Add them up and divide by 6.', why: '(70 + 80 + 90 + 90 + 100 + 110) ÷ 6 = 540 ÷ 6 = $90. (Descriptive statistics like the mean are toolkit items.)' },
        { id: '4.4-8', type: 'mcq', cmd: 'Identify', q: 'Which is an <b>ethical</b> issue in market research?', options: ['Collecting personal data from teens without consent', 'Using a sample that is too small to be reliable', 'Asking survey questions that are far too long and confusing', 'Using secondary data that is three years old'], answer: 0, why: 'Consent and privacy are ethical issues. Small samples, bad questions and old data are reliability issues.' }
      ],
      explain: 'You want to open a bubble-tea stand at school. Explain to a mate one piece of <b>primary</b> and one piece of <b>secondary</b> research you\'d do, and how you\'d pick your <b>sample</b>.'
    },

    // ------------------------------------------------------------------ 4.5
    {
      id: '4.5', title: 'The seven Ps of the marketing mix', emoji: '🧩', minutes: 18, hl: false,
      goal: 'apply each of the seven Ps, explain the product life cycle, extension strategies, the BCG matrix and branding, and choose pricing and promotion methods.',
      hook: `Two sneakers cost the same to make. One sells for $90, the other for $400. One is everywhere on TikTok, the other you never see. One comes in a box you keep forever.<br><br>Which decisions turn a $50 pair of shoes into something people queue for? Marketers call them the <b>seven Ps</b>.`,
      cards: [
        { title: 'The marketing mix', html: `
          <p>The <b>marketing mix</b> is the set of decisions a business makes to sell a product to its target market. For goods, the classic <b>4 Ps</b>:</p>
          <ul><li><b>Product</b>: what you sell (design, features, quality, brand, packaging).</li>
              <li><b>Price</b>: what customers pay.</li>
              <li><b>Promotion</b>: how you tell and persuade them.</li>
              <li><b>Place</b>: how it reaches them.</li></ul>
          <p>Services add 3 more (the <b>7 Ps</b>): <b>People</b>, <b>Processes</b> and <b>Physical evidence</b>.</p>
          <div class="tip">The Ps must fit together and fit the [[target market]]. A luxury price with bargain-bin promotion confuses customers. "Coherent mix" is a phrase examiners like.</div>` },
        { title: 'Product and the product life cycle', html: `
          <p>The <b>product life cycle</b> shows the stages a product goes through: <b>development → introduction → growth → maturity → decline</b>.</p>
          <ul><li>Development and introduction: high costs, low sales, <b>negative cash flow</b>.</li>
              <li>Growth: sales rise fast, profit and cash flow turn positive, competitors arrive.</li>
              <li>Maturity: sales peak; the best cash flow, as marketing costs fall.</li>
              <li>Decline: sales and profit fall.</li></ul>
          <p><b>Extension strategies</b> stretch the life of a product: new colours or features, new markets, new uses, rebranding, new promotion or a price change.</p>
          <div class="example">Nike's Air Force 1 (launched 1982) keeps returning with collabs and new colourways: a textbook extension strategy.</div>` },
        { title: 'BCG matrix (toolkit) and branding', html: `
          <p>The <b>BCG matrix</b> (Boston Consulting Group; a toolkit item) sorts a firm's products by market growth and relative market share:</p>
          <ul><li><b>Stars</b>: high share, high growth. Invest to keep them winning.</li>
              <li><b>Cash cows</b>: high share, low growth. Bring in cash for the others.</li>
              <li><b>Question marks</b>: low share, high growth. Invest or drop?</li>
              <li><b>Dogs</b>: low share, low growth. Usually withdraw.</li></ul>
          <p><b>Branding</b> is the name, logo, design and image that make a product recognisable. It builds <b>brand awareness</b> (people know it), <b>brand loyalty</b> (they keep buying it) and <b>brand value</b> (they pay more for it). <b>Packaging</b> protects the product, informs and promotes.</p>
          <div class="example">For ${sf}: cleaning is a cash cow, Originals a question mark.</div>` },
        { title: 'Price: pricing methods', html: `
          <ul><li><b>Cost-plus pricing</b> (mark-up): unit cost + a percentage. Simple, covers costs, but ignores what customers will pay.</li>
              <li><b>Penetration pricing</b>: start low to win market share fast, then raise the price.</li>
              <li><b>Price skimming</b>: start high for a new or unique product, then lower it over time.</li>
              <li><b>Psychological pricing</b>: $89.95 instead of $90.</li>
              <li><b>Loss leader</b>: sell one item below cost to attract customers who buy other things.</li>
              <li><b>Price discrimination</b>: different prices for different customers for the same product (student discounts).</li>
              <li><b>Dynamic pricing</b>: prices change with demand in real time (concert tickets, ride apps).</li>
              <li><b>Competitive pricing</b>: price close to rivals.</li></ul>
          ${F`\text{Cost-plus price} = \text{unit cost} \times \left(1 + \frac{\text{mark-up \%}}{100}\right)`}
          <div class="example">Originals cost $50 a pair ($38 factory + $12 shipping and packaging). An 80% mark-up: 50 × 1.8 = <b>$90</b>.</div>` },
        { title: 'Promotion', html: `
          <ul><li><b>Above-the-line promotion</b>: paid advertising in mass media (TV, radio, cinema, billboards, newspapers). Reaches many people, but expensive and hard to target.</li>
              <li><b>Below-the-line promotion</b>: targeted methods the business controls: sales promotions (2-for-1), direct mail, sponsorship, public relations, events, in-store displays.</li>
              <li><b>Social media marketing</b>: content, ads and influencers on TikTok, Instagram, YouTube. Cheap, targeted and measurable, but one bad post can go viral too.</li>
              <li><b>Guerrilla marketing</b>: low-cost, surprising stunts in public places that get people talking (a giant sneaker on Strøget).</li></ul>
          <p>The <b>promotional mix</b> is the combination a business chooses.</p>` },
        { title: 'Place', html: `
          <p><b>Place</b> is how the product gets to the customer: the <b>distribution channel</b>.</p>
          <ul><li><b>Zero-level (direct)</b>: producer → consumer (SoleFlip's website). Full control and margin.</li>
              <li><b>One-level</b>: producer → retailer → consumer (Originals in a sneaker store).</li>
              <li><b>Two-level</b>: producer → wholesaler → retailer → consumer.</li>
              <li><b>Agents</b> sell on the producer's behalf, often abroad.</li></ul>
          <p>More <b>intermediaries</b> reach more customers but each takes a cut. <b>E-commerce</b> lets even small firms sell directly worldwide.</p>` },
        { title: 'People, processes and physical evidence', html: `
          <p>Especially important for services:</p>
          <ul><li><b>People</b>: the staff customers meet. Their skills, attitude and appearance <i>are</i> the service.</li>
              <li><b>Processes</b>: how the service is delivered: booking, waiting time, payment, returns. Smooth processes = happy customers.</li>
              <li><b>Physical evidence</b>: the tangible things that show the quality of an intangible service: the store design, uniforms, website, packaging, reviews.</li></ul>
          <div class="example">${sf}'s cleaning service: friendly, expert staff (people); online booking and 48-hour turnaround with tracking (processes); before-and-after photos and a dust bag with the logo (physical evidence).</div>` }
      ],
      labs: [
        { type: 'plc', title: 'The life of SoleFlip Originals' },
        {
          type: 'sort', title: 'Name that pricing method',
          challenge: 'Sort all 8 correctly in one go.',
          buckets: ['Penetration', 'Skimming', 'Psychological', 'Price discrimination'],
          items: [
            { t: '📺 A new streaming service at $1 a month for the first year', b: 0 },
            { t: '🍔 A new burger chain opening with very low prices to win customers', b: 0 },
            { t: '🎮 A new console at $699, cut to $499 a year later', b: 1 },
            { t: '📱 A new phone at a record price for early fans', b: 1 },
            { t: '🏷️ Sneakers at $89.95', b: 2 },
            { t: '🧃 Drinks at 9.99 kr', b: 2 },
            { t: '🎓 A student discount on the same sneakers', b: 3 },
            { t: '🎬 Cheaper cinema tickets on Tuesday mornings', b: 3 }
          ]
        }
      ],
      worked: {
        title: 'Price Originals (exam style)',
        intro: `<p><b>Data:</b> ${og} cost <b>$38</b> a pair from the Porto factory plus <b>$12</b> for shipping and packaging. Rivals: Nike AF1 $110, Veja $150, KickBack customs $220. <i>Calculate</i> the cost-plus price with an 80% mark-up, then <i>recommend</i> a pricing method for the launch. [8 marks]</p>`,
        steps: [
          { prompt: 'Unit cost?', answer: '$38 + $12 = <b>$50</b>' },
          { prompt: 'Cost-plus price at 80% mark-up?', answer: '50 × (1 + 0.80) = <b>$90</b> (profit $40 a pair).' },
          { prompt: 'How does $90 compare with rivals?', answer: 'Cheaper than all three rivals, so it fits a target market of teens on a budget. Cost-plus ignores demand, though: research said teens would pay up to $90 on average.' },
          { prompt: 'Penetration or skimming for the launch?', answer: 'Skimming needs a strong brand and unique product with eager early buyers. Originals is new from a small brand, so a <b>penetration</b>-style launch (e.g. $79 for the first 500 pairs) could win attention and share, then rise to $90.' },
          { prompt: 'Recommend, with a condition.', answer: '"Launch at a $79 penetration price for the first drop, then move to $89.95 (psychological pricing). This builds share quickly while keeping a healthy $30–40 margin, <i>as long as</i> the factory cost stays at $50."' }
        ],
        takeaway: 'Calculate first, then use the numbers and the case (target market, rivals, brand strength) to justify a pricing choice.'
      },
      quiz: [
        { id: '4.5-1', type: 'num', cmd: 'Calculate', q: 'Complete the table to find the <b>cost-plus price</b> of a pair of Originals.' + tbl(['', '$'], [['Factory cost per pair', '38'], ['Shipping and packaging per pair', '12'], ['Unit cost', A(50)], ['Mark-up (80%)', A(40)], ['<b>Price</b>', A(90, true)]]), answer: 90, unit: '$', display: '$90', hint: 'Unit cost × 1.8', why: 'Unit cost = 38 + 12 = $50. Mark-up = 80% × 50 = $40. Price = $90.' },
        { id: '4.5-2', type: 'mcq', cmd: 'Identify', q: 'In which stage of the product life cycle is <b>cash flow usually most negative</b>?', options: ['Development and introduction', 'Growth', 'Maturity', 'Decline'], answer: 0, why: 'Development costs and launch marketing come before (or with very few) sales, so cash flow is negative at the start.' },
        { id: '4.5-3', type: 'mcq', cmd: 'Identify', q: 'Which is an <b>extension strategy</b>?', options: ['Launching new colourways of a mature sneaker', 'Testing a prototype with a focus group of buyers', 'Withdrawing a product once sales have collapsed', 'Calculating the break-even output of a product'], answer: 0, why: 'Extension strategies stretch the life of a product in maturity or decline: new versions, new markets, new uses, rebranding.' },
        { id: '4.5-4', type: 'mcq', cmd: 'Identify', q: 'In the <b>BCG matrix</b>, a product with a <b>high</b> market share in a <b>low-growth</b> market is a…', options: ['cash cow', 'star', 'question mark', 'dog'], answer: 0, why: 'High share + low growth = cash cow: it generates cash with little investment.' },
        { id: '4.5-5', type: 'sort', q: 'Which P is each decision?', buckets: ['Product', 'Price', 'Promotion', 'Place'], items: [
          { t: 'A recycled sole', b: 0 }, { t: 'A limited-edition box', b: 0 }, { t: 'A $79 launch price', b: 1 }, { t: 'A student discount', b: 1 },
          { t: 'A TikTok creator campaign', b: 2 }, { t: 'Sponsoring a skate contest', b: 2 }, { t: 'Selling through Zalando', b: 3 }, { t: 'Opening a store in Aarhus', b: 3 }], why: 'Product = what it is; price = what it costs; promotion = how people hear about it; place = where and how they get it.' },
        { id: '4.5-6', type: 'mcq', cmd: 'Distinguish', q: 'Which is <b>below-the-line</b> promotion?', options: ['A 2-for-1 sales promotion in the store', 'A TV advert during a football match', 'A national radio advertising campaign', 'A billboard at Copenhagen Central Station'], answer: 0, why: 'Below-the-line = targeted methods the business controls (sales promotions, sponsorship, direct mail). The others are paid mass-media adverts (above the line).' },
        { id: '4.5-7', type: 'mcq', cmd: 'Identify', q: 'Concert tickets that get pricier as more people try to buy them use…', options: ['dynamic pricing', 'cost-plus pricing', 'loss-leader pricing', 'penetration pricing'], answer: 0, why: 'Dynamic pricing changes the price in real time with demand.' },
        { id: '4.5-8', type: 'mcq', cmd: 'Explain', q: 'Why does a sneaker-<b>cleaning service</b> need <b>physical evidence</b>?', options: ['Customers can\'t see the service in advance, so tangible signs show its quality', 'The law requires every service business to give customers a printed receipt each time', 'It replaces the need for trained staff to deliver the service to customers', 'It lowers the cost of the service, so the price can be kept low for customers'], answer: 0, why: 'Services are intangible. Before-and-after photos, a smart store, reviews and branded packaging reassure customers about quality.' },
        { id: '4.5-9', type: 'tf', q: 'A zero-level distribution channel has no intermediaries between producer and consumer.', answer: true, why: 'True. Zero-level = direct (e.g. SoleFlip\'s website). One-level adds a retailer; two-level adds a wholesaler too.' },
        { id: '4.5-10', type: 'tf', q: 'A product in maturity always has the highest sales and the highest profit, so no action is needed.', answer: false, why: 'False. Sales peak in maturity, but competition grows and sales will eventually fall. This is exactly when businesses plan extension strategies.' }
      ],
      explain: 'Pick a product you bought recently. Explain to a mate its <b>7 Ps</b> (or 4 Ps for a good), and which stage of the <b>product life cycle</b> you think it is in.'
    },

    // ------------------------------------------------------------------ 4.6
    {
      id: '4.6', title: 'International marketing', emoji: '🌍', minutes: 12, hl: true,
      goal: 'explain methods of entering international markets, the opportunities and threats of going international, and when to standardize or adapt the marketing mix.',
      hook: `German teens keep messaging ${sf}: "Do you ship to Berlin?" Germany has <b>14 times</b> as many people as Denmark.<br><br>Should ${sf} go international? And if it does, should it just switch on shipping, find a partner, or open a store in Berlin?`,
      cards: [
        { title: 'Why go international?', html: `
          <p><span class="tag">HL</span> <b>International marketing</b> is marketing products in more than one country.</p>
          <p><b>Opportunities</b>:</p>
          <ul><li>A much bigger market and more sales, especially if the home market is small or saturated.</li>
              <li><b>[[economies of scale|Economies of scale]]</b> from producing more.</li>
              <li>Spreading risk across countries.</li>
              <li>Extending the [[product life cycle]] in new markets.</li>
              <li>A stronger, global brand.</li></ul>
          <div class="example">[[globalization|Globalization]] and e-commerce mean even ${sf} can sell abroad from a website, without a single foreign store.</div>` },
        { title: 'Methods of entry', html: `
          <ul><li><b>Exporting</b>: sell from the home country to foreign customers, directly (own website) or through agents and distributors. Low cost and risk, but shipping costs and less local knowledge.</li>
              <li><b>[[franchising|Franchising]]</b> or licensing: local businesses use the brand for a fee. Fast growth with little capital, but less control.</li>
              <li><b>[[joint venture|Joint ventures]]</b> and <b>[[strategic alliance|strategic alliances]]</b>: work with a local partner who knows the market. Shared costs and risks, but shared profits and possible conflict.</li>
              <li><b>[[acquisition|Acquisitions]]</b> or [[merger|mergers]]: buy or join a foreign firm. Instant presence, but expensive and risky.</li>
              <li><b>Direct investment</b>: open your own stores or factories abroad (becoming a [[multinational company]]). Full control, but the highest cost and risk.</li></ul>` },
        { title: 'Threats and barriers', html: `
          <ul><li><b>Cultural differences</b>: language, tastes, humour, colours and symbols. A slogan that's funny in Danish can be offensive elsewhere.</li>
              <li><b>Legal</b>: different consumer, advertising, labelling and data laws.</li>
              <li><b>Political</b>: tariffs, trade barriers, instability.</li>
              <li><b>Economic</b>: exchange rates, different income levels, local competitors who know the market.</li>
              <li><b>Practical</b>: shipping, returns, payment methods and customer service in another language.</li></ul>
          <p class="muted small">A [[STEEPLE analysis]] (6.2) is a checklist for spotting these factors before you enter a market.</p>
          <div class="example">German shoppers often pay by invoice (Klarna) or PayPal rather than card, and expect free returns. ${sf} must change its processes, not just its language.</div>` },
        { title: 'Global or local? Glocalization', html: `
          <p>Should the marketing mix be the same everywhere?</p>
          <ul><li><b>Standardization</b> (global strategy): the same product and message worldwide. Cheaper, consistent brand, economies of scale. Risk: ignores local tastes.</li>
              <li><b>Adaptation</b> (local strategy): change the mix for each country. Fits local customers better, but costs more.</li>
              <li><b>Glocalization</b>: "think global, act local". Keep the global brand, adapt some Ps. McDonald's sells the McSpicy Paneer in India and the McBaguette in France.</li></ul>
          <div class="tip">In "evaluate" questions on going international, weigh the opportunity (market size, growth) against the risks and the cost of the entry method, then judge which method suits <i>this</i> business's size and resources.</div>` }
      ],
      labs: [
        {
          type: 'scenarios', title: 'Choose the way in',
          challenge: 'Pick the best entry method for all 3 businesses.',
          items: [
            { s: 'SoleFlip (about 20 staff, limited cash) wants to test demand in Germany for Originals.', options: [
              { t: 'Export directly through its website, with German pages and payment options', ok: true, fb: 'Yes: low cost and low risk, and the sales data shows whether a bigger step is worth it.' },
              { t: 'Open three flagship stores in Berlin, Munich and Hamburg', ok: false, fb: 'Huge cost and risk before SoleFlip knows whether Germans will buy.' },
              { t: 'Acquire a German sneaker chain', ok: false, fb: 'SoleFlip has neither the money nor the experience.' }] },
            { s: 'A Danish bakery chain wants to grow fast across the Middle East, where it has no local knowledge and laws require local ownership.', options: [
              { t: 'A joint venture or franchise with a local partner', ok: true, fb: 'Yes: the partner brings local knowledge and meets ownership rules, and growth needs less capital.' },
              { t: 'Export bread from Denmark every morning', ok: false, fb: 'Fresh bread can\'t be shipped that far daily.' },
              { t: 'Run everything from Copenhagen with no local presence', ok: false, fb: 'Ignores local laws, tastes and practical needs.' }] },
            { s: 'A huge US tech company wants complete control over its new European data centre and has billions in cash.', options: [
              { t: 'Direct investment: build and own the centre', ok: true, fb: 'Yes: it can afford it, and control over data and security matters most.' },
              { t: 'Franchise the data centre to local firms', ok: false, fb: 'It would lose control of sensitive data and systems.' },
              { t: 'Export the data centre from the US', ok: false, fb: 'The point is to have capacity in Europe, close to customers and EU data rules.' }] }
          ]
        },
        {
          type: 'sort', title: 'Opportunity or threat?',
          challenge: 'Sort all 8 correctly in one go.',
          buckets: ['Opportunity', 'Threat'],
          items: [
            { t: '🇩🇪 Germany has 84 million people', b: 0 },
            { t: '📈 Economies of scale from bigger factory orders', b: 0 },
            { t: '🛡️ Less dependence on the small Danish market', b: 0 },
            { t: '🔁 Extending the life of Originals in a new market', b: 0 },
            { t: '💱 The euro falls against the Danish krone', b: 1 },
            { t: '🧾 Different consumer and return laws', b: 1 },
            { t: '🏪 Strong local sneaker stores that know the market', b: 1 },
            { t: '🗯️ A slogan that doesn\'t translate well', b: 1 }
          ]
        }
      ],
      worked: {
        title: 'Evaluate entering Germany (exam style)',
        intro: `<p><b>Question:</b> ${sf} is considering two ways to sell ${og} in Germany: <b>A</b> export through its website; <b>B</b> a joint venture with a Berlin sneaker store. <i>Evaluate</i> the two options. [10 marks]</p>`,
        steps: [
          { prompt: 'Why is Germany attractive?', answer: 'About 84 million people vs 6 million in Denmark, a big sneaker culture, and fans already asking. A chance to grow beyond a 3.6% share of a small home market.' },
          { prompt: 'Strengths and weaknesses of A (exporting)?', answer: '✅ Cheap, quick, low risk, full control and margin. ❌ Shipping and returns costs, little local brand awareness, and SoleFlip must handle German customer service and payment methods.' },
          { prompt: 'Strengths and weaknesses of B (joint venture)?', answer: '✅ A local partner with customers, knowledge and a physical store. ❌ Shared profits, less control over the brand, possible disagreements, and more cash and management time.' },
          { prompt: 'What does the best choice depend on?', answer: 'SoleFlip\'s cash and staff (it is still small), how strong demand really is, and how much the German market needs a physical store.' },
          { prompt: 'Judgement.', answer: '"Start with <b>A, exporting</b>: it tests demand cheaply. If German sales grow strongly, move to <b>B</b> to build presence. This staged approach limits risk for a business of SoleFlip\'s size."' }
        ],
        takeaway: 'Evaluate = both sides of each option + what it depends on + a justified judgement. A staged recommendation often shows strong judgement.'
      },
      quiz: [
        { id: '4.6-1', type: 'mcq', cmd: 'Identify', q: '<span class="tag">HL</span> Which entry method has the <b>lowest cost and risk</b>?', options: ['Exporting through the business\'s own website', 'Building a factory in the foreign country', 'Acquiring a competitor in the foreign country', 'Opening a chain of stores in the foreign country'], answer: 0, why: 'Exporting needs no foreign assets, so little money is at risk. Direct investment and acquisitions are the most costly and risky.' },
        { id: '4.6-2', type: 'mcq', cmd: 'Define', q: '<span class="tag">HL</span> <b>Glocalization</b> means…', options: ['keeping a global brand while adapting parts of the mix to local markets', 'selling exactly the same product with the same message in every country', 'only selling products in the local market where the business started out', 'moving all production to the country with the lowest wages in the world'], answer: 0, why: '"Think global, act local": e.g. McDonald\'s local menu items under one global brand.' },
        { id: '4.6-3', type: 'mcq', cmd: 'Explain', q: '<span class="tag">HL</span> Why might a business choose a <b>joint venture</b> to enter a foreign market?', options: ['A local partner brings market knowledge and shares the costs and risks', 'It gives the business complete control over every decision it makes abroad', 'It means the business keeps all of the profit it makes abroad', 'It avoids the need to adapt the product to any local customers'], answer: 0, why: 'The partner knows the market and shares costs and risks. The trade-off is shared profit and control.' },
        { id: '4.6-4', type: 'sort', q: '<span class="tag">HL</span> Opportunity or threat of international marketing?', buckets: ['Opportunity', 'Threat'], items: [
          { t: 'A larger market', b: 0 }, { t: 'Spreading risk across countries', b: 0 }, { t: 'Economies of scale', b: 0 },
          { t: 'Exchange-rate changes', b: 1 }, { t: 'Cultural misunderstandings', b: 1 }, { t: 'Tariffs and trade barriers', b: 1 }], why: 'Going international brings growth and scale, but also currency, cultural, legal and political risks.' },
        { id: '4.6-5', type: 'tf', q: '<span class="tag">HL</span> Standardizing the marketing mix worldwide is always cheaper and therefore always the best strategy.', answer: false, why: 'False. It is usually cheaper, but if it ignores local tastes, laws or incomes, sales can be poor. Many firms adapt some Ps (glocalization).' },
        { id: '4.6-6', type: 'mcq', cmd: 'Identify', q: '<span class="tag">HL</span> A Danish brand finds its Christmas advert is confusing in a country where Christmas isn\'t celebrated. This is a…', options: ['cultural barrier', 'legal barrier', 'economic barrier', 'political barrier'], answer: 0, why: 'Differences in customs, beliefs and language are cultural barriers.' },
        { id: '4.6-7', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> Originals sell for <b>€80</b> in Germany. If <b>€1 = 7.5 kr</b>, how many Danish kroner does SoleFlip receive per pair?', answer: 600, unit: 'kr', display: '600 kr', hint: 'Price in € × exchange rate', why: '80 × 7.5 = 600 kr. If the euro weakens to 7.0 kr, SoleFlip gets only 560 kr: an exchange-rate risk.' }
      ],
      explain: 'Pick a brand from another country that you use. Explain to a mate how it entered your country, and one thing it <b>changed</b> for local customers (or kept the same).'
    }
  ],
  formulas: [
    { group: '4.1 Introduction to marketing', items: [
      { name: 'Market share', f: M`\frac{\text{a firm's sales}}{\text{total sales in the market}} \times 100` },
      { name: 'Market growth', f: M`\frac{\text{this year's market size} - \text{last year's}}{\text{last year's market size}} \times 100`, note: 'Not on the IB formula sheet: it is the usual percentage-change calculation.' }] },
    { group: '4.3 Sales forecasting', items: [
      { name: 'Four-part centred moving average', f: M`\frac{\text{4-part average}_1 + \text{4-part average}_2}{2}`, hl: true, note: 'Each 4-part average = sum of four consecutive quarters ÷ 4.' },
      { name: 'Seasonal variation', f: M`\text{actual sales} - \text{trend}`, hl: true },
      { name: 'Forecast', f: M`\text{projected trend} + \text{average seasonal variation}`, hl: true }] },
    { group: '4.5 The seven Ps of the marketing mix', items: [
      { name: 'Cost-plus price', f: M`\text{unit cost} \times \left(1 + \frac{\text{mark-up \%}}{100}\right)`, note: 'Not on the IB formula sheet, but needed to apply cost-plus (mark-up) pricing.' }] }
  ]
};
