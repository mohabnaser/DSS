import { DiagramFrame } from '../ui'

const dg = { role: 'img' as const }

export function DataKnowledgeFlow() {
  return (
    <DiagramFrame
      title="From raw data to an actionable decision"
      caption="Each step adds context, interpretation and judgment. Volume generally falls as value and actionability rise."
      tone="cool"
    >
      <svg className="diagram-svg" viewBox="0 0 1040 270" {...dg} aria-label="Data to information to knowledge to decision">
        <defs>
          <marker id="arrow-dik" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" className="dg-arrowhead" />
          </marker>
        </defs>
        <rect x="20" y="66" width="210" height="120" rx="14" className="dg-box" />
        <text x="125" y="96" textAnchor="middle" className="dg-label">DATA</text>
        <text x="125" y="122" textAnchor="middle" className="dg-text">Measurements, facts,</text>
        <text x="125" y="141" textAnchor="middle" className="dg-text">raw records</text>
        <text x="125" y="166" textAnchor="middle" className="dg-small">“31, 44, 29…”</text>

        <path d="M245 126 H310" className="dg-connector" markerEnd="url(#arrow-dik)" />

        <rect x="325" y="66" width="220" height="120" rx="14" className="dg-box dg-box--accent" />
        <text x="435" y="96" textAnchor="middle" className="dg-label dg-label--cyan">INFORMATION</text>
        <text x="435" y="122" textAnchor="middle" className="dg-text">Organised, computed,</text>
        <text x="435" y="141" textAnchor="middle" className="dg-text">analysed, projected data</text>
        <text x="435" y="166" textAnchor="middle" className="dg-small">“Sales fell 9% in Q3”</text>

        <path d="M560 126 H625" className="dg-connector" markerEnd="url(#arrow-dik)" />

        <rect x="640" y="66" width="210" height="120" rx="14" className="dg-box dg-box--amber" />
        <text x="745" y="96" textAnchor="middle" className="dg-label dg-label--amber">KNOWLEDGE</text>
        <text x="745" y="122" textAnchor="middle" className="dg-text">Contextual, relevant,</text>
        <text x="745" y="141" textAnchor="middle" className="dg-text">actionable information</text>
        <text x="745" y="166" textAnchor="middle" className="dg-small">“Discount competitor A”</text>

        <path d="M865 126 H930" className="dg-connector" markerEnd="url(#arrow-dik)" />

        <rect x="945" y="78" width="76" height="96" rx="38" className="dg-box dg-box--solid" />
        <text x="983" y="119" textAnchor="middle" className="dg-label dg-label--dark">DECISION</text>
        <text x="983" y="138" textAnchor="middle" className="dg-small dg-small--dark">+ judgment</text>

        <path d="M282 205 H340" className="dg-mini-line" />
        <text x="350" y="209" className="dg-small">more volume</text>
        <path d="M628 205 H688" className="dg-mini-line" />
        <text x="698" y="209" className="dg-small">more context</text>
        <path d="M896 205 H944" className="dg-mini-line" />
        <text x="954" y="205" className="dg-small">action</text>
      </svg>
    </DiagramFrame>
  )
}

export function VUCAFramework() {
  const items = [
    { letter: 'V', name: 'Volatility', sub: 'Instability / variability', q: 'How fast is the environment changing?' },
    { letter: 'U', name: 'Uncertainty', sub: 'Uncertain and risky environment', q: 'How little can we predict?' },
    { letter: 'C', name: 'Complexity', sub: 'Complicated interactions', q: 'How many interacting variables?' },
    { letter: 'A', name: 'Ambiguity', sub: 'Unclear, unexplained, irrational', q: 'How unclear is the meaning of events?' },
  ]
  return (
    <DiagramFrame
      title="The VUCA decision environment"
      caption="VUCA describes the conditions that make unaided intuition insufficient and motivate analytical decision support."
    >
      <div className="vuca-grid">
        {items.map((item) => (
          <div className="vuca-card" key={item.letter}>
            <span className="vuca-card__letter">{item.letter}</span>
            <div>
              <strong>{item.name}</strong>
              <span>{item.sub}</span>
              <p>{item.q}</p>
            </div>
          </div>
        ))}
      </div>
    </DiagramFrame>
  )
}

export function HindsightInsightForesight() {
  const columns = [
    {
      n: '01',
      title: 'Hindsight',
      question: 'What happened? What is happening?',
      desc: 'Previous or historical data; analytical queries and reporting.',
      tools: 'Data warehouse · OLAP · reports',
      tone: 'blue',
    },
    {
      n: '02',
      title: 'Insight',
      question: 'Why is it happening? What pattern exists?',
      desc: 'Relationships among data and variables: patterns, classification, dependence, clusters and association.',
      tools: 'Statistical analysis · data mining',
      tone: 'cyan',
    },
    {
      n: '03',
      title: 'Foresight',
      question: 'What will happen? What if? What is best?',
      desc: 'Future, expected, projected and planned indicators; scenario and alternative evaluation.',
      tools: 'Modelling · simulation · optimisation · ES',
      tone: 'amber',
    },
  ]
  return (
    <DiagramFrame
      title="Hindsight → Insight → Foresight"
      caption="This is the central analytical lens of the course: different DSS tools answer different kinds of managerial questions."
      tone="warm"
    >
      <div className="hif-grid">
        {columns.map((col, index) => (
          <div className={`hif-card hif-card--${col.tone}`} key={col.title}>
            <div className="hif-card__top">
              <span>{col.n}</span>
              <div className="hif-card__arrow">{index < 2 ? '→' : '◎'}</div>
            </div>
            <h4>{col.title}</h4>
            <p className="hif-card__q">{col.question}</p>
            <p>{col.desc}</p>
            <span className="hif-card__tools">{col.tools}</span>
          </div>
        ))}
      </div>
    </DiagramFrame>
  )
}

export function DevelopmentPath() {
  const academic = [
    ['01', 'Data-centered DSS', 'Hindsight', 'DW · OLAP · MDDB · ad-hoc reporting'],
    ['02', 'Data-centered DSS+', 'Hindsight + insight', 'Data mining · statistics'],
    ['03', 'Model-centered DSS', 'Foresight', 'Optimisation · simulation · models'],
    ['04', 'Intelligent / KB DSS', 'Foresight + explanation', 'AI · expert systems'],
    ['05', 'Specialised DSS', 'Context-specific', 'Group · executive · expertise systems'],
  ]
  const business = [
    ['01', 'Basic DSS', 'Descriptive', 'Data warehouse · reporting'],
    ['02', 'Business Intelligence', 'Predictive', 'Data mining · forecasting · what-if'],
    ['03', 'Business Analytics', 'Prescriptive', 'Optimisation · simulation · decision models'],
    ['04', 'Advanced BA', 'Adaptive', 'Web/group support · advanced analytics'],
  ]
  return (
    <DiagramFrame
      title="Two development paths, one direction"
      caption="The academic path traces DSS technology; the business path mirrors it as descriptive → predictive → prescriptive analytics."
      tone="cool"
    >
      <div className="path-layout">
        <div className="path-column">
          <div className="path-column__head"><span>Academic approach</span><strong>Systems & analytical tools</strong></div>
          {academic.map(([n, title, lens, tools]) => (
            <div className="path-step" key={n}>
              <span className="path-step__n">{n}</span>
              <div><strong>{title}</strong><small>{tools}</small></div>
              <span className="path-step__tag">{lens}</span>
            </div>
          ))}
        </div>
        <div className="path-divider"><span>＋</span></div>
        <div className="path-column">
          <div className="path-column__head"><span>Business approach</span><strong>Systems & analytics maturity</strong></div>
          {business.map(([n, title, lens, tools]) => (
            <div className="path-step" key={n}>
              <span className="path-step__n">{n}</span>
              <div><strong>{title}</strong><small>{tools}</small></div>
              <span className="path-step__tag">{lens}</span>
            </div>
          ))}
        </div>
      </div>
    </DiagramFrame>
  )
}

export function SupportHierarchy() {
  return (
    <DiagramFrame
      title="Who each support system serves"
      caption="The hierarchy is not a strict ladder of software quality: each layer addresses a different management level, decision type and analytical depth."
    >
      <svg className="diagram-svg" viewBox="0 0 1000 500" {...dg} aria-label="Management support hierarchy">
        <defs>
          <marker id="arrow-hier" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" className="dg-arrowhead" />
          </marker>
        </defs>
        <path d="M210 455 L790 455 L710 335 L290 335 Z" className="dg-tier dg-tier--base" />
        <path d="M290 320 L710 320 L630 205 L370 205 Z" className="dg-tier dg-tier--mid" />
        <path d="M370 190 L630 190 L560 80 L440 80 Z" className="dg-tier dg-tier--top" />

        <text x="500" y="433" textAnchor="middle" className="dg-label">OPERATIONAL CONTROL</text>
        <text x="500" y="410" textAnchor="middle" className="dg-text">Structured · short-term · internal data</text>
        <text x="500" y="385" textAnchor="middle" className="dg-small">Transaction database</text>

        <text x="500" y="298" textAnchor="middle" className="dg-label">MANAGERIAL CONTROL</text>
        <text x="500" y="275" textAnchor="middle" className="dg-text">Semi-structured · medium-term · internal + external</text>
        <text x="500" y="250" textAnchor="middle" className="dg-small">Medium-size analytical database</text>

        <text x="500" y="165" textAnchor="middle" className="dg-label">STRATEGIC PLANNING</text>
        <text x="500" y="142" textAnchor="middle" className="dg-text">Unstructured · long-term · high uncertainty</text>
        <text x="500" y="119" textAnchor="middle" className="dg-small">External + internal information</text>

        <g className="dg-callout">
          <rect x="58" y="384" width="190" height="70" rx="10" className="dg-box dg-box--accent" />
          <text x="153" y="413" textAnchor="middle" className="dg-label dg-label--cyan">MIS</text>
          <text x="153" y="436" textAnchor="middle" className="dg-small">planned reports</text>
        </g>
        <g className="dg-callout">
          <rect x="50" y="247" width="190" height="70" rx="10" className="dg-box dg-box--accent" />
          <text x="145" y="276" textAnchor="middle" className="dg-label dg-label--cyan">DSS</text>
          <text x="145" y="299" textAnchor="middle" className="dg-small">models + ad-hoc analysis</text>
        </g>
        <g className="dg-callout">
          <rect x="760" y="101" width="190" height="70" rx="10" className="dg-box dg-box--amber" />
          <text x="855" y="130" textAnchor="middle" className="dg-label dg-label--amber">EIS / ESS</text>
          <text x="855" y="153" textAnchor="middle" className="dg-small">executive dashboard</text>
        </g>

        <path d="M248 396 H340" className="dg-connector" markerEnd="url(#arrow-hier)" />
        <path d="M240 282 H345" className="dg-connector" markerEnd="url(#arrow-hier)" />
        <path d="M760 142 H700" className="dg-connector" markerEnd="url(#arrow-hier)" />

        <text x="825" y="302" textAnchor="middle" className="dg-small dg-small--muted">More structured</text>
        <text x="825" y="322" textAnchor="middle" className="dg-small dg-small--muted">More analytical →</text>
      </svg>
    </DiagramFrame>
  )
}
