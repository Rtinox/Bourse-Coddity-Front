import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "./../components/Navbar";
import stylesC from "../styles/Search.module.css";
import Footer from "./../components/Footer";
import { Button, Form } from "react-bootstrap";
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const { q } = router.query;

  console.log(q)
  return (
    <div className={styles.container}>
      <Head>
        <title>Bourse Coddity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {Navbar()}
 
      <Form action='search'>
          <input
            type="text"
            placeholder="Phrase, mots, ..."
            className={styles.inputbar} 
            name='q'
            value={q}
          ></input>
          <Button className={styles.transparentBtn} type='submit'>
            <img src="./search.png" alt="my image" width="30px" />
          </Button>
        </Form>

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
