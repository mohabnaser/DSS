import { useState } from 'react'
import { useLearning } from '../context/LearningContext'
import { Icon } from './Icon'

export function QuickCheck({
  question,
  options,
  answer,
  explanation,
  explanationAr,
  label = 'Knowledge check',
}: {
  question: string
  options: string[]
  answer: number
  explanation: string
  explanationAr?: string
  label?: string
}) {
  const [selected, setSelected] = useState<number | null>(null)
  const { lang } = useLearning()
  const correct = selected === answer

  return (
    <div className={`quick-check ${selected !== null ? (correct ? 'is-correct' : 'is-wrong') : ''}`}>
      <div className="quick-check__head">
        <span><Icon name="Lightbulb" size={14} /> {label}</span>
        <small>Try before revealing</small>
      </div>
      <p className="quick-check__question">{question}</p>
      <div className="quick-check__options">
        {options.map((option, index) => (
          <button
            key={option}
            type="button"
            className={`${selected === index ? 'is-selected' : ''} ${
              selected !== null && index === answer ? 'is-answer' : ''
            }`}
            onClick={() => setSelected(index)}
            disabled={selected !== null}
          >
            <span>{String.fromCharCode(65 + index)}</span>
            {option}
            {selected !== null && index === answer && <Icon name="CheckCircle2" size={15} />}
            {selected === index && index !== answer && <Icon name="XCircle" size={15} />}
          </button>
        ))}
      </div>
      {selected !== null && (
        <div className="quick-check__feedback">
          <strong>{correct ? 'Correct.' : 'Not quite.'}</strong> {explanation}
          {lang === 'ar' && explanationAr && <p dir="rtl" className="quick-check__ar">{explanationAr}</p>}
          {!correct && (
            <button type="button" className="text-button" onClick={() => setSelected(null)}>
              <Icon name="RotateCcw" size={13} /> Try again
            </button>
          )}
        </div>
      )}
    </div>
  )
}
