import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import useStore from '../../helpers/store';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import classes from '../../styles/Cards/ProjectCard.module.css';

import { ProjectContent } from '../../helpers/types';
import Link from 'next/link';

import ScrollReveal from './ScrollReveal';

const ProjectCard: FC<ProjectContent> = ({ title, tech, photos, date, id }) => {
  const { screenWidth } = useStore();
  return (
    <ScrollReveal className={classes.container}>
      <>
        <div className={classes['image-container']}>
          <Image
            layout="fill"
            objectFit="contain"
            src={screenWidth >= 1025 ? photos.desktop : photos.mobile}
            alt={title}
          />
        </div>
        <div className={classes['content-container']}>
          <div className={classes['text-container']}>
            <div className={classes['title-container']}>
              <h3 className={classes.title}>{title}</h3>
              <h4 className={classes.date}>{date}</h4>
            </div>
            <p className={classes.tech}>{tech}</p>
          </div>
          <Link href={`/projects/${id}`}>
            <motion.div whileTap={{ scale: 0.9 }} className={classes.btn}>
              More Info <FontAwesomeIcon icon={faArrowRight} />
            </motion.div>
          </Link>
        </div>
      </>
    </ScrollReveal>
  );
};

export default ProjectCard;
