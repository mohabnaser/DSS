import type { Question } from '../../types'
import { EX, SOLUTIONS, mcq, q, tf } from './helpers'

export const FINALS_B: Question[] = [
  // ---------------------------------------------------------------- FINAL 2019
  tf({
    id: 'f2019-a1',
    ...EX.final2019,
    part: 'A1 · True/False',
    number: 'A1.1',
    wording:
      'In a Strategic Decision Making process, External Data are not needed to support the policy maker.',
    answer: false,
    topic: 'Decision levels and data',
    sectionId: 'process',
    explanation:
      'False. Strategic decisions depend strongly on external environmental information (markets, policy, technology, competitors, economic conditions) in addition to internal capability data.',
  }),
  tf({
    id: 'f2019-a2',
    ...EX.final2019,
    part: 'A1 · True/False',
    number: 'A1.2',
    wording:
      'Development Planning Support System (DPSS) can be viewed as a general purpose DSS addressing socioeconomic planning issues of Kuwait.',
    answer: false,
    topic: 'DSS classification',
    sectionId: 'dss-core',
    explanation:
      'False. A system dedicated to development/socioeconomic planning is domain-oriented and special purpose, even if its domain is broad.',
    status: 'context-only',
    note: 'DPSS is an external case, but the classification follows from the lecture definitions.',
  }),
  tf({
    id: 'f2019-a3',
    ...EX.final2019,
    part: 'A1 · True/False',
    number: 'A1.3',
    wording:
      'Special purpose Decision Support Systems concentrate on relatively small size problems and they are less expensive than the general purpose DSS.',
    answer: true,
    topic: 'DSS classification',
    sectionId: 'dss-core',
    explanation:
      'True. Special purpose DSS is narrower in scope and generally cheaper than an institutional general purpose DSS.',
  }),
  tf({
    id: 'f2019-a4',
    ...EX.final2019,
    part: 'A1 · True/False',
    number: 'A1.4',
    wording:
      'Cairo University senior management DSS is a general purpose that covers both the data-centered and the model-centered DSS analytical tools.',
    answer: true,
    topic: 'Integrated DSS cases',
    sectionId: 'dss-core',
    explanation:
      'True in the recurring course case: an integrated general purpose DSS combining data-centered and model-centered analytical tools.',
    status: 'context-only',
    note: 'The case is not described in the supplied lecture transcriptions.',
  }),
  tf({
    id: 'f2019-a5',
    ...EX.final2019,
    part: 'A1 · True/False',
    number: 'A1.5',
    wording:
      'Multi-dimensional Database model is designed to generate ad-hoc reports reflecting policy maker’s view.',
    answer: true,
    topic: 'OLAP',
    sectionId: 'data-centered',
    explanation:
      'True. The multi-dimensional model organises facts by dimensions, and OLAP operations generate decision-maker-selected ad-hoc views. It is not the only possible analytical storage model, but the statement describes its designed role.',
  }),
  tf({
    id: 'f2019-a6',
    ...EX.final2019,
    part: 'A1 · True/False',
    number: 'A1.6',
    wording:
      'In a Data Centered DSS, OLAP tool provides insights whereas Data mining provides hindsights to the problem under consideration.',
    answer: false,
    topic: 'Hindsight–insight–foresight',
    sectionId: 'data-centered',
    explanation:
      'False; reversed. OLAP/reporting supports hindsight; data mining and analytical statistics support insight.',
  }),
  tf({
    id: 'f2019-a7',
    ...EX.final2019,
    part: 'A1 · True/False',
    number: 'A1.7',
    wording:
      'In a decision support cycle, models are essentially needed to validate and approve a selected decision.',
    answer: false,
    topic: 'Decision-making cycle',
    sectionId: 'process',
    explanation:
      'False. Models assess alternatives/scenarios and estimate cost/risk; validation and approval are managerial/organisational steps.',
  }),
  tf({
    id: 'f2019-a8',
    ...EX.final2019,
    part: 'A1 · True/False',
    number: 'A1.8',
    wording:
      'Decision Support systems (DSS) are used to support reporting and database related capabilities along with few or simple analytical capabilities.',
    answer: false,
    topic: 'MIS vs DSS',
    sectionId: 'support-systems',
    explanation:
      'False. This is MIS. DSS is characterised by strong analytical/modelling support for semi-structured decisions.',
  }),
  tf({
    id: 'f2019-a9',
    ...EX.final2019,
    part: 'A1 · True/False',
    number: 'A1.9',
    wording:
      'The efficiency criteria of a modeling language is used to assess the effective communications with decision makers.',
    answer: false,
    topic: 'Modelling language criteria',
    sectionId: 'gams',
    explanation:
      'False. Communication with decision makers is an effectiveness criterion. Efficiency is about model-builder productivity, coverage, compactness and solvers.',
  }),
  tf({
    id: 'f2019-a10',
    ...EX.final2019,
    part: 'A1 · True/False',
    number: 'A1.10',
    wording:
      'Executive information system (EIS) is generally used to support middle management decisions.',
    answer: false,
    topic: 'EIS / ESS',
    sectionId: 'support-systems',
    explanation:
      'False. EIS supports top/senior executives and strategic decisions.',
  }),
  tf({
    id: 'f2019-a11',
    ...EX.final2019,
    part: 'A1 · True/False',
    number: 'A1.11',
    wording:
      'The Interpretation capability of a modeling language describes variables, structure and mathematical specification of a model.',
    answer: true,
    topic: 'Modelling language criteria',
    sectionId: 'gams',
    explanation:
      'True. Explanation/interpretation communicates variables, structure and mathematical specification as part of the effectiveness of a modelling language.',
  }),
  tf({
    id: 'f2019-a12',
    ...EX.final2019,
    part: 'A1 · True/False',
    number: 'A1.12',
    wording:
      'A DSS generator as a modeling language support model experimentation and analysis of results.',
    answer: true,
    topic: 'DSS generators',
    sectionId: 'gams',
    explanation:
      'True. The DSS-generator branch emphasizes experimentation, what-if/goal seeking, output analysis and communication with the decision maker.',
  }),
  tf({
    id: 'f2019-a13',
    ...EX.final2019,
    part: 'A1 · True/False',
    number: 'A1.13',
    wording: 'A Special Purpose DSS can be viewed as a domain-driven or a tool-driven system.',
    answer: true,
    topic: 'DSS classification',
    sectionId: 'dss-core',
    explanation:
      'True. Special purpose DSS is split into problem/domain-oriented DSS and tool/method-oriented DSS.',
  }),
  tf({
    id: 'f2019-a14',
    ...EX.final2019,
    part: 'A1 · True/False',
    number: 'A1.14',
    wording:
      'IDE can be used to select the solver or solution algorithm associated with a mathematical programming problem.',
    answer: false,
    topic: 'GAMS environment',
    sectionId: 'gams',
    explanation:
      'False as a defining statement. The modelling language’s SOLVE statement selects the problem class/solver; the IDE is an editing/execution interface. It can help run and inspect, but it is not the solver-selection mechanism itself.',
  }),
  tf({
    id: 'f2019-a15',
    ...EX.final2019,
    part: 'A1 · True/False',
    number: 'A1.15',
    wording:
      'Data Mining and “What if“ analysis is the Business Intelligence tools for knowledge generation.',
    answer: true,
    topic: 'BI and analytics',
    sectionId: 'support-systems',
    explanation:
      'True in the lecture’s broad BI tool list, which includes data mining, statistical/forecasting tools and what-if analysis. Strictly, BI is descriptive/predictive and BA is prescriptive, but the course treats these as related analytical tools for generating information/knowledge.',
  }),
  tf({
    id: 'f2019-a16',
    ...EX.final2019,
    part: 'A1 · True/False',
    number: 'A1.16',
    wording: 'Institutionalization is an important phase in constructing Special Purpose DSS.',
    answer: false,
    topic: 'DSS classification',
    sectionId: 'dss-core',
    explanation:
      'False. Institutionalization is emphasized for **general purpose** DSS, which must support many applications within a sustainable institutional setup. Special purpose DSS is narrower and may be one-off.',
  }),
  tf({
    id: 'f2019-a17',
    ...EX.final2019,
    part: 'A1 · True/False',
    number: 'A1.17',
    wording:
      'Data Viewing and Manipulation operations are tools used by OLAP to generate Ad-Hoc Reports for Decision Makers.',
    answer: true,
    topic: 'OLAP',
    sectionId: 'data-centered',
    explanation:
      'True. OLAP viewing/manipulation operations (roll-up, drill-down, slice, dice, pivot) let decision makers generate ad-hoc reports from analytical data.',
  }),
  tf({
    id: 'f2019-a18',
    ...EX.final2019,
    part: 'A1 · True/False',
    number: 'A1.18',
    wording:
      'Extraction, Transformation and Loading (ETL) software is classified as a database management system (DBMS).',
    answer: false,
    topic: 'ETL and warehousing',
    sectionId: 'data-centered',
    explanation:
      'False. ETL is a data-integration pipeline that extracts, cleans/transforms and loads data. It is not a DBMS, although it interacts with source and target databases.',
  }),

  // ---------------------------------------------------------------- FINAL 2020
  tf({
    id: 'f2020-a1',
    ...EX.final2020,
    part: 'A1 · True/False',
    number: 'A1.1',
    wording:
      'In a Long Term Strategic Decision Making process, Expert Opinion are strongly needed to support the policy making process.',
    answer: true,
    topic: 'Strategic decisions',
    sectionId: 'process',
    explanation:
      'True. Long-term strategic problems are unstructured and uncertain, so expert opinion, vision and judgment are important alongside data and models.',
  }),
  tf({
    id: 'f2020-a2',
    ...EX.final2020,
    part: 'A1 · True/False',
    number: 'A1.2',
    wording: 'Model-centered DSS can can be associated with both special and general purpose DSS.',
    answer: true,
    topic: 'DSS classification',
    sectionId: 'dss-core',
    explanation:
      'True. A model-centered orientation can occur in a special purpose DSS (one production-shipping model) or a general purpose DSS (an institutional model base across applications).',
  }),
  tf({
    id: 'f2020-a3',
    ...EX.final2020,
    part: 'A1 · True/False',
    number: 'A1.3',
    wording:
      'General purpose Decision Support Systems use analytical tools for different domain application and they need an institutional structure.',
    answer: true,
    topic: 'DSS classification',
    sectionId: 'dss-core',
    explanation:
      'True. General purpose DSS hosts reusable data/model/knowledge tools across domains and needs an institutional setup to sustain them.',
  }),
  tf({
    id: 'f2020-a4',
    ...EX.final2020,
    part: 'A1 · True/False',
    number: 'A1.4',
    wording: 'Cairo University senior management DSS can be viewed as a general purpose integrated DSS.',
    answer: true,
    topic: 'Integrated DSS cases',
    sectionId: 'dss-core',
    explanation:
      'True in the course case. It serves multiple university management decisions and integrates data-centered and model-centered support.',
    status: 'context-only',
    note: 'The case is not described in the supplied lecture transcriptions.',
  }),
  tf({
    id: 'f2020-a5',
    ...EX.final2020,
    part: 'A1 · True/False',
    number: 'A1.5',
    wording:
      'Multi-dimensional Database model is designed to generate ad-hoc reports reflecting policy maker’s view.',
    answer: true,
    topic: 'OLAP',
    sectionId: 'data-centered',
    explanation:
      'True. The multi-dimensional model is designed for slicing/dicing and ad-hoc analytical views, even though OLAP can also operate on relational schemas.',
  }),
  tf({
    id: 'f2020-a6',
    ...EX.final2020,
    part: 'A1 · True/False',
    number: 'A1.6',
    wording:
      'In a Data Centered DSS, OLAP tool provides insights whereas Data mining provides foresights to the decision problem under consideration.',
    answer: false,
    topic: 'Hindsight–insight–foresight',
    sectionId: 'data-centered',
    explanation:
      'False. OLAP/reporting = hindsight; data mining/statistics = insight. Foresight is primarily model/knowledge-centered.',
  }),
  tf({
    id: 'f2020-a7',
    ...EX.final2020,
    part: 'A1 · True/False',
    number: 'A1.7',
    wording:
      '“What-if” Analysis is the main difference between the data-centered DSS and Business Intelligence (BI) system.',
    answer: false,
    topic: 'BI and analytics',
    sectionId: 'support-systems',
    explanation:
      'False. BI includes analytical tools and what-if/forecasting support; the difference is not a single feature. BI extends data-centered analytics with predictive/analytical capabilities; DSS can also use what-if models.',
  }),
  tf({
    id: 'f2020-a8',
    ...EX.final2020,
    part: 'A1 · True/False',
    number: 'A1.8',
    wording:
      'Extraction, transformation and loading (ETL) software system is particularly designed to prepare data for mining operations.',
    answer: false,
    topic: 'ETL and warehousing',
    sectionId: 'data-centered',
    explanation:
      'False. ETL prepares integrated, clean data for the warehouse and analytical environment broadly; data mining is only one downstream consumer. ETL is not “particularly” a mining-preparation tool.',
  }),
  tf({
    id: 'f2020-a9',
    ...EX.final2020,
    part: 'A1 · True/False',
    number: 'A1.9',
    wording:
      'In a decision support cycle, models are essentially needed to asses the risk associated with a specific decision.',
    answer: true,
    topic: 'Decision-making cycle',
    sectionId: 'process',
    explanation:
      'True. Models can estimate cost, risk and outcomes under alternative assumptions/scenarios. The statement says “assess risk,” not “approve the decision,” so it is correct.',
  }),
  tf({
    id: 'f2020-a10',
    ...EX.final2020,
    part: 'A1 · True/False',
    number: 'A1.10',
    wording:
      'Management information systems (MIS) are generally used to support reporting and database related capabilities along with few or simple analytical applications.',
    answer: true,
    topic: 'MIS vs DSS',
    sectionId: 'support-systems',
    explanation:
      'True. MIS is reporting/database-oriented with simple application programs; that is precisely how the course contrasts it with DSS.',
  }),
  tf({
    id: 'f2020-a11',
    ...EX.final2020,
    part: 'A1 · True/False',
    number: 'A1.11',
    wording:
      'Data Marts can serve as a way for accelerating access to information and generation of ad-hoc reports.',
    answer: true,
    topic: 'Data marts',
    sectionId: 'data-centered',
    explanation:
      'True. A data mart is a focused subset of the warehouse for a department/subject, reducing data volume and speeding access and ad-hoc analysis.',
  }),
  tf({
    id: 'f2020-a12',
    ...EX.final2020,
    part: 'A1 · True/False',
    number: 'A1.12',
    wording: 'Executive information system (EIS) is generaly used to support middle management decisions.',
    answer: false,
    topic: 'EIS / ESS',
    sectionId: 'support-systems',
    explanation:
      'False. EIS is for top/senior executives and strategic decisions. Original spelling preserved.',
  }),
  tf({
    id: 'f2020-a13',
    ...EX.final2020,
    part: 'A1 · True/False',
    number: 'A1.13',
    wording:
      'The efficiency criteria of a modeling language is used to assess the effectiveness of communications with decision makers.',
    answer: false,
    topic: 'Modelling language criteria',
    sectionId: 'gams',
    explanation:
      'False. Communication is an effectiveness criterion. Efficiency concerns model coverage, compactness, construction productivity and solvers.',
  }),
  tf({
    id: 'f2020-a14',
    ...EX.final2020,
    part: 'A1 · True/False',
    number: 'A1.14',
    wording: 'Enterprise information system is generaly used to support different levels of management decisions.',
    answer: true,
    topic: 'EIS / ESS',
    sectionId: 'support-systems',
    explanation:
      'True. An enterprise information system is corporate-wide and can support multiple management levels, unlike a stand-alone executive EIS focused on top executives.',
  }),
  tf({
    id: 'f2020-a15',
    ...EX.final2020,
    part: 'A1 · True/False',
    number: 'A1.15',
    wording:
      'The Interpretation capability of a modeling language describes the structure and mathematical specification of a model.',
    answer: true,
    topic: 'Modelling language criteria',
    sectionId: 'gams',
    explanation:
      'True. Explanation/interpretation is an effectiveness feature that describes model structure and mathematical specification.',
  }),
  tf({
    id: 'f2020-a16',
    ...EX.final2020,
    part: 'A1 · True/False',
    number: 'A1.16',
    wording:
      'DSS generator is a modeling language satisfying efficiency criteria that permit model experimentation and communication with decision maker.',
    answer: false,
    topic: 'DSS generators',
    sectionId: 'gams',
    explanation:
      'False. Experimentation and communication are **effectiveness** criteria, not efficiency. A DSS generator is an environment supporting these effectiveness capabilities.',
  }),
  tf({
    id: 'f2020-a17',
    ...EX.final2020,
    part: 'A1 · True/False',
    number: 'A1.17',
    wording: 'A Special Purpose DSS can be viewed as a domain-driven or a tool-driven system.',
    answer: true,
    topic: 'DSS classification',
    sectionId: 'dss-core',
    explanation:
      'True. Special purpose DSS splits into domain/problem-oriented and tool/method-oriented types.',
  }),
  tf({
    id: 'f2020-a18',
    ...EX.final2020,
    part: 'A1 · True/False',
    number: 'A1.18',
    wording:
      'GAMS-IDE is used to select the solver or solution algorithm associated with a mathematical programming problem.',
    answer: false,
    topic: 'GAMS environment',
    sectionId: 'gams',
    explanation:
      'False. GAMS-IDE is the editing/execution interface. Solver selection is expressed in the SOLVE statement; the IDE may let you run the model, but it is not the solver-selection mechanism.',
  }),
  tf({
    id: 'f2020-a19',
    ...EX.final2020,
    part: 'A1 · True/False',
    number: 'A1.19',
    wording:
      'Data Mining and “What if “ analysis is the Business Intelligence tools for information generation.',
    answer: true,
    topic: 'BI and analytics',
    sectionId: 'support-systems',
    explanation:
      'True in the course’s broad BI tool framing, which lists data mining, statistical/forecasting tools and what-if analysis among analytical enablers.',
  }),
  tf({
    id: 'f2020-a20',
    ...EX.final2020,
    part: 'A1 · True/False',
    number: 'A1.20',
    wording:
      'Extraction, Transformation and Loading (ETL) software is classified as a database management system (DBMS).',
    answer: false,
    topic: 'ETL and warehousing',
    sectionId: 'data-centered',
    explanation:
      'False. ETL is a data-integration process/tool, not a DBMS. It extracts from sources, transforms, and loads into a target warehouse/database.',
  }),
  mcq({
    id: 'f2020-a2-1',
    ...EX.final2020,
    part: 'A2 · Multiple choice',
    number: 'A2.1',
    points: '2',
    wording: 'AHP analytical model can be viewed as:',
    choices: ['Hierarchical Database system.', 'A general purpose model-centered DSS.', 'A special purpose tool oriented DSS.'],
    answer: 2,
    topic: 'AHP',
    sectionId: 'ahp',
    explanation:
      'Correct choice: 3. AHP is a multi-criteria method packaged as a tool-driven special purpose DSS, not a database or general purpose model-centered DSS.',
  }),
  mcq({
    id: 'f2020-a2-2',
    ...EX.final2020,
    part: 'A2 · Multiple choice',
    number: 'A2.2',
    points: '2',
    wording: 'Foresights in support of decision making are ensured by:',
    choices: ['Mathematical models.', 'Analytical database system.', 'Data Mining system.'],
    answer: 0,
    topic: 'Hindsight–insight–foresight',
    sectionId: 'foundations',
    explanation:
      'Correct choice: 1. Mathematical models (simulation, optimisation, forecasting) support foresight. Analytical databases support hindsight; data mining supports insight.',
  }),
  mcq({
    id: 'f2020-a2-3',
    ...EX.final2020,
    part: 'A2 · Multiple choice',
    number: 'A2.3',
    points: '2',
    wording: 'Business Intelligence software system is viewed as:',
    choices: ['An Integrated data and model centered DSS.', 'A data-centered DSS with "what-if" analytical tools.', 'A model-centered DSS.'],
    answer: 1,
    topic: 'BI and analytics',
    sectionId: 'support-systems',
    explanation:
      'Correct choice: 2. In the lecture’s development path, BI extends data-centered DSS with analytical/what-if and predictive tools. It is not primarily an integrated or model-centered DSS.',
  }),
  q({
    id: 'f2020-b1',
    ...EX.final2020,
    part: 'B · Conceptual model',
    number: 'B.a',
    points: '5',
    wording: 'Draw a schematic diagram explaining the development path of the DSS technology.',
    answer: 'See the DSS development path: data-centered (hindsight/insight) → model-centered (foresight) → intelligent/knowledge → group/executive.',
    type: 'diagram',
    topic: 'DSS development path',
    sectionId: 'foundations',
    visual: 'development-path',
    explanation:
      'The academic path moves from data-centered DSS through model-centered and intelligent DSS to specialized systems. The business path mirrors it as descriptive DSS → predictive BI → prescriptive BA.',
    solution: `**Academic development path**
1. **First data-centered DSS** — data warehouse, OLAP, multi-dimensional DB, ad-hoc reporting → hindsight.
2. **Second data-centered DSS** — data mining, simple statistics, reporting → hindsight/insight.
3. **Model-centered DSS** — optimisation/simulation/decision models, MBMS, modelling language → foresight.
4. **Intelligent / knowledge-based DSS** — AI, expert systems, rules → foresight with explanation.
5. **Specialized systems** — group DSS, executive/enterprise systems, expertise systems.

**Business development path**
Basic DSS (descriptive) → Business Intelligence (predictive) → Business Analytics (prescriptive) → Advanced Business Analytics, supported by data warehousing/OLAP → data mining/statistics/what-if → optimisation/simulation/AI → web/group support.

Draw the two paths side by side and label the tools that enable each transition.`,
  }),
  q({
    id: 'f2020-b2',
    ...EX.final2020,
    part: 'B · Conceptual model',
    number: 'B.b',
    points: '5',
    wording:
      'Identify the main differences between the executive information system and the enterprise information system in supporting the decision making process.',
    answer:
      'EIS: top-executive, stand-alone, strategic dashboards. Enterprise IS: corporate-wide, integrated, multi-level, ERP-linked.',
    type: 'written',
    topic: 'EIS vs enterprise systems',
    sectionId: 'support-systems',
    explanation:
      'The lecture contrasts EIS as a stand-alone top-management support system with an enterprise system that spans the corporation and several management levels.',
    solution: `| Dimension | Executive Information System (EIS) | Enterprise Information System |
|---|---|---|
| Scope | Executive-focused, often stand-alone | Corporate-wide, integrated |
| Main users | Top/senior executives | Top, middle and operational management for different purposes |
| Information | Executive dashboard, internal + external, high-level | Holistic corporate information across functions |
| Decision horizon | Strategic/long-term | Strategic through operational |
| Relationship to DSS | Can be a front-end to DSS | Includes/coordinates multiple systems and data sources; linked to ERP |
| Breadth | Narrow executive view | Broad enterprise integration, delivery and data manipulation |

**Key sentence:** EIS is a top-management lens; enterprise information systems are corporate-wide platforms spanning management levels.`,
  }),
  q({
    id: 'f2020-c1',
    ...EX.final2020,
    part: 'C · Computer modeling language',
    number: 'C.1',
    points: '4',
    wording:
      'Select two criteria for classifying a model building language. Identify the type of models corresponding to the selected taxonomies, and provide two examples of each language type.',
    answer:
      'Criterion 1: algebraic/declarative vs non-algebraic/integrated. Criterion 2: optimisation/equations vs simulation vs DSS modelling.',
    type: 'written',
    topic: 'Modelling language classifications',
    sectionId: 'gams',
    explanation:
      'The lecture offers both a high-level taxonomy (algebraic vs non-algebraic) and a three-way one (optimisation/equations, simulation, DSS modelling). Use examples exactly as taught.',
    solution: `**Criterion 1 — Algebraic vs non-algebraic**

| Type | Model focus | Examples |
|---|---|---|
| Algebraic / declarative | Mathematical optimisation and systems of equations; compact algebra; separate solvers | GAMS, AMPL, AIMMS, LINGO |
| Non-algebraic / integrated environment | Simulation/DSS modelling; GUI, visualisation, end-user interface, experimentation | Arena, SIMSCRIPT, SLAM, VDSS (as generator) |

**Criterion 2 — Problem/tool family**
1. **Optimisation and systems of equations:** LP, integer/non-linear programming, systems of equations. Examples: GAMS, AMPL.
2. **Computer simulation:** discrete-event, continuous, network simulation. Examples: Arena, SIMSCRIPT.
3. **DSS modelling languages:** what-if, goal seeking, explanation, decision-maker communication. Examples: Visual DSS, Analytica.

Name the criterion before listing models/examples.`,
  }),
  q({
    id: 'f2020-c2',
    ...EX.final2020,
    part: 'C · Computer modeling language',
    number: 'C.2',
    points: '4',
    wording:
      'Use the linear programming transport model to identify the following type of modeling experiments: a) Policy experiment b) Impact of external changes c) Impact of technological changes d) Sensitivity analysis.',
    answer:
      'Policy: change capacities/demand targets/route rules. External: demand/fuel/regulation shifts. Technological: freight efficiency/new route. Sensitivity: systematic parameter variation.',
    type: 'written',
    topic: 'Modelling experiments',
    sectionId: 'production-shipping',
    explanation:
      'The same transportation LP supports all four experiment types. The distinction comes from the question and the parameter being changed, not from a different model.',
    solution: `Use the transport LP with sets i (plants), j (markets), parameters a(i), b(j), c(i,j) and variables x(i,j).

**a) Policy experiment**
Change a controllable decision rule or target — for example, require a minimum share from a plant, impose a capacity investment, or set a service-level demand target. Ask: what policy gives the best outcome?

**b) Impact of external changes**
Change an external market parameter — demand rises/falls, fuel prices change, a border closes, or supplier conditions shift. Ask: how exposed is our plan to the environment?

**c) Impact of technological changes**
Change the production/shipping technology — a faster route, more efficient vehicle, lower freight rate, or new plant technology that changes capacity/cost. Ask: what is the value of the technology?

**d) Sensitivity analysis**
Systematically vary a parameter (capacity, demand or cost coefficient) around its base value and observe the optimal solution and objective. Ask: how robust is the recommendation, and over what range does it remain optimal?

**Exam tip:** state the parameter changed and the managerial question. That is what distinguishes the experiment types.`,
  }),
  q({
    id: 'f2020-d1',
    ...EX.final2020,
    part: 'D · Data-centered DSS',
    number: 'D.1',
    points: '4',
    wording:
      'Provide simple definitions of the analytical functions of an OLAP classified into viewing and manipulation operations.',
    answer:
      'Viewing: slice and dice. Manipulation: roll-up, drill-down and pivot/rotate. (Definitions must explain dimensions and aggregation.)',
    type: 'written',
    topic: 'OLAP',
    sectionId: 'data-centered',
    explanation:
      'The exam asks for a classification. Use simple definitions and, if possible, an example cube with time, product and location.',
    solution: `**Viewing operations**
- **Slice:** fix one dimension to a single value, producing a sub-cube. Example: view sales for 2025 only.
- **Dice:** select a subset of values on two or more dimensions. Example: sales for 2025–2026, two products and three regions.

**Manipulation operations**
- **Roll-up:** aggregate data upward along a dimension hierarchy. Example: monthly sales → quarterly → annual.
- **Drill-down:** move to a finer level of detail. Example: annual → quarterly → monthly; region → city → store.
- **Pivot / rotate:** change the orientation of the view, moving dimensions between rows, columns and pages. Example: put product on rows and time on columns, then swap them.

**Key distinction:** viewing selects a portion of the cube; manipulation changes aggregation or presentation. Reporting consumes the resulting analytical view.`,
  }),
  q({
    id: 'f2020-d2',
    ...EX.final2020,
    part: 'D · Data-centered DSS',
    number: 'D.2',
    points: '4',
    wording:
      'Draw a schematic diagram to represent the inter-relationship or dependence between: Operational database; ETL; Data warehousing; Data marts; OLAP; Reporting; Data Mining in a data-centered DSS.',
    answer: 'See the data-centered pipeline.',
    type: 'diagram',
    topic: 'Data-centered DSS architecture',
    sectionId: 'data-centered',
    visual: 'data-pipeline',
    explanation:
      'Show operational sources → ETL → warehouse → marts → OLAP/reporting and data mining → decision maker.',
    solution: SOLUTIONS.dataPipeline,
  }),
  q({
    id: 'f2020-e1',
    ...EX.final2020,
    part: 'E · Model-centered DSS',
    number: 'E.1',
    points: '4',
    wording:
      'Draw a simple block diagram for the conceptual model of a general purpose Model-centered DSS of an Industrial Corporation. Include illustrative examples of the models to be included in its model base.',
    answer: 'See the model-centered block and example models.',
    type: 'diagram',
    topic: 'Model-centered DSS architecture',
    sectionId: 'model-centered',
    visual: 'model-dss',
    explanation:
      'Include model base, MBMS, modelling language, solvers, data, interface, and models for production, distribution, inventory, finance and forecasting.',
    solution: SOLUTIONS.modelDssBlock,
  }),
  q({
    id: 'f2020-e2',
    ...EX.final2020,
    part: 'E · Model-centered DSS',
    number: 'E.2',
    points: '4',
    wording: 'State the list of software functions classified as model creation and model manipulation in a MBMS.',
    answer: 'Creation: formulate, generate, edit, validate, document. Manipulation: store, retrieve, link, execute, update, run scenarios, analyse results.',
    type: 'written',
    topic: 'MBMS',
    sectionId: 'model-centered',
    explanation:
      'Group the routines exactly as requested: model creation first, then model manipulation.',
    solution: `**Model creation**
- Model formulation/specification
- Model generation/instantiation
- Model editing and modification
- Model validation/verification
- Model documentation/metadata

**Model manipulation**
- Model storage, cataloguing and retrieval
- Model selection, linking and integration
- Model execution / solver invocation
- Model updating and version management
- What-if/scenario/sensitivity experiments
- Output analysis, explanation and reporting`,
  }),

  // ---------------------------------------------------------------- FINAL 2023
  tf({
    id: 'f2023-q1-1',
    ...EX.final2023,
    part: 'Question 1 · True/False',
    number: 'Q1.1',
    wording: 'Executive Information Systems (EIS) are generally used to support middle management decisions.',
    answer: false,
    topic: 'EIS / ESS',
    sectionId: 'support-systems',
    explanation: 'False. EIS supports top/senior executives and strategic decisions.',
  }),
  tf({
    id: 'f2023-q1-2',
    ...EX.final2023,
    part: 'Question 1 · True/False',
    number: 'Q1.2',
    wording: 'A transaction-processing database is classified as subject-oriented and time-variant.',
    answer: false,
    topic: 'OLTP vs OLAP',
    sectionId: 'data-centered',
    explanation:
      'False. Subject-oriented and time-variant are characteristics of a data warehouse. A transaction-processing database is application/transaction-oriented and holds current operational records.',
  }),
  tf({
    id: 'f2023-q1-3',
    ...EX.final2023,
    part: 'Question 1 · True/False',
    number: 'Q1.3',
    wording: 'The Analytical Hierarchy Process (AHP) can be considered a tool for domain-oriented decision support systems.',
    answer: false,
    topic: 'AHP',
    sectionId: 'ahp',
    explanation:
      'False. AHP is a tool/method-oriented special purpose DSS, not a domain-oriented system. Its domain can vary; the method is the organising principle.',
  }),
  tf({
    id: 'f2023-q1-4',
    ...EX.final2023,
    part: 'Question 1 · True/False',
    number: 'Q1.4',
    wording:
      'Decision maker insights are required to move from decision-making models to actionable decisions.',
    answer: true,
    topic: 'Models and judgment',
    sectionId: 'model-centered',
    explanation:
      'True. Models produce analytical results, but the decision maker must interpret them, apply judgment, consider context and turn them into an actionable decision.',
  }),
  tf({
    id: 'f2023-q1-5',
    ...EX.final2023,
    part: 'Question 1 · True/False',
    number: 'Q1.5',
    wording:
      'Decision Support Systems (DSS) are typically used to support reporting and database-related capabilities, along with some basic analytical tools.',
    answer: false,
    topic: 'MIS vs DSS',
    sectionId: 'support-systems',
    explanation:
      'False. That describes MIS. DSS is model/analytics-oriented and supports semi-structured decisions.',
  }),
  tf({
    id: 'f2023-q1-6',
    ...EX.final2023,
    part: 'Question 1 · True/False',
    number: 'Q1.6',
    wording:
      'A transaction processing system (OLTP) is typically used for managing operational data, not for analytical purposes.',
    answer: true,
    topic: 'OLTP vs OLAP',
    sectionId: 'data-centered',
    explanation:
      'True. OLTP manages day-to-day transactions and current operational data. Analytical work uses warehouse/OLAP/data mining systems.',
  }),
  tf({
    id: 'f2023-q1-7',
    ...EX.final2023,
    part: 'Question 1 · True/False',
    number: 'Q1.7',
    wording: 'Strategic Decision Support Systems use a combination of quantitative modeling tools.',
    answer: true,
    topic: 'Strategic decisions',
    sectionId: 'process',
    explanation:
      'True. Strategic support combines quantitative models (forecasting, scenario, optimisation) with judgment, expert opinion and external information; quantitative tools are part of the combination.',
  }),
  tf({
    id: 'f2023-q1-8',
    ...EX.final2023,
    part: 'Question 1 · True/False',
    number: 'Q1.8',
    wording:
      'Online Analytical Processing (OLAP) is generally used to discover hidden information, in addition to expert opinion and vision.',
    answer: false,
    topic: 'OLAP',
    sectionId: 'data-centered',
    explanation:
      'False. OLAP supports multi-dimensional queries and ad-hoc reporting of known data; data mining discovers hidden patterns. Expert opinion/vision is associated with knowledge-based/executive support, not OLAP.',
  }),
  tf({
    id: 'f2023-q1-9',
    ...EX.final2023,
    part: 'Question 1 · True/False',
    number: 'Q1.9',
    wording:
      'In strategic decision-making processes, external data is more important than internal data for policy-making.',
    answer: false,
    topic: 'Decision levels and data',
    sectionId: 'process',
    explanation:
      'False as a ranking. Strategic decisions need **both** external environment data and internal capability/performance data; external data is strongly needed but not categorically “more important.”',
  }),
  tf({
    id: 'f2023-q1-10',
    ...EX.final2023,
    part: 'Question 1 · True/False',
    number: 'Q1.10',
    wording: 'General Purpose DSS can be broadly classified as tool-oriented or domain-based.',
    answer: false,
    topic: 'DSS classification',
    sectionId: 'dss-core',
    explanation:
      'False. Tool-oriented/domain-based describes **special purpose** DSS. General purpose DSS is classified by analytical orientation (data/model/knowledge) and is not limited to one domain.',
  }),
  tf({
    id: 'f2023-q1-11',
    ...EX.final2023,
    part: 'Question 1 · True/False',
    number: 'Q1.11',
    wording: 'Special Purpose Decision Support Systems focus on relatively small optimization models.',
    answer: false,
    topic: 'DSS classification',
    sectionId: 'dss-core',
    explanation:
      'False as worded. Special purpose DSS focuses on a bounded problem domain or method/tool; it is not limited to small optimisation models (AHP, simulation and larger domain models are also possible).',
  }),
  tf({
    id: 'f2023-q1-12',
    ...EX.final2023,
    part: 'Question 1 · True/False',
    number: 'Q1.12',
    wording:
      'General Purpose DSS include analytical data and modeling tools that can handle complex problems, and they are typically more expensive than special-purpose DSS.',
    answer: true,
    topic: 'DSS classification',
    sectionId: 'dss-core',
    explanation:
      'True. General purpose DSS hosts reusable analytical tools across complex/multiple applications and is typically more expensive, but more sustainable, than a narrow special purpose DSS.',
  }),
  tf({
    id: 'f2023-q1-13',
    ...EX.final2023,
    part: 'Question 1 · True/False',
    number: 'Q1.13',
    wording:
      'The explanation capability of a modeling language describes the variables, structure, and relationship between them.',
    answer: true,
    topic: 'Modelling language criteria',
    sectionId: 'gams',
    explanation:
      'True. Explanation/interpretation is an effectiveness feature that communicates model variables, structure and relationships (as well as specification).',
  }),
  tf({
    id: 'f2023-q1-14',
    ...EX.final2023,
    part: 'Question 1 · True/False',
    number: 'Q1.14',
    wording:
      'Declarative modeling languages focus solely on the solution strategy and mathematical specifications of a model.',
    answer: false,
    topic: 'Declarative modelling languages',
    sectionId: 'gams',
    explanation:
      'False. They focus on mathematical specification, not solution strategy. Solver strategy is separated from the model.',
  }),
  tf({
    id: 'f2023-q1-15',
    ...EX.final2023,
    part: 'Question 1 · True/False',
    number: 'Q1.15',
    wording:
      'Group Decision Support Systems (GDSS) typically require additional software to organize and manage ideas generated by group members.',
    answer: true,
    topic: 'Group support systems',
    sectionId: 'support-systems',
    explanation:
      'True. GDSS adds groupware/collaborative software for communication, idea generation/organisation, ranking and group memory.',
  }),
  tf({
    id: 'f2023-q1-16',
    ...EX.final2023,
    part: 'Question 1 · True/False',
    number: 'Q1.16',
    wording:
      'Analytical data can be effectively managed using an online transaction processing (OLTP) system.',
    answer: false,
    topic: 'OLTP vs OLAP',
    sectionId: 'data-centered',
    explanation:
      'False. OLTP is for operational transactions, not analytical processing. Analytical data need warehouse/OLAP/data-mining infrastructure.',
  }),
  q({
    id: 'f2023-q2',
    ...EX.final2023,
    part: 'Question 2',
    number: 'Q2',
    points: '2',
    wording:
      'State the list of software functions (routines) explaining the model management system of a model centered DSS.',
    answer: 'See MBMS functions: model creation, storage, retrieval, linking, execution, updating, experimentation, analysis.',
    type: 'written',
    topic: 'MBMS',
    sectionId: 'model-centered',
    explanation:
      'This is a direct list question repeated in 2023 and 2025. Learn the model-creation and model-manipulation groups.',
    solution: SOLUTIONS.mbms,
  }),
  q({
    id: 'f2023-q3',
    ...EX.final2023,
    part: 'Question 3 · Structure of a DSS',
    number: 'Q3.1',
    points: '9',
    wording:
      'Draw a conceptual model of a general-purpose decision support system (DSS) including a data-centered, model-centered and knowledge management systems. State the information technologies appropriate for each of the three DSS components.',
    answer: 'See the integrated architecture with data/model/knowledge technologies.',
    type: 'diagram',
    topic: 'Integrated DSS architecture',
    sectionId: 'dss-core',
    visual: 'conceptual-model',
    explanation:
      'This is the central architecture question. Draw the full integrated model and place technology labels in each component.',
    solution: `${SOLUTIONS.conceptualModel}

**Technology labels**
- **Data-centered:** data warehouse / analytical database, multi-dimensional database, OLAP, data mining, reporting.
- **Model-centered:** model base, MBMS, modelling language (e.g. GAMS), optimisation/simulation/forecasting models, solver.
- **Knowledge-centered:** knowledge base, rule-based system, inference engine, expert system, explanation facility, AI tools.
- **Interface:** interactive user interface, visualisation/dashboard.
- **User:** decision maker/policy analyst.`,
  }),
  q({
    id: 'f2023-q4',
    ...EX.final2023,
    part: 'Question 4 · Model building language',
    number: 'Q4.1',
    points: '7',
    wording:
      'Draw a block diagram to illustrate the connections between GAMS reserved keywords and the components of a standard mathematical optimization model, along with its analytical results. Additionally, identify the two main criteria used to evaluate the performance of a modeling language and provide four key points related to each of these criteria.',
    answer: 'See the GAMS keyword/model map plus efficiency and effectiveness lists.',
    type: 'diagram',
    topic: 'GAMS structure',
    sectionId: 'gams',
    visual: 'gams-workflow',
    explanation:
      'Map SETS → indices, PARAMETERS/TABLE/SCALAR → data, VARIABLES → decision variables, EQUATIONS → objective and constraints, MODEL/SOLVE → model and algorithm, DISPLAY → results. Then list efficiency/effectiveness.',
    solution: `**Block diagram links**

| Mathematical component | GAMS reserved keyword | Role |
|---|---|---|
| Indices / index sets | \`SET\` | Define plants, markets, products, time periods |
| Data / coefficients | \`PARAMETER\`, \`TABLE\`, \`SCALAR\` | Supply, demand, costs, capacities |
| Decision variables | \`VARIABLE\`, \`POSITIVE VARIABLE\` | Quantities chosen by the model |
| Objective function | \`EQUATION\` + \`MODEL\` | Cost/revenue expression to minimise/maximise |
| Constraints | \`EQUATION\` | Supply, demand, capacity and balance constraints |
| Model selection | \`MODEL\` | Name and include equations |
| Solution strategy | \`SOLVE ... USING ...\` | Select problem class/solver and optimisation direction |
| Analytical results | \`DISPLAY\` | Show parameters, variable levels, objective value |
| Options / output | \`OPTION\` | Control solver/reporting behaviour |

**Two evaluation criteria**
- **Efficiency:** wide model-class coverage; compact formulation; less model-building time/effort; complete solver set; support for model-building phases.
- **Effectiveness:** friendly communication with the decision maker; what-if/goal seeking/scenario simulation; explanation/interpretation; graphical display/visualisation.

**Exam tip:** draw SETS and DATA above, VARIABLES and EQUATIONS in the model, MODEL/SOLVE as the execution link, and DISPLAY on the results side.`,
  }),
  q({
    id: 'f2023-q5',
    ...EX.final2023,
    part: 'Question 5 · Data-centered DSS',
    number: 'Q5.1',
    points: '7',
    wording:
      'Draw a schematic diagram to represent the inter-relationship or dependence between: Operational database; ETL; Data warehousing; Data marts; OLAP; Reporting; Data Mining. Describe briefly the rolling down/up and the pivoting operations of OLAP.',
    answer: 'See the pipeline plus roll-up/drill-down and pivot definitions.',
    type: 'diagram',
    topic: 'OLAP',
    sectionId: 'data-centered',
    visual: 'data-pipeline',
    explanation:
      'The diagram must show ETL between operational sources and warehouse, and OLAP/reporting/mining downstream. “Rolling down/up” refers to drill-down and roll-up; pivoting rotates dimensions.',
    solution: `${SOLUTIONS.dataPipeline}

**Roll-up / drill-down**
- **Roll-up:** aggregate upward in a dimension hierarchy, reducing detail. Example: monthly → quarterly → annual sales.
- **Drill-down (rolling down):** move to finer detail. Example: annual → quarterly → monthly; region → city → store.
- **Pivot (rotate):** change the dimensional orientation of the report, e.g. move Product from rows to columns and Time from columns to rows. The data are the same; the view is reorganised.`,
  }),
  q({
    id: 'f2023-q6-1',
    ...EX.final2023,
    part: 'Question 6 · Model-centered DSS',
    number: 'Q6.1',
    points: '5',
    wording:
      'Draw a simple block diagram for the conceptual model of a general purpose Model-centered DSS of an Industrial Corporation. Include illustrative examples of the models to be included in its model base.',
    answer: 'See model-centered block and example models.',
    type: 'diagram',
    topic: 'Model-centered DSS architecture',
    sectionId: 'model-centered',
    visual: 'model-dss',
    explanation:
      'Include model base, MBMS, modelling language, solvers, data access, interface and representative production/finance/logistics models.',
    solution: SOLUTIONS.modelDssBlock,
  }),
  q({
    id: 'f2023-q6-2',
    ...EX.final2023,
    part: 'Question 6 · Model-centered DSS',
    number: 'Q6.2',
    points: '2',
    wording:
      'State the list of software functions (routines) explaining the model management system of a model centered DSS.',
    answer: 'See MBMS functions.',
    type: 'written',
    topic: 'MBMS',
    sectionId: 'model-centered',
    explanation: 'Direct recall of MBMS functions; group creation, management and use.',
    solution: SOLUTIONS.mbms,
  }),

  // ---------------------------------------------------------------- FINAL 2025
  tf({
    id: 'f2025-q1-1',
    ...EX.final2025,
    part: 'Question 1 · True/False',
    number: 'Q1.1',
    wording: 'General Purpose DSS is broadly classified as tool oriented or domain based.',
    answer: false,
    topic: 'DSS classification',
    sectionId: 'dss-core',
    explanation:
      'False. Tool-oriented/domain-based is the classification of special purpose DSS. General purpose DSS is oriented by analytical support (data/model/knowledge).',
  }),
  tf({
    id: 'f2025-q1-2',
    ...EX.final2025,
    part: 'Question 1 · True/False',
    number: 'Q1.2',
    wording: 'A transaction-processing database is classified as subject-oriented and time-variant.',
    answer: false,
    topic: 'OLTP vs OLAP',
    sectionId: 'data-centered',
    explanation:
      'False. Subject-oriented and time-variant describe a data warehouse. Transaction databases are operational/application-oriented and current.',
  }),
  tf({
    id: 'f2025-q1-3',
    ...EX.final2025,
    part: 'Question 1 · True/False',
    number: 'Q1.3',
    wording: 'Analytical hierarchy process (AHP) can be viewed as a tool for the Domain-oriented decision support model.',
    answer: false,
    topic: 'AHP',
    sectionId: 'ahp',
    explanation:
      'False. AHP is a tool/method-driven special purpose DSS, not domain-oriented.',
  }),
  tf({
    id: 'f2025-q1-4',
    ...EX.final2025,
    part: 'Question 1 · True/False',
    number: 'Q1.4',
    wording:
      'Decision maker insights are required to move from a decision-making modeling to a specific decision support model.',
    answer: true,
    topic: 'Models and judgment',
    sectionId: 'model-centered',
    explanation:
      'True in the course’s decision-support logic. A mathematical model becomes a decision-support model for a specific context through the decision maker’s objectives, assumptions, risk attitude and interpretation. Models inform; judgment makes the decision actionable.',
  }),
  tf({
    id: 'f2025-q1-5',
    ...EX.final2025,
    part: 'Question 1 · True/False',
    number: 'Q1.5',
    wording:
      'Decision Support systems (DSS) is used generally to support reporting and database related capabilities along with few or simple analytical tools.',
    answer: false,
    topic: 'MIS vs DSS',
    sectionId: 'support-systems',
    explanation:
      'False. This describes MIS. DSS has strong analytical/modelling capabilities.',
  }),
  tf({
    id: 'f2025-q1-6',
    ...EX.final2025,
    part: 'Question 1 · True/False',
    number: 'Q1.6',
    wording:
      'Analytical data can be properly handled using an on-line transaction processing (OLTP) system.',
    answer: false,
    topic: 'OLTP vs OLAP',
    sectionId: 'data-centered',
    explanation:
      'False. OLTP handles operational transactions; analytical data require warehouse/OLAP/data-mining systems.',
  }),
  tf({
    id: 'f2025-q1-7',
    ...EX.final2025,
    part: 'Question 1 · True/False',
    number: 'Q1.7',
    wording:
      'Strategic decision support systems use a combination of quantitative modeling tools in addition to expert opinion and vision.',
    answer: true,
    topic: 'Strategic decisions',
    sectionId: 'process',
    explanation:
      'True. Strategic support combines quantitative models with expert opinion, vision and judgment because the problem is unstructured and uncertain.',
  }),
  tf({
    id: 'f2025-q1-8',
    ...EX.final2025,
    part: 'Question 1 · True/False',
    number: 'Q1.8',
    wording:
      'On-line analytical process (OLAP) is generally used to discover hidden information and relationship among variables.',
    answer: false,
    topic: 'OLAP',
    sectionId: 'data-centered',
    explanation:
      'False. OLAP supports multi-dimensional querying and reporting of known data. Discovering hidden patterns/relationships is data mining.',
  }),
  tf({
    id: 'f2025-q1-9',
    ...EX.final2025,
    part: 'Question 1 · True/False',
    number: 'Q1.9',
    wording:
      'In a Strategic decision-making process of a business enterprise, external data is less important than internal data in support of policy making.',
    answer: false,
    topic: 'Decision levels and data',
    sectionId: 'process',
    explanation:
      'False. Both are needed; strategic decisions are especially exposed to external conditions, so external data cannot be treated as less important.',
  }),
  tf({
    id: 'f2025-q1-10',
    ...EX.final2025,
    part: 'Question 1 · True/False',
    number: 'Q1.10',
    wording: 'Executive information system (EIS) is generally used to support middle management decisions.',
    answer: false,
    topic: 'EIS / ESS',
    sectionId: 'support-systems',
    explanation: 'False. EIS supports top/senior executives and strategic decisions.',
  }),
  tf({
    id: 'f2025-q1-11',
    ...EX.final2025,
    part: 'Question 1 · True/False',
    number: 'Q1.11',
    wording:
      'The Explanation capability of a modeling language describes variables, structure and mathematical specification of a model.',
    answer: true,
    topic: 'Modelling language criteria',
    sectionId: 'gams',
    explanation:
      'True. Explanation/interpretation describes variables, structure and mathematical specification as an effectiveness feature.',
  }),
  tf({
    id: 'f2025-q1-12',
    ...EX.final2025,
    part: 'Question 1 · True/False',
    number: 'Q1.12',
    wording:
      'Declarative modeling languages concentrate only on the solution strategy of management decisions.',
    answer: false,
    topic: 'Declarative modelling languages',
    sectionId: 'gams',
    explanation:
      'False. Declarative languages focus on mathematical specification; solution strategy is delegated to solvers.',
  }),
  tf({
    id: 'f2025-q1-13',
    ...EX.final2025,
    part: 'Question 1 · True/False',
    number: 'Q1.13',
    wording:
      'Special purpose Decision Support Systems concentrate on relatively small size problems, and they are less expensive than general purpose DSS.',
    answer: true,
    topic: 'DSS classification',
    sectionId: 'dss-core',
    explanation:
      'True. Narrower scope generally makes special purpose DSS cheaper and faster to build than an institutional general purpose DSS.',
  }),
  tf({
    id: 'f2025-q1-14',
    ...EX.final2025,
    part: 'Question 1 · True/False',
    number: 'Q1.14',
    wording:
      'General purpose DSS should include analytical data and modeling tools that can be used in different DSS context and applications.',
    answer: true,
    topic: 'DSS classification',
    sectionId: 'dss-core',
    explanation:
      'True. General purpose DSS provides reusable data/modelling tools across multiple application contexts; that is its defining generality.',
  }),
  tf({
    id: 'f2025-q1-15',
    ...EX.final2025,
    part: 'Question 1 · True/False',
    number: 'Q1.15',
    wording:
      'Group decision support systems (GDSS) generally need additional software systems to organize and manage ideas generated by the members of the DSS group.',
    answer: true,
    topic: 'Group support systems',
    sectionId: 'support-systems',
    explanation:
      'True. GDSS extends DSS with groupware: communication, idea organisation, ranking, voting and group memory.',
  }),
  q({
    id: 'f2025-q2',
    ...EX.final2025,
    part: 'Question 2',
    number: 'Q2',
    points: '2',
    wording:
      'State the list of software functions (routines) explaining the model management system of a model centered DSS.',
    answer: 'See MBMS functions.',
    type: 'written',
    topic: 'MBMS',
    sectionId: 'model-centered',
    explanation: 'Direct recall of MBMS functions. Use the creation/management grouping.',
    solution: SOLUTIONS.mbms,
  }),
  q({
    id: 'f2025-q3',
    ...EX.final2025,
    part: 'Question 3 · Structure of a DSS',
    number: 'Q3.1',
    points: '9',
    wording:
      'Draw a conceptual model of a general-purpose decision support system (DSS) including a data-centered, model-centered and knowledge management systems. State the information technologies appropriate for each of the three DSS components.',
    answer: 'See the integrated architecture with technologies.',
    type: 'diagram',
    topic: 'Integrated DSS architecture',
    sectionId: 'dss-core',
    visual: 'conceptual-model',
    explanation:
      'Same high-frequency architecture question as 2023. Draw all three wings, the interface and the user, with technology labels.',
    solution: `${SOLUTIONS.conceptualModel}

**Technology titles**
- Data-centered: data warehouse, analytical DB, multi-dimensional DB, OLAP, data mining.
- Model-centered: model base, MBMS, modelling language, optimisation/simulation models, solvers.
- Knowledge-centered: knowledge base, rule-based systems, expert systems, AI, explanation facility.`,
  }),
  q({
    id: 'f2025-q4',
    ...EX.final2025,
    part: 'Question 4 · Model building language',
    number: 'Q4.1',
    points: '7',
    wording:
      'Draw a block diagram to show the linkages between GAMS reserved/key words and the structure and Components of a standard mathematical optimization model and its analytical results. Identify the two main criteria used to assess the performance of a modeling language along with a selected four points pertaining to each of them.',
    answer: 'See the GAMS keyword map plus efficiency and effectiveness.',
    type: 'diagram',
    topic: 'GAMS structure',
    sectionId: 'gams',
    visual: 'gams-workflow',
    explanation:
      'Map sets → indices, data → parameters/tables/scalars, variables → decision variables, equations → objective/constraints, model/solve → execution, display → results. Then list efficiency/effectiveness.',
    solution: `**Keyword-to-model map**
- \`SET\` → indices / dimensions (plants, markets, products, time).
- \`PARAMETER\`, \`TABLE\`, \`SCALAR\` → known data and coefficients.
- \`VARIABLE\`, \`POSITIVE VARIABLE\` → decision variables.
- \`EQUATION\` → objective function and constraints.
- \`MODEL\` → collection/declaration of equations.
- \`SOLVE\` → problem class, solver and optimisation direction.
- \`DISPLAY\` / \`OPTION\` → analytical results and output control.

**Performance criteria**
**Efficiency (4 points):** wide model-class coverage; compact formulation of complex models; reduced construction time/effort; complete set of solvers; support for model-building phases (choose four).
**Effectiveness (4 points):** friendly decision-maker communication; what-if/goal seeking/scenario simulation; explanation/interpretation; graphical display/visualisation of results.`,
  }),
  q({
    id: 'f2025-q5',
    ...EX.final2025,
    part: 'Question 5 · Data-centered DSS',
    number: 'Q5.1',
    points: '7',
    wording:
      'Draw a schematic diagram to represent the inter-relationship or dependence between: Operational database; ETL; Data warehousing; Data marts; OLAP; Reporting; Data Mining. Describe briefly the rolling down/up and the pivoting operations of OLAP.',
    answer: 'See the data pipeline plus roll-up/drill-down and pivot definitions.',
    type: 'diagram',
    topic: 'OLAP',
    sectionId: 'data-centered',
    visual: 'data-pipeline',
    explanation:
      'Draw the analytical pipeline and define the three OLAP operations. Use a concrete sales example.',
    solution: `${SOLUTIONS.dataPipeline}

**OLAP operations**
- **Roll-up:** aggregate to a coarser level (month → quarter → year).
- **Drill-down (rolling down):** disaggregate to a finer level (year → quarter → month; region → city → store).
- **Pivot/rotate:** change the view’s orientation, e.g. swap product and time between rows and columns without changing the underlying data.`,
  }),
  q({
    id: 'f2025-q6-1',
    ...EX.final2025,
    part: 'Question 6 · Model-centered DSS',
    number: 'Q6.1',
    points: '5',
    wording:
      'Draw a simple block diagram for the conceptual model of a general purpose Model-centered DSS of an Industrial Corporation. Include illustrative examples of the models to be included in its model base.',
    answer: 'See model-centered block and example models.',
    type: 'diagram',
    topic: 'Model-centered DSS architecture',
    sectionId: 'model-centered',
    visual: 'model-dss',
    explanation:
      'Show model base, MBMS, modelling language/solvers, data, interface and examples such as LP production, transport, inventory and forecasting.',
    solution: SOLUTIONS.modelDssBlock,
  }),
  q({
    id: 'f2025-q6-2',
    ...EX.final2025,
    part: 'Question 6 · Model-centered DSS',
    number: 'Q6.2',
    points: '2',
    wording:
      'State the list of software functions (routines) explaining the model management system of a model centered DSS.',
    answer: 'See MBMS functions.',
    type: 'written',
    topic: 'MBMS',
    sectionId: 'model-centered',
    explanation: 'Repeat of the MBMS list question.',
    solution: SOLUTIONS.mbms,
  }),
]
