import { FC } from 'react';

import classes from '../styles/Components/Projects.module.css';
import ProjectCard from './Cards/ProjectCard';
import Title from './UI/Title';

import { ProjectInfo } from '../helpers/content';

const Projects: FC = () => {
  return (
    <section className={classes.container}>
      <Title title="projects" />
      <div className={classes['project-container']}>
        {ProjectInfo.map((project) => (
          <ProjectCard {...project} key={project.key} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
