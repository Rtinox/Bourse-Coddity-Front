import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "./../components/Navbar";
import stylesC from "../styles/Search.module.css";
import { Button, Form } from "react-bootstrap";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter()

  // URL de l'api (Back)
  const apiUrl = "https://codity-wedidit.herokuapp.com/";
  const { q } = router.query; // paramètre de l'url

  // variables de la page
  const [articles, setArticles] = useState([{
    title: "Recherche en cours ...",
    text: "C'est rapide tkt",
    loading: true
  }]);

  useEffect(async () => {
    // Si pas de recherche
    if (q === undefined || q.length === 0) {
      const response = await fetch(apiUrl + "articles/20", {
        method: "GET"
      });
      if (response.ok) {
        // Affichage des 20 premiers articles
        const i = await response.json();
        setArticles(i.data);
        //console.log(i); // Debug
      } else {
        // Erreur lors de la recherche
        const i = await response.json();
        setArticles([{
          title: "Erreur",
          text: i.data.message,
          loading: true
        }]);
      }
    }
    else {
      // Si recherche
      const query = { $regex: q, $options: 'i' };
      const response = await fetch(apiUrl + "articles/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ $or: [{ title: query }, { text: query }, { sources: query }] })
      });
      if (response.ok) {
        // Affichage de la recherche
        const i = await response.json();
        setArticles(i.data);
        //console.log(i); // Debug
      } else {
        // Erreur lors de la recherche
        const i = await response.json();
        setArticles([{
          title: "Erreur",
          text: i.data.message,
          loading: true
        }]);
      }
    }
  }, [q])

  // Rendu de la page
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
            <div className={stylesC.item}>
              <h4>{article.title}</h4>
              <p>{article.text}</p>
            </div>
            <div className={stylesC.item}>
              {!article.loading && (<Button className={stylesC.seeBtn} href={"/content?id=" + article._id}>Voir</Button>)}
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
