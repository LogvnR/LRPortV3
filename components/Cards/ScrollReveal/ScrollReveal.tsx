import { useRef, useEffect } from 'react';

interface ScrollRevealProps {
  className: string;
  children: JSX.Element;
}

const ScrollReveal = ({ className, children }: ScrollRevealProps) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    async function animate() {
      if (sectionRef.current) {
        const scrollrvl = (await import('scrollreveal')).default;
        scrollrvl().reveal(sectionRef.current, {
          reset: true,
          delay: 200,
        });
      }
    }
    animate();
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
