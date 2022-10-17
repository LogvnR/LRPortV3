import { FC, useEffect } from 'react';

import { useThemeToggle } from '../hooks/useTheme';

import AOS from 'aos';
import 'aos/dist/aos.css';

import PhotoCard from './Cards/PhotoCard';
import NavBar from './Navigation/NavBar';
import Technologies from './UI/Technologies';

import photo1 from '../assets/backgrounds/lightMode1.jpg';
import photo2 from '../assets/backgrounds/darkMode1alt.jpg';

const Jumbotron: FC = () => {
  const { theme } = useThemeToggle();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-back',
      animatedClassName: 'animated',
    });
    AOS.refresh();
  }, []);

  return (
    <PhotoCard image={theme === 'dark' ? photo2 : photo1} option="Main">
      <>
        <NavBar />
        <div className="flex flex-col items-center mt-6 mb-6">
          <p
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-once="false"
            className="mb-4 text-sm font-bold uppercase lg:text-base font-Raleway text-dark-blue dark:text-light-grey"
          >
            software developer
          </p>
          <h1 className="m-0 text-5xl tracking-wider font-Dafoe text-dark-blue dark:text-light-grey lg:text-7xl">
            Logan Ricard
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
            data-aos-duration="1200"
            className="mt-5 text-sm font-bold tracking-wide uppercase lg:text-base font-Raleway text-dark-blue dark:text-light-grey"
          >
            <Technologies />
          </p>
        </div>
      </>
    </PhotoCard>
  );
};

export default Jumbotron;
