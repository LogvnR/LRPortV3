import type { NextPage } from 'next';
import Head from 'next/head';

import useStore from '../helpers/store';

import Jumbotron from '../components/Jumbotron';
import Projects from '../components/Projects';
import classes from '../styles/Home.module.css';
import Contact from '../components/Contact';
import Footer from '../components/Navigation/Footer';

const Home: NextPage = () => {
  const { theme } = useStore();
  return (
    <main className={classes.container} data-theme={theme}>
      <Head>
        <title>Logan Ricard | Software Developer</title>
        <meta
          name="description"
          content="Creating modern web applications using JavaScript & React"
        />
        <link rel="icon" href="/lr512.png" />
      </Head>
      <Jumbotron />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
