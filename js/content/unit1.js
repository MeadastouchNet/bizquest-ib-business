// Unit 1: Introduction to business management (IB Business Management guide, first assessment 2024).
// Running case: how SoleFlip began. Noah starts alone as a sole trader, Freja joins as a partner, they become
// SoleFlip Ltd (the company you meet in Unit 3) and think about growing. 1.6 uses real and fictional MNCs.
// Numbers match Unit 3 where they overlap (Noah's $400 start, the $20,000 laser machine).

import { M, F, A, tbl } from './helpers.js';

const sf = '<b>SoleFlip</b>';

export const unit1 = {
  id: '1',
  title: 'Introduction to business management',
  emoji: '🏢',
  blurb: 'Before SoleFlip Ltd had accounts, it was Noah, $400 of cleaning kit and a Vinted profile. This unit is the story of how a side hustle becomes a business: what a business is, which legal form to pick, what to aim for, who cares about it, how it grows, and what happens when businesses go global.',
  sections: [
    // ------------------------------------------------------------------ 1.1
    {
      id: '1.1', title: 'Introduction to business management', emoji: '🚀', minutes: 10, hl: false,
      goal: 'explain what a business does, name the four business functions and the four sectors, and explain why people start businesses and what goes wrong.',
      hook: `Noah (17) buys a pair of beaten-up Jordans on Vinted for <b>$40</b>. He spends an evening and <b>$10</b> of cleaning fluid on them, takes good photos and sells them for <b>$110</b>.<br><br>Nobody made new shoes. So where did the extra $60 come from? And is Noah now "a business"?`,
      cards: [
        { title: 'What is a business?', html: `
          <p>A <b>business</b> is an organization that uses <b>resources</b> to make goods or services that people want, usually to sell them.</p>
          <p>It combines four kinds of resources:</p>
          <ul><li><b>Human</b>: people's time and skills.</li>
              <li><b>Physical</b>: materials, machines, buildings.</li>
              <li><b>Financial</b>: money to pay for it all.</li>
              <li><b>Entrepreneurship</b>: someone with the idea who takes the risk.</li></ul>
          <p>A business <b>adds value</b> when customers pay more for the output than the inputs cost.</p>
          <div class="example">Noah: inputs $40 + $10 = $50, sold for $110. He added <b>$60 of value</b> with skill, effort and good photos.</div>` },
        { title: 'The four business functions', html: `
          <p>Every business, from Noah's bedroom to LEGO, has to do four jobs. They are the other four units of your course:</p>
          <ul><li><b>Human resources</b> (Unit 2): finding, paying and keeping the right people.</li>
              <li><b>Finance and accounts</b> (Unit 3): getting money, tracking it, not running out.</li>
              <li><b>Marketing</b> (Unit 4): knowing customers and persuading them to buy.</li>
              <li><b>Operations</b> (Unit 5): actually making the product or delivering the service.</li></ul>
          <div class="example">Right now Noah does all four himself. Bigger businesses have a separate department for each.</div>
          <div class="tip">The functions depend on each other. Strong answers say how a decision in one (e.g. a marketing campaign) affects the others (more stock, more staff, more cash needed).</div>` },
        { title: 'The four sectors', html: `
          <ul><li><b>Primary sector</b>: taking natural resources from the earth: farming, fishing, mining, forestry. <i>Cotton and rubber farms.</i></li>
              <li><b>Secondary sector</b>: turning materials into products: manufacturing and construction. <i>The factory that makes the shoe.</i></li>
              <li><b>Tertiary sector</b>: providing services: shops, transport, banking, entertainment. <i>The sneaker shop, and Noah's cleaning service.</i></li>
              <li><b>Quaternary sector</b>: knowledge-based services: IT, research, data, consulting. <i>The app that predicts which sneakers will go up in value.</i></li></ul>
          <p><b>Sectoral change</b>: as countries get richer, jobs move from primary and secondary towards tertiary and quaternary. Most people in Denmark now work in services.</p>` },
        { title: 'Entrepreneurs, intrapreneurs and why people start up', html: `
          <p>An <b>entrepreneur</b> spots an opportunity, organizes the resources and takes the <b>risk</b> of starting a business.</p>
          <p>An <b>intrapreneur</b> acts like an entrepreneur <i>inside</i> an existing organization, e.g. an employee who creates a new product line for their employer.</p>
          <p>Reasons for starting a business:</p>
          <ul><li>Earn money, or more than a job pays.</li><li>Be your own boss and have more control.</li>
              <li>Turn a hobby or passion into work.</li><li>Spot a gap in the market.</li>
              <li>Help others (a social goal), or need: no job available.</li></ul>` },
        { title: 'Problems a new business may face', html: `
          <ul><li><b>Not enough finance</b>, or running out of cash before customers pay (see [[liquidity]]).</li>
              <li><b>No customers yet</b>: nobody knows the brand.</li>
              <li><b>Competition</b> from established businesses.</li>
              <li><b>Lack of experience</b>: pricing, hiring and paperwork are new.</li>
              <li><b>High costs</b>: rent, equipment, marketing.</li>
              <li><b>Legal requirements</b>: registering, tax, rules on products and staff.</li></ul>
          <div class="example">${sf}'s first month: Noah bought too many pairs, sold few, and had no money left for cleaning fluid. Classic cash problem, even though each sale made a good margin.</div>
          <div class="tip">"Explain a problem" = name it, say <i>why</i> it hurts <i>this</i> business (use the case), and its consequence. A generic list earns little.</div>` }
      ],
      labs: [{
        type: 'sort', title: 'Follow the sneaker: which sector?',
        challenge: 'Sort all 10 jobs into the right sector in one go.',
        buckets: ['Primary', 'Secondary', 'Tertiary', 'Quaternary'],
        items: [
          { t: '🌱 Growing cotton for shoelaces', b: 0 },
          { t: '🌳 Tapping rubber trees for soles', b: 0 },
          { t: '🏭 Stitching uppers in a factory', b: 1 },
          { t: '🧪 Making glue and dye in a chemical plant', b: 1 },
          { t: '🏗️ Building a new warehouse', b: 1 },
          { t: '🚚 Delivering parcels to customers', b: 2 },
          { t: '🛍️ Selling sneakers in a shop', b: 2 },
          { t: '🧽 Noah\'s sneaker-cleaning service', b: 2 },
          { t: '💻 Writing code for a resale app', b: 3 },
          { t: '📊 Analysing data on which colourways sell', b: 3 }
        ]
      }],
      worked: {
        title: 'Explain a start-up problem (exam style)',
        intro: `<p><b>Question:</b> Noah starts ${sf} with $400 of savings. He buys 8 pairs of used sneakers for $40 each, plus $80 of cleaning kit. After two weeks he has sold 2 pairs. <i>Explain</i> one problem ${sf} faces as a new business. [4 marks]</p>`,
        steps: [
          { prompt: 'How much of his $400 is left after buying stock and kit?', answer: '8 × $40 = $320, plus $80 of kit = $400. He has <b>$0</b> left, plus whatever the 2 sales bring in.' },
          { prompt: 'Name the problem.', answer: '<b>Lack of finance / poor cash flow.</b> All his money is tied up in stock that hasn\'t sold yet.' },
          { prompt: 'Why does it hurt this business in particular?', answer: 'He can\'t buy the cleaning fluid or new pairs he needs, so even though each sale is profitable, he can\'t keep trading until more pairs sell.' },
          { prompt: 'What is the consequence, and what could he do?', answer: 'Sales could stop and the business could fail early. He could buy fewer pairs at a time, or drop prices on the slowest ones to turn stock into cash.' }
        ],
        takeaway: 'Name the problem → apply it to the numbers in the case → give the consequence. That is a full "explain" answer.'
      },
      quiz: [
        { id: '1.1-1', type: 'mcq', cmd: 'Identify', q: 'Which job is in the <b>secondary</b> sector?', options: ['Assembling bikes in a factory', 'Catching cod on a North Sea trawler', 'Advising customers in a bank branch', 'Developing an AI chatbot for schools'], answer: 0, why: 'Secondary = manufacturing and construction. Fishing is primary, banking is tertiary, AI development is quaternary.' },
        { id: '1.1-2', type: 'sort', q: 'Sort these Danish jobs by sector.', buckets: ['Primary', 'Secondary', 'Tertiary', 'Quaternary'], items: [
          { t: 'Pig farmer in Jutland', b: 0 }, { t: 'Building wind turbines', b: 1 }, { t: 'Festival bartender', b: 2 },
          { t: 'Hotel receptionist', b: 2 }, { t: 'Cyber-security consultant', b: 3 }, { t: 'Offshore oil worker', b: 0 }], why: 'Primary extracts, secondary makes, tertiary serves, quaternary works with knowledge and information.' },
        { id: '1.1-3', type: 'mcq', cmd: 'Identify', q: 'Deciding how many staff to hire for the summer and how to train them belongs to which business function?', options: ['Human resources', 'Marketing', 'Operations', 'Finance and accounts'], answer: 0, why: 'Recruiting, training and keeping staff is human resource management (Unit 2).' },
        { id: '1.1-4', type: 'num', cmd: 'Calculate', q: 'A café buys coffee beans, milk and cups for <b>$1.20</b> per latte and sells it for <b>$4.50</b>. How much value does it add per latte?', answer: 3.3, tol: 0.01, unit: '$', display: '$3.30', hint: 'Added value = selling price − cost of inputs', why: '$4.50 − $1.20 = $3.30. (This isn\'t profit yet: rent and wages still have to be paid out of it.)' },
        { id: '1.1-5', type: 'mcq', cmd: 'Define', q: 'An <b>intrapreneur</b> is…', options: ['an employee who acts like an entrepreneur inside an existing organization', 'a person who takes the risk of starting a new business on their own', 'an investor who buys shares in young start-ups hoping they will grow', 'a manager who runs the day-to-day work of a non-profit organization'], answer: 0, why: 'Intra = within. They innovate inside someone else\'s business, without taking the personal financial risk of starting one.' },
        { id: '1.1-6', type: 'tf', q: 'As countries become richer, the share of jobs in the tertiary and quaternary sectors usually grows.', answer: true, why: 'True. This is sectoral change: machines replace farm and factory work, and people spend more of their income on services.' },
        { id: '1.1-7', type: 'tf', q: 'If every sale makes a profit, a new business cannot run out of money.', answer: false, why: 'False. Cash can run out while money is tied up in stock or customers haven\'t paid yet. Profit and cash are different (you\'ll see this in 3.7).' },
        { id: '1.1-8', type: 'mcq', cmd: 'Identify', q: 'Which is <b>not</b> one of the resources a business combines?', options: ['Market share', 'Human resources', 'Financial resources', 'Physical resources'], answer: 0, why: 'Businesses combine human, physical and financial resources (plus entrepreneurship). Market share is an outcome, not an input.' }
      ],
      explain: 'Think of something <i>you</i> could sell (cleaned sneakers, tutoring, edits for TikTok…). Explain to a mate where the <b>added value</b> comes from and which <b>sector</b> it is in.'
    },

    // ------------------------------------------------------------------ 1.2
    {
      id: '1.2', title: 'Types of business entities', emoji: '🏛️', minutes: 14, hl: false,
      goal: 'distinguish the private and public sectors and compare sole traders, partnerships, privately and publicly held companies, and social enterprises.',
      hook: `Noah's sneaker business is going well. Then a buyer claims a pair was fake and wants <b>$2,000</b> in damages. Noah's dad asks: "If the business can't pay, do they come after <i>your</i> savings?"<br><br>The answer depends on one decision Noah never thought about: the business's <b>legal form</b>.`,
      cards: [
        { title: 'Private sector vs public sector', html: `
          <p>The <b>private sector</b> is businesses owned by private individuals or groups. Most aim to make a profit: ${sf}, LEGO, Netto.</p>
          <p>The <b>public sector</b> is organizations owned and controlled by the government. They provide services for everyone, paid for mainly by taxes: public hospitals, schools, DR, the police.</p>
          <div class="tip">Don't confuse the <b>public sector</b> (owned by the government) with a <b>publicly held company</b> (a private-sector business whose shares anyone can buy). Examiners love this trap.</div>` },
        { title: 'Sole traders', html: `
          <p>A <b>sole trader</b> is a business owned by one person. They can still employ staff.</p>
          <ul><li>✅ Easy and cheap to set up. The owner keeps all the profit and makes every decision.</li>
              <li>❌ <b>Unlimited liability</b>: the owner and the business are the same in law, so the owner is personally responsible for <i>all</i> its debts. Their savings, car or home can be taken.</li>
              <li>❌ Hard to raise finance (no shares to sell), long hours, and the business may end if the owner is ill or quits.</li></ul>
          <div class="example">Noah started ${sf} as a sole trader: no forms beyond registering for tax, and every dollar of profit was his. But so was every debt.</div>` },
        { title: 'Partnerships', html: `
          <p>A <b>partnership</b> is a business owned by two or more people (usually up to 20) who share the work, the decisions and the profits. Partners usually sign a <b>deed of partnership</b>: who puts in what, how profits are split, what happens if someone leaves.</p>
          <ul><li>✅ More money, more skills, shared workload.</li>
              <li>❌ Usually still <b>unlimited liability</b> for the partners, and each partner can be responsible for decisions the others make.</li>
              <li>❌ Disagreements, and profits are shared.</li></ul>
          <div class="example">Freja joins and puts in $1,000 and her design skills. Noah and Freja become partners and agree to split profits 50/50.</div>` },
        { title: 'Companies: privately held and publicly held', html: `
          <p>A <b>company</b> is a separate legal entity from its owners, the <b>[[shareholders]]</b>. It can own things, sign contracts and be sued in its own name. Shareholders have <b>limited liability</b>: they can lose only the money they invested, not their personal assets.</p>
          <ul><li><b>Privately held company</b> (Ltd; ApS in Denmark): shares are sold privately, e.g. to family, friends or chosen investors, and can't be sold to the general public. Owners keep control. <i>LEGO is privately held, owned mainly by one family.</i></li>
              <li><b>Publicly held company</b> (PLC): shares can be sold to the public on a stock exchange. Raises huge sums, but must publish its accounts and the founders can lose control. <i>Novo Nordisk and Pandora: anyone can buy their shares.</i></li></ul>
          <div class="tip">Companies cost more to set up and must follow more rules (publishing accounts). That is the price of limited liability and access to [[share capital]].</div>` },
        { title: 'Social enterprises', html: `
          <p>A <b>social enterprise</b> uses business methods to achieve <b>social or environmental goals</b>. Any surplus is mainly used for the cause.</p>
          <ul><li><b>For-profit social enterprises</b> make a profit, but have social aims and reinvest much of it. They include <b>cooperatives</b>: businesses owned and run by their members (workers, customers or suppliers), who share the profits. <i>Arla is a cooperative owned by its dairy farmers; Coop is owned by its customer-members.</i></li>
              <li><b>Non-profit social enterprises</b> don't distribute profit to owners: any surplus goes back into the cause. They include <b>NGOs</b> (non-governmental organizations) such as the Red Cross and Médecins Sans Frontières.</li></ul>
          <div class="example">A café that hires and trains young people who have been homeless, and reinvests its profit in more training places, is a social enterprise.</div>` }
      ],
      labs: [
        { type: 'liability', title: 'Who pays the debts?' },
        {
          type: 'scenarios', title: 'Pick the legal form',
          challenge: 'Choose the best legal form for all 4 businesses.',
          items: [
            { s: 'Emma (19) wants to start dog-walking at weekends. She has almost no costs and wants to keep it simple.', options: [
              { t: 'Sole trader', ok: true, fb: 'Yes: cheap, simple, she keeps all the profit. With so few costs, unlimited liability is a small risk.' },
              { t: 'Publicly held company', ok: false, fb: 'Massively too complicated: stock-exchange listing for dog-walking?' },
              { t: 'Partnership', ok: false, fb: 'She is on her own, so there is nobody to partner with.' }] },
            { s: 'Two physiotherapists want to open a clinic together, sharing the costs, the patients and the profit.', options: [
              { t: 'Partnership', ok: true, fb: 'Yes: a classic partnership. Professionals often pool skills and money this way.' },
              { t: 'Sole trader', ok: false, fb: 'There are two owners.' },
              { t: 'NGO', ok: false, fb: 'They want to share profits, so it isn\'t non-profit.' }] },
            { s: 'SoleFlip needs $20,000 for a laser machine and wants to sell a few shares to Freja\'s uncle without the owners risking their own homes.', options: [
              { t: 'Privately held company (Ltd)', ok: true, fb: 'Yes: limited liability protects the owners, and shares can be sold privately to chosen people.' },
              { t: 'Publicly held company (PLC)', ok: false, fb: 'Far too big a step: they don\'t need to sell shares to the public.' },
              { t: 'Stay a partnership', ok: false, fb: 'Partners can\'t sell shares, and they keep unlimited liability.' }] },
            { s: 'A group of 200 organic farmers want to own their own dairy together, sell their milk through it and share the profit.', options: [
              { t: 'Cooperative', ok: true, fb: 'Yes: owned by its members, who share the profit. Exactly how Arla started.' },
              { t: 'Sole trader', ok: false, fb: 'There are 200 owners.' },
              { t: 'Public sector organization', ok: false, fb: 'The farmers own it, not the government.' }] }
          ]
        }
      ],
      worked: {
        title: 'Should SoleFlip become a company? (exam style)',
        intro: `<p><b>Question:</b> Noah and Freja run ${sf} as a partnership. Sales are $60,000 a year, they want to borrow to buy a $20,000 laser machine, and Freja's uncle has offered to invest $10,000 for a share of the business. <i>Discuss</i> whether ${sf} should become a privately held company. [10 marks]</p>`,
        steps: [
          { prompt: 'What is the biggest risk for Noah and Freja if they stay a partnership and borrow $20,000?', answer: '<b>Unlimited liability.</b> If the business fails, the partners are personally responsible for the loan, so their own savings are at risk.' },
          { prompt: 'Which two advantages would a privately held company bring here?', answer: '1) <b>Limited liability</b>: they can lose only what they invested. 2) They can sell <b>shares</b> to Freja\'s uncle, raising $10,000 without more debt.' },
          { prompt: 'What are the drawbacks?', answer: 'Setting up costs money and time, they must publish accounts every year, and the uncle becomes a part-owner who shares future profits and gets a vote.' },
          { prompt: 'How could they keep control?', answer: 'Sell the uncle a minority stake, e.g. 20%, so Noah and Freja together still own 80% and make the decisions.' },
          { prompt: 'Judgement?', answer: '"SoleFlip should become a privately held company, <i>because</i> borrowing $20,000 with unlimited liability puts their personal savings at risk, and shares let them raise $10,000 without interest. This depends on keeping a majority of the shares, so they should sell no more than a minority stake."' }
        ],
        takeaway: '"Discuss" and "evaluate" need both sides and a justified conclusion that says what it depends on. Always tie each point back to the case numbers.'
      },
      quiz: [
        { id: '1.2-1', type: 'mcq', cmd: 'Define', q: '<b>Unlimited liability</b> means…', options: ['the owner is personally responsible for all the business\'s debts', 'the business has no legal limit on how much money it can borrow', 'shareholders can lose only the money they invested in the company', 'the business can keep trading even if it cannot pay its debts'], answer: 0, why: 'With unlimited liability the owner and the business are one in law: personal assets can be used to pay business debts.' },
        { id: '1.2-2', type: 'mcq', cmd: 'Identify', q: 'Which organization is in the <b>public sector</b>?', options: ['A state-run hospital', 'Novo Nordisk', 'A cooperative supermarket', 'A local hairdresser'], answer: 0, why: 'The public sector is owned and controlled by the government. Novo Nordisk is a publicly held company, which is still in the <i>private</i> sector.' },
        { id: '1.2-3', type: 'tf', q: 'A publicly held company is owned by the government.', answer: false, why: 'False. It is owned by shareholders, and its shares can be bought by the public on a stock exchange. It is in the private sector.' },
        { id: '1.2-4', type: 'sort', q: 'Which legal form does each describe?', buckets: ['Sole trader', 'Partnership', 'Company'], items: [
          { t: 'Owned by one person with unlimited liability', b: 0 }, { t: 'Owners usually sign a deed', b: 1 },
          { t: 'Separate legal entity from its owners', b: 2 }, { t: 'Owners are shareholders with limited liability', b: 2 },
          { t: '2–20 owners share profits and decisions', b: 1 }, { t: 'Owner keeps all the profit and makes every decision alone', b: 0 }], why: 'One owner = sole trader. Several owners sharing decisions, with a deed = partnership. Separate legal entity owned by shareholders = company.' },
        { id: '1.2-5', type: 'mcq', cmd: 'Explain', q: 'What is the main <b>disadvantage</b> of becoming a publicly held company for its founders?', options: ['They may lose control, because anyone can buy shares', 'They lose limited liability and risk their own savings', 'They are no longer allowed to raise any share capital', 'They must turn the business into a non-profit company'], answer: 0, why: 'Shares are sold to the public, so the founders\' stake can be diluted and outsiders can even buy enough shares to take over.' },
        { id: '1.2-6', type: 'mcq', cmd: 'Identify', q: 'A cooperative is best described as a business that is…', options: ['owned and run by its members, who share the profits', 'owned and controlled by the government for everyone', 'owned by one person who has unlimited liability', 'a charity that is not allowed to make any surplus'], answer: 0, why: 'Cooperatives are owned by their members (e.g. workers, customers or farmers). They are a type of for-profit social enterprise.' },
        { id: '1.2-7', type: 'mcq', cmd: 'Distinguish', q: 'What is the key difference between a <b>for-profit</b> and a <b>non-profit</b> social enterprise?', options: ['A non-profit doesn\'t distribute any surplus to owners; it all goes back into the cause', 'A for-profit social enterprise has no social aims at all; it only exists for its owners', 'Only non-profit social enterprises are allowed to sell goods and services to customers', 'Only for-profit social enterprises can be NGOs; non-profits must be in the public sector'], answer: 0, why: 'Both have social goals and both can sell things. The difference is what happens to any surplus.' },
        { id: '1.2-8', type: 'tf', q: 'A sole trader can employ other people.', answer: true, why: 'True. "Sole" refers to ownership (one owner), not the number of workers.' },
        { id: '1.2-9', type: 'mcq', cmd: 'Identify', q: 'Why might the owners of a privately held company choose <b>not</b> to become publicly held?', options: ['To keep control of who owns shares', 'To gain limited liability for the owners', 'To be allowed to employ more staff', 'To avoid publishing accounts or paying tax'], answer: 0, why: 'Privately held companies choose their shareholders, so owners keep control. They already have limited liability.' }
      ],
      explain: 'Your mate wants to sell custom phone cases. Explain <b>unlimited vs limited liability</b> to them and say which legal form you\'d pick for them, and why.'
    },

    // ------------------------------------------------------------------ 1.3
    {
      id: '1.3', title: 'Business objectives', emoji: '🎯', minutes: 12, hl: false,
      goal: 'distinguish vision and mission statements, explain common objectives, tell strategic from tactical objectives, and evaluate corporate social responsibility.',
      hook: `Patagonia's founder gave away the whole company in 2022 so its profits fight climate change. Meanwhile, most companies are judged on whether profits beat last year's.<br><br>Both are businesses. They just have very different <b>objectives</b>. What should a business aim for, and who decides?`,
      cards: [
        { title: 'Vision and mission statements', html: `
          <p>A <b>vision statement</b> describes what the organization wants to become or achieve in the <b>long term</b>: its big dream. Short and inspiring.</p>
          <p>A <b>mission statement</b> describes its <b>purpose now</b>: what it does, for whom, and how.</p>
          <div class="example">${sf}'s vision: <i>"A world where no good sneaker ends up in a landfill."</i><br>${sf}'s mission: <i>"We clean, repair and customise sneakers so young people in Denmark can wear something unique without buying new."</i></div>
          <div class="tip">Critics say these statements can be vague PR. In an evaluation, say they help only if staff know them and they actually guide decisions.</div>` },
        { title: 'Common business objectives', html: `
          <ul><li><b>Profit</b>: the reward for owners and money to reinvest. Essential in the long run for most private businesses.</li>
              <li><b>Growth</b>: more sales, outlets or [[market share]], which can bring lower costs and more security.</li>
              <li><b>Protecting shareholder value</b>: keeping the company\'s share value and [[dividends]] rising so investors stay.</li>
              <li><b>Ethical objectives</b>: doing what is morally right beyond what the law requires, e.g. fair pay for suppliers, no animal testing, cutting emissions.</li></ul>
          <div class="example">${sf} year 1 objective: survive and break even. Year 3: grow to a second store. The objective changes as the business changes.</div>` },
        { title: 'Strategic vs tactical objectives', html: `
          <p><b>Strategic objectives</b> are long-term (usually several years), set by senior managers, and affect the whole business. <i>"Become Denmark's biggest sneaker-care brand by 2030."</i></p>
          <p><b>Tactical objectives</b> are shorter-term (usually up to a year or two), set by middle managers, and help achieve the strategic ones. <i>"Open a pop-up store in Aarhus this autumn."</i></p>
          <p>The order: <b>vision → mission → strategic objectives → tactical objectives</b>, each serving the one before.</p>
          <div class="tip">Good objectives are <b>SMART</b>: specific, measurable, achievable, realistic, time-bound. "Grow" is not SMART. "Increase online sales by 20% by December" is.</div>` },
        { title: 'Corporate social responsibility (CSR)', html: `
          <p><b>Corporate social responsibility</b> is when a business takes responsibility for its impact on society and the environment, going <b>beyond what the law requires</b>.</p>
          <ul><li>✅ Better reputation and loyal customers, easier to attract staff, can attract investors, may avoid future regulation.</li>
              <li>❌ Costs money, which can mean lower profits or higher prices; it can conflict with shareholders' wishes; and "greenwashing" (pretending) can backfire badly.</li></ul>
          <div class="example">${sf} pays a little more for recycled packaging and repairs sneakers for free at festivals. It costs about $1,500 a year, but their TikTok about it got 200,000 views.</div>` },
        { title: 'Why objectives change', html: `
          <p>Objectives are not fixed. They change because of:</p>
          <ul><li><b>Internal</b> changes: new owners or managers, the business growing, a new product, a poor year.</li>
              <li><b>External</b> changes: a recession, new competitors, new laws, changing customer attitudes (e.g. to sustainability), a pandemic.</li></ul>
          <div class="example">During COVID, many restaurants switched their objective from growth to <b>survival</b>, and some to delivery-only.</div>` }
      ],
      labs: [
        {
          type: 'sort', title: 'Strategic or tactical?',
          challenge: 'Sort all 8 of SoleFlip\'s objectives correctly in one go.',
          buckets: ['Strategic', 'Tactical'],
          items: [
            { t: '🗺️ Become the best-known sneaker-care brand in Scandinavia by 2030', b: 0 },
            { t: '🏬 Open stores in all four of Denmark\'s biggest cities within 5 years', b: 0 },
            { t: '♻️ Make the whole business carbon-neutral by 2030', b: 0 },
            { t: '🌍 Start selling in Sweden and Norway within 4 years', b: 0 },
            { t: '📱 Get 5,000 more TikTok followers before Christmas', b: 1 },
            { t: '⏱️ Cut repair waiting time to 3 days this quarter', b: 1 },
            { t: '🎪 Run a stand at Roskilde Festival this summer', b: 1 },
            { t: '🧑‍🔧 Train two new staff on the laser machine by March', b: 1 }
          ]
        },
        {
          type: 'scenarios', title: 'CSR or not?',
          challenge: 'Make the most responsible and realistic call in all 3 dilemmas.',
          items: [
            { s: 'A cheaper supplier offers blank sneakers 30% cheaper. A news report says its factory pays workers below the legal minimum wage.', options: [
              { t: 'Stay with the current supplier and tell customers why', ok: true, fb: 'Yes: avoids an ethical and reputation disaster, and the story itself is good marketing.' },
              { t: 'Switch: profit comes first', ok: false, fb: 'Short-term saving, long-term risk. If customers find out, the brand could be badly damaged.' },
              { t: 'Switch, but don\'t tell anyone', ok: false, fb: 'Hiding it makes it worse if it comes out.' }] },
            { s: 'Shareholders complain that the $1,500 a year for free festival repairs cuts their dividends.', options: [
              { t: 'Show them it brings new customers and press, and keep it if the numbers back that up', ok: true, fb: 'Yes: CSR is easier to defend when you can show it also helps the business.' },
              { t: 'Stop all CSR immediately', ok: false, fb: 'This might lose the reputation gains that bring in sales.' },
              { t: 'Ignore the shareholders', ok: false, fb: 'They own the company. Their concerns need an answer.' }] },
            { s: 'Marketing wants to call the new sneaker "100% eco" because the laces are recycled. The rest isn\'t.', options: [
              { t: 'Say "recycled laces" instead', ok: true, fb: 'Yes: honest claims. "100% eco" would be greenwashing, and the EU is cracking down on misleading green claims.' },
              { t: 'Use "100% eco": everybody exaggerates', ok: false, fb: 'Greenwashing destroys trust when it is exposed.' },
              { t: 'Drop all green messages', ok: false, fb: 'The recycled laces are true and worth mentioning.' }] }
          ]
        }
      ],
      worked: {
        title: 'Turn a vague goal into objectives',
        intro: `<p>Noah says: <i>"I want SoleFlip to be big."</i> Freja says that's not an objective. Help them.</p>`,
        steps: [
          { prompt: 'Why isn\'t "be big" a useful objective?', answer: 'It isn\'t <b>measurable</b> or <b>time-bound</b>. Nobody can tell whether it was achieved.' },
          { prompt: 'Write a strategic objective for "big".', answer: '"Have <b>4 stores</b> in Denmark and <b>$500,000</b> annual sales <b>by 2030</b>." Long-term and about the whole business.' },
          { prompt: 'Write one tactical objective that helps achieve it.', answer: '"Open the Aarhus pop-up and reach <b>$5,000</b> sales a month there <b>within 6 months</b>." Shorter-term and one step towards the strategy.' },
          { prompt: 'Could growth conflict with their vision of keeping sneakers out of landfill?', answer: 'Yes, if growth means selling lots of <i>new</i> shoes. It fits if growth comes from more repairs and resales. Objectives should support the vision, not fight it.' }
        ],
        takeaway: 'In exams, check whether objectives are SMART and whether they fit the mission. A clash between objectives is a great point for evaluation.'
      },
      quiz: [
        { id: '1.3-1', type: 'mcq', cmd: 'Distinguish', q: 'What is the difference between a <b>vision</b> and a <b>mission</b> statement?', options: ['Vision = what it wants to become in the long term; mission = its purpose now', 'Vision = its short-term targets; mission = its long-term targets for growth', 'Vision is written for customers only; mission is written for shareholders only', 'There is no real difference: both describe the same thing in different words'], answer: 0, why: 'Vision looks to the future (the dream). Mission says what the business does today, for whom and how.' },
        { id: '1.3-2', type: 'mcq', cmd: 'Identify', q: 'Which is a <b>tactical</b> objective?', options: ['Increase website sales by 10% this quarter', 'Become the global market leader by 2035', 'Change the whole business to renewable energy within 10 years', 'Be the world\'s most loved brand'], answer: 0, why: 'Tactical = short-term, specific, and helping a bigger strategic goal.' },
        { id: '1.3-3', type: 'mcq', cmd: 'Define', q: '<b>Corporate social responsibility</b> means a business…', options: ['takes responsibility for its impact on society and the environment beyond what the law requires', 'obeys every law and regulation that applies to its products, its staff and the environment', 'gives all of its profit to charities instead of paying any dividends to its shareholders', 'aims to maximise profit for shareholders, because that is its only responsibility to society'], answer: 0, why: 'The key words are <i>beyond the law</i>. Obeying the law is the minimum, not CSR.' },
        { id: '1.3-4', type: 'tf', q: 'Spending on CSR always reduces a company\'s profit.', answer: false, why: 'False. It costs money in the short run, but can increase sales, loyalty and staff retention, so it can raise profit over time.' },
        { id: '1.3-5', type: 'mcq', cmd: 'Identify', q: 'Which objective is <b>SMART</b>?', options: ['Cut delivery times from 5 to 3 days by 1 June', 'Make our customers a lot happier than before', 'Grow the business as much as possible this year', 'Become more eco-friendly as soon as we can'], answer: 0, why: 'It is specific, measurable (5 → 3 days) and time-bound (1 June). The others can\'t be measured.' },
        { id: '1.3-6', type: 'sort', q: 'Internal or external reason for changing objectives?', buckets: ['Internal', 'External'], items: [
          { t: 'A new CEO is appointed', b: 0 }, { t: 'A recession hits', b: 1 }, { t: 'A new law bans single-use plastic', b: 1 },
          { t: 'The business makes a large loss', b: 0 }, { t: 'A big competitor enters the market', b: 1 }], why: 'Internal = from inside the business. External = from its environment, which it can\'t control.' },
        { id: '1.3-7', type: 'mcq', cmd: 'Explain', q: 'Why might <b>ethical objectives</b> conflict with <b>protecting shareholder value</b>?', options: ['Ethical choices often cost more in the short run, which can lower profits and dividends', 'Shareholders are not allowed by law to own shares in businesses with ethical objectives', 'Ethical objectives are illegal in most countries because they distort competition', 'They never conflict, because ethical businesses always make higher profits than others'], answer: 0, why: 'E.g. paying suppliers more or cutting emissions raises costs now. The benefits (reputation, loyalty) may come later or be hard to measure.' },
        { id: '1.3-8', type: 'tf', q: 'Strategic objectives are usually set by senior managers and cover several years.', answer: true, why: 'True. Tactical objectives are shorter-term and usually set by middle managers.' }
      ],
      explain: 'Write a <b>vision</b>, a <b>mission</b> and one <b>SMART</b> objective for something in your own life (your grades, a sport, a channel). Then explain the difference to a mate.'
    },

    // ------------------------------------------------------------------ 1.4
    {
      id: '1.4', title: 'Stakeholders', emoji: '🤝', minutes: 11, hl: false,
      goal: 'distinguish internal and external stakeholders, explain their interests, and analyse conflict between them.',
      hook: `${sf} wants to keep its new store open until <b>midnight</b> on Fridays. Customers love it. The two staff want extra pay. The neighbours upstairs are furious about noise. The bank just wants its loan repaid.<br><br>Everyone has a point. Who should win?`,
      cards: [
        { title: 'Internal and external stakeholders', html: `
          <p><b>Stakeholders</b> are individuals or groups with an interest in a business, because its actions affect them.</p>
          <p><b>Internal stakeholders</b> are inside the business:</p>
          <ul><li><b>Employees</b> and <b>managers</b>.</li>
              <li><b>Shareholders</b> (owners): people or organizations that own shares, and so part of a company.</li></ul>
          <p><b>External stakeholders</b> are outside it: <b>customers, suppliers, the government, the local community, banks and other lenders, pressure groups</b> and sometimes competitors.</p>
          <div class="tip">Stakeholder ≠ shareholder. Every shareholder is a stakeholder, but most stakeholders own no shares at all.</div>` },
        { title: 'What does each stakeholder want?', html: `
          <div class="table-wrap"><table class="fin">
            <tr><th>Stakeholder</th><th>Main interest</th></tr>
            <tr><td>Shareholders</td><td>Profit, [[dividends]], a rising share value</td></tr>
            <tr><td>Employees</td><td>Fair pay, job security, good conditions</td></tr>
            <tr><td>Managers</td><td>Bonuses, status, the business growing</td></tr>
            <tr><td>Customers</td><td>Quality, low prices, good service</td></tr>
            <tr><td>Suppliers</td><td>Regular orders, being paid on time</td></tr>
            <tr><td>Government</td><td>Taxes, jobs, obeying the law</td></tr>
            <tr><td>Local community</td><td>Jobs, little noise and pollution, safety</td></tr>
            <tr><td>Banks</td><td>Loans repaid with interest</td></tr>
            <tr><td>Pressure groups</td><td>A cause, e.g. the environment or animal welfare</td></tr>
          </table></div>` },
        { title: 'Stakeholder conflict', html: `
          <p>Stakeholders often want <b>different things at the same time</b>, so a decision that pleases one group can upset another.</p>
          <ul><li>Shareholders want higher profit ↔ employees want higher pay.</li>
              <li>Customers want low prices ↔ suppliers want high prices.</li>
              <li>Managers want to expand the factory ↔ the local community wants less traffic and noise.</li></ul>
          <p>But interests can also <b>overlap</b>: if the business succeeds, employees keep their jobs, shareholders get dividends and the government gets taxes.</p>
          <div class="example">Midnight opening: customers and shareholders gain (more sales). Employees want a pay premium. Neighbours lose sleep. Classic conflict.</div>` },
        { title: 'Stakeholder mapping', html: `
          <p>A <b>stakeholder map</b> places stakeholders by their <b>power</b> (ability to influence the business) and their <b>interest</b> (how much they care):</p>
          <div class="table-wrap"><table class="fin">
            <tr><th></th><th>Low interest</th><th>High interest</th></tr>
            <tr><td><b>High power</b></td><td>Keep satisfied</td><td><b>Key players</b>: manage closely</td></tr>
            <tr><td><b>Low power</b></td><td>Monitor (minimal effort)</td><td>Keep informed</td></tr>
          </table></div>
          <div class="example">For ${sf}'s late opening: the owners are key players. The council can refuse permission (high power), so keep it satisfied. The neighbours care a lot, so keep them informed, and they gain power if they complain to the council.</div>
          <div class="tip">Stakeholder mapping is one of the IB business management tools. Use it to justify <i>whose</i> concerns come first in an "evaluate" or "recommend" answer.</div>` },
        { title: 'Resolving conflict', html: `
          <ul><li><b>Communicate and consult</b> early, so people feel heard.</li>
              <li><b>Compromise</b>: give each group part of what it wants.</li>
              <li><b>Prioritise</b> the stakeholders with most power and interest (use the map).</li>
              <li>Link decisions to the <b>mission</b> and objectives.</li></ul>
          <div class="example">${sf}'s compromise: open until midnight only on the last Friday of each month, pay staff 50% extra for those hours, and add soundproofing. Not everyone is fully happy, but nobody walks away.</div>` }
      ],
      labs: [
        {
          type: 'sort', title: 'Inside or outside?',
          challenge: 'Sort all 10 of SoleFlip\'s stakeholders correctly in one go.',
          buckets: ['Internal', 'External'],
          items: [
            { t: '🧑‍🔧 Weekend helper Ali', b: 0 },
            { t: '👩‍💼 Store manager', b: 0 },
            { t: '💼 Freja\'s uncle, who owns 20% of the shares', b: 0 },
            { t: '👩‍🎨 Noah and Freja, the owners', b: 0 },
            { t: '🛒 Customers', b: 1 },
            { t: '📦 Supplier of blank sneakers', b: 1 },
            { t: '🏦 The bank that lent $15,000', b: 1 },
            { t: '🏛️ SKAT, the Danish tax authority', b: 1 },
            { t: '🏘️ Neighbours above the store', b: 1 },
            { t: '🌱 A pressure group against fast fashion', b: 1 }
          ]
        },
        {
          type: 'scenarios', title: 'Stakeholder showdown',
          challenge: 'Find the best way through all 3 conflicts.',
          items: [
            { s: 'Shareholders want a bigger dividend this year. Staff want a 10% pay rise. Profit was only $12,000.', options: [
              { t: 'Smaller pay rise linked to sales targets, and a modest dividend', ok: true, fb: 'Yes: a compromise that rewards both and ties pay to performance.' },
              { t: 'Pay out all profit as dividends', ok: false, fb: 'Staff may become demotivated or leave, which hurts the business.' },
              { t: 'Give staff 10% and shareholders nothing', ok: false, fb: 'Shareholders own the business and could refuse to invest again.' }] },
            { s: 'The council (high power, low interest) is reviewing SoleFlip\'s request to put a big sign on the building.', options: [
              { t: 'Meet the rules in full and keep the council satisfied', ok: true, fb: 'Yes: high power, low interest = keep satisfied. Don\'t give it a reason to get involved.' },
              { t: 'Ignore the council: it doesn\'t care much', ok: false, fb: 'Low interest, but high power. It can still say no.' },
              { t: 'Invite the council to every staff meeting', ok: false, fb: 'Too much: it isn\'t interested in day-to-day decisions.' }] },
            { s: 'Neighbours (low power, high interest) start a Facebook group complaining about noise.', options: [
              { t: 'Talk to them, explain the plan, and fix the noise', ok: true, fb: 'Yes: keep them informed. If ignored they could gain power, e.g. by going to the council or the local news.' },
              { t: 'Ignore them: they have low power', ok: false, fb: 'Power can change. Angry neighbours with a viral post can get the council involved.' },
              { t: 'Close the store', ok: false, fb: 'A huge overreaction to a fixable problem.' }] }
          ]
        }
      ],
      worked: {
        title: 'Analyse a stakeholder conflict (exam style)',
        intro: `<p><b>Question:</b> ${sf} Ltd plans to move its workshop to a bigger, cheaper unit 25 km outside Copenhagen. It would save $8,000 a year in rent. <i>Analyse</i> how two stakeholder groups might be affected. [6 marks]</p>`,
        steps: [
          { prompt: 'Which stakeholders gain?', answer: '<b>Shareholders</b>: $8,000 a year lower costs means higher profit and possibly bigger [[dividends]].' },
          { prompt: 'Which stakeholders lose?', answer: '<b>Employees</b>: a longer commute, possibly without a car. Some may quit, and SoleFlip would have to recruit and train replacements.' },
          { prompt: 'Is there a knock-on effect on another group?', answer: '<b>Customers</b> who drop off sneakers in person may find it less convenient, so sales could fall and cancel out part of the $8,000 saving.' },
          { prompt: 'How could the conflict be reduced?', answer: 'Keep a small drop-off point in the city, offer a travel allowance to staff, and explain the move early.' }
        ],
        takeaway: '"Analyse" = explain the effect on each stakeholder <i>and</i> the chain of consequences. Use the case figures ($8,000) to show impact.'
      },
      quiz: [
        { id: '1.4-1', type: 'mcq', cmd: 'Identify', q: 'Which is an <b>internal</b> stakeholder?', options: ['Shareholders', 'Suppliers', 'The government', 'The local community'], answer: 0, why: 'Shareholders own the business, so they are internal, together with employees and managers.' },
        { id: '1.4-2', type: 'tf', q: 'All stakeholders are shareholders.', answer: false, why: 'False. It\'s the other way round: shareholders are one type of stakeholder.' },
        { id: '1.4-3', type: 'mcq', cmd: 'Identify', q: 'A supplier\'s main interest is usually…', options: ['regular orders and being paid on time', 'a high dividend', 'low prices for the business\'s products', 'a short commute'], answer: 0, why: 'Suppliers want reliable customers who pay their bills.' },
        { id: '1.4-4', type: 'mcq', cmd: 'Identify', q: 'On a stakeholder map, a group with <b>high power but low interest</b> should be…', options: ['kept satisfied', 'managed closely', 'kept informed', 'ignored completely'], answer: 0, why: 'High power + low interest = keep satisfied. High + high = manage closely; low power + high interest = keep informed; low + low = monitor.' },
        { id: '1.4-5', type: 'mcq', cmd: 'Explain', q: 'A business decides to cut costs by automating its warehouse. Which conflict is most likely?', options: ['Shareholders (higher profit) vs employees (job losses)', 'Customers (lower prices) vs the government (tax income)', 'Suppliers (more orders) vs pressure groups (less waste)', 'Banks (loan repaid) vs customers (better service)'], answer: 0, why: 'Automation can raise profit for owners while threatening workers\' jobs.' },
        { id: '1.4-6', type: 'sort', q: 'What does each stakeholder mainly want?', buckets: ['Higher profit', 'Job security', 'Low prices'], items: [
          { t: 'Shareholders', b: 0 }, { t: 'Employees', b: 1 }, { t: 'Customers', b: 2 }, { t: 'Trade union members', b: 1 }, { t: 'Owners of a sole trader business', b: 0 }], why: 'Owners and shareholders want profit; employees and their unions want secure jobs; customers want value.' },
        { id: '1.4-7', type: 'tf', q: 'Stakeholders\' interests can overlap as well as conflict.', answer: true, why: 'True. If the business succeeds, owners, employees, the government and suppliers can all gain.' },
        { id: '1.4-8', type: 'mcq', cmd: 'Recommend', q: 'Which is usually the <b>best first step</b> in dealing with an angry stakeholder group?', options: ['Communicate and consult with them', 'Ignore them until they go away', 'Give them everything they ask for', 'Take legal action against them'], answer: 0, why: 'Consulting early often prevents a conflict from growing, and helps find a compromise.' }
      ],
      explain: 'Pick a business you know (your school canteen, a festival, a local gym). Explain to a mate two of its <b>stakeholders</b> and one way their interests <b>conflict</b>.'
    },

    // ------------------------------------------------------------------ 1.5
    {
      id: '1.5', title: 'Growth and evolution', emoji: '📈', minutes: 15, hl: false,
      goal: 'explain economies and diseconomies of scale, why businesses grow or stay small, and compare internal and external methods of growth.',
      hook: `Tesla's first car cost a fortune to build. Now its giant factories make cars far more cheaply per car. But some huge companies become slow and messy, and small brands steal their customers.<br><br>So is bigger always better? ${sf} is about to find out.`,
      cards: [
        { title: 'To grow or to stay small?', html: `
          <p>Businesses can measure size by sales revenue, [[market share]], number of employees or capital employed.</p>
          <p><b>Reasons to grow:</b> lower costs per unit (economies of scale), more market share and power, survival against rivals, spreading risk across more products or markets, and managers' ambition.</p>
          <p><b>Reasons to stay small:</b> owners keep control, a personal service and closer customer relationships, serving a <b>niche</b> market, less financial risk, more flexibility, and avoiding diseconomies of scale.</p>
          <div class="example">Lots of small Copenhagen coffee bars stay small on purpose: the owner knows the regulars by name, and that is the product.</div>` },
        { title: 'Economies of scale', html: `
          <p><b>Economies of scale</b> are the cost advantages of growing: as output rises, the <b>average cost</b> per unit falls.</p>
          ${F`\text{Average cost} = \frac{\text{total costs}}{\text{output}}`}
          <p><b>Internal</b> economies of scale (inside the business):</p>
          <ul><li><b>Purchasing</b>: bulk-buying discounts.</li>
              <li><b>Technical</b>: bigger, faster machines used fully.</li>
              <li><b>Financial</b>: big firms borrow more cheaply.</li>
              <li><b>Marketing</b>: one ad campaign spread over more sales.</li>
              <li><b>Managerial</b>: can afford specialist managers.</li>
              <li><b>Risk-bearing</b>: many products and markets spread the risk.</li></ul>
          <div class="example">${sf} pays $30 a pair for 20 blank sneakers, but $22 a pair for 200. That is a purchasing economy.</div>` },
        { title: 'Diseconomies of scale', html: `
          <p><b>Diseconomies of scale</b> happen when a business grows so big that its <b>average cost rises</b>.</p>
          <ul><li><b>Communication</b> problems: more layers, slower and distorted messages.</li>
              <li><b>Coordination and control</b>: harder to keep many sites and departments working together, and each manager's [[span of control]] gets too wide.</li>
              <li><b>Low [[motivation]]</b>: staff feel like a number and work less hard.</li></ul>
          <p><b>External</b> economies of scale come from the growth of the whole <b>industry</b> in an area: a pool of skilled workers, specialist suppliers nearby, better roads. Example: the many wind-energy firms in Denmark. <b>External diseconomies</b> are the downsides of that growth, e.g. traffic congestion and rising rents and wages.</p>` },
        { title: 'Internal (organic) growth', html: `
          <p><b>Internal (organic) growth</b> is when a business grows using its own resources: selling more, launching new products, opening new stores, entering new markets.</p>
          <ul><li>✅ Lower risk, keeps control and culture, often financed by [[retained profit]].</li>
              <li>❌ Slow, and limited by how much the business itself earns or can borrow.</li></ul>
          <div class="example">${sf} opening its own second store in Aarhus, paid for out of profit, is organic growth.</div>` },
        { title: 'External growth (1): mergers, acquisitions, takeovers', html: `
          <p><b>External (inorganic) growth</b> means growing by working with or buying other businesses. Faster, but riskier.</p>
          <ul><li><b>Merger</b>: two businesses agree to join and form one new business.</li>
              <li><b>Acquisition</b>: one business buys a controlling stake (over 50% of the shares) in another, with agreement.</li>
              <li><b>Takeover</b>: an acquisition the target's managers <b>don't</b> agree to (hostile).</li></ul>
          <p>✅ Instant growth, market share, new skills, products and markets. ❌ Expensive, culture clashes, job losses and conflicts, and many deals fail to bring the hoped-for benefits.</p>` },
        { title: 'External growth (2): joint ventures, alliances, franchising', html: `
          <ul><li><b>Joint venture</b>: two or more businesses create a <b>new, separate</b> business that they own together, sharing costs, risks and profits. E.g. Sony Honda Mobility for electric cars.</li>
              <li><b>Strategic alliance</b>: businesses agree to cooperate (share resources, knowledge or customers) but <b>no new business is created</b> and each stays independent. E.g. airline alliances like Star Alliance.</li>
              <li><b>Franchising</b>: the <b>franchisor</b> lets a <b>franchisee</b> use its brand, products and business model in return for a fee and royalties (a % of sales). E.g. McDonald's and Subway.</li></ul>
          <div class="tip">Franchising lets the franchisor grow fast with little of its own money, because franchisees pay to open the outlets. The risk: one bad franchisee can damage the whole brand.</div>` }
      ],
      labs: [
        { type: 'scale', title: 'How big should SoleFlip get?' },
        {
          type: 'scenarios', title: 'Choose the growth method',
          challenge: 'Pick the best growth method in all 4 situations.',
          items: [
            { s: 'SoleFlip wants to open in 10 cities in 2 years, but has only $30,000. Lots of young entrepreneurs love the brand.', options: [
              { t: 'Franchising', ok: true, fb: 'Yes: franchisees pay to open their own stores, so SoleFlip grows fast with little capital.' },
              { t: 'Organic growth', ok: false, fb: '$30,000 won\'t open 10 stores in 2 years.' },
              { t: 'Hostile takeover', ok: false, fb: 'Of whom? And with what money?' }] },
            { s: 'A Danish sneaker-care brand and a Swedish one each want to enter Norway, but neither wants to take the full risk. They plan a new company they own 50/50.', options: [
              { t: 'Joint venture', ok: true, fb: 'Yes: a new, separate business owned by both, sharing the costs and risks.' },
              { t: 'Merger', ok: false, fb: 'A merger joins the whole businesses. They only want to cooperate in Norway.' },
              { t: 'Franchising', ok: false, fb: 'Neither is licensing its brand to the other.' }] },
            { s: 'SoleFlip and a local festival agree that SoleFlip runs the festival\'s sneaker-cleaning stand and both promote each other. No new company, no money changes hands.', options: [
              { t: 'Strategic alliance', ok: true, fb: 'Yes: cooperation between independent businesses without creating a new one.' },
              { t: 'Joint venture', ok: false, fb: 'A joint venture needs a new, jointly owned business.' },
              { t: 'Acquisition', ok: false, fb: 'Nobody is buying anybody.' }] },
            { s: 'The owners want to stay in full control and keep their culture, and are happy to grow slowly from profits.', options: [
              { t: 'Organic growth', ok: true, fb: 'Yes: slower, but full control and low risk.' },
              { t: 'Merger', ok: false, fb: 'They would share control with the other business\'s owners.' },
              { t: 'Franchising', ok: false, fb: 'Franchisees run their own outlets, so the owners would lose some control of the customer experience.' }] }
          ]
        }
      ],
      worked: {
        title: 'Spot economies of scale in the numbers',
        intro: `<p>${sf} compares two monthly output levels:</p>${tbl(['', '100 pairs', '400 pairs'], [['Total costs', '$9,000', '$21,600']])}`,
        steps: [
          { prompt: 'Average cost at 100 pairs?', answer: '$9,000 ÷ 100 = <b>$90 per pair</b>' },
          { prompt: 'Average cost at 400 pairs?', answer: '$21,600 ÷ 400 = <b>$54 per pair</b>' },
          { prompt: 'Total costs went <i>up</i>. Why is this still economies of scale?', answer: 'Economies of scale are about <b>average</b> cost. Output rose 4×, but total costs rose only 2.4×, so each pair costs $36 less.' },
          { prompt: 'Name two likely causes.', answer: '<b>Purchasing</b> (bulk discounts on blank sneakers and paint) and <b>technical</b> (the laser machine is used much more fully, so its cost is spread over more pairs).' }
        ],
        takeaway: 'Always compare average cost, not total cost, when judging economies of scale. Then name the specific type and link it to the case.'
      },
      quiz: [
        { id: '1.5-1', type: 'mcq', cmd: 'Define', q: '<b>Economies of scale</b> are…', options: ['falls in average cost as a business increases output', 'falls in total cost as a business grows bigger', 'rises in average cost as a business grows too big', 'discounts a business gives customers who buy a lot'], answer: 0, why: 'The key is <i>average</i> (per-unit) cost. Total cost usually rises as output rises.' },
        { id: '1.5-2', type: 'num', cmd: 'Calculate', q: 'Complete the table. Find the <b>average cost per unit</b> at 500 units.' + tbl(
          ['Output (units)', 'Total costs ($)', 'Average cost ($)'],
          [['100', '4,000', A(40)],
           ['250', '7,500', A(30)],
           ['500', '12,500', A(25, true)]]),
          answer: 25, unit: '$', display: '$25', tol: 0.01, hint: 'Average cost = total costs ÷ output', why: '4,000 ÷ 100 = $40; 7,500 ÷ 250 = $30; 12,500 ÷ 500 = <b>$25</b>. Average cost falls as output rises: economies of scale.' },
        { id: '1.5-3', type: 'mcq', cmd: 'Identify', q: 'A large supermarket chain gets a 15% discount for ordering huge quantities. This is a…', options: ['purchasing economy of scale', 'technical economy of scale', 'diseconomy of scale', 'external economy of scale'], answer: 0, why: 'Bulk-buying discounts = purchasing (or buying) economies.' },
        { id: '1.5-4', type: 'mcq', cmd: 'Identify', q: 'Which is a <b>diseconomy</b> of scale?', options: ['Messages get slower and distorted through many layers of management', 'Bulk-buying discounts from suppliers when ordering much larger amounts', 'Cheaper loans from banks because the business is seen as less risky', 'Spreading the cost of one advertising campaign over many more sales'], answer: 0, why: 'Communication problems in very large organizations push average cost up.' },
        { id: '1.5-5', type: 'sort', q: 'Internal or external growth?', buckets: ['Internal (organic)', 'External'], items: [
          { t: 'Opening a new store with retained profit', b: 0 }, { t: 'Buying a rival company', b: 1 }, { t: 'Launching a new product line', b: 0 },
          { t: 'Selling franchises', b: 1 }, { t: 'Merging with a supplier', b: 1 }, { t: 'Starting to sell online', b: 0 }], why: 'Organic = using the business\'s own resources. External = involving other businesses.' },
        { id: '1.5-6', type: 'mcq', cmd: 'Distinguish', q: 'How does a <b>joint venture</b> differ from a <b>strategic alliance</b>?', options: ['A joint venture creates a new, jointly owned business; a strategic alliance doesn\'t', 'A strategic alliance creates a new, jointly owned business; a joint venture doesn\'t', 'A joint venture always starts with a hostile takeover of one of the businesses', 'There is no real difference: both terms mean that two businesses fully merge'], answer: 0, why: 'Both are cooperation between independent firms. Only a joint venture sets up a separate business owned by the partners.' },
        { id: '1.5-7', type: 'tf', q: 'A takeover is an acquisition that the target company\'s managers do not agree to.', answer: true, why: 'True. A takeover is a hostile acquisition: the buyer gets over 50% of the shares anyway, often by buying them directly from shareholders.' },
        { id: '1.5-8', type: 'mcq', cmd: 'Explain', q: 'Why might a business <b>choose to stay small</b>?', options: ['To keep control and offer a personal service in a niche market', 'To benefit from bulk-buying discounts and other economies of scale', 'To increase its market share and become the leader in its market', 'To reduce its average costs by spreading fixed costs over more units'], answer: 0, why: 'The other three are reasons to grow. Small firms trade them for control, flexibility and closeness to customers.' },
        { id: '1.5-9', type: 'mcq', cmd: 'Identify', q: 'In franchising, the <b>franchisee</b>…', options: ['pays fees and royalties to use another firm\'s brand and business model', 'owns the brand and sells other businesses the right to use it', 'is the government agency that checks that franchises obey the law', 'is a customer who regularly buys from one of the franchise outlets'], answer: 0, why: 'The franchisor owns the brand. The franchisee buys the right to use it and runs the outlet.' }
      ],
      explain: 'Explain <b>economies and diseconomies of scale</b> to a mate using something you know: a school, a festival, a group project that got too big…'
    },

    // ------------------------------------------------------------------ 1.6
    {
      id: '1.6', title: 'Multinational companies (MNCs)', emoji: '🌍', minutes: 11, hl: false,
      goal: 'explain why businesses become multinational and evaluate the impact of MNCs on host countries.',
      hook: `Your phone was designed in one country, assembled in another from parts made in a dozen more, and sold to you by a company that might pay most of its tax somewhere else again.<br><br>When a giant company arrives in a country, does it make people there better off, or just itself?`,
      cards: [
        { title: 'What is an MNC?', html: `
          <p>A <b>multinational company (MNC)</b> is a business with operations, such as factories, offices or stores, in <b>more than one country</b>. It usually has its headquarters in one <b>home country</b>.</p>
          <p>A <b>host country</b> is a country where an MNC operates, other than its home country.</p>
          <div class="example">LEGO's headquarters are in Billund, Denmark (home country), but it makes bricks in factories in countries such as Mexico, Hungary and China (host countries). Novo Nordisk and Maersk are other Danish MNCs.</div>
          <div class="tip">Just <i>exporting</i> to other countries doesn't make a business an MNC. It needs operations abroad.</div>` },
        { title: 'Why do businesses become MNCs?', html: `
          <ul><li><b>New markets</b>: more customers when the home market is saturated.</li>
              <li><b>Lower costs</b>: cheaper labour, land or materials.</li>
              <li><b>Avoid trade barriers</b>: making goods inside a market avoids tariffs on imports.</li>
              <li><b>Access to resources</b>: oil, minerals or skilled workers.</li>
              <li><b>[[economies of scale|Economies of scale]]</b> and <b>spreading risk</b> across countries.</li></ul>
          <p>MNCs have grown with <b>globalization</b>: the growing integration of the world's economies through trade, investment, technology and the movement of people.</p>` },
        { title: 'Benefits for the host country', html: `
          <ul><li><b>Jobs</b>, often better paid than local alternatives.</li>
              <li><b>Skills and technology transfer</b>: local workers and firms learn new methods.</li>
              <li><b>Tax revenue</b> for the government.</li>
              <li><b>Foreign direct investment (FDI)</b>: money invested in factories, offices and infrastructure.</li>
              <li><b>Local suppliers</b> win orders (a multiplier effect).</li>
              <li>More <b>choice</b> and often lower prices for consumers.</li></ul>` },
        { title: 'Drawbacks for the host country', html: `
          <ul><li><b>Profits repatriated</b>: much of the profit goes back to the home country.</li>
              <li><b>Local businesses squeezed out</b> by competition they can't match.</li>
              <li><b>Exploitation</b>: low pay or poor conditions where labour laws are weak.</li>
              <li><b>Environmental damage</b> and use of natural resources.</li>
              <li><b>Cultural impact</b>: local traditions and brands replaced by global ones.</li>
              <li><b>Footloose</b>: the MNC can leave quickly if costs rise elsewhere, cutting jobs overnight.</li>
              <li><b>Tax avoidance</b>: shifting profits to low-tax countries.</li></ul>
          <div class="tip">"Evaluate the impact of an MNC on a host country" = weigh benefits against drawbacks and say what it <b>depends on</b>: the host's laws, how many local suppliers are used, whether the jobs are skilled, how long the MNC stays.</div>` }
      ],
      labs: [
        {
          type: 'sort', title: 'Good news or bad news for the host?',
          challenge: 'Sort all 10 effects correctly in one go.',
          buckets: ['Benefit', 'Drawback'],
          items: [
            { t: '👷 2,000 new factory jobs', b: 0 },
            { t: '🎓 Local engineers trained in new technology', b: 0 },
            { t: '💰 Corporate tax paid to the host government', b: 0 },
            { t: '🛣️ New roads built to reach the factory', b: 0 },
            { t: '📦 Local firms win contracts to supply parts', b: 0 },
            { t: '✈️ Most profit sent back to headquarters abroad', b: 1 },
            { t: '🏪 Small local shops close because they can\'t compete', b: 1 },
            { t: '🏭 River polluted by factory waste', b: 1 },
            { t: '🚪 Factory moves to a cheaper country after 6 years', b: 1 },
            { t: '🧾 Profits booked in a tax haven to pay less tax', b: 1 }
          ]
        },
        {
          type: 'scenarios', title: 'Host government\'s call',
          challenge: 'Make the best decision as the host government in all 3 cases.',
          items: [
            { s: 'An MNC will build a factory with 3,000 jobs if it pays no corporate tax for 15 years.', options: [
              { t: 'Negotiate: a shorter tax break, plus commitments to train and hire locally', ok: true, fb: 'Yes: keeps the jobs and FDI while getting more lasting benefits for the country.' },
              { t: 'Accept anything: jobs are all that matters', ok: false, fb: 'With no tax and no local commitments, the country may gain little if the MNC leaves after 15 years.' },
              { t: 'Refuse all MNCs', ok: false, fb: 'Loses the jobs, investment and skills entirely.' }] },
            { s: 'An MNC\'s new mine will bring big export earnings, but villagers say it will pollute their water.', options: [
              { t: 'Allow it only with strict environmental rules and monitoring', ok: true, fb: 'Yes: the benefits are captured while the main drawback is controlled.' },
              { t: 'Allow it with no conditions', ok: false, fb: 'The villagers bear the costs, and the MNC has no reason to prevent pollution.' },
              { t: 'Ignore the villagers: they have low power', ok: false, fb: 'Their health and livelihoods are at stake, and protests can become a national issue.' }] },
            { s: 'A global coffee chain wants to open 50 cafés. Local café owners fear they will close.', options: [
              { t: 'Allow it, and support local cafés to stand out (quality, local character)', ok: true, fb: 'Yes: consumers get choice and jobs are created, and local businesses compete on what makes them different.' },
              { t: 'Ban the chain to protect local cafés', ok: false, fb: 'This protects some owners but takes away choice, jobs and investment, and may deter other investors.' },
              { t: 'Give the chain a monopoly', ok: false, fb: 'No competition means higher prices and worse service.' }] }
          ]
        }
      ],
      worked: {
        title: 'Evaluate an MNC\'s impact (exam style)',
        intro: `<p><b>Question:</b> NordWear, a Danish sportswear MNC, plans to open a factory in Vietnam employing 1,500 people at wages 20% above the local average. It will import most materials and send profits back to Denmark. <i>Evaluate</i> the impact on Vietnam. [10 marks]</p>`,
        steps: [
          { prompt: 'Which benefits can you see in the case?', answer: '<b>1,500 jobs</b> at wages <b>20% above average</b> raise incomes, and the factory is <b>FDI</b>. Workers may also learn new skills.' },
          { prompt: 'Which drawbacks can you see?', answer: 'Most materials are <b>imported</b>, so few orders for local suppliers. <b>Profits are repatriated</b> to Denmark, so less money stays in Vietnam.' },
          { prompt: 'What other risk should you mention, even if the case doesn\'t?', answer: 'The factory may be <b>footloose</b>: if wages rise, NordWear could move to a cheaper country. Working conditions also depend on local labour laws being enforced.' },
          { prompt: 'Conclusion: what does the overall impact depend on?', answer: '"Overall the impact is likely to be positive in the short term, <i>because</i> 1,500 well-paid jobs matter, but the long-term benefit <b>depends on</b> whether NordWear starts buying from local suppliers and stays for many years. The government could encourage both."' }
        ],
        takeaway: 'For "evaluate", use the case data for both sides, then make a judgement that says what it depends on. A conclusion that just repeats points earns little.'
      },
      quiz: [
        { id: '1.6-1', type: 'mcq', cmd: 'Define', q: 'A <b>multinational company</b> is a business that…', options: ['has operations in more than one country', 'exports its products to many countries', 'is owned by several governments', 'sells only online to international customers'], answer: 0, why: 'An MNC has operations (factories, offices, stores) abroad. Exporting alone isn\'t enough.' },
        { id: '1.6-2', type: 'mcq', cmd: 'Identify', q: 'An MNC sends most of its profits back to its home country. For the host country this is…', options: ['a drawback: less of the money stays there', 'a benefit: it attracts more foreign investment', 'a benefit: it lowers prices for consumers there', 'neither: it has no effect on the host country'], answer: 0, why: 'Repatriated profits reduce the money circulating in the host economy.' },
        { id: '1.6-3', type: 'sort', q: 'Benefit or drawback for the host country?', buckets: ['Benefit', 'Drawback'], items: [
          { t: 'Transfer of technology and skills', b: 0 }, { t: 'Local firms forced out of business', b: 1 }, { t: 'More tax revenue', b: 0 },
          { t: 'The MNC can leave at short notice', b: 1 }, { t: 'New jobs', b: 0 }, { t: 'Damage to the environment', b: 1 }], why: 'Jobs, skills and tax are the main benefits. Competition with local firms, footloose behaviour and pollution are key drawbacks.' },
        { id: '1.6-4', type: 'mcq', cmd: 'Explain', q: 'Why might a car maker open a factory <b>inside</b> a trading bloc such as the EU?', options: ['To avoid tariffs on cars imported into the bloc', 'Because wages inside the bloc are always lower', 'To reduce its market share inside the trading bloc', 'Because exporting cars into the bloc is illegal'], answer: 0, why: 'Producing inside the market avoids import tariffs and brings the firm closer to customers.' },
        { id: '1.6-5', type: 'tf', q: 'An MNC is "footloose" when it can easily move its operations to another country.', answer: true, why: 'True. This is a risk for host countries: jobs can disappear quickly if costs rise.' },
        { id: '1.6-6', type: 'mcq', cmd: 'Define', q: '<b>Foreign direct investment (FDI)</b> is…', options: ['investment by a business from one country in operations in another country', 'money that one government lends to another government to build infrastructure', 'buying goods and services that were produced in another country (imports)', 'a special tax that governments charge foreign companies operating in the country'], answer: 0, why: 'E.g. a Danish firm building a factory in Mexico is FDI in Mexico.' },
        { id: '1.6-7', type: 'mcq', cmd: 'Evaluate', q: 'Which is the <b>strongest</b> conclusion to "Evaluate the impact of an MNC on a host country"?', options: ['It depends: positive if it uses local suppliers, trains staff and stays long-term; negative if profits and materials all flow out', 'MNCs are always good for host countries, because they create jobs, pay taxes and bring in new technology and investment', 'MNCs are always bad for host countries, because they send profits home, squeeze out local firms and can leave at any time', 'MNCs have no real impact on host countries, because their operations are too small compared with the rest of the economy'], answer: 0, why: 'A strong evaluation makes a judgement and says what it depends on. One-sided answers miss the top marks.' },
        { id: '1.6-8', type: 'tf', q: 'Globalization makes it easier for businesses to become MNCs.', answer: true, why: 'True. Lower trade barriers, cheaper transport and better communication make operating in many countries easier.' }
      ],
      explain: 'Pick an MNC you use (Spotify, Nike, McDonald\'s, Apple…). Explain to a mate one way it helps and one way it might harm a country where it operates.'
    }
  ],
  formulas: [
    { group: '1.5 Growth and evolution', items: [
      { name: 'Average cost', f: M`\text{Average cost} = \frac{\text{total costs}}{\text{output}}`, note: 'Not on the IB formula sheet, but you need it to show economies of scale.' }] }
  ]
};
