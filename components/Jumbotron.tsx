import { FC, useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import PhotoCard from './Cards/PhotoCard';
import NavBar from './Navigation/NavBar';
import Technologies from './UI/Technologies';

import photo1 from '../assets/backgrounds/lightMode1.jpg';

import classes from '../styles/Components/Jumbotron.module.css';

const Jumbotron: FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-back',
      animatedClassName: 'animated',
    });
    AOS.refresh();
  }, []);

  return (
    <PhotoCard image={photo1} option="Main">
      <>
        <NavBar />
        <div className={classes.titleContainer}>
          <p
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-once="false"
            className={classes.titleOne}
          >
            software developer
          </p>
          <h1>Logan Ricard</h1>
          <p
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
            data-aos-duration="1200"
            className={classes.titleTwo}
          >
            <Technologies />
          </p>
        </div>
      </>
    </PhotoCard>
  );
};

export default Jumbotron;
