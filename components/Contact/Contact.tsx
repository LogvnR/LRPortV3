import { useThemeToggle } from '../../hooks/useTheme';

import photo2Light from '../../assets/backgrounds/lightMode2.jpg';
import photo2Dark from '../../assets/backgrounds/darkMode2.jpg';

import PhotoCard from '../Cards/PhotoCard/PhotoCard';
import Title from '../UI/Title/Title';
import Form from '../UI/Form/Form';
import ScrollReveal from '../Cards/ScrollReveal/ScrollReveal';

const Contact = () => {
  const { theme } = useThemeToggle();
  return (
    <PhotoCard
      image={theme === 'dark' ? photo2Dark : photo2Light}
      option="Sub"
      id="contact"
    >
      <div className="flex flex-col items-center w-full md:mt-8 xl:mt-10">
        <Title title="contact" />
        <ScrollReveal className="flex items-center justify-center w-full h-full mt-2 lg:items-start">
          <Form />
        </ScrollReveal>
      </div>
    </PhotoCard>
  );
};

export default Contact;
