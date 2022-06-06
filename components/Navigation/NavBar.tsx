import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useLocalStorage from 'use-local-storage';
import useStore from '../../helpers/store';

import { Fade as Hamburger } from 'hamburger-react';
import classes from '../../styles/Navigation/NavBar.module.css';

const NavBar: FC = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [isDefaultDark, setIsDefaultDark] = useState(false);
  const { setScreenWidth, setTheme, screenWidth } = useStore();
  const [userTheme, setUserTheme] = useLocalStorage(
    'theme',
    isDefaultDark ? 'dark' : 'light'
  );

  useEffect(() => {
    const defaultDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    setIsDefaultDark(defaultDark);

    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      setScreenWidth(width);
    }
  }, []);

  const switchTheme = () => {
    const newTheme = userTheme === 'light' ? 'dark' : 'light';
    setUserTheme(newTheme);
    setTheme(newTheme);
    console.log(newTheme);
  };

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: '-150%' },
  };

  return (
    <nav className={classes.container}>
      <h4
        onClick={() => {
          console.log(screenWidth);
        }}
      >
        lr
      </h4>

      <div className={classes.menu}>
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
          onClick={switchTheme}
        >
          theme
        </motion.p>
      </div>

      <div className={classes.hamburger}>
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
      </div>
    </nav>
  );
};

export default NavBar;
