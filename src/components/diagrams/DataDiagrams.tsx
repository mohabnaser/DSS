import { useState } from 'react'
import { DiagramFrame } from '../ui'
import { Icon } from '../Icon'

export function DataPipelineDiagram({ showReporting = true }: { showReporting?: boolean }) {
  return (
    <DiagramFrame
      title="Data-centered DSS: the analytical pipeline"
      caption="ETL turns operational records into integrated analytical data; OLAP, reporting and data mining then serve different decision questions."
      tone="cool"
    >
      <svg className="diagram-svg" viewBox="0 0 1120 520" role="img" aria-label="Data warehouse and OLAP pipeline">
        <defs>
          <marker id="arrow-pipe" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" className="dg-arrowhead dg-arrowhead--cyan" />
          </marker>
          <marker id="arrow-pipe-amber" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" className="dg-arrowhead dg-arrowhead--amber" />
          </marker>
        </defs>

        <rect x="25" y="105" width="195" height="115" rx="12" className="dg-box" />
        <text x="122" y="133" textAnchor="middle" className="dg-label">OPERATIONAL DB</text>
        <text x="122" y="156" textAnchor="middle" className="dg-small">OLTP · ERP · sales</text>
        <text x="122" y="176" textAnchor="middle" className="dg-small">current · detailed</text>
        <text x="122" y="196" textAnchor="middle" className="dg-small">normalised transactions</text>

        <path d="M225 162 H315" className="dg-connector" markerEnd="url(#arrow-pipe)" />
        <text x="270" y="149" textAnchor="middle" className="dg-small dg-small--muted">extract</text>

        <rect x="325" y="80" width="210" height="165" rx="12" className="dg-box dg-box--warm" />
        <text x="430" y="108" textAnchor="middle" className="dg-label dg-label--amber">ETL</text>
        <text x="430" y="135" textAnchor="middle" className="dg-text dg-text--strong">Extract</text>
        <text x="430" y="155" textAnchor="middle" className="dg-small">pull from sources</text>
        <text x="430" y="179" textAnchor="middle" className="dg-text dg-text--strong">Transform</text>
        <text x="430" y="199" textAnchor="middle" className="dg-small">clean · conform · aggregate</text>
        <text x="430" y="223" textAnchor="middle" className="dg-text dg-text--strong">Load</text>
        <text x="430" y="241" textAnchor="middle" className="dg-small">warehouse target</text>

        <path d="M540 162 H630" className="dg-connector" markerEnd="url(#arrow-pipe)" />
        <text x="585" y="149" textAnchor="middle" className="dg-small dg-small--muted">load</text>

        <path d="M660 92 C694 92 690 162 660 162 C690 162 694 235 660 235 Z" className="dg-cylinder" />
        <ellipse cx="660" cy="92" rx="30" ry="9" className="dg-cylinder-top" />
        <text x="706" y="122" className="dg-label dg-label--cyan">DATA</text>
        <text x="706" y="142" className="dg-label dg-label--cyan">WAREHOUSE</text>
        <text x="706" y="165" className="dg-small">integrated</text>
        <text x="706" y="183" className="dg-small">subject-oriented</text>
        <text x="706" y="201" className="dg-small">time-variant</text>
        <text x="706" y="219" className="dg-small">non-volatile</text>

        <path d="M790 162 H860" className="dg-connector" markerEnd="url(#arrow-pipe)" />

        <rect x="870" y="88" width="220" height="55" rx="10" className="dg-box" />
        <text x="980" y="111" textAnchor="middle" className="dg-text dg-text--strong">DATA MART</text>
        <text x="980" y="130" textAnchor="middle" className="dg-small">sales · finance · logistics</text>
        <rect x="870" y="152" width="220" height="55" rx="10" className="dg-box" />
        <text x="980" y="175" textAnchor="middle" className="dg-text dg-text--strong">DATA MART</text>
        <text x="980" y="194" textAnchor="middle" className="dg-small">departmental subset</text>
        <rect x="870" y="216" width="220" height="55" rx="10" className="dg-box" />
        <text x="980" y="239" textAnchor="middle" className="dg-text dg-text--strong">DATA MART</text>
        <text x="980" y="258" textAnchor="middle" className="dg-small">subject-specific view</text>

        <path d="M980 275 V323" className="dg-connector" markerEnd="url(#arrow-pipe)" />

        <rect x="735" y="330" width="245" height="80" rx="12" className="dg-box dg-box--accent" />
        <text x="857" y="357" textAnchor="middle" className="dg-label dg-label--cyan">OLAP CUBE</text>
        <text x="857" y="379" textAnchor="middle" className="dg-small">slice · dice · roll-up</text>
        <text x="857" y="397" textAnchor="middle" className="dg-small">drill-down · pivot</text>

        {showReporting && (
          <>
            <rect x="470" y="330" width="230" height="80" rx="12" className="dg-box" />
            <text x="585" y="357" textAnchor="middle" className="dg-label">REPORTING</text>
            <text x="585" y="379" textAnchor="middle" className="dg-small">planned + ad-hoc reports</text>
            <text x="585" y="397" textAnchor="middle" className="dg-small">hindsight</text>
            <path d="M735 370 H705" className="dg-connector" markerEnd="url(#arrow-pipe)" />
          </>
        )}

        <rect x="230" y="330" width="215" height="80" rx="12" className="dg-box dg-box--warm" />
        <text x="337" y="357" textAnchor="middle" className="dg-label dg-label--amber">DATA MINING</text>
        <text x="337" y="379" textAnchor="middle" className="dg-small">patterns · clusters</text>
        <text x="337" y="397" textAnchor="middle" className="dg-small">classification · insight</text>
        <path d="M735 370 C650 430 540 435 450 370" className="dg-connector" markerEnd="url(#arrow-pipe-amber)" />

        <rect x="350" y="455" width="420" height="48" rx="24" className="dg-box dg-box--solid" />
        <text x="560" y="484" textAnchor="middle" className="dg-label dg-label--dark">DECISION MAKER · INTERPRETATION · ACTION</text>
        <path d="M585 410 V450" className="dg-connector" markerEnd="url(#arrow-pipe)" />
        <path d="M857 410 C857 435 770 469 775 469" className="dg-connector" markerEnd="url(#arrow-pipe)" />
        <path d="M337 410 C337 435 430 469 345 469" className="dg-connector" markerEnd="url(#arrow-pipe-amber)" />
      </svg>
    </DiagramFrame>
  )
}

interface CubeView {
  id: string
  label: string
  description: string
  table: { caption: string; headers: string[]; rows: (string | number)[][] }
}

const cubeViews: CubeView[] = [
  {
    id: 'base',
    label: 'Base cube',
    description: 'Two dimensions on screen (quarter and city), one measure (sales), with product kept as a third dimension.',
    table: {
      caption: 'Sales (EGP thousands) by quarter and city — total across products',
      headers: ['Quarter', 'Cairo', 'Alexandria', 'Total'],
      rows: [
        ['Q1', 645, 510, 1155],
        ['Q2', 780, 600, 1380],
        ['Total', 1425, 1110, 2535],
      ],
    },
  },
  {
    id: 'rollup',
    label: 'Roll-up',
    description: 'Move upward along the time hierarchy: Q1 + Q2 → 2025 total. The view becomes less detailed and more aggregated.',
    table: {
      caption: 'Roll-up time to year — sales by city',
      headers: ['Year', 'Cairo', 'Alexandria', 'Total'],
      rows: [['2025', 1425, 1110, 2535]],
    },
  },
  {
    id: 'drilldown',
    label: 'Drill-down',
    description: 'Move from quarter to month for Cairo. The same data are shown at a finer level of detail.',
    table: {
      caption: 'Drill-down Cairo to month — total sales',
      headers: ['Month', 'Quarter', 'Sales'],
      rows: [
        ['Jan', 'Q1', 200],
        ['Feb', 'Q1', 215],
        ['Mar', 'Q1', 230],
        ['Apr', 'Q2', 245],
        ['May', 'Q2', 260],
        ['Jun', 'Q2', 275],
      ],
    },
  },
  {
    id: 'slice',
    label: 'Slice',
    description: 'Fix the location dimension to Cairo. A two-dimensional slice is cut from the three-dimensional cube.',
    table: {
      caption: 'Slice: location = Cairo — sales by quarter and product',
      headers: ['Quarter', 'Alpha', 'Beta', 'Total'],
      rows: [
        ['Q1', 390, 255, 645],
        ['Q2', 480, 300, 780],
      ],
    },
  },
  {
    id: 'dice',
    label: 'Dice',
    description: 'Select a sub-cube: Q1 only, both cities, both products. This is a smaller cube, not a single slice.',
    table: {
      caption: 'Dice: quarter = Q1; products = Alpha, Beta',
      headers: ['City', 'Alpha', 'Beta', 'Total'],
      rows: [
        ['Cairo', 390, 255, 645],
        ['Alexandria', 315, 195, 510],
      ],
    },
  },
  {
    id: 'pivot',
    label: 'Pivot',
    description: 'Rotate the view: cities become rows and quarters become columns. The underlying facts do not change.',
    table: {
      caption: 'Pivot: city on rows, quarter on columns — total sales',
      headers: ['City', 'Q1', 'Q2', 'Total'],
      rows: [
        ['Cairo', 645, 780, 1425],
        ['Alexandria', 510, 600, 1110],
      ],
    },
  },
]

export function OlapCubeDemo() {
  const [active, setActive] = useState('base')
  const view = cubeViews.find((item) => item.id === active) ?? cubeViews[0]

  return (
    <DiagramFrame
      title="Interactive OLAP cube"
      caption="The cube stores measures at the intersection of dimensions. OLAP operations change the selected view, aggregation level or orientation — not the stored transactions."
      actions={<span className="demo-label">Try the operations</span>}
    >
      <div className="olap-demo">
        <div className="olap-demo__visual">
          <svg className="diagram-svg" viewBox="0 0 520 360" role="img" aria-label="Multidimensional sales cube">
            <defs>
              <linearGradient id="cubeTop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1e5962" />
                <stop offset="100%" stopColor="#17464f" />
              </linearGradient>
            </defs>
            <polygon points="120,82 365,50 450,115 205,150" fill="url(#cubeTop)" stroke="#4a7b88" strokeWidth="1.2" />
            <polygon points="205,150 450,115 450,268 205,303" fill="#102a38" stroke="#4a7b88" strokeWidth="1.2" />
            <polygon points="120,82 205,150 205,303 120,235" fill="#0d2330" stroke="#4a7b88" strokeWidth="1.2" />

            <text x="288" y="99" textAnchor="middle" className="dg-label dg-label--cyan">PRODUCT</text>
            <text x="333" y="199" textAnchor="middle" className="dg-label dg-label--amber">TIME</text>
            <text x="131" y="181" textAnchor="middle" className="dg-label">LOCATION</text>
            <text x="280" y="245" textAnchor="middle" className="dg-small">measure: sales</text>
            <text x="280" y="264" textAnchor="middle" className="dg-small">revenue · quantity</text>

            <g className="cube-grid">
              {[0, 1, 2].map((i) => (
                <line key={`h${i}`} x1={120 + i * 28} y1={235 - i * 51} x2={205 + i * 28} y2={303 - i * 51} />
              ))}
              {[0, 1, 2].map((i) => (
                <line key={`v${i}`} x1={205 + i * 82} y1={150 + i * 0} x2={205 + i * 82} y2={303 - i * 0} />
              ))}
            </g>

            {active === 'slice' && (
              <polygon points="205,150 450,115 450,198 205,233" className="cube-highlight cube-highlight--slice" />
            )}
            {active === 'dice' && (
              <polygon points="205,150 365,132 365,216 205,234" className="cube-highlight cube-highlight--dice" />
            )}
            {active === 'rollup' && (
              <path d="M300 310 V285 M300 285 l-10 12 M300 285 l10 12" className="cube-op-arrow" />
            )}
            {active === 'drilldown' && (
              <path d="M300 288 V312 M300 312 l-10 -12 M300 312 l10 -12" className="cube-op-arrow" />
            )}
            {active === 'pivot' && (
              <path d="M258 322 C300 340 355 338 393 318" className="cube-op-arrow" fill="none" />
            )}
            <text x="455" y="330" textAnchor="middle" className="dg-small dg-small--muted">{active === 'base' ? '3-D view' : active}</text>
          </svg>
          <div className="olap-demo__dimensions">
            <span>Time: Year → Quarter → Month</span>
            <span>Product: All → Alpha / Beta</span>
            <span>Location: All → Cairo / Alexandria</span>
            <span>Measure: Sales (EGP thousands)</span>
          </div>
        </div>
        <div className="olap-demo__controls">
          <div className="olap-tabs" role="tablist" aria-label="OLAP operations">
            {cubeViews.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active === item.id}
                className={active === item.id ? 'is-active' : ''}
                onClick={() => setActive(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="olap-demo__explain">
            <Icon name="Info" size={16} />
            <p>{view.description}</p>
          </div>
          <div className="olap-result">
            <div className="olap-result__caption">{view.table.caption}</div>
            <div className="table-scroll">
              <table>
                <thead><tr>{view.table.headers.map((h) => <th key={h}>{h}</th>)}</tr></thead>
                <tbody>
                  {view.table.rows.map((row, i) => (
                    <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="olap-result__note">Illustrative numbers, not examination data. The point is the transformation of the analytical view.</p>
          </div>
        </div>
      </div>
    </DiagramFrame>
  )
}

export function OltpOlapDiagram() {
  return (
    <div className="compare-split">
      <div className="compare-split__panel compare-split__panel--oltp">
        <span className="compare-split__kicker">Operational</span>
        <h3>OLTP</h3>
        <p>On-line transaction processing</p>
        <ul>
          <li>Relational database + DBMS</li>
          <li>Current, detailed, normalised records</li>
          <li>Planned reports and simple application programs</li>
          <li>High-volume inserts/updates</li>
          <li>Supports operational control</li>
        </ul>
      </div>
      <div className="compare-split__arrow">
        <span>ETL</span>
        <Icon name="ArrowRight" size={22} />
      </div>
      <div className="compare-split__panel compare-split__panel--olap">
        <span className="compare-split__kicker">Analytical</span>
        <h3>OLAP</h3>
        <p>On-line analytical processing</p>
        <ul>
          <li>Multi-dimensional model / star schema</li>
          <li>Historical, integrated, subject-oriented</li>
          <li>Ad-hoc reports selected by the decision maker</li>
          <li>Slice, dice, roll-up, drill-down, pivot</li>
          <li>Supports analysis and decision making</li>
        </ul>
      </div>
    </div>
  )
}
