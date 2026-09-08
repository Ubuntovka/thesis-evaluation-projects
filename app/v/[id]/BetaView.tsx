import { ActionButton } from "./ActionButton";
import type { ScreenConfig } from "./experiment";
import styles from "./beta.module.css";

const courses = [
  { title: "Strategic Communication", category: "Leadership", level: "Intermediate", duration: "4 weeks", description: "Build clear narratives, align stakeholders and lead productive conversations across teams.", shortDescription: "Build clear narratives and align teams.", lessons: "18 lessons", color: "fern", initials: "SC" },
  { title: "Data Storytelling", category: "Data skills", level: "Beginner", duration: "3 weeks", description: "Turn analysis into memorable stories using structure, context and confident visual choices.", shortDescription: "Turn analysis into clear stories.", lessons: "14 lessons", color: "ocean", initials: "DS" },
  { title: "Product Discovery", category: "Product", level: "Intermediate", duration: "5 weeks", description: "Test assumptions, uncover customer needs and shape stronger opportunities before delivery.", shortDescription: "Test assumptions before delivery.", lessons: "22 lessons", color: "citrus", initials: "PD" },
  { title: "Inclusive Team Leadership", category: "Leadership", level: "Advanced", duration: "4 weeks", description: "Create the conditions for trust, useful challenge and meaningful participation on your team.", shortDescription: "Build trust and participation.", lessons: "16 lessons", color: "clover", initials: "IT" },
  { title: "Service Design Essentials", category: "Design", level: "Beginner", duration: "6 weeks", description: "Map complete service experiences and improve the moments that matter to customers.", shortDescription: "Improve complete service experiences.", lessons: "24 lessons", color: "coral", initials: "SD" },
  { title: "Financial Confidence", category: "Business", level: "Intermediate", duration: "3 weeks", description: "Read essential financial signals and make better commercial decisions with confidence.", shortDescription: "Make confident commercial decisions.", lessons: "12 lessons", color: "lagoon", initials: "FC" },
] as const;

const categories = ["All courses", "Leadership", "Data skills", "Product", "Design", "Business"];

export function BetaView({ condition }: Pick<ScreenConfig, "condition">) {
  const isAccessible = condition === "accessibility";
  const hasLessText = condition === "textAmount";

  return (
    <main className={`${styles.page} ${styles[condition]}`}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a className={styles.brand} href="#top"><span aria-hidden="true">L</span>Leafline</a>
          <nav aria-label="Main navigation"><a className={styles.current} href="#catalogue">Catalogue</a><a href="#catalogue">Learning paths</a><a href="#catalogue">For teams</a><a href="#catalogue">Resources</a></nav>
          <div className={styles.account}><input className={styles.search} type="search" placeholder="○  Search" aria-label={isAccessible ? "Search courses" : undefined} /><span className={styles.avatar}>AR</span><span><strong>Alex Rivera</strong><small>3 courses active</small></span></div>
        </div>
      </header>

      <section className={styles.intro} id="top">
        <div className={styles.introInner}>
          <div><p className={styles.kicker}>{hasLessText ? "Learn at your pace" : "Grow at your own pace"}</p><h1>Skills for the work<br />you want to do</h1></div>
          <div className={styles.introCopy}><p>{hasLessText ? "Practical courses for skills you can use now." : "Practical courses created with experienced leaders, makers and specialists. Learn something useful today, then put it to work tomorrow."}</p><div className={styles.proof}><span><strong>48</strong> {hasLessText ? "courses" : "expert-led courses"}</span><span><strong>4.9</strong> {hasLessText ? "rating" : "average rating"}</span></div></div>
        </div>
      </section>

      <div className={styles.catalogue} id="catalogue">
        <div className={styles.catalogueHead}><div><p className={styles.kicker}>{hasLessText ? "Catalogue" : "Explore the catalogue"}</p><h2>Find your next course</h2></div><p>{hasLessText ? "Six recommendations." : "Six recommendations selected for curious professionals."}</p></div>
        <nav className={styles.filters} aria-label="Course categories">{categories.map((category) => <a className={category === "All courses" ? styles.selected : undefined} href="#catalogue" key={category}>{category}</a>)}</nav>
        <section className={styles.grid} aria-label="Course catalogue">
          {courses.map((course, index) => (
            <article className={styles.card} key={course.title}>
              <div className={`${styles.cover} ${styles[course.color]}`}>
                <span className={styles.courseMark}>{course.initials}</span><span className={styles.category}>{course.category}</span>
                <ActionButton accessibleName={isAccessible || index > 0 ? `Bookmark ${course.title}` : undefined} className={styles.bookmark} iconClassName={styles.bookmarkIcon} />
                <span className={styles.coverLine} aria-hidden="true" />
              </div>
              <div className={styles.cardBody}><div className={styles.details}><span>{course.level}</span><span>{course.duration}</span></div><h3>{course.title}</h3><p>{hasLessText ? course.shortDescription : course.description}</p><div className={styles.cardFoot}><span>{course.lessons}</span><span>{hasLessText ? "View" : "View course"} <b aria-hidden="true">→</b></span></div></div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
