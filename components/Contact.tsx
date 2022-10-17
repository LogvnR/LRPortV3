import { FC } from 'react';

import { useThemeToggle } from '../hooks/useTheme';

import photo2Light from '../assets/backgrounds/lightMode2.jpg';
import photo2Dark from '../assets/backgrounds/darkMode2.jpg';

import PhotoCard from './Cards/PhotoCard';
import Title from './UI/Title';
import Form from './UI/Form';
import ScrollReveal from './Cards/ScrollReveal';

const Contact: FC = () => {
  const { theme } = useThemeToggle();
  return (
    <PhotoCard
      image={theme === 'dark' ? photo2Dark : photo2Light}
      option="Sub"
      id="contact"
    >
      <>
        <Title title="contact" />
        <ScrollReveal className="flex items-center justify-center w-full h-full mt-2 lg:items-start">
          <Form />
        </ScrollReveal>
      </>
    </PhotoCard>
  );
};

export default Contact;
