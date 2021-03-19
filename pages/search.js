import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "./../components/Navbar";
import stylesC from "../styles/Search.module.css";
import Footer from "./../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bourse Coddity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {Navbar()}

      <div>
        <input
          type="text"
          placeholder="Phrase, mots, ..."
          className={styles.inputbar}
        ></input>
      </div>

      <main className={styles.main}>
        
        <div className={stylesC.card}>
          <div>
            <h4>Wiw</h4>
            <p>Oui bien sur avec une grande frite ?</p>
          </div>
          <div>
            <button className={stylesC.seeBtn}>Voir</button>
          </div>
        </div>

      </main>
    </div>
  );
}
