import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import { Button, Form } from "react-bootstrap";
import React, { useState } from 'react';

import cookieCutter from 'cookie-cutter'

export default function Home() {
  const [search, setSearch] = useState('')
  return (
    <div className={styles.container}>
      <Head>
        <title>Bourse Coddity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {Navbar()}

      <main className={styles.main}>
        <h3>Que recherchez-vous ?</h3>
        <Form action='search'>
          <input
            type="text"
            placeholder="Phrase, mots, ..."
            className={styles.inputbar} 
            name='q'
          ></input>
          <Button className={styles.transparentBtn} type='submit'>
            <img src="./search.png" alt="my image" width="30px" />
          </Button>
        </Form>
      </main>

      {Footer()}
    </div>
  );
}

const handleClick = (e) =>  {
  this.$router.push({path: this.$route.path, query: { foo: 'bar' }});
}
