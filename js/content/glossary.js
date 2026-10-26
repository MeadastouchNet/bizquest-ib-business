// Glossary for the "?" term helpers. In any content text, write [[term]] or [[term|shown text]] to make a
// clickable term. `sec` is where the term is taught; `card` (optional) is the index of the Learn card to open.
// Terms taught in units that aren't built yet point at the planned topic, and the link switches on
// automatically when that unit is added (see docs/ROADMAP.md).

export const GLOSSARY = {
  // ---- Unit 1 (planned) ----
  'sole trader': { sec: '1.2', aliases: ['sole traders'],
    def: 'A business owned and run by one person. The owner keeps all the profit but has <b>unlimited liability</b>: they are personally responsible for all the business\'s debts.' },
  'company': { sec: '1.2', aliases: ['companies', 'limited company', 'ltd company'],
    def: 'A business that is a separate legal entity from its owners (the shareholders). Owners have <b>limited liability</b>: they can only lose what they invested. Private limited companies (Ltd) sell shares privately; public limited companies (PLC) can sell shares to the public on a stock exchange.' },
  'stakeholders': { sec: '1.4', aliases: ['stakeholder'],
    def: 'Individuals or groups with an interest in a business because its actions affect them, e.g. employees, customers, shareholders, suppliers, banks, the government and the local community.' },
  'shareholders': { sec: '1.4', aliases: ['shareholder'],
    def: 'People or organizations that own shares in a company. They own part of it, can vote on big decisions and may receive dividends.' },
  // ---- Unit 2 (planned) ----
  'motivation': { sec: '2.4',
    def: 'The drive that makes people work hard and well. Businesses motivate staff with financial rewards (pay, bonuses, commission) and non-financial ones (recognition, responsibility, teamwork).' },
  // ---- Unit 3 ----
  'capital expenditure': { sec: '3.1', card: 1, aliases: ['capex'],
    def: 'Spending on non-current assets that the business will keep and use for more than one year, e.g. machines, vehicles, buildings.' },
  'revenue expenditure': { sec: '3.1', card: 2,
    def: 'Spending on the day-to-day running of the business that is used up within the year, e.g. wages, rent, stock, ads.' },
  'retained profit': { sec: '3.2', card: 0,
    def: 'Profit kept in the business instead of being paid out to the owners. An internal source of finance.' },
  'share capital': { sec: '3.2', card: 1,
    def: 'Money a company raises by selling shares (part-ownership). It never has to be repaid, but the new owners share the profits and control.' },
  'overdraft': { sec: '3.2', card: 1, aliases: ['overdrafts'],
    def: 'A bank agreement that lets a business take out more money than it has in its account, up to a limit. Flexible short-term finance, but with high interest.' },
  'trade credit': { sec: '3.2', card: 2,
    def: 'When a supplier lets a business buy now and pay later, usually within 30–90 days.' },
  'leasing': { sec: '3.2', card: 2,
    def: 'Renting an asset (a machine, vehicle or equipment) for a regular payment instead of buying it.' },
  'fixed costs': { sec: '3.3', card: 0, aliases: ['fixed cost'],
    def: 'Costs that don\'t change when output changes (in the short run), e.g. rent, salaries, insurance.' },
  'variable costs': { sec: '3.3', card: 0, aliases: ['variable cost'],
    def: 'Costs that change directly with output, e.g. raw materials and packaging.' },
  'profit and loss account': { sec: '3.4', card: 1, aliases: ['p&l', 'statement of profit or loss', 'income statement'],
    def: 'A financial statement showing a business\'s revenue, costs and profit over a period, usually a year. Think of it as a <i>video</i> of the year.' },
  'balance sheet': { sec: '3.4', card: 2, aliases: ['statement of financial position'],
    def: 'A financial statement showing what a business owns (assets), what it owes (liabilities) and the owners\' money (equity) on <b>one particular date</b>. Think of it as a <i>photo</i> of the business\'s finances.' },
  'non-current assets': { sec: '3.4', card: 2, aliases: ['non-current asset', 'fixed assets'],
    def: 'Assets a business keeps and uses for more than one year, e.g. buildings, machines, vehicles, computers, and intangible assets like patents.' },
  'current assets': { sec: '3.4', card: 2,
    def: 'Assets that will be used up or turned into cash within a year: cash, debtors and stock.' },
  'debtors': { sec: '3.4', card: 2, aliases: ['debtor'],
    def: 'Customers who bought on credit and still owe the business money.' },
  'creditors': { sec: '3.4', card: 2, aliases: ['creditor'],
    def: 'Suppliers the business bought from on credit and still owes money to.' },
  'cost of sales': { sec: '3.4', card: 1,
    def: 'The direct cost of the goods the business sold in the period, e.g. the stock it resold or the materials used.' },
  'dividends': { sec: '3.4', card: 1, aliases: ['dividend'],
    def: 'The part of a company\'s profit that is paid out to its shareholders.' },
  'depreciation': { sec: '3.4', card: 5,
    def: 'The fall in value of a non-current asset over time, through wear and tear or becoming outdated. Its cost is spread over the asset\'s life as an expense. (Calculating it is HL only.)' },
  'liquidity': { sec: '3.5', card: 0,
    def: 'How easily a business can pay its short-term debts (due within a year) using its current assets.' },
  'capital employed': { sec: '3.5', card: 2,
    def: 'The total long-term finance invested in the business: non-current liabilities + total equity.' },
  'gearing': { sec: '3.6', card: 2,
    def: 'How much of a business\'s long-term finance is borrowed. Over 50% is "highly geared": risky if interest rates rise or sales fall.' },
  'debt factoring': { sec: '3.6', card: 3,
    def: 'Selling the money customers owe you (your debtors) to a factoring company. It pays you most of it straight away and keeps a fee.' },
  'insolvency': { sec: '3.6', card: 4, aliases: ['insolvent'],
    def: 'When a business or person can\'t pay their debts when they are due.' },
  'working capital': { sec: '3.7', card: 1,
    def: 'Current assets − current liabilities: the money available to run the business day to day.' },
  'budget': { sec: '3.9', card: 0, aliases: ['budgets'],
    def: 'A financial plan of expected revenue and spending for a future period.' },
  // ---- Unit 5 (planned) ----
  'break-even': { sec: '5.5', aliases: ['break even', 'break-even point'],
    def: 'The level of output where total revenue equals total costs, so the business makes neither a profit nor a loss.' },
  'just-in-time': { sec: '5.3', aliases: ['jit'],
    def: 'A lean production method where materials and stock arrive exactly when they are needed, so the business holds very little stock. (HL)' }
};

const INDEX = new Map();
for (const [key, e] of Object.entries(GLOSSARY)) {
  e.key = key;
  for (const name of [key, ...(e.aliases || [])]) INDEX.set(name.toLowerCase(), e);
}
export const lookupTerm = name => INDEX.get(name.trim().toLowerCase());
