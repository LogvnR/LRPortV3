import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Jumbotron from '../components/Jumbotron';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <main className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Jumbotron />
    </main>
  );
};

export default Home;