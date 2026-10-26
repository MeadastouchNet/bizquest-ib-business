// Unit 2: Human resource management (IB Business Management guide, first assessment 2024).
// Running case: SoleFlip Ltd grows from Noah, Freja and two shop staff into a team of about 20 (Copenhagen store,
// Aarhus pop-up, customising workshop, online). The same people (Maja, Omar, Liv, Sami, Emil) appear in every
// topic, and the staff numbers in 2.1 (18 → 22 staff, 5 leavers) are reused in 2.2.

import { M, F, A, tbl } from './helpers.js';

const sf = '<b>SoleFlip</b>';

export const unit2 = {
  id: '2',
  title: 'Human resource management',
  emoji: '👥',
  blurb: 'SoleFlip Ltd has outgrown "Noah and Freja do everything". There is a store in Copenhagen, a pop-up in Aarhus, a customising workshop and about 20 staff. Who should they hire, how should they organize them, lead them, pay them and talk to them, and what happens when it goes wrong? You are SoleFlip\'s head of people for this unit.',
  sections: [
    // ------------------------------------------------------------------ 2.1
    {
      id: '2.1', title: 'Introduction to human resource management', emoji: '🧑‍🤝‍🧑', minutes: 15, hl: 'part',
      goal: 'explain the role of HRM and workforce planning, calculate labour turnover, and explain recruitment, training, appraisal and the factors that change HR plans.',
      hook: `Every December ${sf} hires extra staff for the Christmas rush. This year <b>5 of its 20 staff</b> quit during the year anyway, two of them right before Black Friday. Freja spent a whole week reading CVs instead of designing.<br><br>How many people should ${sf} hire next year, where should it find them, and how does it stop them leaving?`,
      cards: [
        { title: 'The role of HRM and workforce planning', html: `
          <p><b>Human resource management (HRM)</b> is managing the people in an organization so it has the right staff, with the right skills, in the right place at the right time.</p>
          <p>HR's jobs: <b>workforce planning</b>, recruitment, training, appraisal, pay and rewards, dismissal and redundancy, and looking after staff wellbeing.</p>
          <p><b>Workforce planning</b> (human resource planning) means forecasting how many staff the business will need, and with which skills, then planning how to get them.</p>
          <div class="example">${sf} plans to open a second store next year. It needs 4 more sales staff and someone who can run the laser machine. HR must find, hire and train them <i>before</i> opening day.</div>` },
        { title: 'Labour turnover', html: `
          <p><b>Labour turnover</b> measures the share of staff who leave in a year.</p>
          ${F`\text{Labour turnover} = \frac{\text{number of employees leaving}}{\text{average number of employees}} \times 100`}
          <div class="example">${sf}: 18 staff on 1 January, 22 on 31 December, so the average is (18 + 22) ÷ 2 = 20. 5 people left. Turnover = 5 ÷ 20 × 100 = <b>25%</b>.</div>
          <p>High turnover costs money (recruiting and training replacements), loses skills and can mean staff are unhappy. Some turnover is healthy: new people bring new ideas.</p>
          <div class="tip">Always compare: with last year, with the industry (retail and festivals often have high turnover) and with the business's own target. A number on its own says little.</div>` },
        { title: 'What changes the HR plan?', html: `
          <p><b>Internal factors</b>: the business's own plans (growth, a new store, new machines), its budget, its labour turnover and the skills staff already have.</p>
          <p><b>External factors</b>:</p>
          <ul><li><b>Demographic change</b>: an ageing population means fewer young workers.</li>
              <li><b>Labour mobility</b>: how easily workers move between jobs and countries (e.g. free movement in the EU).</li>
              <li><b>Technology</b>: new software or machines replace some jobs and need new skills.</li>
              <li><b>New work patterns</b>: <b>teleworking</b> (working from home), <b>flexitime</b> (staff choose their hours around a core time), part-time and zero-hours contracts, and the <b>gig economy</b> (short tasks paid per job, like food delivery).</li>
              <li><b>Laws</b>: minimum wages, working hours, anti-discrimination rules.</li></ul>
          <p>Businesses can also <b>outsource</b> work (pay another firm to do it), <b>offshore</b> it (move it abroad) or <b>reshore</b> it (bring it back home).</p>` },
        { title: 'Recruitment, dismissal and redundancy', html: `
          <p><b>Recruitment</b> is finding and hiring new staff. The usual steps: identify the vacancy → write a job description and person specification → advertise → shortlist → interview or test → appoint.</p>
          <ul><li><b>Internal recruitment</b> (promote someone already there): cheaper, quicker, they know the business, and it motivates others. But no fresh ideas, and it leaves another gap.</li>
              <li><b>External recruitment</b> (hire from outside): a bigger pool of talent and new ideas. But slower, costs more, and riskier.</li></ul>
          <p>People can leave against their will in two ways:</p>
          <ul><li><b>Dismissal</b>: the employee is fired because of <i>them</i>, e.g. serious misconduct or poor performance after warnings.</li>
              <li><b>Redundancy</b>: the <i>job</i> is no longer needed, e.g. a store closes or a machine takes over. It isn't the worker's fault, and they usually get redundancy pay.</li></ul>` },
        { title: 'Training and appraisal', html: `
          <p><b>Training</b> gives staff the skills they need:</p>
          <ul><li><b>Induction training</b>: introduces new staff to the business, its rules, people and culture.</li>
              <li><b>On-the-job training</b>: learning while working, e.g. shadowing an experienced colleague. Cheap and realistic, but the trainer is less productive and bad habits can be passed on.</li>
              <li><b>Off-the-job training</b>: away from the workplace, e.g. a course or college. Expert teaching, but costly, and the trained worker may then leave for a better job.</li></ul>
          <p>Training can build <b>cognitive</b> skills (thinking, problem-solving) or <b>behavioural</b> skills (dealing with customers, teamwork, managing emotions).</p>
          <p><b>Appraisal</b> is the regular review of an employee's performance:</p>
          <ul><li><b>Formative</b>: ongoing feedback to help them improve. <b>Summative</b>: a final judgement, often linked to pay.</li>
              <li><b>360-degree feedback</b>: views from managers, colleagues, subordinates and even customers. <b>Self-appraisal</b>: the employee reviews themselves.</li></ul>` },
        { title: 'Resistance to change (HL only)', html: `
          <p><span class="tag">HL</span> When a business changes (new machines, new shifts, a move), staff often push back. <b>Resistance to change</b> happens because of:</p>
          <ul><li><b>Fear of the unknown</b> and of losing their job, pay or status.</li>
              <li><b>Self-interest</b>: the change is worse for <i>them</i>, even if better for the business.</li>
              <li><b>Low trust</b> or <b>poor communication</b>: staff hear rumours instead of reasons.</li>
              <li><b>Habit</b>: the old way is comfortable.</li></ul>
          <p>HR strategies to reduce resistance: explain early and honestly, <b>involve</b> staff in planning the change, offer <b>training and support</b>, use <b>incentives</b> (e.g. a bonus for learning the new system), and bring the change in gradually. Forcing it through (coercion) is quick but damages trust.</p>
          <div class="example">${sf} moves its workshop to new software. Omar refuses to use it. Freja shows him how it saves him an hour a day, lets him test it first and pays for a short course. He becomes its biggest fan.</div>` }
      ],
      labs: [
        {
          type: 'sort', title: 'Name the training',
          challenge: 'Sort all 8 into the right type of training in one go.',
          buckets: ['Induction', 'On-the-job', 'Off-the-job'],
          items: [
            { t: '🗺️ A tour of the store and meeting the team on day 1', b: 0 },
            { t: '📜 Learning the returns policy and safety rules in week 1', b: 0 },
            { t: '👀 Shadowing Omar while he customises a pair', b: 1 },
            { t: '🧑‍🏫 Maja coaching a new seller during a busy Saturday', b: 1 },
            { t: '🔁 Trying each job in the store for a week', b: 1 },
            { t: '🎓 A two-day laser-engraving course in Odense', b: 2 },
            { t: '💻 An online retail-management course in the evenings', b: 2 },
            { t: '🏫 A college day each week as part of an apprenticeship', b: 2 }
          ]
        },
        {
          type: 'scenarios', title: 'Inside or outside?',
          challenge: 'Choose the best recruitment option for all 3 vacancies.',
          items: [
            { s: 'Maja is moving to open the new Odense store. SoleFlip needs a new Copenhagen store manager <b>fast</b>, and Liv has worked there for 2 years and knows every regular.', options: [
              { t: 'Promote Liv (internal recruitment)', ok: true, fb: 'Yes: quick and cheap, she knows the store and customers, and it shows other staff they can get promoted.' },
              { t: 'Advertise nationally and take 3 months', ok: false, fb: 'Too slow, and it ignores a strong candidate who is already there.' },
              { t: 'Leave the store without a manager', ok: false, fb: 'Nobody would be responsible for staff, stock and cash.' }] },
            { s: 'SoleFlip wants to start selling in Germany. Nobody in the team speaks German or knows German online marketplaces.', options: [
              { t: 'Recruit externally for someone with that experience', ok: true, fb: 'Yes: the skills don\'t exist inside the business, and an outsider brings new knowledge.' },
              { t: 'Promote whoever has worked there longest', ok: false, fb: 'Length of service doesn\'t give them German or market knowledge.' },
              { t: 'Ask Noah to learn German in a month', ok: false, fb: 'Unrealistic, and Noah already has a business to run.' }] },
            { s: 'For the Christmas rush SoleFlip needs 6 extra people to pack online orders for 5 weeks.', options: [
              { t: 'Hire temporary staff (or use an agency)', ok: true, fb: 'Yes: the need is short-term and the job is simple, so temporary contracts keep costs flexible.' },
              { t: 'Hire 6 permanent full-time staff', ok: false, fb: 'In January there would be no work for them, but SoleFlip would still have to pay them.' },
              { t: 'Make the store staff pack at night for free', ok: false, fb: 'Illegal (unpaid work) and a fast way to raise labour turnover.' }] }
          ]
        }
      ],
      worked: {
        title: 'Labour turnover, then explain it (exam style)',
        intro: `<p><b>Question:</b> ${sf} had <b>18</b> employees on 1 January and <b>22</b> on 31 December. <b>5</b> employees left during the year. (a) <i>Calculate</i> the labour turnover. [2 marks] (b) <i>Explain</i> one way ${sf} could reduce it. [4 marks]</p>`,
        steps: [
          { prompt: 'What is the average number of employees?', answer: '(18 + 22) ÷ 2 = <b>20</b>' },
          { prompt: 'What is the labour turnover?', answer: '5 ÷ 20 × 100 = <b>25%</b>. Show the formula and the working: that\'s where the marks are.' },
          { prompt: 'Is 25% high? What could it cost SoleFlip?', answer: 'It means 1 in 4 staff left. Each replacement costs advertising, Freja\'s interview time and training, and new staff sell less in their first weeks.' },
          { prompt: 'Explain one way to reduce it.', answer: '<b>Better induction and training</b>: new staff who feel confident and part of the team are less likely to quit in the first months, so SoleFlip saves on recruitment and keeps experienced sellers for the busy season.' }
        ],
        takeaway: 'Calculation: formula → working → answer with units (%). Explanation: name the method, link it to the case, and say why it lowers turnover.'
      },
      quiz: [
        { id: '2.1-1', type: 'mcq', cmd: 'Define', q: '<b>Workforce planning</b> means…', options: ['forecasting the number and skills of staff needed, and planning how to get them', 'deciding how much each employee should be paid for the work they do each month', 'writing the job description and advert for a vacancy that has just opened up', 'checking the performance of each employee once a year against the targets they agreed'], answer: 0, why: 'Workforce (human resource) planning looks ahead: how many people, with which skills, and how to find them. Pay, adverts and appraisal are separate HR jobs.' },
        { id: '2.1-2', type: 'num', cmd: 'Calculate', q: 'Complete the table to find SoleFlip\'s <b>labour turnover</b>.' + tbl(['', 'Employees'], [['Employees on 1 January', '18'], ['Employees on 31 December', '22'], ['Average number of employees', A(20)], ['Employees who left during the year', '5'], ['<b>Labour turnover (%)</b>', A(25, true)]]), answer: 25, unit: '%', display: '25%', hint: 'Average = (start + end) ÷ 2; turnover = leavers ÷ average × 100.', why: 'Average = (18 + 22) ÷ 2 = 20. Turnover = 5 ÷ 20 × 100 = 25%.' },
        { id: '2.1-3', type: 'num', cmd: 'Calculate', q: 'A festival employs an average of <b>80</b> staff over the season, and <b>12</b> of them leave before it ends. What is the labour turnover?', answer: 15, unit: '%', display: '15%', hint: 'Leavers ÷ average number of staff × 100', why: '12 ÷ 80 × 100 = 15%.' },
        { id: '2.1-4', type: 'num', cmd: 'Calculate', q: 'A supermarket has an average of <b>250</b> employees and a labour turnover of <b>8%</b>. How many employees left during the year?', answer: 20, display: '20 employees', hint: 'Rearrange: leavers = turnover ÷ 100 × average staff', why: '8 ÷ 100 × 250 = 20 employees.' },
        { id: '2.1-5', type: 'mcq', cmd: 'Distinguish', q: 'A store closes and its 6 workers lose their jobs. This is…', options: ['redundancy, because the jobs no longer exist', 'dismissal, because the workers did something wrong', 'labour turnover, because the workers chose to leave', 'outsourcing, because the work moves to another firm'], answer: 0, why: 'Redundancy = the <i>job</i> disappears. Dismissal = the <i>person</i> is let go because of their conduct or performance.' },
        { id: '2.1-6', type: 'sort', q: 'Internal or external factor affecting SoleFlip\'s workforce plan?', buckets: ['Internal', 'External'], items: [
          { t: 'Plans to open a second store', b: 0 }, { t: 'A rise in the minimum wage', b: 1 }, { t: 'Fewer 16–20-year-olds in Denmark', b: 1 },
          { t: 'A new laser machine bought by Noah', b: 0 }, { t: 'A competitor paying higher wages nearby', b: 1 }, { t: 'SoleFlip\'s own high labour turnover', b: 0 }], why: 'Internal = decisions and data inside the business. External = demographics, laws, competitors and the labour market.' },
        { id: '2.1-7', type: 'mcq', cmd: 'Identify', q: 'Which is a <b>drawback of internal recruitment</b>?', options: ['It brings in no new ideas and leaves another vacancy to fill', 'It costs more because adverts must reach a much wider pool', 'It takes longer, because nobody in the firm knows the candidates', 'It demotivates staff because they see no route to promotion'], answer: 0, why: 'Internal recruitment is quick and cheap and motivates staff, but the pool is small, no fresh ideas come in, and the promoted person\'s old job must be filled.' },
        { id: '2.1-8', type: 'tf', q: 'A labour turnover of 0% is always the best outcome for a business.', answer: false, why: 'False. Some turnover brings new ideas and skills, and lets a business adjust its size. Very high turnover is the problem.' },
        { id: '2.1-9', type: 'mcq', cmd: 'Identify', q: 'Colleagues, a manager and two customers all give feedback on Liv\'s work. This is…', options: ['360-degree feedback', 'Self-appraisal', 'Summative appraisal', 'Induction training'], answer: 0, why: '360-degree = feedback from all around the employee: above, alongside, below and outside.' },
        { id: '2.1-10', type: 'mcq', cmd: 'Explain', q: '<span class="tag">HL</span> Which is the best way to reduce staff <b>resistance to change</b> when introducing new software?', options: ['Involve staff early, explain why, and train them before it starts', 'Announce it on the day so there is no time to complain about it', 'Tell staff that anyone who doesn\'t use it will lose their job', 'Keep the reasons secret so that competitors cannot copy the whole idea'], answer: 0, why: 'Communication, involvement and training reduce fear and build trust. Surprise and threats (coercion) increase resistance and damage motivation.' }
      ],
      explain: 'Think of a part-time job you or a friend has had. Explain to a mate what <b>induction training</b> you got (or didn\'t), and how it affected whether you wanted to stay.'
    },

    // ------------------------------------------------------------------ 2.2
    {
      id: '2.2', title: 'Organizational structure', emoji: '🏗️', minutes: 14, hl: 'part',
      goal: 'use the key terms of organizational structure, compare flat and tall structures, and explain structures by function, product and region (and HL: matrix and project-based).',
      hook: `When ${sf} was 4 people, everyone just shouted across the workshop. Now there are 22. Liv in Copenhagen doesn't know whether to ask Maja, Freja or Noah about a refund. Omar gets three different instructions in one morning.<br><br>Who reports to whom? It's time to draw ${sf}'s first <b>organizational chart</b>.`,
      cards: [
        { title: 'The key terms', html: `
          <p>An <b>organizational structure</b> shows how jobs, responsibility and authority are arranged. It is drawn as an <b>organizational chart</b>.</p>
          <ul><li><b>Levels of hierarchy</b>: the number of layers of management and staff, from top to bottom.</li>
              <li><b>Chain of command</b>: the line of authority from the top to the bottom, which instructions pass down and reports pass up.</li>
              <li><b>Span of control</b>: the number of people who report <i>directly</i> to one manager.</li>
              <li><b>Delegation</b>: a manager passing authority to a subordinate to carry out a task. The manager stays responsible for the result.</li></ul>
          <div class="example">Maja manages 5 sellers in the Copenhagen store: her span of control is 5. Maja reports to Noah: the chain of command runs Noah → Maja → sellers.</div>` },
        { title: 'Centralization, decentralization, delayering', html: `
          <ul><li><b>Centralization</b>: most decisions are taken by a few people at the top. Consistent and fast in a crisis, but slow for local issues and demotivating lower down.</li>
              <li><b>Decentralization</b>: decision-making power is spread to managers lower down or in other locations. Quicker local decisions and more motivated managers, but less control and consistency.</li>
              <li><b>Delayering</b>: removing one or more levels of hierarchy, usually middle management. It cuts costs and speeds up communication, but widens spans of control and can hurt morale and promotion chances.</li>
              <li><b>Bureaucracy</b>: lots of rules, procedures and paperwork. Gives order and fairness, but slows everything down.</li></ul>
          <div class="example">Should Emil at the Aarhus pop-up decide his own window displays (decentralization) or wait for Freja to approve every one (centralization)?</div>` },
        { title: 'Flat vs tall structures', html: `
          <p>A <b>tall structure</b> has many levels of hierarchy and <b>narrow</b> spans of control.</p>
          <ul><li>✅ Close supervision, clear roles, lots of promotion steps.</li>
              <li>❌ Long chain of command: messages get distorted and decisions are slow; higher management costs.</li></ul>
          <p>A <b>flat structure</b> has few levels and <b>wide</b> spans of control.</p>
          <ul><li>✅ Fast communication, lower costs, staff get more freedom and responsibility.</li>
              <li>❌ Managers may be overloaded; fewer promotion chances; staff need to be skilled and self-motivated.</li></ul>
          <div class="tip">Wide spans work when staff are experienced and the work is similar. Narrow spans suit new staff or complex, risky work. Say which applies to the case.</div>` },
        { title: 'Structures by function, product and region', html: `
          <p>Below the top, a business can group its people by:</p>
          <ul><li><b>Function</b>: departments for marketing, finance, HR, operations. Specialists work together, but departments can become "silos" that don't talk to each other.</li>
              <li><b>Product</b>: a team for each product line, e.g. SoleFlip <i>Resell</i>, <i>Custom</i>, <i>Cleaning</i>. Each team focuses on its customers, but functions like marketing get duplicated.</li>
              <li><b>Region</b>: a team for each area, e.g. Copenhagen, Aarhus, online. Good for local tastes, laws and languages; common in [[multinational company|multinationals]].</li></ul>
          <div class="example">LEGO has regional teams (Americas, Europe, Asia), and inside each one, functional departments.</div>` },
        { title: 'Matrix and project-based structures (HL only)', html: `
          <p><span class="tag">HL</span> A <b>matrix structure</b> puts people in teams that cut across departments. Each person has <b>two bosses</b>: their functional manager (e.g. head of marketing) and a project or product manager.</p>
          <ul><li>✅ Combines skills from different departments; flexible; good for complex projects.</li>
              <li>❌ Two bosses can give conflicting instructions; it is harder to know who is responsible.</li></ul>
          <p>A <b>project-based structure</b> organizes people around projects that start and end. Teams form for a project, then break up and join new ones.</p>
          <div class="example">For the SoleFlip × Roskilde Festival collab, Sami (marketing), Omar (workshop) and an accountant form a project team for 4 months, while still belonging to their own departments.</div>` }
      ],
      labs: [
        { type: 'structure', title: 'Design SoleFlip\'s hierarchy' },
        {
          type: 'scenarios', title: 'Which structure fits?',
          challenge: 'Pick the best structure for all 3 businesses.',
          items: [
            { s: 'A games studio has 30 experienced developers who work best with freedom and hate waiting for approval.', options: [
              { t: 'A flat structure with wide spans of control', ok: true, fb: 'Yes: skilled, self-motivated staff need little supervision, and decisions are quick.' },
              { t: 'A tall structure with spans of 2', ok: false, fb: 'Lots of managers checking work that experienced developers can do alone: slow and expensive.' },
              { t: 'Centralize every decision with the CEO', ok: false, fb: 'The CEO becomes a bottleneck for 30 people.' }] },
            { s: 'A Danish clothing brand sells in Scandinavia, Germany and the USA, where tastes, sizes and laws differ.', options: [
              { t: 'Organize by region', ok: true, fb: 'Yes: each regional team can adapt products, marketing and pricing to its market.' },
              { t: 'Organize only by function, run from Copenhagen', ok: false, fb: 'Head office would struggle to understand every local market.' },
              { t: 'One team for every single product', ok: false, fb: 'Products aren\'t the main difference here; the markets are.' }] },
            { s: '<span class="tag">HL</span> A car maker is developing an electric car that needs engineers, designers, marketers and finance staff to work closely for 2 years.', options: [
              { t: 'A matrix or project team that crosses departments', ok: true, fb: 'Yes: specialists from each function work together on one project while keeping their home department.' },
              { t: 'Keep each department separate and email each other', ok: false, fb: 'Silos slow down a complex project that needs constant cooperation.' },
              { t: 'Outsource the whole car to another firm', ok: false, fb: 'The firm would lose control of its most important new product.' }] }
          ]
        }
      ],
      worked: {
        title: 'Analyse a change in structure (exam style)',
        intro: `<p><b>Question:</b> ${sf} has 4 levels of hierarchy: Noah (CEO) → Freja and an operations manager → 3 store and workshop managers → 16 staff. To save $40,000 a year, Noah plans to remove the operations manager, so the store and workshop managers report straight to him. <i>Analyse</i> this decision. [6 marks]</p>`,
        steps: [
          { prompt: 'What is this change called?', answer: '<b>Delayering</b>: removing a level of hierarchy (here, a middle-management post).' },
          { prompt: 'What happens to Noah\'s span of control?', answer: 'It widens: the 3 store and workshop managers now report to him directly, on top of Freja.' },
          { prompt: 'Give two advantages, applied to SoleFlip.', answer: '<b>Saves $40,000</b> a year in salary. A <b>shorter chain of command</b>, so messages from the stores reach Noah faster and decisions are quicker.' },
          { prompt: 'Give two disadvantages, applied to SoleFlip.', answer: 'Noah may be <b>overloaded</b> and have less time for strategy. The store managers lose a promotion step, which may <b>demotivate</b> them. Remaining staff may fear more job cuts.' },
          { prompt: 'Round it off: what does success depend on?', answer: 'It works if the store managers are experienced enough to make more decisions themselves (decentralization), so Noah isn\'t a bottleneck.' }
        ],
        takeaway: '"Analyse" = name the concept, give advantages and disadvantages applied to the case, and show the links between them. A judgement is a bonus here, required in "evaluate".'
      },
      quiz: [
        { id: '2.2-1', type: 'mcq', cmd: 'Define', q: '<b>Span of control</b> is…', options: ['the number of people who report directly to one manager', 'the number of levels of hierarchy in an organization', 'the line of authority from the top to the bottom', 'the amount of authority a manager passes down to their team'], answer: 0, why: 'Span = how wide one manager\'s team is. Levels of hierarchy = how tall the structure is. The line of authority is the chain of command.' },
        { id: '2.2-2', type: 'num', cmd: 'Calculate', q: 'A business has one managing director and a span of control of <b>4</b> at every level. It has <b>4 levels</b> of hierarchy, all full. Complete the table: how many people work there in total?' + tbl(['Level', 'People'], [['1 (managing director)', '1'], ['2', A(4)], ['3', A(16)], ['4', A(64)], ['<b>Total</b>', A(85, true)]]), answer: 85, display: '85 people', hint: 'Each level has 4 times as many people as the level above.', why: '1 + 4 + 16 + 64 = 85. Only the 64 at the bottom have nobody reporting to them.' },
        { id: '2.2-3', type: 'mcq', cmd: 'Identify', q: 'A business removes a layer of middle managers. What is this called?', options: ['Delayering', 'Delegation', 'Decentralization', 'Redundancy pay'], answer: 0, why: 'Delayering = removing levels of hierarchy. It often comes with redundancies, but the term for the structural change is delayering.' },
        { id: '2.2-4', type: 'sort', q: 'Feature of a tall or a flat structure?', buckets: ['Tall', 'Flat'], items: [
          { t: 'Narrow spans of control', b: 0 }, { t: 'Many promotion steps', b: 0 }, { t: 'Long chain of command', b: 0 },
          { t: 'Wide spans of control', b: 1 }, { t: 'Fast communication top to bottom', b: 1 }, { t: 'Lower management costs', b: 1 }], why: 'Tall = many levels, narrow spans, close control but slow. Flat = few levels, wide spans, fast and cheap but managers stretched.' },
        { id: '2.2-5', type: 'tf', q: 'When a manager delegates a task, they are no longer responsible for the result.', answer: false, why: 'False. Authority to do the task is passed down, but the manager stays accountable for the outcome.' },
        { id: '2.2-6', type: 'mcq', cmd: 'Explain', q: 'Why might a business with stores in many countries choose <b>decentralization</b>?', options: ['Local managers understand local customers and can react faster', 'Head office can make sure every store looks exactly the same', 'It means senior managers keep tighter control over all spending', 'It removes the need for any managers in the individual stores'], answer: 0, why: 'Decentralization moves decisions closer to the market. The cost is less consistency and control from head office.' },
        { id: '2.2-7', type: 'mcq', cmd: 'Identify', q: 'SoleFlip groups its staff into a Resell team, a Custom team and a Cleaning team. This is a structure by…', options: ['product', 'function', 'region', 'hierarchy'], answer: 0, why: 'Each team is built around one product line. By function would be marketing, finance, HR and operations departments.' },
        { id: '2.2-8', type: 'mcq', cmd: 'Identify', q: '<span class="tag">HL</span> Which is the main drawback of a <b>matrix structure</b>?', options: ['Staff have two bosses who may give conflicting instructions', 'Specialists from different departments never work together', 'It has the longest chain of command of any structure', 'It can only be used by sole traders and partnerships'], answer: 0, why: 'In a matrix each person reports to a functional manager and a project manager. Great for cooperation, but lines of authority can clash.' },
        { id: '2.2-9', type: 'tf', q: 'A wide span of control works best when staff are experienced and do similar tasks.', answer: true, why: 'True. They need little supervision, so one manager can look after many of them.' }
      ],
      explain: 'Draw (in words) the organizational chart of your school, your sports club or a shop you know. Explain to a mate whether it is <b>tall or flat</b>, and one problem that causes.'
    },

    // ------------------------------------------------------------------ 2.3
    {
      id: '2.3', title: 'Leadership and management', emoji: '🧭', minutes: 12, hl: false,
      goal: 'explain the functions of management, distinguish management from leadership, and evaluate autocratic, paternalistic, democratic, laissez-faire and situational leadership.',
      hook: `Two people run shifts at ${sf}. When <b>Maja</b> is on, every task is planned to the minute and nothing goes wrong, but nobody suggests anything new. When <b>Emil</b> is on, the team invents a TikTok series that gets 200,000 views, and also forgets to restock the shelves.<br><br>Who is the better boss? Maybe that's the wrong question.`,
      cards: [
        { title: 'What do managers do?', html: `
          <p><b>Management</b> means getting things done through other people, using the business's resources efficiently to reach its objectives. Henri Fayol described five functions:</p>
          <ul><li><b>Planning</b>: setting objectives and deciding how to reach them.</li>
              <li><b>Organizing</b>: arranging the people, money and materials needed.</li>
              <li><b>Commanding</b>: giving instructions and directing staff.</li>
              <li><b>Coordinating</b>: making sure different people and departments work together.</li>
              <li><b>Controlling</b>: checking results against the plan and putting things right.</li></ul>
          <div class="example">Black Friday at SoleFlip: Maja <i>plans</i> the sales target, <i>organizes</i> extra stock and staff, <i>commands</i> the rota, <i>coordinates</i> the store with the online team, and <i>controls</i> by checking sales every hour.</div>` },
        { title: 'Management vs leadership', html: `
          <p><b>Leadership</b> is influencing and inspiring people to work towards a goal. Managers focus on <b>systems, tasks and control</b>; leaders focus on <b>people, vision and change</b>.</p>
          <table class="fin"><tr><th>Managers…</th><th>Leaders…</th></tr>
            <tr><td>plan and organize</td><td>set a vision</td></tr>
            <tr><td>keep things running</td><td>drive change</td></tr>
            <tr><td>get authority from their job title</td><td>get followers by trust and example</td></tr></table>
          <p>The best bosses do both. You can be a leader without a management title: the team captain who gets everyone training harder.</p>` },
        { title: 'Autocratic and paternalistic leadership', html: `
          <p><b>Autocratic</b>: the leader makes decisions alone and tells staff what to do. Communication is one-way, top-down.</p>
          <ul><li>✅ Fast decisions, clear in a crisis or with untrained staff. ❌ Staff feel ignored, ideas are lost, motivation falls.</li></ul>
          <p><b>Paternalistic</b>: the leader still decides, but acts like a caring parent: they consult staff and look after their welfare, believing they know what is best for them.</p>
          <ul><li>✅ Staff feel looked after and are loyal. ❌ Staff may feel treated like children and become dependent.</li></ul>
          <div class="example">Maja's style is mostly autocratic: precise, reliable and good when the store is packed. Her team does what she says, but doesn't suggest improvements.</div>` },
        { title: 'Democratic and laissez-faire leadership', html: `
          <p><b>Democratic</b>: the leader involves staff in decisions, discusses options and often lets the majority decide.</p>
          <ul><li>✅ More ideas, staff feel valued, more committed to decisions. ❌ Slower; not suitable in a crisis or when staff lack knowledge.</li></ul>
          <p><b>Laissez-faire</b> ("let them do"): the leader gives staff the goal and leaves them almost total freedom to decide how.</p>
          <ul><li>✅ Great for creative, expert, self-motivated staff. ❌ Without direction, work can drift; deadlines and dull tasks get forgotten.</li></ul>
          <div class="example">Emil is laissez-faire: perfect for the creative TikTok team, risky for restocking shelves.</div>` },
        { title: 'Situational leadership', html: `
          <p><b>Situational leadership</b>: no single style is best. A good leader changes style to fit the <b>situation</b>: the task, the time available and the skills and confidence of the team.</p>
          <ul><li>A new, unsure employee needs clear direction (more autocratic).</li>
              <li>A capable but nervous one needs coaching and support.</li>
              <li>An expert, confident team can be given freedom (more laissez-faire, plenty of [[delegation]]).</li>
              <li>A crisis needs fast, clear decisions.</li></ul>
          <div class="tip">In "evaluate the leadership style" questions, the top answers say <i>it depends</i>: on the staff, the task, the urgency and the culture. Then make a judgement for the case.</div>` }
      ],
      labs: [{
        type: 'scenarios', title: 'Be the situational leader',
        challenge: 'Pick the best leadership style for all 4 situations.',
        items: [
          { s: 'A fire alarm goes off in the packed Copenhagen store on a Saturday.', options: [
            { t: 'Autocratic: give clear orders immediately', ok: true, fb: 'Yes: in an emergency there is no time to discuss. People need clear, fast instructions.' },
            { t: 'Democratic: ask the team how they\'d like to evacuate', ok: false, fb: 'A vote takes time that nobody has.' },
            { t: 'Laissez-faire: trust everyone to work it out', ok: false, fb: 'Without direction, people panic or ignore the alarm.' }] },
          { s: 'Sami\'s social-media team are experienced creators who come up with the best ideas when left alone.', options: [
            { t: 'Laissez-faire: set the goal, then give them freedom', ok: true, fb: 'Yes: skilled, motivated, creative staff do their best work with autonomy.' },
            { t: 'Autocratic: approve every post personally', ok: false, fb: 'Slows them down and kills creativity.' },
            { t: 'Paternalistic: decide for them what\'s best', ok: false, fb: 'Experts don\'t need a "parent" deciding for them.' }] },
          { s: 'Noah wants to change the opening hours and knows staff have strong views and good local knowledge. There is a month to decide.', options: [
            { t: 'Democratic: discuss it with the staff first', ok: true, fb: 'Yes: there is time, staff know the customers, and they are more likely to accept a decision they helped make.' },
            { t: 'Autocratic: announce the new hours tomorrow', ok: false, fb: 'Possible, but it wastes their knowledge and risks resentment.' },
            { t: 'Laissez-faire: let each person choose their own hours', ok: false, fb: 'A store needs consistent hours that customers can rely on.' }] },
          { s: 'Three new 16-year-olds start their first-ever jobs at the Aarhus pop-up.', options: [
            { t: 'Clear direction and close support at first', ok: true, fb: 'Yes: beginners need instructions and coaching. Give more freedom as their skills grow (that\'s situational leadership).' },
            { t: 'Laissez-faire: let them figure the till out', ok: false, fb: 'Without guidance they make mistakes and lose confidence.' },
            { t: 'Democratic: let them vote on the refund policy', ok: false, fb: 'They don\'t have the knowledge to decide yet.' }] }
        ]
      }],
      worked: {
        title: 'Evaluate a leadership style (exam style)',
        intro: `<p><b>Question:</b> Maja leads the Copenhagen store in an <b>autocratic</b> style. Sales targets are always met, but labour turnover there is 30% and staff never suggest ideas. <i>Evaluate</i> Maja's leadership style. [10 marks]</p>`,
        steps: [
          { prompt: 'Define the style.', answer: '<b>Autocratic</b>: the leader makes decisions alone and gives instructions, with one-way communication.' },
          { prompt: 'What evidence in the case supports it?', answer: '<b>Targets are always met</b>: clear instructions and control work well in a busy store, especially with young, inexperienced staff.' },
          { prompt: 'What evidence goes against it?', answer: '<b>30% labour turnover</b> is high and costly. <b>No ideas</b> from staff, who talk to customers all day. Staff may feel ignored and demotivated.' },
          { prompt: 'Judgement: what should Maja do?', answer: '"Maja\'s style works for busy Saturdays, but overall it costs SoleFlip staff and ideas. She should use a <b>situational</b> approach: stay directive in rushes and with new staff, but consult experienced staff on displays and service. <i>This depends on</i> her willingness to change and her team\'s experience."' }
        ],
        takeaway: 'Evaluate = define → evidence for → evidence against → a judgement that says what it depends on.'
      },
      quiz: [
        { id: '2.3-1', type: 'mcq', cmd: 'Identify', q: 'Checking actual sales against the target and acting on the gap is which function of management?', options: ['Controlling', 'Planning', 'Commanding', 'Coordinating'], answer: 0, why: 'Controlling = measuring results against the plan and correcting. Planning sets the target in the first place.' },
        { id: '2.3-2', type: 'mcq', cmd: 'Distinguish', q: 'Which statement best shows the difference between <b>leadership</b> and <b>management</b>?', options: ['Leaders inspire people towards a vision; managers plan, organize and control the work', 'Leaders are always the most senior people; managers are always the most junior people', 'Managers make all the decisions; leaders only follow the decisions managers have made', 'Leadership is only needed in very big companies; management is only needed in small ones'], answer: 0, why: 'Management is about tasks and systems; leadership is about people, vision and change. Anyone can lead, whatever their job title.' },
        { id: '2.3-3', type: 'sort', q: 'Match each boss to their leadership style.', buckets: ['Autocratic', 'Paternalistic', 'Democratic', 'Laissez-faire'], items: [
          { t: '"Do it my way, no questions."', b: 0 }, { t: '"I\'ve decided what\'s best for you, and I\'ll look after you."', b: 1 },
          { t: '"Let\'s vote on the new rota."', b: 2 }, { t: '"Here\'s the goal. How you get there is up to you."', b: 3 },
          { t: 'Chooses everyone\'s training for them, out of concern for their welfare', b: 1 }, { t: 'Asks the team for ideas before deciding', b: 2 }], why: 'Autocratic tells; paternalistic decides but cares; democratic involves; laissez-faire lets go.' },
        { id: '2.3-4', type: 'tf', q: 'Situational leadership says one leadership style is best in every situation.', answer: false, why: 'False. It says the opposite: the best style depends on the situation, the task and the team.' },
        { id: '2.3-5', type: 'mcq', cmd: 'Explain', q: 'Why is a <b>democratic</b> style a poor choice in a crisis?', options: ['Discussing options takes time that a crisis doesn\'t allow', 'It means the leader has no authority over the staff at all', 'Staff never have useful ideas when something goes wrong', 'It is illegal for leaders to consult staff during a crisis'], answer: 0, why: 'Involving people is slow. In an emergency, fast and clear direction matters more.' },
        { id: '2.3-6', type: 'mcq', cmd: 'Identify', q: 'Which team is most suited to <b>laissez-faire</b> leadership?', options: ['Experienced designers working on a creative project', 'New apprentices on their first day with dangerous machines', 'Shop staff during an evacuation after a fire alarm', 'Temporary packers who will only work for two weeks'], answer: 0, why: 'Laissez-faire needs skilled, self-motivated staff and work where freedom helps, like creative projects.' },
        { id: '2.3-7', type: 'tf', q: 'A person can show leadership without having a management job title.', answer: true, why: 'True. A team captain or an experienced colleague can inspire others without formal authority.' },
        { id: '2.3-8', type: 'mcq', cmd: 'Identify', q: 'Which is a <b>disadvantage</b> of paternalistic leadership?', options: ['Staff may feel treated like children and rely on the leader', 'Decisions take very long because staff vote on everything', 'Staff are left with no direction and deadlines are missed', 'The leader shows no concern at all for staff welfare'], answer: 0, why: 'Paternalistic leaders care for staff but still decide for them, which can feel patronizing and reduce initiative.' }
      ],
      explain: 'Think of the best coach, teacher or boss you\'ve had. Explain to a mate which <b>leadership style</b> they used, and whether it would work in a different situation.'
    },

    // ------------------------------------------------------------------ 2.4
    {
      id: '2.4', title: 'Motivation and demotivation', emoji: '🔥', minutes: 18, hl: 'part',
      goal: 'explain the motivation theories of Taylor, Maslow and Herzberg (HL: McClelland, Deci and Ryan, Adams and Vroom), and evaluate financial and non-financial rewards.',
      hook: `Noah gives everyone at ${sf} a <b>$100 pay rise</b>. Two weeks later, nobody is working any harder. Then Freja lets Omar design his own limited-edition sneaker, with his name on the box. Omar works until midnight, unpaid, because he wants to.<br><br>So what actually makes people work hard: money, or something else?`,
      cards: [
        { title: 'Motivation and Taylor', html: `
          <p><b>Motivation</b> is the drive that makes people work hard and well. <b>Intrinsic</b> motivation comes from the work itself (it's interesting, you're proud of it); <b>extrinsic</b> motivation comes from outside rewards (pay, bonuses, praise).</p>
          <p><b>Frederick Taylor</b> (scientific management, early 1900s) believed workers are motivated mainly by <b>money</b>. He used time-and-motion studies to find the fastest way to do each task, then paid workers by output (<b>piece rate</b>).</p>
          <ul><li>✅ Productivity rose hugely in factories. Still used in some jobs (packers, couriers).</li>
              <li>❌ Treats people like machines; ignores social and personal needs; boring, repetitive work; quality can suffer.</li></ul>` },
        { title: 'Maslow\'s hierarchy of needs', html: `
          <p><b>Abraham Maslow</b>: people have five levels of needs. Once a lower level is met, the next one motivates.</p>
          <ol><li><b>Physiological</b>: food, rest, warmth → a basic wage, breaks.</li>
              <li><b>Safety</b>: security → a contract, safe conditions, job security.</li>
              <li><b>Love and belonging</b> (social): friendship → teamwork, a good team.</li>
              <li><b>Esteem</b>: respect and status → recognition, promotion, job titles.</li>
              <li><b>Self-actualization</b>: reaching your potential → challenging, creative work.</li></ol>
          <div class="example">Omar's pay already covers levels 1–2. Designing his own sneaker meets <b>esteem</b> and <b>self-actualization</b>. That's why the $100 didn't work but the design project did.</div>
          <p class="muted small">Criticisms: people don't always move up in order, and needs differ between people and cultures.</p>` },
        { title: 'Herzberg: hygiene factors and motivators', html: `
          <p><b>Frederick Herzberg</b>'s two-factor theory:</p>
          <ul><li><b>Hygiene factors</b>: pay, working conditions, company policy, job security, supervision, relationships with colleagues. If they are poor, staff are <b>dissatisfied</b> (demotivated). Improving them removes dissatisfaction but does <b>not</b> motivate.</li>
              <li><b>Motivators</b>: achievement, recognition, responsibility, interesting work, personal growth and promotion. These create real, lasting motivation.</li></ul>
          <div class="tip">Herzberg says pay is a <i>hygiene factor</i>: unfair pay demotivates, but more pay doesn't make people work harder for long. To motivate, enrich the job itself.</div>
          <div class="example">The $100 rise was a hygiene factor. Owning a design was a motivator (responsibility, recognition, achievement).</div>` },
        { title: 'McClelland and self-determination theory (HL only)', html: `
          <p><span class="tag">HL</span> <b>David McClelland</b>'s acquired needs theory: everyone has three needs, and one usually dominates, shaped by experience.</p>
          <ul><li><b>Achievement</b>: wants challenging goals and feedback. Give them targets and stretch projects.</li>
              <li><b>Affiliation</b>: wants to be liked and part of a group. Give them teamwork.</li>
              <li><b>Power</b>: wants to influence and control others. Give them leadership roles.</li></ul>
          <p><b>Edward Deci and Richard Ryan</b>'s self-determination theory: people are intrinsically motivated when three needs are met:</p>
          <ul><li><b>Autonomy</b>: control over what they do and how.</li>
              <li><b>Competence</b>: feeling skilled and improving.</li>
              <li><b>Relatedness</b>: feeling connected to others.</li></ul>
          <p class="muted small">Rewards that feel controlling (e.g. strict bonuses for every task) can <i>reduce</i> intrinsic motivation.</p>` },
        { title: 'Equity and expectancy theories (HL only)', html: `
          <p><span class="tag">HL</span> <b>J. Stacy Adams</b>' equity theory: staff compare what they put in (effort, skills, hours) and get out (pay, praise) with <b>other people</b>. If it feels unfair, they are demotivated: they work less or leave.</p>
          <div class="example">Liv finds out a new seller earns more than her for the same job. Even though her own pay hasn't changed, she feels cheated.</div>
          <p><b>Victor Vroom</b>'s expectancy theory: people are motivated if they believe effort leads to performance, performance leads to a reward, and they value that reward.</p>
          ${F`\text{Motivation} = \text{Expectancy} \times \text{Instrumentality} \times \text{Valence}`}
          <p class="muted small">Expectancy: "If I try, can I hit the target?" Instrumentality: "If I hit it, will I really get the reward?" Valence: "Do I want that reward?" If any one is zero, motivation is zero.</p>` },
        { title: 'Financial rewards', html: `
          <ul><li><b>Salary</b>: a fixed annual amount paid monthly. <b>Wages</b>: paid per hour (<b>time rate</b>) or per unit produced (<b>piece rate</b>).</li>
              <li><b>Commission</b>: a percentage of the value of sales made, usually on top of a basic pay.</li>
              <li><b>Profit-related pay</b>: a share of the business's profit, e.g. a bonus when profit is high.</li>
              <li><b>Performance-related pay (PRP)</b>: extra pay for meeting individual targets, often set in appraisal.</li>
              <li><b>Employee share ownership</b>: staff get or buy shares, so they own part of the company.</li>
              <li><b>Fringe payments</b> (perks): non-cash extras such as a staff discount, free lunch, a phone or gym membership.</li></ul>
          <div class="example">Liv earns $300 a week plus 5% commission. Selling $4,200 in a week: 300 + 0.05 × 4,200 = <b>$510</b>.</div>` },
        { title: 'Non-financial rewards', html: `
          <ul><li><b>Job enrichment</b>: giving more challenging, responsible work (a vertical change). <i>Omar designs his own sneaker.</i></li>
              <li><b>Job enlargement</b>: more tasks at the same level (a horizontal change). <i>A seller also handles online returns.</i></li>
              <li><b>Job rotation</b>: moving between tasks to reduce boredom and build skills.</li>
              <li><b>Empowerment</b>: giving staff the authority to make decisions about their own work. <i>Sellers can give a refund up to $100 without asking.</i></li>
              <li><b>Purpose</b>: the chance to make a difference, e.g. a recycling programme for old sneakers.</li>
              <li><b>Teamwork</b>: working in a team meets social needs.</li></ul>
          <div class="tip">Link rewards to theory: job enrichment = Herzberg's motivators and Maslow's top levels; teamwork = Maslow's social needs and McClelland's affiliation.</div>` }
      ],
      labs: [
        {
          type: 'sort', title: 'Herzberg\'s two factors',
          challenge: 'Sort all 10 into hygiene factors and motivators in one go.',
          buckets: ['Hygiene factor', 'Motivator'],
          items: [
            { t: '💵 A fair basic wage', b: 0 },
            { t: '🧹 A clean, warm staff room', b: 0 },
            { t: '📄 A permanent contract', b: 0 },
            { t: '📋 Sensible company rules', b: 0 },
            { t: '🤝 Getting on with colleagues', b: 0 },
            { t: '🏆 "Seller of the month" on the store wall', b: 1 },
            { t: '🎨 Designing your own sneaker range', b: 1 },
            { t: '🔑 Running the Aarhus pop-up yourself', b: 1 },
            { t: '📈 A clear route to promotion', b: 1 },
            { t: '🎯 Hitting a tough target you set yourself', b: 1 }
          ]
        },
        { type: 'payschemes', title: 'Time rate or piece rate?' }
      ],
      worked: {
        title: 'Recommend a reward (exam style)',
        intro: `<p><b>Question:</b> Workshop staff at ${sf} are paid <b>$20 an hour</b>. Output is steady but staff say the work is repetitive, and two have left this year. Noah is considering (A) switching to a <b>piece rate</b> of $8 a pair, or (B) <b>job enrichment</b>: each customiser designs one limited edition a month. <i>Recommend</i> which option SoleFlip should choose. [10 marks]</p>`,
        steps: [
          { prompt: 'What does Taylor predict for option A?', answer: 'Money motivates, so paying per pair should make staff work faster. A customiser making 80 pairs a week would earn 80 × $8 = $640, more than 30 h × $20 = $600.' },
          { prompt: 'What could go wrong with option A?', answer: 'Staff may rush and <b>quality falls</b>, which matters for $150+ custom sneakers. Pay becomes unpredictable. And it doesn\'t fix the real complaint: the work is <b>repetitive</b>.' },
          { prompt: 'What do Herzberg and Maslow predict for option B?', answer: 'Designing is a <b>motivator</b> (responsibility, recognition, achievement) and meets <b>esteem and self-actualization</b> needs. It targets the cause of the problem.' },
          { prompt: 'What could go wrong with option B?', answer: 'Time spent designing isn\'t spent customising, so output may fall; not every customiser wants to design; and the editions must sell.' },
          { prompt: 'Make a recommendation.', answer: '"I recommend <b>B, job enrichment</b>, because the problem is boring work, not pay, and quality matters for custom sneakers. However, SoleFlip should check that pay stays fair (a hygiene factor), and could trial it with volunteers first."' }
        ],
        takeaway: 'Use a theory to support each side, apply it to the numbers and facts in the case, then recommend one option and say what it depends on.'
      },
      quiz: [
        { id: '2.4-1', type: 'mcq', cmd: 'Identify', q: 'According to <b>Herzberg</b>, which is a <b>hygiene factor</b>?', options: ['Pay', 'Recognition', 'Responsibility', 'Achievement'], answer: 0, why: 'Pay, conditions, policies and job security are hygiene factors: they prevent dissatisfaction but don\'t motivate. The others are motivators.' },
        { id: '2.4-2', type: 'sort', q: 'Which level of <b>Maslow\'s</b> hierarchy does each reward meet?', buckets: ['Safety', 'Love and belonging', 'Esteem', 'Self-actualization'], items: [
          { t: 'A permanent contract', b: 0 }, { t: 'A team night out', b: 1 }, { t: 'Employee of the month', b: 2 },
          { t: 'Designing your own product', b: 3 }, { t: 'Safe working conditions', b: 0 }, { t: 'A senior job title', b: 2 }], why: 'Safety = security; social = belonging; esteem = status and recognition; self-actualization = reaching your potential.' },
        { id: '2.4-3', type: 'num', cmd: 'Calculate', q: 'Omar is paid a <b>piece rate</b> of $7.50 per pair. This week he finishes <b>84 pairs</b>. What does he earn?', answer: 630, unit: '$', display: '$630', hint: 'Pay = pairs × rate per pair', why: '84 × $7.50 = $630.' },
        { id: '2.4-4', type: 'num', cmd: 'Calculate', q: 'Complete the table to find Liv\'s pay this week.' + tbl(['', '$'], [['Basic pay', '300'], ['Sales made this week', '4,200'], ['Commission at 5% of sales', A(210)], ['<b>Total pay</b>', A(510, true)]]), answer: 510, unit: '$', display: '$510', hint: 'Commission = 5% × sales', why: '5% × 4,200 = 210. Total = 300 + 210 = $510.' },
        { id: '2.4-5', type: 'mcq', cmd: 'Distinguish', q: 'A seller is also given online returns to deal with, at the same level of difficulty. This is…', options: ['job enlargement', 'job enrichment', 'empowerment', 'job rotation'], answer: 0, why: 'Enlargement = more tasks at the same level (horizontal). Enrichment = more challenging, responsible work (vertical).' },
        { id: '2.4-6', type: 'tf', q: 'Taylor believed workers are motivated mainly by money.', answer: true, why: 'True. That is why scientific management used piece rates: pay rises with output.' },
        { id: '2.4-7', type: 'mcq', cmd: 'Explain', q: 'Why might a big pay rise <b>fail</b> to motivate staff for long, according to Herzberg?', options: ['Pay is a hygiene factor: it removes dissatisfaction but doesn\'t motivate', 'Pay is a motivator, but only once staff have been promoted to managers', 'Staff spend extra pay quickly, so it has no effect on them at all', 'Pay rises are not allowed for staff who already earn the minimum wage'], answer: 0, why: 'Herzberg: fixing hygiene factors stops people being unhappy, but lasting motivation comes from motivators such as responsibility and recognition.' },
        { id: '2.4-8', type: 'mcq', cmd: 'Identify', q: 'Staff get a 10% discount, free lunch on Saturdays and a free pair of sneakers each year. These are…', options: ['fringe payments', 'commission', 'profit-related pay', 'piece rates'], answer: 0, why: 'Fringe payments (perks) are non-cash extras on top of pay.' },
        { id: '2.4-9', type: 'mcq', cmd: 'Identify', q: '<span class="tag">HL</span> Liv discovers a new seller earns more than her for the same job, and starts working less hard. Which theory explains this best?', options: ['Adams\' equity theory', 'Taylor\'s scientific management', 'Maslow\'s hierarchy of needs', 'McClelland\'s need for power'], answer: 0, why: 'Equity theory: people compare their inputs and rewards with others. Unfairness demotivates, even if their own pay hasn\'t changed.' },
        { id: '2.4-10', type: 'mcq', cmd: 'Explain', q: '<span class="tag">HL</span> In Vroom\'s expectancy theory, a bonus for an <b>impossible</b> sales target motivates nobody because…', options: ['expectancy is close to zero: staff don\'t believe effort will hit the target', 'valence is close to zero: nobody wants money as a reward for their hard work', 'instrumentality is too high: staff are sure to get the bonus anyway', 'the bonus is a hygiene factor, so it can only ever remove dissatisfaction'], answer: 0, why: 'Motivation = E × I × V. If staff think "I can\'t hit that whatever I do", expectancy ≈ 0, so motivation ≈ 0.' }
      ],
      explain: 'What makes <i>you</i> try hard: in a game, a sport or school? Explain to a mate whether it is <b>intrinsic or extrinsic</b> motivation, and which theory fits it best.'
    },

    // ------------------------------------------------------------------ 2.5
    {
      id: '2.5', title: 'Organizational (corporate) culture', emoji: '🎭', minutes: 12, hl: true,
      goal: 'explain what organizational culture is, describe types of culture, and analyse why culture clashes happen and how individuals and culture shape each other.',
      hook: `${sf} has always been jeans, music and "just try it". Then it [[acquisition|buys]] <b>Pedersen Sko</b>, a 60-year-old shoe-repair chain where staff wear uniforms, follow a 40-page manual and call the boss "Mr Pedersen". Within a month, half of Pedersen's best repairers have handed in their notice.<br><br>Nothing was wrong with the deal on paper. So what went wrong?`,
      cards: [
        { title: 'What is organizational culture?', html: `
          <p><span class="tag">HL</span> <b>Organizational culture</b> (corporate culture) is the shared values, beliefs and ways of behaving in an organization: "the way we do things around here".</p>
          <p>You can see it in:</p>
          <ul><li><b>Values and beliefs</b>: what matters most (speed? safety? creativity?).</li>
              <li><b>Norms</b>: unwritten rules (do people stay late? speak up in meetings?).</li>
              <li><b>Symbols</b>: dress code, office layout, logos, job titles.</li>
              <li><b>Stories and rituals</b>: the founder myth, Friday drinks, how success is celebrated.</li></ul>
          <p>Cultures differ along <b>dimensions</b> such as: formal ↔ informal, risk-taking ↔ cautious, hierarchical ↔ equal, individual ↔ team-based.</p>
          <div class="example">${sf}: informal, risk-taking, equal (everyone calls Noah "Noah"), team-based. Its [[mission statement]] "Every pair tells a story" is part of the culture too.</div>` },
        { title: 'Types of culture (Handy)', html: `
          <p><span class="tag">HL</span> Charles Handy described four types:</p>
          <ul><li><b>Power culture</b>: power sits with one person or a small group at the centre. Fast decisions, but depends on the leader. <i>A founder-run start-up.</i></li>
              <li><b>Role culture</b>: power comes from your job position; clear rules and procedures. Stable but slow to change. <i>A bank, a government office, Pedersen Sko.</i></li>
              <li><b>Task culture</b>: teams form to solve problems; expertise matters more than rank. Creative and flexible. <i>A design agency, SoleFlip's collab projects.</i></li>
              <li><b>Person culture</b>: the organization exists for the individuals in it, who are experts. <i>A partnership of lawyers or doctors.</i></li></ul>
          <div class="tip">Other models exist. In the exam, any clearly explained classification earns marks if you apply it to the case.</div>` },
        { title: 'Culture clashes', html: `
          <p><span class="tag">HL</span> A <b>culture clash</b> happens when groups with different cultures have to work together. Common reasons:</p>
          <ul><li>[[merger|Mergers]] and acquisitions joining two different businesses.</li>
              <li>A new leader with a different style ([[leadership]]).</li>
              <li>Growth: a start-up culture meets new formal systems.</li>
              <li>Working across countries (a [[multinational company]]): different national cultures.</li></ul>
          <p>Consequences: misunderstandings and conflict, falling [[motivation]], higher labour turnover, lower productivity, and in the worst cases the failure of a merger.</p>
          <div class="example">Pedersen's repairers felt SoleFlip's "just try it" attitude was careless; SoleFlip's managers found Pedersen's manual absurd. Nobody explained the change. The best repairers left.</div>` },
        { title: 'People shape culture, culture shapes people', html: `
          <p><span class="tag">HL</span> <b>Individuals influence culture</b>: founders and leaders set it (what they reward, how they behave); new hires bring in their own values; a strong group of staff can change norms from below.</p>
          <p><b>Culture influences individuals</b>: new staff learn the norms and adapt (or leave); a strong culture guides behaviour without rules; a toxic culture can push good people to behave badly.</p>
          <div class="example">Noah answers customer emails himself on Sundays. Without any rule, staff learn that customers come first.</div>
          <div class="tip">"Analyse the impact of culture" answers improve when you link it to other topics: leadership style, motivation, labour turnover and how change is managed.</div>` }
      ],
      labs: [
        {
          type: 'sort', title: 'Spot the culture',
          challenge: 'Sort all 8 organizations by Handy\'s culture types in one go.',
          buckets: ['Power', 'Role', 'Task', 'Person'],
          items: [
            { t: '👑 A start-up where the founder decides everything', b: 0 },
            { t: '🎬 A film studio run by its famous director', b: 0 },
            { t: '🏦 A bank with detailed procedures for every job', b: 1 },
            { t: '🏛️ A tax office where authority comes from your grade', b: 1 },
            { t: '🧪 A team of experts formed to develop a vaccine', b: 2 },
            { t: '🎨 An agency that builds a new team for every campaign', b: 2 },
            { t: '⚖️ A partnership of barristers sharing an office', b: 3 },
            { t: '🩺 A group of doctors sharing a clinic and receptionist', b: 3 }
          ]
        },
        {
          type: 'scenarios', title: 'Fix the clash',
          challenge: 'Choose the best response in all 3 culture clashes.',
          items: [
            { s: 'After buying Pedersen Sko, SoleFlip wants to keep its expert repairers.', options: [
              { t: 'Explain the plan, keep what works at Pedersen, and involve repairers in shaping the new way', ok: true, fb: 'Yes: respect for the existing culture, communication and involvement reduce fear and keep skills.' },
              { t: 'Scrap the manual and uniforms on day one', ok: false, fb: 'A sudden change with no explanation makes staff feel their way of working is being thrown out.' },
              { t: 'Let the two businesses never meet', ok: false, fb: 'They lose the benefits of combining, and the clash just waits.' }] },
            { s: 'A new, strict operations manager at SoleFlip introduces timesheets and fixed break times. Creative staff are furious.', options: [
              { t: 'Keep sensible controls but explain why, and agree flexibility where it doesn\'t hurt output', ok: true, fb: 'Yes: growth needs some systems, but imposing them without discussion clashes with the existing culture.' },
              { t: 'Fire the new manager', ok: false, fb: 'The business may genuinely need better systems as it grows.' },
              { t: 'Tell staff to accept it or leave', ok: false, fb: 'Coercion raises labour turnover, especially among the creative staff SoleFlip relies on.' }] },
            { s: 'SoleFlip opens a store in Japan. Danish managers expect staff to challenge them openly; Japanese staff expect more formality.', options: [
              { t: 'Train managers in local culture and adapt their style', ok: true, fb: 'Yes: national culture affects how people expect leaders to behave. Adapting avoids misunderstandings.' },
              { t: 'Insist on the Danish way everywhere', ok: false, fb: 'This ignores local norms and can demotivate local staff.' },
              { t: 'Only hire Danish staff in Japan', ok: false, fb: 'Expensive, and they won\'t understand Japanese customers.' }] }
          ]
        }
      ],
      worked: {
        title: 'Analyse a culture clash (exam style)',
        intro: `<p><b>Question:</b> ${sf} (informal, creative, risk-taking) acquired Pedersen Sko (formal, rule-based, cautious). Within a month, 6 of Pedersen's 12 repairers resigned. <i>Analyse</i> why the culture clash happened and its consequences for SoleFlip. [6 marks]</p>`,
        steps: [
          { prompt: 'Describe the two cultures using a model.', answer: 'SoleFlip is close to a <b>power/task culture</b> (founder-led, team projects, informal). Pedersen is a <b>role culture</b> (manuals, uniforms, authority from position).' },
          { prompt: 'Why did they clash?', answer: 'An acquisition forced them together, and SoleFlip changed Pedersen\'s way of working <b>without explaining or involving</b> staff. Repairers felt their skills and values weren\'t respected.' },
          { prompt: 'What does losing 6 of 12 repairers mean?', answer: 'That is <b>50%</b> of the skilled staff. SoleFlip loses expertise it paid for, must recruit and train replacements, and repair service quality may fall.' },
          { prompt: 'What other consequences are likely?', answer: 'Low [[motivation]] among the repairers who stay, conflict between the two groups, and the acquisition may not deliver the expected profit.' }
        ],
        takeaway: 'Name the cultures with a model, give the cause from the case, then follow the consequences through to people, costs and objectives.'
      },
      quiz: [
        { id: '2.5-1', type: 'mcq', cmd: 'Define', q: '<b>Organizational culture</b> is best described as…', options: ['the shared values, beliefs and norms that shape how people behave at work', 'the formal chart showing who reports to whom and through how many levels', 'the written list of rules and procedures that every employee must follow', 'the mix of nationalities among all the staff of a multinational company'], answer: 0, why: '"The way we do things around here". The chart is the organizational structure; rules are only one visible part of culture.' },
        { id: '2.5-2', type: 'mcq', cmd: 'Identify', q: 'In which of Handy\'s cultures does power come mainly from your <b>job position</b> and the rules?', options: ['Role culture', 'Power culture', 'Task culture', 'Person culture'], answer: 0, why: 'Role culture = authority from position, clear procedures. Power culture = power held by one central person or group.' },
        { id: '2.5-3', type: 'tf', q: 'Culture clashes are a common reason why mergers and acquisitions fail.', answer: true, why: 'True. Two businesses can fit perfectly on paper but have staff with very different values and ways of working.' },
        { id: '2.5-4', type: 'mcq', cmd: 'Explain', q: 'How can a <b>founder</b> influence an organization\'s culture?', options: ['Through what they reward and how they behave every day', 'Only by writing a long list of formal rules for all staff', 'They can\'t: culture is set by the law in each country', 'Only by choosing the company\'s legal form at the start'], answer: 0, why: 'Leaders shape culture mostly by example and by what they praise and reward. Staff copy what they see.' },
        { id: '2.5-5', type: 'sort', q: 'Visible sign of culture, or a consequence of a culture clash?', buckets: ['Sign of culture', 'Consequence of a clash'], items: [
          { t: 'A casual dress code', b: 0 }, { t: 'Friday team breakfast', b: 0 }, { t: 'Stories about the founder', b: 0 },
          { t: 'Rising labour turnover', b: 1 }, { t: 'Conflict between two groups of staff', b: 1 }, { t: 'Falling productivity after a merger', b: 1 }], why: 'Symbols, rituals and stories reveal culture. Turnover, conflict and lower productivity are what happens when cultures clash.' },
        { id: '2.5-6', type: 'mcq', cmd: 'Identify', q: 'A consultancy builds a new team of experts for each client project, and expertise matters more than rank. This is a…', options: ['task culture', 'role culture', 'power culture', 'person culture'], answer: 0, why: 'Task culture: teams form around problems, and authority comes from expertise.' },
        { id: '2.5-7', type: 'tf', q: 'New employees never change an organization\'s culture; they can only adapt to it.', answer: false, why: 'False. Individuals, especially leaders and groups of new hires, bring values that can gradually change the culture.' },
        { id: '2.5-8', type: 'mcq', cmd: 'Explain', q: 'Which is the best way to reduce a culture clash after an acquisition?', options: ['Communicate early, involve both sets of staff and keep the best of each culture', 'Replace every manager in the acquired business on the first day after the deal', 'Avoid mentioning the acquisition to staff so that nobody feels any worry', 'Make both businesses follow the stricter set of rules so nobody is confused'], answer: 0, why: 'Communication, involvement and respect for what works in each culture lower fear and keep key staff.' }
      ],
      explain: 'Describe the <b>culture</b> of your school, team or a place you\'ve worked to a mate: the unwritten rules, symbols and stories. Which of Handy\'s types is it closest to?'
    },

    // ------------------------------------------------------------------ 2.6
    {
      id: '2.6', title: 'Communication', emoji: '💬', minutes: 10, hl: false,
      goal: 'distinguish formal and informal communication, choose suitable methods, and explain barriers to communication and how to overcome them.',
      hook: `Noah posts in the ${sf} group chat at 23:40: <i>"pls dont do the thing w the boxes tmrw 👍"</i>. Next morning, the Copenhagen store stops using boxes altogether, Aarhus keeps using them, and Omar thinks it's about the new eco-boxes. Three stores, three meanings.<br><br>One message, zero understanding. What went wrong?`,
      cards: [
        { title: 'Formal and informal communication', html: `
          <p><b>Communication</b> is passing information from a sender to a receiver, who understands it and may give feedback.</p>
          <ul><li><b>Formal communication</b> follows the official channels of the organization, e.g. through the [[chain of command]]: meetings, reports, memos, official emails, appraisals. Reliable and on record, but can be slow.</li>
              <li><b>Informal communication</b> happens outside official channels: chats at the till, group chats, the "grapevine". Fast and good for team spirit, but can spread rumours and inaccurate information.</li></ul>
          <div class="example">Noah's midnight group-chat message is informal. A clear email to store managers explaining the new packaging rule would be formal.</div>` },
        { title: 'Methods of communication', html: `
          <ul><li><b>Written</b>: emails, letters, reports, notices. A permanent record, good for detail; but slow feedback and easy to misread.</li>
              <li><b>Oral</b>: face-to-face, phone, video calls, meetings. Instant feedback and tone of voice; but no record and easy to forget.</li>
              <li><b>Non-verbal</b>: body language, facial expressions, tone. Can support or contradict the words.</li>
              <li><b>Visual</b>: charts, infographics, videos, signs. Quick to understand; but can oversimplify.</li>
              <li><b>Digital</b>: messaging apps, intranets, Slack, Teams. Fast, reaches many people anywhere (good for [[teleworking]]); but information overload and messages lost in the noise.</li></ul>
          <div class="tip">Choosing a method? Think about urgency, how complex or sensitive the message is, whether a record is needed, and who the audience is. Bad news (e.g. a [[redundancy]]) should be given face-to-face.</div>` },
        { title: 'Barriers to communication', html: `
          <p><b>Barriers to communication</b> stop the message being received and understood as intended:</p>
          <ul><li><b>Language and jargon</b>: technical terms, slang or abbreviations ("w the boxes").</li>
              <li><b>Too many levels</b> of hierarchy: messages get distorted as they pass down a long chain (see [[levels of hierarchy]]).</li>
              <li><b>Wrong method</b>: a complex change sent as a one-line text.</li>
              <li><b>Information overload</b>: too many messages, so important ones are missed.</li>
              <li><b>Cultural and language differences</b>, e.g. between countries or departments.</li>
              <li><b>Attitudes and emotions</b>: distrust of the sender, stress, conflict.</li>
              <li><b>Noise and distractions</b>, and technical failures.</li></ul>` },
        { title: 'Overcoming the barriers', html: `
          <ul><li>Use <b>clear, simple language</b>; avoid jargon or explain it.</li>
              <li>Pick the <b>right method</b> for the message and audience.</li>
              <li>Ask for <b>feedback</b> to check understanding ("Reply to confirm what you'll do").</li>
              <li><b>Shorten the chain</b> of communication (e.g. through a flatter structure).</li>
              <li><b>Train</b> staff in communication and in cultural awareness.</li>
              <li>Build <b>trust</b>: communicate honestly and early, especially during change.</li></ul>
          <div class="example">Better: an email to all three store managers at 10:00: "From Monday, use the new eco-boxes only for online orders. In stores, use paper bags. Reply to confirm." Clear, formal, written, with feedback.</div>` }
      ],
      labs: [{
        type: 'scenarios', title: 'Send the right message',
        challenge: 'Pick the best way to communicate in all 4 situations.',
        items: [
          { s: 'SoleFlip has to close the Aarhus pop-up, and its 4 staff will be made redundant.', options: [
            { t: 'Meet them face-to-face, then confirm in writing', ok: true, fb: 'Yes: sensitive news needs a personal conversation and the chance to ask questions; the written follow-up gives a record.' },
            { t: 'Post it in the staff group chat', ok: false, fb: 'Cold and public for very personal news, and staff will hear rumours first.' },
            { t: 'Put a notice on the staff-room wall', ok: false, fb: 'No chance for questions or feedback; deeply demotivating.' }] },
          { s: 'All 22 staff need to know the new opening hours for the Christmas weeks.', options: [
            { t: 'A clear written message (email or app) to everyone, plus a notice in each store', ok: true, fb: 'Yes: simple, factual information for many people, with a record they can check.' },
            { t: 'Tell Maja and hope she passes it on', ok: false, fb: 'Messages passed along get distorted, and Aarhus and the workshop may not hear it.' },
            { t: 'A 2-hour all-staff meeting', ok: false, fb: 'Too much time and cost for a simple piece of information.' }] },
          { s: 'Noah wants to explain the 3-year growth plan and get staff excited about it.', options: [
            { t: 'A meeting with a short visual presentation and time for questions', ok: true, fb: 'Yes: visuals make the plan clear, and face-to-face lets staff ask questions and feel involved.' },
            { t: 'A 30-page report attached to an email', ok: false, fb: 'Few people will read it, and it won\'t inspire anyone.' },
            { t: 'A one-line text: "big plans coming 🚀"', ok: false, fb: 'Vague messages create rumours, not understanding.' }] },
          { s: 'Omar needs to show a new seller in Aarhus how to fix a laser-engraving error.', options: [
            { t: 'A video call where he shows it step by step', ok: true, fb: 'Yes: visual and two-way, so the seller can try it and ask questions straight away.' },
            { t: 'A long text message full of technical terms', ok: false, fb: 'Jargon is a barrier, and the seller can\'t check understanding.' },
            { t: 'Wait until he visits Aarhus next month', ok: false, fb: 'The machine stays broken for a month.' }] }
        ]
      }],
      worked: {
        title: 'Explain a barrier (exam style)',
        intro: `<p><b>Question:</b> Noah sends a late-night group-chat message, <i>"pls dont do the thing w the boxes tmrw"</i>, to all ${sf} staff. Each store understands it differently. <i>Explain</i> two barriers to communication in this case. [4 marks]</p>`,
        steps: [
          { prompt: 'First barrier: what is wrong with the wording?', answer: '<b>Unclear language / abbreviations</b>: "the thing w the boxes" could mean several things, so each store guessed.' },
          { prompt: 'Apply it: what was the consequence?', answer: 'Copenhagen stopped using boxes altogether while Aarhus carried on, so customers got different service in each store.' },
          { prompt: 'Second barrier: what is wrong with the method?', answer: '<b>Inappropriate method</b>: an informal group chat, late at night, with no request for feedback, for an instruction that changes how stores work.' },
          { prompt: 'Apply it: why does that matter?', answer: 'Staff may not see it until their shift starts, and nobody could check what Noah meant. A clear formal email asking for confirmation would have avoided the confusion.' }
        ],
        takeaway: 'For each barrier: name it → show it in the case → give the consequence. Two well-applied barriers beat five listed ones.'
      },
      quiz: [
        { id: '2.6-1', type: 'mcq', cmd: 'Identify', q: 'Which is an example of <b>informal</b> communication?', options: ['Staff chatting about rumoured job cuts in the break room', 'A written report from a store manager to the CEO', 'An appraisal meeting with a line manager', 'An official email from head office announcing the new opening hours'], answer: 0, why: 'Informal communication happens outside official channels, like the grapevine. The others follow the formal structure.' },
        { id: '2.6-2', type: 'sort', q: 'Formal or informal communication?', buckets: ['Formal', 'Informal'], items: [
          { t: 'Monthly team meeting with an agenda', b: 0 }, { t: 'Letter confirming a promotion', b: 0 }, { t: 'Notice of a new safety rule', b: 0 },
          { t: 'Gossip at the coffee machine', b: 1 }, { t: 'A friends-only group chat of sellers', b: 1 }, { t: 'A quick chat at the till between colleagues', b: 1 }], why: 'Formal follows official channels and is often recorded. Informal is unofficial and social.' },
        { id: '2.6-3', type: 'mcq', cmd: 'Identify', q: 'A message from the CEO is passed down through 6 levels of hierarchy and arrives changed. What is the barrier?', options: ['A long chain of command', 'Information overload', 'A technical failure', 'Cultural differences between staff'], answer: 0, why: 'Each extra level is a chance for the message to be misunderstood or changed. Delayering or direct communication helps.' },
        { id: '2.6-4', type: 'tf', q: 'Asking the receiver for feedback is a good way to check a message was understood.', answer: true, why: 'True. Feedback completes the communication loop and shows whether the message got through.' },
        { id: '2.6-5', type: 'mcq', cmd: 'Explain', q: 'Why is <b>written</b> communication better than oral for a new contract of employment?', options: ['It gives a permanent record both sides can check later', 'It allows faster feedback than a face-to-face conversation', 'It is the most personal way to give sensitive information', 'It never contains any jargon or difficult language'], answer: 0, why: 'Contracts need a record of exactly what was agreed. Oral communication gives faster feedback but no record.' },
        { id: '2.6-6', type: 'mcq', cmd: 'Identify', q: 'Staff get 150 work messages a day and miss the one about a product recall. Which barrier is this?', options: ['Information overload', 'Use of jargon', 'A long chain of command', 'Negative attitudes'], answer: 0, why: 'Too many messages bury the important ones. Fixes: fewer, clearer channels and marking urgent messages.' },
        { id: '2.6-7', type: 'tf', q: 'Informal communication is always harmful to a business.', answer: false, why: 'False. It spreads information fast and builds team spirit. The risk is rumours and inaccurate information.' },
        { id: '2.6-8', type: 'mcq', cmd: 'Identify', q: 'Which method is best for telling one employee they are being dismissed?', options: ['A private face-to-face meeting, confirmed in writing', 'A message in the whole team\'s group chat', 'An email sent to them late on a Friday evening after work', 'A notice on the board in the staff room for everyone to read'], answer: 0, why: 'Sensitive news should be given privately and personally, with a written record afterwards.' }
      ],
      explain: 'Think of a message (from a teacher, coach or parent) that you totally misunderstood. Explain to a mate which <b>barrier to communication</b> caused it and how it could have been avoided.'
    },

    // ------------------------------------------------------------------ 2.7
    {
      id: '2.7', title: 'Industrial/employee relations', emoji: '✊', minutes: 12, hl: true,
      goal: 'identify employee and employer representatives, explain sources of conflict and the actions each side can take, and evaluate ways of resolving conflict.',
      hook: `${sf} wants the workshop open on Sundays to meet Christmas orders. Omar and the other customisers say no: they want <b>double pay</b> for Sundays. Noah offers 25% extra. The customisers, all members of the union 3F, start a <b>go-slow</b>, and orders pile up.<br><br>In Denmark, more than half of all workers are in a union. How do businesses and staff settle disputes like this?`,
      cards: [
        { title: 'Employee and employer representatives', html: `
          <p><span class="tag">HL</span> <b>Employee relations</b> (industrial relations) are the relationships between employers and employees, and the way they handle conflict.</p>
          <ul><li><b>Trade union</b>: an organization of workers that negotiates with employers on pay and conditions, protects members' rights and represents them in disputes. <i>3F, HK, Dansk Metal.</i></li>
              <li><b>Employee representatives</b> also include shop stewards (a union member elected to represent colleagues at one workplace) and works councils.</li>
              <li><b>Employers' associations</b>: organizations of employers that negotiate with unions for a whole industry. <i>DI (Confederation of Danish Industry), Dansk Erhverv.</i></li></ul>
          <p>Unions give workers <b>collective power</b>: one worker asking for a rise is easy to ignore; all of them together are not.</p>
          <p class="muted small">The "Danish model": most pay and conditions are agreed between unions and employers' associations, not set by law. Denmark has no legal minimum wage.</p>` },
        { title: 'Sources of conflict', html: `
          <p><span class="tag">HL</span> Conflict happens when employers and employees want different things:</p>
          <ul><li><b>Pay</b> and benefits: rises, bonuses, overtime rates.</li>
              <li><b>Working conditions</b>: hours, shifts, safety, workload.</li>
              <li><b>Change</b>: new technology, new work practices, relocation (see [[resistance to change]]).</li>
              <li><b>Job security</b>: [[redundancy|redundancies]], outsourcing, temporary contracts.</li>
              <li><b>Management style</b> and how decisions are communicated.</li></ul>
          <p>Underneath: employers want lower costs and flexibility for [[shareholders]]; employees want fair pay, security and respect. Both are [[stakeholders]] with partly conflicting interests.</p>` },
        { title: 'What employees can do', html: `
          <p><span class="tag">HL</span> <b>Collective bargaining</b>: the union negotiates with the employer on behalf of all its members. This is always the first step.</p>
          <p>If talks fail, <b>industrial action</b>:</p>
          <ul><li><b>Work-to-rule</b>: doing exactly what the contract says and nothing more.</li>
              <li><b>Go-slow</b>: working deliberately slowly.</li>
              <li><b>Overtime ban</b>: refusing to work extra hours.</li>
              <li><b>Strike</b>: refusing to work at all. The strongest action, but strikers usually lose pay and the business loses sales.</li></ul>
          <div class="tip">Industrial action hurts both sides: lost output and reputation for the firm, lost pay and possibly jobs for workers. That is why it is used as pressure to get back to negotiation.</div>` },
        { title: 'What employers can do', html: `
          <p><span class="tag">HL</span> Employers can also use <b>collective bargaining</b> (often through an employers' association), and if that fails:</p>
          <ul><li><b>Threats</b>: e.g. of redundancies, cutting overtime, or moving work elsewhere.</li>
              <li><b>Changes to contracts</b> or to working practices.</li>
              <li><b>Lockout</b>: stopping workers from entering the workplace, so they can't work or earn.</li>
              <li><b>Closure</b>: shutting down a site, the most extreme option.</li></ul>
          <p>These put pressure on workers, but damage trust and [[motivation]], may be limited by law, and can lead to more conflict.</p>` },
        { title: 'Resolving conflict', html: `
          <p><span class="tag">HL</span> Ways to settle a dispute or prevent one:</p>
          <ul><li><b>Conciliation</b>: an independent third party helps the two sides talk and find their own agreement.</li>
              <li><b>Arbitration</b>: an independent third party listens to both sides and <b>decides</b> the outcome. In binding arbitration, both must accept it.</li>
              <li><b>Employee participation and industrial democracy</b>: involving staff in decisions, e.g. works councils or worker representatives on the board, so problems are raised early.</li>
              <li><b>No-strike agreement</b>: the union agrees not to strike, usually in return for better pay, conditions or arbitration.</li>
              <li><b>Single-union agreement</b>: the employer negotiates with only one union, which makes bargaining simpler.</li></ul>
          <div class="example">${sf} and 3F agree on conciliation. Result: Sunday work is voluntary and paid at 50% extra, and nobody works more than two Sundays a month. Orders go out, and the go-slow ends.</div>` }
      ],
      labs: [
        {
          type: 'sort', title: 'Whose move is it?',
          challenge: 'Sort all 8 actions in one go.',
          buckets: ['Employees', 'Employers', 'Third party'],
          items: [
            { t: '🐢 Go-slow', b: 0 },
            { t: '📏 Work-to-rule', b: 0 },
            { t: '🪧 Strike', b: 0 },
            { t: '🔒 Lockout', b: 1 },
            { t: '⚠️ Threatening to move work abroad', b: 1 },
            { t: '🏚️ Closing the site', b: 1 },
            { t: '🤝 Conciliation', b: 2 },
            { t: '⚖️ Arbitration', b: 2 }
          ]
        },
        {
          type: 'scenarios', title: 'Settle the dispute',
          challenge: 'Choose the best move in all 3 disputes.',
          items: [
            { s: 'Talks on Sunday pay at SoleFlip have broken down. Both sides are angry but want a deal before Christmas.', options: [
              { t: 'Ask a conciliator to help both sides talk again', ok: true, fb: 'Yes: a neutral third party can rebuild talks, and both sides keep control over the final deal.' },
              { t: 'Lock the customisers out until they agree', ok: false, fb: 'No orders get made at all, and trust collapses.' },
              { t: 'Hire new customisers for Sundays only', ok: false, fb: 'Untrained staff, angry existing staff and a possible union dispute.' }] },
            { s: 'Two years of conciliation have failed. Both sides agree they just need someone to decide.', options: [
              { t: 'Binding arbitration', ok: true, fb: 'Yes: an independent arbitrator decides, and both sides accept the result, ending the dispute.' },
              { t: 'Another round of the same talks', ok: false, fb: 'They have already failed for two years.' },
              { t: 'An all-out strike to see who gives up first', ok: false, fb: 'Very costly for both sides, and nothing guarantees a solution.' }] },
            { s: 'SoleFlip wants to stop disputes building up in the first place as it grows to 50 staff.', options: [
              { t: 'Set up a works council where staff raise issues regularly', ok: true, fb: 'Yes: employee participation catches problems early and builds trust.' },
              { t: 'Ban staff from joining a union', ok: false, fb: 'Illegal in Denmark and most countries, and guaranteed to create conflict.' },
              { t: 'Only communicate decisions after they are made', ok: false, fb: 'This creates the surprises and distrust that lead to disputes.' }] }
          ]
        }
      ],
      worked: {
        title: 'Evaluate an approach to conflict (exam style)',
        intro: `<p><b>Question:</b> ${sf}'s customisers have started a <b>go-slow</b> over Sunday pay. Output has fallen from 300 to 180 pairs a week just before Christmas. Noah is considering a <b>lockout</b>. <i>Evaluate</i> this approach. [10 marks]</p>`,
        steps: [
          { prompt: 'How much output is the go-slow costing?', answer: '300 − 180 = <b>120 pairs a week</b>, a 40% fall, in the busiest season.' },
          { prompt: 'What could a lockout achieve?', answer: 'It puts strong pressure on customisers: no work means no pay, so they may accept Noah\'s 25% offer quickly.' },
          { prompt: 'What are the risks for SoleFlip?', answer: 'Output falls to <b>zero</b>, not 180, so Christmas orders are lost. Trust and [[motivation]] collapse; skilled customisers may leave; the union may escalate to a strike; and the story could hurt SoleFlip\'s brand with young customers.' },
          { prompt: 'Is there a better option?', answer: '<b>Conciliation</b>: a neutral third party helps both sides meet in the middle (e.g. voluntary Sundays at 50% extra), keeping output and relationships.' },
          { prompt: 'Judgement.', answer: '"A lockout is likely to cost more than it saves, <i>because</i> it stops all output in peak season and damages trust with skilled, hard-to-replace staff. SoleFlip should try conciliation first; a lockout only makes sense if talks fail completely."' }
        ],
        takeaway: 'Use the numbers to show the stakes, weigh short-term pressure against long-term damage, and compare with an alternative before judging.'
      },
      quiz: [
        { id: '2.7-1', type: 'mcq', cmd: 'Define', q: 'A <b>trade union</b> is…', options: ['an organization of workers that negotiates pay and conditions for its members', 'an organization of employers that negotiates with workers for a whole industry', 'a government body that sets the minimum wage and the maximum working hours', 'an independent person who decides the outcome of a dispute between two sides'], answer: 0, why: 'A union represents workers. Employers have employers\' associations; an arbitrator decides disputes.' },
        { id: '2.7-2', type: 'mcq', cmd: 'Distinguish', q: 'What is the key difference between <b>conciliation</b> and <b>arbitration</b>?', options: ['A conciliator helps the sides agree; an arbitrator decides the outcome', 'A conciliator decides the outcome; an arbitrator only helps the sides talk', 'Conciliation is used by employers; arbitration is used only by unions', 'Conciliation is a type of strike; arbitration is a type of lockout'], answer: 0, why: 'In conciliation the two sides still reach their own deal. In arbitration a third party makes the decision.' },
        { id: '2.7-3', type: 'mcq', cmd: 'Identify', q: 'Workers do exactly what their contracts say and refuse any extra tasks. This is…', options: ['work-to-rule', 'a go-slow', 'a lockout', 'a strike'], answer: 0, why: 'Work-to-rule: following the rules to the letter. A go-slow is deliberately working slowly; a strike is not working at all.' },
        { id: '2.7-4', type: 'tf', q: 'A lockout is a form of action taken by employees.', answer: false, why: 'False. A lockout is taken by employers: they stop workers from entering the workplace.' },
        { id: '2.7-5', type: 'mcq', cmd: 'Explain', q: 'Why might a union agree to a <b>no-strike agreement</b>?', options: ['In return for better pay or conditions, often with arbitration for disputes', 'Because strikes are always illegal in every single country in the world today', 'Because it lets the union\'s members take any other action they like instead', 'Because it removes the need for any collective bargaining with employers'], answer: 0, why: 'The union gives up its strongest weapon, so it needs something in return: better terms and a fair way (like arbitration) to settle disputes.' },
        { id: '2.7-6', type: 'sort', q: 'Is each a source of conflict or a way of resolving it?', buckets: ['Source of conflict', 'Way of resolving it'], items: [
          { t: 'Planned redundancies', b: 0 }, { t: 'New technology replacing tasks', b: 0 }, { t: 'A pay freeze', b: 0 },
          { t: 'Conciliation', b: 1 }, { t: 'A works council', b: 1 }, { t: 'Binding arbitration', b: 1 }], why: 'Pay, job security and change cause conflict. Third-party help and employee participation resolve or prevent it.' },
        { id: '2.7-7', type: 'num', cmd: 'Calculate', q: 'During a go-slow, weekly output falls from <b>300</b> to <b>180</b> pairs. Each pair adds <b>$45</b> of profit. How much profit is lost each week?', answer: 5400, unit: '$', display: '$5,400', hint: 'Lost pairs × profit per pair', why: '300 − 180 = 120 pairs. 120 × $45 = $5,400 a week.' },
        { id: '2.7-8', type: 'mcq', cmd: 'Explain', q: 'Why is industrial action costly for <b>employees</b> as well as employers?', options: ['Workers usually lose pay, and the business may cut jobs later', 'Workers are always fined by the government for taking action', 'Workers must pay the employer for all the sales that are lost', 'Workers can never return to their old jobs after taking action'], answer: 0, why: 'Strikers usually get no pay, and long disputes can weaken the business, putting jobs at risk.' }
      ],
      explain: 'Imagine your part-time job suddenly says you must work every Sunday at normal pay. Explain to a mate what you and your colleagues could do, and which way of <b>resolving the conflict</b> would be fairest.'
    }
  ],
  formulas: [
    { group: '2.1 Introduction to human resource management', items: [
      { name: 'Labour turnover', f: M`\frac{\text{number of employees leaving}}{\text{average number of employees}} \times 100`, note: M`\text{Average number of employees} = \frac{\text{employees at start} + \text{employees at end}}{2}` }] },
    { group: '2.4 Motivation and demotivation', items: [
      { name: 'Commission pay', f: M`\text{Pay} = \text{basic pay} + \text{commission rate} \times \text{sales}`, note: 'Not on the IB formula sheet, but useful for reward calculations.' },
      { name: 'Expectancy theory (Vroom)', f: M`\text{Motivation} = E \times I \times V`, hl: true, note: 'Not on the IB formula sheet: a model, not a calculation. Expectancy × instrumentality × valence; if one is zero, so is motivation.' }] }
  ]
};
