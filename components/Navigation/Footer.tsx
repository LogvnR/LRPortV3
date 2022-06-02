import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import classes from '../../styles/Navigation/Footer.module.css';

import ScrollReveal from '../Cards/ScrollReveal';

const Footer: FC = () => {
  return (
    <footer className={classes.container}>
      <ScrollReveal className={classes.socialContainer}>
        <>
          <h2>Logan Ricard</h2>
          <AnimatePresence>
            <div className={classes.buttonContainer}>
              <motion.a
                whileTap={{ scale: 0.8 }}
                role="button"
                href="https://www.instagram.com/logvn.js/"
                target="_blank"
              >
                <FontAwesomeIcon
                  className={classes.iconStyle}
                  icon={faInstagram}
                />
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.8 }}
                role="button"
                href="https://twitter.com/LogvnRicvrd"
                target="_blank"
              >
                <FontAwesomeIcon
                  className={classes.iconStyle}
                  icon={faTwitter}
                />
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.8 }}
                role="button"
                href="https://www.linkedin.com/in/logvnr/"
                target="_blank"
              >
                <FontAwesomeIcon
                  className={classes.iconStyle}
                  icon={faLinkedin}
                />
              </motion.a>
            </div>
          </AnimatePresence>
        </>
      </ScrollReveal>
      <ScrollReveal className={classes.emailContainer}>
        <p>logvnjs@gmail.com</p>
      </ScrollReveal>
      <ScrollReveal className={classes.wmContainer}>
        <p>©2021 - Website by Logan Ricard</p>
      </ScrollReveal>
    </footer>
  );
};

export default Footer;
