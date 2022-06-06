import { FC } from 'react';

import useStore from '../helpers/store';

import photo2Light from '../assets/backgrounds/lightMode2.jpg';
import photo2Dark from '../assets/backgrounds/darkMode2.jpg';

import classes from '../styles/Components/Contact.module.css';

import PhotoCard from './Cards/PhotoCard';
import Title from './UI/Title';
import Form from './UI/Form';
import ScrollReveal from './Cards/ScrollReveal';

const Contact: FC = () => {
  const { theme } = useStore();
  return (
    <PhotoCard
      image={theme === 'dark' ? photo2Dark : photo2Light}
      option="Sub"
      id="contact"
    >
      <>
        <Title title="contact" />
        <ScrollReveal className={classes.container}>
          <Form />
        </ScrollReveal>
      </>
    </PhotoCard>
  );
};

export default Contact;
