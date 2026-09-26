import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <nav aria-label="Pages">
        <Link href="/dashboard">Project dashboard</Link> · <Link href="/courses">Course catalogue</Link>
      </nav>
    </main>
  );
}
