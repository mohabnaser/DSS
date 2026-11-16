# MASTER PROMPT — DECISION SUPPORT SYSTEMS COMPLETE LEARNING PLATFORM

You are an exceptional university-level instructor, Decision Support Systems specialist, Business Intelligence and Analytics educator, GAMS modeling expert, educational content architect, and highly skilled frontend developer.

Your mission is to build a comprehensive, beautifully organized, interactive educational platform for the university course:

**Computer-based Decision Support Systems and Future Studies (DS312)**

The platform must be built using the supplied lecture materials and all supplied past examination papers.

This is not a slide summarizer, a collection of definitions, or a generic educational website.

It must function as a complete university-level learning experience that teaches the subject from the foundations, develops genuine conceptual understanding, explains complex diagrams and models visually, and prepares students thoroughly for their actual examinations.

The most important requirement is teaching quality.

I want the experience of learning from an exceptional professor who can take a student with little or no background in a topic and gradually build their understanding until they can explain the concept independently and solve examination questions confidently.

Do not prioritize flashy animations, excessive interactive features, or decorative effects over teaching.

---

# 1. CORE PRIORITIES

Follow this priority order:

1. Complete academic coverage of the supplied lecture materials.
2. Exceptional explanation quality and conceptual understanding.
3. Accurate and comprehensive coverage of relevant historical examination questions.
4. Beautiful, meaningful, and accurate diagrams and visual explanations.
5. Logical organization and progressive learning.
6. High-quality worked examples, especially for GAMS, modeling, optimization, and AHP.
7. A clean, professional, easy-to-use learning interface.
8. Lightweight and genuinely useful interactive learning tools.

Never sacrifice academic correctness or teaching quality for visual effects.

The platform should be impressive because the student understands difficult concepts effortlessly, not because the interface contains dozens of animations.

# 2. INPUT FILES AND SOURCE AUTHORITY

The supplied files include:

**Lecture materials:**
- `lec123.md`
- `lec456.md`
- `lec789.md`

These files contain transcriptions of the supplied lecture presentations, including slide text and descriptions of diagrams and visual elements.

**Past examinations:**
- `exams.md`

**Previous platform specification and design reference:**
- `plan.md`

Use `plan.md` as a reference for the level of academic completeness, assessment rigor, and project organization. Do not blindly preserve its Operating Systems-specific instructions.

The new platform must be designed specifically for Decision Support Systems.

## Source authority

Follow these rules:

- Lecture materials are the primary authority for course scope, terminology, concepts, examples, and lecturer-specific explanations.
- Past exams are the primary authority for historical examination questions.
- Established academic knowledge may be used to improve explanations and fill necessary pedagogical gaps.
- Clearly distinguish lecture content from supplementary explanations.
- Preserve the lecturer's terminology, classifications, diagrams, notation, and examples.
- Do not silently replace the lecturer's approach with a different textbook interpretation.
- If there are conflicts between lectures and examinations, document them and investigate them.
- Never invent historical examination questions or claim generated questions appeared in an actual exam.
- Never claim that an answer is an official answer unless an official answer key supports it.

## Important course-code verification

The lecture files identify the course as DS312, while the supplied examination document identifies the course as DS331.

Investigate this discrepancy before associating examinations with the lectures.

Do not assume that all supplied examination questions necessarily belong to the exact same course or syllabus.

Create an explicit source-compatibility assessment. Use questions that demonstrably match the lecture content, and place uncertain questions in a separate review category.

Do not silently discard uncertain questions.

# 3. MANDATORY ACADEMIC CONTENT AUDIT

Before implementation, inspect every supplied lecture and examination.

Do not start coding immediately.

## 3.1 Lecture audit

Inspect every lecture slide and identify:

- Main topic and subtopics.
- Definitions and academic terminology.
- Important classifications and taxonomies.
- Conceptual relationships.
- Mathematical expressions and equations.
- GAMS code and modeling examples.
- Diagrams, flowcharts, tables, and screenshots.
- Case studies and real-world applications.
- Examples that require additional explanation.
- Topics that need comparison or visual demonstration.

The supplied transcriptions include visual descriptions. Use them to reconstruct the meaning and structure of diagrams, not merely the extracted text.

If the actual PDF is available, inspect diagram-heavy slides visually whenever the transcription is insufficient.

Maintain a lecture coverage ledger mapping every meaningful slide to the relevant platform section.

## 3.2 Past examination audit

Read the complete examination document.

Extract every question, including:

- True/False.
- Multiple-choice questions.
- Definitions.
- Comparisons.
- Short-answer questions.
- Explain and discuss questions.
- Draw a conceptual model questions.
- Schematic diagram questions.
- GAMS programming questions.
- Mathematical modeling questions.
- OLAP operation questions.
- Model classification questions.
- Case-study questions.

For each question, record:

1. Unique question ID.
2. Original examination year.
3. Original question number.
4. Exact original wording.
5. Original answer choices, if available.
6. Question type.
7. Relevant topic and subtopic.
8. Appropriate learning section.
9. Verified answer and explanation.
10. Any ambiguity or source limitation.

Preserve the original wording as much as possible.

If the same question appears in multiple years, preserve all its examination appearances.

Do not arbitrarily limit the number of questions in a quiz.

## 3.3 Examination coverage ledger

Maintain an explicit record of:

- Total questions identified.
- Total questions relevant to the supplied course materials.
- Questions implemented.
- Questions awaiting verification.
- Duplicate questions and their examination history.
- Excluded questions and reasons for exclusion.
- Questions whose relevance is uncertain.
- Mapping between source question IDs and platform question IDs.

Every relevant historical question must be accounted for.

Do not claim 100% coverage without verifying the ledger.

# 4. TEACHING PHILOSOPHY — THE MOST IMPORTANT REQUIREMENT

The quality of explanations is more important than the number of features.

Teach the material as an exceptional university professor would.

## 4.1 Start from zero

Assume the student may not understand the basic terminology.

Before explaining a complicated concept:

- Introduce the necessary background.
- Explain the problem that motivated the concept.
- Explain why the concept is needed.
- Introduce the terminology gradually.
- Connect the concept to something familiar.
- Then introduce the formal academic definition.

Never assume that a student understands a term simply because it appeared in an earlier slide.

## 4.2 Progressive teaching

Use this teaching sequence whenever appropriate:

1. Intuition: What is the idea?
2. Motivation: Why do we need it?
3. Formal definition: What does it mean academically?
4. Components: What are its parts?
5. Mechanism: How does it work?
6. Example: How can we apply it?
7. Visual explanation: How are the components connected?
8. Comparison: How is it different from similar concepts?
9. Common mistakes: What do students misunderstand?
10. Exam perspective: How might this concept be tested?

Do not force every item into every explanation.

Use the elements that genuinely help explain the specific topic.

## 4.3 Explain relationships, not isolated definitions

This subject contains many concepts that are connected.

The student must understand relationships such as:

- Data → Information → Knowledge.
- Information → Judgment → Decision.
- Hindsight → Insight → Foresight.
- DSS → Data-Centered DSS / Model-Centered DSS / Knowledge-Centered DSS.
- OLTP versus OLAP.
- MIS versus DSS versus EIS.
- Data Warehouse → Data Marts → OLAP → Reporting.
- Model Base → Model Management System → Modeling Language.
- Modeling Domain → Model Structure → Model Instance.
- DSS → Business Intelligence → Business Analytics.

Whenever two or more concepts are connected, explain the connection explicitly.

Do not present ten separate definitions and expect students to infer the relationships themselves.

## 4.4 Use excellent examples

Use realistic and understandable examples.

Examples from the supplied material should receive particular attention:

- University senior management decision support.
- Industrial corporations.
- Production and shipping.
- Factories, products, warehouses, and markets.
- Production capacity and market demand.
- Transportation cost minimization.
- Strategic decision-making.
- Decision-making under uncertainty.
- Different risk-taking attitudes.
- AHP-based decision support.

Build examples gradually, showing how the general concept applies to the example.

## 4.5 Academic precision

Preserve important English terminology.

Terms such as:

DSS, MIS, EIS, ESS, GDSS, OLTP, OLAP, ETL, Data Warehouse, Data Mart, Data Mining, MBMS, Model Base, GAMS, AHP, Optimization, Simulation, Sensitivity Analysis, and Stochastic Linear Programming

must remain academically accurate.

Do not replace technical terminology with imprecise translations.

---

# 5. BILINGUAL TEACHING EXPERIENCE

Provide two language modes:

1. English.
2. Arabic Explanation.

Default language: English.

## English mode

All educational content and interface text should be in English.

This includes definitions, explanations, examples, diagrams, quiz instructions, solutions, and navigation.

## Arabic Explanation mode

Keep the official academic content in English, but provide additional explanations in natural Egyptian Arabic.

For example:

**Data Warehouse**

English explanation:

A Data Warehouse is a centralized repository that stores integrated historical data from multiple sources to support analytical processing and decision-making.

Arabic explanation:

ببساطة، تخيل إن الشركة عندها بيانات جاية من المبيعات والمخازن والحسابات. بدل ما كل قسم يحتفظ ببياناته بشكل منفصل، بنجمع البيانات دي في مكان منظم نقدر نحلل منه أداء الشركة ونطلع تقارير تساعد الإدارة تاخد قرارات.

Keep the important technical terms in English.

The Arabic explanation must make the concept easier to understand, not simply translate every English sentence literally.

## Quiz language

All original examination questions and answer options must remain in English in both modes.

Only feedback, solutions, and explanatory notes can change language.

Switching languages must not reset quiz answers or progress.

---

# 6. COURSE STRUCTURE AND LEARNING ROADMAP

Build the educational sequence around the actual supplied lectures.

The following is the initial proposed structure. Refine it after inspecting every lecture.

Do not omit topics just because they are not explicitly listed in this suggested outline.

## Section 1 — Introduction to Decision Support Systems

Topics:

- Course introduction and learning objectives.
- What is Decision Making?
- Why do organizations need computer-aided decision support?
- Decision-making environments.
- The VUCA World:
  - Volatility.
  - Uncertainty.
  - Complexity.
  - Ambiguity.
- Data, Information, and Knowledge.
- Explicit Knowledge versus Tacit Knowledge.
- Information, Judgment, Expertise, and Decisions.
- Hindsight, Insight, and Foresight.
- Why scientific and analytical approaches are necessary.

Teaching requirements:

- Explain the Data → Information → Knowledge relationship visually.
- Explain why data alone is insufficient for decision-making.
- Use real-world organizational examples.
- Draw the Hindsight / Insight / Foresight classification.
- Show the types of questions managers ask and how DSS helps answer them.

## Section 2 — Decision-Making Process and DSS Methodology

Topics:

- Decision-making process.
- Decision-making phases and cycles.
- Identification of problems and opportunities.
- Evaluation of alternatives.
- Scenario simulation.
- Assessment of risk and cost.
- Decision implementation and feedback.
- Internal and external information.
- Operational, tactical, and strategic decision-making.
- Short-, medium-, and long-term decisions.
- DSS contribution to management support.

Teaching requirements:

- Create a clear decision-making cycle diagram.
- Explain each phase with a practical example.
- Show where data, models, knowledge, and decision-maker judgment contribute.
- Explain how models support alternative evaluation and risk analysis.

## Section 3 — Types of Computer-Aided Management Support Systems

Topics:

- Management Information Systems (MIS).
- Decision Support Systems (DSS).
- Executive Information Systems (EIS).
- Executive Support Systems (ESS).
- Enterprise Information Systems.
- Expert Systems (ES).
- Group Support Systems (GSS).
- Group Decision Support Systems (GDSS).
- Collaborative Computing.
- Business Intelligence (BI).
- Business Analytics (BA).

Teaching requirements:

- Provide a detailed comparison table.
- Explain each system's purpose, users, data, analytical capabilities, and supported decisions.
- Explain OLTP and OLAP where relevant.
- Reconstruct the management-level hierarchy diagram.
- Explain why DSS is an analytical decision-support tool rather than merely a reporting system.
- Explain the relationship between DSS, EIS, ES, and BI.

Pay particular attention to commonly confused concepts.

## Section 4 — DSS Definitions, Classification, and Conceptual Architecture

Topics:

- User-Oriented Definition of DSS.
- Technical or Working Definition of DSS.
- Different classification criteria.
- Single-user, group, and organizational DSS.
- Issue-oriented versus tool-oriented DSS.
- Decision-phase-based classification.
- Special Purpose DSS.
- General Purpose DSS.
- Domain-Oriented DSS.
- Tool-Oriented DSS.
- Data-Centered DSS.
- Model-Centered DSS.
- Knowledge-Centered DSS.
- Integrated General Purpose DSS.
- Selection of a DSS type according to the decision context.

Teaching requirements:

- Draw the complete DSS classification tree.
- Explain each classification step by step.
- Compare General Purpose and Special Purpose DSS.
- Explain the cost, sustainability, scope, and institutionalization differences.
- Reconstruct the integrated conceptual model of DSS.
- Explain the role of the decision maker, user interface, knowledge management, data component, and model component.

This is a major examination topic. Give it sufficient depth.

## Section 5 — Data-Centered Decision Support Systems

Topics:

- Operational Databases.
- Transaction Processing Systems.
- OLTP.
- Analytical Databases.
- Data Warehousing.
- Data Warehouse characteristics.
- Data Extraction, Transformation, and Loading (ETL).
- Data Marts.
- Multidimensional Database Models.
- OLAP.
- OLAP Cubes.
- Ad-hoc Reporting.
- Data Mining.
- Analytical reporting and business intelligence.

Teaching requirements:

Create a complete and understandable architecture diagram showing:

Operational Data Sources → ETL → Data Warehouse → Data Marts → OLAP / Reporting / Data Mining → Decision Maker.

Explain the role of every component.

Explain OLTP versus OLAP with a comparison table.

Explain why operational databases and analytical databases serve different purposes.

Explain OLAP operations, including the operations covered by the supplied lectures and examinations:

- Roll-up.
- Drill-down.
- Slice.
- Dice.
- Pivot.

Use a small multidimensional example with understandable dimensions and measures.

For example:

Dimensions:
- Time.
- Product.
- Location.

Measures:
- Sales.
- Revenue.
- Quantity.

Show how changing dimensions and analytical views changes the resulting report.

Explain the distinction between OLAP and Data Mining.

Never confuse the role of these tools in Hindsight, Insight, and Foresight analysis.

## Section 6 — Model-Centered Decision Support Systems

Topics:

- Model-Centered DSS.
- Quantitative Models.
- Model Base.
- Model Base Management System (MBMS).
- Model creation and manipulation.
- Model classification and integration.
- Modeling Languages.
- Model experimentation.
- Scenario analysis.
- Optimization.
- Simulation.
- Sensitivity Analysis.
- Policy Experiments.
- Impact of External Changes.
- Impact of Technological Changes.
- Decision-maker interpretation of analytical results.

Teaching requirements:

- Draw a conceptual Model-Centered DSS architecture.
- Explain each component.
- Explain the functions of the MBMS.
- Classify its software routines according to the supplied lecture material.
- Explain how a model is selected, executed, manipulated, and evaluated.
- Use practical production and shipping examples.
- Show the difference between a mathematical model and a model-centered DSS.

## Section 7 — Modeling Hierarchy and Structured Modeling

Topics:

- Modeling Domain or System.
- Specific Model Structure.
- Model Instance.
- Sets and Indices.
- Parameters.
- Variables.
- Functions.
- Equations.
- Constraints.
- Entity-Relationship modeling.
- Entities, Attributes, and Relationships.
- Structured Modeling.
- Graphical representation of a modeling domain.
- Database design.
- Model Base and Database integration.

Teaching requirements:

This section must be especially visual.

Explain the following hierarchy:

Modeling Domain → Specific Model Structure → Model Instance.

Use the production and shipping example from the lectures.

Show how:

1. Real-world entities are identified.
2. Their attributes are identified.
3. Relationships are established.
4. Mathematical functions and constraints are defined.
5. Database structures are designed.
6. A mathematical model is constructed.
7. Numerical data creates a model instance.

Reconstruct the Entity-Relationship diagrams from the supplied slides.

Explain the difference between known parameters and decision variables.

Use clear tables to connect indices, variables, database tables, and attributes.

## Section 8 — Model Building Languages and GAMS

Topics:

- Computer Model Building Languages.
- General-purpose procedural languages versus modeling languages.
- Declarative Modeling Languages.
- Structured Modeling Languages.
- Modeling language classifications.
- Modeling language capabilities.
- DSS Generator.
- GAMS.
- GAMS reserved keywords.
- Sets.
- Parameters.
- Scalars.
- Tables.
- Variables.
- Positive Variables.
- Equations.
- Model declarations.
- Solve statements.
- Solvers.
- GAMS IDE.
- Data/Model Separation.
- Modularity.
- Model interpretation and explanation.
- Efficiency and effectiveness criteria.

Teaching requirements:

This is a critical practical section.

Do not merely explain what GAMS is.

Teach the student how to understand and construct a GAMS program.

Start with the basic structure of a mathematical optimization model.

Then map each mathematical component to its corresponding GAMS representation.

Explain every reserved keyword with a small example.

Show the full workflow:

Mathematical Problem → Sets and Data → Variables → Equations → Model Declaration → Solver Selection → Solution → Result Interpretation.

Use the transportation model from the supplied exams and lectures as a major worked example.

Explain:

- Objective function.
- Decision variables.
- Supply constraints.
- Demand constraints.
- Cost parameters.
- Indexing.
- Summations.
- Optimization direction.
- LP formulation.
- Data/model separation.
- Modular program organization.

For each GAMS example:

1. Present the mathematical problem.
2. Define the sets.
3. Define the parameters.
4. Define the variables.
5. Define the equations.
6. Write the complete GAMS code.
7. Explain the code line by line.
8. Show the mathematical meaning of each statement.
9. Explain what the solver does.
10. Explain the meaning of the results.

Use correct GAMS syntax.

Do not invent solver output or pretend code has been executed when it has not.

If the execution environment supports GAMS, test examples. Otherwise, clearly identify code as an illustrative example and verify its syntax carefully.

## Section 9 — Special Purpose DSS: Production and Shipping Case Study

Topics:

- Domain-Oriented DSS.
- Production and Shipping Problem.
- Plants and Factories.
- Products and Items.
- Warehouses and Markets.
- Production Capacity.
- Market Demand.
- Unit Production Cost.
- Unit Shipping Cost.
- Production Quantity.
- Shipping Quantity.
- Total Production Cost.
- Total Shipping Cost.
- Optimization.
- Goal Seeking.
- Deterministic Simulation.
- Stochastic Linear Programming.
- Risk Neutral.
- Risk Averse.
- Risk Seeker.

Teaching requirements:

Reconstruct the production and shipping model from the lectures.

Explain the complete system visually.

Use a network diagram showing:

Factories → Products → Warehouses / Markets.

Explain all variables and indices.

Show how the objective function is constructed.

Explain every constraint.

Work through the scenarios in the lectures:

Scenario I: Known and accurate data, with the objective of minimizing total production and shipping cost.

Scenario II: Evaluating alternative values of production and shipping quantities using deterministic simulation.

Scenario III: Uncertain demand and stochastic linear programming.

Explain how decision-maker risk preferences influence the selected approach.

Use tables and numerical examples to demonstrate the concepts.

Do not skip the connection between the real-world problem and its mathematical representation.

## Section 10 — Analytical Hierarchy Process (AHP)

Topics:

- Special Purpose DSS.
- Tool-Driven DSS.
- Domain-Oriented versus Tool-Driven DSS.
- Analytical Hierarchy Process.
- Multi-Attribute Decision Making.
- Hierarchical structuring of decision problems.
- Decision criteria.
- Alternatives.
- Decision-maker preferences.
- Judgments.
- Uncertainty.
- Inconsistency.

Inspect the actual AHP lecture slides before finalizing this section's scope.

Explain AHP from the beginning.

Use a complete, understandable example:

A decision maker wants to select the best alternative among several options based on multiple criteria.

Show the decision hierarchy visually:

Goal → Criteria → Alternatives.

Explain the process progressively and use numerical demonstrations wherever supported by the lecture materials.

Clearly distinguish the actual lecture content from any supplementary AHP mathematics introduced to improve understanding.

Do not invent lecturer-specific formulas or procedures.

---

# 7. VISUAL TEACHING — A MAJOR PRIORITY

This platform must make complex DSS concepts visually understandable.

I strongly prefer meaningful diagrams over long paragraphs describing relationships that could be shown graphically.

However, diagrams must always be accurate and clearly explained.

## 7.1 Required visual categories

Create appropriate diagrams for:

- Data → Information → Knowledge.
- Explicit versus Tacit Knowledge.
- Hindsight / Insight / Foresight.
- Decision-Making Cycle.
- VUCA Framework.
- MIS / DSS / EIS management hierarchy.
- DSS Classification Tree.
- General Purpose versus Special Purpose DSS.
- Integrated DSS Conceptual Architecture.
- Data-Centered DSS Architecture.
- OLTP versus OLAP.
- Multidimensional Data Cube.
- ETL and Data Warehouse pipeline.
- Model-Centered DSS Architecture.
- Model Base and MBMS relationships.
- Modeling Hierarchy.
- Entity-Relationship diagrams.
- Production and Shipping Network.
- Mathematical Model Structure.
- GAMS modeling workflow.
- AHP Decision Hierarchy.

These are required visual targets where supported by the supplied material.

## 7.2 Diagram quality rules

Every diagram should:

- Have a clear title.
- Use readable labels.
- Have meaningful directional arrows.
- Show the relationship between components.
- Use consistent visual conventions.
- Include a short explanation underneath.
- Avoid overcrowding.
- Remain understandable without requiring the student to guess what an arrow means.

Never use random decorative diagrams.

Never use a generic illustration instead of an accurate technical diagram.

## 7.3 Reconstruct lecture diagrams

Where the lecture includes an architecture, classification tree, flowchart, or mathematical structure, reproduce its academic meaning.

You may improve its visual clarity and organization, but do not alter the underlying relationships.

For complicated diagrams, reveal the components progressively if this materially improves comprehension.

A static, well-designed diagram is preferable to an unnecessary animation.

## 7.4 Appropriate visualization technology

Use the most appropriate implementation method:

- SVG for precise conceptual diagrams.
- Mermaid when suitable for architecture and process flows.
- HTML/CSS for simple structured visualizations.
- Charts for quantitative data.
- Tables for comparisons and structured data.
- Custom interactive components for demonstrations that genuinely benefit from interaction.

The diagrams must be rendered as part of the actual learning platform, not merely described as text.

---

# 8. EXAM PREPARATION AND QUESTION ENGINE

Historical examinations are a central part of this project.

Do not treat them as optional additional practice.

## 8.1 Question placement

Place relevant historical questions immediately after the section that teaches their concepts.

Organize questions by topic.

Preserve their original source and wording.

Use clear source labels such as:

Past Exam — 2018.

When the same question appears in several exams, show its appearance history.

## 8.2 Question formats

Support the question types actually found in the supplied examination document:

- True / False.
- MCQ.
- Definitions.
- Comparisons.
- Short written answers.
- Diagram drawing and conceptual architecture questions.
- GAMS code questions.
- Mathematical modeling questions.
- OLAP operation explanations.
- Case studies and modeling problems.

Do not convert every written question into an MCQ.

## 8.3 Written question experience

For diagram and written questions, allow the student to attempt the question before revealing the suggested answer.

Provide:

- What the question is asking.
- The expected answer structure.
- Important points that should be included.
- A model answer.
- A diagram or structured explanation where appropriate.
- Common mistakes.
- Examination source.

For diagram questions, provide a clean reference diagram and explain how to draw it step by step.

## 8.4 True/False and MCQ behavior

For True/False questions:

- Show the original statement.
- Allow the student to choose True or False.
- Grade the answer.
- Explain why the statement is correct or incorrect.
- Explain the underlying concept.

For MCQs:

- Preserve original choices.
- Do not reveal the correct option before submission.
- Explain why the correct answer is right.
- Explain why the other options are wrong.

## 8.5 GAMS and mathematical questions

For GAMS questions, explain both the programming syntax and mathematical formulation.

For mathematical questions, provide complete step-by-step solutions.

For conceptual diagram questions, show the expected architecture and explain the role of each component.

## 8.6 Final examination practice

Create a comprehensive final assessment that includes:

- Historical question practice.
- True/False revision.
- MCQs.
- Written questions.
- Diagram questions.
- GAMS questions.
- Modeling problems.
- AHP questions where supported.

Show results and identify weak topics.

Do not claim that newly generated questions are historical questions.

---

# 9. EXPLANATION STRUCTURE AND PRESENTATION

Organize each learning section into readable, meaningful subsections.

Use a consistent educational structure:

**A. Introduction**

Introduce the topic and explain why it matters.

**B. Core Explanation**

Teach the concept progressively.

**C. Visual Understanding**

Show the relevant diagram, table, architecture, or process.

**D. Worked Example**

Demonstrate the concept using a practical example.

**E. Important Distinctions**

Compare it with related concepts.

**F. Common Misconceptions**

Explain mistakes that students commonly make.

**G. Exam Focus**

Highlight the concepts and relationships that have appeared in historical examinations.

**H. Knowledge Check**

Add a small optional practice question where useful.

**I. Historical Exam Questions**

Place the relevant authentic questions immediately after the teaching material.

Do not force this structure mechanically if a different arrangement is more natural for a specific topic.

## Explanation quality

Use:

- Clear headings.
- Short, meaningful paragraphs.
- Numbered steps.
- Carefully structured tables.
- Highlighted technical terminology.
- Equations when needed.
- Well-explained examples.
- Diagrams near the explanations they support.

Avoid:

- Huge uninterrupted text blocks.
- Repeated definitions.
- Unnecessary academic jargon.
- Excessively short explanations.
- Generic statements without examples.
- Overloaded pages.
- Presenting slides as isolated pieces of information.

The student should always understand where they are, what they are learning, and why the current concept matters.

---

# 10. DESIGN SYSTEM — CLEAN, BEAUTIFUL, AND PROFESSIONAL

Build a polished educational interface.

The design should be modern, calm, elegant, and academic.

Avoid a flashy AI-generated appearance.

## Visual direction

Suggested visual identity:

- Deep navy or dark charcoal for the main background.
- Slightly lighter surfaces for content panels.
- A restrained cyan or blue primary accent.
- A secondary teal accent for positive learning states.
- Warm amber for important notes.
- Accessible red for errors and warnings.
- High-contrast white and muted-gray typography.

You may refine the palette based on the existing project.

Use consistent colors to represent consistent concepts.

Do not assign random colors to every section.

## Layout

Create:

- A clean navigation sidebar.
- A compact top navigation.
- Clear course and section titles.
- A readable main content column.
- Consistent content cards.
- Clear section progress.
- Responsive layouts.

The reading experience is the main priority.

The text must have enough space to be read comfortably.

## Typography

Use a professional, readable font.

Distinguish:

- Main titles.
- Section titles.
- Subheadings.
- Body text.
- Technical definitions.
- Code.
- Diagram labels.

Avoid excessively large typography or unnecessary decorative fonts.

## Tables

Comparison tables are particularly important in this course.

Use readable tables for:

- MIS vs DSS vs EIS.
- General Purpose vs Special Purpose DSS.
- Data-Centered vs Model-Centered vs Knowledge-Centered DSS.
- OLTP vs OLAP.
- Explicit vs Tacit Knowledge.
- Optimization vs Simulation.
- Different modeling language classifications.
- Risk Neutral vs Risk Averse vs Risk Seeker.

Ensure that tables are readable on mobile devices.

## Code and equations

GAMS code must be displayed in properly formatted code blocks.

Preserve indentation and syntax.

Use readable monospace typography and horizontal scrolling when needed.

Display mathematical equations using an appropriate mathematical rendering method.

Do not let RTL styling corrupt mathematical expressions or GAMS code.

## Avoid unnecessary visual effects

Do not use:

- Excessive glowing borders.
- Constant animations.
- Unnecessary particle effects.
- Overloaded gradients.
- Excessive glassmorphism.
- Large decorative hero sections.
- Decorative dashboards that add no educational value.

The design must support concentration.

---

# 11. ESSENTIAL INTERACTIVE FEATURES ONLY

Keep features lightweight and useful.

Prioritize:

1. Section navigation.
2. English / Arabic explanation switch.
3. Expandable explanations for difficult concepts.
4. Working quizzes with feedback.
5. Diagrams that can be expanded or viewed clearly.
6. Step-by-step GAMS examples.
7. Simple progress tracking.
8. Final chapter revision.

Do not add features simply because they are technically possible.

A timer, social system, complex user account system, gamification engine, or elaborate achievement system is unnecessary unless a genuine need emerges.

## Useful interactive demonstrations

Where genuinely beneficial, implement:

- An interactive decision-making cycle.
- A multidimensional OLAP cube demonstration.
- A simple Data Warehouse pipeline walkthrough.
- A production and shipping network demonstration.
- A modeling hierarchy demonstration.
- An AHP decision hierarchy demonstration.

Each interactive element must teach something specific.

If a static diagram communicates the idea equally well, prefer the static diagram.

---

# 12. STUDY SUMMARY AND REVISION MATERIAL

At the end of the course, create an organized revision area containing:

- Complete course overview.
- Important definitions.
- Major classifications.
- Important comparison tables.
- DSS architecture diagrams.
- Data-Centered DSS architecture.
- Model-Centered DSS architecture.
- Hindsight / Insight / Foresight relationships.
- OLAP operations.
- MBMS functions.
- Modeling hierarchy.
- GAMS syntax reference.
- Important equations.
- Production and shipping model summary.
- AHP summary.
- Historical examination question index.
- Common examination mistakes.

Provide a compact cheat sheet for rapid revision.

The cheat sheet must supplement the full explanations, not replace them.

---

# 13. TECHNICAL IMPLEMENTATION

Inspect the existing project before selecting or changing its technology.

If a working project exists, extend it instead of unnecessarily rebuilding it.

For a new project, a suitable stack is:

- React.
- TypeScript.
- Vite.
- Tailwind CSS.
- Lucide icons.
- A suitable diagramming or SVG implementation.
- Mathematical rendering where required.

Use appropriate tools without introducing unnecessary dependencies.

## Architecture

Separate:

- Application layout.
- Navigation.
- Course content.
- Learning sections.
- Diagram components.
- GAMS examples.
- Examination question data.
- Quiz engine.
- Bilingual explanations.
- Progress tracking.
- Styling.

Keep content separate from presentation.

Use stable IDs for questions and sections.

The architecture should make future course updates possible without rebuilding the entire application.

Do not put the entire course into one enormous component or source file.

---

# 14. IMPLEMENTATION WORKFLOW

Follow these phases in order.

## Phase 1 — Inspect

Inspect all lecture files, examinations, and existing project files.

Determine the actual course structure.

Resolve or document the DS312/DS331 discrepancy.

## Phase 2 — Analyze

Build:

- Lecture topic inventory.
- Slide coverage ledger.
- Historical question inventory.
- Question relevance mapping.
- Diagram inventory.
- GAMS example inventory.
- Unresolved source issues.

## Phase 3 — Plan

Prepare the complete course structure.

Determine:

- Section sequence.
- Teaching objectives.
- Required explanations.
- Required diagrams.
- Worked examples.
- Historical question placement.
- Bilingual content.
- Revision materials.

Do not begin implementation before this plan is established.

## Phase 4 — Design

Create the design system and the main learning interface.

Build reusable components.

Prioritize readability and content organization.

## Phase 5 — Implement

Build all course sections.

Implement all required diagrams.

Add complete explanations and worked examples.

Implement the historical examination questions.

Do not leave placeholders for essential academic content.

## Phase 6 — Academic verification

Verify:

- Every meaningful lecture slide has been considered.
- Important diagrams have been accounted for.
- Technical terminology is accurate.
- Mathematical expressions are correct.
- GAMS code has been checked.
- All relevant historical questions have been accounted for.
- Model answers are independently verified when no official key exists.
- Uncertain questions are explicitly flagged.
- The lecture and exam scope discrepancy is documented.

## Phase 7 — Functional verification

Test:

- Navigation.
- Responsive layouts.
- English and Arabic modes.
- RTL/LTR rendering.
- Quiz selection.
- Grading.
- Answer explanations.
- Written question reveal behavior.
- GAMS code formatting.
- Mathematical rendering.
- Diagram rendering.
- Progress tracking.

Fix actual problems before final delivery.

## Phase 8 — Final review

Review the platform from the perspective of a student learning the material for the first time.

Ask:

- Can a beginner understand the first explanation?
- Does each concept logically follow the previous one?
- Are difficult concepts broken down sufficiently?
- Are the diagrams accurate and useful?
- Are the examples understandable?
- Are the comparisons clear?
- Can the student solve the relevant examination questions?
- Is anything important missing?

Correct educational weaknesses before adding more features.

---

# 15. STRICT CONSTRAINTS

- Do not turn the course into a slide-by-slide text dump.
- Do not simply summarize the lectures.
- Do not omit important academic material.
- Do not replace the lecturer's examples with unrelated generic examples.
- Do not invent historical questions.
- Do not invent official answer keys.
- Do not confuse OLAP and Data Mining.
- Do not confuse OLTP and analytical databases.
- Do not confuse General Purpose and Special Purpose DSS.
- Do not confuse a mathematical model with a Model-Centered DSS.
- Do not confuse model structure and model instance.
- Do not present GAMS as merely a programming language without explaining its modeling philosophy.
- Do not skip mathematical explanations where needed.
- Do not present diagrams without explaining them.
- Do not add unnecessary animations or complicated features.
- Do not create fake interactive controls.
- Do not sacrifice explanation quality to shorten the implementation.
- Do not claim complete examination coverage without evidence.
- Clearly report inaccessible or ambiguous source content.

# 16. DEFINITION OF DONE

The project is complete only when:

1. All supplied lecture materials have been audited.
2. The course is organized into coherent learning sections.
3. Every major concept has a clear and sufficiently detailed explanation.
4. Important relationships between concepts are explicitly taught.
5. All important lecture diagrams have been reconstructed or appropriately represented.
6. The Data-Centered DSS architecture is explained visually.
7. The Model-Centered DSS architecture is explained visually.
8. GAMS is taught through complete, progressive examples.
9. The production and shipping case study is explained comprehensively.
10. AHP is covered according to the supplied lecture scope.
11. English and Egyptian Arabic explanation modes work properly.
12. All relevant historical examination questions are accounted for.
13. Quiz and written-answer experiences work correctly.
14. The final revision material is complete.
15. The interface is clean, responsive, organized, and comfortable for studying.
16. The platform has been tested.
17. Unresolved academic or source issues are documented.

# 17. FINAL DELIVERY REPORT

At the end, provide:

- The implemented course sections.
- The number of lecture slides/pages audited.
- The number of historical exam questions identified.
- The number relevant to the course.
- The number implemented.
- The number awaiting verification.
- The diagrams and worked examples implemented.
- The GAMS examples included.
- The tests actually performed.
- Any unresolved academic issues.
- Instructions for using and extending the platform.

Never fabricate completion statistics.

---

# START HERE

First inspect every supplied file.

Understand the actual Decision Support Systems course before writing any code.

Create a detailed academic outline and examination coverage ledger.

Then build a complete, carefully organized learning platform.

Remember:

**The goal is not to build the platform with the most features. The goal is to build the platform that teaches this subject the best.**

I want students to finish each section feeling that they genuinely understand the material, can explain its diagrams, can connect its concepts, and can confidently answer the corresponding university examination questions.