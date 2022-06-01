import { useRef, useEffect, FC } from 'react';
import scrollReveal from 'scrollreveal';

interface Props {
  className: string;
  children: JSX.Element;
}

const ScrollReveal: FC<Props> = ({ className, children }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 300,
      });
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${className} container scroll-section`}
      data-testid="section"
    >
      {children}
    </section>
  );
};

export default ScrollReveal;
