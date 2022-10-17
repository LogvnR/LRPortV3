import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import ScrollReveal from '../Cards/ScrollReveal';

const Footer: FC = () => {
  return (
    <footer className="w-full bg-[#294056] dark:bg-[#11171d] pt-8 flex flex-col justify-center items-center">
      <ScrollReveal className="flex items-center justify-between w-3/4">
        <>
          <h2 className="m-0 text-base font-semibold tracking-wider font-Montserrat text-dark-blue dark:text-light-grey">
            Logan Ricard
          </h2>
          <AnimatePresence>
            <div className="flex items-end w-5/12 text-base justify-evenly">
              <motion.a
                whileTap={{ scale: 0.8 }}
                role="button"
                href="https://www.instagram.com/logvn.js/"
                target="_blank"
                className="flex items-center justify-center p-2 border-0 rounded-sm cursor-pointer text-dark-blue dark:text-light-grey/50"
              >
                <FontAwesomeIcon
                  className="text-sm text-center"
                  icon={faInstagram}
                />
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.8 }}
                role="button"
                href="https://twitter.com/LogvnRicvrd"
                target="_blank"
                className="flex items-center justify-center p-2 border-0 rounded-sm cursor-pointer text-dark-blue dark:text-light-grey/50"
              >
                <FontAwesomeIcon
                  className="text-sm text-center"
                  icon={faTwitter}
                />
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.8 }}
                role="button"
                href="https://www.linkedin.com/in/logvnr/"
                target="_blank"
                className="flex items-center justify-center p-2 border-0 rounded-sm cursor-pointer text-dark-blue dark:text-light-grey/50"
              >
                <FontAwesomeIcon
                  className="text-sm text-center"
                  icon={faLinkedin}
                />
              </motion.a>
            </div>
          </AnimatePresence>
        </>
      </ScrollReveal>
      <ScrollReveal className="w-3/4">
        <p className="mb-2 text-xs italic tracking-wide font-Roboto text-dark-blue dark:text-light-grey/50">
          logvnjs@gmail.com
        </p>
      </ScrollReveal>
      <ScrollReveal className="flex flex-col items-center justify-center w-3/4">
        <p className="mt-1 mb-2 text-xs opacity-25 font-Roboto text-dark-blue dark:text-light-grey">
          ©2022 - Website by Logan Ricard
        </p>
      </ScrollReveal>
    </footer>
  );
};

export default Footer;
