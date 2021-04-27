import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import jwt from 'jsonwebtoken';
import {useEffect, useState} from 'react';

export default function Navbar() {
  const router = useRouter();

  // Variables de la page
  const [logged, setLogged] = useState(false);
  const [access_token, setAccess_token] = useState('');
  const [refresh_token, setRefresh_token] = useState('');
  const [loginTest, setLoginTest] = useState(false);
  const [user, setUser] = useState(null);

  // Si le login n'est n'as pas était effectué
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

  // Finalisation du login coté front
  useEffect(() => 
  {
    console.log(user);
    if(user != null && new Date(user.exp) > new Date())
    {
      setUser(null);
      window.localStorage.removeItem("access_token")
      window.localStorage.removeItem("refresh_token")
    }

    if(user != null) setLogged(true);
    else setLogged(false);
  }, [user])

  // Fonction de déconnexion
  const logout = async event => {

    // URL de l'api (Back)
    const apiUrl = "https://codity-wedidit.herokuapp.com/";
    const token = window.localStorage.getItem("access_token");
    
    window.localStorage.removeItem("access_token")
    window.localStorage.removeItem("refresh_token")
    setLogged(false);

    const response = await fetch(apiUrl + "auth/logout", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    if (response.ok) {
      return true;
    } else {
      const i = await response.json();
      console.log("Erreur"); // Debug
      console.log(i.data); // Debug
      return false;
    }
  }

  // Rendu de la navbar
  return (
    <div className={styles.headercontainer}>
      <div className={styles.headeritems}>
        <a href="/">Le site de la source informative !</a>
      </div>
      <div className={styles.headeritems}>
        { logged ?
          (
              <h5><Link href="/edit">Créer</Link> - {user.pseudo} - <a href="#" onClick={logout}>Logout</a></h5>
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
