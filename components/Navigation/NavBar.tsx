import { FC, useState } from 'react';
import { motion } from 'framer-motion';

import { Fade as Hamburger } from 'hamburger-react';
import classes from '../../styles/Navigation/NavBar.module.css';

const NavBar: FC = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: '-150%' },
  };

  return (
    <nav className={classes.container}>
      <h4>lr</h4>

      <div className={classes.menu}>
        <motion.p
          initial="hidden"
          variants={variants}
          animate={menuToggle ? 'visible' : 'hidden'}
          transition={{ type: 'spring', stiffness: 175, duration: 0.2 }}
        >
          projects
        </motion.p>
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
