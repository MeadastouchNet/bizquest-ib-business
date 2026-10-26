// The business management toolkit (IB Business Management guide, first assessment 2024).
// In the guide the toolkit is not a numbered unit: its tools are used across Units 1–5 and in the internal
// assessment. BizQuest shows it as "Unit 6" so it has its own lessons, Boss Battle and formula sheet.
// Running case: SoleFlip's German online sales are booming (4.6). Should it open a Berlin store? SWOT, STEEPLE,
// the decision tree, force field analysis, the Gantt chart and the critical path all work on that one decision;
// regression uses SoleFlip's ad data, and circular business models build on 5.1 and 5.3.
// 6.10-6.13 complete the 15 prescribed tools: descriptive statistics, Porter, Hofstede and contribution.
// The Ansoff matrix (4.2) and BCG matrix (4.5) are taught inside the topics that use them.

import { M, F, A, tbl } from './helpers.js';

const sf = '<b>SoleFlip</b>';

export const unit6 = {
  id: '6',
  title: 'The business management toolkit',
  emoji: '🧰',
  blurb: 'German fans keep asking SoleFlip for a Berlin store. Is it a good idea, how likely is it to pay off, what could stop it, and how long would it take to open? This unit teaches the IB toolkit: the analysis tools you use in every unit, in Paper 1 and 2 answers, and in your IA. (The Ansoff matrix is in 4.2 and the BCG matrix in 4.5.) (The IB guide doesn\'t number the toolkit as a unit; BizQuest calls it Unit 6.)',
  sections: [
    // ------------------------------------------------------------------ 6.1
    {
      id: '6.1', title: 'SWOT analysis', emoji: '🧭', minutes: 10, hl: false,
      goal: 'build a SWOT analysis, tell internal from external factors, and use a SWOT to suggest strategies.',
      hook: `Noah makes a list of everything good and bad about opening a Berlin store. It has 40 points, in no order. Freja reads it and says: "So… should we do it?"<br><br>A long list doesn't make a decision. How do you sort what you know into something you can actually use?`,
      cards: [
        { title: 'What is SWOT?', html: `
          <p>A <b>SWOT analysis</b> sorts what you know about a business (or a decision) into four boxes:</p>
          <div class="table-wrap"><table class="fin"><tr><th></th><th>Helpful</th><th>Harmful</th></tr>
            <tr><td><b>Internal</b> (inside the business)</td><td><b>Strengths</b></td><td><b>Weaknesses</b></td></tr>
            <tr><td><b>External</b> (outside the business)</td><td><b>Opportunities</b></td><td><b>Threats</b></td></tr></table></div>
          <p>The business can control its strengths and weaknesses. It can't control opportunities and threats; it can only react to them.</p>
          <div class="tip">The most common mistake: putting an external factor (a growing market) under strengths. Ask: "is this about <i>us</i>, or about the world around us?"</div>` },
        { title: 'Strengths and weaknesses', html: `
          <p><b>Strengths</b> are internal advantages: skills, brand, products, finance, people, technology.</p>
          <p><b>Weaknesses</b> are internal limitations: what the business does badly or lacks.</p>
          <div class="example">${sf}: <b>strengths</b> = a loyal teen following on TikTok, unique hand-painted designs, a recycled-sole [[unique selling point|USP]]. <b>Weaknesses</b> = small cash reserves, no German-speaking staff, too much depends on Noah and Freja, a 5% [[defect rate]].</div>` },
        { title: 'Opportunities and threats', html: `
          <p><b>Opportunities</b> are external chances the business could use: growing markets, new technology, changing tastes, new laws that favour it.</p>
          <p><b>Threats</b> are external dangers: competitors, recessions, new laws, exchange rates, changing tastes.</p>
          <div class="example">${sf}: <b>opportunities</b> = German online sales growing, more demand for sustainable fashion, festival partnerships. <b>Threats</b> = KickBack (the [[market leader]]) entering Germany, Nike's own customisation service, rising shipping costs, a weaker euro.</div>
          <p class="muted small">A [[STEEPLE analysis]] (6.2) is a good way to find the opportunities and threats.</p>` },
        { title: 'Using a SWOT well', html: `
          <p>A SWOT is only useful if it leads to action. Match the boxes:</p>
          <ul><li>Use <b>strengths</b> to grab <b>opportunities</b> (TikTok following → launch in Germany online first).</li>
              <li>Fix <b>weaknesses</b> that block opportunities (hire a German-speaking manager).</li>
              <li>Use strengths to defend against <b>threats</b> (unique designs vs KickBack's bigger budget).</li></ul>
          <p><b>Limitations</b>: it's subjective (people disagree what goes where), a snapshot that dates quickly, and it doesn't rank how important each point is.</p>
          <div class="tip">In the exam: be specific to the case (never "good brand"; say "a TikTok following of 180,000"), and say which factor matters most.</div>` }
      ],
      labs: [
        {
          type: 'sort', title: 'Build SoleFlip\'s SWOT',
          challenge: 'Sort all 12 into the right box in one go.',
          buckets: ['Strength', 'Weakness', 'Opportunity', 'Threat'],
          items: [
            { t: '📱 180,000 TikTok followers', b: 0 },
            { t: '🎨 Unique hand-painted designs', b: 0 },
            { t: '♻️ Soles made from recycled sneakers', b: 0 },
            { t: '💸 Only $15,000 of cash in the bank', b: 1 },
            { t: '🗣️ Nobody on the team speaks German', b: 1 },
            { t: '🧩 5% of custom pairs are defective', b: 1 },
            { t: '🇩🇪 German online orders up 60% this year', b: 2 },
            { t: '🌱 Teens want more sustainable fashion', b: 2 },
            { t: '🎪 A Berlin festival wants a partner brand', b: 2 },
            { t: '🏆 KickBack is opening in Germany', b: 3 },
            { t: '🚚 Shipping costs are rising', b: 3 },
            { t: '💶 The euro is weakening', b: 3 }
          ]
        },
        {
          type: 'scenarios', title: 'From SWOT to strategy',
          challenge: 'Pick the best strategy for all 3 SWOT findings.',
          items: [
            { s: '<b>Strength:</b> a huge TikTok following. <b>Opportunity:</b> German online orders are booming.', options: [
              { t: 'Run German-language TikTok drops and sell online before opening any store', ok: true, fb: 'Yes: a strength is used to grab an opportunity, cheaply.' },
              { t: 'Close the TikTok account to save time', ok: false, fb: 'That throws away the strength that is driving the opportunity.' },
              { t: 'Ignore Germany and focus on Denmark only', ok: false, fb: 'The opportunity is wasted.' }] },
            { s: '<b>Weakness:</b> nobody speaks German. <b>Opportunity:</b> a Berlin festival wants a partner brand.', options: [
              { t: 'Hire a German-speaking event manager for the festival', ok: true, fb: 'Yes: fix the weakness that blocks the opportunity.' },
              { t: 'Turn the festival down forever', ok: false, fb: 'The weakness can be fixed fairly cheaply.' },
              { t: 'Send Noah with a phrasebook', ok: false, fb: 'It doesn\'t really fix the weakness, and the brand could look amateur.' }] },
            { s: '<b>Threat:</b> KickBack, with a far bigger budget, is entering Germany. <b>Strength:</b> unique designs and a recycled-sole USP.', options: [
              { t: 'Differentiate: lead with the hand-painted, recycled story', ok: true, fb: 'Yes: use the strengths that KickBack can\'t copy, rather than a price war.' },
              { t: 'Start a price war with KickBack', ok: false, fb: 'SoleFlip has small cash reserves: it would lose a price war.' },
              { t: 'Copy KickBack\'s designs', ok: false, fb: 'It throws away SoleFlip\'s USP and could break copyright.' }] }
          ]
        }
      ],
      worked: {
        title: 'Use a SWOT in an answer (exam style)',
        intro: `<p><b>Question:</b> <i>Prepare</i> a SWOT analysis for ${sf}'s plan to open a Berlin store, then use it to recommend whether to go ahead. [10 marks]</p>`,
        steps: [
          { prompt: 'Two strengths, specific to the case?', answer: 'A 180,000-strong TikTok following; a unique recycled-sole, hand-painted product (USP).' },
          { prompt: 'Two weaknesses?', answer: 'Only $15,000 cash against a $60,000 store; no German-speaking staff.' },
          { prompt: 'Two opportunities and two threats?', answer: 'O: German online orders up 60%; a Berlin festival partnership. T: KickBack entering Germany; a weakening euro.' },
          { prompt: 'Which factor matters most?', answer: 'The <b>cash weakness</b>: SoleFlip can\'t fund a $60,000 store without borrowing, which adds risk while KickBack arrives.' },
          { prompt: 'Recommendation.', answer: '"Not a full store yet. Use the strengths (TikTok, USP) to grow German online sales and test demand with the festival partnership and a pop-up, while building cash. Review in a year."' }
        ],
        takeaway: 'A SWOT earns marks when the points are specific and you use them: rank them, link them, and reach a judgement.'
      },
      quiz: [
        { id: '6.1-1', type: 'mcq', cmd: 'Identify', q: 'In a SWOT analysis, which two boxes are <b>internal</b> to the business?', options: ['Strengths and weaknesses', 'Opportunities and threats', 'Strengths and opportunities', 'Weaknesses and threats'], answer: 0, why: 'Strengths and weaknesses are about the business itself. Opportunities and threats come from outside.' },
        { id: '6.1-2', type: 'mcq', cmd: 'Identify', q: 'For SoleFlip, "the German sneaker market is growing fast" is a…', options: ['opportunity', 'strength', 'weakness', 'threat'], answer: 0, why: 'It is external (about the market, not SoleFlip) and helpful.' },
        { id: '6.1-3', type: 'mcq', cmd: 'Identify', q: '"SoleFlip depends heavily on two founders" is a…', options: ['weakness', 'threat', 'opportunity', 'strength'], answer: 0, why: 'It is internal and harmful: if Noah or Freja leaves, the business struggles.' },
        { id: '6.1-4', type: 'sort', q: 'Internal or external?', buckets: ['Internal', 'External'], items: [
          { t: 'Skilled workshop staff', b: 0 }, { t: 'Low cash reserves', b: 0 }, { t: 'A strong brand', b: 0 },
          { t: 'A new competitor', b: 1 }, { t: 'A recession', b: 1 }, { t: 'A new EU law', b: 1 }], why: 'Internal = inside the business (strengths/weaknesses). External = the environment (opportunities/threats).' },
        { id: '6.1-5', type: 'mcq', cmd: 'Explain', q: 'What is a <b>limitation</b> of SWOT analysis?', options: ['It is subjective and does not rank how important each factor is', 'It can only be used by large companies with many departments', 'It only looks at the business\'s finances and ignores everything else', 'It needs exact numbers for every factor before it can be used'], answer: 0, why: 'People disagree on what goes where, it is a snapshot that dates, and it doesn\'t weight the factors.' },
        { id: '6.1-6', type: 'tf', q: 'A business can control its opportunities and threats.', answer: false, why: 'False. They are external, so the business can only react to them. It controls its strengths and weaknesses.' }
      ],
      explain: 'Do a quick SWOT of yourself as an IB student. Explain to a mate your biggest <b>strength</b>, <b>weakness</b>, <b>opportunity</b> and <b>threat</b>, and one plan that uses a strength to grab an opportunity.'
    },

    // ------------------------------------------------------------------ 6.2
    {
      id: '6.2', title: 'STEEPLE analysis', emoji: '🌐', minutes: 10, hl: false,
      goal: 'use the seven STEEPLE factors to analyse a business\'s external environment, and judge which factors matter most.',
      hook: `${sf} knows Copenhagen inside out. Berlin is different: other laws, other prices, other habits, another language.<br><br>Before spending $60,000 there, how do you scan everything going on <i>outside</i> the business, without forgetting anything important?`,
      cards: [
        { title: 'What is STEEPLE?', html: `
          <p>A <b>STEEPLE analysis</b> is a checklist of seven external factors that can affect a business:</p>
          <p><b>S</b>ocial · <b>T</b>echnological · <b>E</b>conomic · <b>E</b>nvironmental · <b>P</b>olitical · <b>L</b>egal · <b>E</b>thical</p>
          <p>It looks only at the <b>external environment</b>: things the business can't control. It's a great way to find the opportunities and threats for a [[SWOT analysis]].</p>` },
        { title: 'Social, technological, economic, environmental', html: `
          <ul><li><b>Social</b>: population, age structure, lifestyles, tastes, culture, values. <i>German teens care about sustainability.</i></li>
              <li><b>Technological</b>: new technology and how people use it. <i>TikTok Shop and AR try-ons.</i></li>
              <li><b>Economic</b>: growth or recession, inflation, unemployment, interest rates, exchange rates. <i>Inflation squeezes teen spending; the euro exchange rate.</i></li>
              <li><b>Environmental</b>: climate, pollution, waste, natural resources. <i>Pressure to cut textile and packaging waste.</i></li></ul>` },
        { title: 'Political, legal, ethical', html: `
          <ul><li><b>Political</b>: government policy and stability, trade agreements, taxes. <i>Germany and Denmark are both in the EU single market: no tariffs.</i></li>
              <li><b>Legal</b>: laws on consumers, employment, health and safety, advertising, data. <i>EU online shoppers can return goods within 14 days; Germany requires firms to register their packaging.</i></li>
              <li><b>Ethical</b>: what society thinks is right, beyond the law. <i>Customers expect proof of fair wages in the Porto factory.</i></li></ul>
          <div class="tip">Political = what the government decides or how stable it is. Legal = the laws that result. Ethical = what's right even when no law requires it.</div>` },
        { title: 'Using STEEPLE well', html: `
          <ul><li>Don't just list: explain <b>how</b> each factor affects the business, and whether it's an opportunity or a threat.</li>
              <li>Focus on the <b>most significant</b> factors, not all seven equally.</li>
              <li>Look at <b>change</b>: what is shifting, and how fast?</li></ul>
          <p><b>Limitations</b>: the environment changes quickly, it can produce long lists with little judgement, and it's hard to predict future factors.</p>
          <div class="example">For SoleFlip's Berlin plan, the key factors are <b>economic</b> (teen spending, the euro) and <b>legal</b> (returns and packaging rules raise costs). Political factors barely matter: there are no tariffs inside the EU.</div>` }
      ],
      labs: [
        {
          type: 'sort', title: 'STEEPLE scan: Germany',
          challenge: 'Sort all 10 into the right STEEPLE factor in one go.',
          buckets: ['Social', 'Technological', 'Economic', 'Environmental', 'Political', 'Legal', 'Ethical'],
          items: [
            { t: '🌱 German teens want sustainable fashion', b: 0 },
            { t: '🎵 Streetwear culture is huge in Berlin', b: 0 },
            { t: '🛒 TikTok Shop launches in Germany', b: 1 },
            { t: '📈 Inflation squeezes teens\' spending money', b: 2 },
            { t: '💶 The euro weakens against the krone', b: 2 },
            { t: '🗑️ Pressure to cut textile waste', b: 3 },
            { t: '🇪🇺 No tariffs inside the EU single market', b: 4 },
            { t: '📦 Packaging must be registered under German law', b: 5 },
            { t: '↩️ Online buyers have 14 days to return goods', b: 5 },
            { t: '🤝 Customers want proof of fair factory wages', b: 6 }
          ]
        }
      ],
      worked: {
        title: 'STEEPLE in an answer (exam style)',
        intro: `<p><b>Question:</b> <i>Analyse</i> two STEEPLE factors that could affect ${sf}'s plan to open a Berlin store. [6 marks]</p>`,
        steps: [
          { prompt: 'Pick the most significant factor. Why that one?', answer: '<b>Economic</b>: inflation is squeezing teenagers\' spending money, and SoleFlip\'s customers are teens buying $90+ sneakers, a luxury for them.' },
          { prompt: 'How does it affect SoleFlip?', answer: 'Lower demand than forecast → the store may not reach [[break-even]]. A weaker euro also cuts the krone value of every Berlin sale.' },
          { prompt: 'A second factor?', answer: '<b>Legal</b>: EU online shoppers can return goods within 14 days, and German packaging rules add admin. This raises costs, though a physical store could cut online returns.' },
          { prompt: 'Opportunity or threat overall?', answer: 'Mostly threats in the short run, so SoleFlip should start small (a pop-up) and test demand.' }
        ],
        takeaway: 'Name the factor, explain the link to the business with case evidence, and say whether it\'s an opportunity or threat.'
      },
      quiz: [
        { id: '6.2-1', type: 'mcq', cmd: 'Identify', q: 'A new EU law limits how companies can use customer data. In STEEPLE this is…', options: ['legal', 'political', 'ethical', 'technological'], answer: 0, why: 'A law is a legal factor. Political would be the government\'s policy decisions or stability.' },
        { id: '6.2-2', type: 'mcq', cmd: 'Identify', q: 'Interest rates rise, so customers borrow and spend less. This is…', options: ['economic', 'social', 'political', 'legal'], answer: 0, why: 'Interest rates, inflation, growth and exchange rates are economic factors.' },
        { id: '6.2-3', type: 'mcq', cmd: 'Distinguish', q: 'What is the difference between an <b>ethical</b> and a <b>legal</b> factor?', options: ['Legal factors are required by law; ethical ones are about what is right beyond the law', 'Legal factors apply only abroad; ethical factors apply only in the home country', 'Legal factors affect costs; ethical factors never affect a business\'s costs', 'Legal factors change every single year; ethical factors never change over time at all'], answer: 0, why: 'The law sets the minimum. Ethics is what stakeholders expect beyond it, e.g. fair wages above the legal minimum.' },
        { id: '6.2-4', type: 'tf', q: 'STEEPLE analysis looks at a business\'s internal strengths and weaknesses.', answer: false, why: 'False. STEEPLE covers only the external environment. Strengths and weaknesses come from internal analysis (the S and W of SWOT).' },
        { id: '6.2-5', type: 'sort', q: 'Which STEEPLE factor?', buckets: ['Social', 'Technological', 'Environmental', 'Political'], items: [
          { t: 'An ageing population', b: 0 }, { t: 'A new trend for vintage clothes', b: 0 }, { t: 'AI chatbots for customer service', b: 1 }, { t: '3D printing of soles', b: 1 },
          { t: 'More frequent heatwaves', b: 2 }, { t: 'Plastic waste in the oceans', b: 2 }, { t: 'A trade deal between two countries', b: 3 }, { t: 'An election causing uncertainty', b: 3 }], why: 'Social = people and culture; technological = new tech; environmental = nature and climate; political = government and stability.' },
        { id: '6.2-6', type: 'mcq', cmd: 'Explain', q: 'How does a STEEPLE analysis help with a SWOT analysis?', options: ['It finds the external opportunities and threats', 'It finds the internal strengths and weaknesses', 'It calculates the profit of each strategy', 'It replaces the need for any primary or secondary market research'], answer: 0, why: 'STEEPLE scans the external environment, which is where the O and T of SWOT come from.' }
      ],
      explain: 'Pick a business you know. Explain to a mate the one <b>STEEPLE</b> factor that worries it most right now, and why.'
    },

    // ------------------------------------------------------------------ 6.3
    {
      id: '6.3', title: 'Decision trees', emoji: '🌳', minutes: 12, hl: false,
      goal: 'draw a decision tree, calculate expected values and net gains, choose the best option, and evaluate the method.',
      hook: `Three options for Berlin: a <b>$60,000 store</b> that could make a lot (or flop), a <b>$15,000 pop-up</b> that's safer but smaller, or <b>stay online only</b>.<br><br>Nobody knows the future. But if you can put rough chances on each outcome, can you still pick the best bet?`,
      cards: [
        { title: 'What is a decision tree?', html: `
          <p>A <b>decision tree</b> is a diagram that sets out the options in a decision, the possible outcomes of each, their <b>probabilities</b> and their financial results.</p>
          <ul><li><b>Square</b> = a decision node: the business chooses.</li>
              <li><b>Circle</b> = a chance node: what happens next is down to chance.</li>
              <li>Each outcome has a <b>probability</b> (0 to 1); the probabilities after a circle add up to <b>1</b>.</li>
              <li>The end of each branch shows the financial outcome.</li></ul>
          <div class="example">Store: success (probability 0.6) → returns $150,000; failure (0.4) → returns $30,000.</div>` },
        { title: 'Expected value', html: `
          <p>The <b>expected value (EV)</b> of a chance node is the average result you'd expect if the decision were made many times:</p>
          ${F`\text{EV} = \sum (\text{probability} \times \text{financial outcome})`}
          <div class="example">Store: 0.6 × $150,000 + 0.4 × $30,000 = $90,000 + $12,000 = <b>$102,000</b>.</div>
          <div class="tip">Check that each set of probabilities adds up to 1. If success is 0.6, failure must be 0.4.</div>` },
        { title: 'Net gain and choosing', html: `
          ${F`\text{Net gain} = \text{expected value} - \text{cost of the option}`}
          <div class="table-wrap"><table class="fin"><tr><th>Option</th><th>EV</th><th>Cost</th><th>Net gain</th></tr>
            <tr><td>Store</td><td>$102,000</td><td>$60,000</td><td><b>$42,000</b></td></tr>
            <tr><td>Pop-up</td><td>0.6 × 55k + 0.4 × 30k = $45,000</td><td>$15,000</td><td>$30,000</td></tr>
            <tr><td>Online only</td><td>$0</td><td>$0</td><td>$0</td></tr></table></div>
          <p>Work from right to left ("roll back"), then choose the option with the highest net gain: the <b>store</b>. Mark rejected options with a double line (//).</p>` },
        { title: 'Strengths and limitations', html: `
          <p>✅ Makes you set out every option and outcome; puts numbers on risk; easy to compare options.</p>
          <p>❌ Probabilities and outcomes are <b>estimates</b> (often guesses); the EV is an average that will never actually happen (the store returns $150,000 or $30,000, never $102,000); it ignores qualitative factors and how much risk the owners can take.</p>
          <div class="example">The store has the best net gain, but a 40% chance of a $30,000 return on a $60,000 cost: a $30,000 loss SoleFlip, with $15,000 in the bank, might not survive. The pop-up may be wiser.</div>` }
      ],
      labs: [{ type: 'decisiontree', title: 'Berlin: store, pop-up or stay online?' }],
      worked: {
        title: 'Roll back a decision tree (exam style)',
        intro: '<p><b>Data:</b> Store: cost $60,000; success 0.6 → $150,000, failure 0.4 → $30,000. Pop-up: cost $15,000; high demand 0.6 → $55,000, low demand 0.4 → $30,000. <i>Calculate</i> the net gain of each option and <i>recommend</i> one. [8 marks]</p>',
        steps: [
          { prompt: 'EV of the store?', answer: '0.6 × 150,000 + 0.4 × 30,000 = 90,000 + 12,000 = <b>$102,000</b>' },
          { prompt: 'Net gain of the store?', answer: '102,000 − 60,000 = <b>$42,000</b>' },
          { prompt: 'EV and net gain of the pop-up?', answer: '0.6 × 55,000 + 0.4 × 30,000 = 33,000 + 12,000 = $45,000. Net gain = 45,000 − 15,000 = <b>$30,000</b>.' },
          { prompt: 'What do the numbers alone say?', answer: 'Choose the <b>store</b> ($42,000 > $30,000).' },
          { prompt: 'Recommend, using qualitative factors too.', answer: '"The store has the higher net gain, but a 40% risk of losing $30,000 that SoleFlip\'s $15,000 cash couldn\'t absorb, and the probabilities are guesses. I recommend the pop-up first: still a $30,000 expected gain, far less risk, and it tests the probabilities before committing."' }
        ],
        takeaway: 'Calculate EV → net gain → choose, then evaluate: the numbers are estimates, and risk and cash matter.'
      },
      quiz: [
        { id: '6.3-1', type: 'num', cmd: 'Calculate', q: 'Complete the table to find the <b>net gain</b> of the Berlin store ($000).' + tbl(['Outcome', 'Probability', 'Return ($000)', 'Prob. × return'], [['Success', '0.6', '150', A(90)], ['Failure', '0.4', '30', A(12)], ['<b>Expected value</b>', '', '', A(102)], ['Cost of the store', '', '', '60'], ['<b>Net gain</b>', '', '', A(42, true)]]), answer: 42, unit: '$000', display: '$42,000', why: 'EV = 0.6 × 150 + 0.4 × 30 = 90 + 12 = 102. Net gain = 102 − 60 = $42k.' },
        { id: '6.3-2', type: 'num', cmd: 'Calculate', q: 'A pop-up costs <b>$15,000</b>. High demand (probability <b>0.6</b>) returns <b>$55,000</b>; low demand (<b>0.4</b>) returns <b>$30,000</b>. What is the expected <b>net gain</b>?', answer: 30000, unit: '$', display: '$30,000', hint: 'EV first, then subtract the cost.', why: 'EV = 0.6 × 55,000 + 0.4 × 30,000 = 45,000. Net gain = 45,000 − 15,000 = $30,000.' },
        { id: '6.3-3', type: 'num', cmd: 'Calculate', q: 'A chance node has two outcomes. The probability of success is <b>0.35</b>. What is the probability of failure?', answer: 0.65, tol: 0.001, display: '0.65', why: 'Probabilities at a chance node add up to 1: 1 − 0.35 = 0.65.' },
        { id: '6.3-4', type: 'mcq', cmd: 'Identify', q: 'On a decision tree, a <b>circle</b> shows…', options: ['a chance node, where the outcome depends on chance', 'a decision node, where the business makes a choice', 'the final financial outcome at the end of a branch', 'an option that has been rejected by the business'], answer: 0, why: 'Circles = chance nodes; squares = decision nodes. Rejected branches are marked with //.' },
        { id: '6.3-5', type: 'mcq', cmd: 'Explain', q: 'Why might a business choose an option with a <b>lower</b> expected net gain?', options: ['It carries less risk of a loss the business could not survive', 'Expected values are always wrong, so they should be reversed', 'A lower net gain always means a higher actual profit later on', 'Decision trees only work when the cheapest option is chosen'], answer: 0, why: 'EV is an average. If the "best" option has a real chance of a ruinous loss, a risk-averse owner may prefer the safer option.' },
        { id: '6.3-6', type: 'tf', q: 'The expected value is the amount the business will actually receive.', answer: false, why: 'False. It\'s a probability-weighted average. The actual result will be one of the outcomes (e.g. $150,000 or $30,000), not the EV of $102,000.' }
      ],
      explain: 'You\'re choosing between revising tonight or going to a party before a test. Make up probabilities for doing well, and explain to a mate how a <b>decision tree</b> would set out the choice, and what it can\'t capture.'
    },

    // ------------------------------------------------------------------ 6.4
    {
      id: '6.4', title: 'Force field analysis', emoji: '⚖️', minutes: 10, hl: true,
      goal: 'identify and score driving and restraining forces for a change, and use the analysis to plan how to make the change succeed.',
      hook: `Freja is fired up about Berlin. Omar is worried about being stretched even thinner. Noah keeps looking at the bank balance.<br><br>Every change has forces pushing it forward and forces holding it back. Can you weigh them, and tip the balance?`,
      cards: [
        { title: 'Driving and restraining forces', html: `
          <p><span class="tag">HL</span> <b>Force field analysis</b> (developed by Kurt Lewin) weighs up the forces for and against a proposed change.</p>
          <ul><li><b>Driving forces</b> push for the change (opportunities, ambition, customer demand).</li>
              <li><b>Restraining forces</b> resist it (cost, fear, lack of skills, risk).</li></ul>
          <p>Each force is drawn as an arrow and given a score (e.g. 1 = weak to 5 = strong). If driving forces outweigh restraining forces, the change is more likely to succeed.</p>` },
        { title: 'Scoring the Berlin store', html: `
          <div class="table-wrap"><table class="fin"><tr><th>Driving (for)</th><th></th><th>Restraining (against)</th><th></th></tr>
            <tr><td>German online sales growing</td><td>4</td><td>Cost of about $60,000</td><td>4</td></tr>
            <tr><td>Store makes the brand visible</td><td>3</td><td>No German-speaking manager</td><td>3</td></tr>
            <tr><td>Freja wants to run it</td><td>2</td><td>Staff fear being stretched</td><td>2</td></tr>
            <tr><td>Rents lower than Copenhagen</td><td>2</td><td>Exchange-rate risk</td><td>2</td></tr>
            <tr class="total"><td>Total</td><td>11</td><td>Total</td><td>11</td></tr></table></div>
          <p>11 vs 11: a stalemate. The change won't happen unless the balance shifts.</p>` },
        { title: 'Tipping the balance', html: `
          <p>Two ways to make a change succeed:</p>
          <ul><li><b>Strengthen driving forces</b>: e.g. a German Instagram campaign to grow demand further.</li>
              <li><b>Weaken restraining forces</b>: e.g. start with a pop-up (lower cost), hire a German-speaking manager, involve staff in planning ([[resistance to change]] falls).</li></ul>
          <p>Weakening restraining forces is often more effective: pushing harder can make people push back harder.</p>
          <p><b>Limitations</b>: the scores are subjective, forces interact, and the list may miss important factors.</p>
          <div class="tip">In the exam, use force field analysis to <i>plan</i> a change: which restraining force would you weaken first, and how?</div>` }
      ],
      labs: [{ type: 'forcefield', title: 'Will the Berlin store happen?' }],
      worked: {
        title: 'Force field in an answer (exam style)',
        intro: `<p><b>Question:</b> ${sf} wants to move all its staff to a <b>four-day week</b>. Driving forces: staff wellbeing (4), easier recruitment (3), lower energy bills (1). Restraining: fewer opening hours (4), customers expect quick replies (3), managers' doubts (2). <i>Use</i> force field analysis to advise ${sf}. [6 marks]</p>`,
        steps: [
          { prompt: 'Total each side.', answer: 'Driving: 4 + 3 + 1 = <b>8</b>. Restraining: 4 + 3 + 2 = <b>9</b>.' },
          { prompt: 'What does that mean?', answer: 'Restraining forces are slightly stronger: as planned, the change is likely to fail or meet resistance.' },
          { prompt: 'Which restraining force could be weakened most easily?', answer: '"Fewer opening hours": staff work staggered four-day weeks, so the store stays open six days. That cuts the force from 4 to 1.' },
          { prompt: 'New balance and advice?', answer: 'Driving 8 vs restraining 6: go ahead with staggered rotas, and trial it for three months to reduce managers\' doubts.' }
        ],
        takeaway: 'Total both sides, then focus on the restraining force that is easiest to weaken. That\'s your recommendation.'
      },
      quiz: [
        { id: '6.4-1', type: 'mcq', cmd: 'Define', q: '<span class="tag">HL</span> In force field analysis, a <b>restraining force</b> is…', options: ['a factor that resists or works against the change', 'a factor that pushes the business towards the change', 'the manager who is responsible for leading the change', 'the total score of all the forces added together'], answer: 0, why: 'Restraining forces hold the change back; driving forces push it forward.' },
        { id: '6.4-2', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> Driving forces score <b>4, 3 and 2</b>. Restraining forces score <b>5 and 3</b>. What is the driving total <b>minus</b> the restraining total?', answer: 1, display: '+1', hint: 'Add each side, then subtract.', why: 'Driving = 9, restraining = 8. 9 − 8 = +1: a narrow balance in favour of the change.' },
        { id: '6.4-3', type: 'mcq', cmd: 'Explain', q: '<span class="tag">HL</span> Why is weakening restraining forces often better than strengthening driving forces?', options: ['Pushing harder can increase resistance, while removing obstacles reduces it', 'Restraining forces always have higher scores than the driving forces', 'Driving forces cannot be changed in any way once the analysis has been drawn up', 'Weakening restraining forces costs nothing in every possible case'], answer: 0, why: 'Pressure tends to create counter-pressure. Removing the causes of resistance (fear, cost, missing skills) lets the change happen with less conflict.' },
        { id: '6.4-4', type: 'sort', q: '<span class="tag">HL</span> Driving or restraining force for SoleFlip opening in Berlin?', buckets: ['Driving', 'Restraining'], items: [
          { t: 'Growing German demand', b: 0 }, { t: 'Founders\' ambition', b: 0 }, { t: 'A festival partnership offer', b: 0 },
          { t: 'Limited cash', b: 1 }, { t: 'Staff worried about workload', b: 1 }, { t: 'A strong local competitor', b: 1 }], why: 'Driving forces push for the change; restraining forces hold it back.' },
        { id: '6.4-5', type: 'tf', q: '<span class="tag">HL</span> The scores in a force field analysis are objective facts.', answer: false, why: 'False. They are judgements, so different people may score the same force differently. That\'s a key limitation.' },
        { id: '6.4-6', type: 'mcq', cmd: 'Identify', q: '<span class="tag">HL</span> Which action <b>weakens a restraining force</b> rather than strengthening a driving force?', options: ['Involving worried staff in planning the change', 'Running more adverts to increase customer demand', 'Announcing the change with a bigger launch event', 'Raising the founders\' bonus if the change succeeds'], answer: 0, why: 'Staff worries are a restraining force; involving them reduces it. The others push harder on the driving side.' }
      ],
      explain: 'Think of a change you\'ve been putting off (a new sport, a new revision habit). Explain to a mate your <b>driving</b> and <b>restraining</b> forces, and which restraining force you could weaken.'
    },

    // ------------------------------------------------------------------ 6.5
    {
      id: '6.5', title: 'Gantt charts', emoji: '📅', minutes: 10, hl: true,
      goal: 'read and draw a Gantt chart, use dependencies and parallel tasks to plan a project, and evaluate Gantt charts.',
      hook: `SoleFlip has decided: a Berlin pop-up, open as soon as possible. Seven jobs need doing: lease, fit-out, hiring, training, shipping, stocking, marketing. Some can happen at the same time, some can't.<br><br>Do them one after another and it takes 23 weeks. How fast could it really be done?`,
      cards: [
        { title: 'What is a Gantt chart?', html: `
          <p><span class="tag">HL</span> A <b>Gantt chart</b> is a bar chart for planning a project. Each task is a horizontal bar: where it starts shows when the task begins, and its length shows how long it takes.</p>
          <ul><li>Time runs along the horizontal axis (days, weeks).</li>
              <li>Tasks are listed down the side, usually in the order they start.</li>
              <li>Overlapping bars show tasks happening at the same time.</li></ul>` },
        { title: 'Dependencies and parallel tasks', html: `
          <p>Some tasks depend on others: <b>sequential</b> (dependent) tasks can only start when an earlier task has finished. You can't fit out a store before signing the lease.</p>
          <p><b>Parallel</b> (concurrent) tasks can run at the same time, which shortens the project.</p>
          <div class="table-wrap"><table class="fin"><tr><th>Task</th><th>Weeks</th><th>Depends on</th></tr>
            <tr><td>A Sign the lease</td><td>3</td><td>–</td></tr><tr><td>B Fit out the store</td><td>5</td><td>A</td></tr>
            <tr><td>C Recruit staff</td><td>4</td><td>A</td></tr><tr><td>D Train staff</td><td>2</td><td>C</td></tr>
            <tr><td>E Ship stock from Porto</td><td>6</td><td>–</td></tr><tr><td>F Stock shelves, soft launch</td><td>1</td><td>B, D, E</td></tr>
            <tr><td>G Marketing campaign</td><td>2</td><td>C</td></tr></table></div>
          <p>All in a row: 23 weeks. With parallel tasks: <b>10 weeks</b>.</p>` },
        { title: 'Using and evaluating Gantt charts', html: `
          <p>✅ Easy to read; shows what should be happening each week; helps allocate staff and money; progress can be shaded in to spot delays; shows <b>milestones</b> (key dates, like opening day).</p>
          <p>❌ Doesn't clearly show which tasks are critical (that's what [[critical path analysis]] does); hard to read for big projects; needs updating when plans change; task times are estimates.</p>
          <div class="tip">To find the shortest project time, follow the longest chain of dependent tasks: here A → C → D → F = 3 + 4 + 2 + 1 = 10 weeks.</div>` }
      ],
      labs: [{ type: 'gantt', title: 'Plan the Berlin pop-up' }],
      worked: {
        title: 'Shortest time from a task list (exam style)',
        intro: '<p>Using the Berlin pop-up task table (A–G), <i>calculate</i> the shortest time to open, and <i>explain</i> one benefit of a Gantt chart to SoleFlip. [4 marks]</p>',
        steps: [
          { prompt: 'Which tasks can start at week 0?', answer: 'A (lease) and E (shipping): they depend on nothing.' },
          { prompt: 'When can B and C start, and when do they finish?', answer: 'Both after A, at week 3. B ends at week 8; C ends at week 7.' },
          { prompt: 'When do D and G finish?', answer: 'Both start after C (week 7). D ends at week 9; G ends at week 9.' },
          { prompt: 'When can F start, and when is opening?', answer: 'F needs B (week 8), D (week 9) and E (week 6): it starts at week 9, so opening is week <b>10</b>.' },
          { prompt: 'One benefit for SoleFlip?', answer: 'Noah can see that recruiting must start right after the lease (week 3) or the opening slips, and can book trainers and the shipment for the right weeks.' }
        ],
        takeaway: 'Work forward task by task: a task starts when its last dependency finishes. The latest finish is the project length.'
      },
      quiz: [
        { id: '6.5-1', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> Task A takes <b>3</b> weeks. Tasks B (<b>2</b> weeks) and C (<b>4</b> weeks) both start after A and can run in parallel. What is the <b>shortest</b> time to finish all three?', answer: 7, display: '7 weeks', hint: 'A, then the longer of B and C.', why: 'A ends at week 3. B and C run together; C ends last at 3 + 4 = 7 weeks.' },
        { id: '6.5-2', type: 'mcq', cmd: 'Define', q: '<span class="tag">HL</span> In project planning, a <b>dependent (sequential)</b> task is one that…', options: ['can only start when another task has finished', 'can run at the same time as other tasks', 'has no fixed length and can take any amount of time', 'is the last task in every project plan'], answer: 0, why: 'Dependent tasks wait for earlier tasks. Parallel (concurrent) tasks run at the same time.' },
        { id: '6.5-3', type: 'mcq', cmd: 'Identify', q: '<span class="tag">HL</span> Which is a <b>limitation</b> of a Gantt chart?', options: ['It doesn\'t clearly show which tasks are critical to the deadline', 'It cannot show how long each task in the project will take', 'It cannot show tasks that happen at the same time as others', 'It can only be used for projects that last less than a week'], answer: 0, why: 'A Gantt chart shows timing, but critical path analysis is better at showing which tasks can\'t slip.' },
        { id: '6.5-4', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> In the Berlin plan, F (stock shelves) depends on B (ends week <b>8</b>), D (ends week <b>9</b>) and E (ends week <b>6</b>). F takes <b>1</b> week. In which week does the pop-up open (when F ends)?', answer: 10, display: 'week 10', hint: 'F starts when the last of its dependencies finishes.', why: 'F waits for D, the last to finish (week 9), so it runs 9–10. Opening = week 10.' },
        { id: '6.5-5', type: 'tf', q: '<span class="tag">HL</span> Running tasks in parallel can shorten the total length of a project.', answer: true, why: 'True. Tasks that don\'t depend on each other can happen at the same time: the Berlin plan falls from 23 weeks to 10.' },
        { id: '6.5-6', type: 'mcq', cmd: 'Define', q: '<span class="tag">HL</span> A <b>milestone</b> on a Gantt chart is…', options: ['a key point or date in the project, such as opening day', 'a task that can be delayed without delaying the project', 'the cost of each task in the overall project budget', 'a task that runs at the same time as another task'], answer: 0, why: 'Milestones mark important moments (lease signed, opening day) so progress can be checked against them.' }
      ],
      explain: 'Plan getting ready for a party or trip as a Gantt chart. Explain to a mate which tasks <b>depend</b> on others and which can run in <b>parallel</b>.'
    },

    // ------------------------------------------------------------------ 6.6
    {
      id: '6.6', title: 'Critical path analysis', emoji: '🕸️', minutes: 15, hl: true,
      goal: 'complete and analyse a network diagram: calculate earliest start times, latest finish times, total float and free float, and identify the critical path.',
      hook: `Week 4 of the Berlin plan: the fit-out company says they're running a week late. Noah panics: "The opening is ruined!" Freja shrugs: "Relax, fit-out has a week to spare."<br><br>Who's right? And how would you know which delays matter and which don't?`,
      cards: [
        { title: 'Network diagrams', html: `
          <p><span class="tag">HL</span> <b>Critical path analysis (CPA)</b> uses a network diagram to find the shortest time a project can take and which activities can't be delayed.</p>
          <ul><li><b>Activities</b> are arrows, labelled with a letter and duration (e.g. B 5).</li>
              <li><b>Nodes</b> are circles where activities start and end. Each node is split: the node number on top, the <b>earliest start time (EST)</b> bottom-left and the <b>latest finish time (LFT)</b> bottom-right.</li>
              <li>The diagram starts and ends at a single node, and arrows go left to right.</li></ul>
          <div class="tip">In the exam you'll usually <b>complete</b> a partly drawn network (fill in ESTs, LFTs and floats) and analyse it, rather than draw one from scratch.</div>` },
        { title: 'Earliest start times (forward pass)', html: `
          <p>The <b>earliest start time (EST)</b> at a node is the earliest the activities leaving it can begin.</p>
          <ul><li>The first node has EST 0.</li>
              <li>Work left to right: EST = EST of the previous node + duration of the activity.</li>
              <li>If several activities arrive at a node, take the <b>highest</b> value (all must be finished).</li></ul>
          <div class="example">Node 4 (B, D and E all end there): max(3 + 5, 7 + 2, 0 + 6) = max(8, 9, 6) = <b>9</b>. The EST of the final node is the project length: <b>10 weeks</b>.</div>` },
        { title: 'Latest finish times (backward pass)', html: `
          <p>The <b>latest finish time (LFT)</b> at a node is the latest the activities arriving there can finish without delaying the project.</p>
          <ul><li>The last node: LFT = its EST.</li>
              <li>Work right to left: LFT = LFT of the next node − duration of the activity.</li>
              <li>If several activities leave a node, take the <b>lowest</b> value.</li></ul>
          <div class="example">Node 3 (D and G leave it): min(9 − 2, 10 − 2) = min(7, 8) = <b>7</b>.</div>` },
        { title: 'Critical path and total float', html: `
          <p><b>Total float</b> is how long an activity can be delayed without delaying the whole project:</p>
          ${F`\text{Total float} = \text{LFT} - \text{duration} - \text{EST}`}
          <p class="muted small">(Use the EST of the node where the activity starts and the LFT of the node where it ends.)</p>
          <p>The <b>critical path</b> is the chain of activities with <b>zero float</b>. Any delay on it delays the project.</p>
          <div class="example">Fit-out B: 9 − 5 − 3 = <b>1 week</b> of float, so Freja was right. Critical path: <b>A → C → D → F</b> (10 weeks).</div>` },
        { title: 'Free float', html: `
          <p><b>Free float</b> is how long an activity can be delayed <b>without delaying the next activity</b> (the earliest start of whatever follows it).</p>
          ${F`\text{Free float} = \text{EST}_{\text{end node}} - \text{duration} - \text{EST}_{\text{start node}}`}
          <p>Total float uses the <b>LFT</b> of the end node; free float uses its <b>EST</b>. So free float is never more than total float.</p>
          <div class="example">An activity starts at a node with EST 4, takes 5 weeks, and ends at a node with EST 12 and LFT 14. Free float = 12 − 5 − 4 = <b>3 weeks</b>: a 3-week delay holds up nothing. Total float = 14 − 5 − 4 = <b>5 weeks</b>: a delay of 4 or 5 weeks holds up the next activity but not the whole project.</div>
          <p class="muted small">In the Berlin network every non-critical activity ends at a critical node, so free float equals total float there (B: 1, E: 3, G: 1).</p>` },
        { title: 'Why use CPA?', html: `
          <p>✅ Shows the shortest project time and exactly which activities need the closest watching; managers can move staff or money from activities with float to critical ones; helps plan JIT deliveries.</p>
          <p>❌ Durations are estimates; it gets complicated for large projects; it doesn't show costs or quality; a delay can create a new critical path.</p>
          <div class="tip">"Explain the importance of the critical path" = any delay on a critical activity delays the whole project (e.g. a later opening means lost sales), so managers monitor those first.</div>` }
      ],
      labs: [{ type: 'cpa', title: 'Find the critical path' }],
      worked: {
        title: 'Complete a network (exam style)',
        intro: '<p>Using the Berlin pop-up network (A 3, B 5, C 4, D 2, E 6, F 1, G 2; dependencies as in 6.5), <i>calculate</i> the total float for activities B, E and G, and <i>identify</i> the critical path. [6 marks]</p>',
        steps: [
          { prompt: 'ESTs of nodes 1–5 (forward pass)?', answer: '1: 0 · 2: 0 + 3 = 3 · 3: 3 + 4 = 7 · 4: max(3 + 5, 7 + 2, 0 + 6) = 9 · 5: max(9 + 1, 7 + 2) = <b>10</b>' },
          { prompt: 'LFTs (backward pass)?', answer: '5: 10 · 4: 10 − 1 = 9 · 3: min(9 − 2, 10 − 2) = 7 · 2: min(9 − 5, 7 − 4) = 3 · 1: min(3 − 3, 9 − 6) = 0' },
          { prompt: 'Float of B (node 2 → 4)?', answer: '9 − 5 − 3 = <b>1 week</b>' },
          { prompt: 'Float of E (1 → 4) and G (3 → 5)?', answer: 'E: 9 − 6 − 0 = <b>3 weeks</b>. G: 10 − 2 − 7 = <b>1 week</b>.' },
          { prompt: 'Critical path?', answer: 'Activities with zero float: <b>A → C → D → F</b>, 10 weeks.' }
        ],
        takeaway: 'Forward pass takes the maximum, backward pass takes the minimum. Float = LFT − duration − EST; zero float = critical.'
      },
      quiz: [
        { id: '6.6-1', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> Complete the table to find the <b>total float</b> of activity B.' + tbl(['', 'Weeks'], [['LFT at the end node of B', '9'], ['Duration of B', '5'], ['EST at the start node of B', '3'], ['<b>Total float</b>', A(1, true)]]), answer: 1, display: '1 week', hint: 'LFT − duration − EST', why: '9 − 5 − 3 = 1 week.' },
        { id: '6.6-2', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> Three activities end at node 4: one starts at EST <b>3</b> and takes <b>5</b> weeks, one starts at EST <b>7</b> and takes <b>2</b>, one starts at EST <b>0</b> and takes <b>6</b>. What is the <b>EST</b> of node 4?', answer: 9, display: '9', hint: 'Forward pass: take the highest.', why: 'max(3 + 5, 7 + 2, 0 + 6) = max(8, 9, 6) = 9.' },
        { id: '6.6-3', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> Two activities leave node 3: D (2 weeks) ends at a node with LFT <b>9</b>; G (2 weeks) ends at a node with LFT <b>10</b>. What is the <b>LFT</b> of node 3?', answer: 7, display: '7', hint: 'Backward pass: take the lowest.', why: 'min(9 − 2, 10 − 2) = min(7, 8) = 7.' },
        { id: '6.6-4', type: 'mcq', cmd: 'Define', q: '<span class="tag">HL</span> The <b>critical path</b> is…', options: ['the chain of activities with zero float, which sets the project length', 'the chain of activities that costs the business the most money', 'the shortest route from the first node to the last node', 'the list of activities that can safely be delayed for a while'], answer: 0, why: 'Critical activities have no float: delaying any of them delays the whole project. It is the <i>longest</i> path through the network.' },
        { id: '6.6-5', type: 'mcq', cmd: 'Explain', q: '<span class="tag">HL</span> Activity E has <b>3 weeks</b> of total float. What does this mean?', options: ['E can be delayed by up to 3 weeks without delaying the project', 'E will take 3 weeks longer than it was originally planned', 'E must start exactly 3 weeks after the project begins', 'E is on the critical path and must be watched most closely'], answer: 0, why: 'Float is spare time. Only activities with zero float are critical.' },
        { id: '6.6-6', type: 'tf', q: '<span class="tag">HL</span> If a non-critical activity is delayed by more than its float, the whole project is delayed.', answer: true, why: 'True. Once its float is used up, it becomes critical and any further delay pushes back the end date (and the critical path can change).' },
        { id: '6.6-7', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> Complete the table to find the <b>free float</b> of activity K.' + tbl(['', 'Weeks'], [['EST at the end node of K', '12'], ['LFT at the end node of K', '14'], ['Duration of K', '5'], ['EST at the start node of K', '4'], ['Total float', A(5)], ['<b>Free float</b>', A(3, true)]]), answer: 3, display: '3 weeks', hint: 'Free float = EST (end node) − duration − EST (start node)', why: 'Total float = 14 − 5 − 4 = 5. Free float = 12 − 5 − 4 = 3 weeks.' },
        { id: '6.6-8', type: 'mcq', cmd: 'Distinguish', q: '<span class="tag">HL</span> What is the difference between <b>free float</b> and <b>total float</b>?', options: ['Free float is the delay possible without delaying the next activity; total float without delaying the project', 'Free float is the delay possible without delaying the project; total float without delaying the next activity', 'Free float applies only to critical activities; total float only to non-critical activities', 'Free float is measured in money; total float is measured in weeks or days'], answer: 0, why: 'Free float uses the EST of the end node (the next activity\'s earliest start). Total float uses the LFT of the end node (the project deadline).' }
      ],
      explain: 'Think of making a big breakfast: eggs, toast, coffee, setting the table. Explain to a mate which jobs are on the <b>critical path</b> and which have <b>float</b>.'
    },

    // ------------------------------------------------------------------ 6.7
    {
      id: '6.7', title: 'Simple linear regression', emoji: '📈', minutes: 12, hl: true,
      goal: 'draw and interpret scatter diagrams, describe correlation, use a line of best fit to make forecasts (interpolation and extrapolation), and explain the limits of regression.',
      hook: `Sami says: "Every month we spent more on Instagram ads, online sales went up. Give me double the ad budget!" Noah isn't convinced.<br><br>Is there really a link? How strong is it? And can you use it to predict next month's sales?`,
      cards: [
        { title: 'Scatter diagrams and correlation', html: `
          <p><span class="tag">HL</span> A <b>scatter diagram</b> plots pairs of data: the <b>independent variable</b> (the one you think causes the change, e.g. ad spend) on the x-axis and the <b>dependent variable</b> (e.g. sales) on the y-axis.</p>
          <p><b>Correlation</b> describes the relationship:</p>
          <ul><li><b>Positive</b>: as x rises, y rises. <b>Negative</b>: as x rises, y falls. <b>None</b>: no pattern.</li>
              <li><b>Strong</b> (points close to a line) or <b>weak</b> (widely scattered).</li></ul>
          <p>The correlation coefficient <b>r</b> runs from −1 (perfect negative) through 0 (none) to +1 (perfect positive). ${sf}'s ad data: r ≈ 0.99, a very strong positive correlation.</p>
          <p class="muted small">You won't be asked to calculate r: describe the correlation from the scatter diagram (positive or negative, strong or weak).</p>` },
        { title: 'The line of best fit', html: `
          <p><b>Simple linear regression</b> finds the straight line that best fits the points: the <b>line of best fit</b>, which minimises the total squared distance between the points and the line.</p>
          ${F`y = a + bx`}
          <ul><li><b>a</b> (the intercept): the value of y when x = 0.</li>
              <li><b>b</b> (the slope or gradient): how much y changes when x rises by 1.</li></ul>
          <div class="example">${sf}: sales ($000) ≈ 10.2 + 1.18 × ad spend ($00). Each extra $100 of ads goes with about $1,180 more sales, and with no ads sales would be about $10,200.</div>` },
        { title: 'Forecasting: interpolation and extrapolation', html: `
          <p>Put an x value into the equation to predict y.</p>
          <ul><li><b>Interpolation</b>: predicting <i>inside</i> the range of the data (ad spend $1,400: 10.2 + 1.18 × 14 ≈ $26,700). Fairly reliable.</li>
              <li><b>Extrapolation</b>: predicting <i>outside</i> the range (ad spend $3,000: 10.2 + 1.18 × 30 ≈ $45,600). Less reliable: the relationship may not continue (people stop responding to more ads).</li></ul>
          <div class="tip">Always say whether a forecast is interpolation or extrapolation, and how far outside the data it goes.</div>` },
        { title: 'Limitations', html: `
          <ul><li><b>Correlation is not causation</b>: sales and ads may both rise in December because of Christmas, not because ads cause sales.</li>
              <li><b>Other variables</b> matter too (price, season, competitors, a viral video).</li>
              <li><b>Outliers</b> can pull the line away from the real pattern.</li>
              <li>A small sample (8 months) may not be representative.</li>
              <li>Relationships may not be straight lines (diminishing returns from ads).</li></ul>
          <p>Regression is a useful extra tool for [[sales forecasting]], alongside market research and judgement.</p>` }
      ],
      labs: [{ type: 'regression', title: 'Do ads drive sales?' }],
      worked: {
        title: 'Use a regression line (exam style)',
        intro: '<p>A festival-merch seller finds: sales ($000) = <b>10 + 1.2 × ad spend ($00)</b>, from data with ad spend between $500 and $2,500. <i>Calculate</i> forecast sales for ad spend of $1,500 and $4,000, and <i>comment</i> on their reliability. [4 marks]</p>',
        steps: [
          { prompt: 'Forecast at $1,500 (x = 15)?', answer: '10 + 1.2 × 15 = 10 + 18 = <b>28</b> → $28,000' },
          { prompt: 'Forecast at $4,000 (x = 40)?', answer: '10 + 1.2 × 40 = 10 + 48 = <b>58</b> → $58,000' },
          { prompt: 'Which is interpolation and which extrapolation?', answer: '$1,500 is inside the data range (interpolation). $4,000 is well outside it (extrapolation).' },
          { prompt: 'Comment on reliability.', answer: 'The $28,000 forecast is fairly reliable if the correlation is strong. The $58,000 forecast is much less reliable: customers may stop responding to more ads, and other factors (price, season) aren\'t in the model.' }
        ],
        takeaway: 'Substitute carefully (watch the units: $00 and $000), then judge the forecast: interpolation or extrapolation, correlation strength, other variables.'
      },
      quiz: [
        { id: '6.7-1', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> Sales ($000) = <b>10 + 1.2x</b>, where x is ad spend in $00. What are forecast sales (in $000) when ad spend is <b>$1,500</b>?', answer: 28, unit: '$000', display: '28 ($28,000)', hint: 'x = 15', why: '10 + 1.2 × 15 = 10 + 18 = 28, so $28,000.' },
        { id: '6.7-2', type: 'mcq', cmd: 'Identify', q: '<span class="tag">HL</span> As the temperature rises, sales of hot chocolate fall, and the points lie close to a line. This is…', options: ['strong negative correlation', 'strong positive correlation', 'weak negative correlation', 'no correlation at all'], answer: 0, why: 'One variable rises as the other falls (negative), and the points are close to a line (strong).' },
        { id: '6.7-3', type: 'mcq', cmd: 'Distinguish', q: '<span class="tag">HL</span> Using a line of best fit to predict sales for a value <b>outside</b> the range of the data is called…', options: ['extrapolation', 'interpolation', 'correlation', 'a moving average'], answer: 0, why: 'Extrapolation = outside the data range (less reliable). Interpolation = inside it.' },
        { id: '6.7-4', type: 'tf', q: '<span class="tag">HL</span> A strong correlation between ad spend and sales proves that the ads cause the sales.', answer: false, why: 'False. Correlation is not causation: a third factor (e.g. Christmas) may raise both, or it could be coincidence.' },
        { id: '6.7-5', type: 'mcq', cmd: 'Explain', q: '<span class="tag">HL</span> In y = a + bx, what does <b>b</b> show?', options: ['How much y changes when x rises by one unit', 'The value of y when x is equal to zero', 'How strong the correlation between x and y is', 'The number of data points used to draw the line'], answer: 0, why: 'b is the slope (gradient). a is the intercept; r measures the strength of correlation.' },
        { id: '6.7-6', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> A line of best fit is y = <b>5 + 2x</b>. What is y when x = <b>12</b>?', answer: 29, display: '29', why: '5 + 2 × 12 = 5 + 24 = 29.' }
      ],
      explain: 'Think of two things in your life that seem linked (hours of sleep and test scores, screen time and mood). Explain to a mate whether the <b>correlation</b> is positive or negative, and why it might <i>not</i> be <b>causation</b>.'
    },

    // ------------------------------------------------------------------ 6.8
    {
      id: '6.8', title: 'Circular business models', emoji: '♻️', minutes: 10, hl: false,
      goal: 'explain the circular economy and the five circular business models, and evaluate them for a business.',
      hook: `Every year, millions of pairs of sneakers go to landfill. ${sf} started by doing the opposite: cleaning old pairs and reselling them.<br><br>Was SoleFlip a circular business all along? And how could it go further, so that nothing it sells ever becomes waste?`,
      cards: [
        { title: 'Linear vs circular', html: `
          <p>The traditional <b>linear economy</b>: take resources → make products → use them → throw them away.</p>
          <p>The <b>circular economy</b> keeps products and materials in use for as long as possible, then recovers them to make new products, so there is little or no waste. It links to environmental [[sustainability]] and [[cradle to cradle]] design.</p>
          <div class="example">Linear: a sneaker worn for a year, then thrown away. Circular: worn, cleaned, resold, repaired, and finally ground up into new soles.</div>` },
        { title: 'The five circular business models', html: `
          <p>The IB toolkit names five <b>circular business models</b>:</p>
          <ul><li><b>Circular supplies</b>: use renewable, recycled or biodegradable inputs instead of new raw materials. <i>Laces made from recycled bottles.</i></li>
              <li><b>Resource recovery</b>: recover useful materials from waste or by-products and use them again. <i>Grinding old soles into new soles.</i></li>
              <li><b>Product life extension</b>: make products last longer through repair, refurbishing, upgrading and reselling. <i>SoleFlip's cleaning, repair and resale business.</i></li>
              <li><b>Sharing platforms</b>: let people share, rent or swap products that would otherwise sit unused. <i>Car sharing; city bikes; tool libraries.</i></li>
              <li><b>Product service systems</b>: sell the <i>use</i> of a product as a service while the business keeps ownership (and responsibility for it). <i>Phone leasing; a sneaker subscription where you swap pairs each season.</i></li></ul>` },
        { title: 'Benefits and challenges', html: `
          <p><b>Benefits</b>: lower material costs and less exposure to rising raw-material prices; new revenue streams (repairs, rentals); stronger brand and loyalty with sustainability-minded customers; easier compliance with stricter environmental laws.</p>
          <p><b>Challenges</b>: high set-up costs (collection, sorting, recycling technology); recycled inputs can be dearer or lower quality; customers may not return products; product service systems tie up capital in products the business still owns.</p>
          <div class="tip">For "evaluate a circular business model" questions, weigh the environmental and brand benefits against costs and practicality, and say which of the five models fits the business best.</div>` }
      ],
      labs: [
        {
          type: 'sort', title: 'Which circular model?',
          challenge: 'Sort all 10 into the right circular business model in one go.',
          buckets: ['Circular supplies', 'Resource recovery', 'Product life extension', 'Sharing platform', 'Product service system'],
          items: [
            { t: '🧵 Laces made from recycled plastic bottles', b: 0 },
            { t: '🌽 Glue made from plant-based materials', b: 0 },
            { t: '♻️ Old soles ground up into new soles', b: 1 },
            { t: '🍊 Orange peel from a juice factory made into fabric', b: 1 },
            { t: '🧽 Cleaning and reselling worn sneakers', b: 2 },
            { t: '🔧 A repair service that resoles sneakers', b: 2 },
            { t: '🚲 City bikes rented by the minute', b: 3 },
            { t: '🏠 An app for neighbours to lend each other tools', b: 3 },
            { t: '📱 Leasing phones instead of selling them', b: 4 },
            { t: '👟 A subscription: swap your sneakers every season', b: 4 }
          ]
        }
      ],
      worked: {
        title: 'Evaluate a circular model (exam style)',
        intro: `<p><b>Question:</b> ${sf} is considering a <b>sneaker subscription</b>: $25 a month for a pair of Originals, swapped every 6 months; returned pairs are cleaned and resold or recycled. <i>Evaluate</i> this circular business model for ${sf}. [10 marks]</p>`,
        steps: [
          { prompt: 'Which circular model is this?', answer: 'A <b>product service system</b> (SoleFlip keeps ownership), combined with <b>product life extension</b> and <b>resource recovery</b> for returned pairs.' },
          { prompt: 'Revenue per pair over 6 months?', answer: '$25 × 6 = <b>$150</b>, compared with a one-off $90 sale, plus resale or material value when it comes back.' },
          { prompt: 'Benefits?', answer: 'Regular, predictable revenue; customer loyalty; less waste; a strong sustainability story for its USP; control over the pair\'s end of life.' },
          { prompt: 'Challenges?', answer: 'SoleFlip pays $50 per pair up front but receives $25 a month, so cash flow suffers; worn pairs may have little resale value; admin for swaps and returns.' },
          { prompt: 'Judgement.', answer: '"Trial it with 200 subscribers: the revenue and brand benefits are strong, but cash flow is the main risk for a small firm. Expand only if most pairs come back resellable."' }
        ],
        takeaway: 'Name the model, use numbers where you can, and weigh environmental and brand gains against cost, cash flow and practicality.'
      },
      quiz: [
        { id: '6.8-1', type: 'mcq', cmd: 'Define', q: 'The <b>circular economy</b> aims to…', options: ['keep products and materials in use and design out waste', 'sell as many new products as possible each year', 'move production to countries with cheaper materials', 'make products that last only until the next model'], answer: 0, why: 'Circular = keep resources in use (reuse, repair, recycle) instead of take → make → throw away.' },
        { id: '6.8-2', type: 'mcq', cmd: 'Identify', q: 'A company leases washing machines and stays responsible for repairing and recycling them. This is a…', options: ['product service system', 'sharing platform', 'circular supplies model', 'resource recovery model'], answer: 0, why: 'Customers pay for the use of the product; the business keeps ownership. That\'s a product service system.' },
        { id: '6.8-3', type: 'mcq', cmd: 'Identify', q: 'SoleFlip\'s original business, cleaning worn sneakers and reselling them, is an example of…', options: ['product life extension', 'circular supplies', 'a sharing platform', 'a product service system'], answer: 0, why: 'Cleaning, repairing and reselling keep a product in use for longer.' },
        { id: '6.8-4', type: 'mcq', cmd: 'Explain', q: 'What is a common <b>challenge</b> of circular business models?', options: ['High set-up costs for collecting, sorting and recycling products', 'They always reduce a business\'s revenue to zero in the first year', 'They are banned by environmental laws in most countries today', 'They can only be used by businesses that make physical goods'], answer: 0, why: 'Collection systems and recycling technology cost money up front, and customers may not return products.' },
        { id: '6.8-5', type: 'tf', q: 'A bike-sharing app is an example of a sharing platform.', answer: true, why: 'True. It lets many people use the same bikes, so fewer bikes sit unused.' },
        { id: '6.8-6', type: 'mcq', cmd: 'Identify', q: 'Which is an example of <b>circular supplies</b>?', options: ['Making packaging from recycled cardboard', 'Renting out party dresses for a single night only', 'Repairing old phones and reselling them', 'Leasing office furniture to companies'], answer: 0, why: 'Circular supplies = renewable, recycled or biodegradable inputs. The others are a sharing/rental model, product life extension and a product service system.' }
      ],
      explain: 'Look around your room. Pick one thing and explain to a mate which <b>circular business model</b> could keep it out of landfill.'
    },

    // ------------------------------------------------------------------ 6.9
    {
      id: '6.9', title: 'The business plan', emoji: '📑', minutes: 12, hl: false,
      goal: 'explain the purpose and contents of a business plan, use the toolkit to build one, and evaluate a business plan from the reader\'s point of view.',
      hook: `The bank says yes to lending ${sf} $9,000 for the Berlin pop-up, on one condition: "Send us your business plan."<br><br>Noah has a SWOT, Freja has a Gantt chart, Sami has market research, and there's a break-even sum on a napkin. How do you turn all that into one document a bank would trust?`,
      cards: [
        { title: 'What is a business plan, and why write one?', html: `
          <p>A <b>business plan</b> is a document that sets out a business idea (a new business or a new project) and how it will be put into action: its objectives, market, marketing, operations, people and finances.</p>
          <p>Why write one:</p>
          <ul><li><b>To raise finance</b>: banks and investors want evidence that the idea works and the money will come back.</li>
              <li><b>To test the idea</b>: writing it forces research and shows weak spots before money is spent.</li>
              <li><b>To set direction</b>: clear objectives and a plan everyone can follow.</li>
              <li><b>To measure progress</b>: actual results can be compared with the plan.</li></ul>
          <div class="tip">Who reads it shapes what matters: a <b>bank</b> wants to know it will be repaid; an <b>investor</b> wants growth and a return; <b>managers and staff</b> want to know what to do and when.</div>` },
        { title: 'What goes in it', html: `
          <ul><li><b>Executive summary</b>: a one-page overview of the whole plan, written last and read first.</li>
              <li><b>Business description</b>: the idea, legal form, vision, mission and SMART objectives.</li>
              <li><b>Market analysis</b>: [[market research]], competitors, a [[SWOT analysis]] and a [[STEEPLE analysis]].</li>
              <li><b>Marketing plan</b>: [[target market]] and the [[marketing mix|7 Ps]].</li>
              <li><b>Operations plan</b>: location, production method, suppliers and a timeline (a [[Gantt chart]]).</li>
              <li><b>Human resources plan</b>: who runs it, staff needed, structure.</li>
              <li><b>Financial plan</b>: start-up costs, sources of finance, cash flow forecast, forecast profit and loss account, [[break-even]].</li></ul>
          <p class="muted small">This is where the whole toolkit comes together: almost every tool in this unit has a place in a business plan.</p>` },
        { title: 'SoleFlip\'s financial plan', html: `
          <div class="table-wrap"><table class="fin">
            <tr class="head"><td colspan="2">Start-up costs (Berlin pop-up)</td></tr>
            <tr><td>Fit-out</td><td>$8,000</td></tr><tr><td>First stock (100 pairs × $50)</td><td>$5,000</td></tr><tr><td>Launch marketing</td><td>$2,000</td></tr>
            <tr class="total"><td>Total</td><td>$15,000</td></tr>
            <tr class="head"><td colspan="2">Sources of finance</td></tr>
            <tr><td>[[retained profit|Retained profit]] from SoleFlip</td><td>$6,000</td></tr><tr><td>Bank loan</td><td>$9,000</td></tr>
            <tr class="head"><td colspan="2">Monthly break-even</td></tr>
            <tr><td>Fixed costs (rent, wages)</td><td>$6,000</td></tr><tr><td>Contribution per pair ($90 − $50)</td><td>$40</td></tr>
            <tr class="total"><td>Break-even</td><td>150 pairs a month</td></tr></table></div>
          <p>Forecast sales: 200 pairs a month, a [[margin of safety]] of 50 pairs. A bank will also look closely at the cash flow forecast: can SoleFlip make the loan repayments every month?</p>` },
        { title: 'Strengths and limitations', html: `
          <p>✅ Helps get finance; makes the owners research and think things through; gives everyone clear objectives; provides targets to check progress against.</p>
          <p>❌ It's only as good as its <b>assumptions</b>: sales forecasts can be over-optimistic; it goes out of date quickly; it takes time to write; and a great plan doesn't guarantee success.</p>
          <div class="example">If Berlin sales are 120 pairs a month instead of 200, SoleFlip is 30 pairs below break-even. A good plan says so in advance: "what if sales are 40% lower?"</div>
          <div class="tip">To evaluate a business plan, test its assumptions: are the sales forecasts backed by research? Is there a margin of safety? What happens if things go worse than planned?</div>` }
      ],
      labs: [
        {
          type: 'sort', title: 'Which section of the plan?',
          challenge: 'Sort all 12 into the right section of SoleFlip\'s business plan in one go.',
          buckets: ['Business description', 'Market analysis', 'Marketing plan', 'Operations plan', 'HR plan', 'Financial plan'],
          items: [
            { t: '🎯 Objective: sell 2,400 pairs in Berlin in year 1', b: 0 },
            { t: '🏢 SoleFlip Ltd, a privately held company', b: 0 },
            { t: '📋 Survey of 400 Berlin teens', b: 1 },
            { t: '🧭 SWOT of the Berlin project', b: 1 },
            { t: '💲 Launch price of $79, then $89.95', b: 2 },
            { t: '📱 German TikTok campaign', b: 2 },
            { t: '📅 Gantt chart: opening in 10 weeks', b: 3 },
            { t: '🏭 Stock shipped from the Porto factory', b: 3 },
            { t: '🧑‍💼 A German-speaking store manager and 3 staff', b: 4 },
            { t: '🎓 Two weeks of training before opening', b: 4 },
            { t: '💧 Monthly cash flow forecast', b: 5 },
            { t: '⚖️ Break-even: 150 pairs a month', b: 5 }
          ]
        },
        {
          type: 'scenarios', title: 'What does the reader want?',
          challenge: 'Pick what each reader cares about most, in all 3 cases.',
          items: [
            { s: 'The <b>bank</b> is deciding whether to lend SoleFlip $9,000.', options: [
              { t: 'The cash flow forecast: can SoleFlip make every repayment?', ok: true, fb: 'Yes: a bank cares most about being repaid on time, so it checks cash flow (and any security).' },
              { t: 'The design of the store\'s window display', ok: false, fb: 'Nice, but it tells the bank nothing about repayment.' },
              { t: 'How fast SoleFlip could grow into ten countries', ok: false, fb: 'That matters to investors. The bank\'s return is fixed interest, so it wants safety.' }] },
            { s: 'A <b>business angel</b> is thinking about buying 20% of SoleFlip.', options: [
              { t: 'Growth potential and the likely return on the investment', ok: true, fb: 'Yes: an investor shares the risk and wants a big enough reward: growth, profits and a rising share value.' },
              { t: 'Only the date of the loan repayments', ok: false, fb: 'An investor isn\'t lending; they own part of the business.' },
              { t: 'The staff training timetable', ok: false, fb: 'Useful detail, but not what decides an investment.' }] },
            { s: 'The <b>new Berlin store manager</b> reads the plan on day one.', options: [
              { t: 'The operations and HR plans: what to do, by when, with which team', ok: true, fb: 'Yes: the manager needs the timeline, targets and staffing to run the store.' },
              { t: 'The interest rate on the bank loan', ok: false, fb: 'That\'s the finance team\'s concern, not the manager\'s day-to-day job.' },
              { t: 'The executive summary only', ok: false, fb: 'A good start, but the manager needs the detail behind it.' }] }
          ]
        }
      ],
      worked: {
        title: 'Should the bank lend? (exam style)',
        intro: `<p><b>Data from ${sf}'s plan:</b> start-up costs <b>$15,000</b>; owners put in <b>$6,000</b>. Monthly fixed costs <b>$6,000</b>; price <b>$90</b>; variable cost <b>$50</b> a pair; forecast sales <b>200</b> pairs a month. (a) <i>Calculate</i> the loan needed and the break-even quantity. (b) <i>Evaluate</i> the plan from the bank's point of view. [10 marks]</p>`,
        steps: [
          { prompt: 'Loan needed?', answer: '15,000 − 6,000 = <b>$9,000</b>' },
          { prompt: 'Break-even quantity?', answer: 'Contribution = 90 − 50 = $40. 6,000 ÷ 40 = <b>150 pairs a month</b>.' },
          { prompt: 'Margin of safety, and what it means for the bank?', answer: '200 − 150 = <b>50 pairs</b> (25% of forecast sales). Sales can fall by a quarter before the pop-up makes a loss, so there is some cushion for repayments.' },
          { prompt: 'What should the bank question?', answer: 'Is 200 pairs a month backed by research (the Berlin survey, German online sales), or a guess? Does the cash flow forecast cover repayments in slow months (January, March)? What security is offered?' },
          { prompt: 'Judgement.', answer: '"Lend, with conditions: the loan is small compared with SoleFlip\'s owner investment, and there is a 25% margin of safety. But ask for a cash flow forecast that shows repayments in the weakest months, and a plan for what SoleFlip does if sales are 40% lower."' }
        ],
        takeaway: 'Use the numbers in the plan, then test its assumptions from the reader\'s point of view before judging.'
      },
      quiz: [
        { id: '6.9-1', type: 'mcq', cmd: 'Define', q: 'A <b>business plan</b> is…', options: ['a document setting out a business idea and how it will be put into action', 'a legal contract that every new business must sign with its bank', 'a list of the business\'s assets and liabilities on a single date', 'a chart showing the tasks of a project and when each will happen'], answer: 0, why: 'A business plan covers the idea, objectives, market, marketing, operations, people and finances. The others describe a loan agreement, a balance sheet and a Gantt chart.' },
        { id: '6.9-2', type: 'num', cmd: 'Calculate', q: 'Complete the table to find the <b>bank loan</b> SoleFlip needs.' + tbl(['Start-up costs', '$'], [['Fit-out', '8,000'], ['First stock', '5,000'], ['Launch marketing', '2,000'], ['Total start-up costs', A(15000)], ['Owners\' own money', '6,000'], ['<b>Bank loan needed</b>', A(9000, true)]]), answer: 9000, unit: '$', display: '$9,000', why: 'Total = 8,000 + 5,000 + 2,000 = $15,000. Loan = 15,000 − 6,000 = $9,000.' },
        { id: '6.9-3', type: 'num', cmd: 'Calculate', q: 'The pop-up\'s fixed costs are <b>$6,000</b> a month. Each pair sells for <b>$90</b> and costs <b>$50</b>. What is the <b>break-even</b> quantity per month?', answer: 150, display: '150 pairs', hint: 'Fixed costs ÷ contribution per unit', why: 'Contribution = 90 − 50 = $40. 6,000 ÷ 40 = 150 pairs.' },
        { id: '6.9-4', type: 'mcq', cmd: 'Identify', q: 'Which part of a business plan is usually written <b>last</b> but read <b>first</b>?', options: ['The executive summary', 'The financial plan', 'The market analysis', 'The operations plan'], answer: 0, why: 'The executive summary gives a short overview of the whole plan, so it can only be written once the rest is done.' },
        { id: '6.9-5', type: 'mcq', cmd: 'Explain', q: 'What is a <b>limitation</b> of a business plan?', options: ['It is based on forecasts and assumptions that may turn out wrong', 'It can only be used by businesses that already make a profit', 'It must be kept secret from the bank and from any investors', 'It cannot include any numbers, only written descriptions'], answer: 0, why: 'Sales forecasts can be over-optimistic and markets change, so the plan may quickly go out of date.' },
        { id: '6.9-6', type: 'tf', q: 'A detailed business plan guarantees that a new business will succeed.', answer: false, why: 'False. It improves the chances (research, clear objectives, finance), but the assumptions may be wrong and conditions can change.' },
        { id: '6.9-7', type: 'mcq', cmd: 'Explain', q: 'Why would a <b>bank</b> focus on the cash flow forecast in a business plan?', options: ['It shows whether the business can make each loan repayment on time', 'It shows how the business has positioned its brand against rivals', 'It shows which leadership style the owners intend to use', 'It shows how quickly the business could grow in other countries'], answer: 0, why: 'A bank\'s main concern is being repaid with interest, month by month.' }
      ],
      explain: 'Imagine you\'re asking your parents to "invest" in a business idea of yours. Explain to a mate the three parts of your <b>business plan</b> they\'d care about most, and why.'
    },
    // ------------------------------------------------------------------ 6.10
    {
      id: '6.10', title: 'Descriptive statistics', emoji: '📊', minutes: 14, hl: false,
      goal: 'calculate and interpret the mean, median, mode, quartiles and standard deviation, and choose bar charts, pie charts or infographics to present data.',
      hook: `Nine days into the Berlin pop-up, Noah posts in the team chat: "We average <b>21 pairs a day</b>! 🎉" Freja replies: "Most days we sell about 15 to 20. One festival Saturday isn't normal."<br><br>They're looking at the same numbers. Who's right, and how would you describe a "typical" day honestly?`,
      cards: [
        { title: 'Mean, median and mode', html: `
          <p>Three ways to describe a typical value (an <b>average</b>):</p>
          <ul><li><b>Mean</b>: add up all the values and divide by how many there are.</li>
              <li><b>Median</b>: the middle value when the data is in order (for an even number of values, the mean of the middle two).</li>
              <li><b>Mode</b>: the value that appears most often.</li></ul>
          <div class="example">Pairs sold on 9 days, in order: 12, 15, 15, 18, 20, 21, 23, 25, 40.<br>Mean = 189 ÷ 9 = <b>21</b>. Median = the 5th value = <b>20</b>. Mode = <b>15</b>.</div>
          <p>The mean uses every value, but one <b>outlier</b> (the 40-pair festival day) drags it up. The median ignores extremes, so it's often the better "typical day". The mode is useful for things you stock, like the most popular shoe size.</p>` },
        { title: 'Quartiles and the interquartile range', html: `
          <p><b>Quartiles</b> split ordered data into four equal parts:</p>
          <ul><li><b>Lower quartile (Q1)</b>: the median of the lower half. A quarter of the values are below it.</li>
              <li><b>Upper quartile (Q3)</b>: the median of the upper half. A quarter of the values are above it.</li>
              <li><b>Interquartile range (IQR)</b> = Q3 − Q1: the spread of the middle half of the data, unaffected by outliers.</li></ul>
          ${F`\text{IQR} = Q_3 - Q_1`}
          <div class="example">12, 15, 15, 18, <b>20</b>, 21, 23, 25, 40. Lower half: 12, 15, 15, 18, so Q1 = (15 + 15) ÷ 2 = <b>15</b>. Upper half: 21, 23, 25, 40, so Q3 = (23 + 25) ÷ 2 = <b>24</b>. IQR = 24 − 15 = <b>9</b> pairs.</div>
          <p class="muted small">Textbooks use slightly different methods for quartiles. BizQuest takes the median of each half, leaving out the overall median when there is an odd number of values.</p>` },
        { title: 'Standard deviation', html: `
          <p>The <b>standard deviation</b> (σ) measures how spread out the values are around the mean. Small = values close together (steady, predictable). Large = widely spread (unpredictable).</p>
          ${F`\sigma = \sqrt{\frac{\sum (x - \text{mean})^2}{n}}`}
          <div class="example">Aarhus, 4 days: 18, 20, 20, 22. Mean 20. Squared gaps: 4, 0, 0, 4 = 8. 8 ÷ 4 = 2, √2 ≈ <b>1.4</b> pairs.<br>Berlin, 4 days: 10, 15, 25, 30. Mean 20. Squared gaps: 100, 25, 25, 100 = 250. 250 ÷ 4 = 62.5, √62.5 ≈ <b>7.9</b> pairs.</div>
          <p>Same mean, very different stores: Aarhus is steady, so staffing is easy; Berlin swings, so it needs flexible staff and more buffer stock.</p>
          <div class="tip">In the exam you're more likely to <i>interpret</i> a standard deviation than calculate one: say what a high or low value means for the business's decisions.</div>` },
        { title: 'Presenting data: bar charts, pie charts, infographics', html: `
          <ul><li><b>Bar chart</b>: compares amounts between categories or over time (sales per store, per month). Easy to read; the best general choice.</li>
              <li><b>Pie chart</b>: shows each part's share of a whole (market share, sales by product line). Only works with a few categories that add up to 100%.</li>
              <li><b>Infographic</b>: combines numbers, icons, short text and charts to tell a story quickly (a report for customers or social media). Eye-catching, but can oversimplify or mislead.</li></ul>
          <div class="example">SoleFlip's market share against KickBack and others: pie chart. Monthly online sales over two years: bar chart. A post for customers on how many pairs it saved from landfill: infographic.</div>
          <div class="tip">Descriptive statistics summarise data; they don't explain <i>why</i>. Always add the business context: what caused the pattern, and what should the business do?</div>` }
      ],
      labs: [
        { type: 'stats', title: 'What does a typical day look like?' },
        {
          type: 'scenarios', title: 'Pick the right tool',
          challenge: 'Choose the best statistic or chart in all 3 situations.',
          items: [
            { s: 'Noah must decide which shoe sizes to order most of for the Berlin store.', options: [
              { t: 'The mode of sizes sold', ok: true, fb: 'Yes: the most common size is the one to stock most of. A "mean size" of 40.7 doesn\'t exist on a shelf.' },
              { t: 'The mean size sold', ok: false, fb: 'The mean could be a size nobody wears, like 40.7.' },
              { t: 'The standard deviation of sizes', ok: false, fb: 'That shows how spread the sizes are, not which one to order most of.' }] },
            { s: 'A huge one-off festival order makes one month\'s sales five times higher than any other. Sami wants a fair "typical month".', options: [
              { t: 'The median', ok: true, fb: 'Yes: the median isn\'t dragged up by one outlier.' },
              { t: 'The mean', ok: false, fb: 'The festival month drags the mean far above a normal month.' },
              { t: 'The highest month', ok: false, fb: 'That\'s the least typical month of all.' }] },
            { s: 'Freja wants to show the bank what share of revenue comes from resell, custom and cleaning.', options: [
              { t: 'A pie chart', ok: true, fb: 'Yes: three parts of one whole is exactly what a pie chart shows.' },
              { t: 'A long table of daily sales', ok: false, fb: 'Accurate, but the bank won\'t see the shares at a glance.' },
              { t: 'A line of best fit', ok: false, fb: 'That shows a relationship between two variables, not shares of a whole.' }] }
          ]
        }
      ],
      worked: {
        title: 'Compare two stores (exam style)',
        intro: `<p><b>Data:</b> daily pairs sold over four weeks. <b>Berlin</b>: mean 21, median 19, standard deviation 8.2. <b>Aarhus</b>: mean 19, median 19, standard deviation 2.1. <i>Analyse</i> what the data shows about the two stores and what it means for staffing. [6 marks]</p>`,
        steps: [
          { prompt: 'Compare the averages.', answer: 'The medians are the same (19 pairs). Berlin\'s mean is higher (21) because a few very busy days pull it up: the data is skewed by high outliers.' },
          { prompt: 'Compare the spread.', answer: 'Berlin\'s standard deviation (8.2) is about four times Aarhus\'s (2.1): Berlin\'s sales swing a lot from day to day; Aarhus is steady.' },
          { prompt: 'What does that mean for staffing?', answer: 'Aarhus can run a fixed rota. Berlin needs flexible staff (part-time or on-call) for busy days, or it will be over-staffed on quiet days and under-staffed on busy ones.' },
          { prompt: 'One limitation of the data?', answer: 'Four weeks is a short period, and the statistics don\'t say <i>why</i> Berlin swings (festivals? weekends? weather?). SoleFlip should look at which days are busy before planning.' }
        ],
        takeaway: 'Compare the averages, then the spread, then turn both into a business decision, and say what the numbers can\'t tell you.'
      },
      quiz: [
        { id: '6.10-1', type: 'num', cmd: 'Calculate', q: 'A pop-up sells <b>14, 18, 22, 16 and 30</b> pairs on five days. What is the <b>mean</b>?', answer: 20, display: '20 pairs', hint: 'Add them up, then divide by 5.', why: '14 + 18 + 22 + 16 + 30 = 100. 100 ÷ 5 = 20 pairs.' },
        { id: '6.10-2', type: 'num', cmd: 'Calculate', q: 'Delivery times (days): <b>9, 4, 7, 12, 5</b>. What is the <b>median</b>?', answer: 7, display: '7 days', hint: 'Put them in order first.', why: 'In order: 4, 5, 7, 9, 12. The middle value is 7.' },
        { id: '6.10-3', type: 'num', cmd: 'Calculate', q: 'Complete the table to find the <b>interquartile range</b> of 8 days\' sales, in order: <b>10, 12, 14, 15, 17, 20, 22, 30</b>.' + tbl(['', 'Pairs'], [['Lower quartile (Q1): median of 10, 12, 14, 15', A(13)], ['Upper quartile (Q3): median of 17, 20, 22, 30', A(21)], ['<b>Interquartile range</b>', A(8, true)]]), answer: 8, display: '8 pairs', hint: 'IQR = Q3 − Q1', why: 'Q1 = (12 + 14) ÷ 2 = 13. Q3 = (20 + 22) ÷ 2 = 21. IQR = 21 − 13 = 8.' },
        { id: '6.10-4', type: 'mcq', cmd: 'Explain', q: 'Store A and store B both sell a mean of 50 pairs a day. Store A\'s standard deviation is <b>3</b>; store B\'s is <b>15</b>. What does this show?', options: ['Store B\'s daily sales are far less predictable than store A\'s', 'Store B sells more pairs than store A on almost every single day', 'Store A\'s sales are growing faster over time than store B\'s', 'Store A has more outliers in its sales data than store B'], answer: 0, why: 'Same mean, but a larger standard deviation means B\'s sales are spread much more widely around 50: harder to plan staff and stock.' },
        { id: '6.10-5', type: 'mcq', cmd: 'Explain', q: 'One festival day sells 90 pairs; other days sell about 20. Which average is <b>most</b> affected by that day?', options: ['The mean', 'The median', 'The mode', 'The lower quartile'], answer: 0, why: 'The mean uses every value, so an outlier pulls it towards itself. The median, mode and quartiles barely move.' },
        { id: '6.10-6', type: 'mcq', cmd: 'Identify', q: 'Which is the best way to show SoleFlip\'s <b>market share</b> next to its rivals\' shares?', options: ['A pie chart', 'A scatter diagram', 'A Gantt chart', 'A decision tree'], answer: 0, why: 'Market shares are parts of one whole (100%), which a pie chart shows clearly.' },
        { id: '6.10-7', type: 'tf', q: 'The interquartile range is not affected by one extreme value at the top of the data.', answer: true, why: 'True. The IQR only uses the middle half of the data, so a single outlier at either end doesn\'t change it much.' },
        { id: '6.10-8', type: 'mcq', cmd: 'Identify', q: 'Pairs sold by size: 39 (12), 40 (25), 41 (31), 42 (18). What is the <b>modal</b> size?', options: ['41', '40', '42', 'about 40.6 (the mean size)'], answer: 0, why: 'The mode is the most frequent value: size 41 sold 31 pairs. The mean size (about 40.6) is not a size anyone can buy.' }
      ],
      explain: 'Take your last five test scores. Explain to a mate your <b>mean</b>, your <b>median</b>, and whether your results are steady or all over the place (your <b>spread</b>).'
    },

    // ------------------------------------------------------------------ 6.11
    {
      id: '6.11', title: 'Porter\'s generic strategies', emoji: '♟️', minutes: 11, hl: true,
      goal: 'explain Porter\'s four generic strategies (cost leadership, differentiation, cost focus, differentiation focus) and recommend one for a business.',
      hook: `KickBack is coming to Germany with a huge budget, cheap mass-made customs and 40 stores. ${sf} has one workshop, hand-painted designs and 180,000 TikTok fans.<br><br>SoleFlip can't beat KickBack at everything. So how does a small business decide <i>how</i> it will compete?`,
      cards: [
        { title: 'Two choices: how and where to compete', html: `
          <p><span class="tag">HL</span> Michael <b>Porter</b> said a business gains a <b>competitive advantage</b> by making two choices:</p>
          <ul><li><b>Source of advantage</b>: be the <b>lowest-cost</b> producer, or offer something <b>different</b> that customers will pay more for.</li>
              <li><b>Competitive scope</b>: target a <b>broad</b> (mass) market, or a <b>narrow</b> segment (a niche).</li></ul>
          <div class="table-wrap"><table class="fin"><tr><th></th><th>Lower cost</th><th>Differentiation</th></tr>
            <tr><td><b>Broad market</b></td><td>Cost leadership</td><td>Differentiation</td></tr>
            <tr><td><b>Narrow market</b></td><td>Cost focus</td><td>Differentiation focus</td></tr></table></div>
          <p>These are <b>Porter's generic strategies</b>: "generic" because any business, in any industry, can use them.</p>` },
        { title: 'Cost leadership and differentiation', html: `
          <p><b>Cost leadership</b>: be the lowest-cost producer in the whole market, through [[economies of scale]], efficient processes, cheap suppliers and no frills. Then either charge the lowest prices or match rivals' prices with a higher margin. <i>Ryanair, IKEA, Primark.</i></p>
          <p><b>Differentiation</b>: offer products the whole market sees as unique or better (design, quality, brand, innovation, service), so customers pay a premium. <i>Nike, Apple.</i></p>
          <div class="example">KickBack follows cost leadership: mass-made customs at prices SoleFlip can't match.</div>` },
        { title: 'Focus strategies', html: `
          <p>A <b>focus</b> strategy targets one narrow segment and serves it better than broad-market firms can:</p>
          <ul><li><b>Cost focus</b>: the lowest cost in a niche. <i>A discount outlet selling only kids' sneakers.</i></li>
              <li><b>Differentiation focus</b>: something special for a niche that pays a premium. <i>Hand-painted, recycled-sole sneakers for teen collectors who care about sustainability.</i></li></ul>
          <div class="example">${sf}'s strength is differentiation focus: unique designs and a sustainability story for a small, loyal segment, not cheap shoes for everyone.</div>` },
        { title: 'Choosing and evaluating a strategy', html: `
          <ul><li><b>Cost leadership</b> risks: a rival with even lower costs, a price war, cutting quality too far.</li>
              <li><b>Differentiation</b> risks: high costs (R&D, marketing), copycats, customers deciding the extra isn't worth the price.</li>
              <li><b>Focus</b> risks: the niche may be too small, may shrink, or a big firm may move in.</li></ul>
          <p>Porter warned against being <b>"stuck in the middle"</b>: trying to be cheap <i>and</i> special for everyone, and ending up neither.</p>
          <div class="tip">To recommend a strategy, match it to the business's strengths (a [[SWOT analysis]] helps) and its [[unique selling point|USP]]. A small firm rarely wins at broad cost leadership.</div>` }
      ],
      labs: [
        {
          type: 'sort', title: 'Which generic strategy?',
          challenge: 'Sort all 8 correctly in one go.',
          buckets: ['Cost leadership', 'Differentiation', 'Cost focus', 'Differentiation focus'],
          items: [
            { t: '✈️ A budget airline with the lowest fares across Europe', b: 0 },
            { t: '🛋️ Flat-pack furniture sold cheaply worldwide', b: 0 },
            { t: '📱 A phone brand known everywhere for design and status', b: 1 },
            { t: '👟 A global sportswear brand with famous athletes', b: 1 },
            { t: '🧒 A low-price shop selling only children\'s shoes', b: 2 },
            { t: '🎓 The cheapest student-only phone plan', b: 2 },
            { t: '🎨 Hand-painted sneakers for teen collectors', b: 3 },
            { t: '⌚ Handmade watches for a few wealthy collectors', b: 3 }
          ]
        },
        {
          type: 'scenarios', title: 'SoleFlip vs KickBack',
          challenge: 'Make the best strategic call in all 3 situations.',
          items: [
            { s: 'KickBack sells mass-made customs in Germany for $70. SoleFlip\'s hand-painted pairs cost $50 just to make.', options: [
              { t: 'Differentiation focus: target collectors who value hand-made, sustainable design', ok: true, fb: 'Yes: SoleFlip can\'t win on cost, but it has something KickBack can\'t copy cheaply.' },
              { t: 'Cost leadership: undercut KickBack at $60', ok: false, fb: 'With $50 costs and no economies of scale, SoleFlip would lose a price war.' },
              { t: 'Do a bit of everything for everyone', ok: false, fb: 'That\'s "stuck in the middle": neither cheapest nor special.' }] },
            { s: 'A supermarket chain wants to sell basic white sneakers to everyone in Germany at the lowest price.', options: [
              { t: 'Cost leadership', ok: true, fb: 'Yes: a broad market, competing on lowest cost through huge volumes.' },
              { t: 'Differentiation focus', ok: false, fb: 'It isn\'t targeting a niche or offering anything special.' },
              { t: 'Differentiation', ok: false, fb: 'Basic white sneakers at the lowest price compete on cost, not uniqueness.' }] },
            { s: 'SoleFlip\'s niche is growing so fast that Nike launches a recycled-sole custom range.', options: [
              { t: 'Strengthen what Nike can\'t copy: the hand-made story, community and limited drops', ok: true, fb: 'Yes: a focus strategy survives a big entrant by deepening its differentiation and customer loyalty.' },
              { t: 'Switch to cost leadership', ok: false, fb: 'SoleFlip has no cost advantage over Nike.' },
              { t: 'Ignore it: niches are always safe', ok: false, fb: 'A big firm moving in is the main risk of a focus strategy.' }] }
          ]
        }
      ],
      worked: {
        title: 'Recommend a generic strategy (exam style)',
        intro: `<p><b>Question:</b> ${sf} is expanding into Germany, where KickBack sells mass-made customs at low prices. <i>Recommend</i> a generic strategy for ${sf}, using Porter's model. [10 marks]</p>`,
        steps: [
          { prompt: 'Which strategies could SoleFlip choose?', answer: 'Cost leadership, differentiation (broad market), cost focus or differentiation focus.' },
          { prompt: 'Rule out cost strategies: why?', answer: 'SoleFlip makes in small batches with hand work: no economies of scale. Its unit cost ($50) is too high to beat KickBack on price.' },
          { prompt: 'Broad differentiation or differentiation focus?', answer: 'Broad differentiation needs a big marketing budget and wide distribution SoleFlip doesn\'t have. A focus on a niche (sustainability-minded teen collectors) fits its size and its 180,000 engaged followers.' },
          { prompt: 'Risks of differentiation focus?', answer: 'The German niche may be small; KickBack or Nike may copy the recycled-sole idea; costs stay high, so prices must stay premium.' },
          { prompt: 'Recommendation.', answer: '"Differentiation focus: limited hand-painted drops with the recycled-sole story, sold online and at festivals to German collectors. Protect it with trademarks and community, and avoid being stuck in the middle by never competing on price."' }
        ],
        takeaway: 'Use both axes of the model (cost vs differentiation, broad vs narrow), rule options out with evidence from the case, then recommend and admit the risks.'
      },
      quiz: [
        { id: '6.11-1', type: 'mcq', cmd: 'Identify', q: '<span class="tag">HL</span> Porter\'s generic strategies are based on which two choices?', options: ['Source of advantage (lower cost or differentiation) and scope (broad or narrow)', 'Market growth (high or low) and market share (high or low)', 'Internal factors (strengths, weaknesses) and external factors (opportunities, threats)', 'Existing or new products, and existing or new markets'], answer: 0, why: 'Porter: compete on cost or on difference, across a broad market or a narrow segment. The others are the BCG matrix, SWOT and the Ansoff matrix.' },
        { id: '6.11-2', type: 'mcq', cmd: 'Identify', q: '<span class="tag">HL</span> A budget airline offers the lowest fares across all of Europe by cutting every possible cost. This is…', options: ['cost leadership', 'cost focus', 'differentiation', 'differentiation focus'], answer: 0, why: 'Lowest cost + a broad market = cost leadership. Cost focus would target only a narrow segment.' },
        { id: '6.11-3', type: 'mcq', cmd: 'Identify', q: '<span class="tag">HL</span> A small brand makes premium hiking boots only for professional mountain guides. This is…', options: ['differentiation focus', 'cost focus', 'cost leadership', 'broad-market differentiation'], answer: 0, why: 'Something special (premium) for a narrow segment (mountain guides) = differentiation focus.' },
        { id: '6.11-4', type: 'mcq', cmd: 'Explain', q: '<span class="tag">HL</span> What does Porter mean by being <b>"stuck in the middle"</b>?', options: ['Trying to be both cheapest and most special, and ending up with no clear advantage', 'Having a market share of about 50%, between the leader and the rest', 'Being in the maturity stage of the product life cycle for too long', 'Having the same number of strengths as weaknesses in a SWOT analysis'], answer: 0, why: 'A business without a clear cost or differentiation advantage loses price-sensitive customers to cost leaders and premium customers to differentiators.' },
        { id: '6.11-5', type: 'mcq', cmd: 'Explain', q: '<span class="tag">HL</span> Which is the main <b>risk</b> of a focus strategy?', options: ['The niche may be too small or a large competitor may move into it', 'The business must have the lowest costs in the entire market', 'The business must sell to every customer segment at once', 'It can only be used by businesses in the public sector'], answer: 0, why: 'Focus depends on one segment: if it shrinks, or a big firm enters (like Nike into recycled sneakers), the business is exposed.' },
        { id: '6.11-6', type: 'tf', q: '<span class="tag">HL</span> A small start-up is usually well placed to follow a broad cost leadership strategy.', answer: false, why: 'False. Cost leadership usually needs economies of scale that small firms don\'t have. Focus strategies suit small businesses better.' }
      ],
      explain: 'Pick two brands you buy from (food, clothes, games). Explain to a mate which of <b>Porter\'s generic strategies</b> each one uses, and how you can tell.'
    },

    // ------------------------------------------------------------------ 6.12
    {
      id: '6.12', title: 'Hofstede\'s cultural dimensions', emoji: '🗺️', minutes: 12, hl: true,
      goal: 'explain Hofstede\'s six cultural dimensions and use them to analyse how national culture affects management, communication and marketing across countries.',
      hook: `Freja flies to Porto to work with the factory that makes Originals. In Copenhagen, everyone calls Noah "Noah", argues with him in meetings and tries things without asking. In Porto, the staff wait for clear instructions, call her "Senhora Freja" and look worried when she says "just try something".<br><br>Nobody is doing anything wrong. So what's going on?`,
      cards: [
        { title: 'What are cultural dimensions?', html: `
          <p><span class="tag">HL</span> Geert <b>Hofstede</b> studied the values of employees in more than 50 countries and found that national cultures differ along a few <b>dimensions</b>. Each country gets a score from 0 to 100 on each one.</p>
          <p>The scores help a business predict how people in another country are likely to manage, communicate, make decisions and buy. They're useful for international marketing (4.6), [[multinational company|multinationals]] (1.6) and [[culture clash|culture clashes]] (2.5).</p>
          <div class="tip">Hofstede's dimensions describe <b>national averages</b>, not individuals. Use them to explain likely differences, not to stereotype people.</div>` },
        { title: 'Power distance, individualism, masculinity', html: `
          <ul><li><b>Power distance</b>: how far less powerful people accept that power is distributed unequally. High: respect for rank, the boss decides. Low: flat hierarchies, staff challenge the boss. <i>Denmark 18, Portugal 63.</i></li>
              <li><b>Individualism vs collectivism</b>: do people look after themselves (individualist) or belong to tight groups that look after them (collectivist)? <i>Denmark 74, Portugal 27.</i></li>
              <li><b>Masculinity vs femininity</b>: a society driven by competition, achievement and success (masculine) or by caring, cooperation and quality of life (feminine). Hofstede's team now calls it <i>motivation towards achievement and success</i>. <i>Denmark 16, Germany 66.</i></li></ul>` },
        { title: 'Uncertainty avoidance, long-term orientation, indulgence', html: `
          <ul><li><b>Uncertainty avoidance</b>: how uncomfortable people feel with uncertainty and ambiguity. High: clear rules, detailed plans, little risk-taking. Low: relaxed about change and trying new things. <i>Denmark 23, Portugal 99.</i></li>
              <li><b>Long-term vs short-term orientation</b>: focus on the future (saving, persistence, adapting traditions) or on the past and present (tradition, quick results). <i>Germany 83, Denmark 35.</i></li>
              <li><b>Indulgence vs restraint</b>: freedom to enjoy life and have fun (indulgent) or strict social norms that control it (restrained). <i>Denmark 70, Portugal 33.</i></li></ul>
          <div class="example">Freja's "just try something" works in Denmark (low uncertainty avoidance, low power distance). In Porto (very high uncertainty avoidance, higher power distance), staff want clear instructions and approval from the boss.</div>` },
        { title: 'Using Hofstede, and its limits', html: `
          <p>Use the dimensions to adapt:</p>
          <ul><li><b>Management</b>: leadership style, how much to [[delegation|delegate]], how to give feedback.</li>
              <li><b>Communication</b>: formal or informal, direct or indirect.</li>
              <li><b>Marketing</b>: messages about individual success, group belonging, safety or fun.</li></ul>
          <p><b>Limitations</b>: national averages hide differences between individuals, regions and generations; much of the original data is decades old (from one company, IBM); cultures change; it can lead to stereotyping.</p>
          <div class="tip">In an answer, name the dimension, give the scores or say high/low, explain the likely behaviour, then say what the business should do differently.</div>` }
      ],
      labs: [
        { type: 'hofstede', title: 'Compare cultures' },
        {
          type: 'sort', title: 'Name the dimension',
          challenge: 'Sort all 8 correctly in one go.',
          buckets: ['Power distance', 'Individualism', 'Uncertainty avoidance', 'Long-term orientation'],
          items: [
            { t: '🙇 Staff never question the boss in meetings', b: 0 },
            { t: '🏢 Managers have their own floor and a private lift', b: 0 },
            { t: '🏆 Bonuses go to individuals, not teams', b: 1 },
            { t: '👨‍👩‍👧 People choose a job where their family already works', b: 1 },
            { t: '📑 Every change needs a detailed written plan first', b: 2 },
            { t: '🛡️ Customers want long warranties and guarantees', b: 2 },
            { t: '🐖 Families save a large share of their income', b: 3 },
            { t: '🌱 Firms accept low profits now for market share in 10 years', b: 3 }
          ]
        }
      ],
      worked: {
        title: 'Use Hofstede in an answer (exam style)',
        intro: `<p><b>Data:</b> Denmark: power distance 18, uncertainty avoidance 23. Germany: power distance 35, uncertainty avoidance 65. ${sf} will send a Danish manager to run its first German store. <i>Analyse</i> how cultural differences could affect the manager. [6 marks]</p>`,
        steps: [
          { prompt: 'Which of the two dimensions differs most?', answer: '<b>Uncertainty avoidance</b>: 65 vs 23 (a gap of 42, against 17 for power distance). German staff and customers are likely to value clear rules, detailed planning and punctuality more than Danes.' },
          { prompt: 'Effect on managing staff?', answer: 'The manager\'s relaxed "figure it out" style may cause stress. German staff may expect written procedures, clear roles and plans agreed in advance.' },
          { prompt: 'Effect of power distance?', answer: 'Germany (35) is still fairly low, so a consultative style can work, but slightly more formality (titles, structured meetings) may be expected than in Denmark.' },
          { prompt: 'What should SoleFlip do?', answer: 'Brief the manager before the move, write clear store procedures, hire a German deputy who knows local expectations. And remember the scores are averages: individual staff will differ.' }
        ],
        takeaway: 'Pick the dimension with the biggest gap, explain its likely effect on people\'s behaviour, and turn it into a practical action, with a caution about stereotyping.'
      },
      quiz: [
        { id: '6.12-1', type: 'mcq', cmd: 'Define', q: '<span class="tag">HL</span> In Hofstede\'s model, <b>power distance</b> measures…', options: ['how far less powerful people accept that power is distributed unequally', 'how far people prefer to look after themselves rather than a group', 'how uncomfortable people feel with uncertainty and the unknown', 'how much people focus on future rewards rather than the present'], answer: 0, why: 'Power distance is about acceptance of hierarchy. The others describe individualism, uncertainty avoidance and long-term orientation.' },
        { id: '6.12-2', type: 'mcq', cmd: 'Identify', q: '<span class="tag">HL</span> In a country, customers want detailed guarantees and staff want written rules for everything. Which dimension is likely <b>high</b>?', options: ['Uncertainty avoidance', 'Indulgence', 'Individualism vs collectivism', 'Masculinity'], answer: 0, why: 'High uncertainty avoidance = discomfort with risk and ambiguity, so people want rules, plans and guarantees.' },
        { id: '6.12-3', type: 'mcq', cmd: 'Explain', q: '<span class="tag">HL</span> Danish managers expect staff to challenge them. Portugal scores <b>63</b> on power distance (Denmark <b>18</b>). What should a Danish manager in Porto expect?', options: ['Staff are more likely to wait for instructions and avoid openly disagreeing', 'Staff are more likely to ignore the manager and decide everything alone', 'Staff will want bonuses paid to individuals rather than to teams', 'Staff will care only about short-term results and not about the future'], answer: 0, why: 'Higher power distance = more respect for rank: staff expect the boss to decide and may not speak up, so the manager must ask directly for their views.' },
        { id: '6.12-4', type: 'mcq', cmd: 'Explain', q: '<span class="tag">HL</span> Which is a <b>limitation</b> of Hofstede\'s cultural dimensions?', options: ['They are national averages that hide differences between individuals and regions', 'They can only be used to compare two countries that share a land border with each other', 'They give exact predictions of how every single person in a country will behave', 'They only describe businesses in the primary and secondary sectors of an economy'], answer: 0, why: 'Scores describe averages, the data is old and cultures change, so using them rigidly risks stereotyping.' },
        { id: '6.12-5', type: 'sort', q: '<span class="tag">HL</span> Individualist or collectivist culture?', buckets: ['Individualist', 'Collectivist'], items: [
          { t: 'Adverts about standing out from the crowd', b: 0 }, { t: 'Pay linked to personal performance', b: 0 }, { t: 'Changing jobs often for a better offer', b: 0 },
          { t: 'Adverts showing the whole family together', b: 1 }, { t: 'Team bonuses, not individual ones', b: 1 }, { t: 'Staying loyal to one employer for life', b: 1 }], why: 'Individualist cultures value personal goals and achievement; collectivist cultures value loyalty to the group, family and team.' },
        { id: '6.12-6', type: 'tf', q: '<span class="tag">HL</span> A high score on indulgence suggests a society that values enjoying life and having fun.', answer: true, why: 'True. Indulgence = freedom to satisfy desires and enjoy life; restraint = strict social norms that control it.' }
      ],
      explain: 'Think of a country you\'ve visited or a friend from another culture. Explain to a mate one <b>Hofstede dimension</b> where it seems different from Denmark, and how that showed up.'
    },

    // ------------------------------------------------------------------ 6.13
    {
      id: '6.13', title: 'Contribution: costing and make or buy', emoji: '🧮', minutes: 14, hl: true,
      goal: 'use contribution to decide whether to make or buy and whether to keep a product, and distinguish contribution costing from absorption costing.',
      hook: `Freja's accountant sends a report: "Cleaning is <b>losing $2,125 a month</b>. Close it." Omar is shocked: the cleaning desk is always busy, and its customers often buy custom pairs too.<br><br>Can a product line that "makes a loss" actually be keeping the business profitable?`,
      cards: [
        { title: 'Contribution: a quick recap', html: `
          <p><span class="tag">HL</span> <b>Contribution</b> is what each sale adds towards paying the fixed costs, and then profit (see [[break-even]], 5.5):</p>
          ${F`\text{Contribution per unit} = \text{price} - \text{variable cost per unit}`}
          ${F`\text{Profit} = \text{total contribution} - \text{fixed costs}`}
          <p>The toolkit uses contribution for three decisions: <b>make or buy</b>, <b>contribution costing</b> and <b>absorption costing</b>.</p>` },
        { title: 'Contribution costing', html: `
          <p><b>Contribution costing</b> (also called marginal costing) gives each product only its own <b>variable costs</b>. Fixed costs (overheads) are treated as a cost of the whole business, not shared out.</p>
          <div class="table-wrap"><table class="fin"><tr><th>${sf}, one month ($)</th><th>Resell</th><th>Custom</th><th>Cleaning</th></tr>
            <tr><td>Revenue</td><td>20,000</td><td>15,000</td><td>5,000</td></tr>
            <tr><td>Variable costs</td><td>(12,000)</td><td>(6,000)</td><td>(1,500)</td></tr>
            <tr class="total"><td>Contribution</td><td>8,000</td><td>9,000</td><td>3,500</td></tr></table></div>
          <p>Total contribution 20,500 − overheads 15,000 = profit <b>$5,500</b>.</p>
          <p>Decision rule: a product (or extra order) with a <b>positive contribution</b> is helping to pay the overheads. Dropping it loses that contribution, while the overheads stay.</p>` },
        { title: 'Absorption costing', html: `
          <p><b>Absorption costing</b> (full costing) gives each product its variable costs <b>and</b> a share of the overheads, using a basis such as labour hours, floor space or sales revenue.</p>
          <div class="table-wrap"><table class="fin"><tr><th>Overheads $15,000 by labour hours</th><th>Resell</th><th>Custom</th><th>Cleaning</th></tr>
            <tr><td>Labour hours (of 800)</td><td>100</td><td>400</td><td>300</td></tr>
            <tr><td>Share of overheads</td><td>(1,875)</td><td>(7,500)</td><td>(5,625)</td></tr>
            <tr class="total"><td>Profit or loss</td><td>6,125</td><td>1,500</td><td class="neg">(2,125)</td></tr></table></div>
          <p>✅ Every product is costed with its full cost, so prices can be set to cover all costs. ❌ The allocation is <b>arbitrary</b>: share by revenue instead, and Cleaning shows a <i>profit</i> of $1,625. Decisions based on it can mislead.</p>
          <div class="tip">That's the accountant's mistake: Cleaning "loses" $2,125 only after an allocated share of overheads. Close it and SoleFlip loses $3,500 of contribution, so profit falls from $5,500 to $2,000.</div>` },
        { title: 'Make or buy', html: `
          <p>Should the business make something itself or buy it in? Compare the cost to buy (CTB) with the cost to make (CTM), as in 5.6 ([[cost to buy]]):</p>
          ${F`\text{CTM} = \text{fixed costs} + \text{variable cost per unit} \times \text{quantity}`}
          <div class="example">1,000 branded dust bags a year. Buy at $3: CTB = <b>$3,000</b>. Make: a $1,200 printing machine + $1.50 a bag: CTM = 1,200 + 1.50 × 1,000 = <b>$2,700</b>. Making saves $300.</div>
          <p>Then weigh qualitative factors: quality control, the supplier's reliability, whether there is spare capacity and staff time, and whether making it builds a skill or [[unique selling point|USP]].</p>` }
      ],
      labs: [
        { type: 'costing', title: 'Which product line pays its way?' },
        {
          type: 'scenarios', title: 'Accept the order?',
          challenge: 'Make the right call on all 3 offers.',
          items: [
            { s: 'The workshop has spare capacity. A festival offers $65 a pair for 300 custom pairs. Variable cost is $50 a pair; full cost (with overheads) is $72.', options: [
              { t: 'Accept: each pair adds $15 contribution, $4,500 in total', ok: true, fb: 'Yes: with spare capacity the overheads are paid anyway, so any price above variable cost adds to profit.' },
              { t: 'Reject: $65 is below the $72 full cost', ok: false, fb: 'That uses absorption costing. The overheads don\'t rise with this order, so the full cost isn\'t the right test.' },
              { t: 'Accept only at $90, the normal price', ok: false, fb: 'The festival won\'t pay $90, and SoleFlip would lose $4,500 of contribution.' }] },
            { s: 'Same offer, but the workshop is full: accepting means turning away normal orders at $90 a pair.', options: [
              { t: 'Reject: each normal order gives $40 contribution, more than the festival\'s $15', ok: true, fb: 'Yes: without spare capacity, the order replaces more valuable sales.' },
              { t: 'Accept: any positive contribution is good', ok: false, fb: 'Only when it doesn\'t push out sales that contribute more.' },
              { t: 'Accept and work unpaid overtime', ok: false, fb: 'Not legal or fair, and it hides the real cost.' }] },
            { s: 'A buyer offers $45 a pair for 500 pairs. Variable cost is $50 a pair.', options: [
              { t: 'Reject: every pair would lose $5 before overheads', ok: true, fb: 'Yes: negative contribution: the more SoleFlip sells, the more it loses.' },
              { t: 'Accept: 500 pairs is a big order', ok: false, fb: 'Volume doesn\'t help when each unit loses money.' },
              { t: 'Accept: it uses spare capacity', ok: false, fb: 'Spare capacity only helps when price is above variable cost.' }] }
          ]
        }
      ],
      worked: {
        title: 'Should SoleFlip close Cleaning? (exam style)',
        intro: `<p><b>Data:</b> one month. Cleaning: revenue <b>$5,000</b>, variable costs <b>$1,500</b>, share of overheads (by labour hours) <b>$5,625</b>. Total contribution from all lines <b>$20,500</b>; overheads <b>$15,000</b>. <i>Recommend</i> whether ${sf} should close the cleaning service. [10 marks]</p>`,
        steps: [
          { prompt: 'Cleaning\'s profit under absorption costing?', answer: '5,000 − 1,500 − 5,625 = <b>−$2,125</b>: it looks loss-making.' },
          { prompt: 'Cleaning\'s contribution?', answer: '5,000 − 1,500 = <b>$3,500</b>: positive.' },
          { prompt: 'Total profit now, and if Cleaning closes?', answer: 'Now: 20,500 − 15,000 = <b>$5,500</b>. Without Cleaning: (20,500 − 3,500) − 15,000 = <b>$2,000</b>, because the overheads don\'t disappear.' },
          { prompt: 'Qualitative factors?', answer: 'Cleaning customers often buy custom pairs (a link to other lines); it fits the sustainability brand; staff would lose work. But could the space and staff earn more doing customs?' },
          { prompt: 'Recommendation.', answer: '"Keep Cleaning: it contributes $3,500 a month towards overheads, and closing it cuts profit by that amount. Review it only if its space or staff could earn a higher contribution elsewhere."' }
        ],
        takeaway: 'For keep-or-drop and extra-order decisions, use contribution, not a profit figure that depends on how overheads were shared out.'
      },
      quiz: [
        { id: '6.13-1', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> Complete the table to find SoleFlip\'s <b>total profit</b>.' + tbl(['', 'Resell ($)', 'Custom ($)', 'Cleaning ($)'], [['Revenue', '20,000', '15,000', '5,000'], ['Variable costs', '12,000', '6,000', '1,500'], ['Contribution', A(8000), A(9000), A(3500)], ['Total contribution', '', '', A(20500)], ['Overheads', '', '', '15,000'], ['<b>Total profit</b>', '', '', A(5500, true)]]), answer: 5500, unit: '$', display: '$5,500', hint: 'Contribution = revenue − variable costs; profit = total contribution − overheads.', why: '8,000 + 9,000 + 3,500 = 20,500. 20,500 − 15,000 = $5,500.' },
        { id: '6.13-2', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> Overheads of <b>$15,000</b> are shared by labour hours. Cleaning uses <b>300</b> of the <b>800</b> hours. What is Cleaning\'s share of the overheads?', answer: 5625, unit: '$', display: '$5,625', hint: 'Overheads × Cleaning\'s hours ÷ total hours', why: '15,000 × 300 ÷ 800 = $5,625.' },
        { id: '6.13-3', type: 'mcq', cmd: 'Distinguish', q: '<span class="tag">HL</span> What is the key difference between <b>absorption</b> and <b>contribution</b> costing?', options: ['Absorption costing shares overheads out between products; contribution costing does not', 'Absorption costing ignores variable costs; contribution costing includes all of them', 'Contribution costing is only used by non-profit social enterprises and charities', 'Contribution costing always shows a higher total profit for the whole business'], answer: 0, why: 'Both include variable costs. Absorption costing also allocates a share of overheads to each product; contribution costing keeps overheads as a whole-business cost. Total profit is the same either way.' },
        { id: '6.13-4', type: 'mcq', cmd: 'Explain', q: '<span class="tag">HL</span> A product line shows a loss under absorption costing but has a <b>positive contribution</b>. If it is closed and overheads stay the same, total profit will…', options: ['fall by the amount of its contribution', 'rise by the amount of the loss shown', 'stay exactly the same as before', 'rise by the amount of its overheads'], answer: 0, why: 'The overheads still have to be paid, so the business only loses the line\'s contribution: profit falls.' },
        { id: '6.13-5', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> SoleFlip needs <b>1,000</b> dust bags. Buying costs <b>$3</b> each. Making them needs a <b>$1,200</b> machine plus <b>$1.50</b> per bag. How much cheaper is making (CTB − CTM)?', answer: 300, unit: '$', display: '$300', hint: 'CTB = 3 × 1,000; CTM = 1,200 + 1.50 × 1,000', why: 'CTB = $3,000. CTM = 1,200 + 1,500 = $2,700. Making is $300 cheaper.' },
        { id: '6.13-6', type: 'tf', q: '<span class="tag">HL</span> Under absorption costing, whether a product shows a profit can depend on the basis used to share out overheads.', answer: true, why: 'True. By labour hours, Cleaning shows a $2,125 loss; by sales revenue, a $1,625 profit. The allocation is a choice, which is the method\'s main weakness.' }
      ],
      explain: 'Imagine your school canteen stops selling fruit because it "makes a loss" after a share of the rent. Explain to a mate why that might actually <b>reduce</b> the canteen\'s total profit, using the word <b>contribution</b>.'
    }
  ],
  formulas: [
    { group: '6.3 Decision trees', items: [
      { name: 'Expected value', f: M`\text{EV} = \sum (\text{probability} \times \text{financial outcome})` },
      { name: 'Net gain', f: M`\text{expected value} - \text{cost of the option}` }] },
    { group: '6.6 Critical path analysis', items: [
      { name: 'Total float', f: M`\text{LFT} - \text{duration} - \text{EST}`, hl: true, note: 'EST of the node where the activity starts; LFT of the node where it ends. Critical activities have zero float.' },
      { name: 'Free float', f: M`\text{EST}_{\text{end}} - \text{duration} - \text{EST}_{\text{start}}`, hl: true, note: 'EST of the node where the activity ends, minus its duration, minus the EST of the node where it starts.' }] },
    { group: '6.7 Simple linear regression', items: [
      { name: 'Line of best fit', f: M`y = a + bx`, hl: true, note: 'a = intercept (y when x = 0); b = slope (change in y when x rises by 1).' }] },
    { group: '6.10 Descriptive statistics', items: [
      { name: 'Mean', f: M`\text{mean} = \frac{\sum x}{n}`, note: 'Sum of the values ÷ number of values.' },
      { name: 'Interquartile range', f: M`\text{IQR} = Q_3 - Q_1` },
      { name: 'Standard deviation', f: M`\sigma = \sqrt{\frac{\sum (x - \text{mean})^2}{n}}`, note: 'Usually interpreted rather than calculated by hand.' }] },
    { group: '6.13 Contribution', items: [
      { name: 'Share of overheads (absorption costing)', f: M`\text{total overheads} \times \frac{\text{product\'s share of the basis}}{\text{total of the basis}}`, hl: true, note: 'Not on the IB formula sheet. The basis might be labour hours, floor space or sales revenue.' }] }
  ]
};
