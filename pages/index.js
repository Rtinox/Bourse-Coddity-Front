import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bourse Coddity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.headercontainer}>
        <div className={styles.headeritems}>
          <p>Le site de la source informative !</p>
        </div>
        <div className={styles.headeritems}>
          <button className={styles.loginButton}>Se connecter</button>
        </div>
      </div>

      <main className={styles.main}>
        <h3>Que recherchez-vous ?</h3>
        <input type="text" placeholder="Phrase, mots, ..." className={styles.inputbar}></input>
        <button className={styles.transparentBtn}><img src="./search.png" alt="my image" width="30px"/></button>
      </main>

      <footer className={styles.footer}>
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          Bourse coddity 2021 - Par _Rtinox et PJGame
        </a>
      </footer>
    </div>
  )
}
