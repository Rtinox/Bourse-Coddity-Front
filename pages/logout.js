import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import jwt from 'jsonwebtoken';
import cookieCutter from 'cookie-cutter'

export default function Logout() {

  const apiUrl = "https://codity-wedidit.herokuapp.com/";

  const logout = async event => {
    
    const token = window.localStorage.getItem("access_token");
    cookieCutter.set("token", token);

    const response = await fetch(apiUrl + "auth/logout", {
      method: "GET",
    });
    if (response.ok) {
      window.localStorage.removeItem("access_token")
      window.localStorage.removeItem("refresh_token")
      console.log("Déconnecté");
      return true;
    } else {
      const i = await response.json();
      console.log("Erreur");
    }
  }


  return (
    <div>
    { logout() ? (
      <h1>Vous avez été déconnecté !</h1>
      ) : (
        <h1>Erreur :(</h1>
      )}
    </div>
  );
}
