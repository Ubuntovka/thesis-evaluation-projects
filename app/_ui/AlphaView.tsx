import { ActionButton } from "./ActionButton";
import styles from "./alpha.module.css";

const projects = [
  { name: "Client Portal Redesign", code: "WEB-184", description: "Unified account experience for enterprise customers", status: "In progress", tone: "blue", progress: 72, deadline: "18 Sep 2026", date: "2026-09-18", team: ["MA", "JL", "SK"], teamNames: "Maya, Jonas and Sofia" },
  { name: "Billing Infrastructure", code: "OPS-047", description: "Migration to consolidated invoicing workflows", status: "At risk", tone: "amber", progress: 48, deadline: "24 Sep 2026", date: "2026-09-24", team: ["ER", "TN", "LB"], teamNames: "Elias, Tessa and Leo" },
  { name: "Mobile Design System", code: "DSN-211", description: "Shared components for iOS and Android products", status: "In review", tone: "violet", progress: 86, deadline: "02 Oct 2026", date: "2026-10-02", team: ["AK", "NO", "RY"], teamNames: "Amara, Noah and Riley" },
  { name: "Insights Dashboard", code: "DATA-092", description: "Self-service reporting for account managers", status: "In progress", tone: "blue", progress: 64, deadline: "11 Oct 2026", date: "2026-10-11", team: ["CM", "IV", "DP"], teamNames: "Chloe, Ivan and Daniel" },
  { name: "Identity Permissions", code: "SEC-138", description: "Role controls and delegated administration", status: "On track", tone: "green", progress: 35, deadline: "28 Oct 2026", date: "2026-10-28", team: ["PJ", "ZF", "KB"], teamNames: "Priya, Zane and Klara" },
  { name: "Customer Onboarding", code: "CX-305", description: "Guided setup for multi-team organisations", status: "Planning", tone: "slate", progress: 18, deadline: "07 Nov 2026", date: "2026-11-07", team: ["OS", "GM", "HT"], teamNames: "Owen, Giulia and Hugo" },
] as const;

const navItems = ["Overview", "Projects", "My tasks", "Calendar", "Reports"];

export function AlphaView() {
  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}><span className={styles.brandMark} aria-hidden="true">N</span><span>Northstar</span></div>
        <nav aria-label="Workspace navigation" className={styles.navigation}>
          <p className={styles.eyebrow}>Workspace</p>
          {navItems.map((item) => (
            <a href="#projects" className={item === "Projects" ? styles.current : undefined} key={item}>
              {item}
              {item === "My tasks" && <span className={styles.count}>8</span>}
            </a>
          ))}
        </nav>
        <div className={styles.teamCard}><p className={styles.eyebrow}>Workspace</p><strong>Meridian Studio</strong><span>18 members</span></div>
        <div className={styles.profile}><span className={styles.profileAvatar}>MK</span><span><strong>Morgan Kim</strong><small>Product lead</small></span></div>
      </aside>

      <main className={styles.main}>
        <header className={styles.header}>
          <span className={styles.breadcrumb}>Workspace / Projects</span>
          <div className={styles.headerMeta}><input className={styles.search} type="search" placeholder="⌕  Search projects" /><span className={styles.date}>September 2026</span><span className={styles.headerAvatar}>MK</span></div>
        </header>

        <div className={styles.content}>
          <section className={styles.titleRow}>
            <div><p className={styles.kicker}>Portfolio overview</p><h1>Active projects</h1><p className={styles.subtitle}>Track progress, deadlines and ownership across your workspace.</p></div>
            <span className={styles.quarter}>Q3 · 2026</span>
          </section>

          <section className={styles.metrics} aria-label="Portfolio summary">
            <article><span>Total projects</span><strong>12</strong><small>6 currently active</small></article>
            <article><span>On track</span><strong>8</strong><small className={styles.positive}>↑ 2 this month</small></article>
            <article><span>At risk</span><strong>2</strong><small>Needs attention</small></article>
            <article><span>Avg. progress</span><strong>54%</strong><small>Across all projects</small></article>
          </section>

          <section className={styles.projectSection} id="projects">
            <div className={styles.sectionHeader}><div><h2>Projects</h2><span>6 active projects</span></div><span>Last updated 4 Sep, 09:42</span></div>
            <div className={styles.projectList}>
              {projects.map((project, index) => (
                <article className={styles.project} key={project.code}>
                  <div className={styles.projectInfo}><span><strong>{project.name}</strong><small>{project.code} · {project.description}</small></span></div>
                  <span className={`${styles.status} ${styles[project.tone]}`}>{project.status}</span>
                  <div className={styles.progress}><span><i style={{ width: `${project.progress}%` }} /></span><strong>{project.progress}%</strong></div>
                  <time dateTime={project.date}>{project.deadline}</time>
                  <div className={styles.avatars} aria-label={project.teamNames}>{project.team.map((member) => <span key={member}>{member}</span>)}</div>
                  <ActionButton accessibleName={index > 0 ? `Open actions for ${project.name}` : undefined} className={styles.action} iconClassName={styles.menuIcon} />
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
