import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "./../components/Navbar";
import stylesC from "../styles/Search.module.css";
import Footer from "./../components/Footer";
import { Button, Form } from "react-bootstrap";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter()

  const apiUrl = "https://codity-wedidit.herokuapp.com/";
  const { q } = router.query;
  const [articles, setArticles] = useState([{
    title: "Recherche en cours ...",
    text: "C'est rapide tkt",
    loading: true
  }]);

  useEffect(async () => {
    if (q === undefined || q.length === 0) {
      const response = await fetch(apiUrl + "articles/20", {
        method: "GET"
      });
      if (response.ok) {
        const i = await response.json();
        setArticles(i.data);
        console.log(i);
      } else {
        const i = await response.json();
        console.error(i.data.message);
      }
    }
    else {
      const query = { $regex: q, $options: 'i' };
      const response = await fetch(apiUrl + "articles/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({$or: [{ title: query}, {text: query}, {sources: query}]})
      });
      if (response.ok) {
        const i = await response.json();
        setArticles(i.data);
        console.log(i);
      } else {
        const i = await response.json();
        console.error(i.data.message);
      }
    }
  }, [q])

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
          defaultValue={q}
          className={styles.inputbar}
          name='q'
        ></input>
        <Button className={styles.transparentBtn} type='submit'>
          <img src="./search.png" alt="my image" width="30px" />
        </Button>
      </Form>

      <main className={styles.main}>

        {articles.map((article) =>
        (
          <div className={stylesC.card}>
            <div>
              <h4>{article.title}</h4>
              <p>{article.text}</p>
            </div>
            <div>
              {!article.loading && (<Button className={stylesC.seeBtn} href="/content">Voir</Button>)}
            </div>
          </div>
        ))}

        {articles.length === 0 &&
          (
            <div className={stylesC.card}>
              <div>
                <h4>Aucun article</h4>
                <p>Désolé nous n'avons trouvé aucun article correspondant 😥</p>
              </div>
            </div>
          )}
      </main>
    </div>
  );
}
