// Exam and IA (IB Business Management guide, first assessment 2024).
// Not a numbered unit in the guide: it covers the course-wide elements. The four key concepts run through
// Units 1-5 and are the lens of the IA; 7.2 is how the exams award marks; 7.3 is the HL Paper 3 on social
// enterprises; 7.4 is the internal assessment.
// Running case: StepUp, a Copenhagen social enterprise that trains young people as sneaker repairers. Its
// figures are used across 7.3, and a repair deal with SoleFlip ties it to the earlier units (SoleFlip's 5%
// defect rate from 5.4 and 6.1). Exam facts that couldn't be checked against the guide itself are marked
// "from memory" in docs/SYLLABUS.md.

import { A, tbl } from './helpers.js';

const sf = '<b>SoleFlip</b>';
const su = '<b>StepUp</b>';

export const unit7 = {
  id: '7',
  title: 'Exam and IA',
  emoji: '🎓',
  blurb: 'The last stretch: the four key concepts that tie the course together, how the exams award marks, the HL Paper 3 on social enterprises, and your internal assessment. You meet StepUp, a Copenhagen social enterprise that wants to do a deal with SoleFlip. (The IB guide doesn\'t number this as a unit; BizQuest calls it Unit 7.)',
  sections: [
    // ------------------------------------------------------------------ 7.1
    {
      id: '7.1', title: 'The four key concepts', emoji: '🔑', minutes: 10, hl: false,
      goal: 'explain creativity, change, ethics and sustainability, spot them in a business situation, and use one as a lens for analysis.',
      hook: `${sf} decides to make every sole from recycled sneakers. Freja calls it "creative". Noah worries about the "change" for the workshop. A customer asks if the "eco" label is honest. A journalist asks if it's really "sustainable".<br><br>Four people, one decision, four different questions. Which question matters most, and why does the IB keep asking about these four words?`,
      cards: [
        { title: 'Four ideas that run through everything', html: `
          <p>The IB course has four <b>key concepts</b>: <b>creativity</b>, <b>change</b>, <b>ethics</b> and <b>sustainability</b>.</p>
          <p>They aren't extra topics to learn by heart. They are big ideas that connect all five units, so you'll recognise them in marketing, finance, HR and operations alike.</p>
          <ul><li>In the exams, they help you see what really matters in a case.</li>
              <li>In your [[internal assessment|IA]] you choose <b>one</b> of them as the lens for the whole project (7.4).</li></ul>
          <div class="example">${sf}'s recycled soles: a new idea (<b>creativity</b>), a new way of working in the workshop (<b>change</b>), an honest "eco" label (<b>ethics</b>) and less waste for years to come (<b>sustainability</b>).</div>` },
        { title: 'Creativity', html: `
          <p><b>Creativity</b> is generating new ideas and looking at existing ideas in new ways.</p>
          <p>In business it drives [[innovation]] (5.8): new products, new processes, new ways of marketing, even new business models. It also solves problems: a smarter way to cut waste is as creative as a new sneaker.</p>
          <div class="example">Freja's idea to sell repair kits alongside new pairs. Noah's trick of turning old festival wristbands into laces.</div>
          <div class="tip">Through a creativity lens, ask: where did the idea come from (culture, [[empowerment]], R&amp;D)? Did it create value for customers? What risks did it bring?</div>` },
        { title: 'Change', html: `
          <p><b>Change</b> is the process of making something different. Businesses face <b>external</b> change (new technology, laws, competitors, tastes: a [[STEEPLE analysis]] finds it) and make <b>internal</b> change (a new structure, leader, product or location).</p>
          <p>Change often meets [[resistance to change]]. A [[force field analysis]] weighs the forces for and against it.</p>
          <div class="example">${sf} moving production to a factory in Porto: why it changed, who it affected (workshop staff, suppliers, customers) and how it was managed.</div>
          <div class="tip">Through a change lens, ask: what caused it, who wins and who loses, and how well was it managed?</div>` },
        { title: 'Ethics', html: `
          <p><b>Ethics</b> are the moral principles that guide decisions: what is right and wrong, beyond what the law requires.</p>
          <p>They show up in [[ethical objectives]] and [[corporate social responsibility]]: fair pay in the supply chain, honest advertising, how customer data is used, how staff are treated.</p>
          <p>Being ethical can cost money in the short term but build trust in the long term. Different [[stakeholders]] and cultures can disagree about what is ethical.</p>
          <div class="example">Should ${sf} call a pair "100% eco" when only the sole is recycled? It may be legal, but it is misleading: that's greenwashing.</div>` },
        { title: 'Sustainability', html: `
          <p>As a key concept, [[sustainability]] means meeting today's needs without harming the ability of future generations to meet theirs. It has three sides (5.1): <b>environmental</b>, <b>social</b> and <b>economic</b>.</p>
          <p>All three matter. A business that cuts all its waste but runs out of cash is not sustainable; neither is one that profits by exhausting its workers.</p>
          <div class="example">${sf} takes back worn-out pairs and grinds them into new soles: a step towards a [[circular economy]]. It only lasts if the take-back scheme also pays its way.</div>` },
        { title: 'Using a concept as a lens', html: `
          <p>The concepts overlap: one decision can involve all four. A <b>lens</b> means choosing the one that explains the most, and letting it shape your whole analysis.</p>
          <div class="example"><b>Weak:</b> "This is an example of sustainability." (the word is named, nothing more)<br>
          <b>Strong:</b> "Recycling soles cuts material costs by 8%, so the scheme helps SoleFlip's <i>economic</i> sustainability as well as its environmental one, but only while enough customers return old pairs."</div>
          <div class="tip">Examiners reward showing <b>how</b> the concept affects the issue (causes, effects, stakeholders), not repeating the word in every paragraph.</div>` }
      ],
      labs: [
        {
          type: 'sort', title: 'Which key concept is it?',
          challenge: 'Sort all 12 into the right concept in one go.',
          buckets: ['Creativity', 'Change', 'Ethics', 'Sustainability'],
          items: [
            { t: '🎨 Designers invent a sneaker that changes colour in sunlight', b: 0 },
            { t: '💡 An intern suggests selling repair kits as well as new pairs', b: 0 },
            { t: '🎪 A brainstorm turns old festival wristbands into laces', b: 0 },
            { t: '🏭 Production moves from Copenhagen to Porto', b: 1 },
            { t: '👔 A new CEO takes over from the two founders', b: 1 },
            { t: '🔄 Staff must learn a new shift system next month', b: 1 },
            { t: '🧾 Should a pair be labelled "100% eco" when only the sole is recycled?', b: 2 },
            { t: '👷 Checking that factory workers in Porto earn a fair wage', b: 2 },
            { t: '🔐 Deciding whether to sell customer data to advertisers', b: 2 },
            { t: '♻️ Grinding worn-out pairs into new soles', b: 3 },
            { t: '🌍 Cutting the carbon footprint of shipping to Germany', b: 3 },
            { t: '💰 Building cash reserves so the business survives for decades', b: 3 }
          ]
        },
        {
          type: 'scenarios', title: 'Pick the best lens',
          challenge: 'Choose the most useful key concept for all 4 situations.',
          items: [
            { s: 'A fashion chain starts a scheme that takes back old clothes and turns them into new fabric.', options: [
              { t: 'Sustainability', ok: true, fb: 'Yes: the scheme is about using resources so they last, and whether it pays its way.' },
              { t: 'Change', ok: false, fb: 'There is change, but the heart of the issue is resources and the future: sustainability.' },
              { t: 'Ethics', ok: false, fb: 'Possible, but the scheme is mainly about waste and resources.' }] },
            { s: 'After a merger, a bakery chain replaces its shop managers with one regional manager. Staff are unhappy.', options: [
              { t: 'Change', ok: true, fb: 'Yes: a new structure, its causes, the resistance and how it is managed.' },
              { t: 'Creativity', ok: false, fb: 'Nothing new is being invented; the structure is being changed.' },
              { t: 'Sustainability', ok: false, fb: 'Not the main issue here.' }] },
            { s: 'A games studio lets staff spend Fridays on their own projects. Two have become hit games.', options: [
              { t: 'Creativity', ok: true, fb: 'Yes: how the studio generates new ideas and turns them into value.' },
              { t: 'Ethics', ok: false, fb: 'There is no moral dilemma at the centre of this.' },
              { t: 'Change', ok: false, fb: 'The policy is the source of new ideas: that is creativity.' }] },
            { s: 'A chocolate maker discovers child labour on farms that supply its cocoa.', options: [
              { t: 'Ethics', ok: true, fb: 'Yes: what is right, beyond the law, and how stakeholders react.' },
              { t: 'Creativity', ok: false, fb: 'The issue is a moral one, not a new idea.' },
              { t: 'Change', ok: false, fb: 'It may lead to change, but the core question is right and wrong.' }] }
          ]
        }
      ],
      worked: {
        title: 'One decision, four lenses',
        intro: `<p><b>Situation:</b> ${sf} plans to make every pair from recycled material by 2028. This costs $40,000 in new machines, but cuts material costs by 8% a year. Look at it through each lens, then pick the best one for a project.</p>`,
        steps: [
          { prompt: 'Creativity: what is new, and does it create value?', answer: 'A new process (grinding old pairs into soles) and a new selling point. It creates value if customers will pay for the recycled story.' },
          { prompt: 'Change: who is affected, and what could go wrong?', answer: 'Workshop staff must learn new machines; suppliers of new rubber lose orders. Expect some [[resistance to change]]: training and involving staff early help.' },
          { prompt: 'Ethics: is anything questionable?', answer: 'Only if the marketing overstates it. Saying "100% recycled" before 2028 would be misleading.' },
          { prompt: 'Sustainability: all three sides?', answer: '<b>Environmental</b>: less waste and new rubber. <b>Economic</b>: the 8% saving pays back the $40,000 over time. <b>Social</b>: new skilled jobs in the workshop.' },
          { prompt: 'Which lens explains the most?', answer: '<b>Sustainability</b>: it covers the reason for the plan, its costs and its long-term effects. Change and creativity are supporting points.' }
        ],
        takeaway: 'Look through all four lenses, then commit to the one that explains the most, and use it to shape the whole answer.'
      },
      quiz: [
        { id: '7.1-1', type: 'mcq', cmd: 'Identify', q: 'Which of these is <b>not</b> one of the four IB key concepts?', options: ['Innovation', 'Creativity', 'Ethics', 'Sustainability'], answer: 0, why: 'The four key concepts are creativity, change, ethics and sustainability. Innovation is linked to creativity, but it isn\'t a key concept itself.' },
        { id: '7.1-2', type: 'mcq', cmd: 'Define', q: 'Which is the best definition of <b>creativity</b>?', options: ['Generating new ideas and looking at existing ideas in new ways', 'Making something different in response to outside pressures', 'Following moral principles even where the law is silent', 'Meeting today\'s needs without harming future generations'], answer: 0, why: 'The others describe change, ethics and sustainability.' },
        { id: '7.1-3', type: 'sort', q: 'Which key concept is most directly involved?', buckets: ['Creativity', 'Change', 'Ethics', 'Sustainability'], items: [
          { t: 'A new app idea from a staff hackathon', b: 0 }, { t: 'A company restructures after a takeover', b: 1 },
          { t: 'Hiding a product fault from customers', b: 2 }, { t: 'Switching the factory to solar power', b: 3 }], why: 'A new idea = creativity; making the organization different = change; right and wrong = ethics; meeting needs now without harming the future = sustainability.' },
        { id: '7.1-4', type: 'tf', q: 'A business that cuts all its waste but keeps making losses until it closes is fully sustainable.', answer: false, why: 'False. Sustainability has three sides: environmental, social and economic. A business that can\'t survive financially isn\'t sustainable.' },
        { id: '7.1-5', type: 'mcq', cmd: 'Explain', q: 'A company pays the legal minimum wage, but it isn\'t enough to live on in that city. Which statement is best?', options: ['It is legal, but its ethics can still be questioned', 'It must be ethical, because it obeys the law', 'It is illegal, because pay must cover living costs', 'Ethics only matter for social enterprises, not firms'], answer: 0, why: 'Ethics go beyond the law. Something can be legal and still be judged wrong by stakeholders.' },
        { id: '7.1-6', type: 'mcq', cmd: 'Explain', q: 'What does using a key concept <b>as a lens</b> mean in an answer?', options: ['Showing how the concept shapes the issue, its causes and effects', 'Mentioning the concept\'s name in every paragraph you write', 'Writing a long definition of the concept in the introduction', 'Covering all four concepts equally so that none is left out'], answer: 0, why: 'Examiners reward how the concept is used in the analysis, not how often it is named.' },
        { id: '7.1-7', type: 'tf', q: 'The key concepts are a separate topic that is only tested in Paper 3.', answer: false, why: 'False. They run through all five units, and one of them is the lens of your IA.' },
        { id: '7.1-8', type: 'mcq', cmd: 'Identify', q: 'SoleFlip\'s workshop staff resist a new shift system brought in by a new manager. Which key concept is most directly involved?', options: ['Change', 'Creativity', 'Ethics', 'Sustainability'], answer: 0, why: 'A new way of working and the resistance to it are about change (and how it is managed).' }
      ],
      explain: 'Pick something that changed at your school or in a game you play (a new rule, a big update). Text a mate which key concept explains it best and why, using at least one cause and one effect.'
    },

    // ------------------------------------------------------------------ 7.2
    {
      id: '7.2', title: 'Command terms and the exam papers', emoji: '📝', minutes: 10, hl: 'part',
      goal: 'describe the exam papers, link command terms to the assessment objectives, and answer each kind of question in the way that earns marks.',
      hook: `Two students both know everything about [[break-even]]. One gets 4/4 on "Explain", the other 1/4. The difference? The second one defined it beautifully, when the question asked them to <i>explain</i> something.<br><br>The first word of every IB question tells you exactly what the examiner wants. Can you read it?`,
      cards: [
        { title: 'The assessment at a glance', html: `
          <div class="table-wrap"><table class="fin"><tr><th>Component</th><th>SL</th><th>HL</th></tr>
            <tr><td><b>Paper 1</b>: unseen case study, its context pre-released months before (1 h 30)</td><td>35%</td><td>25%</td></tr>
            <tr><td><b>Paper 2</b>: data and calculations (SL 1 h 30, HL 1 h 45)</td><td>35%</td><td>30%</td></tr>
            <tr><td><b>Paper 3</b> <span class="tag">HL</span>: a social enterprise (1 h 15)</td><td>–</td><td>25%</td></tr>
            <tr><td><b>Internal assessment</b>: business research project</td><td>30%</td><td>20%</td></tr></table></div>
          <p class="muted small">Paper 3 has its own lesson (7.3), and the IA too (7.4).</p>` },
        { title: 'Assessment objectives and command terms', html: `
          <p>Every question starts with one of the IB <b>command terms</b>. Each belongs to one of four <b>assessment objectives</b> (AOs):</p>
          <div class="table-wrap"><table class="fin"><tr><th>AO</th><th>Command terms</th></tr>
            <tr><td><b>AO1</b> Knowledge and understanding</td><td>define, describe, outline, state</td></tr>
            <tr><td><b>AO2</b> Application and analysis</td><td>analyse, apply, comment, distinguish, explain, interpret, suggest</td></tr>
            <tr><td><b>AO3</b> Synthesis and evaluation</td><td>compare, contrast, discuss, evaluate, examine, justify, recommend, to what extent</td></tr>
            <tr><td><b>AO4</b> Skills</td><td>calculate, complete, construct, draw, plot, prepare</td></tr></table></div>
          <div class="tip">The higher the AO, the more marks and the more judgement you need. AO3 questions always want a conclusion.</div>` },
        { title: 'Short answers: define, outline, describe, explain', html: `
          <ul><li><b>Define</b>: the precise meaning. One or two sentences, textbook-accurate.</li>
              <li><b>Outline</b>: a brief account or summary.</li>
              <li><b>Describe</b>: a more detailed account of what something is like.</li>
              <li><b>Explain</b>: give reasons or causes. Use "because… so…" and link to the case.</li></ul>
          <div class="example"><b>Explain</b> one advantage of a [[cooperative]] for StepUp's trainees. → "Trainees would be members, so they'd share in decisions and profits, <i>so</i> they'd be more motivated to stay and finish the course."</div>
          <div class="tip">If the question says "two", give exactly two, clearly separated. Extra points don't earn extra marks.</div>` },
        { title: 'Long answers: analyse, discuss, evaluate, recommend', html: `
          <ul><li><b>Analyse</b>: break the issue down and show the links and consequences.</li>
              <li><b>Discuss</b>: a balanced review with a range of arguments.</li>
              <li><b>Evaluate</b>: weigh strengths and limitations, then make a judgement.</li>
              <li><b>To what extent</b>: argue both ways, then conclude <i>how far</i> something is true.</li>
              <li><b>Recommend</b>: choose one option and justify it against the others.</li></ul>
          <p>A good judgement isn't a coin flip: it says what it <b>depends on</b> (short vs long term, which [[stakeholders]], the data) and why one side outweighs the other.</p>` },
        { title: 'Paper 1 and Paper 2 tips', html: `
          <p><b>Paper 1</b>: the pre-released statement tells you the context and background months before. Research that industry, think which toolkit tools fit, and practise with a similar case.</p>
          <p><b>Paper 2</b>: data and calculations. Show every step of your working, write units ($, %, days), complete tables neatly, and label diagrams. Then say what the number <i>means</i> for the business.</p>
          <div class="tip">In both papers the data is there for a reason: use the case's numbers and names. Answers that could be about any business score low.</div>` }
      ],
      labs: [
        {
          type: 'sort', title: 'Sort the command terms',
          challenge: 'Put all 12 command terms under the right assessment objective in one go.',
          buckets: ['AO1 Know', 'AO2 Apply/analyse', 'AO3 Evaluate', 'AO4 Skills'],
          items: [
            { t: 'Define', b: 0 }, { t: 'Outline', b: 0 }, { t: 'State', b: 0 },
            { t: 'Explain', b: 1 }, { t: 'Analyse', b: 1 }, { t: 'Distinguish', b: 1 },
            { t: 'Evaluate', b: 2 }, { t: 'Discuss', b: 2 }, { t: 'Recommend', b: 2 },
            { t: 'Calculate', b: 3 }, { t: 'Construct', b: 3 }, { t: 'Prepare', b: 3 }
          ]
        },
        {
          type: 'scenarios', title: 'Which answer scores more?',
          challenge: 'Pick the higher-scoring answer for all 3 questions.',
          items: [
            { s: '<b>Explain</b> one reason why SoleFlip\'s labour turnover rose. [2]', options: [
              { t: 'A new shift system cut staff flexibility, so students who work part-time quit for jobs that fit their timetables.', ok: true, fb: 'Yes: a cause, linked to the effect, in the case context.' },
              { t: 'Labour turnover is the percentage of staff who leave a business during a year.', ok: false, fb: 'That defines the term, but the question asks for a reason.' },
              { t: 'Staff were unhappy, which is bad for the business and its customers.', ok: false, fb: 'Too vague: why were they unhappy, and what is the link?' }] },
            { s: '<b>Evaluate</b> SoleFlip\'s plan to open a Berlin store. [10]', options: [
              { t: 'Arguments for and against using the case data, then a judgement that depends on cash and demand.', ok: true, fb: 'Yes: balance plus a justified judgement is what "evaluate" means.' },
              { t: 'Five strong reasons why the Berlin store is a great idea, explained in detail.', ok: false, fb: 'One-sided: there is no weighing up and no real judgement.' },
              { t: 'A clear definition of a retail store, followed by a SWOT analysis of SoleFlip.', ok: false, fb: 'A tool alone isn\'t an evaluation: use it to reach a decision.' }] },
            { s: '<b>Calculate</b> the gross profit margin (show your working). [2]', options: [
              { t: '(150,000 ÷ 400,000) × 100 = 37.5%', ok: true, fb: 'Yes: working, answer and the % unit.' },
              { t: '37.5', ok: false, fb: 'Right number, but no working and no unit: you may lose a mark.' },
              { t: 'The margin is good because it is quite high for the industry.', ok: false, fb: 'Calculate needs a number, not a comment.' }] }
          ]
        }
      ],
      worked: {
        title: 'Take a question apart',
        intro: `<p><b>Question:</b> Using the data in the case, <i>discuss</i> whether ${sf} should open a store in Berlin. [10 marks]</p>`,
        steps: [
          { prompt: 'What does the command term want, and which AO is it?', answer: '<b>Discuss</b> = AO3: a balanced review with a range of arguments, ending in a conclusion.' },
          { prompt: 'Which data must you use?', answer: 'The case\'s own numbers: 60% growth in German online orders, $15,000 cash against a $60,000 store, KickBack entering Germany.' },
          { prompt: 'How do you structure it?', answer: 'Short intro (the decision) → arguments for, each with evidence → arguments against, each with evidence → judgement.' },
          { prompt: 'Which toolkit tool could help?', answer: 'A [[decision tree]] or [[force field analysis]], used to support the argument, not as decoration.' },
          { prompt: 'What makes the conclusion strong?', answer: 'It answers the question, says what it depends on, and is justified: "Not yet: cash is the biggest constraint. Grow German online sales first and review in a year."' }
        ],
        takeaway: 'Read the command term first, use the case data in every paragraph, and always finish an AO3 question with a justified judgement.'
      },
      quiz: [
        { id: '7.2-1', type: 'mcq', cmd: 'Identify', q: 'Which command term asks you to weigh up and reach a <b>judgement</b>?', options: ['Evaluate', 'Outline', 'Describe', 'Define'], answer: 0, why: 'Evaluate is AO3: weigh strengths and limitations, then judge. The others are AO1.' },
        { id: '7.2-2', type: 'mcq', cmd: 'Identify', q: 'What does <b>outline</b> ask for?', options: ['A brief account or summary', 'A balanced weighing up of both sides', 'The precise meaning of a term', 'A judgement backed by evidence'], answer: 0, why: 'Outline = brief account. Define = precise meaning; discuss/evaluate = weighing up and judgement.' },
        { id: '7.2-3', type: 'sort', q: 'AO1 or AO3?', buckets: ['AO1 (knowledge)', 'AO3 (evaluation)'], items: [
          { t: 'Define', b: 0 }, { t: 'State', b: 0 }, { t: 'Describe', b: 0 },
          { t: 'Recommend', b: 1 }, { t: 'To what extent', b: 1 }, { t: 'Justify', b: 1 }], why: 'AO1 terms check knowledge. AO3 terms want weighing up and a judgement.' },
        { id: '7.2-4', type: 'tf', q: 'An "Explain" question needs a final judgement to get full marks.', answer: false, why: 'False. Explain (AO2) wants reasons or causes linked to the case. Judgements are for AO3 terms such as evaluate, discuss and recommend.' },
        { id: '7.2-5', type: 'mcq', cmd: 'Identify', q: 'Paper 1 is based on…', options: ['an unseen case study whose context is pre-released', 'a full case study handed out a year before the exam', 'the research project you do during the course', 'multiple-choice questions on all five units'], answer: 0, why: 'A pre-released statement gives the context months before; the full case study is only seen in the exam.' },
        { id: '7.2-6', type: 'tf', q: 'SL students also sit Paper 3.', answer: false, why: 'False. Paper 3 (social enterprises) is HL only. SL students sit Papers 1 and 2 and do the IA.' },
        { id: '7.2-7', type: 'mcq', cmd: 'Identify', q: 'For an <b>HL</b> student, how much of the final grade is the internal assessment?', options: ['20%', '30%', '25%', '35%'], answer: 0, why: 'IA = 20% at HL (30% at SL). HL: Paper 1 25%, Paper 2 30%, Paper 3 25%.' },
        { id: '7.2-8', type: 'mcq', cmd: 'Evaluate', q: 'Which is the strongest ending to a "Discuss" answer?', options: ['On balance, yes: the cash risk is real, but a loan is affordable and demand is proven', 'In conclusion, there are many advantages and many disadvantages to the plan', 'Overall, it is impossible to say without knowing much more about the business', 'To sum up, the business should do whatever its owners think is the best idea'], answer: 0, why: 'It makes a judgement and justifies it with the case. The others sit on the fence or give no reason.' }
      ],
      explain: 'Text a mate the difference between <b>explain</b> and <b>evaluate</b>, using one example question about something you both know (a game, a phone, a festival).'
    },

    // ------------------------------------------------------------------ 7.3
    {
      id: '7.3', title: 'Paper 3: social enterprises', emoji: '🤝', minutes: 12, hl: true,
      goal: 'describe the human need a social enterprise meets, explain the challenges it faces, and write a justified plan of action for the 17-mark question.',
      hook: `Meet ${su}: a workshop in Copenhagen's Nordvest where young people who dropped out of school learn to repair and refurbish sneakers. Three out of four trainees find a job within six months.<br><br>But 40% of its money is a city grant that ends in 2027. And ${sf} just offered a deal. In Paper 3, you'll be the one who decides what ${su} does next.`,
      cards: [
        { title: 'What Paper 3 is', html: `
          <p><b>Paper 3</b> is HL only: 1 hour 15 minutes, 25 marks, 25% of your HL grade. It is an unseen case study about a [[social enterprise]] (any of the types in 1.2, including [[NGO|NGOs]]).</p>
          <p>There are three compulsory questions:</p>
          <div class="table-wrap"><table class="fin"><tr><th>Question</th><th>Marks</th><th>What it usually asks</th></tr>
            <tr><td>1</td><td>2</td><td>Describe a human need the organization meets</td></tr>
            <tr><td>2</td><td>6</td><td>Explain challenges the organization faces</td></tr>
            <tr><td>3</td><td>17</td><td>A plan of action or recommendation for the organization</td></tr></table></div>
          <p class="muted small">Check the exact wording of past papers with your teacher: question wording varies from year to year.</p>` },
        { title: 'Human needs', html: `
          <p><b>Human needs</b> are what people need to survive and to live a decent life: food, clean water, shelter, health care, education, safety, meaningful work, belonging.</p>
          <p>A social enterprise exists to meet a need that a group of people have and that the market or government isn't meeting well. [[Maslow's hierarchy of needs|Maslow's hierarchy]] can help you describe the level of the need.</p>
          <div class="example">${su} meets the need for <b>education and meaningful work</b> of young people outside school and jobs: skills, an income and, with it, self-esteem.</div>
          <div class="tip">Question 1 is only 2 marks: name the need, say who has it, and back it with one fact from the case. Two or three sentences, then move on.</div>` },
        { title: 'The challenges social enterprises face', html: `
          <ul><li><b>Funding</b>: grants and donations are uncertain and often short-term.</li>
              <li><b>Mission versus money</b>: chasing income can pull the organization away from its purpose. This is <b>mission drift</b>.</li>
              <li><b>Measuring impact</b>: success isn't just profit, so it's harder to prove.</li>
              <li><b>Scaling up</b>: growing without losing quality or the personal touch.</li>
              <li><b>People</b>: paying competitive wages, relying on volunteers, staff burnout.</li>
              <li><b>Stakeholder conflict</b>: funders, beneficiaries, staff and customers want different things.</li></ul>
          <div class="tip">Question 2 (6 marks): explain each challenge with evidence from the case and say what it could lead to. Two challenges explained in depth beat five listed.</div>` },
        { title: 'The 17-mark plan of action', html: `
          <p>Question 3 asks you to recommend what the organization should do. A strong answer:</p>
          <ol><li>States the recommendation clearly at the start.</li>
              <li>Shows how it meets the <b>human need</b> and tackles the <b>challenges</b>.</li>
              <li>Uses the case's <b>numbers</b>: costs, income, funding gaps.</li>
              <li>Uses relevant toolkit tools ([[SWOT analysis|SWOT]], [[STEEPLE analysis|STEEPLE]], [[decision tree]], [[Gantt chart]]…).</li>
              <li>Considers [[stakeholders]], <b>risks</b> and how to reduce them, timing, and how success will be measured.</li>
              <li>Says why the alternative was rejected, and ends with a justified conclusion.</li></ol>
          <div class="tip">Plan before you write: 5 minutes on an outline saves a rambling answer. Every paragraph should use something from the case.</div>` },
        { title: 'Timing', html: `
          <p>75 minutes for 25 marks is about 3 minutes per mark, plus reading time. A rough plan:</p>
          <div class="table-wrap"><table class="fin"><tr><th>Part</th><th>Time</th></tr>
            <tr><td>Read the case, highlight needs, challenges and numbers</td><td>15 min</td></tr>
            <tr><td>Question 1 (2 marks)</td><td>4 min</td></tr>
            <tr><td>Question 2 (6 marks)</td><td>12 min</td></tr>
            <tr><td>Question 3 (17 marks): plan, then write</td><td>44 min</td></tr></table></div>
          <div class="tip">The most common mistake: writing a page for question 1 and running out of time on question 3, which is worth more than twice as much as the other two together.</div>` }
      ],
      labs: [
        {
          type: 'sort', title: 'Read the StepUp case',
          challenge: 'Sort all 9 facts from the case in one go.',
          buckets: ['Human need', 'Challenge', 'Possible strategy'],
          items: [
            { t: '🎓 Young people who left school have no qualifications', b: 0 },
            { t: '💼 Trainees need a first job and an income', b: 0 },
            { t: '🙂 Trainees need to feel they belong and are good at something', b: 0 },
            { t: '💸 The city grant (40% of income) ends in 2027', b: 1 },
            { t: '👩‍🏫 Trainers are paid less than in private workshops and keep leaving', b: 1 },
            { t: '📏 Funders want proof that the training works', b: 1 },
            { t: '🤝 A repair contract with SoleFlip worth $60,000 a year', b: 2 },
            { t: '🏙️ A second workshop in Aarhus', b: 2 },
            { t: '🛍️ Selling refurbished pairs at festivals', b: 2 }
          ]
        },
        {
          type: 'scenarios', title: 'Mark the Paper 3 answer',
          challenge: 'Pick the best answer for all 3 questions.',
          items: [
            { s: '<b>Q1.</b> Describe the human need that StepUp meets. [2]', options: [
              { t: 'Young people who left school need skills and work: StepUp trains 24 a year, and 75% find jobs.', ok: true, fb: 'Yes: the need, who has it, and evidence from the case, in two sentences.' },
              { t: 'Maslow\'s hierarchy has five levels: physiological, safety, belonging, esteem and self-actualization…', ok: false, fb: 'Theory without the case. And far too long for 2 marks.' },
              { t: 'StepUp sells refurbished sneakers to customers in Copenhagen.', ok: false, fb: 'That is what it sells, not the need it meets.' }] },
            { s: '<b>Q2.</b> Explain two challenges StepUp faces. [6]', options: [
              { t: 'Two challenges (grant ending, trainer turnover), each with case evidence and its likely effect.', ok: true, fb: 'Yes: depth and evidence, as many points as asked.' },
              { t: 'A list of six challenges, one line each, to show wide knowledge.', ok: false, fb: 'The question asks for two, explained. A list earns little.' },
              { t: 'One challenge explained, then a recommendation of what StepUp should do.', ok: false, fb: 'Only one challenge, and the recommendation belongs in Q3.' }] },
            { s: '<b>Q3.</b> Which opening is strongest for the 17-mark plan?', options: [
              { t: 'StepUp should sign the SoleFlip contract now and plan Aarhus for 2028, because it cuts grant dependence first.', ok: true, fb: 'Yes: a clear decision, a timeline and the main reason, right at the start.' },
              { t: 'Social enterprises are businesses that have social aims and reinvest their surplus.', ok: false, fb: 'A definition doesn\'t answer the question. Start with the decision.' },
              { t: 'There are many options for StepUp, and each has advantages and disadvantages.', ok: false, fb: 'Says nothing: no decision, no reason.' }] }
          ]
        }
      ],
      worked: {
        title: 'Write StepUp\'s plan of action (Paper 3, Q3)',
        intro: `<p>${su} last year: income $300,000 (sales of refurbished pairs $150,000, repairs $30,000, city grant $120,000); costs $290,000; surplus $10,000. 24 trainees a year; 18 in jobs within six months. The grant ends in 2027.</p>
          <p><b>Option A</b>: a second workshop in Aarhus. Set-up $150,000, running costs $200,000 a year, 20 more trainees. Needs new funders.<br>
          <b>Option B</b>: repair ${sf}'s faulty and returned pairs. $60,000 a year of income, $35,000 of extra costs, 6 more trainees.</p>
          <p><b>Question:</b> Recommend a plan of action for StepUp. [17]</p>`,
        steps: [
          { prompt: 'What is the human need, and the biggest challenge?', answer: 'Need: skills and work for young people outside school and jobs. Biggest challenge: 40% of income ($120,000 of $300,000) disappears when the grant ends.' },
          { prompt: 'What does Option B do to the numbers?', answer: 'Surplus rises from $10,000 to $35,000 ($10,000 + $60,000 − $35,000), and the grant falls to a third of income ($120,000 ÷ $360,000).' },
          { prompt: 'Why not Option A now?', answer: 'It needs $150,000 up front plus $200,000 a year, with no secure funder, just as the main grant ends. High impact, but high risk of mission drift or even closure.' },
          { prompt: 'Risks of Option B, and how to reduce them?', answer: 'Over-dependence on one customer, and pressure to put speed before training. Reduce: a 3-year contract with a training clause, and a cap on SoleFlip work.' },
          { prompt: 'The recommendation, with a timeline and a success measure.', answer: '"Sign the SoleFlip deal in 2026; use the extra surplus and the job results to win new funders; open Aarhus in 2028 once 50% of its costs are covered. Measure: trainees in jobs within six months (aim: 75%+) and grant share of income below 25%."' }
        ],
        takeaway: 'A top Q3 answer links the decision to the need and the challenges, uses the numbers, deals with risk, and ends with a clear, phased plan.'
      },
      quiz: [
        { id: '7.3-1', type: 'mcq', cmd: 'Identify', q: 'How many marks is Paper 3\'s final question worth?', options: ['17', '10', '25', '6'], answer: 0, why: 'Three compulsory questions: 2, 6 and 17 marks, 25 in total.' },
        { id: '7.3-2', type: 'mcq', cmd: 'Identify', q: 'Paper 3 is always about…', options: ['a social enterprise', 'a multinational company', 'a business start-up plan', 'a publicly held company'], answer: 0, why: 'Paper 3 is the HL social enterprise paper (for-profit or non-profit, including NGOs).' },
        { id: '7.3-3', type: 'num', cmd: 'Calculate', q: 'What percentage of StepUp\'s income comes from the city grant?' + tbl(
          ['Income source', '$'],
          [['Sales of refurbished pairs', '150,000'],
           ['Repairs', '30,000'],
           ['City grant', '120,000'],
           ['<b>Total income</b>', A(300000)],
           ['<b>Grant as % of income</b>', A(40, true)]]),
          answer: 40, unit: '%', display: '40%', tol: 0.1,
          why: 'Total income = 150,000 + 30,000 + 120,000 = $300,000. Grant share = 120,000 ÷ 300,000 × 100 = 40%.' },
        { id: '7.3-4', type: 'num', cmd: 'Calculate', q: 'StepUp\'s surplus was $10,000. The SoleFlip deal adds $60,000 of income and $35,000 of costs a year. What would the new surplus be?' + tbl(
          ['', '$'],
          [['Current surplus', '10,000'],
           ['+ extra income', '60,000'],
           ['− extra costs', '(35,000)'],
           ['<b>New surplus</b>', A(35000, true)]]),
          answer: 35000, unit: '$', display: '$35,000', tol: 1,
          why: '10,000 + 60,000 − 35,000 = $35,000.' },
        { id: '7.3-5', type: 'mcq', cmd: 'Define', q: 'What is <b>mission drift</b>?', options: ['When chasing income pulls an organization away from its social purpose', 'When a social enterprise grows into several new cities too quickly', 'When the government takes over a social enterprise to run it', 'When a social enterprise changes its legal form to a cooperative'], answer: 0, why: 'Mission drift = the purpose gets lost, e.g. StepUp putting SoleFlip\'s deadlines ahead of training.' },
        { id: '7.3-6', type: 'sort', q: 'Human need or challenge?', buckets: ['Human need', 'Challenge'], items: [
          { t: 'Access to clean water', b: 0 }, { t: 'Education for refugees', b: 0 }, { t: 'Safe housing', b: 0 },
          { t: 'A grant ending next year', b: 1 }, { t: 'Volunteers leaving', b: 1 }, { t: 'Proving impact to donors', b: 1 }], why: 'Needs are what people lack; challenges are what makes it hard for the organization to meet those needs.' },
        { id: '7.3-7', type: 'tf', q: 'For Question 1 (2 marks), a full page on Maslow\'s hierarchy is a good use of time.', answer: false, why: 'False. Name the need, who has it and one fact from the case. Save your time for the 17-mark question.' },
        { id: '7.3-8', type: 'mcq', cmd: 'Recommend', q: 'Which feature matters most in the 17-mark plan of action?', options: ['A clear decision justified with the case data, risks and stakeholders', 'Using as many toolkit tools as possible, even when they don\'t fit', 'A detailed history of social enterprises before the recommendation', 'Listing every option in the case equally, without choosing one'], answer: 0, why: 'Examiners want a justified, case-based decision. Tools help only when they support it.' }
      ],
      explain: 'Think of a charity or social enterprise you know (a festival bottle-deposit scheme, a local food bank). Text a mate the human need it meets, one challenge it faces, and one thing you\'d tell it to do.'
    },

    // ------------------------------------------------------------------ 7.4
    {
      id: '7.4', title: 'The internal assessment (IA)', emoji: '🔬', minutes: 12, hl: false,
      goal: 'plan an IA: choose a real organization and issue, write a research question through a key concept, pick supporting documents and tools, and fit it into 1,800 words.',
      hook: `Your teacher says: "IA topic by Friday." You type "business" into a search bar and stare at 4 billion results.<br><br>The IA is 30% of an SL grade and 20% at HL, and you choose the topic yourself. How do you go from a blank page to a question you can actually answer in 1,800 words?`,
      cards: [
        { title: 'What the IA is', html: `
          <p>The <b>internal assessment</b> (IA) is a <b>business research project</b> about a <b>real organization</b> and a real issue or decision it faces.</p>
          <ul><li>Maximum <b>1,800 words</b>. Anything over the limit isn't marked.</li>
              <li>Written through <b>one</b> of the four [[key concepts]]: creativity, change, ethics or sustainability. Any other concept (e.g. innovation or globalization) scores zero for criterion A.</li>
              <li>Based mainly on 3 to 5 supporting documents (card 3).</li>
              <li>Same task for SL and HL: 30% of the SL grade, 20% of the HL grade. Your teacher marks it and the IB moderates the marks.</li></ul>
          <p class="muted small">SoleFlip is fictional, so it couldn't be your IA. Pick a real business: a local café, a sports club, a brand you follow.</p>` },
        { title: 'The research question', html: `
          <p>Your <b>research question</b> names the organization, the issue and the key concept, and it can be answered from your documents.</p>
          <div class="example"><b>Too broad:</b> "Is fast fashion ethical?" (no organization, too big)<br>
          <b>Too narrow:</b> "When did café X open?" (a fact, nothing to analyse)<br>
          <b>Good:</b> "How has the switch to reusable cups affected the <i>sustainability</i> of [a named Copenhagen café chain]?"</div>
          <div class="tip">"To what extent…" or "How has…" questions invite analysis and a judgement. Make sure the key concept is built into the question itself.</div>` },
        { title: 'Supporting documents', html: `
          <p>You attach <b>3 to 5 supporting documents</b>, and most of your information must come from them.</p>
          <ul><li>They can be [[secondary research|secondary]] (annual reports, news articles, industry reports, the company's website) or [[primary research|primary]] (your interview transcript, survey results).</li>
              <li>Choose a range of viewpoints, e.g. the company, the press and customers, so you can judge bias.</li>
              <li>They must be about <b>your organization and issue</b>. A textbook page on SWOT isn't a supporting document.</li>
              <li>Use recent documents; ask your teacher for the exact date rule.</li></ul>
          <div class="tip">Highlight the key figures and quotes in each document before you write: that's your evidence.</div>` },
        { title: 'Tools, analysis and conclusion', html: `
          <ul><li><b>Tools and theories</b>: pick the ones that fit the question ([[SWOT analysis|SWOT]], [[STEEPLE analysis|STEEPLE]], [[force field analysis]], ratios, [[stakeholders|stakeholder]] analysis…). Two used well beat six squeezed in.</li>
              <li><b>Analysis and evaluation</b>: use the documents' data, weigh it, ask how reliable each source is, and keep the key concept at the centre.</li>
              <li><b>Conclusion</b>: answer the research question directly, consistent with your analysis. No new information.</li></ul>
          <div class="example">Café chain, sustainability lens: STEEPLE for the pressure from customers and new EU rules, then sales and cost data from the annual report to judge whether the switch is <i>economically</i> sustainable too.</div>` },
        { title: 'How it is marked', html: `
          <p>25 marks in total, across these criteria:</p>
          <div class="table-wrap"><table class="fin"><tr><th>Criterion</th><th>Marks</th></tr>
            <tr><td>A Integration of a key concept</td><td>5</td></tr>
            <tr><td>B Supporting documents</td><td>4</td></tr>
            <tr><td>C Selection and application of tools and theories</td><td>4</td></tr>
            <tr><td>D Analysis and evaluation</td><td>5</td></tr>
            <tr><td>E Conclusions</td><td>3</td></tr>
            <tr><td>F Structure</td><td>2</td></tr>
            <tr><td>G Presentation</td><td>2</td></tr></table></div>
          <p class="muted small">Ask your teacher for the official markbands: they say exactly what earns each mark.</p>
          <div class="tip">Analysis, evaluation and the key concept are worth 10 of the 25 marks. That's where your words should go.</div>` },
        { title: 'A word budget and a timeline', html: `
          <p>1,800 words goes fast. A rough budget:</p>
          <div class="table-wrap"><table class="fin"><tr><th>Part</th><th>Words</th></tr>
            <tr><td>Introduction: organization, issue, key concept, research question</td><td>~150</td></tr>
            <tr><td>Analysis and evaluation, using tools and documents</td><td>~1,350</td></tr>
            <tr><td>Conclusion (and limitations)</td><td>~250</td></tr>
            <tr class="total"><td>Total</td><td>~1,750</td></tr></table></div>
          <p>Timeline: choose the organization and key concept → collect documents → write the research question → apply tools → draft → teacher feedback on one draft → final version.</p>
          <div class="tip">Collect the documents <i>before</i> you fix the research question: a great question you can't find evidence for is a dead end.</div>` }
      ],
      labs: [
        {
          type: 'scenarios', title: 'Fix the research question',
          challenge: 'Pick the best research question for all 3 ideas.',
          items: [
            { s: 'You love a Danish sneaker brand that has started selling second-hand pairs on its website.', options: [
              { t: 'To what extent has reselling second-hand pairs improved the brand\'s sustainability?', ok: true, fb: 'Yes: a real organization, a real issue and a key concept, with room for a judgement.' },
              { t: 'Is the sneaker industry bad for the environment?', ok: false, fb: 'No organization, and far too broad for 1,800 words.' },
              { t: 'How much does a second-hand pair cost on the brand\'s website?', ok: false, fb: 'A fact you can look up: nothing to analyse.' }] },
            { s: 'Your local football club replaced its volunteer coaches with paid coaches this season.', options: [
              { t: 'How has the move to paid coaches changed the club\'s finances and its members\' experience?', ok: true, fb: 'Yes: change is the lens, with stakeholders and data to analyse.' },
              { t: 'Should all football clubs pay their coaches?', ok: false, fb: 'Not about one organization, and not answerable from 3–5 documents.' },
              { t: 'How has innovation affected the football club?', ok: false, fb: 'Innovation isn\'t one of the four key concepts, so criterion A would score zero.' }] },
            { s: 'A festival you go to has banned single-use cups and introduced a deposit scheme.', options: [
              { t: 'To what extent has the cup deposit scheme been an ethical and profitable decision for the festival?', ok: false, fb: 'Close, but it mixes two concepts. Choose one lens.' },
              { t: 'To what extent has the cup deposit scheme made the festival more sustainable?', ok: true, fb: 'Yes: one organization, one issue, one key concept.' },
              { t: 'What do festival-goers think about plastic?', ok: false, fb: 'No organization or decision at its centre.' }] }
          ]
        },
        {
          type: 'sort', title: 'Supporting document or not?',
          challenge: 'Sort all 8 in one go.',
          buckets: ['Good supporting document', 'Not a supporting document'],
          items: [
            { t: '📊 The company\'s latest annual report', b: 0 },
            { t: '🎙️ Your transcript of an interview with the store manager', b: 0 },
            { t: '📰 A recent news article about the company\'s new strategy', b: 0 },
            { t: '📋 Results of your own survey of its customers', b: 0 },
            { t: '📘 A textbook chapter explaining SWOT analysis', b: 1 },
            { t: '💭 Your own opinion of the brand', b: 1 },
            { t: '🎬 A YouTube video on how to write a good IA', b: 1 },
            { t: '🏢 An article about a different company in the same industry', b: 1 }
          ]
        }
      ],
      worked: {
        title: 'From idea to IA plan',
        intro: '<p>Sara likes a Copenhagen café chain that charged extra for disposable cups last year and now offers deposit cups. She has to plan her IA.</p>',
        steps: [
          { prompt: 'Which key concept fits best?', answer: '<b>Sustainability</b>: the decision is about waste, and whether the scheme pays its way. (Change would also work, but the evidence is mostly about waste and costs.)' },
          { prompt: 'Which documents could she find?', answer: 'The chain\'s annual report (sales, costs), two news articles on the scheme, and her own survey of 60 customers: 4 documents, with company, press and customer viewpoints.' },
          { prompt: 'The research question?', answer: '"To what extent has the deposit-cup scheme improved the sustainability of [the café chain]?"' },
          { prompt: 'Which tools?', answer: 'STEEPLE (pressure from customers and EU rules on single-use plastics), then the annual report\'s figures for the economic side, and the survey for customers\' view.' },
          { prompt: 'What must the conclusion do?', answer: 'Answer "to what extent" directly, e.g. "largely sustainable environmentally, but the cost per cup means it depends on more customers returning cups", with no new evidence.' }
        ],
        takeaway: 'A strong IA is narrow: one real organization, one issue, one key concept, 3–5 documents, and a few tools used well.'
      },
      quiz: [
        { id: '7.4-1', type: 'mcq', cmd: 'Identify', q: 'What is the maximum length of the IA?', options: ['1,800 words', '2,000 words', '1,500 words', '2,200 words'], answer: 0, why: 'The IA has a maximum of 1,800 words.' },
        { id: '7.4-2', type: 'mcq', cmd: 'Identify', q: 'How many supporting documents should the IA have?', options: ['3 to 5', '1 or 2', '6 to 10', 'As many as you like'], answer: 0, why: 'Between 3 and 5 supporting documents, from which most of the information comes.' },
        { id: '7.4-3', type: 'tf', q: 'You can choose "innovation" as the key concept for your IA.', answer: false, why: 'False. It must be one of the four: creativity, change, ethics or sustainability. Using another concept scores zero for criterion A.' },
        { id: '7.4-4', type: 'mcq', cmd: 'Evaluate', q: 'Which is the best IA research question?', options: ['How has moving to paid coaches changed FC Nordvest\'s finances?', 'Should every football club in Denmark pay its coaches?', 'What is the history of football coaching in Denmark?', 'When did FC Nordvest start paying its coaches?'], answer: 0, why: 'It names one organization and one issue, uses the change lens, and invites analysis. The others are too broad or just facts.' },
        { id: '7.4-5', type: 'sort', q: 'Primary or secondary data?', buckets: ['Primary', 'Secondary'], items: [
          { t: 'Your interview with the owner', b: 0 }, { t: 'Your customer survey', b: 0 },
          { t: 'The company\'s annual report', b: 1 }, { t: 'A newspaper article', b: 1 }, { t: 'An industry report', b: 1 }], why: 'Primary data is collected by you, first-hand. Secondary data was already published by someone else.' },
        { id: '7.4-6', type: 'tf', q: 'The conclusion is a good place to bring in new evidence you didn\'t have room for earlier.', answer: false, why: 'False. The conclusion answers the research question from the analysis you have already done. No new information.' },
        { id: '7.4-7', type: 'num', cmd: 'Calculate', q: 'You plan ~150 words for the introduction and ~250 for the conclusion. How many words are left for the main body, at most, within the limit?' + tbl(
          ['Part', 'Words'],
          [['Word limit', '1,800'],
           ['− Introduction', '(150)'],
           ['− Conclusion', '(250)'],
           ['<b>Main body (at most)</b>', A(1400, true)]]),
          answer: 1400, unit: 'words', display: '1,400 words', tol: 1,
          why: '1,800 − 150 − 250 = 1,400 words for analysis and evaluation.' },
        { id: '7.4-8', type: 'mcq', cmd: 'Explain', q: 'Why should you collect documents <b>before</b> fixing your research question?', options: ['A good question is useless if you can\'t find evidence to answer it', 'The IB requires the documents to be submitted months before the IA', 'Documents must be older than the research question to be accepted', 'Teachers only approve questions after seeing all five documents'], answer: 0, why: 'Your analysis depends on the documents. Check the evidence exists first, then sharpen the question.' }
      ],
      explain: 'Think of a real business you know well (a shop, a club, a brand). Text a mate an IA research question about it, which key concept it uses, and two documents you could find.'
    }
  ],
  formulas: []
};
