import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Title</h1>

        <p className={styles.description}>
          Xhash Challenge
          <code className={styles.code}>made by Ivan Rubio</code>
        </p>

        <div className={styles.grid}>
          <Link href="/seconds/SecondsPeriodicidad">
            <a className={styles.card}>
              <h3>Seconds &rarr;</h3>
            </a>
          </Link>

          <Link href="/minutes/MinutesPeriodicidad">
            <a className={styles.card}>
              <h3>Minutes &rarr;</h3>
            </a>
          </Link>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Hours &rarr;</h3>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Day &rarr;</h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
