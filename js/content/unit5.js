// Unit 5: Operations management (IB Business Management guide, first assessment 2024).
// Running case: SoleFlip's operations. The Copenhagen workshop customises pairs one by one, cleans in batches,
// and SoleFlip Originals (Unit 4) are mass-produced by a partner factory in Porto. Break-even in 5.5 uses the
// custom-sneaker figures from 3.3 ($120 price, $35 variable cost, $1,500 fixed costs a month); the workshop's
// normal output of 300 pairs a week (2.7) sets its capacity in 5.6.

import { M, F, A, tbl } from './helpers.js';

const sf = '<b>SoleFlip</b>';

export const unit5 = {
  id: '5',
  title: 'Operations management',
  emoji: '🏭',
  blurb: 'Marketing promised the customers a great sneaker. Now someone has to make it: on time, at the right cost, without defects or running out of stock, and without wrecking the planet. You run SoleFlip\'s workshop and its Porto factory partnership for this unit.',
  sections: [
    // ------------------------------------------------------------------ 5.1
    {
      id: '5.1', title: 'Introduction to operations management', emoji: '⚙️', minutes: 8, hl: false,
      goal: 'explain the role of operations management, its links with other functions, and economic, social and environmental sustainability.',
      hook: `A customer pays ${sf} $150 for a custom pair. Between the click and the delivery, someone orders a blank sneaker, paints it, checks it, packs it and ships it, in 5 days.<br><br>That chain of jobs is <b>operations</b>. Get it wrong and the best marketing in the world just creates angry customers faster.`,
      cards: [
        { title: 'What is operations management?', html: `
          <p><b>Operations management</b> is planning, organizing and controlling the process of turning <b>inputs</b> (materials, labour, machines, energy) into <b>outputs</b> (goods and services) that customers want.</p>
          <p>Operations aim for the right <b>quality</b>, at the right <b>cost</b>, at the right <b>time</b>, with as little waste as possible.</p>
          <div class="example">${sf}'s workshop: inputs = blank sneakers, paint, laser machine, Omar's skill. Process = design, paint, dry, check. Output = a finished custom pair. The [[added value]] is the difference between the $150 price and the cost of the inputs.</div>` },
        { title: 'Goods, services and the other functions', html: `
          <p>Operations exist in every sector: a factory makes goods, a bank or a festival delivers a service. Most businesses do both: ${sf} makes sneakers (goods) and cleans them (a service).</p>
          <p>Operations depends on the other functions:</p>
          <ul><li><b>Marketing</b> forecasts demand, so operations knows how much to make.</li>
              <li><b>Finance</b> pays for machines and stock.</li>
              <li><b>HR</b> provides trained staff.</li></ul>
          <div class="tip">"Analyse the impact on operations" questions reward links: e.g. a marketing campaign → higher demand → more stock, overtime, perhaps a second machine.</div>` },
        { title: 'Sustainability in operations', html: `
          <p><b>Sustainability</b> means meeting today's needs without harming the ability of future generations to meet theirs. Operations can be sustainable in three ways:</p>
          <ul><li><b>Economic sustainability</b>: the business can keep running profitably in the long term (efficient use of resources, not wasting money).</li>
              <li><b>Social sustainability</b>: treating people fairly: safe conditions and fair pay for workers (including suppliers' workers), and a positive effect on communities.</li>
              <li><b>Environmental sustainability</b>: using fewer resources, less energy and producing less waste and pollution.</li></ul>
          <div class="example">${sf}: soles made from recycled sneakers (environmental), checking that the Porto factory pays fair wages (social), and keeping costs low enough to stay profitable (economic).</div>` },
        { title: 'Trade-offs', html: `
          <p>The three kinds of sustainability can clash:</p>
          <ul><li>Recycled materials and fair wages may raise costs and cut profit (environmental/social vs economic).</li>
              <li>Cheap fast shipping by air is quick for customers but bad for emissions.</li></ul>
          <p>But they can also support each other: less waste saves money, and customers may pay more for sustainable products (a [[unique selling point|USP]]).</p>
          <div class="tip">In evaluation questions on sustainability, show the trade-off, then judge whether the long-term benefits (brand, loyalty, regulation) outweigh the short-term costs.</div>` }
      ],
      labs: [
        {
          type: 'sort', title: 'Which kind of sustainability?',
          challenge: 'Sort all 9 correctly in one go.',
          buckets: ['Economic', 'Social', 'Environmental'],
          items: [
            { t: '💰 Cutting waste so each pair costs less to make', b: 0 },
            { t: '📈 Keeping prices high enough to make a profit every year', b: 0 },
            { t: '🏦 Building a cash reserve for bad years', b: 0 },
            { t: '🦺 Safe working conditions in the Porto factory', b: 1 },
            { t: '🤝 Paying suppliers\' workers a living wage', b: 1 },
            { t: '🏫 Free workshops for local young people', b: 1 },
            { t: '♻️ Soles made from recycled sneakers', b: 2 },
            { t: '🚆 Shipping by train instead of by air', b: 2 },
            { t: '☀️ Solar panels on the workshop roof', b: 2 }
          ]
        }
      ],
      worked: {
        title: 'Analyse a sustainability decision (exam style)',
        intro: `<p><b>Question:</b> ${sf} could switch Originals to soles made from recycled sneakers. This raises the cost per pair from $50 to $54. <i>Analyse</i> the impact on ${sf}'s sustainability. [6 marks]</p>`,
        steps: [
          { prompt: 'Which kind of sustainability improves?', answer: '<b>Environmental</b>: fewer old sneakers go to landfill and less new rubber is used.' },
          { prompt: 'What is the economic risk?', answer: 'Cost per pair rises by $4 (8%). At a $90 price, profit per pair falls from $40 to $36, unless the price rises.' },
          { prompt: 'How could it help economically too?', answer: 'It strengthens the USP and brand with sustainability-minded teens, so SoleFlip may sell more pairs or charge slightly more.' },
          { prompt: 'Any social angle?', answer: 'Collecting old sneakers through stores could involve the community (a "bring back your old pair" scheme) and build loyalty.' }
        ],
        takeaway: 'Name the type of sustainability, use the numbers, and show that the types can conflict and support each other.'
      },
      quiz: [
        { id: '5.1-1', type: 'mcq', cmd: 'Define', q: '<b>Operations management</b> is…', options: ['planning and controlling the process of turning inputs into outputs', 'finding, training and keeping the right staff for the business', 'identifying and satisfying customers\' needs and wants profitably', 'recording and reporting the money that flows in and out of a business'], answer: 0, why: 'Operations turns inputs into goods and services. The others describe HR, marketing and finance.' },
        { id: '5.1-2', type: 'mcq', cmd: 'Identify', q: 'A business pays its suppliers\' workers a living wage. This is mainly…', options: ['social sustainability', 'economic sustainability', 'environmental sustainability', 'operations efficiency'], answer: 0, why: 'Fair treatment of people (including in the supply chain) is social sustainability.' },
        { id: '5.1-3', type: 'tf', q: 'Environmental sustainability and economic sustainability always conflict.', answer: false, why: 'False. They can conflict (green materials cost more), but cutting waste and energy use also saves money.' },
        { id: '5.1-4', type: 'num', cmd: 'Calculate', q: 'Recycled soles raise the cost of a pair from <b>$50</b> to <b>$54</b>. The price stays at <b>$90</b>. By what <b>percentage</b> does the profit per pair fall?', answer: 10, unit: '%', display: '10%', hint: 'Profit per pair before and after, then the % change.', why: 'Profit falls from $40 to $36: a $4 fall. 4 ÷ 40 × 100 = 10%.' },
        { id: '5.1-5', type: 'mcq', cmd: 'Explain', q: 'Why does operations depend on <b>marketing</b>?', options: ['Marketing\'s sales forecasts tell operations how much to produce', 'Marketing sets the wages of the workers who make the product', 'Marketing decides which new machines the workshop should buy next year', 'Marketing records the costs of every pair of sneakers made'], answer: 0, why: 'Operations plans output, stock and staff around the demand marketing expects.' },
        { id: '5.1-6', type: 'sort', q: 'Input or output of SoleFlip\'s workshop?', buckets: ['Input', 'Output'], items: [
          { t: 'Blank sneakers', b: 0 }, { t: 'Paint and laces', b: 0 }, { t: 'Omar\'s labour', b: 0 }, { t: 'Electricity', b: 0 },
          { t: 'A finished custom pair', b: 1 }, { t: 'A cleaned pair returned to a customer', b: 1 }], why: 'Inputs are the resources used. Outputs are the goods and services produced.' }
      ],
      explain: 'Pick a business you use (a takeaway, a gym, a game studio). Explain to a mate its <b>inputs</b>, its <b>outputs</b>, and one way it could be more <b>sustainable</b>.'
    },

    // ------------------------------------------------------------------ 5.2
    {
      id: '5.2', title: 'Operations methods', emoji: '🔧', minutes: 10, hl: false,
      goal: 'explain job, batch, mass/flow production and mass customization, and choose the right method for a product.',
      hook: `${sf} makes sneakers three different ways. Omar paints one-off designs, each one different. The cleaning team cleans 40 pairs at a time. And the Porto factory makes 2,000 identical pairs of Originals on a production line.<br><br>Why not do everything the same way?`,
      cards: [
        { title: 'Job production', html: `
          <p><b>Job production</b> makes a single, unique product to each customer's order, usually by skilled workers.</p>
          <p>✅ Exactly what the customer wants; high prices; motivating, varied work.<br>❌ Slow, high cost per unit, needs skilled (expensive) staff, no [[economies of scale]].</p>
          <div class="example">Omar's one-off custom sneakers; a wedding dress; a bridge; a tattoo.</div>` },
        { title: 'Batch production', html: `
          <p><b>Batch production</b> makes a group (batch) of identical products together; then the process switches to the next batch.</p>
          <p>✅ Lower cost per unit than job; some variety; flexible.<br>❌ Machines stop while switching between batches (downtime), and stock builds up between stages.</p>
          <div class="example">${sf} cleans 40 pairs of white sneakers, then 40 pairs of suede. A bakery makes 200 croissants, then 200 rolls.</div>` },
        { title: 'Mass (flow) production', html: `
          <p><b>Mass production</b> (flow production) makes large numbers of identical products continuously, often on a production line.</p>
          <p>✅ Very low cost per unit (economies of scale), consistent quality, automation.<br>❌ Huge investment in machinery, inflexible, repetitive work can demotivate, and a breakdown stops everything.</p>
          <div class="example">The Porto factory making 2,000 identical pairs of Originals; Coca-Cola; LEGO bricks.</div>` },
        { title: 'Mass customization', html: `
          <p><b>Mass customization</b> combines the low costs of mass production with some personal choice for each customer, usually using technology.</p>
          <p>✅ Customers get a personalised product at a reasonable price; can charge a premium.<br>❌ Needs flexible technology and good systems; more complex than pure mass production.</p>
          <div class="example">Nike By You lets you pick colours online; Dell builds laptops to order. ${sf} could let customers pick a colourway and initials for Originals, laser-engraved on the production line.</div>
          <div class="tip">Choose the method that fits the market: how many units, how much variety customers want, and the business's budget and skills.</div>` }
      ],
      labs: [
        {
          type: 'sort', title: 'Which method?',
          challenge: 'Sort all 8 correctly in one go.',
          buckets: ['Job', 'Batch', 'Mass', 'Mass customization'],
          items: [
            { t: '🎨 A one-off hand-painted sneaker', b: 0 },
            { t: '💍 A made-to-measure engagement ring', b: 0 },
            { t: '🥐 200 croissants, then 200 rolls', b: 1 },
            { t: '👕 A print shop making 50 band T-shirts per order', b: 1 },
            { t: '🥤 Millions of identical cans of cola', b: 2 },
            { t: '🧱 Billions of identical LEGO bricks', b: 2 },
            { t: '👟 Online-designed sneakers built on a production line', b: 3 },
            { t: '💻 Laptops built to each buyer\'s chosen specification', b: 3 }
          ]
        },
        {
          type: 'scenarios', title: 'Choose the method',
          challenge: 'Pick the best method for all 3 products.',
          items: [
            { s: 'Originals sell 2,000 identical pairs a month, and SoleFlip wants the lowest possible cost per pair.', options: [
              { t: 'Mass production at the Porto factory', ok: true, fb: 'Yes: high volume of identical products = mass production and economies of scale.' },
              { t: 'Job production by Omar', ok: false, fb: 'One at a time, Omar would need years and the cost per pair would be far too high.' },
              { t: 'Batch production in the Copenhagen workshop', ok: false, fb: 'Possible, but the workshop is too small and switching between batches adds cost.' }] },
            { s: 'A music festival wants 30 sneakers, each designed with a different artist for a charity auction.', options: [
              { t: 'Job production', ok: true, fb: 'Yes: each pair is unique, made to order by skilled designers.' },
              { t: 'Mass production', ok: false, fb: 'Mass production makes identical products: the opposite of 30 unique pairs.' },
              { t: 'Batch production', ok: false, fb: 'Batches are groups of identical items, but each pair here is different.' }] },
            { s: 'Customers want Originals in their own colourway with their initials, at close to the normal price.', options: [
              { t: 'Mass customization', ok: true, fb: 'Yes: flexible machines personalise each pair on a mass-production line.' },
              { t: 'Job production', ok: false, fb: 'Too slow and expensive for close to the normal price.' },
              { t: 'Pure mass production', ok: false, fb: 'Identical products can\'t carry each customer\'s colours and initials.' }] }
          ]
        }
      ],
      worked: {
        title: 'Batch or mass? (exam style)',
        intro: `<p><b>Question:</b> Cleaning orders have grown to 1,000 pairs a week. ${sf} currently cleans in batches of 40. It could buy an automated cleaning line for $60,000 that cleans continuously. <i>Analyse</i> a move from batch to flow production. [6 marks]</p>`,
        steps: [
          { prompt: 'Main advantage of flow production here?', answer: 'Lower cost per pair: continuous output, no downtime between batches, fewer staff per pair ([[economies of scale]]).' },
          { prompt: 'Main disadvantage?', answer: 'A $60,000 investment, and less flexibility: suede, leather and canvas need different treatment, which a single line handles badly.' },
          { prompt: 'Effect on staff?', answer: 'Fewer, less skilled jobs and more repetitive work: possible [[resistance to change]] and lower [[motivation]].' },
          { prompt: 'What does the decision depend on?', answer: 'Whether demand stays at 1,000+ pairs a week (to use the line fully), and how varied the materials are.' }
        ],
        takeaway: 'Link the method to volume and variety, and remember the effects on costs, flexibility and people.'
      },
      quiz: [
        { id: '5.2-1', type: 'mcq', cmd: 'Define', q: '<b>Batch production</b> means…', options: ['making a group of identical items, then switching to a different group', 'making one unique product to each customer\'s individual order', 'making identical products continuously on a production line', 'personalising each product on a flexible, high-volume line'], answer: 0, why: 'Batch = groups of identical items, one batch at a time. The others are job, mass and mass customization.' },
        { id: '5.2-2', type: 'mcq', cmd: 'Identify', q: 'Which is a <b>disadvantage of mass production</b>?', options: ['High set-up costs and little flexibility to change the product', 'A high cost per unit because there are no economies of scale', 'Every product is different, so quality is hard to keep consistent', 'It needs highly skilled craftspeople to make each item by hand'], answer: 0, why: 'Mass production has a low cost per unit but needs big investment and is inflexible.' },
        { id: '5.2-3', type: 'mcq', cmd: 'Identify', q: 'Which product is best suited to <b>job production</b>?', options: ['A custom-built gaming PC for a streamer', 'One million identical bottles of a best-selling shampoo', 'Daily batches of bread rolls', 'Standard white T-shirts'], answer: 0, why: 'A one-off product built to one customer\'s needs = job production.' },
        { id: '5.2-4', type: 'tf', q: 'Mass customization combines low unit costs with some personal choice for each customer.', answer: true, why: 'True. Flexible technology lets mass-production lines personalise products (e.g. Nike By You).' },
        { id: '5.2-5', type: 'num', cmd: 'Calculate', q: 'An automated cleaning line costs <b>$60,000</b> and cuts the cost of cleaning a pair from <b>$9</b> to <b>$5</b>. How many pairs must be cleaned to save the $60,000?', answer: 15000, display: '15,000 pairs', hint: 'Saving per pair = 9 − 5', why: 'Saving = $4 a pair. 60,000 ÷ 4 = 15,000 pairs (15 weeks at 1,000 a week).' },
        { id: '5.2-6', type: 'mcq', cmd: 'Explain', q: 'Why does <b>batch production</b> cause downtime?', options: ['Machines must be cleaned or reset when switching between batches', 'Workers take longer breaks because the work is very repetitive', 'Each product is unique, so every item needs a new design first', 'The production line runs nonstop, so maintenance can never happen'], answer: 0, why: 'Between batches, machines are changed over (e.g. switching cleaning fluids), and nothing is produced.' }
      ],
      explain: 'Think of a food place you know. Explain to a mate whether it uses <b>job</b>, <b>batch</b> or <b>mass</b> production (or a mix), and why that fits what it sells.'
    },

    // ------------------------------------------------------------------ 5.3
    {
      id: '5.3', title: 'Lean management and quality management', emoji: '✅', minutes: 14, hl: true,
      goal: 'explain lean production (kaizen, JIT, kanban, andon), cradle-to-cradle design, quality control vs quality assurance, TQM and quality standards.',
      hook: `Last month <b>12 of 240</b> custom pairs came back: smudged paint, wrong size, a missing lace. Each return cost ${sf} the pair, the shipping and a 1-star review.<br><br>Should Noah hire someone to check every pair at the end? Or is there a smarter way to stop mistakes happening at all?`,
      cards: [
        { title: 'Lean production', html: `
          <p><span class="tag">HL</span> <b>Lean production</b> means making products with as little waste as possible: of time, materials, space, energy and human effort.</p>
          <p>Typical waste: making too much, waiting, unnecessary moving or transport, extra processing, too much stock, defects, and unused talent.</p>
          <p>✅ Lower costs, faster delivery, better quality, less environmental impact.<br>❌ Needs trained, committed staff and reliable suppliers; little slack if something goes wrong.</p>` },
        { title: 'Lean tools: kaizen, JIT, kanban, andon', html: `
          <ul><li><b>Kaizen</b> (continuous improvement): many small improvements, suggested by the workers who do the job, made all the time.</li>
              <li><b>Just-in-time (JIT)</b>: materials arrive exactly when needed, so almost no stock is held.</li>
              <li><b>Kanban</b>: a visual signal (card, board, empty box) that tells the previous stage to make or deliver more.</li>
              <li><b>Andon</b>: a signal (light, cord, button) any worker can use to stop the line when there's a problem, so it's fixed at once.</li></ul>
          <div class="example">Toyota made these famous. In ${sf}'s workshop: an empty paint tray on a shelf is the kanban to reorder; Omar can hit a red button (andon) if the laser engraves badly.</div>` },
        { title: 'Cradle to cradle', html: `
          <p><b>Cradle-to-cradle</b> design and manufacturing means designing products so that, at the end of their life, all their materials can be safely reused, recycled or returned to nature, instead of thrown away ("cradle to grave").</p>
          <p>It links lean thinking with environmental sustainability: no waste, ever.</p>
          <div class="example">${sf}'s "bring back your old pair" scheme: old soles are ground up into new soles for Originals. Laces are made from recycled plastic bottles and can be recycled again.</div>` },
        { title: 'Quality control vs quality assurance', html: `
          <p><b>Quality control</b> checks finished products (or samples) for defects at the end of production, by inspectors.</p>
          <p>❌ Finds mistakes after they happen, so waste has already been created; workers may stop caring ("the inspector will catch it").</p>
          <p><b>Quality assurance</b> aims to prevent defects by building quality into every stage of production, with every worker responsible for the quality of their own work.</p>
          <p>✅ Less waste and rework, motivated staff. ❌ Needs training and a culture change.</p>
          <div class="tip">Quality control = detection (find the faults). Quality assurance = prevention (stop the faults). That one-line contrast earns the "distinguish" marks.</div>` },
        { title: 'TQM, quality circles and benchmarking', html: `
          <ul><li><b>Total quality management (TQM)</b>: a culture where everyone, at every level and in every department, is committed to quality and to satisfying customers.</li>
              <li><b>Quality circles</b>: small groups of workers who meet regularly to find and solve quality problems.</li>
              <li><b>Benchmarking</b>: comparing your processes and performance with the best in the industry (or in other industries) and copying good practice.</li></ul>
          <div class="example">${sf} benchmarks its 5-day delivery against Zalando's 2 days, and Omar's quality circle finds that most smudges happen when pairs are packed before the paint has dried for 24 hours.</div>` },
        { title: 'National and international quality standards', html: `
          <p><b>Quality standards</b> are awards given to businesses whose processes meet set requirements, checked by outside inspectors.</p>
          <ul><li><b>ISO 9001</b>: an international standard for quality management systems.</li>
              <li>Others cover the environment (ISO 14001), product safety (the CE mark in the EU) or fair trade.</li></ul>
          <p>✅ Reassures customers and business buyers (some only buy from certified suppliers), helps exports, improves processes.<br>❌ Costly and time-consuming to get and keep, lots of paperwork, and it certifies the process, not the product itself.</p>` }
      ],
      labs: [
        {
          type: 'sort', title: 'Name the lean tool',
          challenge: 'Sort all 8 correctly in one go.',
          buckets: ['Kaizen', 'JIT', 'Kanban', 'Andon'],
          items: [
            { t: '💡 Workers suggest one small improvement every week', b: 0 },
            { t: '📉 Packing time cut by 10 seconds, then 10 more', b: 0 },
            { t: '🚚 Blanks delivered each morning for that day only', b: 1 },
            { t: '🏭 A car plant holding only two hours of parts', b: 1 },
            { t: '🗂️ A card in an empty box triggers the next delivery', b: 2 },
            { t: '📋 A board showing which tasks need doing next', b: 2 },
            { t: '🚨 A worker pulls a cord to stop the line', b: 3 },
            { t: '🔴 A red light shows the laser station has a fault', b: 3 }
          ]
        },
        {
          type: 'scenarios', title: 'Fix the quality problem',
          challenge: 'Choose the best response in all 3 cases.',
          items: [
            { s: '5% of custom pairs come back with smudged paint. Inspectors at the end catch some, but not all.', options: [
              { t: 'Quality assurance: a quality circle finds the cause and fixes the process', ok: true, fb: 'Yes: prevent the smudges at source (e.g. 24 hours of drying) instead of hunting for them at the end.' },
              { t: 'Add a second inspector at the end', ok: false, fb: 'More detection, but the faulty pairs (and their cost) are still being made.' },
              { t: 'Lower the price so customers accept smudges', ok: false, fb: 'It damages the brand and doesn\'t fix anything.' }] },
            { s: 'A German department store will only stock Originals if SoleFlip can prove it has a reliable quality management system.', options: [
              { t: 'Get ISO 9001 certification', ok: true, fb: 'Yes: an international, independently checked standard that business buyers trust.' },
              { t: 'Write "high quality" on every box', ok: false, fb: 'Anyone can claim quality; the buyer wants independent proof.' },
              { t: 'Offer a bigger discount instead', ok: false, fb: 'The buyer\'s condition is about quality systems, not price.' }] },
            { s: '<span class="tag">HL</span> SoleFlip\'s delivery takes 5 days; the best online retailers take 2.', options: [
              { t: 'Benchmark the best retailers\' processes and adapt them', ok: true, fb: 'Yes: benchmarking learns from the best, then improves step by step (kaizen).' },
              { t: 'Ignore it: SoleFlip\'s products are unique', ok: false, fb: 'Customers compare service across all online shopping, not just sneakers.' },
              { t: 'Promise 2 days without changing anything', ok: false, fb: 'Broken promises cause worse reviews than a slower honest delivery time.' }] }
          ]
        }
      ],
      worked: {
        title: 'From inspection to prevention (exam style)',
        intro: `<p><b>Question:</b> In March, ${sf}'s workshop made <b>240</b> custom pairs and <b>12</b> were returned as defective. Each defect costs $85 (materials, shipping, refund). <i>Calculate</i> the defect rate and <i>evaluate</i> switching from quality control to quality assurance. [8 marks]</p>`,
        steps: [
          { prompt: 'Defect rate?', answer: '12 ÷ 240 × 100 = <b>5%</b>' },
          { prompt: 'Monthly cost of defects?', answer: '12 × $85 = <b>$1,020</b>, plus the cost of bad reviews.' },
          { prompt: 'What would quality assurance involve at SoleFlip?', answer: 'Each worker checks their own stage, a quality circle finds root causes (packing before paint is dry), an andon button stops work when something looks wrong, and kaizen improvements every week.' },
          { prompt: 'Drawbacks?', answer: 'Training time and cost, slower output at first, and staff may resist extra responsibility.' },
          { prompt: 'Judgement.', answer: '"Switch to quality assurance: preventing just half the defects saves about $510 a month and protects the brand, which matters more than the training costs. Keep a final sample check during the change."' }
        ],
        takeaway: 'Put a cost on poor quality first: it turns a vague "quality is good" answer into a convincing evaluation.'
      },
      quiz: [
        { id: '5.3-1', type: 'mcq', cmd: 'Distinguish', q: '<span class="tag">HL</span> What is the key difference between <b>quality control</b> and <b>quality assurance</b>?', options: ['Control detects defects at the end; assurance prevents them at every stage', 'Control prevents defects at every stage; assurance detects them at the end', 'Control is done by machines; assurance is done only by the managers', 'Control is used for services; assurance is used only for physical goods'], answer: 0, why: 'Quality control = inspection and detection. Quality assurance = building quality into every stage so defects don\'t happen.' },
        { id: '5.3-2', type: 'mcq', cmd: 'Define', q: '<span class="tag">HL</span> <b>Kaizen</b> means…', options: ['continuous improvement through many small changes suggested by workers', 'materials arriving exactly when they are needed so little stock is held', 'a visual signal that tells the previous stage to produce or deliver more', 'a signal any worker can use to stop the line when there is a problem'], answer: 0, why: 'Kaizen = continuous small improvements. The others describe JIT, kanban and andon.' },
        { id: '5.3-3', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> Of <b>240</b> pairs made, <b>12</b> were defective. What is the <b>defect rate</b>?', answer: 5, unit: '%', display: '5%', hint: 'Defective units ÷ total output × 100', why: '12 ÷ 240 × 100 = 5%.' },
        { id: '5.3-4', type: 'mcq', cmd: 'Identify', q: '<span class="tag">HL</span> A product is designed so all its materials can be reused or safely returned to nature. This is…', options: ['cradle-to-cradle design', 'quality control', 'benchmarking', 'just-in-time'], answer: 0, why: 'Cradle-to-cradle = nothing is wasted at the end of the product\'s life.' },
        { id: '5.3-5', type: 'tf', q: '<span class="tag">HL</span> ISO 9001 certification guarantees that every product a business makes is free of defects.', answer: false, why: 'False. It certifies that the quality management <i>process</i> meets the standard, not that every product is perfect.' },
        { id: '5.3-6', type: 'mcq', cmd: 'Explain', q: '<span class="tag">HL</span> What is a risk of <b>lean production</b> with very little stock?', options: ['A late delivery or breakdown can stop production quickly', 'The business must rent extra warehouse space for all its stock', 'More products become defective because there is no inspection', 'Workers have less say in how their own jobs are organized'], answer: 0, why: 'With no spare stock or slack, any disruption in the supply chain halts production.' },
        { id: '5.3-7', type: 'mcq', cmd: 'Identify', q: '<span class="tag">HL</span> SoleFlip compares its delivery times with Zalando\'s and copies its best practices. This is…', options: ['benchmarking', 'a quality circle', 'kanban', 'total quality management'], answer: 0, why: 'Benchmarking = comparing with the best and learning from them.' },
        { id: '5.3-8', type: 'sort', q: '<span class="tag">HL</span> Quality control or quality assurance?', buckets: ['Quality control', 'Quality assurance'], items: [
          { t: 'Inspectors check samples at the end', b: 0 }, { t: 'Faulty pairs are rejected before shipping', b: 0 }, { t: 'A separate team finds defects', b: 0 },
          { t: 'Every worker checks their own stage', b: 1 }, { t: 'Quality circles fix root causes', b: 1 }, { t: 'Training so mistakes don\'t happen', b: 1 }], why: 'Control finds faults after production; assurance prevents them throughout.' }
      ],
      explain: 'Think of a time something you bought was faulty. Explain to a mate whether the business used <b>quality control</b> or <b>quality assurance</b>, and how one <b>lean</b> idea could have stopped it.'
    },

    // ------------------------------------------------------------------ 5.4
    {
      id: '5.4', title: 'Location', emoji: '📍', minutes: 10, hl: false,
      goal: 'explain the factors that affect location decisions and the ways of reorganizing production: outsourcing, offshoring, insourcing and reshoring.',
      hook: `${sf}'s Copenhagen workshop is full, and the rent just went up 20%. Freja wants to move to Køge, 40 minutes away, where rent is half. Noah says customers love dropping in. Sami asks: why not move it all to Porto, next to the factory?<br><br>How do you choose where a business should be?`,
      cards: [
        { title: 'Quantitative location factors', html: `
          <p>Factors you can put a number on:</p>
          <ul><li><b>Cost of land, rent and building</b>.</li>
              <li><b>Labour costs</b>: wages differ hugely between countries and regions.</li>
              <li><b>Transport costs</b>: to bring in materials and get products to customers.</li>
              <li><b>Government incentives</b>: grants, tax breaks or cheap land in some regions; and taxes, tariffs and regulation that add costs.</li></ul>
          <div class="example">Køge rent: $1,500 a month vs $3,000 in Copenhagen. Porto wages are about half Danish wages.</div>` },
        { title: 'Qualitative location factors', html: `
          <ul><li><b>Nearness to the market</b>: services and fresh products need to be near customers.</li>
              <li><b>Nearness to suppliers</b> and raw materials.</li>
              <li><b>Skilled labour</b>: are the right people available?</li>
              <li><b>Infrastructure</b>: roads, ports, internet, power.</li>
              <li><b>Clustering</b>: being near similar firms brings skilled workers, specialist suppliers and customers (Silicon Valley, Danish design in Copenhagen).</li>
              <li><b>Owners' preferences</b>, political stability, local culture and laws.</li></ul>
          <div class="tip">The best location balances cost against what the business really needs. A sneaker store needs footfall; a warehouse needs a motorway.</div>` },
        { title: 'Reorganizing production', html: `
          <p>A business can also change <i>who</i> does the work and <i>where</i>:</p>
          <ul><li><b>[[outsourcing|Outsourcing]]</b> (subcontracting): paying another firm to do some work.</li>
              <li><b>[[offshoring|Offshoring]]</b>: moving work to another country.</li>
              <li><b>Insourcing</b>: bringing work that was outsourced back inside the business.</li>
              <li><b>[[reshoring|Reshoring]]</b>: bringing work that was moved abroad back to the home country.</li></ul>
          <p>Firms offshore for lower costs and to be near new markets; they reshore for quality, speed, control, lower transport emissions and less supply-chain risk.</p>
          <div class="example">${sf} outsources and offshores the making of Originals to Porto. If quality problems pile up, it might insource the final painting step back into its own workshop.</div>` }
      ],
      labs: [
        { type: 'location', title: 'Where should the new workshop go?' },
        {
          type: 'scenarios', title: 'Outsource, offshore, insource or reshore?',
          challenge: 'Pick the right term for all 3 decisions.',
          items: [
            { s: 'SoleFlip pays a Copenhagen accounting firm to do its bookkeeping instead of hiring an accountant.', options: [
              { t: 'Outsourcing', ok: true, fb: 'Yes: another firm does the work, in the same country.' },
              { t: 'Offshoring', ok: false, fb: 'The work stays in Denmark.' },
              { t: 'Insourcing', ok: false, fb: 'Insourcing brings work back in; this sends it out.' }] },
            { s: 'After two years of delays from a factory in Vietnam, a Danish furniture brand moves production back to Jutland.', options: [
              { t: 'Reshoring', ok: true, fb: 'Yes: production moves back to the home country.' },
              { t: 'Offshoring', ok: false, fb: 'Offshoring moves work abroad, not back home.' },
              { t: 'Outsourcing', ok: false, fb: 'The key change here is the country, back to Denmark.' }] },
            { s: 'SoleFlip stops using an outside courier for Copenhagen orders and hires its own bike riders.', options: [
              { t: 'Insourcing', ok: true, fb: 'Yes: work that another firm did is brought inside the business.' },
              { t: 'Reshoring', ok: false, fb: 'The work was never abroad.' },
              { t: 'Offshoring', ok: false, fb: 'Nothing moves abroad.' }] }
          ]
        }
      ],
      worked: {
        title: 'Evaluate a relocation (exam style)',
        intro: `<p><b>Question:</b> ${sf} could move its workshop from Copenhagen (rent $3,000 a month) to Køge (rent $1,500 a month). <i>Evaluate</i> the move. [10 marks]</p>`,
        steps: [
          { prompt: 'Quantitative benefit?', answer: 'Rent falls by $1,500 a month = <b>$18,000 a year</b>, which lowers fixed costs and the [[break-even]] point.' },
          { prompt: 'Other costs of moving?', answer: 'Moving the laser machine, fitting out the new space, and lost output during the move. Some staff may need longer commutes or may leave ([[labour turnover]]).' },
          { prompt: 'Qualitative factors?', answer: 'Customers lose the walk-in workshop experience (part of the brand), it\'s further from Copenhagen\'s creative cluster, but there\'s more space to grow and easy motorway access.' },
          { prompt: 'What does it depend on?', answer: 'How many sales come from walk-in customers, and whether key staff like Omar will move.' },
          { prompt: 'Judgement.', answer: '"Move production to Køge to save $18,000 a year, but keep a small Copenhagen showroom where customers can see pairs being finished. This keeps the brand experience while cutting most of the cost."' }
        ],
        takeaway: 'Put a number on the cost saving, weigh it against qualitative factors, and consider a compromise.'
      },
      quiz: [
        { id: '5.4-1', type: 'mcq', cmd: 'Identify', q: 'Which is a <b>qualitative</b> location factor?', options: ['Being part of a cluster of creative businesses', 'The monthly rent of the building', 'The wage rate in the region', 'The cost of transporting materials to the new workshop'], answer: 0, why: 'Clustering benefits are hard to put a number on. Rent, wages and transport costs are quantitative.' },
        { id: '5.4-2', type: 'mcq', cmd: 'Define', q: '<b>Reshoring</b> means…', options: ['moving production that was abroad back to the home country', 'paying another firm in the home country to do part of the work', 'moving production from the home country to another country', 'bringing outsourced work back inside the same business'], answer: 0, why: 'Reshoring = back home from abroad. The others describe outsourcing, offshoring and insourcing.' },
        { id: '5.4-3', type: 'num', cmd: 'Calculate', q: 'Moving cuts rent from <b>$3,000</b> to <b>$1,500</b> a month, but the move costs <b>$9,000</b>. After how many months has the move paid for itself?', answer: 6, display: '6 months', hint: 'Monthly saving = 3,000 − 1,500', why: 'Saving = $1,500 a month. 9,000 ÷ 1,500 = 6 months.' },
        { id: '5.4-4', type: 'mcq', cmd: 'Explain', q: 'Why might a business <b>reshore</b> production?', options: ['To get better control of quality and shorter, less risky supply chains', 'To pay lower wages than it could anywhere in its home country', 'To get closer to the cheapest suppliers of raw materials in the whole world', 'To avoid having to follow its home country\'s employment laws'], answer: 0, why: 'Reshoring trades higher wages for control, speed, quality and lower supply-chain risk.' },
        { id: '5.4-5', type: 'tf', q: 'The location with the lowest costs is always the best location.', answer: false, why: 'False. Nearness to customers, skilled labour, quality and the brand experience can matter more than cost.' },
        { id: '5.4-6', type: 'sort', q: 'Quantitative or qualitative location factor?', buckets: ['Quantitative', 'Qualitative'], items: [
          { t: 'Rent per square metre', b: 0 }, { t: 'Government start-up grant', b: 0 }, { t: 'Average local wage', b: 0 },
          { t: 'Owner wants to live nearby', b: 1 }, { t: 'Political stability', b: 1 }, { t: 'Image of the area', b: 1 }], why: 'Quantitative factors can be measured in money; qualitative ones depend on judgement.' }
      ],
      explain: 'Think of where your favourite shop or café is. Explain to a mate two <b>location factors</b> that explain why it\'s there, and one reason it might move.'
    },

    // ------------------------------------------------------------------ 5.5
    {
      id: '5.5', title: 'Break-even analysis', emoji: '⚖️', minutes: 14, hl: false,
      goal: 'calculate contribution, break-even quantity, margin of safety, target profit output and target price, draw a break-even chart, and evaluate break-even analysis.',
      hook: `Back in 3.3 you met ${sf}'s custom pairs: <b>$120</b> each, <b>$35</b> of materials per pair and <b>$1,500</b> of fixed costs a month. Freja asks the question every business owner asks:<br><br>"How many pairs do we have to sell before we stop losing money? And how far can sales fall before we're in trouble?"`,
      cards: [
        { title: 'Contribution', html: `
          <p><b>Contribution per unit</b> is the price minus the variable cost per unit: what each sale contributes towards paying the [[fixed costs]], and then to profit.</p>
          ${F`\text{Contribution per unit} = \text{price} - \text{variable cost per unit}`}
          ${F`\text{Total contribution} = \text{contribution per unit} \times \text{quantity}`}
          ${F`\text{Profit} = \text{total contribution} - \text{fixed costs}`}
          <div class="example">${sf}: 120 − 35 = <b>$85</b> per pair. At 30 pairs: total contribution 85 × 30 = $2,550; profit 2,550 − 1,500 = <b>$1,050</b> (the same answer as 3.3).</div>` },
        { title: 'The break-even point', html: `
          <p><b>Break-even</b> is the level of output where total revenue = total costs: no profit, no loss.</p>
          ${F`\text{Break-even quantity} = \frac{\text{fixed costs}}{\text{contribution per unit}}`}
          <div class="example">${sf}: 1,500 ÷ 85 = 17.6 → round <b>up</b> to <b>18 pairs</b>. At 17 pairs SoleFlip still makes a small loss.</div>
          ${F`\text{Break-even revenue} = \text{break-even quantity} \times \text{price}`}
          <div class="tip">Always round break-even quantity <b>up</b> to a whole unit: you can't sell 0.6 of a sneaker, and 17 pairs isn't enough.</div>` },
        { title: 'The break-even chart', html: `
          <p>A <b>break-even chart</b> plots costs and revenue against output:</p>
          <ul><li><b>Fixed costs</b>: a horizontal line.</li>
              <li><b>Total costs</b>: starts at the fixed-cost level and rises with variable costs.</li>
              <li><b>Total revenue</b>: starts at 0 and rises with price × quantity.</li></ul>
          <p>Where total revenue crosses total costs is the <b>break-even point</b>. Left of it = loss; right of it = profit. The vertical gap between the lines shows the size of the profit or loss.</p>
          <div class="tip">Exam charts: label both axes (output; costs and revenue in $), title the chart, label every line, and mark the break-even point and the margin of safety.</div>` },
        { title: 'Margin of safety, target profit, target price', html: `
          <p>The <b>margin of safety</b> is how far sales can fall before the business makes a loss:</p>
          ${F`\text{Margin of safety} = \text{actual output} - \text{break-even quantity}`}
          <p>The <b>target profit output</b> is how many units must be sold to make a chosen profit:</p>
          ${F`\text{Target profit output} = \frac{\text{fixed costs} + \text{target profit}}{\text{contribution per unit}}`}
          <p>The <b>target price</b> is the price needed to make a target profit at a given output:</p>
          ${F`\text{Target price} = \frac{\text{fixed costs} + \text{target profit}}{\text{quantity}} + \text{variable cost per unit}`}
          <div class="example">Selling 30 pairs: margin of safety = 30 − 18 = <b>12 pairs</b>. For a $1,900 profit: (1,500 + 1,900) ÷ 85 = <b>40 pairs</b>.</div>` },
        { title: 'What changes break-even? Limitations', html: `
          <ul><li>Price ↑ → contribution ↑ → break-even ↓ (but fewer customers may buy).</li>
              <li>Variable cost ↑ → contribution ↓ → break-even ↑.</li>
              <li>Fixed costs ↑ (a new machine, higher rent) → break-even ↑.</li></ul>
          <p><b>Limitations</b>: it assumes everything made is sold, a single price, constant variable costs per unit (no bulk discounts) and fixed costs that never change. Most businesses sell many products, so break-even is a simplified model.</p>
          <div class="tip">"Evaluate the use of break-even" = useful, quick and visual for decisions (pricing, a new product, a loan application), but based on simplifying assumptions, so treat the result as a guide.</div>` }
      ],
      labs: [{ type: 'breakeven', title: 'SoleFlip break-even lab' }],
      worked: {
        title: 'The full break-even workout (exam style)',
        intro: `<p><b>Data:</b> ${sf}'s custom pairs sell for <b>$120</b>. Variable cost <b>$35</b> per pair. Fixed costs <b>$1,500</b> a month. Expected sales <b>30</b> pairs a month. <i>Calculate</i> (a) the break-even quantity, (b) the margin of safety, (c) the output needed for a profit of $1,900. [6 marks]</p>`,
        steps: [
          { prompt: 'Contribution per pair?', answer: '120 − 35 = <b>$85</b>' },
          { prompt: 'Break-even quantity?', answer: '1,500 ÷ 85 = 17.6 → <b>18 pairs</b> (rounded up)' },
          { prompt: 'Margin of safety?', answer: '30 − 18 = <b>12 pairs</b>. Sales can fall by 12 pairs (40%) before SoleFlip makes a loss.' },
          { prompt: 'Output for a $1,900 profit?', answer: '(1,500 + 1,900) ÷ 85 = 3,400 ÷ 85 = <b>40 pairs</b>' },
          { prompt: 'Rent rises by $340 a month. New break-even?', answer: '(1,500 + 340) ÷ 85 = 1,840 ÷ 85 = 21.6 → <b>22 pairs</b>. Higher fixed costs push break-even up.' }
        ],
        takeaway: 'Contribution first, then everything else follows. Show each formula, and round break-even up.'
      },
      quiz: [
        { id: '5.5-1', type: 'num', cmd: 'Calculate', q: 'Complete the table to find SoleFlip\'s <b>break-even quantity</b>.' + tbl(['', '$ / pairs'], [['Price per pair', '120'], ['Variable cost per pair', '35'], ['Fixed costs per month', '1,500'], ['Contribution per pair', A(85)], ['<b>Break-even quantity (pairs)</b>', A(18, true)]]), answer: 18, tol: 0.4, display: '18 pairs (17.6 rounded up)', hint: 'Fixed costs ÷ contribution per unit, rounded up', why: 'Contribution = 120 − 35 = $85. 1,500 ÷ 85 = 17.6 → 18 pairs.' },
        { id: '5.5-2', type: 'num', cmd: 'Calculate', q: 'SoleFlip sells <b>30</b> pairs and breaks even at <b>18</b>. What is the <b>margin of safety</b> (pairs)?', answer: 12, display: '12 pairs', hint: 'Actual output − break-even quantity', why: '30 − 18 = 12 pairs.' },
        { id: '5.5-3', type: 'num', cmd: 'Calculate', q: 'Complete the table to find the output needed for a <b>target profit</b> of $1,900.' + tbl(['', '$ / pairs'], [['Fixed costs', '1,500'], ['Target profit', '1,900'], ['Contribution per pair', '85'], ['Fixed costs + target profit', A(3400)], ['<b>Target profit output (pairs)</b>', A(40, true)]]), answer: 40, display: '40 pairs', why: '(1,500 + 1,900) ÷ 85 = 3,400 ÷ 85 = 40 pairs.' },
        { id: '5.5-4', type: 'num', cmd: 'Calculate', q: 'A festival food truck has fixed costs of <b>$6,000</b>, sells meals at <b>$12</b> and has variable costs of <b>$4</b> per meal. What is its <b>break-even revenue</b>?', answer: 9000, unit: '$', display: '$9,000', hint: 'Find break-even quantity first, then × price.', why: 'Contribution = 12 − 4 = $8. BEQ = 6,000 ÷ 8 = 750 meals. Break-even revenue = 750 × 12 = $9,000.' },
        { id: '5.5-5', type: 'num', cmd: 'Calculate', q: 'SoleFlip expects to sell <b>25</b> pairs and wants a profit of <b>$1,000</b>. Fixed costs are <b>$1,500</b> and variable cost is <b>$35</b> per pair. What is the <b>target price</b>?', answer: 135, unit: '$', display: '$135', hint: '(Fixed costs + target profit) ÷ quantity + variable cost per unit', why: '(1,500 + 1,000) ÷ 25 = $100 per pair to cover fixed costs and profit, + $35 variable cost = $135.' },
        { id: '5.5-6', type: 'mcq', cmd: 'Explain', q: 'What happens to the <b>break-even quantity</b> if variable costs per unit <b>rise</b>?', options: ['It rises, because contribution per unit falls', 'It falls, because contribution per unit rises', 'It stays the same, because fixed costs have not changed', 'It falls, because total revenue rises with costs'], answer: 0, why: 'Higher variable cost → smaller contribution per unit → more units needed to cover fixed costs.' },
        { id: '5.5-7', type: 'mcq', cmd: 'Identify', q: 'Which is a <b>limitation</b> of break-even analysis?', options: ['It assumes all output is sold at one price', 'It cannot be shown on a chart or graph', 'It ignores the fixed costs of the business', 'It only works for services, not for goods'], answer: 0, why: 'Break-even assumes every unit is sold, at a single price, with constant variable costs and fixed costs. Real businesses rarely work like that.' },
        { id: '5.5-8', type: 'tf', q: 'At the break-even point, the business makes neither a profit nor a loss.', answer: true, why: 'True. Total revenue = total costs, so profit = 0.' },
        { id: '5.5-9', type: 'mcq', cmd: 'Identify', q: 'On a break-even chart, the <b>total cost</b> line…', options: ['starts at the level of fixed costs and rises with output', 'starts at zero and rises with output at the selling price', 'is a horizontal line at the level of fixed costs', 'falls as output rises, because costs are spread out'], answer: 0, why: 'At zero output total cost = fixed costs; it then rises by the variable cost per unit. Revenue starts at zero; fixed costs are horizontal.' }
      ],
      explain: 'You want to sell homemade cookies at school. Make up a price, a cost per cookie and a fixed cost (e.g. a table and a sign), and explain to a mate your <b>break-even</b> point and what <b>margin of safety</b> means for you.'
    },

    // ------------------------------------------------------------------ 5.6
    {
      id: '5.6', title: 'Production planning', emoji: '📦', minutes: 15, hl: true,
      goal: 'explain supply chains, compare JIT and JIC, read and draw stock control charts, and calculate capacity utilization, productivity, defect rate, cost to buy and cost to make.',
      hook: `Two weeks before Christmas, ${sf} ran out of blank sneakers. The supplier needed 2 weeks to deliver. Omar sat idle while 80 orders waited. In January, Noah overreacted and ordered so many blanks that they filled the staff room.<br><br>When should you reorder, and how much? And how busy should a workshop really be?`,
      cards: [
        { title: 'Supply chains', html: `
          <p><span class="tag">HL</span> A <b>supply chain</b> is every step and business involved in getting a product from raw materials to the customer: suppliers → manufacturer → distribution → retailer → consumer.</p>
          <ul><li><b>Local supply chains</b>: shorter, faster, more reliable, lower emissions, but often more expensive.</li>
              <li><b>Global supply chains</b>: lower costs and more choice, but long lead times and exposure to shipping problems, tariffs and exchange rates.</li></ul>
          <div class="example">Originals: rubber from Malaysia → soles made in Portugal → assembled in Porto → trucked to Copenhagen → sold online. A blocked canal or a strike anywhere delays the lot.</div>` },
        { title: 'Just-in-time vs just-in-case', html: `
          <p><b>Just-in-time (JIT)</b>: hold almost no stock; materials arrive exactly when needed.</p>
          <ul><li>✅ Less cash tied up in stock, less storage space, less waste.</li>
              <li>❌ Depends on reliable suppliers; no stock for sudden demand; frequent small deliveries.</li></ul>
          <p><b>Just-in-case (JIC)</b>: hold extra (buffer) stock in case of delays or extra demand.</p>
          <ul><li>✅ Can meet sudden orders, protected from supply problems, bulk-buying discounts.</li>
              <li>❌ Storage costs, cash tied up, risk of stock going out of date.</li></ul>` },
        { title: 'The stock control chart', html: `
          <p>A <b>stock control chart</b> shows stock falling as it's used, then jumping up when a delivery arrives (a sawtooth). Key terms:</p>
          <ul><li><b>Buffer stock</b>: the minimum safety stock kept for emergencies.</li>
              <li><b>Lead time</b>: the time between ordering and delivery.</li>
              <li><b>Reorder level</b>: the stock level at which a new order is placed.</li>
              <li><b>Reorder quantity</b>: how much is ordered each time.</li>
              <li><b>Maximum stock</b>: buffer stock + reorder quantity.</li></ul>
          ${F`\text{Reorder level} = \text{buffer stock} + \text{usage per week} \times \text{lead time (weeks)}`}
          <div class="example">${sf} uses 40 blanks a week, lead time 2 weeks, buffer 30: reorder level = 30 + 40 × 2 = <b>110 pairs</b>.</div>` },
        { title: 'Capacity utilization', html: `
          <p><b>Capacity utilization</b> is how much of its maximum possible output (productive capacity) a business is actually using.</p>
          ${F`\text{Capacity utilization rate} = \frac{\text{actual output}}{\text{productive capacity}} \times 100`}
          <div class="example">The workshop could finish 320 pairs a week; it made 240: 240 ÷ 320 × 100 = <b>75%</b>.</div>
          <p>Low utilization means high fixed costs per unit (idle machines and staff). Very high utilization (near 100%) leaves no time for maintenance, staff get stressed, and the business can't take extra orders.</p>` },
        { title: 'Productivity and defect rate', html: `
          ${F`\text{Labour productivity} = \frac{\text{total output}}{\text{total hours worked}}`}
          ${F`\text{Capital productivity} = \frac{\text{total output}}{\text{total capital input}}`}
          ${F`\text{Productivity rate} = \frac{\text{total output}}{\text{total input}} \times 100`}
          ${F`\text{Defect rate} = \frac{\text{number of defective units}}{\text{total output}} \times 100`}
          <div class="example">240 pairs in 160 labour hours: <b>1.5 pairs per hour</b>. 240 pairs from 2 laser machines: <b>120 pairs per machine</b>. 12 defects: 12 ÷ 240 × 100 = <b>5%</b>.</div>` },
        { title: 'Make or buy? CTM vs CTB', html: `
          <p>Should the business make a part itself or buy it in?</p>
          ${F`\text{Cost to buy (CTB)} = \text{price per unit} \times \text{quantity}`}
          ${F`\text{Cost to make (CTM)} = \text{total fixed costs} + \text{variable cost per unit} \times \text{quantity}`}
          <div class="example">2,000 custom laces a year. Buy at $2.20: CTB = <b>$4,400</b>. Make with a $2,000 machine and $1.50 per lace: CTM = 2,000 + 1.50 × 2,000 = <b>$5,000</b>. Buying is $600 cheaper.</div>
          <div class="tip">Then add qualitative factors: quality control, reliability of the supplier, spare capacity, and whether making it builds a skill or USP.</div>` }
      ],
      labs: [
        { type: 'stockcontrol', title: 'Never run out of blanks' },
        {
          type: 'scenarios', title: 'JIT or JIC?',
          challenge: 'Choose the best stock approach for all 3 businesses.',
          items: [
            { s: 'A hospital needs blood bags and medicines. Running out could cost lives.', options: [
              { t: 'Just-in-case: hold buffer stock', ok: true, fb: 'Yes: the cost of a stock-out is far higher than the cost of storage.' },
              { t: 'Just-in-time: order only when a patient needs it', ok: false, fb: 'Any delivery delay could be deadly.' },
              { t: 'Hold no stock and borrow from other hospitals', ok: false, fb: 'Too risky and unreliable in an emergency.' }] },
            { s: 'A sushi bar uses fresh fish that spoils in a day, from a fish market 10 minutes away that delivers twice daily.', options: [
              { t: 'Just-in-time deliveries', ok: true, fb: 'Yes: perishable stock, a reliable nearby supplier, frequent deliveries.' },
              { t: 'Buy a month of fish at once for a bulk discount', ok: false, fb: 'Most of it would spoil.' },
              { t: 'Keep a big buffer stock of fresh fish', ok: false, fb: 'The buffer would go off before being used.' }] },
            { s: 'SoleFlip\'s Christmas demand can double without warning, and the Porto factory needs 3 weeks to deliver.', options: [
              { t: 'Build up buffer stock before the season (just-in-case)', ok: true, fb: 'Yes: long lead times + uncertain peaks = hold extra stock.' },
              { t: 'Pure JIT with weekly orders', ok: false, fb: 'A 3-week lead time means JIT can\'t react to sudden demand.' },
              { t: 'Stop taking orders above normal levels', ok: false, fb: 'It throws away the most profitable weeks of the year.' }] }
          ]
        }
      ],
      worked: {
        title: 'Workshop numbers (exam style)',
        intro: `<p><b>Data for one week:</b> ${sf}'s workshop has a capacity of <b>320</b> pairs. It made <b>240</b> pairs using <b>160</b> labour hours, and <b>12</b> pairs were defective. <i>Calculate</i> capacity utilization, labour productivity and defect rate, then comment. [6 marks]</p>`,
        steps: [
          { prompt: 'Capacity utilization?', answer: '240 ÷ 320 × 100 = <b>75%</b>' },
          { prompt: 'Labour productivity?', answer: '240 ÷ 160 = <b>1.5 pairs per labour hour</b>' },
          { prompt: 'Defect rate?', answer: '12 ÷ 240 × 100 = <b>5%</b>' },
          { prompt: 'What could SoleFlip do with 25% spare capacity?', answer: 'Take on more orders (e.g. festival collabs) without extra fixed costs, which spreads fixed costs over more pairs and lowers the cost per pair. Or use the time for training and maintenance.' },
          { prompt: 'Comment on quality.', answer: 'A 5% defect rate wastes about 12 pairs a week. Quality assurance (5.3) could raise effective productivity without hiring anyone.' }
        ],
        takeaway: 'Show each formula with units (%, pairs per hour), then interpret what the numbers mean for costs and decisions.'
      },
      quiz: [
        { id: '5.6-1', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> The workshop can make <b>320</b> pairs a week and made <b>240</b>. What is the <b>capacity utilization rate</b>?', answer: 75, unit: '%', display: '75%', hint: 'Actual output ÷ productive capacity × 100', why: '240 ÷ 320 × 100 = 75%.' },
        { id: '5.6-2', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> Complete the table to find the <b>reorder level</b>.' + tbl(['', 'Pairs'], [['Usage per week', '40'], ['Lead time (weeks)', '2'], ['Usage during lead time', A(80)], ['Buffer stock', '30'], ['<b>Reorder level</b>', A(110, true)]]), answer: 110, display: '110 pairs', hint: 'Buffer + usage × lead time', why: '40 × 2 = 80 used while waiting for delivery. 80 + 30 buffer = 110 pairs.' },
        { id: '5.6-3', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> Staff worked <b>160</b> hours and made <b>240</b> pairs. What is the <b>labour productivity</b> (pairs per hour)?', answer: 1.5, tol: 0.01, display: '1.5 pairs per hour', hint: 'Total output ÷ total hours worked', why: '240 ÷ 160 = 1.5 pairs per labour hour.' },
        { id: '5.6-4', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> Complete the table to find how much cheaper it is to <b>buy</b> 2,000 laces than to make them.' + tbl(['', '$'], [['Buy: price per lace', '2.20'], ['Cost to buy (CTB)', A(4400)], ['Make: fixed costs', '2,000'], ['Make: variable cost per lace', '1.50'], ['Cost to make (CTM)', A(5000)], ['<b>Saving from buying</b>', A(600, true)]]), answer: 600, unit: '$', display: '$600', why: 'CTB = 2.20 × 2,000 = $4,400. CTM = 2,000 + 1.50 × 2,000 = $5,000. Buying saves $600.' },
        { id: '5.6-5', type: 'mcq', cmd: 'Distinguish', q: '<span class="tag">HL</span> Which is an advantage of <b>just-in-case</b> over just-in-time?', options: ['The business can meet sudden rises in demand from its stock', 'Less cash is tied up in stock that is waiting to be used', 'Less warehouse space is needed to store materials', 'Less stock goes out of date or gets damaged in storage'], answer: 0, why: 'JIC holds buffer stock for surprises. The other three are advantages of JIT.' },
        { id: '5.6-6', type: 'mcq', cmd: 'Explain', q: '<span class="tag">HL</span> Why can a capacity utilization close to <b>100%</b> be a problem?', options: ['No time for maintenance, staff get stressed, and extra orders must be refused', 'Fixed costs per unit rise because many machines and staff stand idle for hours', 'It means the business is making a loss on every unit it produces', 'It shows that demand has fallen and the business should shrink'], answer: 0, why: 'Near full capacity, there is no slack for breakdowns, training or sudden orders. Idle machines (high fixed cost per unit) are a problem of <i>low</i> utilization.' },
        { id: '5.6-7', type: 'mcq', cmd: 'Identify', q: '<span class="tag">HL</span> On a stock control chart, <b>lead time</b> is…', options: ['the time between placing an order and receiving it', 'the time it takes to use up all the stock in the warehouse', 'the time between two deliveries of the same material', 'the time stock can be kept before it goes out of date'], answer: 0, why: 'Lead time = order to delivery. The reorder level must cover usage during the lead time.' },
        { id: '5.6-8', type: 'num', cmd: 'Calculate', q: '<span class="tag">HL</span> Buffer stock is <b>30</b> pairs and the reorder quantity is <b>160</b> pairs. What is the <b>maximum stock</b> level?', answer: 190, display: '190 pairs', hint: 'Buffer + reorder quantity', why: 'Maximum stock = 30 + 160 = 190 pairs: a delivery arrives just as stock reaches the buffer.' }
      ],
      explain: 'Think about your fridge or snack cupboard at home. Explain to a mate whether your family uses <b>JIT</b> or <b>JIC</b>, what the <b>lead time</b> is (how long to get more), and what your <b>buffer stock</b> is.'
    },

    // ------------------------------------------------------------------ 5.7
    {
      id: '5.7', title: 'Crisis management and contingency planning', emoji: '🚨', minutes: 10, hl: true,
      goal: 'distinguish crisis management from contingency planning, explain what makes crisis management effective, and evaluate contingency planning.',
      hook: `Friday, festival week. ${sf}'s pop-up stand floods in a storm, the payment system goes down, and a video of a "fake" SoleFlip sneaker is going viral. Noah's phone has 200 notifications.<br><br>Some businesses come out of a crisis stronger. Others never recover. What's the difference?`,
      cards: [
        { title: 'Crisis management vs contingency planning', html: `
          <p><span class="tag">HL</span> A <b>crisis</b> is an unexpected event that threatens a business's people, operations, reputation or survival: a fire, a data breach, a product recall, a pandemic.</p>
          <ul><li><b>Crisis management</b> is how a business <b>responds</b> when a crisis happens, to limit the damage.</li>
              <li><b>Contingency planning</b> is preparing <b>in advance</b> for possible crises: "what will we do if…?", with plans, back-ups and trained staff ready.</li></ul>
          <div class="example">In July 2024 a faulty software update crashed millions of Windows computers worldwide, grounding flights and closing shops. Businesses with back-up systems and offline procedures (contingency plans) kept going; others closed for the day.</div>` },
        { title: 'Effective crisis management', html: `
          <p>Four factors decide how well a crisis is handled:</p>
          <ul><li><b>Transparency</b>: be open and honest about what happened. Cover-ups get found out and make it worse.</li>
              <li><b>Communication</b>: fast, clear, consistent messages to all stakeholders: staff, customers, media, suppliers, authorities.</li>
              <li><b>Speed</b>: act quickly before rumours and damage spread (on social media, within hours).</li>
              <li><b>Control</b>: a clear crisis team takes charge, makes decisions and gets the situation back under control.</li></ul>
          <div class="tip">Apply all four to the case in an "explain" answer: what should the business say, to whom, how fast, and who leads?</div>` },
        { title: 'Contingency planning: worth it?', html: `
          <p><b>Benefits</b>: faster, calmer response; less damage and downtime; staff know their roles; reassures investors, insurers and customers; may lower insurance costs.</p>
          <p><b>Costs</b>: time and money to plan, train and run drills; back-up systems and stock that may never be used; plans can't predict every crisis, and they go out of date.</p>
          <div class="example">${sf}'s contingency plan: a back-up card reader that works offline, waterproof stock boxes at festivals, a second supplier for blanks, and a pre-agreed social media response team.</div>
          <div class="tip">The value of a contingency plan depends on how likely a crisis is and how much damage it would do (likelihood × impact).</div>` }
      ],
      labs: [
        {
          type: 'scenarios', title: 'Handle the crisis',
          challenge: 'Choose the best response in all 3 crises.',
          items: [
            { s: 'A video claims SoleFlip sells fake Nikes. It\'s wrong, but it has 300,000 views and rising.', options: [
              { t: 'Respond within hours with proof of authenticity and an open Q&A', ok: true, fb: 'Yes: speed, transparency and communication stop the story spreading unchallenged.' },
              { t: 'Say nothing and hope it dies down', ok: false, fb: 'Silence looks like guilt, and the video keeps spreading.' },
              { t: 'Delete every comment that mentions it', ok: false, fb: 'Looks like a cover-up and usually makes the story bigger.' }] },
            { s: 'Hackers steal SoleFlip customers\' email addresses and order histories.', options: [
              { t: 'Inform customers and the data authority quickly, explain what happened and what to do', ok: true, fb: 'Yes: honesty and fast communication (and it\'s a legal duty under GDPR).' },
              { t: 'Keep it quiet so sales aren\'t affected', ok: false, fb: 'Illegal under GDPR, and trust collapses when it comes out.' },
              { t: 'Blame the website company publicly and do nothing else', ok: false, fb: 'Customers still need help, and SoleFlip is still responsible for their data.' }] },
            { s: 'A storm floods the festival pop-up. Stock is wet, and staff don\'t know what to do.', options: [
              { t: 'One person takes control: secure staff safety, move stock, update customers online', ok: true, fb: 'Yes: clear control and quick action limit the damage.' },
              { t: 'Everyone decides for themselves', ok: false, fb: 'Without control, efforts clash and important tasks are missed.' },
              { t: 'Keep selling in the rain to hit the sales target', ok: false, fb: 'Staff safety comes first, and wet stock damages the brand.' }] }
          ]
        },
        {
          type: 'sort', title: 'Before or during?',
          challenge: 'Sort all 8 correctly in one go.',
          buckets: ['Contingency planning (before)', 'Crisis management (during)'],
          items: [
            { t: '📝 Writing a plan for a festival flood', b: 0 },
            { t: '💾 Setting up daily data back-ups', b: 0 },
            { t: '🏋️ Running a fire drill with staff', b: 0 },
            { t: '🤝 Agreeing a back-up supplier', b: 0 },
            { t: '📢 Posting an update during a website outage', b: 1 },
            { t: '🧯 Evacuating the store during a fire', b: 1 },
            { t: '📞 Calling customers after a product recall', b: 1 },
            { t: '🎤 Giving a press statement after a data breach', b: 1 }
          ]
        }
      ],
      worked: {
        title: 'Evaluate contingency planning (exam style)',
        intro: `<p><b>Question:</b> A contingency plan for ${sf}'s festival pop-ups would cost about <b>$3,000</b> a year (offline card reader, waterproof storage, staff training). A serious incident could cost <b>$20,000</b> in lost stock and sales. <i>Evaluate</i> whether ${sf} should invest in it. [10 marks]</p>`,
        steps: [
          { prompt: 'Main benefits?', answer: 'Faster, calmer response, less lost stock and sales, staff know their roles, and the brand is protected from a public mess.' },
          { prompt: 'Main drawbacks?', answer: '$3,000 a year that may never be "used", management time, and no plan covers every possible crisis.' },
          { prompt: 'Use the numbers.', answer: 'If a serious incident happens even once in 7 years, the expected loss (20,000 ÷ 7 ≈ $2,900 a year) is about the cost of the plan, and festivals are outdoors and weather-dependent, so the risk is real.' },
          { prompt: 'Judgement.', answer: '"Invest: festivals are high-risk events, and the plan also protects SoleFlip\'s reputation, which is worth more than the stock. Review it each year so it stays up to date."' }
        ],
        takeaway: 'Weigh the cost of planning against the likelihood and impact of the crisis, and include reputation, not just money.'
      },
      quiz: [
        { id: '5.7-1', type: 'mcq', cmd: 'Distinguish', q: '<span class="tag">HL</span> What is the difference between <b>contingency planning</b> and <b>crisis management</b>?', options: ['Contingency planning prepares before a crisis; crisis management responds during it', 'Contingency planning responds during a crisis; crisis management prepares before it', 'Contingency planning is for small firms; crisis management is for large firms only', 'Contingency planning deals with finance; crisis management deals with marketing'], answer: 0, why: 'Planning = in advance ("what if?"). Management = the response when it actually happens.' },
        { id: '5.7-2', type: 'mcq', cmd: 'Identify', q: '<span class="tag">HL</span> A business admits a mistake straight away and explains exactly what went wrong. This shows…', options: ['transparency', 'control', 'contingency planning', 'speed only'], answer: 0, why: 'Openness and honesty about what happened = transparency.' },
        { id: '5.7-3', type: 'tf', q: '<span class="tag">HL</span> A good contingency plan can prevent every crisis.', answer: false, why: 'False. It can\'t stop every crisis (or predict all of them), but it reduces the damage when one happens.' },
        { id: '5.7-4', type: 'mcq', cmd: 'Explain', q: '<span class="tag">HL</span> Why is <b>speed</b> important in crisis management today?', options: ['Social media spreads news and rumours within hours', 'Laws require every crisis to be solved within one day', 'Insurance pays out only if a crisis ends within a week', 'Customers forget about a crisis after a few minutes'], answer: 0, why: 'A slow response leaves a gap that rumours and anger fill, especially online.' },
        { id: '5.7-5', type: 'mcq', cmd: 'Identify', q: '<span class="tag">HL</span> Which is a <b>cost</b> of contingency planning?', options: ['Time and money spent on plans that may never be used', 'A slower response when a crisis actually happens', 'Staff being unsure of their roles and duties during a crisis', 'Higher losses when a crisis does happen'], answer: 0, why: 'The plan costs money up front even if no crisis happens. The other options are what happens <i>without</i> a plan.' },
        { id: '5.7-6', type: 'sort', q: '<span class="tag">HL</span> Good or bad crisis management?', buckets: ['Good', 'Bad'], items: [
          { t: 'Updating customers every few hours', b: 0 }, { t: 'One crisis team in charge', b: 0 }, { t: 'Admitting what went wrong', b: 0 },
          { t: 'Waiting a week to comment', b: 1 }, { t: 'Different managers telling different stories', b: 1 }, { t: 'Deleting critical posts', b: 1 }], why: 'Transparency, communication, speed and control make crisis management effective.' }
      ],
      explain: 'Think of a crisis you saw a brand or celebrity go through online. Explain to a mate whether they handled it well, using <b>transparency</b>, <b>communication</b>, <b>speed</b> and <b>control</b>.'
    },

    // ------------------------------------------------------------------ 5.8
    {
      id: '5.8', title: 'Research and development', emoji: '🧪', minutes: 10, hl: true,
      goal: 'explain the importance of R&D, the four types of innovation, and the difference between incremental and disruptive innovation.',
      hook: `Blockbuster once had 9,000 video stores. A small company mailed DVDs, then started streaming. Blockbuster laughed. Then it went bankrupt.<br><br>Netflix didn't just make a better video store. It changed the whole idea of watching films. What kind of innovation does that, and how do businesses plan for it?`,
      cards: [
        { title: 'Why research and development?', html: `
          <p><span class="tag">HL</span> <b>Research and development (R&D)</b> is the work a business does to create new products and processes, or improve existing ones.</p>
          <p>Why it matters:</p>
          <ul><li>New products replace ones in decline (the [[product life cycle]]).</li>
              <li>A [[unique selling point|USP]] and protection from competitors (often with patents).</li>
              <li>Better, cheaper or greener processes.</li>
              <li>Meeting changing customer needs found through [[market research]].</li></ul>
          <p>But R&D is expensive, slow and risky: most ideas never make money.</p>
          <div class="example">${sf}'s R&D: Freja and Omar test 14 versions of a sole made from recycled sneakers before one survives 500 km of wear.</div>` },
        { title: 'Four types of innovation', html: `
          <ul><li><b>Product innovation</b>: a new or improved product (the first smartphone; a self-lacing sneaker).</li>
              <li><b>Process innovation</b>: a new or improved way of making or delivering it (online ordering; a laser instead of hand-painting).</li>
              <li><b>Positioning innovation</b>: changing how an existing product is seen, or who it is for (Lucozade went from a drink for sick people to a sports drink).</li>
              <li><b>Paradigm innovation</b>: changing the whole business model or way of thinking (low-cost airlines; streaming instead of owning music).</li></ul>` },
        { title: 'Incremental vs disruptive innovation', html: `
          <p><b>Incremental innovation</b>: small, step-by-step improvements to existing products or processes (a slightly better phone camera each year). Low risk, keeps customers, but rivals do the same.</p>
          <p><b>Disruptive innovation</b>: a new product or business model that changes a market and pushes out established firms, often starting cheaper or simpler and aimed at customers the leaders ignore (Netflix vs Blockbuster; smartphones vs digital cameras).</p>
          <div class="tip">Established firms often ignore disruptors because the first versions look worse. In the exam, explain <i>why</i> the leader missed the threat.</div>` }
      ],
      labs: [
        {
          type: 'sort', title: 'Which type of innovation?',
          challenge: 'Sort all 8 correctly in one go.',
          buckets: ['Product', 'Process', 'Positioning', 'Paradigm'],
          items: [
            { t: '👟 A sneaker with a sole made from recycled sneakers', b: 0 },
            { t: '🎧 Noise-cancelling earbuds', b: 0 },
            { t: '🔦 Using a laser to engrave instead of hand-painting', b: 1 },
            { t: '🤖 Robots packing online orders', b: 1 },
            { t: '🥤 Rebranding a drink for sick people as a sports drink', b: 2 },
            { t: '🛹 Marketing an old shoe brand to skaters', b: 2 },
            { t: '🎵 Streaming music instead of selling CDs', b: 3 },
            { t: '🚲 Renting city bikes by the minute through an app', b: 3 }
          ]
        },
        {
          type: 'scenarios', title: 'Incremental or disruptive?',
          challenge: 'Classify all 3 innovations correctly.',
          items: [
            { s: 'A phone maker adds a slightly better camera and a faster chip to this year\'s model.', options: [
              { t: 'Incremental innovation', ok: true, fb: 'Yes: small improvements to an existing product.' },
              { t: 'Disruptive innovation', ok: false, fb: 'It doesn\'t change the market or push anyone out.' },
              { t: 'Not innovation at all', ok: false, fb: 'Improvements count as (incremental) innovation.' }] },
            { s: 'Smartphones with good cameras made most people stop buying digital cameras.', options: [
              { t: 'Disruptive innovation', ok: true, fb: 'Yes: a new product changed the market and pushed out established camera makers.' },
              { t: 'Incremental innovation', ok: false, fb: 'It wasn\'t a small improvement to cameras; it replaced them.' },
              { t: 'Positioning innovation', ok: false, fb: 'It created a new product category that replaced the old one.' }] },
            { s: 'SoleFlip makes its cleaning fluid 10% faster-drying each year.', options: [
              { t: 'Incremental (process) innovation', ok: true, fb: 'Yes: a small, steady improvement to how the service is delivered.' },
              { t: 'Disruptive (paradigm) innovation', ok: false, fb: 'Faster-drying fluid doesn\'t change the whole business model.' },
              { t: 'Positioning innovation', ok: false, fb: 'Nothing changes about how the product is seen or who it\'s for.' }] }
          ]
        }
      ],
      worked: {
        title: 'Should SoleFlip spend on R&D? (exam style)',
        intro: `<p><b>Question:</b> ${sf} could spend <b>$25,000</b> developing a sneaker that can be fully taken apart and recycled. <i>Evaluate</i> this R&D investment. [10 marks]</p>`,
        steps: [
          { prompt: 'What type of innovation is it?', answer: 'Product innovation (a new product), linked to cradle-to-cradle design (5.3). It could become a strong USP.' },
          { prompt: 'Benefits?', answer: 'Differentiation from big brands, appeal to sustainability-minded teens, a possible patent, and a new product as Originals matures.' },
          { prompt: 'Risks?', answer: '$25,000 is a lot for SoleFlip: R&D may fail, take longer than planned, and big rivals could copy it quickly. Cash is tied up with no return for a year or more.' },
          { prompt: 'What does it depend on?', answer: 'Whether market research shows customers will pay more for it, whether SoleFlip can finance it without risking its [[liquidity]], and whether it can protect the idea.' },
          { prompt: 'Judgement.', answer: '"Go ahead in stages: spend $5,000 on a prototype and customer tests first, then decide on the rest. This limits the risk while keeping the chance of a strong USP."' }
        ],
        takeaway: 'R&D answers should weigh long-term competitive advantage against cost, time and risk, and use the business\'s finances.'
      },
      quiz: [
        { id: '5.8-1', type: 'mcq', cmd: 'Identify', q: '<span class="tag">HL</span> A low-cost airline cuts out free meals, uses one plane type and sells only online, changing how flying works. This is…', options: ['paradigm innovation', 'product innovation', 'positioning innovation', 'incremental innovation'], answer: 0, why: 'A whole new business model = paradigm innovation.' },
        { id: '5.8-2', type: 'mcq', cmd: 'Distinguish', q: '<span class="tag">HL</span> What is <b>disruptive innovation</b>?', options: ['A new product or model that changes a market and pushes out established firms', 'A small, step-by-step improvement to an existing product that is made every year', 'A change in how an existing product is seen by its customers', 'A faster way of producing an existing product in the factory'], answer: 0, why: 'Disruptive innovation reshapes the market (Netflix vs Blockbuster). The others are incremental, positioning and process innovation.' },
        { id: '5.8-3', type: 'tf', q: '<span class="tag">HL</span> Spending more on R&D always leads to more profit.', answer: false, why: 'False. R&D is risky: many projects fail, and successful ones may be copied. It\'s an investment, not a guarantee.' },
        { id: '5.8-4', type: 'mcq', cmd: 'Explain', q: '<span class="tag">HL</span> Why might a business need R&D as a product reaches <b>maturity</b>?', options: ['To have new products ready to replace it when sales decline', 'Because R&D is only allowed once a product is profitable', 'Because mature products can never be extended in any way', 'To raise the price of the mature product to a higher level'], answer: 0, why: 'Products eventually decline; R&D creates the next products (and extension ideas) to keep revenue flowing.' },
        { id: '5.8-5', type: 'mcq', cmd: 'Identify', q: '<span class="tag">HL</span> A bakery starts using a machine that shapes croissants twice as fast. This is…', options: ['process innovation', 'product innovation', 'positioning innovation', 'paradigm innovation'], answer: 0, why: 'A new way of making the same product = process innovation.' },
        { id: '5.8-6', type: 'sort', q: '<span class="tag">HL</span> Incremental or disruptive?', buckets: ['Incremental', 'Disruptive'], items: [
          { t: 'A new colourway of a popular sneaker', b: 0 }, { t: 'A games console with a slightly faster chip', b: 0 }, { t: 'Longer battery life in this year\'s laptop', b: 0 },
          { t: 'Streaming replacing DVD rental', b: 1 }, { t: 'Ride-hailing apps replacing taxi firms', b: 1 }, { t: 'Smartphones replacing digital cameras', b: 1 }], why: 'Incremental = small improvements. Disruptive = changes the market and displaces established firms.' }
      ],
      explain: 'Think of an app or gadget that changed how you do something. Explain to a mate which <b>type of innovation</b> it was and whether it was <b>incremental</b> or <b>disruptive</b>.'
    },

    // ------------------------------------------------------------------ 5.9
    {
      id: '5.9', title: 'Management information systems', emoji: '💻', minutes: 12, hl: true,
      goal: 'explain how businesses collect and use data, the threats of cybercrime, critical technologies (AI, big data, IoT, VR), and the ethics of data and employee monitoring.',
      hook: `${sf}'s app knows that you browse high-tops at 11 pm, abandon your basket on Sundays and always buy in red. The next morning you get a 10% code for red high-tops.<br><br>Helpful, or creepy? And what happens if hackers get that data?`,
      cards: [
        { title: 'Data, databases and analytics', html: `
          <p><span class="tag">HL</span> A <b>management information system (MIS)</b> collects, stores and analyses data to help managers make decisions.</p>
          <ul><li><b>Data</b>: raw facts and figures (sales, clicks, stock levels).</li>
              <li><b>Database</b>: an organized collection of data that can be searched and updated (e.g. every customer and their orders).</li>
              <li><b>Data analytics</b>: examining data to find patterns, trends and insights for decisions.</li></ul>
          <div class="example">${sf}'s analytics show red high-tops sell 3× faster in Aarhus than Copenhagen, so it moves stock and changes the Aarhus ads.</div>` },
        { title: 'Cybersecurity and cybercrime', html: `
          <p><b>Cybercrime</b> is crime using computers and the internet: hacking, data theft, ransomware (locking files until a ransom is paid), phishing and fraud.</p>
          <p><b>Cybersecurity</b> is how a business protects its systems and data: strong passwords and two-factor login, staff training against phishing, software updates, encryption, back-ups and firewalls.</p>
          <div class="tip">A data breach costs far more than fixing the system: fines (under GDPR), lost trust, lost sales. Link cybersecurity to [[crisis management]] and contingency planning.</div>` },
        { title: 'Critical technologies', html: `
          <ul><li><b>Artificial intelligence (AI)</b> and machine learning: systems that learn from data to make predictions or decisions (recommendations, chatbots, forecasting demand).</li>
              <li><b>Big data</b>: huge, fast-changing data sets (every click by millions of users) that need special tools to analyse.</li>
              <li><b>Cloud computing</b>: storing data and running software on remote servers over the internet.</li>
              <li><b>Internet of things (IoT)</b>: everyday devices connected to the internet that collect and share data (smart shelves, delivery trackers, fitness watches).</li>
              <li><b>Virtual reality (VR)</b>: computer-generated environments, e.g. trying on sneakers virtually or training staff.</li></ul>
          <p>These can cut costs and improve decisions, but are costly, need skills, and raise ethical and security questions.</p>` },
        { title: 'Using data: loyalty, mining and monitoring', html: `
          <ul><li><b>Data mining</b>: searching large data sets for hidden patterns (people who buy X also buy Y).</li>
              <li><b>Customer loyalty programmes</b>: points, rewards and member deals that keep customers coming back and give the business data on what each customer buys.</li>
              <li><b>Employee monitoring</b>: tracking staff with data (keystrokes, delivery times, location). Taken to extremes, this is called <b>digital Taylorism</b>: like [[scientific management|Taylor's]] methods, but with software measuring every second of work.</li></ul>` },
        { title: 'The ethics of data', html: `
          <p>Ethical questions for businesses using data:</p>
          <ul><li><b>Privacy and consent</b>: do customers know what is collected and agree to it?</li>
              <li><b>Security</b>: is the data properly protected?</li>
              <li><b>Fairness</b>: can AI decisions be biased (e.g. in hiring)?</li>
              <li><b>Employee wellbeing</b>: does constant monitoring cause stress, distrust and lower [[motivation]]?</li></ul>
          <div class="example">${sf} decides to show customers exactly what data its app collects, lets them turn off personalised offers, and doesn't track staff by the minute.</div>` }
      ],
      labs: [
        {
          type: 'sort', title: 'Name the technology',
          challenge: 'Sort all 8 correctly in one go.',
          buckets: ['AI', 'Big data', 'Internet of things', 'Virtual reality'],
          items: [
            { t: '🤖 A chatbot answering customer questions', b: 0 },
            { t: '🎯 Software that learns which sneakers you\'ll like', b: 0 },
            { t: '📊 Analysing millions of clicks across Europe every hour', b: 1 },
            { t: '🌐 Combining weather, social and sales data for all stores', b: 1 },
            { t: '📦 Smart shelves that report when stock is low', b: 2 },
            { t: '🚚 Parcels with trackers sending their location', b: 2 },
            { t: '🥽 Trying on sneakers in a headset', b: 3 },
            { t: '🏬 Training new staff in a simulated store', b: 3 }
          ]
        },
        {
          type: 'scenarios', title: 'Data dilemmas',
          challenge: 'Pick the most responsible option in all 3 cases.',
          items: [
            { s: 'SoleFlip could sell its customer email list to a phone company for $5,000.', options: [
              { t: 'Refuse: customers didn\'t consent to that use', ok: true, fb: 'Yes: it breaks trust and GDPR, and the damage to the brand would cost far more than $5,000.' },
              { t: 'Sell it: the data belongs to SoleFlip', ok: false, fb: 'Personal data belongs to the people it describes; using it without consent is illegal in the EU.' },
              { t: 'Sell only the under-18s\' emails', ok: false, fb: 'Even worse: children\'s data has extra protection.' }] },
            { s: 'Staff are getting phishing emails pretending to be the bank.', options: [
              { t: 'Train staff to spot phishing and turn on two-factor login', ok: true, fb: 'Yes: people are often the weakest link, and two-factor login stops stolen passwords working.' },
              { t: 'Ignore it: nobody would fall for it', ok: false, fb: 'Phishing works because people are busy. One click can be enough.' },
              { t: 'Ban all email use', ok: false, fb: 'Unrealistic: the business needs email.' }] },
            { s: 'Noah wants software that records every keystroke and screenshot of the online team, all day.', options: [
              { t: 'Use clear, agreed targets instead of constant monitoring', ok: true, fb: 'Yes: digital Taylorism can damage trust and motivation; agreed goals measure what matters.' },
              { t: 'Install it secretly so staff behave naturally', ok: false, fb: 'Secret monitoring is unethical and often illegal.' },
              { t: 'Install it and dock pay for every idle minute', ok: false, fb: 'This creates stress, distrust and high labour turnover.' }] }
          ]
        }
      ],
      worked: {
        title: 'Evaluate a loyalty app (exam style)',
        intro: `<p><b>Question:</b> ${sf} plans a loyalty app: 1 point per $1 spent, a free cleaning at 200 points, and personalised offers from each customer's data. Building it costs <b>$15,000</b>. <i>Evaluate</i> the plan. [10 marks]</p>`,
        steps: [
          { prompt: 'How does it help marketing?', answer: 'Repeat purchases and brand loyalty; data mining shows what each customer buys, so offers are targeted and marketing money isn\'t wasted.' },
          { prompt: 'How does the data help operations?', answer: 'Better sales forecasts by product and store, so SoleFlip orders the right stock (fewer stock-outs and less excess stock).' },
          { prompt: 'Costs and risks?', answer: '$15,000 to build plus upkeep; the cost of rewards; a data breach would be a crisis (GDPR fines, lost trust); some customers find personal offers creepy.' },
          { prompt: 'Ethical conditions?', answer: 'Clear consent, a way to opt out of personalised offers, strong security, and no selling of data.' },
          { prompt: 'Judgement.', answer: '"Launch it, because the data improves both marketing and stock planning, <i>provided</i> SoleFlip invests in cybersecurity and is transparent about data. Without that, one breach could cost more than the app ever earns."' }
        ],
        takeaway: 'MIS answers should link data to better decisions in several functions, and weigh this against cost, security and ethics.'
      },
      quiz: [
        { id: '5.9-1', type: 'mcq', cmd: 'Define', q: '<span class="tag">HL</span> <b>Data analytics</b> means…', options: ['examining data to find patterns and insights for decisions', 'storing customer data on remote servers over the internet', 'protecting data from hackers with passwords and firewalls', 'connecting everyday devices to the internet to share data'], answer: 0, why: 'Analytics turns data into insight. The others describe cloud computing, cybersecurity and the IoT.' },
        { id: '5.9-2', type: 'mcq', cmd: 'Identify', q: '<span class="tag">HL</span> Hackers lock SoleFlip\'s files and demand $10,000 to unlock them. This is…', options: ['ransomware', 'phishing', 'data mining', 'big data'], answer: 0, why: 'Ransomware encrypts files and demands payment. Phishing tricks people into giving away details.' },
        { id: '5.9-3', type: 'mcq', cmd: 'Explain', q: '<span class="tag">HL</span> Why do businesses run <b>customer loyalty programmes</b>?', options: ['To encourage repeat purchases and collect data on what customers buy', 'To raise prices for loyal customers because they will pay the higher price anyway', 'To reduce the number of products the business needs to sell', 'To avoid having to follow data-protection laws for members'], answer: 0, why: 'Rewards bring customers back, and every purchase adds data for targeted marketing and forecasting.' },
        { id: '5.9-4', type: 'mcq', cmd: 'Define', q: '<span class="tag">HL</span> <b>Digital Taylorism</b> is…', options: ['using technology to monitor and control every part of employees\' work', 'using AI tools to design new products much faster than human designers can', 'storing every employee\'s personal data in a single database', 'paying employees by the number of digital tasks completed'], answer: 0, why: 'It applies Taylor\'s close control of work to the digital age: software measures and directs every task.' },
        { id: '5.9-5', type: 'tf', q: '<span class="tag">HL</span> Because customer data helps a business, it can use it in any way it likes.', answer: false, why: 'False. Laws like the GDPR require consent and security, and misuse damages trust.' },
        { id: '5.9-6', type: 'sort', q: '<span class="tag">HL</span> Cybersecurity measure or cybercrime?', buckets: ['Cybersecurity', 'Cybercrime'], items: [
          { t: 'Two-factor login', b: 0 }, { t: 'Staff training on phishing', b: 0 }, { t: 'Daily back-ups', b: 0 },
          { t: 'Ransomware attack', b: 1 }, { t: 'Phishing email', b: 1 }, { t: 'Stealing card details', b: 1 }], why: 'Security measures protect systems and data; cybercrime attacks them.' },
        { id: '5.9-7', type: 'mcq', cmd: 'Identify', q: '<span class="tag">HL</span> Smart shelves that report when stock is low are an example of…', options: ['the internet of things', 'virtual reality', 'digital Taylorism', 'a loyalty programme'], answer: 0, why: 'Everyday devices connected to the internet and sharing data = IoT.' }
      ],
      explain: 'Think of an app that sends you personalised offers. Explain to a mate what <b>data</b> it probably collects, how the business uses it, and one <b>ethical</b> worry.'
    }
  ],
  formulas: [
    { group: '5.5 Break-even analysis', items: [
      { name: 'Contribution per unit', f: M`\text{price} - \text{variable cost per unit}` },
      { name: 'Total contribution', f: M`\text{contribution per unit} \times \text{quantity}` },
      { name: 'Profit', f: M`\text{total contribution} - \text{fixed costs}` },
      { name: 'Break-even quantity', f: M`\frac{\text{fixed costs}}{\text{contribution per unit}}`, note: 'Round up to a whole unit.' },
      { name: 'Break-even revenue', f: M`\text{break-even quantity} \times \text{price}` },
      { name: 'Margin of safety', f: M`\text{actual output} - \text{break-even quantity}` },
      { name: 'Target profit output', f: M`\frac{\text{fixed costs} + \text{target profit}}{\text{contribution per unit}}` },
      { name: 'Target price', f: M`\frac{\text{fixed costs} + \text{target profit}}{\text{quantity}} + \text{variable cost per unit}` }] },
    { group: '5.3 and 5.6 Quality and production planning', items: [
      { name: 'Defect rate', f: M`\frac{\text{number of defective units}}{\text{total output}} \times 100`, hl: true },
      { name: 'Capacity utilization rate', f: M`\frac{\text{actual output}}{\text{productive capacity}} \times 100`, hl: true },
      { name: 'Labour productivity', f: M`\frac{\text{total output}}{\text{total hours worked}}`, hl: true },
      { name: 'Capital productivity', f: M`\frac{\text{total output}}{\text{total capital input}}`, hl: true },
      { name: 'Productivity rate', f: M`\frac{\text{total output}}{\text{total input}} \times 100`, hl: true },
      { name: 'Cost to buy (CTB)', f: M`\text{price per unit} \times \text{quantity}`, hl: true },
      { name: 'Cost to make (CTM)', f: M`\text{total fixed costs} + \text{variable cost per unit} \times \text{quantity}`, hl: true },
      { name: 'Reorder level', f: M`\text{buffer stock} + \text{usage per period} \times \text{lead time}`, hl: true, note: 'Not on the IB formula sheet, but needed to read and draw stock control charts. Maximum stock = buffer + reorder quantity.' }] }
  ]
};
