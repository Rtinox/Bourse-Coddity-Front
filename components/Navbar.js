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
  const [loginTest, setLoginTest] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(function() {
    if(!loginTest)
    {
      setLoginTest(true);
      setAccess_token(window.localStorage.getItem("access_token"));
      setRefresh_token(window.localStorage.getItem("refresh_token"));
    }
  });

  useEffect(() => 
  {
    setUser(jwt.decode(access_token));
  }, [refresh_token])

  useEffect(() => 
  {
    if(user != null) setLogged(true);
    else setLogged(false);
  }, [user])

  const logout = async event => {
    
    const apiUrl = "https://codity-wedidit.herokuapp.com/";
    const token = window.localStorage.getItem("access_token");

    const response = await fetch(apiUrl + "auth/logout", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    if (response.ok) {
      window.localStorage.removeItem("access_token")
      window.localStorage.removeItem("refresh_token")
      setLogged(false);
      return true;
    } else {
      const i = await response.json();
      console.log("Erreur");
      return false;
    }
  }

  return (
    <div className={styles.headercontainer}>
      <div className={styles.headeritems}>
        <a href="/">Le site de la source informative !</a>
      </div>
      <div className={styles.headeritems}>
        { logged ?
          (
            <h5>{user.pseudo} - <a href="#" onClick={logout}>Logout</a></h5>
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
