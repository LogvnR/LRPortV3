import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useStore from '../../helpers/store';
import { useThemeToggle } from '../../hooks/useTheme';

import { Fade as Hamburger } from 'hamburger-react';

const NavBar: FC = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const { setScreenWidth } = useStore();
  const { themeToggleHandler } = useThemeToggle();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      setScreenWidth(width);
    }
  }, [setScreenWidth]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: '-150%' },
  };

  return (
    <nav className="flex flex-row justify-between bg-transparent">
      <h4 className="m-3 text-lg font-medium uppercase font-Raleway text-dark-blue dark:text-light-grey">
        lr
      </h4>

      <section className="flex items-center justify-between w-3/5 pb-1 text-sm font-medium tracking-wide text-white uppercase dark:text-light-grey md:w-2/5 md:tracking-widest lg:w-1/4 lg:cursor-pointer">
        <Link href="#projects">
          <motion.p
            initial="hidden"
            variants={variants}
            animate={menuToggle ? 'visible' : 'hidden'}
            transition={{ type: 'spring', stiffness: 175, duration: 0.2 }}
          >
            projects
          </motion.p>
        </Link>

        <Link href="#contact">
          <motion.p
            initial="hidden"
            variants={variants}
            animate={menuToggle ? 'visible' : 'hidden'}
            transition={{
              delay: 0.1,
              type: 'spring',
              stiffness: 175,
              duration: 0.2,
            }}
          >
            contact
          </motion.p>
        </Link>

        <motion.p
          initial="hidden"
          variants={variants}
          animate={menuToggle ? 'visible' : 'hidden'}
          transition={{
            delay: 0.2,
            type: 'spring',
            stiffness: 175,
            duration: 0.2,
          }}
          onClick={themeToggleHandler}
        >
          theme
        </motion.p>
      </section>

      <Hamburger
        toggled={menuToggle}
        toggle={setMenuToggle}
        size={24}
        color="white"
        direction="right"
        duration={0.3}
        easing="ease-in"
        label="Show menu"
        hideOutline={false}
        rounded
      />
    </nav>
  );
};

export default NavBar;
