import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import useStore from '../../helpers/store';

import { ProjectContent } from '../../helpers/types';
import { ProjectInfo } from '../../helpers/content';

import Link from 'next/link';

const ProjectId: NextPage = () => {
  const router = useRouter();
  const projectId = router.query.projectId!;
  const { screenWidth } = useStore();

  const projects = ProjectInfo.filter((project: ProjectContent) => {
    if (project.id === projectId) {
      return project;
    }
    return false;
  });

  return (
    <main className="bg-gradient-to-b from-light-blue to-white dark:from-dark-blue dark:to-off-black">
      <Head>
        <title>Project: {projects[0]?.title}</title>
        <meta
          name="description"
          content={`A Project using ${projects[0]?.tech}`}
        />
        <link rel="icon" href="/lr512.png" />
      </Head>
      <div className="flex flex-col items-center px-4 py-6">
        <Link href="/">
          <motion.div
            className="flex items-center self-start justify-start w-1/3 gap-2 py-2 mx-1 mb-4 text-sm font-semibold bg-transparent rounded md:text-base text-dark-blue dark:text-light-grey"
            whileTap={{ scale: 0.9 }}
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Go Back
          </motion.div>
        </Link>

        <div className="w-full h-[70vh] relative mb-4">
          <Image
            layout="fill"
            objectFit="contain"
            src={
              screenWidth >= 1025
                ? projects[0]?.photos.desktop
                : projects[0]?.photos.mobile
            }
            alt="Project Photo"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-2 mb-6 lg:w-1/3 md:w-1/2 text-dark-blue dark:text-light-grey">
          <h2 className="m-0 text-lg font-semibold md:text-2xl font-Montserrat">
            {projects[0]?.title}
          </h2>
          <h4 className="m-0 text-xs italic font-normal md:text-sm font-Montserrat">
            {projects[0]?.date}
          </h4>
          <div className="w-3/5 h-[2px] bg-gradient-to-r from-accent to-accent-alt"></div>
        </div>
        <div className="flex flex-col items-start justify-center w-full gap-4 md:w-3/5 lg:w-1/2 text-dark-blue dark:text-light-grey">
          <p className="self-center m-0 text-sm italic font-normal md:text-base font-Montserrat">
            {projects[0]?.tech}
          </p>
          <p className="m-0 text-sm font-normal leading-6 md:text-base font-Roboto">
            {projects[0]?.desc}
          </p>
        </div>
        <div className="w-1/3 md:w-1/6 lg:w-1/12 h-[2px] bg-dark-blue dark:bg-light-grey mt-6"></div>
        <div className="flex items-center justify-between w-full gap-8 my-6 md:w-3/5 lg:1/2 lg:gap-16">
          <motion.a
            whileTap={{ scale: 0.95 }}
            role="button"
            href={projects[0]?.links.github}
            target="_blank"
            className="w-full py-3 text-sm font-medium tracking-wide text-center uppercase bg-transparent border-2 border-solid rounded md:text-base text-navy-blue dark:text-light-blue-alt border-navy-blue dark:border-light-blue-alt font-Roboto"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.95 }}
            role="button"
            href={projects[0]?.links.view}
            target="_blank"
            className="w-full py-3 text-sm font-medium tracking-wide text-center text-white uppercase border-2 border-transparent border-solid rounded md:text-base bg-navy-blue dark:bg-light-blue-alt font-Roboto"
          >
            View Site <FontAwesomeIcon icon={faArrowRight} />
          </motion.a>
        </div>
      </div>
    </main>
  );
};

export default ProjectId;
