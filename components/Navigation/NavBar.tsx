import { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useStore from '../../helpers/store';
import { useThemeToggle } from '../../hooks/useTheme';
import { ActionIcon } from '@mantine/core';

import { BsChevronCompactDown } from 'react-icons/bs';
import { BsSun, BsMoon } from 'react-icons/bs';

const NavBar: FC = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const { setScreenWidth } = useStore();
  const { theme, themeToggleHandler } = useThemeToggle();

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
      <h4 className="m-3 min-w-[28px] text-lg font-medium uppercase font-Raleway text-dark-blue dark:text-light-grey">
        lr
      </h4>

      <section
        className={`flex flex-col items-center ${
          menuToggle ? 'justify-end' : 'justify-start'
        } w-3/5 text-sm font-medium tracking-wide text-white uppercase dark:text-light-grey md:w-2/5 md:tracking-widest lg:w-1/4 lg:cursor-pointer`}
      >
        <div className="flex items-center justify-between w-full">
          <Link href="#about">
            <motion.p
              initial="hidden"
              variants={variants}
              animate={menuToggle ? 'visible' : 'hidden'}
              transition={{ type: 'spring', stiffness: 175, duration: 0.2 }}
              onClick={() => setMenuToggle(false)}
            >
              about
            </motion.p>
          </Link>

          <Link href="#projects">
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
              onClick={() => setMenuToggle(false)}
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
                delay: 0.2,
                type: 'spring',
                stiffness: 175,
                duration: 0.2,
              }}
              onClick={() => setMenuToggle(false)}
            >
              contact
            </motion.p>
          </Link>
        </div>
        <BsChevronCompactDown
          className={`${
            menuToggle ? 'mt-0 rotate-180 translate-y-2' : '-mt-2 animate-pulse'
          } transition-all ease-in-out duration-300`}
          size={22}
          onClick={() => {
            setMenuToggle(!menuToggle);
          }}
        />
      </section>

      <div className="flex items-center justify-center m-3">
        <ActionIcon
          variant="subtle"
          className="text-white dark:text-light-grey hover:text-light-blue hover:bg-white dark:hover:bg-navy-blue dark:hover:text-light-blue-alt"
          onClick={themeToggleHandler}
        >
          {theme === 'light' ? <BsSun size={18} /> : <BsMoon size={18} />}
        </ActionIcon>
      </div>
    </nav>
  );
};

export default NavBar;
