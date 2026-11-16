import { DiagramFrame } from '../ui'

const dg = { role: 'img' as const }

export function DssClassificationTree() {
  return (
    <DiagramFrame
      title="The DSS classification tree"
      caption="First separate by scope (general vs special purpose), then by orientation. A system can combine orientations, which is why the integrated general-purpose DSS exists."
      tone="cool"
    >
      <svg className="diagram-svg" viewBox="0 0 1120 760" {...dg} aria-label="Decision support system classification tree">
        <defs>
          <marker id="arrow-tree" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" className="dg-arrowhead" />
          </marker>
        </defs>
        <rect x="430" y="20" width="260" height="60" rx="12" className="dg-box dg-box--solid" />
        <text x="560" y="47" textAnchor="middle" className="dg-label dg-label--dark">DECISION SUPPORT SYSTEMS</text>
        <text x="560" y="66" textAnchor="middle" className="dg-small dg-small--dark">scope classification</text>

        <path d="M500 80 C430 115 330 120 285 155" className="dg-connector" markerEnd="url(#arrow-tree)" />
        <path d="M620 80 C690 115 790 120 835 155" className="dg-connector" markerEnd="url(#arrow-tree)" />

        <rect x="100" y="160" width="370" height="62" rx="10" className="dg-box dg-box--amber" />
        <text x="285" y="186" textAnchor="middle" className="dg-label dg-label--amber">SPECIAL PURPOSE DSS</text>
        <text x="285" y="206" textAnchor="middle" className="dg-small">bounded problem or tool · often less expensive</text>

        <rect x="650" y="160" width="370" height="62" rx="10" className="dg-box dg-box--accent" />
        <text x="835" y="186" textAnchor="middle" className="dg-label dg-label--cyan">GENERAL PURPOSE DSS</text>
        <text x="835" y="206" textAnchor="middle" className="dg-small">reusable tools · institutional structure</text>

        <path d="M220 222 C190 255 170 270 160 300" className="dg-connector" markerEnd="url(#arrow-tree)" />
        <path d="M350 222 C380 255 400 270 410 300" className="dg-connector" markerEnd="url(#arrow-tree)" />
        <path d="M735 222 C705 255 685 270 672 300" className="dg-connector" markerEnd="url(#arrow-tree)" />
        <path d="M890 222 C920 255 940 270 950 300" className="dg-connector" markerEnd="url(#arrow-tree)" />

        <rect x="55" y="305" width="220" height="64" rx="9" className="dg-box" />
        <text x="165" y="330" textAnchor="middle" className="dg-text dg-text--strong">Domain-oriented DSS</text>
        <text x="165" y="351" textAnchor="middle" className="dg-small">production-shipping · university</text>

        <rect x="300" y="305" width="220" height="64" rx="9" className="dg-box" />
        <text x="410" y="330" textAnchor="middle" className="dg-text dg-text--strong">Tool / method-oriented</text>
        <text x="410" y="351" textAnchor="middle" className="dg-small">AHP · simulation · network tools</text>

        <rect x="565" y="305" width="215" height="64" rx="9" className="dg-box" />
        <text x="672" y="330" textAnchor="middle" className="dg-text dg-text--strong">Analytical orientation</text>
        <text x="672" y="351" textAnchor="middle" className="dg-small">data · model · knowledge</text>

        <rect x="815" y="305" width="250" height="64" rx="9" className="dg-box" />
        <text x="940" y="330" textAnchor="middle" className="dg-text dg-text--strong">Integrated / dual</text>
        <text x="940" y="351" textAnchor="middle" className="dg-small">combines two or more orientations</text>

        <path d="M165 369 V405" className="dg-mini-line" markerEnd="url(#arrow-tree)" />
        <path d="M410 369 V405" className="dg-mini-line" markerEnd="url(#arrow-tree)" />
        <path d="M672 369 V405" className="dg-mini-line" markerEnd="url(#arrow-tree)" />

        <rect x="45" y="412" width="240" height="118" rx="10" className="dg-box dg-box--amber" />
        <text x="165" y="436" textAnchor="middle" className="dg-label dg-label--amber">Domain examples</text>
        <text x="165" y="458" textAnchor="middle" className="dg-small">Management support systems</text>
        <text x="165" y="476" textAnchor="middle" className="dg-small">Economic support systems</text>
        <text x="165" y="494" textAnchor="middle" className="dg-small">Transport support systems</text>
        <text x="165" y="512" textAnchor="middle" className="dg-small">Production & shipping DSS</text>

        <rect x="300" y="412" width="240" height="118" rx="10" className="dg-box dg-box--amber" />
        <text x="420" y="436" textAnchor="middle" className="dg-label dg-label--amber">Tool examples</text>
        <text x="420" y="458" textAnchor="middle" className="dg-small">Simulation-based tools</text>
        <text x="420" y="476" textAnchor="middle" className="dg-small">Network-based tools</text>
        <text x="420" y="494" textAnchor="middle" className="dg-small">AHP-based tool</text>
        <text x="420" y="512" textAnchor="middle" className="dg-small">Spreadsheet tools</text>

        <rect x="565" y="412" width="215" height="118" rx="10" className="dg-box dg-box--accent" />
        <text x="672" y="436" textAnchor="middle" className="dg-label dg-label--cyan">General types</text>
        <text x="672" y="458" textAnchor="middle" className="dg-small">Data-centered</text>
        <text x="672" y="476" textAnchor="middle" className="dg-small">Model-centered</text>
        <text x="672" y="494" textAnchor="middle" className="dg-small">Knowledge-centered</text>
        <text x="672" y="512" textAnchor="middle" className="dg-small">Dual / integrated</text>

        <rect x="815" y="412" width="250" height="118" rx="10" className="dg-box dg-box--accent" />
        <text x="940" y="436" textAnchor="middle" className="dg-label dg-label--cyan">Architecture implication</text>
        <text x="940" y="458" textAnchor="middle" className="dg-small">Data + models + knowledge</text>
        <text x="940" y="476" textAnchor="middle" className="dg-small">MBMS + modelling language</text>
        <text x="940" y="494" textAnchor="middle" className="dg-small">Knowledge management</text>
        <text x="940" y="512" textAnchor="middle" className="dg-small">Interactive user interface</text>

        <rect x="280" y="585" width="560" height="58" rx="12" className="dg-box dg-box--warm" />
        <text x="560" y="610" textAnchor="middle" className="dg-label dg-label--amber">SELECTION DEPENDS ON CONTEXT</text>
        <text x="560" y="630" textAnchor="middle" className="dg-small">small one-off problem + limited finance → special purpose · institutional multi-decision need → general purpose</text>

        <path d="M560 560 V585" className="dg-connector" markerEnd="url(#arrow-tree)" />
        <text x="594" y="577" className="dg-small dg-small--muted">“which tree branch fits the decision?”</text>
      </svg>
    </DiagramFrame>
  )
}

export function IntegratedDssArchitecture() {
  return (
    <DiagramFrame
      title="Integrated general-purpose DSS architecture"
      caption="The data and model wings share knowledge management and an interactive interface. The decision maker remains outside the system boundary — the DSS supports judgment rather than replacing it."
      tone="warm"
    >
      <svg className="diagram-svg" viewBox="0 0 1100 700" {...dg} aria-label="Integrated conceptual DSS architecture">
        <defs>
          <marker id="arrow-arch" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" className="dg-arrowhead" />
          </marker>
          <marker id="arrow-arch-back" markerWidth="8" markerHeight="8" refX="1" refY="4" orient="auto">
            <path d="M8,0 L0,4 L8,8 Z" className="dg-arrowhead" />
          </marker>
        </defs>
        <rect x="30" y="25" width="1040" height="515" rx="22" className="dg-boundary" />
        <text x="65" y="58" className="dg-boundary-label">SYSTEM BOUNDARY · INTEGRATED GENERAL PURPOSE DSS</text>

        <rect x="65" y="90" width="460" height="235" rx="16" className="dg-zone dg-zone--data" />
        <text x="295" y="119" textAnchor="middle" className="dg-label dg-label--cyan">DATA-CENTERED DSS</text>
        <rect x="95" y="142" width="185" height="92" rx="10" className="dg-box" />
        <text x="187" y="170" textAnchor="middle" className="dg-text dg-text--strong">Analytical database</text>
        <text x="187" y="191" textAnchor="middle" className="dg-small">data warehouse</text>
        <text x="187" y="210" textAnchor="middle" className="dg-small">multi-dimensional data</text>

        <rect x="320" y="142" width="175" height="92" rx="10" className="dg-box" />
        <text x="407" y="170" textAnchor="middle" className="dg-text dg-text--strong">DBMS · OLAP</text>
        <text x="407" y="191" textAnchor="middle" className="dg-small">slice · dice · roll-up</text>
        <text x="407" y="210" textAnchor="middle" className="dg-small">drill-down · pivot</text>

        <path d="M280 170 H316" className="dg-connector" markerEnd="url(#arrow-arch)" />
        <path d="M320 210 H284" className="dg-connector" markerEnd="url(#arrow-arch-back)" />
        <text x="295" y="265" textAnchor="middle" className="dg-small dg-small--muted">queries ↔ analytical data</text>
        <text x="295" y="298" textAnchor="middle" className="dg-small">technologies: DW · MDDB · OLAP · mining</text>

        <rect x="580" y="90" width="455" height="235" rx="16" className="dg-zone dg-zone--model" />
        <text x="807" y="119" textAnchor="middle" className="dg-label dg-label--amber">MODEL-CENTERED DSS</text>
        <rect x="610" y="142" width="185" height="92" rx="10" className="dg-box" />
        <text x="702" y="170" textAnchor="middle" className="dg-text dg-text--strong">Model base</text>
        <text x="702" y="191" textAnchor="middle" className="dg-small">set of models</text>
        <text x="702" y="210" textAnchor="middle" className="dg-small">LP · sim · forecast</text>

        <rect x="835" y="142" width="175" height="92" rx="10" className="dg-box" />
        <text x="922" y="170" textAnchor="middle" className="dg-text dg-text--strong">MMS + modelling language</text>
        <text x="922" y="191" textAnchor="middle" className="dg-small">GAMS · MBMS</text>
        <text x="922" y="210" textAnchor="middle" className="dg-small">solver interface</text>

        <path d="M795 170 H831" className="dg-connector" markerEnd="url(#arrow-arch)" />
        <path d="M835 210 H799" className="dg-connector" markerEnd="url(#arrow-arch-back)" />
        <text x="807" y="265" textAnchor="middle" className="dg-small dg-small--muted">models ↔ management</text>
        <text x="807" y="298" textAnchor="middle" className="dg-small">technologies: optimization · simulation · solvers</text>

        <rect x="65" y="350" width="970" height="74" rx="14" className="dg-box dg-box--accent" />
        <text x="550" y="376" textAnchor="middle" className="dg-label dg-label--cyan">KNOWLEDGE MANAGEMENT SYSTEMS</text>
        <text x="550" y="397" textAnchor="middle" className="dg-small">knowledge base · rules · expertise · classification · explanation</text>
        <text x="550" y="415" textAnchor="middle" className="dg-small dg-small--muted">supports both the data and model wings</text>

        <path d="M295 325 V346" className="dg-connector" markerEnd="url(#arrow-arch)" />
        <path d="M807 325 V346" className="dg-connector" markerEnd="url(#arrow-arch)" />

        <rect x="65" y="448" width="970" height="65" rx="14" className="dg-box" />
        <text x="550" y="474" textAnchor="middle" className="dg-text dg-text--strong">INTERACTIVE USER INTERFACE SYSTEM</text>
        <text x="550" y="495" textAnchor="middle" className="dg-small">dialogue · visualisation · dashboards · what-if controls · explanation</text>

        <path d="M550 424 V444" className="dg-connector" markerEnd="url(#arrow-arch)" />

        <rect x="300" y="585" width="500" height="68" rx="34" className="dg-box dg-box--solid" />
        <text x="550" y="613" textAnchor="middle" className="dg-label dg-label--dark">DECISION MAKER & POLICY ANALYST</text>
        <text x="550" y="634" textAnchor="middle" className="dg-small dg-small--dark">judgment · preferences · risk attitude · accountability</text>

        <path d="M550 540 V580" className="dg-connector" markerEnd="url(#arrow-arch)" />
        <path d="M610 585 V520" className="dg-connector" markerEnd="url(#arrow-arch-back)" />
        <text x="663" y="555" className="dg-small dg-small--muted">feedback</text>
      </svg>
    </DiagramFrame>
  )
}

export function ModelCenteredArchitecture() {
  return (
    <DiagramFrame
      title="Model-centered DSS: the model lifecycle"
      caption="The MBMS is the control layer around the model base. The modelling language expresses the model, while the solver executes a model instance."
    >
      <svg className="diagram-svg" viewBox="0 0 1080 580" {...dg} aria-label="Model-centered DSS architecture">
        <defs>
          <marker id="arrow-model" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" className="dg-arrowhead" />
          </marker>
          <marker id="arrow-model-back" markerWidth="8" markerHeight="8" refX="1" refY="4" orient="auto">
            <path d="M8,0 L0,4 L8,8 Z" className="dg-arrowhead" />
          </marker>
        </defs>
        <rect x="280" y="20" width="300" height="62" rx="10" className="dg-box dg-box--accent" />
        <text x="430" y="46" textAnchor="middle" className="dg-label dg-label--cyan">DECISION MAKER</text>
        <text x="430" y="66" textAnchor="middle" className="dg-small">objectives · risk preference · judgment</text>

        <path d="M430 82 V110" className="dg-connector" markerEnd="url(#arrow-model)" />

        <rect x="310" y="115" width="240" height="62" rx="10" className="dg-box" />
        <text x="430" y="141" textAnchor="middle" className="dg-text dg-text--strong">Interactive user interface</text>
        <text x="430" y="161" textAnchor="middle" className="dg-small">scenario · what-if · explanation</text>

        <path d="M430 177 V210" className="dg-connector" markerEnd="url(#arrow-model)" />

        <rect x="300" y="215" width="260" height="78" rx="12" className="dg-box dg-box--warm" />
        <text x="430" y="242" textAnchor="middle" className="dg-label dg-label--amber">MBMS</text>
        <text x="430" y="263" textAnchor="middle" className="dg-small">create · store · retrieve · link</text>
        <text x="430" y="281" textAnchor="middle" className="dg-small">execute · update · document</text>

        <path d="M570 245 H630" className="dg-connector" markerEnd="url(#arrow-model)" />
        <path d="M630 275 H574" className="dg-connector" markerEnd="url(#arrow-model-back)" />

        <rect x="640" y="215" width="260" height="78" rx="12" className="dg-box" />
        <text x="770" y="242" textAnchor="middle" className="dg-label">MODEL BASE</text>
        <text x="770" y="263" textAnchor="middle" className="dg-small">LP · NLP · MIP · simulation</text>
        <text x="770" y="281" textAnchor="middle" className="dg-small">forecasting · decision models</text>

        <path d="M430 293 V325" className="dg-connector" markerEnd="url(#arrow-model)" />
        <path d="M770 293 V325" className="dg-connector" markerEnd="url(#arrow-model)" />

        <rect x="300" y="330" width="260" height="68" rx="10" className="dg-box dg-box--accent" />
        <text x="430" y="356" textAnchor="middle" className="dg-text dg-text--strong">Modelling language</text>
        <text x="430" y="376" textAnchor="middle" className="dg-small">declarative model specification</text>

        <rect x="640" y="330" width="260" height="68" rx="10" className="dg-box" />
        <text x="770" y="356" textAnchor="middle" className="dg-text dg-text--strong">Solver / algorithm</text>
        <text x="770" y="376" textAnchor="middle" className="dg-small">LP · MIP · NLP · simulation engine</text>

        <path d="M560 364 H636" className="dg-connector" markerEnd="url(#arrow-model)" />
        <text x="598" y="356" textAnchor="middle" className="dg-small dg-small--muted">model instance</text>

        <path d="M430 398 V435" className="dg-connector" markerEnd="url(#arrow-model)" />
        <path d="M770 398 V435" className="dg-connector" markerEnd="url(#arrow-model)" />

        <rect x="300" y="440" width="600" height="68" rx="12" className="dg-box dg-box--warm" />
        <text x="600" y="466" textAnchor="middle" className="dg-label dg-label--amber">OUTPUT ANALYSIS · EXPLANATION · VISUALISATION</text>
        <text x="600" y="487" textAnchor="middle" className="dg-small">optimal values · scenarios · sensitivity · reports for the decision maker</text>

        <rect x="95" y="215" width="150" height="183" rx="12" className="dg-zone dg-zone--data" />
        <text x="170" y="242" textAnchor="middle" className="dg-small dg-small--cyan">SUPPORTING DATA</text>
        <text x="170" y="270" textAnchor="middle" className="dg-small">database</text>
        <text x="170" y="288" textAnchor="middle" className="dg-small">parameters</text>
        <text x="170" y="306" textAnchor="middle" className="dg-small">warehouse</text>
        <text x="170" y="324" textAnchor="middle" className="dg-small">spreadsheet</text>
        <text x="170" y="350" textAnchor="middle" className="dg-small dg-small--muted">model–data</text>
        <text x="170" y="368" textAnchor="middle" className="dg-small dg-small--muted">independence</text>
        <path d="M250 260 H295" className="dg-connector" markerEnd="url(#arrow-model)" />

        <rect x="935" y="215" width="120" height="183" rx="12" className="dg-zone dg-zone--model" />
        <text x="995" y="242" textAnchor="middle" className="dg-small dg-small--amber">USER</text>
        <text x="995" y="266" textAnchor="middle" className="dg-small">adds</text>
        <text x="995" y="284" textAnchor="middle" className="dg-small">judgment</text>
        <text x="995" y="302" textAnchor="middle" className="dg-small">and</text>
        <text x="995" y="320" textAnchor="middle" className="dg-small">insight</text>
        <path d="M905 275 H930" className="dg-connector" markerEnd="url(#arrow-model)" />
      </svg>
    </DiagramFrame>
  )
}

export function MbmsFunctionsDiagram() {
  const groups = [
    { title: 'Create', items: ['formulate', 'generate instance', 'edit', 'validate', 'document'] },
    { title: 'Manage', items: ['store / catalogue', 'retrieve', 'link & integrate', 'version control'] },
    { title: 'Use', items: ['execute solver', 'what-if / scenario', 'goal seeking', 'sensitivity', 'analyse results'] },
  ]
  return (
    <DiagramFrame
      title="What the MBMS actually does"
      caption="Think of the MBMS as the model-base counterpart of a DBMS: it manages the lifecycle, not just the storage location."
    >
      <div className="mbms-flow">
        {groups.map((group, index) => (
          <div className="mbms-group" key={group.title}>
            <div className="mbms-group__head"><span>0{index + 1}</span>{group.title}</div>
            <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        ))}
      </div>
    </DiagramFrame>
  )
}

export function ModelingHierarchyDiagram() {
  return (
    <DiagramFrame
      title="The three-level modeling hierarchy"
      caption="A model instance is not a different model. It is the same structure populated with numerical values for one decision situation."
      tone="cool"
    >
      <div className="model-hierarchy">
        <div className="model-level">
          <div className="model-level__num">01</div>
          <div>
            <span>MODELING DOMAIN / SYSTEM</span>
            <h4>Commodity production & shipping</h4>
            <p>The real-world system: plants, products, warehouses, capacities, demand, costs and the relationships among them.</p>
          </div>
          <div className="model-level__tag">entities + relationships</div>
        </div>
        <div className="model-arrow"><span>formalise</span>↓</div>
        <div className="model-level">
          <div className="model-level__num">02</div>
          <div>
            <span>SPECIFIC MODEL STRUCTURE</span>
            <h4>Mathematical specification</h4>
            <p>Sets, parameters, decision variables, objective function and constraints. The algebra is fixed; numbers are still symbols.</p>
          </div>
          <div className="model-level__tag">algebra + constraints</div>
        </div>
        <div className="model-arrow"><span>instantiate</span>↓</div>
        <div className="model-level model-level--accent">
          <div className="model-level__num">03</div>
          <div>
            <span>MODEL INSTANCE</span>
            <h4>Numerical model</h4>
            <p>Supply = 350, 600; demand = 325, 300, 275; cost matrix values. GAMS generates the instance and passes it to a solver.</p>
          </div>
          <div className="model-level__tag">numbers + solver</div>
        </div>
      </div>
    </DiagramFrame>
  )
}

export function EntityRelationshipDiagram() {
  return (
    <DiagramFrame
      title="Structured modeling of the production-shipping domain"
      caption="Entities hold known attributes; relationships carry the business links. Unknown outputs such as production quantity are not stored as known database facts — they are model variables to compute."
    >
      <svg className="diagram-svg" viewBox="0 0 1100 620" {...dg} aria-label="Entity relationship diagram of production shipping domain">
        <rect x="40" y="40" width="220" height="155" rx="12" className="dg-entity" />
        <text x="150" y="68" textAnchor="middle" className="dg-label dg-label--cyan">PLANT</text>
        <text x="65" y="96" className="dg-small">Plant # (K)</text>
        <text x="65" y="118" className="dg-small">Plant location (K)</text>
        <text x="65" y="140" className="dg-small dg-small--muted">Production capacity (K)</text>
        <text x="65" y="162" className="dg-small dg-small--muted">Production quantity (U)</text>
        <rect x="65" y="172" width="72" height="12" rx="6" className="dg-legend-known" />
        <text x="145" y="182" className="dg-small dg-small--muted">K = known · U = unknown</text>

        <rect x="440" y="40" width="220" height="130" rx="12" className="dg-entity" />
        <text x="550" y="68" textAnchor="middle" className="dg-label dg-label--cyan">ITEM</text>
        <text x="465" y="96" className="dg-small">Item # (K)</text>
        <text x="465" y="118" className="dg-small">Unit production cost (K)</text>
        <text x="465" y="140" className="dg-small dg-small--muted">Item name / category (K)</text>

        <rect x="840" y="40" width="220" height="130" rx="12" className="dg-entity" />
        <text x="950" y="68" textAnchor="middle" className="dg-label dg-label--cyan">WAREHOUSE</text>
        <text x="865" y="96" className="dg-small">Warehouse # (K)</text>
        <text x="865" y="118" className="dg-small">Warehouse location (K)</text>
        <text x="865" y="140" className="dg-small dg-small--muted">Capacity (K)</text>

        <path d="M260 115 H310" className="dg-connector" />
        <path d="M380 115 H435" className="dg-connector" />
        <polygon points="345,85 390,115 345,145 300,115" className="dg-relationship" />
        <text x="345" y="112" textAnchor="middle" className="dg-small dg-small--dark">produces</text>
        <text x="345" y="129" textAnchor="middle" className="dg-small dg-small--dark">capacity</text>

        <path d="M660 105 H710" className="dg-connector" />
        <path d="M780 105 H835" className="dg-connector" />
        <polygon points="745,75 790,105 745,135 700,105" className="dg-relationship" />
        <text x="745" y="102" textAnchor="middle" className="dg-small dg-small--dark">stores</text>
        <text x="745" y="119" textAnchor="middle" className="dg-small dg-small--dark">demand</text>

        <rect x="330" y="300" width="440" height="92" rx="14" className="dg-box dg-box--accent" />
        <text x="550" y="330" textAnchor="middle" className="dg-label dg-label--cyan">SHIPMENT RELATIONSHIP</text>
        <text x="550" y="355" textAnchor="middle" className="dg-small">plant i × item j × warehouse k</text>
        <text x="550" y="375" textAnchor="middle" className="dg-small">unit shipping cost S(i,j,k) (K) · amount shipped T(i,j,k) (U)</text>

        <path d="M150 195 V346 H325" className="dg-connector" markerEnd="url(#arrow-er)" />
        <path d="M550 170 V295" className="dg-connector" markerEnd="url(#arrow-er)" />
        <path d="M950 170 V346 H775" className="dg-connector" markerEnd="url(#arrow-er)" />
        <defs>
          <marker id="arrow-er" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" className="dg-arrowhead" />
          </marker>
        </defs>

        <rect x="40" y="445" width="1020" height="125" rx="14" className="dg-zone dg-zone--data" />
        <text x="65" y="474" className="dg-label dg-label--cyan">DATABASE DESIGN (KNOWN ATTRIBUTES ONLY)</text>
        <text x="65" y="500" className="dg-small">PLANT (Plant#, Location) · ITEM (Item#, Unit_Production_Cost) · WAREHOUSE (Warehouse#, Location)</text>
        <text x="65" y="522" className="dg-small">PLANT_ITEM (Plant#, Item#, Production_Capacity) · WAREHOUSE_ITEM (Warehouse#, Item#, Demand)</text>
        <text x="65" y="544" className="dg-small">PLANT_ITEM_WAREHOUSE (Plant#, Item#, Warehouse#, Unit_Shipping_Cost)</text>
      </svg>
    </DiagramFrame>
  )
}

export function MathModelStructure() {
  return (
    <DiagramFrame
      title="Anatomy of an optimisation model"
      caption="Every mathematical programme has data, decision variables, an objective, constraints and a solution interpretation. GAMS gives each a declared representation."
    >
      <div className="math-model">
        <div className="math-model__inputs">
          <span className="math-model__label">KNOWN</span>
          <div className="math-model__box"><strong>Sets & indices</strong><small>i plants · j markets</small></div>
          <div className="math-model__box"><strong>Parameters</strong><small>supply · demand · cost</small></div>
        </div>
        <div className="math-model__core">
          <div className="math-model__header">DECISION MODEL</div>
          <div className="math-model__equation">
            <span>min / max</span>
            <strong>Objective function</strong>
            <small>what we want to optimise</small>
          </div>
          <div className="math-model__equation">
            <span>subject to</span>
            <strong>Constraints / equations</strong>
            <small>what is physically or logically possible</small>
          </div>
          <div className="math-model__variables">
            <span className="math-model__label">CHOOSE</span>
            <strong>Decision variables</strong>
            <small>x(i,j) ≥ 0</small>
          </div>
        </div>
        <div className="math-model__output">
          <span className="math-model__label">RESULT</span>
          <div className="math-model__box math-model__box--accent"><strong>Optimal solution</strong><small>values · objective · status</small></div>
          <div className="math-model__box"><strong>Analysis</strong><small>scenarios · sensitivity · risk</small></div>
        </div>
      </div>
    </DiagramFrame>
  )
}

export function GamsWorkflowDiagram() {
  return (
    <DiagramFrame
      title="From a real problem to a GAMS result"
      caption="The workflow is modular in both directions: you can change data, model algebra or solver without rewriting the whole program."
    >
      <div className="gams-workflow">
        {[
          ['01', 'Problem', 'define the decision, objective and constraints'],
          ['02', 'Sets', 'name the indices and members'],
          ['03', 'Data', 'parameters, tables, scalars'],
          ['04', 'Variables', 'decision variables + bounds'],
          ['05', 'Equations', 'objective and constraints'],
          ['06', 'Model', 'declare which equations form the model'],
          ['07', 'Solve', 'select problem class and direction'],
          ['08', 'Results', 'display · interpret · communicate'],
        ].map(([n, title, sub], index) => (
          <div className="gams-step" key={n}>
            <div className="gams-step__n">{n}</div>
            <strong>{title}</strong>
            <small>{sub}</small>
            {index < 7 && <span className="gams-step__arrow">→</span>}
          </div>
        ))}
      </div>
      <div className="gams-keywords">
        <span>SET</span><span>PARAMETER</span><span>TABLE</span><span>SCALAR</span><span>VARIABLE</span><span>EQUATION</span><span>MODEL</span><span>SOLVE</span><span>DISPLAY</span>
      </div>
    </DiagramFrame>
  )
}

export function ProductionNetworkDiagram() {
  return (
    <DiagramFrame
      title="Production and shipping network"
      caption="Two factories, multiple products, warehouses/markets. Production quantities Q(i,j) and shipments T(i,j,k) connect capacity and demand.">
      <svg className="diagram-svg" viewBox="0 0 1100 520" {...dg} aria-label="Production and shipping network">
        <defs>
          <marker id="arrow-net" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" className="dg-arrowhead dg-arrowhead--cyan" />
          </marker>
        </defs>
        <text x="120" y="28" textAnchor="middle" className="dg-small dg-small--muted">PLANTS / FACTORIES</text>
        <text x="550" y="28" textAnchor="middle" className="dg-small dg-small--muted">ITEMS / PRODUCTS</text>
        <text x="960" y="28" textAnchor="middle" className="dg-small dg-small--muted">WAREHOUSES / MARKETS</text>

        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x="45" y={95 + i * 110} width="150" height="68" rx="10" className="dg-box" />
            <text x="120" y={122 + i * 110} textAnchor="middle" className="dg-text dg-text--strong">Plant {i + 1}</text>
            <text x="120" y={143 + i * 110} textAnchor="middle" className="dg-small">{['capacity 350', 'capacity 600', 'capacity C(i,j)'][i]}</text>
          </g>
        ))}
        {[0, 1, 2].map((j) => (
          <g key={j}>
            <rect x="460" y={80 + j * 115} width="180" height="70" rx="10" className="dg-box dg-box--warm" />
            <text x="550" y={108 + j * 115} textAnchor="middle" className="dg-text dg-text--strong">Product {j + 1}</text>
            <text x="550" y={129 + j * 115} textAnchor="middle" className="dg-small">Q(i,j) · T(i,j,k)</text>
          </g>
        ))}
        {[0, 1, 2, 3].map((k) => (
          <g key={k}>
            <rect x="885" y={65 + k * 100} width="150" height="64" rx="10" className="dg-box dg-box--accent" />
            <text x="960" y={91 + k * 100} textAnchor="middle" className="dg-text dg-text--strong">Market {k + 1}</text>
            <text x="960" y={111 + k * 100} textAnchor="middle" className="dg-small">demand D(j,k)</text>
          </g>
        ))}
        {[0, 1, 2].map((i) =>
          [0, 1, 2].map((j) => (
            <path
              key={`pi-${i}-${j}`}
              d={`M195 ${129 + i * 110} C300 ${129 + i * 110}, 340 ${115 + j * 115}, 455 ${115 + j * 115}`}
              className="net-line"
              markerEnd="url(#arrow-net)"
            />
          )),
        )}
        {[0, 1, 2].map((j) =>
          [0, 1, 2, 3].map((k) => (
            <path
              key={`jw-${j}-${k}`}
              d={`M640 ${115 + j * 115} C750 ${115 + j * 115}, 790 ${95 + k * 100}, 880 ${95 + k * 100}`}
              className="net-line net-line--amber"
              markerEnd="url(#arrow-net)"
            />
          )),
        )}
        <rect x="280" y="420" width="540" height="72" rx="12" className="dg-box dg-box--solid" />
        <text x="550" y="446" textAnchor="middle" className="dg-label dg-label--dark">OBJECTIVE: MINIMISE PRODUCTION + SHIPPING COST</text>
        <text x="550" y="468" textAnchor="middle" className="dg-small dg-small--dark">subject to production capacity and market demand</text>
      </svg>
    </DiagramFrame>
  )
}
