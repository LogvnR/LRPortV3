import { FC, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Technologies: FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-back',
      animatedClassName: 'animated',
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <span
        data-aos="fade-left"
        data-aos-easing="ease-in-out"
        data-aos-delay="800"
        data-aos-duration="1200"
      >
        html
      </span>{' '}
      <span
        className="text-white dark:text-accent"
        data-aos="fade-left"
        data-aos-easing="ease-in-out"
        data-aos-delay="1000"
        data-aos-duration="1200"
      >
        &#9679;
      </span>{' '}
      <span
        data-aos="fade-left"
        data-aos-easing="ease-in-out"
        data-aos-delay="1200"
        data-aos-duration="1200"
      >
        css
      </span>{' '}
      <span
        className="text-white dark:text-accent"
        data-aos="fade-left"
        data-aos-easing="ease-in-out"
        data-aos-delay="1400"
        data-aos-duration="1200"
      >
        &#9679;
      </span>{' '}
      <span
        data-aos="fade-left"
        data-aos-easing="ease-in-out"
        data-aos-delay="1600"
        data-aos-duration="1200"
      >
        javascript
      </span>{' '}
      <span
        className="text-white dark:text-accent"
        data-aos="fade-left"
        data-aos-easing="ease-in-out"
        data-aos-delay="1800"
        data-aos-duration="1200"
      >
        &#9679;
      </span>{' '}
      <span
        data-aos="fade-left"
        data-aos-easing="ease-in-out"
        data-aos-delay="2000"
        data-aos-duration="1200"
      >
        react
      </span>
    </>
  );
};

export default Technologies;
