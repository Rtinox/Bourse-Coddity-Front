import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import { Form, Button } from 'react-bootstrap';

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bourse Coddity</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {Navbar()}

      <main className={styles.main}>
        <h3>Connexion</h3>
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </main>

      {Footer()}
    </div>
  );
}
