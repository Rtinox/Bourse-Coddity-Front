import styles from '../styles/Home.module.css';

export default function Navbar() {
  return (
    <div className={styles.headercontainer}>
      <div className={styles.headeritems}>
        <p>Le site de la source informative !</p>
      </div>
      <div className={styles.headeritems}>
        <button className={styles.loginButton}>Se connecter</button>
      </div>
    </div>
  );
}
