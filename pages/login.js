import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './../components/Navbar';

export default function Login() {
    return (
        
    <div className={styles.container}>
        <Head>
            <title>Bourse Coddity</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {{ Navbar() }}
    
    </div>
    )
}