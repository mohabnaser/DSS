import { DiagramFrame } from '../ui'

const dg = { role: 'img' as const }

export function DecisionCycleDiagram() {
  const stages = [
    { n: '1', title: 'Identify & bound', sub: 'problem / opportunity' },
    { n: '2', title: 'Gather data', sub: 'internal + external' },
    { n: '3', title: 'Analyse', sub: 'facts, knowledge, risk' },
    { n: '4', title: 'Develop options', sub: 'alternatives + costs' },
    { n: '5', title: 'Decide', sub: 'select appropriate option' },
    { n: '6', title: 'Approve', sub: 'validate + communicate' },
    { n: '7', title: 'Implement', sub: 'execute + follow up' },
  ]

  // Seven cards placed around a clock; each path starts below one card and ends above the next.
  const positions = [
    { x: 430, y: 22 },
    { x: 720, y: 88 },
    { x: 800, y: 268 },
    { x: 720, y: 448 },
    { x: 430, y: 518 },
    { x: 150, y: 448 },
    { x: 65, y: 268 },
  ]

  return (
    <DiagramFrame
      title="The decision-support cycle"
      caption="The cycle is deliberately closed: implementation results and feedback reopen problem identification. DSS tools support analysis and choice, not the replacement of judgment or approval."
      tone="cool"
    >
      <svg className="diagram-svg" viewBox="0 0 1060 630" {...dg} aria-label="Seven-stage decision support cycle">
        <defs>
          <marker id="arrow-cycle" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
            <path d="M0,0 L9,4.5 L0,9 Z" className="dg-arrowhead dg-arrowhead--cyan" />
          </marker>
        </defs>
        <ellipse cx="530" cy="315" rx="350" ry="240" className="cycle-orbit" />
        <circle cx="530" cy="315" r="110" className="cycle-center" />
        <text x="530" y="298" textAnchor="middle" className="dg-label dg-label--cyan">DSS + JUDGMENT</text>
        <text x="530" y="323" textAnchor="middle" className="dg-small">data · models · knowledge</text>
        <text x="530" y="345" textAnchor="middle" className="dg-small">→ supported choice</text>

        {stages.map((stage, index) => {
          const pos = positions[index]
          const cardW = 200
          const cardH = 82
          return (
            <g key={stage.n}>
              <rect x={pos.x} y={pos.y} width={cardW} height={cardH} rx="12" className="dg-box dg-box--cycle" />
              <circle cx={pos.x + 22} cy={pos.y + 23} r="14" className="cycle-num" />
              <text x={pos.x + 22} y={pos.y + 27.5} textAnchor="middle" className="cycle-num-text">{stage.n}</text>
              <text x={pos.x + 44} y={pos.y + 26} className="dg-text dg-text--strong">{stage.title}</text>
              <text x={pos.x + 44} y={pos.y + 46} className="dg-small">{stage.sub}</text>
              <text x={pos.x + 20} y={pos.y + 67} className="dg-small dg-small--muted">
                {index === 0 && 'formulate the problem'}
                {index === 1 && 'plan & estimate data'}
                {index === 2 && 'evaluate impacts & risks'}
                {index === 3 && 'compare cost & impact'}
                {index === 4 && 'choice under judgment'}
                {index === 5 && 'approve & communicate'}
                {index === 6 && 'follow-up loops back'}
              </text>
            </g>
          )
        })}

        {/* Clean edge-to-edge clockwise arrows between the 7 stage cards */}
        <path d="M634 60 C675 62, 695 85, 716 112" className="cycle-arrow" markerEnd="url(#arrow-cycle)" />
        <path d="M855 174 C880 205, 895 232, 900 262" className="cycle-arrow" markerEnd="url(#arrow-cycle)" />
        <path d="M900 354 C895 388, 880 415, 855 442" className="cycle-arrow" markerEnd="url(#arrow-cycle)" />
        <path d="M716 502 C688 528, 665 548, 636 556" className="cycle-arrow" markerEnd="url(#arrow-cycle)" />
        <path d="M426 556 C395 548, 372 528, 354 502" className="cycle-arrow" markerEnd="url(#arrow-cycle)" />
        <path d="M210 444 C185 415, 170 388, 165 356" className="cycle-arrow" markerEnd="url(#arrow-cycle)" />
        <path d="M165 264 C175 145, 285 72, 424 62" className="cycle-arrow" markerEnd="url(#arrow-cycle)" />

        <g>
          <rect x="195" y="136" width="212" height="26" rx="13" className="dg-box dg-box--accent" />
          <text x="301" y="153" textAnchor="middle" className="dg-small dg-small--cyan">feedback reopens the cycle ↺</text>
        </g>
      </svg>
    </DiagramFrame>
  )
}

export function SupportSystemMap() {
  const groups = [
    {
      title: 'Information systems',
      accent: 'blue',
      systems: ['MIS', 'OLTP / relational DB', 'Reporting'],
      note: 'Structured operations and planned reports',
    },
    {
      title: 'Analytical support',
      accent: 'cyan',
      systems: ['DSS', 'Data-centered / model-centered', 'BI & BA'],
      note: 'Semi-structured decisions, models and analysis',
    },
    {
      title: 'Executive & group',
      accent: 'amber',
      systems: ['EIS / ESS', 'Enterprise IS', 'GDSS / GSS'],
      note: 'Strategic dashboards and collaborative decisions',
    },
    {
      title: 'Knowledge & intelligence',
      accent: 'violet',
      systems: ['Expert Systems', 'Knowledge-based DSS', 'AI / Gen-AI'],
      note: 'Rules, expertise and explanation',
    },
  ]
  return (
    <div className="support-map">
      <div className="support-map__rail">
        <span>OPERATIONAL</span>
        <span>ANALYTICAL</span>
        <span>STRATEGIC</span>
      </div>
      <div className="support-map__grid">
        {groups.map((group) => (
          <div className={`support-map-card support-map-card--${group.accent}`} key={group.title}>
            <h4>{group.title}</h4>
            <div className="support-map-card__systems">
              {group.systems.map((system) => <span key={system}>{system}</span>)}
            </div>
            <p>{group.note}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ExecutiveDecisionFlow() {
  return (
    <DiagramFrame
      title="Executive decision-making process"
      caption="Scanning turns internal and external signals into an interpreted problem or opportunity; only then does the decision cycle move into action."
    >
      <div className="exec-flow">
        <div className="exec-flow__row">
          <div className="exec-source">
            <span>EXTERNAL ENVIRONMENT</span>
            <small>market information · prices · economic indicators</small>
            <em>Scanning</em>
          </div>
          <div className="exec-source">
            <span>INTERNAL ENVIRONMENT</span>
            <small>finance · marketing · production · accounting</small>
            <em>Scanning</em>
          </div>
        </div>
        <div className="exec-arrow">↓</div>
        <div className="exec-node">Evaluation of environment</div>
        <div className="exec-split">
          <div className="exec-node exec-node--soft">Qualitative analysis</div>
          <div className="exec-node exec-node--soft">Quantitative analysis</div>
        </div>
        <div className="exec-arrow">↓</div>
        <div className="exec-diamond">Interpretation:<br />problem / opportunity?</div>
        <div className="exec-loop">
          <span className="exec-loop__no">No → rescan</span>
          <span className="exec-loop__yes">Yes → decision: what to do?</span>
        </div>
        <div className="exec-arrow">↓</div>
        <div className="exec-node exec-node--accent">Phase II · decision and action</div>
      </div>
    </DiagramFrame>
  )
}

export function AiEvolution() {
  const stages = [
    { name: 'Machine Learning', detail: 'learn patterns from data', tags: 'supervised · unsupervised · reinforcement' },
    { name: 'Artificial Neural Networks', detail: 'layers of connected artificial neurons', tags: 'input · hidden · output' },
    { name: 'Deep Learning', detail: 'many intermediate layers', tags: 'NLP · vision · speech · generative' },
    { name: 'Gen-AI / LLMs', detail: 'large-scale generative models', tags: 'transformers · GPT · Gemini' },
  ]
  return (
    <DiagramFrame
      title="From expert systems to advanced generative AI"
      caption="The evolution changes the learning mechanism, not the DSS principle: the decision maker still needs interpretation, verification and judgment."
    >
      <div className="ai-evolution">
        {stages.map((stage, index) => (
          <div className="ai-evolution__item" key={stage.name}>
            <div className="ai-evolution__num">0{index + 1}</div>
            <div className="ai-evolution__card">
              <h4>{stage.name}</h4>
              <p>{stage.detail}</p>
              <span>{stage.tags}</span>
            </div>
            {index < stages.length - 1 && <div className="ai-evolution__arrow">→</div>}
          </div>
        ))}
      </div>
    </DiagramFrame>
  )
}
