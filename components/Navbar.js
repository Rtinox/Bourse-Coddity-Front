import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import jwt from 'jsonwebtoken';
import cookieCutter from 'cookie-cutter'

export default function Navbar() {
  const router = useRouter();

  return (
    <div className={styles.headercontainer}>
      <div className={styles.headeritems}>
        <a href="/">Le site de la source informative !</a>
      </div>
      <div className={styles.headeritems}>
        { true ?
          (
            <h1>Bienvenue</h1>
          ) : (
            <button className={styles.loginButton}>
            {router.basePath != '/login' ? (
              <Link href="/login">Se connecter</Link>
            ) : (
              <Link href="register">S'inscrire</Link>
            )}
          </button>
          )
        }
      </div>
    </div>
  );
}
