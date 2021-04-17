import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import jwt from 'jsonwebtoken';
import {useEffect, useState} from 'react';

export default function Navbar() {
  const router = useRouter();
  const [logged, setLogged] = useState(false);
  const [access_token, setAccess_token] = useState('');
  const [refresh_token, setRefresh_token] = useState('');
  const [user, setUser] = useState(null);

  useEffect(function() {
    setAccess_token(window.localStorage.getItem("access_token"));
    setRefresh_token(window.localStorage.getItem("refresh_token"));
    setUser(jwt.decode(access_token));
  });

  const isLog = () =>
  {
    console.log(user)
    if(user != null) return true;
    else return false;
  }

  return (
    <div className={styles.headercontainer}>
      <div className={styles.headeritems}>
        <a href="/">Le site de la source informative !</a>
      </div>
      <div className={styles.headeritems}>
        { isLog() ?
          (
            <h5>{user.pseudo} - <a href="logout">Logout</a></h5>
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
