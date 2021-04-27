import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import jwt from 'jsonwebtoken';

export default function Login() {

  // Variables de la page
  const [loginError, setLoginError] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // URL de l'api (Back)
  const apiUrl = "https://codity-wedidit.herokuapp.com/";

  // Fonction de login
  const login = async event => {
    event.preventDefault();

    // Envoi du mail et mot de passe au back
    const response = await fetch(apiUrl + "auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    if (response.ok) {
      const i = await response.json();

      // S'il est authentifié, stockage des tokens et redirection
      const user = jwt.decode(i.data.access_token);
      window.localStorage.setItem("access_token", i.data.access_token)
      window.localStorage.setItem("refresh_token", i.data.refresh_token)
      setLoginError(`Bienvenue ${user.pseudo}`);
      window.location.href = "/";
    } else {
      // Si erreur, affichage de celle-ci
      const i = await response.json();
      setLoginError(i.data.message);
    }
  }

  // Rendu de la page
  return (
    <div className={styles.container}>
      <Head>
        <title>Bourse Coddity</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {Navbar()}

      <main className={styles.main}>
        <h3>Connexion</h3>
        <h4>{loginError}</h4>
        <Form onSubmit={login}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} required />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>
          <Button variant='primary' type='submit' className='buttonForm'>
            Submit
          </Button>
          <Button href="register" className='buttonForm'>S'enregistrer ?</Button>
        </Form>
      </main>

      {Footer()}
    </div>
  );
}
