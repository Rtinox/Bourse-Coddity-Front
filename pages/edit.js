import Head from "next/head";
import styles from "../styles/Home.module.css";
import style from "../styles/Content.module.css";
import Navbar from "../components/Navbar";
import { Button, Form } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  // URL de l'api (Back)
  const apiUrl = "https://codity-wedidit.herokuapp.com/";
  const router = useRouter();
  const { id } = router.query; // paramètre de l'url

  // Variables de la page
  const [title, setTitle] = useState("Titre");
  const [text, setText] = useState(
    "Ne charge pas tes épaules d'un fardeau qui excède tes forces."
  );
  const [sources, setSources] = useState([]);
  const [contributors, setContributors] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(async () => {
    // Si un id est donné
    if (id !== undefined && id.length !== 0) {
      // Récupération de l'article depuis le back
      const response = await fetch(apiUrl + `articles/id/${id}`, {
        method: "GET",
      });
      if (response.ok) {
        const i = await response.json();

        // Mise à jour des variables avec la réponse du back
        setTitle(i.data.title);
        setText(i.data.text);
        setSources(i.data.sources);
        setContributors(i.data.contributors);
        //console.log(i); // Debug
      } else {
        // En cas d'érreur
        const i = await response.json();
        setTitle("Erreur");
        setText(i.data.message);
      }
    }
  }, [id]);

  // Sauvegarde des modifications
  async function save() {
    // Si c'est la modification d'un article
    let path = `articles/${id}`;
    let method = "PUT";

    // Si c'est la création d'un article
    if (id == undefined) {
      path = `articles/new`;
      method = "POST";
    }

    // Récupération du token d'auth
    const token = window.localStorage.getItem("access_token");

    // Envoi des modifications sur le back
    const response = await fetch(apiUrl + path, {
      method: method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        text: text,
        sources: sources,
        contributors: contributors,
      }),
    });
    if (response.ok) {
      // Article créé et redirection vers celui-ci
      const i = await response.json();
      window.location.href = "/content?id=" + i.data._id;
    } else {
      // Erreur lors de la création de l'article
      const i = await response.json();
      setErrorMessage(i.data.message);
    }
  }

  // Rendu de la page
  return (
    <div className={styles.container}>
      <Head>
        <title>Bourse Coddity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {Navbar()}

      {errorMessage.length >= 1 && <h4>{errorMessage}</h4>}
      <main className={styles.main} style={{ justifyContent: "flex-start" }}>
        <div className={[style.columns, style.wrow].join(" ")}>
          <div className={[style.column, style.wcol, style.wcol8].join(" ")}>
            <input
              type="text"
              className={[style.titleInput, style.heading].join(" ")}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <div className={style.divblock}>
              <textarea
                className={style.textfield}
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className={[style.column2, style.wcol, style.wcol4].join(" ")}>
            <div className={style.section}>
              <h3>Sources</h3>
              <ul>
                {sources.map((source) => (
                  <li>
                    <a href={source} target="_blank">
                      {new URL(source).hostname.replace("www.", "")}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className={style.section}>
              <h3>Articles similaires</h3>
            </div>
            <div className={style.section}>
              <h3>Participants</h3>
              {contributors.map((contributor) => (
                <li>
                  <a href={contributor} target="_blank">
                    {contributor}
                  </a>
                </li>
              ))}
            </div>

            <Button /*href={"/content?id=" + id}*/ onClick={save}>
              Valider
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
