import styles from "../styles/Home.module.css";

export default function Footer() {
  // Rendu du footer
  return (
    <footer className={styles.footer}>
      <a rel="noopener noreferrer">
        Bourse <a href="https://bourse.coddity.com/">&nbsp;coddity&nbsp;</a>{" "}
        2021 - Par _Rtinox et PJGame
      </a>
    </footer>
  );
}
