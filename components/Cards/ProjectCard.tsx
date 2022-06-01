import { FC } from 'react';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import classes from '../../styles/Cards/ProjectCard.module.css';

import { ProjectContent } from '../../helpers/types';

const ProjectCard: FC<ProjectContent> = ({ title, tech, photos, date }) => {
  return (
    <div className={classes.container}>
      <div className={classes['image-container']}>
        <Image
          layout="fill"
          objectFit="contain"
          src={photos.mobile}
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
        <div className={classes.btn}>
          More Info <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
