import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bourse Coddity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      { Navbar() }

      <main className={styles.main}>
        <h3>Que recherchez-vous ?</h3>
        <input type="text" placeholder="Phrase, mots, ..." className={styles.inputbar}></input>
        <button className={styles.transparentBtn}><img src="./search.png" alt="my image" width="30px"/></button>
      </main>

      { Footer() }
    </div>
  )
}
