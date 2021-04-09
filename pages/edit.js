import Head from "next/head";
import styles from "../styles/Home.module.css";
import style from "../styles/Content.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  return (
    <div className={styles.container}>
      <Head>
        <title>Bourse Coddity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {Navbar()}

      <main className={styles.main} style={{ justifyContent: "flex-start" }}>
        <div className={[style.columns, style.wrow].join(" ")}>
          <div className={[style.column, style.wcol, style.wcol8].join(" ")}>
            <input type="text" className={[style.titleInput, style.heading].join(" ")} defaultValue="Title"></input>
            <div className={style.divblock}>
              <textarea className={style.textfield} 
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis
              cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
              commodo diam libero vitae erat. Aenean faucibus nibh et justo
              cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
              tristique posuere."></textarea>
            </div>
          </div>
          <div className={[style.column2, style.wcol, style.wcol4].join(" ")}>
            <div className={style.section}>
              <h3>Sources</h3>
              <ul>
                <li>
                  <a href="https://proedt.fr" target="_blank">
                    ProEDT
                  </a>
                </li>
                <li>
                  <a href="https://google.fr" target="_blank">
                    Google
                  </a>
                </li>
              </ul>
            </div>
            <div className={style.section}>
              <h3>Articles similaires</h3>
            </div>
            <div className={style.section}>
              <h3>Participants</h3>
            </div>

            <Button href="/content">Valider</Button>
          </div>
        </div>
      </main>
    </div>
  );
}

const handleClick = (e) => {
  this.$router.push({ path: this.$route.path, query: { foo: "bar" } });
};
