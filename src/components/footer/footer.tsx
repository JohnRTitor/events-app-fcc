import styles from "@/styles/Home.module.css";

export function CommonFooter() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Events App</p>
      <p>Powered by Next.js</p>
    </footer>
  );
}
