import type { PageId } from '../types'
import { BANK_STATS, EXAM_INFO, EXAM_ORDER } from '../data/exams'
import { COURSE_STATS, SECTIONS, isLearningSection } from '../data/course'
import { useLearning } from '../context/LearningContext'
import { Icon } from '../components/Icon'
import { Pill, ProgressRing } from '../components/ui'

export function Dashboard({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  const { progress, lang } = useLearning()
  const completed = new Set(progress.completed)
  const visited = new Set(progress.visited)
  const percentage = (progress.completed.length / SECTIONS.length) * 100
  const nextSection = SECTIONS.find((section) => !completed.has(section.id)) ?? SECTIONS[0]
  const visitedSections = progress.visited.filter(isLearningSection)
  const started = progress.completed.length > 0 || visitedSections.length > 0
  const quizEntries = Object.values(progress.quiz)
  const quizTotal = quizEntries.reduce((sum, entry) => sum + entry.total, 0)
  const quizCorrect = quizEntries.reduce((sum, entry) => sum + entry.correct, 0)
  const quizRate = quizTotal > 0 ? Math.round((quizCorrect / quizTotal) * 100) : null

  return (
    <div className="dashboard">
      <section className="dash-hero">
        <div className="dash-hero__copy">
          <div className="dash-kicker">
            <span className="dash-kicker__dot" />
            DS312 · Computer-based Decision Support Systems &amp; Future Studies
          </div>
          <h1>
            Learn the <em>thinking</em> behind the system, not just the software.
          </h1>
          <p className="dash-hero__lead">
            A complete, visual course built from the supplied lecture slides and ten historical papers. It teaches
            the decision cycle, data- and model-centered DSS, structured modelling, GAMS, simulation and AHP — then
            lets you practise the examiner’s exact wording.
          </p>
          <div className="dash-hero__actions">
            <button type="button" className="btn btn--primary btn--lg" onClick={() => onNavigate(nextSection.id)}>
              {started ? `Continue with ${nextSection.number}` : 'Begin the course'}
              <Icon name="ArrowRight" size={17} />
            </button>
            <button type="button" className="btn btn--ghost btn--lg" onClick={() => onNavigate('exam')}>
              <Icon name="ClipboardCheck" size={17} />
              Open exam studio
            </button>
          </div>
          <div className="dash-hero__meta">
            <span><Icon name="BookOpen" size={14} /> {COURSE_STATS.slides} lecture slides</span>
            <span><Icon name="GraduationCap" size={14} /> {COURSE_STATS.examItems} exam items</span>
            <span><Icon name="Globe2" size={14} /> English + Egyptian Arabic</span>
          </div>
        </div>

        <aside className="dash-progress" aria-label="Course progress">
          <div className="dash-progress__top">
            <div>
              <span className="micro-label">Your progress</span>
              <h2>{progress.completed.length} of {SECTIONS.length} sections</h2>
            </div>
            <ProgressRing value={percentage} size={92} />
          </div>
          <div className="progress-bar progress-bar--lg">
            <span style={{ width: `${percentage}%` }} />
          </div>
          <div className="dash-progress__next">
            <span className="micro-label">{progress.completed.length === SECTIONS.length ? 'Course complete' : 'Next up'}</span>
            <button type="button" onClick={() => onNavigate(nextSection.id)}>
              <span className="dash-progress__n">{nextSection.number}</span>
              <span>
                <strong>{nextSection.shortTitle}</strong>
                <small>{nextSection.minutes} min · {nextSection.eyebrow}</small>
              </span>
              <Icon name="ArrowUpRight" size={16} />
            </button>
          </div>
          <div className="dash-progress__stats">
            <div>
              <span>Visited</span>
              <strong>{visitedSections.length}<small> / {SECTIONS.length}</small></strong>
            </div>
            <div>
              <span>Practice accuracy</span>
              <strong>{quizRate === null ? '—' : `${quizRate}%`}</strong>
              <small>{quizTotal > 0 ? `${quizCorrect} of ${quizTotal} checks` : 'No attempts yet'}</small>
            </div>
          </div>
          <p className="dash-progress__note">
            <Icon name="Info" size={13} />
            Progress and practice results are stored only in this browser. Nothing is sent anywhere.
          </p>
        </aside>
      </section>

      <section className="dash-stats" aria-label="Course statistics">
        <div><strong>{COURSE_STATS.lectures}</strong><span>lectures transcribed</span></div>
        <div><strong>{COURSE_STATS.slides}</strong><span>slides covered</span></div>
        <div><strong>{COURSE_STATS.sections}</strong><span>learning sections</span></div>
        <div><strong>{BANK_STATS.total}</strong><span>historical exam items</span></div>
        <div><strong>{BANK_STATS.autoGraded}</strong><span>auto-gradable items</span></div>
        <div><strong>{BANK_STATS.contextOnly}</strong><span>external-case items flagged</span></div>
      </section>

      <section className="dash-section">
        <div className="dash-section__head">
          <div>
            <span className="section-kicker"><Icon name="Compass" size={15} /> The learning path</span>
            <h2>Eleven sections, one connected argument</h2>
            <p>Follow the numbers if you are new. Use the later sections as targeted revision if an exam question exposes a gap.</p>
          </div>
          <button type="button" className="text-link" onClick={() => onNavigate('revision')}>
            Open revision sheet <Icon name="ArrowUpRight" size={14} />
          </button>
        </div>

        <div className="section-card-grid">
          {SECTIONS.map((section) => {
            const isComplete = completed.has(section.id)
            const isVisited = visited.has(section.id)
            return (
              <button
                type="button"
                key={section.id}
                className={`section-card ${isComplete ? 'is-complete' : ''} ${isVisited ? 'is-visited' : ''}`}
                onClick={() => onNavigate(section.id)}
              >
                <div className="section-card__top">
                  <span className="section-card__number">{section.number}</span>
                  <span className="section-card__icon"><Icon name={section.icon} size={19} /></span>
                  {isComplete ? (
                    <span className="section-card__state"><Icon name="BadgeCheck" size={14} /> complete</span>
                  ) : isVisited ? (
                    <span className="section-card__state section-card__state--visited">in progress</span>
                  ) : null}
                </div>
                <h3>{section.title}</h3>
                <p>{section.description}</p>
                <div className="section-card__meta">
                  <span><Icon name="Clock3" size={13} /> {section.minutes} min</span>
                  <span>{section.examWeight.split('·')[0].trim()}</span>
                </div>
                <div className="section-card__sources">{section.lectureSources[0]}</div>
              </button>
            )
          })}
        </div>
      </section>

      <section className="dash-split">
        <div className="dash-panel dash-panel--exam">
          <div className="dash-panel__head">
            <span className="section-kicker"><Icon name="GraduationCap" size={15} /> Exam preparation</span>
            <h2>Ten real papers, 200 real prompts</h2>
            <p>
              Every item preserves the supplied wording. Answers are model answers, clearly separated from the
              original question. Start with a paper, then use the mixed drill.
            </p>
          </div>
          <div className="exam-paper-list">
            {EXAM_ORDER.map((exam) => (
              <button type="button" key={exam} className="exam-paper" onClick={() => onNavigate('exam')}>
                <span>
                  <strong>{exam}</strong>
                  <small>{EXAM_INFO[exam].date} · {EXAM_INFO[exam].duration}</small>
                </span>
                <span className="exam-paper__count">{BANK_STATS.byExam[exam]} items</span>
                <Icon name="ChevronRight" size={15} />
              </button>
            ))}
          </div>
          <button type="button" className="btn btn--primary" onClick={() => onNavigate('exam')}>
            <Icon name="ClipboardCheck" size={16} />
            Practise with all 200
          </button>
        </div>

        <div className="dash-panel">
          <div className="dash-panel__head">
            <span className="section-kicker"><Icon name="Target" size={15} /> A study method that works</span>
            <h2>Read → recall → write</h2>
          </div>
          <ol className="study-method">
            <li>
              <span>01</span>
              <div>
                <strong>Understand the mechanism</strong>
                <p>Read the section and explain the diagram in your own words. Switch on Arabic if a concept needs a second pass.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <strong>Test without looking</strong>
                <p>Answer the Quick Check before revealing it. Recall is where the learning happens; recognition feels easier than it is.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <strong>Write the exam answer</strong>
                <p>Use the exam studio. Attempt the wording first, then compare structure and missing points with the model answer.</p>
              </div>
            </li>
          </ol>
          <div className="dash-tip">
            <Icon name="Lightbulb" size={17} />
            <p>
              The most efficient revision is not re-reading slides. It is drawing the decision cycle, the integrated
              DSS architecture and the data pipeline from memory, then checking what you omitted.
            </p>
          </div>
        </div>
      </section>

      <section className="dash-integrity">
        <div className="dash-integrity__icon"><Icon name="FileSearch" size={24} /></div>
        <div>
          <span className="section-kicker">Source integrity</span>
          <h2>What this platform does — and does not — claim</h2>
          <p>
            Lecture content comes from three supplied slide transcriptions. Exam wording comes from ten supplied
            papers. No official answer key was provided, so every answer is an independently reasoned model answer.
            {BANK_STATS.contextOnly} items depend on external cases not present in the lecture transcripts, and{' '}
            {BANK_STATS.unresolved} items remain unresolved pending the lecturer’s case material. They are flagged,
            not filled in with guesses.
          </p>
        </div>
        <button type="button" className="btn btn--ghost" onClick={() => onNavigate('audit')}>
          Read the audit <Icon name="ArrowRight" size={15} />
        </button>
      </section>

      {lang === 'ar' && (
        <section className="dash-arabic" dir="rtl">
          <span className="arabic-note__mark">ع</span>
          <div>
            <h2>ابدأ من هنا</h2>
            <p>
              لو دي أول مرة تدرس المادة: اقرأ القسم الأول والثاني عشان تفهم القرار ودورة الدعم، وبعدين الأقسام
              5 و6 و7 لأنها قلب المادة (data وmodels وstructured modeling). قسم 8 فيه GAMS، وقسم 9 الحالة
              الكاملة، وقسم 11 AHP. متقرأش الإجابة قبل ما تحاول تكتبها بنفسك.
            </p>
          </div>
        </section>
      )}

      <div className="dash-badges">
        <Pill icon="BookOpen">9 lectures</Pill>
        <Pill icon="Layers" tone="teal">11 sections</Pill>
        <Pill icon="ClipboardCheck" tone="amber">10 historical papers</Pill>
        <Pill icon="FileSearch" tone="blue">Source audit included</Pill>
      </div>
    </div>
  )
}
