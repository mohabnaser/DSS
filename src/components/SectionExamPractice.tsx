import { useMemo, useState } from 'react'
import type { PageId } from '../types'
import { QUESTIONS } from '../data/exams'
import { ARABIC_EXPLANATIONS } from '../data/exams/arabic-explanations'
import { useLearning } from '../context/LearningContext'
import { Icon } from './Icon'
import { MarkdownLite, Tag } from './ui'
import { DevelopmentPath } from './diagrams/FoundationDiagrams'
import { DecisionCycleDiagram } from './diagrams/ProcessDiagrams'
import {
  DssClassificationTree,
  GamsWorkflowDiagram,
  IntegratedDssArchitecture,
  ModelCenteredArchitecture,
  ProductionNetworkDiagram,
} from './diagrams/ArchitectureDiagrams'
import { DataPipelineDiagram } from './diagrams/DataDiagrams'

export function SectionExamPractice({
  sectionId,
  title = 'Past Exam Questions & Practice',
  titleAr = 'أسئلة وتدريبات الامتحانات السابقة على هذا الجزء',
}: {
  sectionId: PageId
  title?: string
  titleAr?: string
}) {
  const { lang, recordQuiz } = useLearning()
  const [filter, setFilter] = useState<'all' | 'quiz' | 'written'>('all')
  const [answers, setAnswers] = useState<Record<string, boolean | number>>({})
  const [revealedWritten, setRevealedWritten] = useState<Set<string>>(new Set())

  // Get all questions that belong to this section
  const sectionQuestions = useMemo(() => {
    return QUESTIONS.filter((q) => q.sectionId === sectionId)
  }, [sectionId])

  const quizQuestions = useMemo(() => {
    return sectionQuestions.filter(
      (q) => typeof q.answer === 'boolean' || typeof q.answer === 'number',
    )
  }, [sectionQuestions])

  const writtenQuestions = useMemo(() => {
    return sectionQuestions.filter(
      (q) => typeof q.answer !== 'boolean' && typeof q.answer !== 'number',
    )
  }, [sectionQuestions])

  const displayedQuestions = useMemo(() => {
    if (filter === 'quiz') return quizQuestions
    if (filter === 'written') return writtenQuestions
    return sectionQuestions
  }, [filter, sectionQuestions, quizQuestions, writtenQuestions])

  // Calculate score for auto-graded questions
  const answeredQuizCount = Object.keys(answers).length
  const correctQuizCount = quizQuestions.filter((q) => answers[q.id] === q.answer).length

  function handleSelectAnswer(questionId: string, choice: boolean | number) {
    if (answers[questionId] !== undefined) return // already answered
    const nextAnswers = { ...answers, [questionId]: choice }
    setAnswers(nextAnswers)

    // Compute updated score and persist to learning context
    const updatedCorrect = quizQuestions.filter((q) => nextAnswers[q.id] === q.answer).length
    recordQuiz(sectionId, updatedCorrect, quizQuestions.length)
  }

  function handleResetQuiz() {
    setAnswers({})
  }

  function toggleWritten(id: string) {
    setRevealedWritten((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  if (sectionQuestions.length === 0) {
    return null
  }

  return (
    <section className="section-exam-block" id="exam-practice">
      <div className="section-exam-block__header">
        <div className="section-exam-block__titles">
          <div className="section-kicker">
            <Icon name="GraduationCap" size={16} />
            <span>Official Exam Studio · DS331 / DS312</span>
          </div>
          <h2>{title}</h2>
          {lang === 'ar' && (
            <p className="section-exam-block__ar-sub" dir="rtl">
              {titleAr} ({sectionQuestions.length} سؤال من امتحانات سابقة)
            </p>
          )}
          <p className="section-exam-block__desc">
            Authentic questions from past midterms and finals (2015–2025). Auto-graded questions provide instant feedback and explanations, while essay and diagram questions reveal complete structured model answers.
          </p>
        </div>

        {quizQuestions.length > 0 && (
          <div className="quiz-score-badge">
            <div className="quiz-score-badge__stats">
              <span className="quiz-score-badge__label">Quiz Score</span>
              <span className="quiz-score-badge__value">
                {correctQuizCount} / {quizQuestions.length}
              </span>
            </div>
            <div className="quiz-score-badge__bar">
              <div
                className="quiz-score-badge__fill"
                style={{
                  width: `${quizQuestions.length > 0 ? (correctQuizCount / quizQuestions.length) * 100 : 0}%`,
                }}
              />
            </div>
            {answeredQuizCount > 0 && (
              <button
                type="button"
                className="btn-link"
                onClick={handleResetQuiz}
                title="Reset answers to practice again"
              >
                <Icon name="RotateCcw" size={13} />
                <span>إعادة الكويز / Reset</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="section-exam-block__filters">
        <button
          type="button"
          className={`filter-pill ${filter === 'all' ? 'is-active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Questions ({sectionQuestions.length})
        </button>
        {quizQuestions.length > 0 && (
          <button
            type="button"
            className={`filter-pill ${filter === 'quiz' ? 'is-active' : ''}`}
            onClick={() => setFilter('quiz')}
          >
            <Icon name="CheckCircle2" size={14} />
            Interactive Quiz ({quizQuestions.length})
          </button>
        )}
        {writtenQuestions.length > 0 && (
          <button
            type="button"
            className={`filter-pill ${filter === 'written' ? 'is-active' : ''}`}
            onClick={() => setFilter('written')}
          >
            <Icon name="FileText" size={14} />
            Written & Diagrams ({writtenQuestions.length})
          </button>
        )}
      </div>

      {/* Questions List */}
      <div className="section-exam-block__list">
        {displayedQuestions.map((question, index) => {
          const isQuiz = typeof question.answer === 'boolean' || typeof question.answer === 'number'
          const userAnswer = answers[question.id]
          const isAnswered = userAnswer !== undefined
          const isCorrect = isAnswered && userAnswer === question.answer
          const isWrittenOpen = revealedWritten.has(question.id)

          return (
            <article
              key={question.id}
              className={`question-item-card ${isQuiz ? 'question-item-card--quiz' : 'question-item-card--written'} ${
                isAnswered ? (isCorrect ? 'is-correct' : 'is-wrong') : ''
              }`}
            >
              {/* Question Header */}
              <div className="question-item-card__head">
                <div className="question-item-card__meta">
                  <span className="question-number-pill">
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                  <Tag tone="cyan">{question.exam}</Tag>
                  {question.part && <span className="meta-sub">{question.part}</span>}
                  <span className="meta-sub">Item {question.number}</span>
                  {question.points && (
                    <span className="points-pill">{question.points} pts</span>
                  )}
                  <span className="type-pill">{question.type.toUpperCase()}</span>
                </div>
              </div>

              {/* Question Text */}
              <div className="question-item-card__wording">
                <p>{question.wording}</p>
              </div>

              {/* Quiz Body: True/False or MCQ */}
              {isQuiz && (
                <div className="question-item-card__quiz-body">
                  {typeof question.answer === 'boolean' ? (
                    /* True / False Options */
                    <div className="tf-options-grid">
                      {[true, false].map((val) => {
                        const chosen = userAnswer === val
                        const isTheCorrectOne = isAnswered && question.answer === val
                        const isWrongChoice = chosen && !isCorrect

                        return (
                          <button
                            key={String(val)}
                            type="button"
                            className={`tf-btn ${chosen ? 'is-chosen' : ''} ${
                              isTheCorrectOne ? 'is-correct' : ''
                            } ${isWrongChoice ? 'is-wrong' : ''}`}
                            onClick={() => handleSelectAnswer(question.id, val)}
                            disabled={isAnswered}
                          >
                            <span className="tf-btn__mark">
                              {val ? 'TRUE' : 'FALSE'}
                            </span>
                            {isTheCorrectOne && (
                              <Icon name="CheckCircle2" size={17} className="status-ico-green" />
                            )}
                            {isWrongChoice && (
                              <Icon name="XCircle" size={17} className="status-ico-red" />
                            )}
                          </button>
                        )
                      })}
                    </div>
                  ) : (
                    /* Multiple Choice Options */
                    <div className="mcq-options-grid">
                      {question.choices?.map((choice, i) => {
                        const chosen = userAnswer === i
                        const isTheCorrectOne = isAnswered && question.answer === i
                        const isWrongChoice = chosen && !isCorrect

                        return (
                          <button
                            key={choice}
                            type="button"
                            className={`mcq-btn ${chosen ? 'is-chosen' : ''} ${
                              isTheCorrectOne ? 'is-correct' : ''
                            } ${isWrongChoice ? 'is-wrong' : ''}`}
                            onClick={() => handleSelectAnswer(question.id, i)}
                            disabled={isAnswered}
                          >
                            <span className="mcq-btn__letter">
                              {String.fromCharCode(65 + i)}
                            </span>
                            <span className="mcq-btn__text">{choice}</span>
                            {isTheCorrectOne && (
                              <Icon name="CheckCircle2" size={17} className="status-ico-green" />
                            )}
                            {isWrongChoice && (
                              <Icon name="XCircle" size={17} className="status-ico-red" />
                            )}
                          </button>
                        )
                      })}
                    </div>
                  )}

                  {/* Immediate Feedback Box */}
                  {isAnswered && (
                    <div
                      className={`answer-feedback-box ${
                        isCorrect ? 'answer-feedback-box--correct' : 'answer-feedback-box--wrong'
                      }`}
                    >
                      <div className="answer-feedback-box__title">
                        {isCorrect ? (
                          <>
                            <Icon name="CheckCircle2" size={18} />
                            <strong>Correct Answer! إجابة صحيحة ✓</strong>
                          </>
                        ) : (
                          <>
                            <Icon name="XCircle" size={18} />
                            <strong>
                              Incorrect. Correct Answer is:{' '}
                              {typeof question.answer === 'boolean'
                                ? question.answer
                                  ? 'TRUE'
                                  : 'FALSE'
                                : `${String.fromCharCode(65 + (question.answer as number))}. ${
                                    question.choices?.[question.answer as number]
                                  }`}
                            </strong>
                          </>
                        )}
                      </div>

                      <div className="answer-feedback-box__explanation">
                        <p>
                          <strong>Academic Explanation:</strong> {question.explanation}
                        </p>
                        {lang === 'ar' && (
                          <div className="answer-feedback-box__ar" dir="rtl">
                            <strong>تفسير الإجابة بالمصري 💡:</strong>
                            <div className="ar-explanation-text">
                              <MarkdownLite
                                text={
                                  ARABIC_EXPLANATIONS[question.id]?.explanationAr ??
                                  `السؤال ده بيختبر موضوع **${question.topic}**: ${question.explanation}`
                                }
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Written / Diagram / Modeling Body: Question + Expandable Model Answer */}
              {!isQuiz && (
                <div className="question-item-card__written-body">
                  <button
                    type="button"
                    className="model-answer-toggle-btn"
                    onClick={() => toggleWritten(question.id)}
                    aria-expanded={isWrittenOpen}
                  >
                    <span>
                      <Icon name={isWrittenOpen ? 'EyeOff' : 'Eye'} size={16} />
                      {isWrittenOpen
                        ? 'إخفاء الإجابة النموذجية / Hide Model Answer'
                        : 'عرض الإجابة النموذجية وطريقة الحل / Show Model Answer'}
                    </span>
                    <Icon
                      name="ChevronDown"
                      size={17}
                      className={`toggle-caret ${isWrittenOpen ? 'is-flipped' : ''}`}
                    />
                  </button>

                  {isWrittenOpen && (
                    <div className="model-answer-details-box">
                      <div className="model-answer-details-box__summary">
                        <span className="box-badge">MODEL ANSWER SUMMARY</span>
                        <p>{question.answer as string}</p>
                      </div>

                      {question.visual === 'development-path' && (
                        <div className="model-answer-visual">
                          <DevelopmentPath />
                        </div>
                      )}

                      {question.visual === 'decision-cycle' && (
                        <div className="model-answer-visual">
                          <DecisionCycleDiagram />
                        </div>
                      )}

                      {question.visual === 'dss-tree' && (
                        <div className="model-answer-visual">
                          <DssClassificationTree />
                        </div>
                      )}

                      {question.visual === 'conceptual-model' && (
                        <div className="model-answer-visual">
                          <IntegratedDssArchitecture />
                        </div>
                      )}

                      {question.visual === 'model-dss' && (
                        <div className="model-answer-visual">
                          <ModelCenteredArchitecture />
                        </div>
                      )}

                      {question.visual === 'gams-workflow' && (
                        <div className="model-answer-visual">
                          <GamsWorkflowDiagram />
                        </div>
                      )}

                      {question.visual === 'data-pipeline' && (
                        <div className="model-answer-visual">
                          <DataPipelineDiagram />
                        </div>
                      )}

                      {question.visual === 'production-network' && (
                        <div className="model-answer-visual">
                          <ProductionNetworkDiagram />
                        </div>
                      )}

                      {question.solution && (
                        <div className="model-answer-details-box__full">
                          <span className="box-badge box-badge--blue">
                            STRUCTURED SOLUTION & WHAT THE EXAMINER EXPECTS
                          </span>
                          <div className="solution-markdown">
                            <MarkdownLite text={question.solution} />
                          </div>
                        </div>
                      )}

                      {question.explanation && (
                        <div className="model-answer-details-box__note">
                          <strong>Academic Context:</strong> {question.explanation}
                        </div>
                      )}

                      {lang === 'ar' && (
                        <div className="model-answer-details-box__ar-note" dir="rtl">
                          <strong>الشرح وطريقة الحل بالمصري 💡:</strong>
                          <div className="ar-explanation-text">
                            <MarkdownLite
                              text={
                                ARABIC_EXPLANATIONS[question.id]?.explanationAr ??
                                `السؤال ده بيختبر موضوع **${question.topic}**. في الامتحان، اكتب النقاط واضحة زي ما متقسمة فوق، وركز على المصطلحات الأساسية بالإنجليزي.`
                              }
                            />
                          </div>
                          {ARABIC_EXPLANATIONS[question.id]?.solutionAr && (
                            <div className="ar-solution-breakdown">
                              <MarkdownLite text={ARABIC_EXPLANATIONS[question.id]!.solutionAr!} />
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
}
