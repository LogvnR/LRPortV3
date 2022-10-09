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
    <ScrollReveal className="flex w-4/5 gap-4 mt-6 mb-4 md:max-w-[280px] lg:max-w-[33%] xl:max-w-[32%]">
      <>
        <div className="w-[118px] h-[180px] relative lg:w-[301px] lg:h-[170px]">
          <Image
            layout="fill"
            objectFit="contain"
            src={screenWidth >= 1025 ? photos.desktop : photos.mobile}
            alt={title}
          />
        </div>
        <div className="flex flex-col justify-between w-1/2 pt-4 pb-2 lg:w-2/5 lg:pt-2 xl:w-1/3">
          <div className="flex flex-col text-dark-blue dark:text-light-grey">
            <div className="flex flex-col items-start gap-1 pb-1 border-b border-solid border-dark-blue dark:border-light-grey">
              <h3 className="m-0 text-xs font-bold font-Montserrat">{title}</h3>
              <h4 className="m-0 text-[10px] font-Montserrat font-medium italic">
                {date}
              </h4>
            </div>
            <p className="mt-2 text-[11px] font-Montserrat font-normal italic">
              {tech}
            </p>
          </div>
          <Link href={`/projects/${id}`}>
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="w-full flex justify-center items-center gap-2 py-2 bg-black text-white font-Montserrat text-[10px] uppercase tracking-widest transition-all duration-150 ease-in-out cursor-pointer hover:bg-gradient-to-r hover:from-accent hover:to-accent-alt"
            >
              More Info{' '}
              <FontAwesomeIcon className="mb-[0.1rem]" icon={faArrowRight} />
            </motion.div>
          </Link>
        </div>
      </>
    </ScrollReveal>
  );
};

export default ProjectCard;
