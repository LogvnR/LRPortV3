import { FC } from 'react';

import classes from '../styles/Components/Projects.module.css';
import ProjectCard from './Cards/ProjectCard';
import Title from './UI/Title';

import { ProjectInfo } from '../helpers/content';

const Projects: FC = () => {
  return (
    <section className={classes.container}>
      <Title title="projects" />
      <p className={classes.message}>
        Projects are listed from latest to earliest
      </p>
      <div className={classes['project-container']}>
        {ProjectInfo.map((project) => (
          <ProjectCard {...project} key={project.key} />
        ))}
      </div>
      <a
        href="https://github.com/LogvnR"
        role="button"
        target="_blank"
        className={classes['view-more']}
      >
        view more on github
      </a>
    </section>
  );
};

export default Projects;
