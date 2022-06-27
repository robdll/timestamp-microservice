import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Timestamp Microservice</title>
        <meta
          name="description"
          content="Microservice API to convert timestamp and dates"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Timestamp Microservice</h1>

      <main className={styles.main}>
        <p className={styles.description}>Example Usage:</p>
        <code className={styles.code}>[project url]/api/2015-12-25</code>
        <code className={styles.code}>[project url]/api/1451001600000</code>

        <p className={styles.description}>Example Output:</p>
        <code className={styles.code}>
          {`{ 
          "unix": 1451001600000, 
          "utc":"Fri, 25 Dec 2015 00:00:00 GMT"
          }`}
        </code>

        <p className={styles.description}>Try it out</p>
        <Link href="/api/2015-12-25">
          <a className={styles.link}>/api/2015-12-25</a>
        </Link>
        <Link href="/api/1451001600000">
          <a className={styles.link}>/api/1451001600000</a>
        </Link>
      </main>
    </div>
  );
}
