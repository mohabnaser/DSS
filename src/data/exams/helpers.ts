import type { PageId, Question, QuestionType } from '../../types'

interface QuestionInput {
  id: string
  exam: string
  date: string
  part: string
  number: string
  wording: string
  answer: boolean | number | string
  type: QuestionType
  topic: string
  sectionId: PageId
  explanation: string
  solution?: string
  visual?: string
  points?: string
  status?: 'verified' | 'context-only'
  note?: string
  choices?: string[]
}

export function q(input: QuestionInput): Question {
  return { ...input, status: input.status ?? 'verified' }
}

export function tf(
  args: Omit<QuestionInput, 'type' | 'answer'> & { answer: boolean },
): Question {
  return q({ ...args, type: 'tf' })
}

export function mcq(
  args: Omit<QuestionInput, 'type' | 'answer'> & { answer: number; choices: string[] },
): Question {
  return q({ ...args, type: 'mcq' })
}

export const EX = {
  mid2015: { exam: 'Midterm 2015', date: '21 Dec 2015' },
  mid2016: { exam: 'Midterm 2016', date: '23 Nov 2016' },
  mid2018: { exam: 'Midterm 2018', date: '10 Nov 2018' },
  final2016: { exam: 'Final 2016', date: '16 Jan 2016' },
  final2017: { exam: 'Final 2017', date: '9 Jan 2017' },
  final2018: { exam: 'Final 2018', date: '1 Jan 2018' },
  final2019: { exam: 'Final 2019', date: '14 Jan 2019' },
  final2020: { exam: 'Final 2020', date: '13 Jan 2020' },
  final2023: { exam: 'Final 2023', date: 'Final 2023' },
  final2025: { exam: 'Final 2025', date: 'Final 2025' },
} as const

const CONCEPTUAL_MODEL = `**What to draw**
Draw one outer system boundary containing two analytical wings, then the knowledge and interface layers beneath.

1. **Data-centered wing:** Analytical Database / Data Warehousing ↔ Database Management System (OLAP).
2. **Model-centered wing:** Model Base (a set of models) ↔ Model Management System (MMS) + Modeling Language.
3. **Knowledge layer:** Knowledge Management Systems, connected upward to both wings.
4. **Interface layer:** Interactive User Interface System.
5. **User:** Decision Maker & Policy Analyst, shown outside the system boundary.

Add the support technologies inside or beside each wing:
- Data wing: data warehouse, multi-dimensional database, OLAP, data mining.
- Model wing: optimization/simulation/forecasting models, MBMS and a modeling language such as GAMS.
- Knowledge wing: knowledge base, rule-based reasoning, expert-system shell.

**What the examiner is checking**
The model is integrated — data and models are not isolated boxes. The user interacts through the interface; knowledge management supports both wings.`

const DATA_PIPELINE = `**Reference schematic**
Operational databases (OLTP) → ETL (Extract–Transform–Load) → Data Warehouse → Data Marts → OLAP / Reporting / Data Mining → Decision maker.

**Roles to label**
- **Operational databases:** day-to-day transactions; normalised, current, detailed.
- **ETL:** extracts source data, cleans and reconciles it, transforms it to a common model, and loads it into the warehouse.
- **Data warehouse:** integrated, subject-oriented, time-variant, non-volatile store of historical data.
- **Data marts:** smaller analytical subsets for a department or subject.
- **OLAP:** multi-dimensional viewing and manipulation: roll-up, drill-down, slice, dice, pivot.
- **Reporting:** planned and ad-hoc reports for hindsight.
- **Data mining:** pattern, association, classification and clustering for insight.
- **Decision maker:** interprets results and exercises judgment.

Draw arrows in the analytical direction. ETL is a pipeline, not a DBMS. OLAP and data mining are complementary, not interchangeable.`

const MBMS = `**Model creation and representation**
- Model formulation / specification
- Model generation and instantiation
- Model editing and updating
- Model documentation and metadata
- Model validation and verification

**Model manipulation and use**
- Model storage, retrieval and cataloguing
- Model selection and linking
- Model execution / solver invocation
- Scenario, what-if and goal-seeking runs
- Sensitivity analysis
- Output analysis, explanation and reporting
- Model-base integration and version control

The lecturer groups these as model development/updating and model management. A safe exam answer lists 8–10 routines under those two headings.`

const MODEL_DSS_BLOCK = `**Reference block diagram**
Management/user → Interactive user interface → Model management system (MBMS) ↔ Model base → Solvers / modeling language → Results and explanation → User.

Surrounding the model base, show **data access** (database, parameters), **modeling language**, **solver interface**, and **output/visualisation**. The user supplies goals, risk attitude and judgment.

**Examples of models for an industrial corporation**
- Linear programming production-mix model
- Transportation and distribution model
- Inventory / lot-sizing model
- Forecasting model
- Capital-budgeting model
- Scenario simulation model
- Make-or-buy model

**Criteria for classifying/integrating models**
1. By functional area (production, finance, marketing).
2. By model type / mathematical technique (LP, NLP, simulation, forecasting).
3. By decision level or time horizon (operational, tactical, strategic).
4. By data and model ownership / degree of integration.
5. By solver or software environment.`

const GAMS_REWRITE = `**A modular, data-independent rewrite**

\`\`\`gams
$Title Transportation model — data/model separated

Sets
    i  canning plants / cairo, alexand /
    j  markets       / port-said, mansora, monofia / ;

Parameters
    a(i) capacity of plant i in cases
         / cairo 350, alexand 600 /
    b(j) demand at market j in cases
         / port-said 325, mansora 300, monofia 275 / ;

Table d(i,j) distance in thousands of miles
               port-said  mansora  monofia
    cairo           2.5       1.7      1.8
    alexand         2.5       1.8      1.4 ;

Scalar f freight in LE per case per thousand miles /90/ ;

Parameter c(i,j) transport cost in thousands of LE per case ;
c(i,j) = f * d(i,j) / 1000 ;

Variables
    x(i,j) shipment quantities in cases
    z      total transportation cost in thousands of LE ;

Positive Variable x ;

Equations
    cost      define objective function
    supply(i) observe supply limit at plant i
    demand(j) satisfy demand at market j ;

cost..      z =e= sum((i,j), c(i,j) * x(i,j)) ;
supply(i).. sum(j, x(i,j)) =l= a(i) ;
demand(j).. sum(i, x(i,j)) =g= b(j) ;

Model transport / all / ;
Solve transport using lp minimizing z ;

Display a, b, d, c, x.l, z.l ;
\`\`\`

**Why this satisfies the criteria**
- **Data/model separation:** all numerical data sit in Sets, Parameters, Table and Scalar; the algebra refers to symbols, not numbers. Replace the data block and the same model reruns.
- **Compact mathematical specification:** one equation definition is expanded by GAMS over all indices.
- **Modularity:** declaration → data → variables → equations → model/solve → display. Each block has one responsibility.
- **Model–solver independence:** \`using lp\` selects the solver class while the equations stay unchanged.`

export const SOLUTIONS = {
  conceptualModel: CONCEPTUAL_MODEL,
  dataPipeline: DATA_PIPELINE,
  mbms: MBMS,
  modelDssBlock: MODEL_DSS_BLOCK,
  gamsRewrite: GAMS_REWRITE,
}
