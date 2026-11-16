import type { PageId } from '../../types'
import {
  BilingualBlock,
  Callout,
  CompareTable,
  ConceptCard,
  ConceptGrid,
  ExamFocus,
  KeyIdea,
  PageHeader,
  PictureIt,
  Pill,
  SectionIntro,
} from '../../components/ui'
import { SectionFooter } from '../../components/SectionFooter'
import {
  EntityRelationshipDiagram,
  ModelingHierarchyDiagram,
  ProductionNetworkDiagram,
} from '../../components/diagrams/ArchitectureDiagrams'
import { SectionExamPractice } from '../../components/SectionExamPractice'

export function Section07({ onNavigate }: { onNavigate: (page: PageId) => void }) {
  return (
    <article className="learning-page">
      <PageHeader
        number="07"
        eyebrow="Domain → structure → instance"
        title="Modeling Hierarchy & Structured Modeling"
        intro="A real decision domain becomes a model through three levels: the domain itself, a formal model structure, and a numerical instance. Structured modeling is the bridge — entities, attributes, relationships, constraints and database design."
        ar="المشكلة الواقعية بتتحول لموديل كمبيوتر عبر 3 مستويات واضحة: بيئة المشكلة (Domain)، ثم الهيكل الرياضي المجرد (Structure)، ثم النموذج المحمل بالأرقام (Instance). والـ Structured Modeling هو الكوبري اللي بيربط بين قواعد البيانات والمعادلات الرياضية."
        meta={
          <>
            <Pill icon="BookOpen">Lecture 8 · slides 6–15</Pill>
            <Pill icon="GitBranch" tone="teal">ER + Relational Schema</Pill>
            <Pill icon="Clock3" tone="amber">36 min</Pill>
          </>
        }
      />

      <SectionIntro
        objectives={[
          'Explain the three distinct levels of the modeling hierarchy: Domain, Structure, and Instance.',
          'Deconstruct a real domain into Entities, Attributes, Relationships, Functions, and Constraints.',
          'Translate an Entity-Relationship (ER) conceptual model into a normalised Relational Database design.',
          'Distinguish Known Attributes (stored in database) from Unknown Decision Variables (computed by solver).',
          'Map algebraic model parameters and indices to SQL selection criteria for automated model generation.',
          'Practice all authentic historical exam questions on modeling hierarchy with instant feedback.',
        ]}
        minutes={36}
        sources={['Lecture 8 · slides 6–15', 'Lecture 3 · slides 11–15']}
        examWeight="High · Recurring hierarchy questions, ER-to-schema translation, and T/F on structured modeling"
      />

      {/* 7.1 The Three Levels of Modeling Hierarchy */}
      <section className="content-section">
        <div className="subheading">
          <span>7.1 · The hierarchy</span>
          <h2>The Three Levels: Domain → Structure → Instance</h2>
        </div>

        <BilingualBlock
          en={
            <p className="lead">
              The lecturer establishes a clean three-tier hierarchy that prevents confusion between reality, algebra, and numbers:
              (1) The <strong>Modeling Domain</strong> (the real physical world), (2) The <strong>Model Structure</strong> (symbolic equations and sets), and (3) The <strong>Model Instance</strong> (equations populated with specific numerical data).
            </p>
          }
          ar={
            <p>
              المحاضرة بتوضح إن تحويل مشكلة حقيقية لحل كمبيوتر بيمشي على 3 مستويات لازم تفرق بينهم تماماً:
              1) <strong>Modeling Domain:</strong> الواقع العملي (مصانع، شاحنات، عملاء، تكاليف).
              2) <strong>Model Structure:</strong> المعادلات والرموز الرياضية المجردة بدون أي أرقام (Sets & Equations).
              3) <strong>Model Instance:</strong> لما نحط أرقام حقيقية جوه المعادلات عشان السولفر يحلها ويطلع أرقام قرارات.
            </p>
          }
        />

        <ModelingHierarchyDiagram />

        <ConceptGrid cols={3}>
          <ConceptCard
            badge="LEVEL 1 · REALITY"
            badgeTone="cyan"
            title="1. Modeling Domain"
            titleAr="بيئة النمذجة (الواقع الحقيقي)"
            description="The real enterprise system: physical plants, warehouses, multi-item products, capacities, supplier constraints, customer demand patterns, and market freight costs."
            ar="الكيانات والعلاقات الواقعية: مصانع بورسعيد والإسكندرية، مخازن القاهرة وطنطا، عربيات النقل، وأسعار البنزين."
            tags={['real-world', 'entities', 'domain knowledge']}
          />
          <ConceptCard
            badge="LEVEL 2 · ALGEBRA"
            badgeTone="amber"
            title="2. Model Structure"
            titleAr="هيكل النموذج (المعادلات المجردة)"
            description="The symbolic mathematical specification: indexed sets (i, j, k), algebraic parameters, decision variables, objective function (Min Cost), and constraint inequalities. NO NUMBERS."
            ar="الصياغة الرياضية بالرموز والمجموعات: دالة الهدف وقيود الطاقة والطلب، من غير ما نعوض بأي أرقام محددة."
            tags={['symbolic', 'equations', 'index sets', 'no numbers']}
          />
          <ConceptCard
            badge="LEVEL 3 · NUMERICAL"
            badgeTone="teal"
            title="3. Model Instance"
            titleAr="حالة النموذج (المعادلات بالأرقام)"
            description="The model structure instantiated with concrete numerical parameters extracted from the database (e.g. Cairo capacity = 350, Alexandria demand = 300). Handed to GAMS solver."
            ar="نفس المعادلات لما نحقن فيها الأرقام من الداتابيز: طاقة مصنع القاهرة = 350، طلب الإسكندرية = 300. ده اللي السولفر بيحله."
            tags={['numerical', 'database values', 'solver ready']}
          />
        </ConceptGrid>

        <ExamFocus
          titleEn="A New Instance is NOT a New Model Structure"
          title="💡 المهم فالامتحان · الفرق بين Instance وStructure!"
          ar="في الامتحانات: لما نغير أرقام الطلب أو التكاليف عشان نجرب سيناريو جديد، هل إحنا بنعمل New Model؟ لأ طبعاً! هيكل النموذج (Structure) بيفضل ثابت زي ما هو، اللي بيحصل إننا بنعمل New Model Instance! وده سر قوة الـ GAMS والـ DSS: نفس الموديل بيشتغل على مليون سيناريو بمجرد تغيير الداتا!"
        >
          <p>
            <strong>Core Modeling Insight:</strong>
            <br />
            Changing numerical input values (e.g. updating customer demand or freight rates) creates a <strong>new Model Instance</strong>,
            <strong> NOT</strong> a new model structure. The algebraic formulation remains invariant, enabling rapid what-if scenario testing.
          </p>
        </ExamFocus>

        <PictureIt
          title="💡 PICTURE IT · تخيلها كده: تصميم عمارة سكنية"
          ar="تخيل مهندس معماري:
1) الـ Domain هو قطعة الأرض واحتياجات السكان للتهوية والمصاعد.
2) الـ Model Structure هو المخطط الهندسي (الرسمة) اللي فيها أبعاد الشقق وأماكن الأعمدة كمعادلات ونسب هندسية.
3) الـ Model Instance هو العمارة لما تتبني بالأسمنت والحديد في مدينة نصر، أو تتنفذ بنفس المخطط الهندسي في التجمع الخامس بأبعاد خرسانية مختلفة!"
        >
          <p>
            Think of building architecture: The domain is the physical building site and climate. The model structure is the architectural blueprint (algebraic relations and structural rules). A model instance is the physical building constructed with specific quantities of steel, concrete, and brick.
          </p>
        </PictureIt>
      </section>

      {/* 7.2 Structured Modeling & ER Representation */}
      <section className="content-section">
        <div className="subheading">
          <span>7.2 · Domain decomposition</span>
          <h2>Structured Modeling: Entities, Attributes & Constraints</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              <strong>Structured Modeling</strong> provides a formal graphical bridge between the real business domain and computerized databases/solvers.
              It represents any managerial domain through five core building blocks: Entities, Attributes, Relationships, Functions, and Constraints.
            </p>
          }
          ar={
            <p>
              الـ <strong>Structured Modeling</strong> هو اللغة اللي بتحول البيزنس لديزاين داتابيز ومعادلات. بيقسم أي مشكلة لـ 5 عناصر أساسية:
              الكيانات (Entities)، الخصائص (Attributes)، العلاقات (Relationships)، الدوال المحسوبة (Functions)، والقيود (Constraints).
            </p>
          }
        />

        <EntityRelationshipDiagram />

        <div className="er-vocabulary">
          <div className="er-vocab-row">
            <span>ENTITY</span>
            <strong>A physical or logical object of business interest</strong>
            <small>PLANT (i), ITEM (j), WAREHOUSE (k)</small>
          </div>
          <div className="er-vocab-row">
            <span>ATTRIBUTE</span>
            <strong>A property describing an entity or relationship</strong>
            <small>Plant Location, Production Capacity C(i,j), Shipping Cost S(i,j,k)</small>
          </div>
          <div className="er-vocab-row">
            <span>RELATIONSHIP</span>
            <strong>A business connection between two or more entities</strong>
            <small>Plant produces Item (PLANT_ITEM); Warehouse demands Item (WAREHOUSE_ITEM)</small>
          </div>
          <div className="er-vocab-row">
            <span>FUNCTION</span>
            <strong>A computed mathematical aggregation</strong>
            <small>Total Production Cost (TPC = Σ U·Q), Total Shipping Cost (TSC = Σ S·T)</small>
          </div>
          <div className="er-vocab-row">
            <span>CONSTRAINT</span>
            <strong>A restriction bounding feasible decision values</strong>
            <small>Production quantity ≤ Capacity: Q(i,j) ≤ C(i,j); Demand satisfaction</small>
          </div>
        </div>

        <ExamFocus
          titleEn="Known Attributes vs Decision Variables"
          title="💡 المهم فالامتحان · فخ تصميم قواعد البيانات!"
          ar="في الامتحانات والشفوي: أوعى تحط Decision Variable جوه جداول قاعدة البيانات!
قاعدة البيانات بتخزن فقط الـ Known Attributes (المعلومات المعروفة زي الطاقة C والتكلفة S والطلب D).
لكن كمية الإنتاج Q(i,j) والكمية المشحونة T(i,j,k) دي متغيرات قرار (Decision Variables) بيحسبها السولفر كمخرجات مش مدخلات!"
        >
          <p>
            <strong>Golden Database Design Rule:</strong>
            <br />
            The database stores <strong>known attributes</strong> only (Capacities, Unit Costs, Demands). It must <strong>never</strong> store unknown decision variables (Production Quantities Q, Amounts Shipped T), which are computed dynamically by mathematical solvers.
          </p>
        </ExamFocus>
      </section>

      {/* 7.3 Database Design for Multi-Item Production & Shipping */}
      <section className="content-section content-section--shaded">
        <div className="subheading">
          <span>7.3 · Relational schema</span>
          <h2>Transforming the Structured Model into Database Tables</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              In Lecture 8, the multi-item production-shipping domain is mapped into a normalized relational database schema.
              Each primary entity becomes an independent table; many-to-many relationships become junction tables carrying known parameters.
            </p>
          }
          ar={
            <p>
              هيكل قاعدة البيانات العلائقية لمشكلة الإنتاج والشحن المتعددة:
              كل كيان ليه جدول أساسي، والعلاقات متعدد لمتعدد (Many-to-Many) بتتحول لجداول وسيطة فيها الباراميترات المعروفة:
            </p>
          }
        />

        <div className="db-schema">
          <div className="db-table">
            <span className="db-table__name">PLANT</span>
            <span className="db-table__cols"><u>Plant#</u> (i), Plant_Location</span>
          </div>
          <div className="db-table">
            <span className="db-table__name">ITEM</span>
            <span className="db-table__cols"><u>Item#</u> (j), Unit_Production_Cost U(j)</span>
          </div>
          <div className="db-table">
            <span className="db-table__name">WAREHOUSE</span>
            <span className="db-table__cols"><u>Warehouse#</u> (k), War_Location</span>
          </div>
          <div className="db-table">
            <span className="db-table__name">PLANT_ITEM</span>
            <span className="db-table__cols"><u>Plant#</u>, <u>Item#</u>, Production_Capacity C(i,j)</span>
          </div>
          <div className="db-table">
            <span className="db-table__name">WAREHOUSE_ITEM</span>
            <span className="db-table__cols"><u>Warehouse#</u>, <u>Item#</u>, Demand D(j,k)</span>
          </div>
          <div className="db-table">
            <span className="db-table__name">PLANT_ITEM_WARE</span>
            <span className="db-table__cols"><u>Plant#</u>, <u>Item#</u>, <u>Warehouse#</u>, Unit_Shipping_Cost S(i,j,k)</span>
          </div>
        </div>

        <ProductionNetworkDiagram />

        <div className="subheading subheading--minor">
          <span>Data–Model Integration</span>
          <h3>Mapping Mathematical Symbols to Database Selection Criteria</h3>
        </div>

        <CompareTable
          caption="Data-to-Model Symbol Mapping Matrix"
          headers={['Algebraic Symbol', 'Indices', 'Relational Table', 'Database Column', 'SQL Extraction Criterion']}
          rows={[
            ['C(i,j) · Production Capacity', 'i, j', 'PLANT_ITEM', 'Prod_Capacity', 'SELECT Prod_Capacity WHERE Plant# = i AND Item# = j'],
            ['U(j) · Unit Production Cost', 'j', 'ITEM', 'Unit_Prod_Cost', 'SELECT Unit_Prod_Cost WHERE Item# = j'],
            ['S(i,j,k) · Unit Shipping Cost', 'i, j, k', 'PLANT_ITEM_WARE', 'Unit_Shipping_Cost', 'SELECT Unit_Shipping_Cost WHERE Plant# = i AND Item# = j AND Warehouse# = k'],
            ['D(j,k) · Consumer Demand', 'j, k', 'WAREHOUSE_ITEM', 'Demand', 'SELECT Demand WHERE Item# = j AND Warehouse# = k'],
          ]}
        />
      </section>

      {/* 7.4 From Domain to Algebra: The Full Transportation Formulation */}
      <section className="content-section">
        <div className="subheading">
          <span>7.4 · Mathematical formulation</span>
          <h2>The Algebraic Domain of Multi-Item Production & Shipping</h2>
        </div>

        <BilingualBlock
          en={
            <p>
              The complete mathematical representation ties indices, parameters, decision variables, and constraints into a solvable optimization model:
            </p>
          }
          ar={
            <p>
              الصياغة الرياضية الكاملة لنموذج الإنتاج والشحن: بنحدد الـ Sets والـ Parameters والـ Decision Variables ودوال التكلفة والقيود:
            </p>
          }
        />

        <div className="formula-stack">
          <div><span>Objective Function</span><code>Minimize Total Cost = TPC + TSC</code></div>
          <div><span>Total Production Cost (TPC)</span><code>TPC = Σ(i,j) U(j) · Q(i,j)</code></div>
          <div><span>Total Shipping Cost (TSC)</span><code>TSC = Σ(i,j,k) S(i,j,k) · T(i,j,k)</code></div>
          <div><span>Production Capacity Constraint</span><code>Q(i,j) ≤ C(i,j) &nbsp; ∀ (i,j)</code></div>
          <div><span>Flow Balance Constraint</span><code>Σ(k) T(i,j,k) ≤ Q(i,j) &nbsp; ∀ (i,j)</code></div>
          <div><span>Demand Satisfaction Constraint</span><code>Σ(i) T(i,j,k) ≤ D(j,k) &nbsp; ∀ (j,k)</code></div>
          <div><span>Non-negativity</span><code>Q(i,j) ≥ 0, &nbsp; T(i,j,k) ≥ 0</code></div>
        </div>

        <ExamFocus
          titleEn="Structured Modeling Language is Graphical"
          title="💡 المهم فالامتحان · سؤال مكرر في الـ True/False!"
          ar="في امتحانات 2018 Midterm و2018 Final: بيجي نصاً: 'Structured modeling language can be used to graphically represent a model' — الإجابة: TRUE! الـ Structured Modeling بيعتمد على رسومات الـ ER والـ Acyclic Graphs لتوضيح العلاقات بين الكيانات والمتغيرات."
        >
          <p>
            <strong>Recurring True Statement:</strong> “Structured modeling language can be used to graphically represent a model.” → <strong>TRUE</strong>.
            Structured modeling leverages acyclic graphs and entity-relationship diagrams to visually represent dependencies before translation into algebraic code.
          </p>
        </ExamFocus>
      </section>

      {/* Summary Takeaways */}
      <section className="content-section content-section--summary">
        <div className="subheading">
          <span>Summary Takeaways</span>
          <h2>Key Takeaways for Review</h2>
        </div>
        <div className="takeaway-grid">
          <div>
            <span>01</span>
            <p><strong>3-Level Hierarchy:</strong> Modeling Domain (real physical world) → Model Structure (symbolic algebra) → Model Instance (equations populated with numbers).</p>
          </div>
          <div>
            <span>02</span>
            <p><strong>Instance vs Structure:</strong> New data generates a new model instance; the underlying model structure remains unchanged.</p>
          </div>
          <div>
            <span>03</span>
            <p><strong>Known vs Unknown:</strong> Database tables store known parameters (C, U, S, D); decision variables (Q, T) are computed by the solver.</p>
          </div>
          <div>
            <span>04</span>
            <p><strong>Data–Model Integration:</strong> Model parameters are dynamically queried from relational tables using index sets (i, j, k) as selection keys.</p>
          </div>
          <div>
            <span>05</span>
            <p><strong>Graphical Representation:</strong> Structured modeling language represents decision models graphically via entity-relationship networks.</p>
          </div>
        </div>
      </section>

      {/* Dedicated Past Exam Practice (Authentic Questions for this Section) */}
      <SectionExamPractice
        sectionId="modeling-hierarchy"
        title="Official Exam Studio · Modeling Hierarchy Practice"
        titleAr="أسئلة وتدريبات الامتحانات السابقة على هيكل النمذجة والـ Structured Modeling"
      />

      <SectionFooter id="modeling-hierarchy" onNavigate={onNavigate} />
    </article>
  )
}
