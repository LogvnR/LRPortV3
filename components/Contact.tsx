import { FC } from 'react';

import useStore from '../helpers/store';

import photo2Light from '../assets/backgrounds/lightMode2.jpg';
import photo2Dark from '../assets/backgrounds/darkMode2.jpg';

import classes from '../styles/Components/Contact.module.css';

import PhotoCard from './Cards/PhotoCard';

const Contact: FC = () => {
  const { theme } = useStore();
  return (
    <PhotoCard image={theme === 'dark' ? photo2Dark : photo2Light} option="Sub">
      <>
        <div className={classes.container}></div>
      </>
    </PhotoCard>
  );
};

export default Contact;
