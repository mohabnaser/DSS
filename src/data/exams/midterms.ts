import type { Question } from '../../types'
import { EX, SOLUTIONS, q, tf } from './helpers'

export const MIDTERMS: Question[] = [
  // ---------------------------------------------------------------- MIDTERM 2015
  q({
    id: 'mt2015-a1',
    ...EX.mid2015,
    part: 'Part A · Concepts',
    number: 'A.1',
    points: '20',
    wording:
      'Identify briefly the main differences between general purpose and special purpose Decision Support Systems (DSS).',
    answer:
      'General purpose DSS is a reusable analytical environment for many decisions; special purpose DSS is built for one problem or one class of tools.',
    type: 'written',
    topic: 'DSS classification',
    sectionId: 'dss-core',
    visual: 'dss-tree',
    explanation:
      'The distinction is driven by scope and institutionalisation. General purpose DSS combines data and/or model tools that can be reused across applications and therefore needs an institutional structure. Special purpose DSS is narrower, problem- or tool-oriented, usually cheaper and faster to build.',
    solution: `**General purpose DSS**
- **Scope:** many applications, decision situations and domains.
- **Contents:** reusable data, modelling and knowledge tools; often integrated.
- **Setup:** requires an institutional structure and continuing support.
- **Cost / sustainability:** more expensive initially, but more sustainable and shareable.
- **Examples:** an integrated university senior-management DSS; a corporate DSS platform.
- **Orientation:** may be data-centered, model-centered or knowledge-centered.

**Special purpose DSS**
- **Scope:** one problem domain or one method/tool.
- **Contents:** a specific database and/or model for that decision context.
- **Setup:** can be built for a small, one-off decision with limited finance.
- **Cost / sustainability:** generally less expensive and less sustainable outside its intended use.
- **Examples:** a production-and-shipping DSS; an AHP-based tool-driven DSS; a transport support system.

A strong answer ends with the selection logic: use a **special purpose DSS** for a bounded problem or limited budget; choose a **general purpose DSS** when an institution needs repeatable support across many decisions.`,
  }),
  q({
    id: 'mt2015-a2',
    ...EX.mid2015,
    part: 'Part A · Concepts',
    number: 'A.2',
    points: '20',
    wording: 'Draw a schematic representation of a decision support cycle.',
    answer: 'See the decision-support cycle model answer and reference diagram.',
    type: 'diagram',
    topic: 'Decision-making cycle',
    sectionId: 'process',
    visual: 'decision-cycle',
    explanation:
      'The cycle runs from problem identification and data gathering through analysis, option generation, evaluation, choice, approval, implementation and follow-up. Feedback loops are essential.',
    solution: `**What the examiner expects to see**

A closed cycle (not a straight line) with these stages:

1. **Identify and bound the problem / opportunity** → formulate the problem.
2. **Gather and exploit data** → plan data estimation; gather internal and external information; define the environment.
3. **Analyse the data/system** → derive facts and knowledge; assess impacts and risks.
4. **Develop options and alternatives** → evaluate options and costs.
5. **Make the appropriate decision** → select an alternative.
6. **Internal approval** → validate, approve and communicate.
7. **Implementation** → execute and follow up, then loop back to problem identification.

**Where DSS contributes**
- Data-centered DSS supports stages 2–5 with analytical databases, reporting, OLAP and data mining.
- Model-centered DSS supports stages 3–5 with optimisation, simulation and scenario analysis.
- The decision maker supplies judgment, preferences, risk attitude and approval.

Label the feedback loops: new information or implementation results can reopen the problem or change the alternatives.`,
  }),
  q({
    id: 'mt2015-b1',
    ...EX.mid2015,
    part: 'Part B · Model-building languages',
    number: 'B.1',
    points: '10',
    wording: 'List modeling capabilities of GAMS.',
    answer:
      'GAMS provides a declarative algebraic modelling language, compact set-based formulations, separate solvers, model-data independence, model-solver independence, model libraries, error diagnostics, automation, and result/report capabilities.',
    type: 'written',
    topic: 'GAMS capabilities',
    sectionId: 'gams',
    visual: 'gams-workflow',
    explanation:
      'The lecturer groups capabilities into modelling capabilities and other IDE capabilities. The core academic point is not a list of buttons: GAMS separates the model’s algebra from data and from the solver.',
    solution: `**Model-building capabilities**
1. Declarative algebraic language for mathematical programming and systems of equations.
2. Compact, indexed representation of large models using sets and data structures.
3. Covers LP, MIP, NLP, QCP, CNS and other problem classes.
4. A large library of separate solvers (CPLEX, CONOPT, MINOS, etc.).
5. Model–data independence: the same model can be rerun with new data.
6. Model–solver independence: the same equations can be solved by an appropriate algorithm.
7. Automatic generation of a model instance from data.
8. Model libraries and reusable model files.
9. Syntax, formulation and execution error detection.
10. Output display and report generation, plus linking to spreadsheets and other tools.

**GAMS IDE / environment capabilities**
- Integrated editor and model execution.
- Built-in model library.
- Selection of problem type and solver combination.
- Error display and output-file investigation.
- Portable, relatively easy to use, with online help.

Do not turn the answer into a software advertisement. Emphasise **declarative specification, compactness, separation and solver generality**.`,
  }),
  q({
    id: 'mt2015-b2',
    ...EX.mid2015,
    part: 'Part B · Model-building languages',
    number: 'B.2',
    points: '20',
    wording:
      'Explain briefly the basic differences between a model building language (such as GAMS) and a general purpose procedural language (such as C++).',
    answer:
      'A modelling language declares the mathematical model and lets a separate solver solve it; a procedural language requires the modeler to code data structures and an algorithm step by step.',
    type: 'written',
    topic: 'Model-building languages',
    sectionId: 'gams',
    explanation:
      'The key contrast is declarative versus procedural. GAMS describes what the model is; C++ describes how to compute it. GAMS also brings solver independence and automatic index expansion.',
    solution: `| Dimension | Model-building language (GAMS) | Procedural language (C++) |
|---|---|---|
| Core style | Declarative: state equations, sets and data | Imperative/procedural: specify control flow and algorithm steps |
| Mathematical view | Native algebraic formulation | Must be encoded manually using loops, arrays and libraries |
| Index expansion | Automatic over sets | Programmer writes loops and data structures |
| Solver | Separate solver selected with a statement | Programmer integrates or writes the algorithm |
| Data/model relation | Model–data independence; data blocks can change | Data handling is part of the program logic |
| Compactness | One equation can represent thousands of constraints | Code length grows with indices and model size |
| Reuse | Same model file can be rerun across instances | Program must be adapted or generalised manually |
| Objective | Productivity and experimentation for modelers | General software construction |

**Bottom line:** GAMS is not “better programming”; it is a different abstraction. The modeler concentrates on the mathematical specification, while GAMS generates the instance and hands it to a solver.`,
  }),
  q({
    id: 'mt2015-c1',
    ...EX.mid2015,
    part: 'Part C · Types of DSS',
    number: 'C.1',
    points: '30',
    wording:
      'Draw a schematic diagram representing a conceptual model of a model-centered DSS.',
    answer: 'See the model-centered architecture and model-base explanation.',
    type: 'diagram',
    topic: 'Model-centered DSS architecture',
    sectionId: 'model-centered',
    visual: 'model-dss',
    explanation:
      'A model-centered DSS has a model base, a model-base management system, a modelling language, solver/execution capability, data access, a user interface and the decision maker.',
    solution: `**Reference diagram**

\`Decision maker → Interactive user interface → Model management system (MBMS) ↔ Model base ↔ Solver / modelling language → Output analysis → Decision maker\`

Around this spine, label:
- **Model base:** set of optimisation, simulation, forecasting and decision models.
- **MBMS:** creates, stores, retrieves, links, executes, updates and documents models.
- **Modelling language:** compactly expresses the model and separates it from data and solver (e.g. GAMS).
- **Data access:** parameters and database links required by the models.
- **Solver / algorithm:** LP, NLP, MIP, simulation engine.
- **User interface and explanation:** scenario definition, what-if, goal seeking, graphical output.
- **Decision maker:** supplies objectives, constraints, risk preference and judgment.

**What not to draw:** a model-centered DSS is not the same thing as one mathematical model. The DSS includes the management, data, interface and experimentation environment around the model base.`,
  }),

  // ---------------------------------------------------------------- MIDTERM 2016
  q({
    id: 'mt2016-a1',
    ...EX.mid2016,
    part: 'Part A · Concepts',
    number: 'A.1',
    points: '20',
    wording:
      'List three choices for classifying Decision Support Systems (DSS). Identify briefly three reasons governing the adoption of either a general purpose or special purpose DSS.',
    answer:
      'Classification choices: users, issue orientation, decision-making phase (also scope/type of analytical support). Adoption depends on problem scope, cost/finance, and institutional sustainability.',
    type: 'written',
    topic: 'DSS classification',
    sectionId: 'dss-core',
    visual: 'dss-tree',
    explanation:
      'The lecture lists three criteria: single/group/organisational users; issue-oriented versus tool-oriented; and the decision phase supported. General versus special purpose is a separate scope distinction, chosen according to context.',
    solution: `**Three classification choices**
1. **By user:** single-user DSS, group DSS, organisational DSS.
2. **By orientation:** issue-oriented DSS (a specific problem) versus tool-oriented DSS (a method such as AHP or simulation).
3. **By decision-making phase:** problem identification/formulation, alternative generation, or alternative evaluation and selection.

You can add the **scope** distinction: special purpose versus general purpose.

**Reasons governing adoption**
- **Problem scope and context:** a bounded, one-time problem suggests a special purpose DSS; recurring decisions across an institution suggest a general purpose DSS.
- **Finance and cost:** special purpose DSS is generally cheaper and faster; general purpose DSS is more expensive but more sustainable.
- **Institutional sustainability and reuse:** a general purpose DSS needs an institutional structure, standards and continuing support; a special purpose tool may not need that overhead.

Use the context as the deciding force, not a preference for “bigger” software.`,
  }),
  q({
    id: 'mt2016-b1',
    ...EX.mid2016,
    part: 'Part B · Model building languages & VDSS',
    number: 'B.1',
    points: '15',
    wording:
      'Describe briefly three elements of support provided by VDSS to enhance the model building process.',
    answer:
      'VDSS supports model construction through a graphical/integrated environment, visualisation of the solution process, end-user interface building, experimentation/what-if analysis and explanation of results.',
    type: 'written',
    topic: 'DSS generators / VDSS',
    sectionId: 'gams',
    explanation:
      'The supplied GAMS lecture classifies VDSS as a DSS generator / simulation-based modelling environment. Its support is at the environment and experimentation level rather than a declarative algebraic formulation. VDSS-specific details are only partly represented in the lecture transcription.',
    status: 'context-only',
    note: 'VDSS is named as an example in the lectures, but its detailed feature list is not transcribed. This answer follows the lecturer’s DSS-generator/effectiveness framework.',
    solution: `Choose any three elements and explain them:

1. **Graphical/integrated model-construction support** — a GUI helps the modeler build the model rather than write low-level code.
2. **Visualisation of the solution process** — intermediate and final results can be inspected graphically.
3. **End-user interface support** — the modeler can build a complete interface for a decision maker.
4. **Experimentation** — scenario, what-if, goal-seeking and sensitivity runs are supported.
5. **Explanation/interpretation and report generation** — results can be presented and interpreted for the decision maker.

For each, connect the feature to **better communication with the decision maker** and **more effective experimentation**.`,
  }),
  q({
    id: 'mt2016-b2',
    ...EX.mid2016,
    part: 'Part B · Model building languages & VDSS',
    number: 'B.2',
    points: '15',
    wording:
      'List the “Effectiveness” features pertaining to the VDSS as a DSS generator.',
    answer:
      'Effectiveness concerns communication and experimentation: friendly interface, what-if/goal-seeking/scenario simulation, explanation/interpretation, and graphical output.',
    type: 'written',
    topic: 'Modelling language criteria',
    sectionId: 'gams',
    explanation:
      'In the lecture’s framework, efficiency improves the model builder’s productivity; effectiveness improves the model’s experimental and communicative capability. The exam asks for the effectiveness side.',
    solution: `**Effectiveness features**
- Ease of communication with the decision maker through a friendly interface.
- Support for **what-if analysis**, **goal seeking** and **scenario simulation**.
- Output explanation and interpretation.
- Graphical display, animation and/or visualisation of model results.
- Support for analysing the impact of alternative assumptions and external changes.

**Contrast with efficiency**
Efficiency features include wide model-class coverage, compact formulations, reduced model-construction time, a complete set of solvers, and support for model-building phases.`,
  }),
  q({
    id: 'mt2016-c1',
    ...EX.mid2016,
    part: 'Part C · DSS information technology',
    number: 'C.1',
    points: '25',
    wording:
      'Draw a conceptual Model of a computer aided Decision Support System (DSS). Identify briefly the main contribution of a DSS to the computer aided management systems (such as ES, EIS, MIS, ...).',
    answer: 'See the integrated conceptual model; DSS contributes model-based, semi-structured, interactive analytical support.',
    type: 'diagram',
    topic: 'Integrated DSS architecture',
    sectionId: 'dss-core',
    visual: 'conceptual-model',
    explanation:
      'The integrated architecture combines data, models, knowledge, an interface and the decision maker. Its contribution to the management-support family is analytical, model-based support for semi-structured decisions.',
    solution: `${SOLUTIONS.conceptualModel}

**Contribution to computer-aided management systems**
- Adds **model-based analysis** and alternative evaluation to the reporting orientation of MIS.
- Supports **semi-structured decisions** where neither a fixed procedure nor pure judgment is sufficient.
- Integrates **internal and external data**, models and knowledge rather than treating them separately.
- Provides an **interactive, flexible interface** for ad hoc questions and decision-maker insight.
- Acts as an analytical layer that can feed executive systems (EIS/ESS) and complement expert systems, rather than replacing them.`,
  }),
  q({
    id: 'mt2016-c2',
    ...EX.mid2016,
    part: 'Part C · DSS information technology',
    number: 'C.2',
    points: '25',
    wording:
      'Draw a schematic diagram representing the process of developing a Data warehouse, data marts and the generation of Ad-hoc reports in a data-centered DSS.',
    answer: 'See the ETL → warehouse → marts → OLAP/reporting → decision-maker schematic.',
    type: 'diagram',
    topic: 'Data-centered DSS architecture',
    sectionId: 'data-centered',
    visual: 'data-pipeline',
    explanation:
      'The diagram must show source systems, ETL, the central warehouse, data marts, OLAP/ad-hoc reporting and the decision maker. Ad-hoc reports are generated through OLAP operations and user-selected views.',
    solution: `${SOLUTIONS.dataPipeline}

**Ad-hoc reporting path**
The decision maker selects dimensions, measures and filters → OLAP engine queries the mart/warehouse → the view is rolled up, drilled down, sliced, diced or pivoted → the report is displayed. Ad-hoc means the user defines the view; planned reports are predefined.`,
  }),

  // ---------------------------------------------------------------- MIDTERM 2018
  q({
    id: 'mt2018-a1',
    ...EX.mid2018,
    part: 'Part A · Concepts',
    number: 'A.1',
    points: '25',
    wording:
      'Compare briefly the management information system (MIS), decision support system (DSS) and the executive information system (EIS) as computer management support tools with respect to: a) Type of reports b) Type of database model c) Modeling and analytical capabilities d) Management level e) Sources of data f) Problem/decision type. (State titles only without explanation).',
    answer:
      'See the MIS–DSS–EIS comparison table: planned reports/relational/lower-middle/structured for MIS; ad-hoc analytical/model-based/middle-senior/semi-structured for DSS; visual executive reports/external-internal/strategic for EIS.',
    type: 'written',
    topic: 'MIS vs DSS vs EIS',
    sectionId: 'support-systems',
    explanation:
      'This is a high-frequency comparison. The examiner wants compact titles, not paragraphs. The distinction is not just software: it is reports, database, analytics, management level, data sources and decision type.',
    solution: `| Criterion | MIS | DSS | EIS |
|---|---|---|---|
| **Type of reports** | Planned / scheduled, standard reports | Ad-hoc, flexible, model-based analyses | Executive dashboards, exception reports, drill-down, visual briefings |
| **Database model** | Relational database, transaction processing | Analytical database / data warehouse, multi-dimensional and model base | Integrated internal/external data, executive presentation layer; may use a DSS/warehouse backend |
| **Analytical capability** | Few/simple application programs; reporting-oriented | Strong analytical and modelling features; what-if, optimisation, simulation | Simple but powerful; expert opinion, forecasting, scenario views, drill-down; front-end to DSS |
| **Management level** | Lower and middle | Middle and senior | Top / senior executives |
| **Sources of data** | Mainly internal operational data | Internal and external | Internal and external, with emphasis on strategic external information |
| **Problem / decision type** | Structured, repetitive, programmable | Semi-structured and some unstructured | Unstructured, strategic, long-term |

**Recurring trap:** DSS is not “MIS with prettier reports.” The defining difference is analytical/model-based support for semi-structured decisions.`,
  }),
  q({
    id: 'mt2018-a2',
    ...EX.mid2018,
    part: 'Part A · Concepts',
    number: 'A.2',
    points: '15',
    wording:
      'Define a DSS and make the distinction between general and special purpose DSS as computer support systems. Select one and only one of the following two: User Oriented or technically oriented DSS. Make the distinction between the special and the general purpose DSS via: 1. Defining each of them 2. Specify their types.',
    answer:
      'Choose either the user-oriented or technical definition, then define general/special purpose and their types.',
    type: 'written',
    topic: 'DSS definitions and classification',
    sectionId: 'dss-core',
    visual: 'dss-tree',
    explanation:
      'There are two accepted entry definitions. The user-oriented definition stresses support for complex decision processes; the technical definition stresses an interactive, flexible CBIS for semi-structured problems using data and models. The question asks you to choose one.',
    solution: `**A. User-oriented definition (choose this one or the technical one)**
A DSS is a computer-aided information technology that supports complex decision making, problem solving, policy testing, scenario simulation and strategic planning.

**B. Technical / working definition (alternative)**
A DSS is an interactive, flexible and adaptable computer-based information system specially developed to support semi-structured and unstructured problems, using data and models, an easy user interface, and the decision maker’s own insights.

**General purpose DSS**
- General analytical tools usable across applications and decision situations.
- Types/orientations: data-centered, model-centered, knowledge-centered, or integrated.
- Needs institutional structure; more expensive but more sustainable.

**Special purpose DSS**
- Built for a specific problem or method.
- Types: domain/problem-oriented (e.g. production-shipping) or tool/method-oriented (e.g. AHP).
- Narrower scope; usually less expensive; often less sustainable outside its context.

Use one definition only. Then show that **general vs special is a scope distinction**, while **data/model/knowledge** describes analytical orientation.`,
  }),
  q({
    id: 'mt2018-a3',
    ...EX.mid2018,
    part: 'Part A · Concepts',
    number: 'A.3',
    points: '15',
    wording:
      'Provide the linkages between the type of a computer aided DSS (data, model or knowledge centered system), its analytical tools and its support to Hindsights, Insights and Foresights analysis.',
    answer:
      'Data-centered DSS: DB/DW/OLAP/reporting → hindsight; statistics/data mining → insight. Model-centered DSS: simulation/optimisation/modelling → foresight. Knowledge-centered DSS: rules/ES/AI → foresight and explanation.',
    type: 'written',
    topic: 'Hindsight–insight–foresight',
    sectionId: 'foundations',
    explanation:
      'This linkage is a recurring exam grid. Keep the tools and the analytical lens aligned: reporting/OLAP answer “what happened”; statistics and mining answer “why/pattern”; models and expert rules answer “what will/should happen”.',
    solution: `| DSS type | Analytical tools | Hindsight | Insight | Foresight |
|---|---|---|---|---|
| **Data-centered** | Data warehouse, analytical database, OLAP, reporting; statistical analysis and data mining | **Primary:** queries, reporting, dashboards, historical aggregates | **Primary:** patterns, classification, clustering, association | Limited; may support forecasting indicators |
| **Model-centered** | Optimisation, simulation, decision models, forecasting, model base + MBMS + modelling language | Uses historical data as input | Analyses variable relationships and model behaviour | **Primary:** scenarios, what-if, goal seeking, projected outcomes |
| **Knowledge-centered** | Knowledge base, rule-based systems, expert systems, AI | Stores past cases/facts | Explains reasoning through rules and expertise | **Primary:** recommendations, explanation, forward-looking reasoning |

**Linkage sentence:** data-centered DSS is strongest in hindsight and insight; model- and knowledge-centered DSS extend support into foresight. In an integrated DSS, all three lenses combine.`,
  }),
  q({
    id: 'mt2018-a4',
    ...EX.mid2018,
    part: 'Part A · Concepts',
    number: 'A.4',
    points: '15',
    wording:
      'Define two main features of a “Declarative” computer Modeling Language. Provide Example to show how are these features implemented by GAMS.',
    answer:
      'Declarative: state the mathematical model (sets, equations, objective) rather than the solution algorithm; separate model from data and solver. GAMS demonstrates both.',
    type: 'written',
    topic: 'Declarative modelling languages',
    sectionId: 'gams',
    visual: 'gams-workflow',
    explanation:
      'A declarative language says what the model is, not how to solve it. GAMS implements this with algebraic equations over sets, separate data blocks, and a SOLVE statement that selects a problem class/solver.',
    solution: `**Feature 1 — Declarative mathematical specification**
The modeler writes the objective and constraints as algebra over indices. There are no loops implementing the simplex method.

\`\`\`gams
cost..      z =e= sum((i,j), c(i,j) * x(i,j)) ;
supply(i).. sum(j, x(i,j)) =l= a(i) ;
demand(j).. sum(i, x(i,j)) =g= b(j) ;
\`\`\`

**Feature 2 — Separation of model, data and solver**
Data are declared independently, and the solver is selected at solve time.

\`\`\`gams
Set i / cairo, alexand / ;
Parameter a(i) / cairo 350, alexand 600 / ;
Model transport / all / ;
Solve transport using lp minimizing z ;
\`\`\`

The same equations work if the data change; the same model can be solved by a different compatible solver. This is the basis of **model–data independence** and **model–solver independence**.`,
  }),

  // Midterm 2018 True/False
  tf({
    id: 'mt2018-b1',
    ...EX.mid2018,
    part: 'Part B · True/False',
    number: 'B.1',
    points: '1.5',
    wording: 'Tacit Knowledge can be easily classified, documented and stored.',
    answer: false,
    topic: 'Knowledge types',
    sectionId: 'foundations',
    explanation:
      'False. Tacit (implicit) knowledge is personal, experiential and difficult to formalise, document or store. Easy classification and storage describe explicit knowledge.',
  }),
  tf({
    id: 'mt2018-b2',
    ...EX.mid2018,
    part: 'Part B · True/False',
    number: 'B.2',
    points: '1.5',
    wording:
      'Analytical data can be properly handled using a transaction processing data base system.',
    answer: false,
    topic: 'OLTP vs OLAP',
    sectionId: 'data-centered',
    explanation:
      'False. Transaction-processing systems (OLTP) handle current operational data and repeated transactions. Analytical data require analytical databases, data warehouses and OLAP.',
  }),
  tf({
    id: 'mt2018-b3',
    ...EX.mid2018,
    part: 'Part B · True/False',
    number: 'B.3',
    points: '1.5',
    wording: 'Insight Analysis is considered part of the data-centered DSS.',
    answer: true,
    topic: 'Hindsight–insight–foresight',
    sectionId: 'foundations',
    explanation:
      'True. In the lecturer’s mapping, data-centered DSS supports hindsight through warehouse queries/reporting and insight through statistical analysis and data mining.',
  }),
  tf({
    id: 'mt2018-b4',
    ...EX.mid2018,
    part: 'Part B · True/False',
    number: 'B.4',
    points: '1.5',
    wording:
      'In a Strategic decision making process, external data are not strongly needed to support the policy maker.',
    answer: false,
    topic: 'Decision levels and data',
    sectionId: 'process',
    explanation:
      'False. Strategic decisions are long-term, unstructured and exposed to the external environment, so external data (markets, competitors, policy, technology, economic indicators) are strongly needed, alongside internal data.',
  }),
  tf({
    id: 'mt2018-b5',
    ...EX.mid2018,
    part: 'Part B · True/False',
    number: 'B.5',
    points: '1.5',
    wording:
      'Executive information system (EIS) is generally used to support middle management decisions.',
    answer: false,
    topic: 'EIS / ESS',
    sectionId: 'support-systems',
    explanation:
      'False. EIS supports top/senior executives and strategic, long-term decisions. Middle management is more typically supported by DSS and management control systems.',
  }),
  tf({
    id: 'mt2018-b6',
    ...EX.mid2018,
    part: 'Part B · True/False',
    number: 'B.6',
    points: '1.5',
    wording:
      'Multi-dimensional database model, Data warehousing and OLAP are generally used to support ad-hoc reports.',
    answer: true,
    topic: 'Data-centered DSS',
    sectionId: 'data-centered',
    explanation:
      'True. The multi-dimensional model, warehouse and OLAP operations allow decision makers to select dimensions and generate ad-hoc analytical reports.',
  }),
  tf({
    id: 'mt2018-b7',
    ...EX.mid2018,
    part: 'Part B · True/False',
    number: 'B.7',
    points: '1.5',
    wording:
      'The Interpretation capability of modeling language describes variables, structure and mathematical specification of a model.',
    answer: true,
    topic: 'Modelling language criteria',
    sectionId: 'gams',
    explanation:
      'True in the course’s effectiveness framework: explanation/interpretation support helps the modeler and decision maker understand the variables, model structure and mathematical specification. This is not the same as simply printing numerical output.',
  }),
  tf({
    id: 'mt2018-b8',
    ...EX.mid2018,
    part: 'Part B · True/False',
    number: 'B.8',
    points: '1.5',
    wording:
      'Declarative modeling languages concentrate only on the solution strategy of optimization models.',
    answer: false,
    topic: 'Declarative modelling languages',
    sectionId: 'gams',
    explanation:
      'False. Declarative languages concentrate on mathematical specification; solution strategy is delegated to separate solvers. Concentrating only on solution strategy is the opposite of the declarative idea.',
  }),
  tf({
    id: 'mt2018-b9',
    ...EX.mid2018,
    part: 'Part B · True/False',
    number: 'B.9',
    points: '1.5',
    wording:
      'DSS Generator as a modeling language support model experimentation and analysis of its results.',
    answer: true,
    topic: 'DSS generators',
    sectionId: 'gams',
    explanation:
      'True. A DSS generator provides an environment for model construction, experimentation (what-if, goal seeking, scenarios) and interpretation of results, with emphasis on communication with the decision maker.',
  }),
  tf({
    id: 'mt2018-b10',
    ...EX.mid2018,
    part: 'Part B · True/False',
    number: 'B.10',
    points: '1.5',
    wording:
      'IDE of GAMS is used to link a specific solver or solution algorithm to GAMS software.',
    answer: false,
    topic: 'GAMS environment',
    sectionId: 'gams',
    explanation:
      'False. The GAMS IDE is the editing and execution interface. Solver selection is expressed in the SOLVE statement (for example, using lp, mip or nlp); GAMS links the model to an appropriate installed solver. The IDE itself is not the solver linker.',
  }),
  tf({
    id: 'mt2018-b11',
    ...EX.mid2018,
    part: 'Part B · True/False',
    number: 'B.11',
    points: '1.5',
    wording:
      'Special purpose Decision Support Systems (DSS) concentrate on relatively small size problems and they are less expensive than general purpose DSS.',
    answer: true,
    topic: 'DSS classification',
    sectionId: 'dss-core',
    explanation:
      'True. Special purpose DSS addresses a bounded problem or tool and generally costs less than a general purpose DSS, which must support many applications and needs institutional infrastructure.',
  }),
  tf({
    id: 'mt2018-b12',
    ...EX.mid2018,
    part: 'Part B · True/False',
    number: 'B.12',
    points: '1.5',
    wording:
      'Special Purpose DSS can be viewed as a domain-driven or a tool-driven system.',
    answer: true,
    topic: 'DSS classification',
    sectionId: 'dss-core',
    explanation:
      'True. The lecture divides special purpose DSS into problem/domain-oriented DSS (production-shipping) and tool/method-oriented DSS (AHP, simulation-based tools).',
  }),
  tf({
    id: 'mt2018-b13',
    ...EX.mid2018,
    part: 'Part B · True/False',
    number: 'B.13',
    points: '1.5',
    wording:
      'Cairo University senior management DSS covers both the data-centered and the model-centered DSS analytical tools.',
    answer: true,
    topic: 'Integrated DSS cases',
    sectionId: 'dss-core',
    explanation:
      'True as the course’s recurring integrated-DSS case: the senior-management DSS combines data-centered analytical tools with model-centered analytical tools, which is why it is treated as an integrated general purpose DSS.',
    status: 'context-only',
    note: 'The Cairo University case is referenced in exams but is not described in the supplied lecture transcriptions.',
  }),
  tf({
    id: 'mt2018-b14',
    ...EX.mid2018,
    part: 'Part B · True/False',
    number: 'B.14',
    points: '1.5',
    wording:
      'Cairo University Senior Management DSS can be viewed as an integrated general purpose Decision Support System.',
    answer: true,
    topic: 'Integrated DSS cases',
    sectionId: 'dss-core',
    explanation:
      'True in the course’s case framing: it serves multiple university management decisions and integrates data-centered and model-centered support.',
    status: 'context-only',
    note: 'The case details are not in the supplied lecture transcriptions; the answer follows the course’s recurring exam framing.',
  }),
  tf({
    id: 'mt2018-b15',
    ...EX.mid2018,
    part: 'Part B · True/False',
    number: 'B.15',
    points: '1.5',
    wording:
      'In a Data Centered DSS, OLAP tool provides insights whereas Data mining provides hindsights to the problem under consideration.',
    answer: false,
    topic: 'Hindsight–insight–foresight',
    sectionId: 'data-centered',
    explanation:
      'False; the mapping is reversed. OLAP and reporting support hindsight (what happened), while data mining and statistical analysis support insight (patterns, relationships, why).',
  }),
  tf({
    id: 'mt2018-b16',
    ...EX.mid2018,
    part: 'Part B · True/False',
    number: 'B.16',
    points: '1.5',
    wording:
      'In a decision support cycle, models are essentially needed to validate and approve a selected decision.',
    answer: false,
    topic: 'Decision-making cycle',
    sectionId: 'process',
    explanation:
      'False. Models are mainly used to analyse alternatives, scenarios, costs and risks. Validation/approval is a managerial and organisational step after a choice; it may use model evidence but models are not “essentially needed” for approval itself.',
  }),
  tf({
    id: 'mt2018-b17',
    ...EX.mid2018,
    part: 'Part B · True/False',
    number: 'B.17',
    points: '1.5',
    wording:
      'Group decision support systems (GDSS) generally need additional software systems to manage communication and ideas generated by the members of the group.',
    answer: true,
    topic: 'Group support systems',
    sectionId: 'support-systems',
    explanation:
      'True. GDSS extends DSS with groupware/collaborative capabilities: communication, idea generation/ranking, electronic voting, shared workspaces and meeting coordination.',
  }),
  tf({
    id: 'mt2018-b18',
    ...EX.mid2018,
    part: 'Part B · True/False',
    number: 'B.18',
    points: '1.5',
    wording:
      'Decision Support systems (DSS) is used to support reporting and database related capabilities along with few or simple analytical tools.',
    answer: false,
    topic: 'MIS vs DSS',
    sectionId: 'support-systems',
    explanation:
      'False. That description fits MIS. DSS is distinguished by strong analytical and modelling capabilities, not merely reporting and database access.',
  }),
  tf({
    id: 'mt2018-b19',
    ...EX.mid2018,
    part: 'Part B · True/False',
    number: 'B.19',
    points: '1.5',
    wording:
      'Structured modeling language can be used to graphically implement and solve a mathematical programming model.',
    answer: false,
    topic: 'Structured modelling',
    sectionId: 'modeling-hierarchy',
    explanation:
      'False as worded. Structured modelling can graphically represent the modelling domain (entities, attributes, relationships, constraints); solving is done by a mathematical programming language/solver such as GAMS. A structured diagram is not itself the solver.',
  }),
  tf({
    id: 'mt2018-b20',
    ...EX.mid2018,
    part: 'Part B · True/False',
    number: 'B.20',
    points: '1.5',
    wording:
      'Simulation and optimization Models are mainly used to assess alternative options and investigate the impact of external conditions within a DSS environment.',
    answer: true,
    topic: 'Models in DSS',
    sectionId: 'simulation',
    explanation:
      'True. Model-centered DSS uses simulation and optimisation to evaluate alternatives/environments, test policies, estimate cost/risk and support foresight.',
  }),
]
