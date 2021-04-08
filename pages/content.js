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

      <main className={styles.main} style={{ justifyContent: 'flex-start' }}>
        <div className={[style.columns, style.wrow].join(' ')}>
          <div className={[style.column, style.wcol, style.wcol8].join(' ')}>
            <h1 className={style.heading}>Title</h1>
            <div className={style.divblock}>
              <p className={style.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
          </div>
          <div className={[style.column2, style.wcol, style.wcol4].join(' ')}>
            <div className={style.section}>a</div>
            <div className={style.section}>b</div>
            <div className={style.section}>c</div>
          </div>
        </div>
      </main>
    </div>
  );
}

const handleClick = (e) => {
  this.$router.push({ path: this.$route.path, query: { foo: "bar" } });
};
