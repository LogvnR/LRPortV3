import type { NextPage } from 'next';
import Head from 'next/head';

import Jumbotron from '../components/Jumbotron/Jumbotron';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Navigation/Footer/Footer';
import About from '../components/About/About';

const Home: NextPage = () => {
  return (
    <main className="cursor-default">
      <Head>
        <title>Logan Ricard | Software Developer</title>
        <meta
          name="description"
          content="Creating modern web applications using JavaScript & React"
        />
        <link rel="icon" href="/lr512.png" />
      </Head>
      <Jumbotron />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
