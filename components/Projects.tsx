import { FC } from 'react';
import { motion } from 'framer-motion';

import ProjectCard from './Cards/ProjectCard';
import Title from './UI/Title';

import { ProjectInfo } from '../helpers/content';
import ScrollReveal from './Cards/ScrollReveal';

const Projects: FC = () => {
  return (
    <section
      className="flex flex-col items-center w-full py-8 bg-white dark:bg-off-black"
      id="projects"
    >
      <Title title="projects" />
      <p className="mt-4 text-xs italic font-light tracking-wider font-Roboto text-dark-blue dark:text-light-grey">
        Projects are listed from latest to earliest
      </p>
      <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center md:gap-y-8 lg:gap-x-8 lg:gap-y-16 xl:gap-y-12">
        {ProjectInfo.map((project) => (
          <ProjectCard {...project} key={project.key} />
        ))}
      </div>
      <ScrollReveal className="flex justify-center w-full">
        <motion.a
          whileTap={{ scale: 0.9 }}
          href="https://github.com/LogvnR"
          role="button"
          target="_blank"
          className="w-2/3 py-3 my-4 text-sm font-medium text-center uppercase transition-all duration-150 ease-in-out bg-transparent border border-solid text-dark-blue border-dark-blue dark:text-light-grey dark:border-light-grey hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black dark:hover:border-white md:w-1/3 lg:w-1/6"
        >
          view more on github
        </motion.a>
      </ScrollReveal>
    </section>
  );
};

export default Projects;
