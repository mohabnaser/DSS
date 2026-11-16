import { useState } from 'react'
import { Icon } from './Icon'
import { Callout, Equation, Tag } from './ui'

const steps = [
  { id: 1, title: 'Structure the hierarchy', short: 'Structure' },
  { id: 2, title: 'Build pairwise matrices', short: 'Matrices' },
  { id: 3, title: 'Weight the criteria', short: 'Criteria' },
  { id: 4, title: 'Weight the alternatives', short: 'Alternatives' },
  { id: 5, title: 'Composite ranking', short: 'Ranking' },
]

const criteriaWeights = [
  { name: 'Experience', weight: 0.444 },
  { name: 'Salary needs', weight: 0.111 },
  { name: 'Education', weight: 0.297 },
  { name: 'Personality', weight: 0.148 },
]

const alternativeWeights = [
  { criterion: 'Experience', Aly: 0.273, Mohamed: 0.545, Hassan: 0.182 },
  { criterion: 'Salary needs', Aly: 0.652, Mohamed: 0.130, Hassan: 0.218 },
  { criterion: 'Education', Aly: 0.158, Mohamed: 0.210, Hassan: 0.632 },
  { criterion: 'Personality', Aly: 0.231, Mohamed: 0.462, Hassan: 0.308 },
]

const finalScores = [
  { name: 'Aly', score: 0.273 },
  { name: 'Mohamed', score: 0.385 },
  { name: 'Hassan', score: 0.338 },
]

function MatrixTable({
  headers,
  rows,
  totals,
  caption,
}: {
  headers: string[]
  rows: (string | number)[][]
  totals?: (string | number)[]
  caption?: string
}) {
  return (
    <div className="ahp-matrix">
      {caption && <div className="ahp-matrix__caption">{caption}</div>}
      <div className="table-scroll">
        <table>
          <thead>
            <tr><th />{headers.map((h) => <th key={h}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                <th scope="row">{row[0]}</th>
                {row.slice(1).map((cell, j) => <td key={j}>{cell}</td>)}
              </tr>
            ))}
            {totals && (
              <tr className="ahp-matrix__total">
                <th scope="row">Column sum</th>
                {totals.map((cell, i) => <td key={i}>{cell}</td>)}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function AhpWalkthrough() {
  const [step, setStep] = useState(1)

  return (
    <section className="ahp-walkthrough" aria-label="AHP worked example">
      <div className="ahp-walkthrough__top">
        <div>
          <span className="micro-label">Worked lecture example</span>
          <h2>Hiring a marketing candidate</h2>
          <p>Follow the lecturer’s numbers from hierarchy to final ranking. The calculation is mechanical; the judgments are the decision maker’s.</p>
        </div>
        <Tag tone="amber">Illustrative lecture data</Tag>
      </div>

      <div className="ahp-steps" role="tablist" aria-label="AHP steps">
        {steps.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={step === item.id}
            className={step === item.id ? 'is-active' : ''}
            onClick={() => setStep(item.id)}
          >
            <span>{String(item.id).padStart(2, '0')}</span>
            {item.short}
          </button>
        ))}
      </div>

      <div className="ahp-panel">
        {step === 1 && (
          <div className="ahp-step-body">
            <div>
              <h3>Step 1 · Develop the hierarchical structure</h3>
              <p>
                Completely describe the problem, then structure it into levels that match the decision maker’s
                understanding. The goal is satisfaction with the chosen candidate; the criteria express what
                “good” means; the alternatives are the candidates.
              </p>
              <ul className="check-list">
                <li><Icon name="Check" size={14} /> Level 1: final goal / objective</li>
                <li><Icon name="Check" size={14} /> Level 2: criteria used to compare alternatives</li>
                <li><Icon name="Check" size={14} /> Level 3: the alternatives</li>
              </ul>
            </div>
            <div className="ahp-mini-tree">
              <div className="ahp-mini-tree__goal">Best candidate</div>
              <div className="ahp-mini-tree__line" />
              <div className="ahp-mini-tree__criteria">
                {['Experience', 'Salary', 'Education', 'Personality'].map((c) => <span key={c}>{c}</span>)}
              </div>
              <div className="ahp-mini-tree__line" />
              <div className="ahp-mini-tree__alts">
                {['Aly', 'Mohamed', 'Hassan'].map((a) => <span key={a}>{a}</span>)}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="ahp-step-body ahp-step-body--single">
            <h3>Step 2 · Compare criteria and alternatives pairwise</h3>
            <p>
              Build one matrix comparing the criteria with each other, and one matrix comparing the alternatives
              under each criterion. The decision maker supplies judgments using Saaty’s scale; the reciprocal is
              entered automatically in the reverse position.
            </p>
            <div className="ahp-matrix-row">
              <MatrixTable
                caption="Criteria comparison — the lecture example"
                headers={['Experience', 'Salary', 'Education', 'Personality']}
                rows={[
                  ['Experience', 1, 4, 1.5, 3],
                  ['Salary needs', 0.25, 1, 0.375, 0.75],
                  ['Education', 0.67, 2.67, 1, 2],
                  ['Personality', 0.33, 1.33, 0.5, 1],
                ]}
                totals={[2.25, 9, 3.375, 6.75]}
              />
              <div className="ahp-interpretation">
                <span className="micro-label">Read the first row</span>
                <p>
                  Experience is <strong>4× more important</strong> than salary needs, <strong>1.5×</strong> more
                  important than education, and <strong>3×</strong> more important than personality.
                </p>
                <div className="ahp-scale-legend">
                  <span>1 equal</span><span>3 moderate</span><span>5 strong</span><span>7 very strong</span><span>9 extreme</span>
                </div>
                <small>2, 4, 6, 8 are intermediate values. Reciprocals are used in reverse comparisons.</small>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="ahp-step-body ahp-step-body--single">
            <h3>Step 3 · Normalise the criteria matrix</h3>
            <p>
              Divide each column entry by the column total, then average each row. The result is a priority weight
              for each criterion — the decision maker’s relative emphasis.
            </p>
            <div className="ahp-matrix-row">
              <MatrixTable
                caption="Normalised criteria matrix"
                headers={['Experience', 'Salary', 'Education', 'Personality']}
                rows={[
                  ['Experience', 0.444, 0.444, 0.444, 0.444],
                  ['Salary needs', 0.111, 0.111, 0.111, 0.111],
                  ['Education', 0.298, 0.297, 0.296, 0.296],
                  ['Personality', 0.147, 0.148, 0.148, 0.148],
                ]}
                totals={[1.0, 1.0, 1.0, 1.0]}
              />
              <div className="ahp-weights">
                <span className="micro-label">Criterion weights</span>
                {criteriaWeights.map((item) => (
                  <div className="weight-row" key={item.name}>
                    <span>{item.name}</span>
                    <div className="weight-bar"><span style={{ width: `${item.weight * 100}%` }} /></div>
                    <strong>{item.weight.toFixed(3)}</strong>
                  </div>
                ))}
                <p className="ahp-small-note">Each criterion’s weight sums to 1.000. Experience dominates this decision maker’s priorities.</p>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="ahp-step-body ahp-step-body--single">
            <h3>Step 4 · Weight the alternatives under each criterion</h3>
            <p>
              Repeat the pairwise comparison and normalisation for the alternatives, once per criterion. The
              lecture gives the resulting local weights. For Experience, for example, Mohamed is preferred.
            </p>
            <div className="ahp-matrix-row">
              <MatrixTable
                caption="Experience pairwise matrix (lecture example)"
                headers={['Aly', 'Mohamed', 'Hassan']}
                rows={[
                  ['Aly', 1, 0.5, 1.5],
                  ['Mohamed', 2, 1, 3],
                  ['Hassan', 0.67, 0.33, 1],
                ]}
                totals={[3.67, 1.83, 5.5]}
              />
              <div className="ahp-alt-table">
                <span className="micro-label">Local alternative weights</span>
                <div className="table-scroll">
                  <table>
                    <thead><tr><th>Criterion</th><th>Aly</th><th>Mohamed</th><th>Hassan</th></tr></thead>
                    <tbody>
                      {alternativeWeights.map((row) => (
                        <tr key={row.criterion}>
                          <th scope="row">{row.criterion}</th>
                          <td>{row.Aly.toFixed(3)}</td>
                          <td>{row.Mohamed.toFixed(3)}</td>
                          <td>{row.Hassan.toFixed(3)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="ahp-small-note">These local weights are the normalised row averages for each criterion.</p>
              </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="ahp-step-body ahp-step-body--single">
            <h3>Step 5 · Compute composite priorities and choose</h3>
            <p>
              Multiply each candidate’s local weight by the corresponding criterion weight and add across criteria.
              The candidate with the highest composite priority is selected — assuming the judgments are accepted.
            </p>
            <Equation label="Composite score for alternative k">
              {String.raw`S_k = \sum_{c=1}^{m} w_c \, p_{kc}`}
            </Equation>
            <div className="ahp-final">
              {finalScores.map((candidate, index) => (
                <div className={`ahp-final__row ${index === 1 ? 'is-winner' : ''}`} key={candidate.name}>
                  <span className="ahp-final__name">{candidate.name}</span>
                  <div className="ahp-final__bar"><span style={{ width: `${candidate.score * 100 * 2.2}%` }} /></div>
                  <strong>{candidate.score.toFixed(3)}</strong>
                  {index === 1 && <span className="ahp-final__win"><Icon name="Trophy" size={13} /> selected</span>}
                </div>
              ))}
            </div>
            <Callout tone="success" title="Result">
              Mohamed ranks first with a composite priority of <strong>0.385</strong>, ahead of Hassan (0.338) and
              Aly (0.273). The lecturer therefore selects Mohamed for the marketing vacancy.
            </Callout>
            <Callout tone="warning" title="Do not over-claim">
              The lecture presents priority weights and composite ranking, but does not calculate a consistency
              ratio. Full AHP often includes a consistency check; treat that as a supplementary topic and do not
              present it as part of the lecturer’s worked example.
            </Callout>
          </div>
        )}
      </div>
    </section>
  )
}
