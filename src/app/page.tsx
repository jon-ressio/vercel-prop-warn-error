import { SomeLink } from "./SomeLink.client";
import { Thing } from "./Thing.client";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Thing href={new URL("https://example.com")}>WARN, BUT RENDERS</Thing>
        <Thing as={SomeLink} href={new URL("https://example.com")}>
          ERROR, BREAKS PAGE TRYING TO LOG WARNING?
        </Thing>
      </div>
    </main>
  );
}

