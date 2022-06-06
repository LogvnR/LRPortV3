import { FC } from 'react';
import { motion } from 'framer-motion';

import classes from '../styles/Components/Projects.module.css';
import ProjectCard from './Cards/ProjectCard';
import Title from './UI/Title';

import { ProjectInfo } from '../helpers/content';
import ScrollReveal from './Cards/ScrollReveal';

const Projects: FC = () => {
  return (
    <section className={classes.container} id="projects">
      <Title title="projects" />
      <p className={classes.message}>
        Projects are listed from latest to earliest
      </p>
      <div className={classes['project-container']}>
        {ProjectInfo.map((project) => (
          <ProjectCard {...project} key={project.key} />
        ))}
      </div>
      <ScrollReveal className={classes['btn-container']}>
        <motion.a
          whileTap={{ scale: 0.9 }}
          href="https://github.com/LogvnR"
          role="button"
          target="_blank"
          className={classes['view-more']}
        >
          view more on github
        </motion.a>
      </ScrollReveal>
    </section>
  );
};

export default Projects;
