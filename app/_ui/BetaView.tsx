import { ActionButton } from "./ActionButton";
import styles from "./beta.module.css";

const courses = [
  { title: "Strategic Communication", category: "Leadership", level: "Intermediate", duration: "4 weeks", description: "Build clear narratives, align stakeholders and lead productive conversations across teams. Includes practical templates for updates, proposals and difficult feedback conversations.", lessons: "18 lessons", color: "fern" },
  { title: "Data Storytelling", category: "Data skills", level: "Beginner", duration: "3 weeks", description: "Turn analysis into memorable stories using structure, context and confident visual choices. Each module ends with a short exercise based on a real business dataset.", lessons: "14 lessons", color: "ocean" },
  { title: "Product Discovery", category: "Product", level: "Intermediate", duration: "5 weeks", description: "Test assumptions, uncover customer needs and shape stronger opportunities before delivery. You will plan interviews, run quick experiments and summarise evidence for decisions.", lessons: "22 lessons", color: "citrus" },
  { title: "Inclusive Team Leadership", category: "Leadership", level: "Advanced", duration: "4 weeks", description: "Create the conditions for trust, useful challenge and meaningful participation on your team. Case studies show how experienced managers handle conflict, feedback and change.", lessons: "16 lessons", color: "clover" },
  { title: "Service Design Essentials", category: "Design", level: "Beginner", duration: "6 weeks", description: "Map complete service experiences and improve the moments that matter to customers. Work through journey maps, service blueprints and simple prototypes step by step.", lessons: "24 lessons", color: "coral" },
  { title: "Financial Confidence", category: "Business", level: "Intermediate", duration: "3 weeks", description: "Read essential financial signals and make better commercial decisions with confidence. Covers budgets, margins, cash flow and how to discuss numbers with finance teams.", lessons: "12 lessons", color: "lagoon" },
] as const;

const categories = ["All courses", "Leadership", "Data skills", "Product", "Design", "Business"];

export function BetaView() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a className={styles.brand} href="#top"><span aria-hidden="true">L</span>Leafline</a>
          <nav aria-label="Main navigation"><a className={styles.current} href="#catalogue">Catalogue</a><a href="#catalogue">Learning paths</a><a href="#catalogue">For teams</a><a href="#catalogue">Resources</a></nav>
          <div className={styles.account}><input className={styles.search} type="search" placeholder="○  Search" /><span className={styles.avatar}>AR</span><span><strong>Alex Rivera</strong><small>3 courses active</small></span></div>
        </div>
      </header>

      <section className={styles.intro} id="top">
        <div className={styles.introInner}>
          <div><p className={styles.kicker}>Grow at your own pace</p><h1>Skills for the work<br />you want to do</h1></div>
          <div className={styles.introCopy}><p>Practical courses created with experienced leaders, makers and specialists. Learn something useful today, then put it to work tomorrow. Every course combines short videos, guided exercises and feedback from practitioners.</p><div className={styles.proof}><span><strong>48</strong> expert-led courses</span><span><strong>4.9</strong> average rating</span></div></div>
        </div>
      </section>

      <div className={styles.catalogue} id="catalogue">
        <div className={styles.catalogueHead}><div><p className={styles.kicker}>Explore the catalogue</p><h2>Find your next course</h2></div><p>Six recommendations selected for curious professionals.</p></div>
        <nav className={styles.filters} aria-label="Course categories">{categories.map((category) => <a className={category === "All courses" ? styles.selected : undefined} href="#catalogue" key={category}>{category}</a>)}</nav>
        <section className={styles.grid} aria-label="Course catalogue">
          {courses.map((course, index) => (
            <article className={styles.card} key={course.title}>
              <div className={`${styles.cover} ${styles[course.color]}`}>
                <span className={styles.category}>{course.category}</span>
                <ActionButton accessibleName={index > 0 ? `Bookmark ${course.title}` : undefined} className={styles.bookmark} iconClassName={styles.bookmarkIcon} />
              </div>
              <div className={styles.cardBody}><div className={styles.details}><span>{course.level}</span><span>{course.duration}</span></div><h3>{course.title}</h3><p>{course.description}</p><div className={styles.cardFoot}><span>{course.lessons}</span><span>View course</span></div></div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
