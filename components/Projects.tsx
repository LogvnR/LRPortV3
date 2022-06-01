import { FC } from 'react';

import classes from '../styles/Components/Projects.module.css';
import Title from './UI/Title';

const Projects: FC = () => {
  return (
    <section className={classes.container}>
      <Title title="projects" />
      <div className={classes['project-container']}></div>
    </section>
  );
};

export default Projects;
