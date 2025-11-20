import Codeblock from "./components/Codeblock";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.hero}>
      <section className={styles.heroText}>
        <p className={styles.greeting}>Hi, I&apos;m</p>
        <h1 className={styles.name}>Leo Duong</h1>
        <p className={styles.subtitle}>Full-Stack Developer & Problem Solver</p>
        <p className={styles.description}>
          I build modern web apps with React, Next.js, TypeScript, and cloud
          tools. Scroll down, check the code, and don&apos;t forget to try the
          light/dark toggle in the navbar.
        </p>
      </section>

      <section className={styles.heroCode}>
        <Codeblock />
      </section>
    </main>
  );
}

