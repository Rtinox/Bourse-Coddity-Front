import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function Navbar() {
  const router = useRouter();
  return (
    <div className={styles.headercontainer}>
      <div className={styles.headeritems}>
        <p>Le site de la source informative !</p>
      </div>
      <div className={styles.headeritems}>
        <button className={styles.loginButton}>
          {router.basePath == '/login' ? (
            <Link href='/login'>Se connecter</Link>
          ) : (
            <Link href='/register'>S'inscrire</Link>
          )}
        </button>
      </div>
    </div>
  );
}
