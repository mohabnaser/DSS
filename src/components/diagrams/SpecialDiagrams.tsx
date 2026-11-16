import { DiagramFrame } from '../ui'

export function SimulationTimeline() {
  return (
    <DiagramFrame
      title="A customer’s path through a two-stage service system"
      caption="Discrete-event simulation jumps from event to event: arrival, begin service, end service, next machine, departure."
    >
      <svg className="diagram-svg" viewBox="0 0 1040 340" role="img" aria-label="Simulation timeline of a customer through two machines">
        <line x1="65" y1="210" x2="970" y2="210" className="timeline-axis" />
        <text x="52" y="215" className="dg-small dg-small--muted">0</text>
        <text x="960" y="236" className="dg-small dg-small--muted">TIME →</text>

        <circle cx="110" cy="210" r="5" className="timeline-dot" />
        <line x1="110" y1="205" x2="110" y2="100" className="timeline-marker" />
        <rect x="45" y="55" width="170" height="45" rx="8" className="dg-box" />
        <text x="130" y="76" textAnchor="middle" className="dg-text dg-text--strong">Customer arrival</text>
        <text x="130" y="92" textAnchor="middle" className="dg-small">event: create entity</text>

        <rect x="245" y="130" width="190" height="55" rx="9" className="dg-box dg-box--accent" />
        <text x="340" y="152" textAnchor="middle" className="dg-label dg-label--cyan">MACHINE 1</text>
        <text x="340" y="171" textAnchor="middle" className="dg-small">begin → end service</text>
        <line x1="270" y1="208" x2="270" y2="190" className="timeline-marker" />
        <line x1="420" y1="208" x2="420" y2="190" className="timeline-marker" />
        <text x="270" y="232" textAnchor="middle" className="dg-small">begin</text>
        <text x="420" y="232" textAnchor="middle" className="dg-small">end</text>

        <rect x="500" y="130" width="190" height="55" rx="9" className="dg-box dg-box--accent" />
        <text x="595" y="152" textAnchor="middle" className="dg-label dg-label--cyan">MACHINE 2</text>
        <text x="595" y="171" textAnchor="middle" className="dg-small">begin → end service</text>
        <line x1="530" y1="208" x2="530" y2="190" className="timeline-marker" />
        <line x1="670" y1="208" x2="670" y2="190" className="timeline-marker" />
        <text x="530" y="232" textAnchor="middle" className="dg-small">begin</text>
        <text x="670" y="232" textAnchor="middle" className="dg-small">end</text>

        <circle cx="800" cy="210" r="5" className="timeline-dot timeline-dot--amber" />
        <line x1="800" y1="205" x2="800" y2="100" className="timeline-marker timeline-marker--amber" />
        <rect x="725" y="55" width="160" height="45" rx="8" className="dg-box dg-box--warm" />
        <text x="805" y="76" textAnchor="middle" className="dg-text dg-text--strong">Customer departure</text>
        <text x="805" y="92" textAnchor="middle" className="dg-small">dispose entity</text>

        <path d="M110 250 H800" className="timeline-process" />
        <text x="455" y="282" textAnchor="middle" className="dg-small dg-small--cyan">PROCESS OF CUSTOMER · queues and service delays occur between events</text>
        <path d="M130 100 C155 160 200 185 265 194" className="dg-connector" />
        <path d="M420 194 C460 160 480 160 527 194" className="dg-connector" />
        <path d="M670 194 C720 160 755 135 800 108" className="dg-connector" />
      </svg>
    </DiagramFrame>
  )
}

export function GasStationProcess() {
  return (
    <DiagramFrame
      title="Single-pump gas-station process"
      caption="The diamond is a decision, not a delay. If the pump is unavailable, the car joins a queue and waits; otherwise it begins service immediately."
      tone="cool"
    >
      <div className="process-flow">
        <div className="process-row">
          <div className="process-node process-node--start">CAR PROCESS</div>
          <span className="process-arrow">→</span>
          <div className="process-node">Generate next arrival time</div>
          <span className="process-arrow">→</span>
          <div className="process-node">Schedule arrival</div>
          <span className="process-arrow">→</span>
          <div className="process-diamond"><span>◆ Decision:<br />Pump available?</span></div>
        </div>
        <div className="process-branches">
          <div className="process-branch process-branch--no">
            <span className="process-branch__label">NO · conditional delay</span>
            <div className="process-chain">
              <span>Create record</span><b>→</b><span>File in queue</span><b>→</b><span>Wait</span><b>→</b><span>Remove from queue</span><b>→</b><span>Destroy record</span>
            </div>
          </div>
          <div className="process-branch process-branch--yes">
            <span className="process-branch__label">YES · uncond. delay</span>
            <div className="process-chain">
              <span>Seize pump</span><b>→</b><span>Determine service time</span><b>→</b><span>Fill gas</span><b>→</b><span>Release pump</span><b>→</b><span>Depart</span>
            </div>
          </div>
        </div>
      </div>
    </DiagramFrame>
  )
}

export function ArenaModuleMap() {
  const flowModules = ['Create', 'Dispose', 'Process', 'Decide', 'Batch', 'Separate', 'Assign', 'Record']
  const dataModules = ['Entity', 'Queue', 'Resource', 'Variable', 'Schedule', 'Set']
  return (
    <DiagramFrame
      title="The Arena modelling vocabulary"
      caption="Arena separates the visible process flowchart from the spreadsheet-style data modules that define entities, resources and queues."
    >
      <div className="arena-map">
        <div className="arena-map__pane">
          <div className="arena-map__head"><span>FLOWCHART MODULES</span><small>describe behaviour</small></div>
          <div className="arena-chip-grid">
            {flowModules.map((item) => <span key={item} className="arena-chip arena-chip--flow">{item}</span>)}
          </div>
          <p>Process flow: an entity is created, waits for a resource, is processed, possibly split/batched/assigned attributes, recorded, and disposed.</p>
        </div>
        <div className="arena-map__pane">
          <div className="arena-map__head"><span>DATA MODULES</span><small>describe the system</small></div>
          <div className="arena-chip-grid">
            {dataModules.map((item) => <span key={item} className="arena-chip arena-chip--data">{item}</span>)}
          </div>
          <p>Data modules hold the parameters behind the flow: arrival distributions, queue capacity, resource counts, variables and schedules.</p>
        </div>
        <div className="arena-map__footer">
          <span>Model window: flowchart view ↔ spreadsheet view</span>
          <span>Run setup: replications · warm-up · length · statistics</span>
        </div>
      </div>
    </DiagramFrame>
  )
}

export function AhpHierarchy() {
  const criteria = ['Experience', 'Salary needs', 'Education', 'Personality']
  const alternatives = ['Aly', 'Mohamed', 'Hassan']
  return (
    <DiagramFrame
      title="AHP decision hierarchy"
      caption="The hierarchy moves from the overall goal, through criteria that express the decision maker’s values, to the alternatives being compared."
      tone="warm"
    >
      <div className="ahp-hierarchy">
        <div className="ahp-level-label">LEVEL 1 · GOAL</div>
        <div className="ahp-goal">Select the best candidate for the marketing position</div>
        <div className="ahp-tree-lines ahp-tree-lines--one" />
        <div className="ahp-level-label">LEVEL 2 · CRITERIA</div>
        <div className="ahp-criteria">
          {criteria.map((criterion) => (
            <div className="ahp-criterion" key={criterion}>{criterion}</div>
          ))}
        </div>
        <div className="ahp-tree-lines ahp-tree-lines--two" />
        <div className="ahp-level-label">LEVEL 3 · ALTERNATIVES</div>
        <div className="ahp-alternatives">
          {alternatives.map((alternative) => (
            <div className="ahp-alternative" key={alternative}>{alternative}</div>
          ))}
        </div>
        <div className="ahp-note">Pairwise comparisons at each level → local priorities → weighted composite → highest priority wins.</div>
      </div>
    </DiagramFrame>
  )
}

export function SaatyScale() {
  const rows = [
    ['1', 'Equal importance', 'Two activities contribute equally to the objective'],
    ['3', 'Moderate importance', 'Experience and judgment slightly favour one over another'],
    ['5', 'Strong / essential importance', 'Strong favour demonstrated over time'],
    ['7', 'Very strong importance', 'Dominance demonstrated in practice'],
    ['9', 'Extreme importance', 'Evidence favouring one is of the highest possible order'],
    ['2, 4, 6, 8', 'Intermediate values', 'Compromise between adjacent judgments'],
    ['Reciprocal', 'Reverse comparison', 'If i vs j = a, then j vs i = 1/a'],
  ]
  return (
    <DiagramFrame
      title="Saaty’s scale of relative importance"
      caption="The numbers convert qualitative judgment into comparable ratios. The reciprocal rule is what makes the pairwise matrix consistent by construction."
    >
      <div className="saaty-scale">
        {rows.map(([intensity, label, meaning]) => (
          <div className="saaty-row" key={label}>
            <span className="saaty-row__number">{intensity}</span>
            <strong>{label}</strong>
            <p>{meaning}</p>
          </div>
        ))}
      </div>
    </DiagramFrame>
  )
}
