import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function Login() {

  const [registerError, setRegisterError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pseudo, setPseudo] = useState('');

  const apiUrl = "https://codity-wedidit.herokuapp.com/";

  const register = async event => {
    event.preventDefault();

    const response = await fetch(apiUrl + "users/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pseudo, email, password })
    });
    if (response.ok) {
      const i = await response.json();
      setRegisterError("Vous pouvez vous connecter !");
      window.location.href = "/login";
    } else {
      const i = await response.json();
      setRegisterError(i.data.message);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Bourse Coddity</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {Navbar()}

      <main className={styles.main}>
        <h3>Enregistrement</h3>
        <h4>{registerError}</h4>
        <Form onSubmit={register}>
          <Form.Group>
            <Form.Label>Pseudo</Form.Label>
            <Form.Control type='text' placeholder='Enter pseudo' value={pseudo} onChange={(e) => setPseudo(e.target.value)} required/>
          </Form.Group>

          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </Form.Group>

          <Button variant='primary' type='submit' className='buttonForm'>
            Submit
          </Button>
          <Button href="login" className='buttonForm'>Se connecter ?</Button>
        </Form>
      </main>

      {Footer()}
    </div>
  );
}
