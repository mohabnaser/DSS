import type { Question } from '../../types'
import { EX, SOLUTIONS, mcq, q, tf } from './helpers'

export const FINALS_A: Question[] = [
  // ---------------------------------------------------------------- FINAL 2016
  tf({
    id: 'f2016-a1',
    ...EX.final2016,
    part: 'A · General concepts',
    number: 'A.1',
    wording: 'Excel Software is viewed as a specialized modeling language based on the spreadsheet approach.',
    answer: true,
    topic: 'Modelling languages',
    sectionId: 'gams',
    explanation:
      'True in the course’s broad taxonomy. Excel provides a spreadsheet-based modelling environment: data and formulas are visible in cells, and what-if/scenario experiments can be run. It is not a declarative algebraic language like GAMS, but it is treated as a specialized spreadsheet modelling tool.',
  }),
  tf({
    id: 'f2016-a2',
    ...EX.final2016,
    part: 'A · General concepts',
    number: 'A.2',
    wording:
      'The explanation capability of a modeling language describes the modeling structure and mathematical specification.',
    answer: true,
    topic: 'Modelling language criteria',
    sectionId: 'gams',
    explanation:
      'True. Explanation/interpretation is an effectiveness feature: it helps communicate the model’s structure, variables and mathematical specification, rather than only presenting numbers.',
  }),
  tf({
    id: 'f2016-a3',
    ...EX.final2016,
    part: 'A · General concepts',
    number: 'A.3',
    wording:
      'The comprehensive set of solvers linked to GAMS enhance its effectiveness as a modeling language.',
    answer: false,
    topic: 'Modelling language criteria',
    sectionId: 'gams',
    explanation:
      'False. A comprehensive solver set primarily enhances **efficiency** — model-class coverage and model-builder productivity. Effectiveness concerns experimentation, communication, explanation and visualisation.',
  }),
  tf({
    id: 'f2016-a4',
    ...EX.final2016,
    part: 'A · General concepts',
    number: 'A.4',
    wording:
      'GAMS ensures the compact representation of mathematical models via the use of “variables and equations” reserved words.',
    answer: false,
    topic: 'GAMS capabilities',
    sectionId: 'gams',
    explanation:
      'False as worded. GAMS achieves compactness through indexed sets, parameters, algebraic equations and automatic expansion over sets. The reserved words “variables” and “equations” declare model objects; they are not themselves the mechanism of compact representation.',
  }),
  tf({
    id: 'f2016-a5',
    ...EX.final2016,
    part: 'A · General concepts',
    number: 'A.5',
    wording:
      'Declarative modeling languages concentrate only on mathematical specification of the model and the selection of its solvers.',
    answer: false,
    topic: 'Declarative modelling languages',
    sectionId: 'gams',
    explanation:
      'False. They concentrate on mathematical specification. Solver selection is a separate statement/environment concern, and they deliberately do not encode the solution algorithm.',
  }),
  tf({
    id: 'f2016-a6',
    ...EX.final2016,
    part: 'A · General concepts',
    number: 'A.6',
    wording:
      'In principle, a general purpose DSS provides general software capabilities that can fit several applications.',
    answer: true,
    topic: 'DSS classification',
    sectionId: 'dss-core',
    explanation:
      'True. General purpose DSS offers reusable data/modelling/knowledge tools for multiple applications and decision contexts; this is why it needs institutional support.',
  }),
  tf({
    id: 'f2016-a7',
    ...EX.final2016,
    part: 'A · General concepts',
    number: 'A.7',
    wording:
      'Special purpose Decision Support Systems concentrate generally on relatively small size problems and they are found to be less expensive.',
    answer: true,
    topic: 'DSS classification',
    sectionId: 'dss-core',
    explanation:
      'True. Special purpose DSS is narrower in scope, generally less expensive, and often built for a small or one-off decision context.',
  }),
  tf({
    id: 'f2016-a8',
    ...EX.final2016,
    part: 'A · General concepts',
    number: 'A.8',
    wording:
      'Cairo University senior management DSS can be viewed as a data-centered Decision support system.',
    answer: false,
    topic: 'Integrated DSS cases',
    sectionId: 'dss-core',
    explanation:
      'False. In the course case, it is an integrated general purpose DSS covering both data-centered and model-centered analytical tools, not a purely data-centered system.',
    status: 'context-only',
    note: 'The case is named in exams but is not described in the supplied lecture transcriptions.',
  }),
  tf({
    id: 'f2016-a9',
    ...EX.final2016,
    part: 'A · General concepts',
    number: 'A.9',
    wording:
      'Multi-dimensional Database model is strictly needed for developing the data warehouse of a DSS.',
    answer: false,
    topic: 'Data-centered DSS',
    sectionId: 'data-centered',
    explanation:
      'False. A data warehouse can be implemented with relational/star-schema structures. Multi-dimensional models commonly support OLAP, but they are not a strict prerequisite for building the warehouse.',
  }),
  tf({
    id: 'f2016-a10',
    ...EX.final2016,
    part: 'A · General concepts',
    number: 'A.10',
    wording:
      'In a Data Centered DSS, OLAP tool provides insights whereas Data mining provides hindsights to the problem or decision under consideration.',
    answer: false,
    topic: 'Hindsight–insight–foresight',
    sectionId: 'foundations',
    explanation:
      'False; reversed. OLAP/reporting provides hindsight; data mining/statistical analysis provides insight.',
  }),
  tf({
    id: 'f2016-a11',
    ...EX.final2016,
    part: 'A · General concepts',
    number: 'A.11',
    wording:
      'Multi-dimensional DB along with OLAP operations are the tools for generating Ad-hoc reports based on the selection of decision makers.',
    answer: true,
    topic: 'OLAP',
    sectionId: 'data-centered',
    explanation:
      'True. The decision maker selects dimensions, measures and filters; OLAP operations generate the requested ad-hoc view/report.',
  }),
  tf({
    id: 'f2016-a12',
    ...EX.final2016,
    part: 'A · General concepts',
    number: 'A.12',
    wording:
      'In an Executive/Enterprise Information system (EIS), external data are not strongly needed to support the strategic decision making process.',
    answer: false,
    topic: 'EIS / ESS',
    sectionId: 'support-systems',
    explanation:
      'False. Strategic executive decisions need strong external information about markets, competitors, regulation, technology and the environment, combined with internal information.',
  }),
  tf({
    id: 'f2016-a13',
    ...EX.final2016,
    part: 'A · General concepts',
    number: 'A.13',
    wording:
      'In a decision support cycle, models are essentially used to assess alternative scenarios and options as well as to estimate the cost and risk associated with a specific decision.',
    answer: true,
    topic: 'Decision-making cycle',
    sectionId: 'process',
    explanation:
      'True. Models support alternative evaluation, scenario analysis and cost/risk estimation, which is their core contribution in the decision cycle.',
  }),
  tf({
    id: 'f2016-a14',
    ...EX.final2016,
    part: 'A · General concepts',
    number: 'A.14',
    wording:
      'Decision Support Systems (DSS) is used to support reporting and database related capabilities along with few or simple analytical capabilities.',
    answer: false,
    topic: 'MIS vs DSS',
    sectionId: 'support-systems',
    explanation:
      'False. This describes MIS. DSS has strong analytical/modelling features and supports semi-structured decisions.',
  }),
  tf({
    id: 'f2016-a15',
    ...EX.final2016,
    part: 'A · General concepts',
    number: 'A.15',
    wording:
      'In a model centered DSS, data warehousing and OLAP operations may be useful but they do not represent a main prerequisite.',
    answer: true,
    topic: 'Model-centered DSS',
    sectionId: 'model-centered',
    explanation:
      'True. A model-centered DSS is defined by models, the model base and MBMS/modelling language. It may draw on warehouse/OLAP data, but these are not its defining prerequisite.',
  }),
  q({
    id: 'f2016-b1',
    ...EX.final2016,
    part: 'B · Model building language',
    number: 'B.1',
    points: '10',
    wording:
      'Re-write the following linear transport GAMS model to ensure the data/model separation on the one hand, and the Modularity of the GAMS computer program on the other hand. [The full original code is reproduced in the question paper.]',
    answer: 'See the modular, data-independent GAMS rewrite.',
    type: 'gams',
    topic: 'GAMS code',
    sectionId: 'production-shipping',
    visual: 'gams-workflow',
    explanation:
      'The supplied code is already close to a data-independent form, but the rewrite should make the separation explicit and organise the program into clearly labelled blocks. The key is not to put numerical data inside equations.',
    solution: `${SOLUTIONS.gamsRewrite}

**Changes to highlight in an exam**
- Keep every data value in Sets/Parameters/Table/Scalar.
- Keep equations purely symbolic.
- Group declarations, data, model algebra, solve and display.
- Use comments and meaningful names.
- Use \`display\` for verification/reporting.
- Avoid hard-coding numbers into the objective or constraints.`,
  }),
  q({
    id: 'f2016-c1',
    ...EX.final2016,
    part: 'C · Conceptual model of a DSS',
    number: 'C.1',
    points: '6',
    wording:
      'Draw a schematic representation of an integrated conceptual model of a decision support system (DSS).',
    answer: 'See the integrated conceptual architecture.',
    type: 'diagram',
    topic: 'Integrated DSS architecture',
    sectionId: 'dss-core',
    visual: 'conceptual-model',
    explanation:
      'The model should contain data-centered and model-centered components, knowledge management, an interactive interface and the decision maker.',
    solution: SOLUTIONS.conceptualModel,
  }),
  q({
    id: 'f2016-c2',
    ...EX.final2016,
    part: 'C · Conceptual model of a DSS',
    number: 'C.2',
    points: '4',
    wording:
      'Based on this conceptual model, identify appropriate information technology corresponding to the data-centered, model-centered, and knowledge-centered DSS (Provide titles only without explanation).',
    answer:
      'Data: DW/OLAP/MDDB/data mining; model: model base/MBMS/modelling language/solvers; knowledge: knowledge base/rule-based ES/AI.',
    type: 'written',
    topic: 'Integrated DSS architecture',
    sectionId: 'dss-core',
    explanation:
      'This is a titles-only question. Match the technology to each wing of the architecture.',
    solution: `- **Data-centered:** analytical database / data warehouse, multi-dimensional database, OLAP, data mining, statistical software, reporting tools.
- **Model-centered:** model base, MBMS, modelling language, optimisation/simulation/forecasting models, solver(s).
- **Knowledge-centered:** knowledge base, rule-based system, expert system, inference engine, explanation facility, AI tools.`,
  }),
  q({
    id: 'f2016-d1',
    ...EX.final2016,
    part: 'D · Data-centered DSS',
    number: 'D.1',
    points: '5',
    wording:
      'Draw a schematic diagram to represent the inter-relationship or dependence between: Operational database; Data extraction system; Data warehousing; Data marts; On-line analytical process (OLAP); Data Mining.',
    answer: 'See the operational → ETL → warehouse → marts → OLAP/mining schematic.',
    type: 'diagram',
    topic: 'Data-centered DSS architecture',
    sectionId: 'data-centered',
    visual: 'data-pipeline',
    explanation:
      'The dependency runs from operational sources through extraction into the warehouse, then to marts and analytical tools. OLAP and data mining both consume analytical data but answer different questions.',
    solution: SOLUTIONS.dataPipeline,
  }),
  q({
    id: 'f2016-d2',
    ...EX.final2016,
    part: 'D · Data-centered DSS',
    number: 'D.2',
    points: '5',
    wording:
      'Draw a block diagram explaining the structure of a computer-aided data-centered DSS for an industrial company. Provide an example of the external and internal data domains to be collected for such DSS.',
    answer:
      'Diagram: operational systems → ETL → DW → marts → OLAP/reporting/mining → managers. Internal data: production, inventory, sales, finance, HR. External: market demand, prices, suppliers, competitors, regulation, technology, logistics.',
    type: 'diagram',
    topic: 'Data-centered DSS architecture',
    sectionId: 'data-centered',
    explanation:
      'An industrial data-centered DSS needs both internal operational data and external market/environment data. The block diagram should show the analytical pipeline and the managerial consumers.',
    solution: `${SOLUTIONS.dataPipeline}

**Industrial-company example**
- **Internal domains:** production quantities and capacity, machine downtime, inventory levels, shipments, sales orders, customer billing, procurement, costs, finance, human resources.
- **External domains:** market demand, competitor prices, supplier prices and lead times, fuel/freight rates, exchange rates, regulation, technology changes, economic indicators.

**Suggested block labels**
Production/ERP and sales systems → ETL → corporate data warehouse → production, sales, finance and logistics marts → OLAP/reporting/data mining → plant managers, sales managers, finance, senior management.`,
  }),
  q({
    id: 'f2016-d3',
    ...EX.final2016,
    part: 'D · Data-centered DSS',
    number: 'D.3',
    points: '5',
    wording:
      'To develop the logical design of a Senior management university DSS, suggest three examples of dimensions, measures (or facts), consolidation paths, and data marts corresponding to its data-centered component.',
    answer:
      'Dimensions: time, faculty/program, student cohort, campus. Measures: enrollment, graduates, cost, research income, satisfaction. Consolidation: year→term→month; university→faculty→department→program. Marts: student, finance, research, HR.',
    type: 'written',
    topic: 'University data-centered DSS',
    sectionId: 'data-centered',
    explanation:
      'A logical design is a star/snowflake-style plan: dimensions, facts/measures, hierarchies (consolidation paths), and subject-specific marts. Use examples relevant to university senior management.',
    solution: `**Dimensions (examples)**
1. Time: academic year → semester/term → month.
2. Organisation: university → faculty → department → programme.
3. Student: level/year → cohort → programme → campus.
4. Resource/activity: research project, staff category, campus/facility.

**Measures / facts**
- Student enrollment and intake
- Graduation and completion rates
- Student–staff ratio
- Cost per student and total expenditure
- Research grants and publications
- Student satisfaction
- Space utilisation

**Consolidation paths**
- Time: year → term → month.
- Organisation: university → faculty → department.
- Student: university → programme → cohort/level.

**Data marts**
1. Student performance and enrollment mart.
2. Finance and resource-allocation mart.
3. Research and graduate-studies mart.
4. Human-resources/staffing mart.

**Design logic:** each mart reuses conformed dimensions (especially time and organisation) so senior management can compare across the university.`,
  }),
  q({
    id: 'f2016-e1',
    ...EX.final2016,
    part: 'E · Model-centered DSS',
    number: 'E.1',
    points: '4',
    wording:
      'Explain briefly the main functions of a model-base management System (MBMS) in a model-centered DSS.',
    answer: 'MBMS creates, stores, retrieves, links, executes, updates, documents and analyses models.',
    type: 'written',
    topic: 'MBMS',
    sectionId: 'model-centered',
    explanation:
      'The MBMS is the management layer around the model base, analogous to a DBMS around a database. It handles the model lifecycle and experimentation, not just storage.',
    solution: SOLUTIONS.mbms,
  }),
  q({
    id: 'f2016-e2',
    ...EX.final2016,
    part: 'E · Model-centered DSS',
    number: 'E.2',
    points: '6',
    wording:
      'Draw a block diagram identifying the main components of a model centered DSS of an industrial corporation. Suggest three criteria for classifying and integrating its set of models in the model base.',
    answer: 'See the model-centered architecture and model classification criteria.',
    type: 'diagram',
    topic: 'Model-centered DSS architecture',
    sectionId: 'model-centered',
    visual: 'model-dss',
    explanation:
      'Show the model base, MBMS, modelling language, solver, data access, interface and decision maker. Then classify models by functional area, mathematical type and decision horizon, among other criteria.',
    solution: SOLUTIONS.modelDssBlock,
  }),

  // ---------------------------------------------------------------- FINAL 2017
  tf({
    id: 'f2017-a1',
    ...EX.final2017,
    part: 'A · True/False',
    number: 'A.1',
    wording:
      'Cairo University Senior Management DSS can be used to compare its performance with other public universities in Egypt.',
    answer: true,
    topic: 'Integrated DSS cases',
    sectionId: 'dss-core',
    explanation:
      'True in the course’s case framing. An integrated senior-management DSS can compare internal performance indicators with external benchmark data from other public universities.',
    status: 'context-only',
    note: 'The case is named in exams but is not described in the supplied lecture transcriptions.',
  }),
  q({
    id: 'f2017-a2',
    ...EX.final2017,
    part: 'A · True/False',
    number: 'A.2',
    wording:
      'Fisheries sector DSS in Kuwait relies mainly on an integer mathematical programming model.',
    answer: 'Unresolved — source case not in the supplied lectures.',
    type: 'tf',
    topic: 'External DSS cases',
    sectionId: 'dss-core',
    explanation:
      'The supplied lecture transcriptions do not describe a Kuwait fisheries DSS, so the claim cannot be verified from the course materials. It is retained as a review item rather than silently answered. If your lecturer’s case notes say it uses an integer programming model, mark it according to those notes.',
    status: 'context-only',
    note: 'Not auto-graded. The specific case and model type are absent from the supplied lecture files.',
  }),
  tf({
    id: 'f2017-a3',
    ...EX.final2017,
    part: 'A · True/False',
    number: 'A.3',
    wording:
      'The explanation capability of VDSS language describes the structure and mathematical specification of a model.',
    answer: true,
    topic: 'DSS generators / VDSS',
    sectionId: 'gams',
    explanation:
      'True in the effectiveness framework: a DSS generator/VDSS is expected to provide explanation and interpretation of model structure, specification and results. The lectures name VDSS as a DSS-generator example, though detailed VDSS screens are not supplied.',
    status: 'context-only',
    note: 'VDSS is named in the lectures, but its detailed language features are not transcribed.',
  }),
  q({
    id: 'f2017-a4',
    ...EX.final2017,
    part: 'A · True/False',
    number: 'A.4',
    wording:
      'Information and Decision Support Center (IDSC) is viewed as a leading general purpose DSS in the Arab region that concentrates on socioeconomic issues.',
    answer: 'Unresolved — specific institutional case not in the supplied lectures.',
    type: 'tf',
    topic: 'External DSS cases',
    sectionId: 'dss-core',
    explanation:
      'The supplied lecture files do not contain the IDSC case, so its “leading” status and classification cannot be independently verified here. Conceptually, a center supporting many socioeconomic decision areas would fit the general-purpose DSS pattern, but the factual claim needs the lecturer’s case material.',
    status: 'context-only',
    note: 'Not auto-graded. Retained for review rather than fabricated as fact.',
  }),
  tf({
    id: 'f2017-a5',
    ...EX.final2017,
    part: 'A · True/False',
    number: 'A.5',
    wording:
      'Declarative modeling languages concentrate on the mathematical specification of the model as well as its solution strategy.',
    answer: false,
    topic: 'Declarative modelling languages',
    sectionId: 'gams',
    explanation:
      'False. Declarative languages specify the model; the solution strategy belongs to a separate solver. They achieve model–solver independence precisely by not concentrating on the algorithm.',
  }),
  tf({
    id: 'f2017-a6',
    ...EX.final2017,
    part: 'A · True/False',
    number: 'A.6',
    wording:
      'Development Planning support system (DPSS) is viewed as a special purpose DSS because it concentrates only on development planning issues.',
    answer: true,
    topic: 'DSS classification',
    sectionId: 'dss-core',
    explanation:
      'True. Concentration on a specific domain (development planning) makes DPSS a domain/problem-oriented special purpose DSS, not a general purpose DSS.',
    status: 'context-only',
    note: 'DPSS is an external course case, but the classification follows directly from the special-purpose definition.',
  }),
  tf({
    id: 'f2017-a7',
    ...EX.final2017,
    part: 'A · True/False',
    number: 'A.7',
    wording:
      'Special purpose Decision Support Systems concentrate generally on relatively small size problems and they are found to be less expensive.',
    answer: true,
    topic: 'DSS classification',
    sectionId: 'dss-core',
    explanation:
      'True. Special purpose DSS is narrower and generally less expensive than a general purpose institutional DSS.',
  }),
  tf({
    id: 'f2017-a8',
    ...EX.final2017,
    part: 'A · True/False',
    number: 'A.8',
    wording: 'Cairo University senior management DSS can be viewed mainly as data-centered DSS.',
    answer: false,
    topic: 'Integrated DSS cases',
    sectionId: 'dss-core',
    explanation:
      'False. It is framed as an integrated general purpose DSS combining data-centered and model-centered tools, not mainly data-centered.',
    status: 'context-only',
    note: 'Case not described in the supplied lecture transcriptions.',
  }),
  tf({
    id: 'f2017-a9',
    ...EX.final2017,
    part: 'A · True/False',
    number: 'A.9',
    wording:
      'Multi-dimensional Database model is strictly needed to interact with the on line analytical process (OLAP).',
    answer: false,
    topic: 'OLAP',
    sectionId: 'data-centered',
    explanation:
      'False with “strictly.” OLAP can operate over multi-dimensional cubes or relational star schemas (ROLAP/MOLAP). A multi-dimensional model is a common and natural implementation, not an absolute prerequisite.',
  }),
  tf({
    id: 'f2017-a10',
    ...EX.final2017,
    part: 'A · True/False',
    number: 'A.10',
    wording:
      'In a Data Centered DSS, OLAP tool provides insights whereas Data mining provides hindsights to the problem under consideration.',
    answer: false,
    topic: 'Hindsight–insight–foresight',
    sectionId: 'foundations',
    explanation:
      'False; reversed. OLAP/reporting gives hindsight; data mining/statistics gives insight.',
  }),
  tf({
    id: 'f2017-a11',
    ...EX.final2017,
    part: 'A · True/False',
    number: 'A.11',
    wording:
      'Multi-dimentional DB along with OLAP operations are the tools for generating Ad-hoc rerports reflecting the decision makers view.',
    answer: true,
    topic: 'OLAP',
    sectionId: 'data-centered',
    explanation:
      'True. OLAP operations over multi-dimensional data allow the decision maker to choose dimensions, filters and aggregation levels, creating an ad-hoc view. Original spelling is preserved.',
  }),
  tf({
    id: 'f2017-a12',
    ...EX.final2017,
    part: 'A · True/False',
    number: 'A.12',
    wording:
      'In an Executive Information system (EIS), external data are not strongly needed to support the decision making process.',
    answer: false,
    topic: 'EIS / ESS',
    sectionId: 'support-systems',
    explanation:
      'False. EIS supports strategic decisions and needs external environmental data as well as internal data.',
  }),
  tf({
    id: 'f2017-a13',
    ...EX.final2017,
    part: 'A · True/False',
    number: 'A.13',
    wording: 'In a decision support cycle, models are essentially needed to validate a specific decision.',
    answer: false,
    topic: 'Decision-making cycle',
    sectionId: 'process',
    explanation:
      'False. Models mainly assess alternatives, scenarios, costs and risks. Validation/approval is not the defining role of models in the cycle.',
  }),
  tf({
    id: 'f2017-a14',
    ...EX.final2017,
    part: 'A · True/False',
    number: 'A.14',
    wording:
      'Decision Support systems (DSS) are used to support reporting and database related capabilities along with few or simple analytical capabilities.',
    answer: false,
    topic: 'MIS vs DSS',
    sectionId: 'support-systems',
    explanation:
      'False. That is MIS. DSS is defined by strong analytical/model-based support for semi-structured decisions.',
  }),
  tf({
    id: 'f2017-a15',
    ...EX.final2017,
    part: 'A · True/False',
    number: 'A.15',
    wording:
      'In a model centered DSS, data warehousing and OLAP operations are needed but they do not represent its main concentration.',
    answer: true,
    topic: 'Model-centered DSS',
    sectionId: 'model-centered',
    explanation:
      'True. Warehousing/OLAP may feed the models, but the defining concentration is the model base, MBMS, modelling language and model experimentation.',
  }),
  q({
    id: 'f2017-b1',
    ...EX.final2017,
    part: 'B · Model building language',
    number: 'B.1',
    points: '4',
    wording:
      'Do you consider VDSS as a modeling language or as a DSS generator? Justify your answer by specific examples.',
    answer:
      'VDSS is best classified as a DSS generator / integrated modelling environment, not a declarative algebraic modelling language.',
    type: 'written',
    topic: 'DSS generators / VDSS',
    sectionId: 'gams',
    explanation:
      'The course classifies VDSS as a DSS generator in the non-algebraic/integrated-environment branch. It supports model construction, experiment and communication; it does not present a compact algebraic model to separate solvers in the GAMS sense.',
    status: 'context-only',
    note: 'VDSS is identified in the lecture taxonomy, but its detailed environment is not reproduced in the transcription.',
    solution: `VDSS is a **DSS generator / integrated modelling environment**, not a declarative algebraic modelling language.

**Justification**
- It provides a GUI and fixed-time-advance simulation environment.
- It supports model construction, experimentation, what-if and goal seeking for decision makers.
- It emphasises output analysis, explanation and communication with the decision maker.
- It does not primarily expose a compact algebraic model that is passed to separate LP/NLP/MIP solvers in the GAMS sense.

**Examples of the distinction**
- GAMS: sets + algebraic equations + \`solve ... using lp\`; solver is independent.
- VDSS: an integrated simulation/decision environment where the modeler builds and experiments through the generator interface.

The safest exam wording is: **“a DSS generator / computer modelling environment with simulation and experimentation capabilities.”**`,
  }),
  q({
    id: 'f2017-b2',
    ...EX.final2017,
    part: 'B · Model building language',
    number: 'B.2',
    points: '4',
    wording:
      'Why VDSS is not considered a declarative language? List three reasons for justifying Data-Model independency.',
    answer:
      'VDSS is not declarative because it is an integrated simulation/generator environment, not a model specification passed to separate solvers. Data–model independence supports reuse, multiple runs and separation of updates.',
    type: 'written',
    topic: 'DSS generators / VDSS',
    sectionId: 'gams',
    status: 'context-only',
    note: 'VDSS-specific details are not in the supplied transcription; the reasoning follows the lecture classification.',
    explanation:
      'Declarative languages state the mathematical model and leave solution strategy to a solver. VDSS is treated as an integrated environment with simulation/experimentation and communication features, so it is not the same abstraction.',
    solution: `**Why VDSS is not declarative**
1. It is an integrated simulation/DSS-generator environment rather than a compact algebraic model specification.
2. The model is built and experimented with through the environment/interface, not expressed purely as declarative equations for separate solvers.
3. Its emphasis is on scenario simulation, output analysis and decision-maker communication, not declarative solver independence.

**Three reasons for data–model independence**
1. **Reuse:** the same model can be applied to many problem instances without rewriting the algebra.
2. **Multiple runs:** new data can be loaded for scenarios, sensitivity analysis and what-if experiments.
3. **Maintenance and clarity:** data updates (prices, demands, capacities) are separated from model updates (new constraints or objective), reducing errors and supporting modular program design.`,
  }),
  q({
    id: 'f2017-b3',
    ...EX.final2017,
    part: 'B · Model building language',
    number: 'B.3',
    points: '2',
    wording:
      'How can VDSS deal with the spread sheet approach to model building? Is VDSS language equipped with report generation facility?',
    answer:
      'A DSS generator can expose model data/relationships in a spreadsheet-like interface; report generation is part of its communication/reporting capability.',
    type: 'written',
    topic: 'DSS generators / VDSS',
    sectionId: 'gams',
    status: 'context-only',
    note: 'VDSS feature details are not in the supplied lecture transcription. Answer uses the DSS-generator framework and spreadsheet model-building idea.',
    explanation:
      'The course’s broader modelling-language discussion includes spreadsheet-based modelling (for example Excel) and DSS generators with graphical/display facilities. Report generation is an effectiveness/communication feature.',
    solution: `**Spreadsheet approach**
A DSS generator such as VDSS can present parameters, variables and model relationships in a familiar tabular/spreadsheet-style environment. The decision maker or modeler can edit inputs, run scenarios and inspect outputs without writing low-level code.

**Report generation**
A DSS generator is expected to provide output display, explanation and reporting facilities for the decision maker. The exact VDSS report menu is not supplied, but the capability belongs to the generator’s communication/effectiveness layer.`,
  }),
  q({
    id: 'f2017-c1',
    ...EX.final2017,
    part: 'C · Conceptual model of a DSS',
    number: 'C.1',
    points: '2',
    wording:
      'What is the title of the additional software tool needed to move from a DSS to a GDSS? List the possible functions of this software.',
    answer: 'Groupware / collaborative computing software. Functions: communication, idea generation, ranking, voting, shared workspace and coordination.',
    type: 'written',
    topic: 'Group support systems',
    sectionId: 'support-systems',
    explanation:
      'The move from individual DSS to GDSS requires group-oriented communication and collaboration technology, often called groupware.',
    solution: `**Additional tool:** groupware / collaborative computing software (group support system software).

**Possible functions**
- Electronic communication and messaging among group members.
- Idea generation and brainstorming.
- Idea organisation, classification and ranking.
- Electronic voting and preference aggregation.
- Shared model/workspace access.
- Meeting scheduling, agenda management and coordination.
- Recording decisions and maintaining group memory.
- Anonymity where needed to reduce social pressure.`,
  }),
  q({
    id: 'f2017-c2',
    ...EX.final2017,
    part: 'C · Conceptual model of a DSS',
    number: 'C.2',
    points: '4',
    wording:
      'Draw a schematic representation of an integrated conceptual model of a decision support system (DSS).',
    answer: 'See the integrated conceptual architecture.',
    type: 'diagram',
    topic: 'Integrated DSS architecture',
    sectionId: 'dss-core',
    visual: 'conceptual-model',
    explanation: 'The diagram must integrate data, models, knowledge, interface and user.',
    solution: SOLUTIONS.conceptualModel,
  }),
  q({
    id: 'f2017-c3',
    ...EX.final2017,
    part: 'C · Conceptual model of a DSS',
    number: 'C.3',
    points: '4',
    wording:
      'Based on this conceptual model, identify appropriate information technology (IT) corresponding to the data-centered, model-centered and knowledge-centered DSS (Provide titles only without explanation).',
    answer: 'Data: DW/OLAP/MDDB/mining; model: model base/MBMS/modelling language; knowledge: knowledge base/ES/AI.',
    type: 'written',
    topic: 'Integrated DSS architecture',
    sectionId: 'dss-core',
    explanation: 'Titles only; map technology to each architectural wing.',
    solution: `- **Data-centered:** data warehouse, analytical database, multi-dimensional database, OLAP, data mining, reporting tools.
- **Model-centered:** model base, MBMS, modelling language, optimisation/simulation/forecasting models, solvers.
- **Knowledge-centered:** knowledge base, rule-based system, inference engine, expert system, explanation facility, AI tools.`,
  }),
  q({
    id: 'f2017-d1',
    ...EX.final2017,
    part: 'D · Data-centered DSS',
    number: 'D.1',
    points: '7',
    wording:
      'Draw a schematic diagram to represent the inter-relationship or dependence between: Operational database; Data extraction, Transformation and Loading system (ETL); Data warehousing; Data marts; On-line analytical process (OLAP); Data Mining in a data-centered DSS.',
    answer: 'See the data-centered DSS pipeline.',
    type: 'diagram',
    topic: 'Data-centered DSS architecture',
    sectionId: 'data-centered',
    visual: 'data-pipeline',
    explanation:
      'Show ETL explicitly between operational sources and warehouse, and show both OLAP and data mining consuming analytical data.',
    solution: SOLUTIONS.dataPipeline,
  }),
  q({
    id: 'f2017-d2',
    ...EX.final2017,
    part: 'D · Data-centered DSS',
    number: 'D.2',
    points: '8',
    wording:
      'Draw a block diagram explaining the structure of a computer-aided Integrated University Senior Management DSS. Suggest three examples for the dimensions, measures (or facts), consolidation path and data marts relevant to this DSS.',
    answer: 'See the university data-centered design answer and integrated architecture.',
    type: 'diagram',
    topic: 'University data-centered DSS',
    sectionId: 'data-centered',
    visual: 'data-pipeline',
    explanation:
      'Combine the data-centered pipeline with a university logical design. The DSS is integrated, so indicate model/analytical use as well as reporting.',
    solution: `**Block diagram**
University operational systems (student records, finance, HR, research, facilities) → ETL → university data warehouse → subject marts → OLAP/reporting/data mining → senior management and faculties. Add a model interface for planning, budgeting and performance comparison.

**Dimensions**
1. Time (academic year → term → month)
2. Organisation (university → faculty → department)
3. Student/programme (level → programme → cohort)
4. Campus/facility
5. Research/staff category

**Measures**
Enrollment, graduation rate, student–staff ratio, cost per student, research income, publications, satisfaction, space utilisation.

**Consolidation paths**
- Year → term → month
- University → faculty → department
- University → programme → cohort

**Data marts**
Student performance; finance; research; human resources/facilities.

The integrated label matters: data-centered reporting plus model-centered planning and comparison tools.`,
  }),
  q({
    id: 'f2017-e1',
    ...EX.final2017,
    part: 'E · Model-centered DSS',
    number: 'E.1',
    points: '4',
    wording:
      'List the main functions of a model-base management System (MBMS) in a model-centered DSS, grouped into: i) Model Development and Updating ii) Model Management.',
    answer: 'Development/updating: create, edit, validate, document. Management: store, retrieve, link, execute, update versions, analyse results.',
    type: 'written',
    topic: 'MBMS',
    sectionId: 'model-centered',
    explanation:
      'The exam explicitly asks for grouped functions. Keep each function under the correct heading.',
    solution: `**i) Model development and updating**
- Model formulation/specification and generation
- Model editing and modification
- Model validation and verification
- Model documentation and metadata
- Model updating with new structure or assumptions

**ii) Model management**
- Model storage, cataloguing and retrieval
- Model selection, linking and integration
- Model execution and solver invocation
- Model-base version control
- Scenario/what-if/sensitivity experiments
- Output analysis, explanation and reporting

A short summary: MBMS manages the model lifecycle and makes models reusable, not merely stored.`,
  }),
  q({
    id: 'f2017-e2',
    ...EX.final2017,
    part: 'E · Model-centered DSS',
    number: 'E.2',
    points: '6',
    wording:
      'Draw a block diagram identifying the main components of a model centered DSS of an industrial corporation. Suggest three criteria for classifying and integrating its set of models in the model base.',
    answer: 'See the model-centered block and classification criteria.',
    type: 'diagram',
    topic: 'Model-centered DSS architecture',
    sectionId: 'model-centered',
    visual: 'model-dss',
    explanation:
      'Include the model base, MBMS, modelling language, solver, data access, interface and decision maker; classify models by function, technique and horizon.',
    solution: SOLUTIONS.modelDssBlock,
  }),

  // ---------------------------------------------------------------- FINAL 2018
  tf({
    id: 'f2018-a1',
    ...EX.final2018,
    part: 'A1 · True/False',
    number: 'A1.1',
    wording:
      'Cairo University Senior Management DSS can be used to compare its performance with both private and public universities in Egypt.',
    answer: true,
    topic: 'Integrated DSS cases',
    sectionId: 'dss-core',
    explanation:
      'True in the course’s integrated university DSS framing: external benchmark data can include both public and private universities.',
    status: 'context-only',
    note: 'Case details are absent from the supplied lecture transcriptions; answer follows the recurring course case.',
  }),
  tf({
    id: 'f2018-a2',
    ...EX.final2018,
    part: 'A1 · True/False',
    number: 'A1.2',
    wording:
      'In a Strategic decision making process, external data are not strongly needed to support the policy maker.',
    answer: false,
    topic: 'Decision levels and data',
    sectionId: 'process',
    explanation:
      'False. Strategic decisions require strong external environmental information, combined with internal capability data.',
  }),
  tf({
    id: 'f2018-a3',
    ...EX.final2018,
    part: 'A1 · True/False',
    number: 'A1.3',
    wording:
      'The explanation capability of modeling language describes variables, structure and mathematical specification of a model.',
    answer: true,
    topic: 'Modelling language criteria',
    sectionId: 'gams',
    explanation:
      'True. Explanation/interpretation is an effectiveness feature that communicates the model’s variables, structure and mathematical specification.',
  }),
  tf({
    id: 'f2018-a4',
    ...EX.final2018,
    part: 'A1 · True/False',
    number: 'A1.4',
    wording:
      'Development Planning Support System (DPSS) can be viewed as a general purpose DSS addressing socioeconomic planning issues of Kuwait.',
    answer: false,
    topic: 'DSS classification',
    sectionId: 'dss-core',
    explanation:
      'False. A system focused on development-planning issues is a domain-oriented special purpose DSS, not a general purpose DSS.',
    status: 'context-only',
    note: 'DPSS is an external course case; classification follows the lecture definitions.',
  }),
  tf({
    id: 'f2018-a5',
    ...EX.final2018,
    part: 'A1 · True/False',
    number: 'A1.5',
    wording: 'Declarative modeling languages concentrate on the solution strategy of an optimization model.',
    answer: false,
    topic: 'Declarative modelling languages',
    sectionId: 'gams',
    explanation:
      'False. They concentrate on the mathematical specification; solution strategy is left to a separate solver.',
  }),
  tf({
    id: 'f2018-a6',
    ...EX.final2018,
    part: 'A1 · True/False',
    number: 'A1.6',
    wording:
      'Special purpose Decision Support Systems (DSS) concentrate on relatively small size problems and they are less expensive than the general purpose DSS.',
    answer: true,
    topic: 'DSS classification',
    sectionId: 'dss-core',
    explanation:
      'True. The narrower scope generally makes special purpose DSS less expensive and faster to build.',
  }),
  tf({
    id: 'f2018-a7',
    ...EX.final2018,
    part: 'A1 · True/False',
    number: 'A1.7',
    wording:
      'Cairo University senior management DSS covers both the data-centered and the model-centered DSS analytical tools.',
    answer: true,
    topic: 'Integrated DSS cases',
    sectionId: 'dss-core',
    explanation:
      'True in the course case: it is an integrated DSS with both data-centered and model-centered support.',
    status: 'context-only',
    note: 'Case details are not in the supplied lecture transcriptions.',
  }),
  tf({
    id: 'f2018-a8',
    ...EX.final2018,
    part: 'A1 · True/False',
    number: 'A1.8',
    wording:
      'Multi-dimensional Database model is strictly needed to generate ad-hoc reporting reflecting policy maker’s view.',
    answer: false,
    topic: 'OLAP',
    sectionId: 'data-centered',
    explanation:
      'False with “strictly.” OLAP can be implemented over multi-dimensional cubes or relational schemas; the essential capability is analytical viewing/manipulation, not one storage model. A multi-dimensional model is a common implementation, not a universal prerequisite.',
  }),
  tf({
    id: 'f2018-a9',
    ...EX.final2018,
    part: 'A1 · True/False',
    number: 'A1.9',
    wording:
      'In a Data Centered DSS, OLAP tool provides insights whereas Data mining provides hindsights to the problem under consideration.',
    answer: false,
    topic: 'Hindsight–insight–foresight',
    sectionId: 'data-centered',
    explanation:
      'False; reversed. OLAP/reporting = hindsight; data mining/statistics = insight.',
  }),
  tf({
    id: 'f2018-a10',
    ...EX.final2018,
    part: 'A1 · True/False',
    number: 'A1.10',
    wording:
      'In a decision support cycle, models are essentially needed to validate and approve a selected decision.',
    answer: false,
    topic: 'Decision-making cycle',
    sectionId: 'process',
    explanation:
      'False. Models support alternative evaluation, scenario analysis, cost and risk. Approval/validation is an organisational step, not the essential purpose of models.',
  }),
  tf({
    id: 'f2018-a11',
    ...EX.final2018,
    part: 'A1 · True/False',
    number: 'A1.11',
    wording:
      'Group decision support systems (GDSS) need additional software systems to manage ideas generated by the members of the group.',
    answer: true,
    topic: 'Group support systems',
    sectionId: 'support-systems',
    explanation:
      'True. GDSS uses groupware/collaborative software for communication, idea generation, classification, ranking, voting and group memory.',
  }),
  tf({
    id: 'f2018-a12',
    ...EX.final2018,
    part: 'A1 · True/False',
    number: 'A1.12',
    wording:
      'Decision Support systems (DSS) is used to support reporting and database related capabilities along with few or simple analytical capabilities.',
    answer: false,
    topic: 'MIS vs DSS',
    sectionId: 'support-systems',
    explanation:
      'False. This describes MIS; DSS provides strong analytical and modelling support for semi-structured decisions.',
  }),
  tf({
    id: 'f2018-a13',
    ...EX.final2018,
    part: 'A1 · True/False',
    number: 'A1.13',
    wording:
      'In a model centered DSS, data warehousing and OLAP operations are needed but they do not represent its main concentration.',
    answer: true,
    topic: 'Model-centered DSS',
    sectionId: 'model-centered',
    explanation:
      'True. They may supply data, but the main concentration is models, the model base, MBMS and modelling language.',
  }),
  tf({
    id: 'f2018-a14',
    ...EX.final2018,
    part: 'A1 · True/False',
    number: 'A1.14',
    wording:
      'The efficiency criteria of a modeling language reflects the appropriate communications with decision makers.',
    answer: false,
    topic: 'Modelling language criteria',
    sectionId: 'gams',
    explanation:
      'False. Communication with decision makers is an **effectiveness** criterion. Efficiency concerns model-builder productivity, model coverage, compactness and solver support.',
  }),
  tf({
    id: 'f2018-a15',
    ...EX.final2018,
    part: 'A1 · True/False',
    number: 'A1.15',
    wording:
      'Structured modeling language can be used to graphically represent a modeling domain.',
    answer: true,
    topic: 'Structured modelling',
    sectionId: 'modeling-hierarchy',
    explanation:
      'True. Structured modelling uses graphical/ER-style representations of the domain: entities, attributes, relationships, functions and constraints. It represents the domain; solving is handled later by an optimisation language/solver.',
  }),
  mcq({
    id: 'f2018-a2-1',
    ...EX.final2018,
    part: 'A2 · Multiple choice',
    number: 'A2.1',
    points: '1.5',
    wording: 'The general purpose model centered DSS relies mainly on:',
    choices: ['Expertise and reasoning', 'Transaction processing database system', 'Model base and model base management', 'OLAP and ad-hoc reporting'],
    answer: 2,
    topic: 'Model-centered DSS',
    sectionId: 'model-centered',
    explanation:
      'Correct choice: 3. A model-centered DSS is defined by its model base and model-base management system (plus modelling language and solvers). Expertise suggests ES; transaction DB is OLTP; OLAP/ad-hoc reporting is data-centered.',
  }),
  mcq({
    id: 'f2018-a2-2',
    ...EX.final2018,
    part: 'A2 · Multiple choice',
    number: 'A2.2',
    points: '1.5',
    wording: 'Insights in support of decision making are ensured by:',
    choices: ['Mathematical modeling', 'Analytical database', 'Data Mining and Analytical Statistics'],
    answer: 2,
    topic: 'Hindsight–insight–foresight',
    sectionId: 'foundations',
    explanation:
      'Correct choice: 3. Insight comes from patterns and relationships found through data mining/analytical statistics. Analytical databases support hindsight; mathematical models mainly support foresight.',
  }),
  q({
    id: 'f2018-b1',
    ...EX.final2018,
    part: 'B · Conceptual model',
    number: 'B.a',
    points: '3',
    wording: 'Draw a conceptual model of a general purpose decision support system (DSS).',
    answer: 'See the integrated general-purpose DSS architecture.',
    type: 'diagram',
    topic: 'Integrated DSS architecture',
    sectionId: 'dss-core',
    visual: 'conceptual-model',
    explanation: 'A general purpose DSS integrates data, models and knowledge behind an interactive interface for the decision maker.',
    solution: SOLUTIONS.conceptualModel,
  }),
  q({
    id: 'f2018-b2',
    ...EX.final2018,
    part: 'B · Conceptual model',
    number: 'B.b',
    points: '3',
    wording:
      'Identify two major contributions of the DSS to computing technology and management support systems. (Provide titles only without explanation).',
    answer: 'Integration of data + models + knowledge; interactive analytical support for semi-structured decisions. (Also: user interface/experimentation, MBMS.)',
    type: 'written',
    topic: 'DSS contribution',
    sectionId: 'dss-core',
    explanation:
      'Titles only. Choose contributions that distinguish DSS from conventional reporting systems.',
    solution: `Titles-only options (choose two):
1. **Integration of database and model-base technologies** (data + models + knowledge).
2. **Interactive, user-driven analytical support for semi-structured decisions.**
3. **Model management and model experimentation** (MBMS + modelling languages).
4. **Decision-maker interface / what-if and scenario support.**
5. **Linkage of internal and external information with judgment.**`,
  }),
  q({
    id: 'f2018-b3',
    ...EX.final2018,
    part: 'B · Conceptual model',
    number: 'B.c',
    points: '3',
    wording:
      'Identify the type of computer aided DSS along with its analytical tools used to provide decision makers with Hindsights, Insights and Foresights.',
    answer:
      'Hindsight: data-centered DSS with DW/OLAP/reporting. Insight: data-centered DSS with statistics/data mining. Foresight: model- or knowledge-centered DSS with simulation/optimization/forecasting/ES.',
    type: 'written',
    topic: 'Hindsight–insight–foresight',
    sectionId: 'foundations',
    explanation:
      'State the system type and tool set for each lens. Keep the mapping precise.',
    solution: `| Lens | DSS type | Analytical tools |
|---|---|---|
| **Hindsight** | Data-centered DSS | Analytical database/data warehouse, OLAP queries, reporting, dashboards |
| **Insight** | Data-centered DSS | Statistical analysis, data mining (patterns, classification, clustering, association) |
| **Foresight** | Model-centered (and knowledge-centered) DSS | Optimisation, simulation, decision modelling, forecasting, expert systems/rules |

Add that an integrated DSS combines all three lenses.`,
  }),
  q({
    id: 'f2018-c1',
    ...EX.final2018,
    part: 'C · GAMS modeling language',
    number: 'C.1',
    points: '4',
    wording:
      'Formulate the washing-machine transportation problem as a linear Programming Model (Minimize Total Shipping Cost Subject to Supply and demand Constraints). [Cairo/Alexandria; Port Said/Mansoura/Monofia table; cost EGP 90 per case per thousand miles.]',
    answer: 'See the LP formulation for the two-plant, three-market transportation problem.',
    type: 'modeling',
    topic: 'Transportation LP',
    sectionId: 'production-shipping',
    visual: 'production-network',
    explanation:
      'Define sets i (plants) and j (markets), supply a_i, demand b_j, unit transport cost c_ij, and shipment x_ij. Minimise total cost subject to supply and demand.',
    solution: `**Sets**
- i ∈ {Cairo, Alexandria} (plants)
- j ∈ {Port Said, Mansoura, Monofia} (markets)

**Parameters**
- a(i): supply at plant i = 350, 600
- b(j): demand at market j = 325, 300, 275
- d(i,j): distance in thousand miles
- f = 90 EGP per case per thousand miles
- c(i,j) = f × d(i,j) / 1000 (thousand EGP per case)

Cost matrix (thousand EGP per case):
- Cairo: 0.225, 0.153, 0.162
- Alexandria: 0.225, 0.162, 0.126

**Decision variables**
x(i,j) ≥ 0: cases shipped from plant i to market j.

**Objective**
Minimise Z = Σ_i Σ_j c(i,j) x(i,j)

**Constraints**
Supply: Σ_j x(i,j) ≤ a(i) for each plant i
Demand: Σ_i x(i,j) ≥ b(j) for each market j
Non-negativity: x(i,j) ≥ 0

Total supply = 950; total demand = 900, so the model is feasible with 50 cases of unused capacity (unless equality demand is imposed).`,
  }),
  q({
    id: 'f2018-c2',
    ...EX.final2018,
    part: 'C · GAMS modeling language',
    number: 'C.2',
    points: '10',
    wording:
      'Develop a GAMS Language implementation using a style satisfying Model-Data separation, compact mathematical specification and Modularity criteria.',
    answer: 'See the complete transportation GAMS model.',
    type: 'gams',
    topic: 'GAMS code',
    sectionId: 'production-shipping',
    visual: 'gams-workflow',
    explanation:
      'The code should declare sets, parameters, scalar/table, variables, equations, model, solve and display in a modular order. Data stay outside the equations.',
    solution: SOLUTIONS.gamsRewrite,
  }),
  q({
    id: 'f2018-c3',
    ...EX.final2018,
    part: 'C · GAMS modeling language',
    number: 'C.3',
    points: '4',
    wording:
      'Identify the type of experiment corresponding to changes in the value of: a) supplies (production capacity) b) market demand c) shipping cost.',
    answer:
      'All are parametric/sensitivity experiments on the LP; conceptually capacity and demand changes are RHS sensitivity/scenario experiments, and shipping-cost changes are objective-coefficient sensitivity/technological-impact experiments.',
    type: 'written',
    topic: 'Modelling experiments',
    sectionId: 'production-shipping',
    explanation:
      'The lecture distinguishes policy experiments, external-change impact, technological-change impact and sensitivity analysis. The same numerical change can support more than one label depending on the question asked; state the purpose.',
    solution: `**a) Supplies / production capacity**
- Type: **sensitivity analysis / parametric analysis on right-hand-side capacity**.
- Also: internal capacity-policy experiment or impact of investment in capacity.
- Question: how does the optimal shipping pattern and cost change if a plant’s capacity rises or falls?

**b) Market demand**
- Type: **sensitivity/scenario analysis on demand (RHS)**.
- Also: impact of external market changes if demand shifts because of the environment.
- Question: how robust is the plan to demand growth, decline or uncertainty?

**c) Shipping cost**
- Type: **sensitivity analysis on objective-function coefficients**.
- Also: impact of technological/logistics change if freight efficiency or fuel costs change.
- Question: how much does the optimal plan/cost change per unit change in c(i,j)?

**Exam-safe sentence:** “Changes in supplies and demand are RHS parametric experiments; changes in shipping cost are objective-coefficient parametric experiments. Each can be framed as sensitivity analysis, and demand/freight changes can also represent external or technological scenarios.”`,
  }),
  q({
    id: 'f2018-d1',
    ...EX.final2018,
    part: 'D · Data-centered DSS',
    number: 'D.1',
    points: '5',
    wording:
      'Draw a schematic diagram to represent the inter-relationship or dependence between: Operational database; ETL; Data warehousing; Data marts; OLAP; Reporting; Data Mining in a data-centered DSS.',
    answer: 'See the data-centered pipeline, including reporting.',
    type: 'diagram',
    topic: 'Data-centered DSS architecture',
    sectionId: 'data-centered',
    visual: 'data-pipeline',
    explanation:
      'Include reporting as an output path and show OLAP and data mining as parallel analytical consumers of the warehouse/marts.',
    solution: SOLUTIONS.dataPipeline,
  }),
  q({
    id: 'f2018-e1',
    ...EX.final2018,
    part: 'E · Model-centered DSS',
    number: 'E.1',
    points: '4',
    wording:
      'List the elements corresponding to the efficiency and effectiveness criteria of a modeling language.',
    answer: 'Efficiency: coverage, compactness, time reduction, solver set, model-building support. Effectiveness: interface, what-if/goal seeking/scenarios, explanation, visualization.',
    type: 'written',
    topic: 'Modelling language criteria',
    sectionId: 'gams',
    explanation:
      'This is almost a direct lecture-list question. Keep the two categories separate.',
    solution: `**Efficiency** (enhance model-builder productivity)
- Cover a wide range of model classes.
- Support compact formulation of complex models.
- Reduce time/effort to construct complex models.
- Provide a complete set of solvers.
- Support most model-building phases.

**Effectiveness** (improve experimental capability)
- Ease of communication with the decision maker (friendly interface).
- Support what-if, goal seeking and scenario simulation.
- Output explanation/interpretation.
- Graphical display, animation and/or visualisation of results.`,
  }),
  q({
    id: 'f2018-e2',
    ...EX.final2018,
    part: 'E · Model-centered DSS',
    number: 'E.2',
    points: '6',
    wording:
      'Draw a block diagram identifying the main components of a model centered DSS of an industrial corporation. Suggest three criteria for classifying or integrating its set of models in the model base.',
    answer: 'See the model-centered block and classification criteria.',
    type: 'diagram',
    topic: 'Model-centered DSS architecture',
    sectionId: 'model-centered',
    visual: 'model-dss',
    explanation:
      'Show the model base and MBMS at the centre, with modelling language, solvers, data, interface and user. Classify models by functional area, method and horizon.',
    solution: SOLUTIONS.modelDssBlock,
  }),
]
