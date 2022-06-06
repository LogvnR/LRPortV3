import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import useStore from '../../helpers/store';

import classes from '../../styles/Pages/ProjectPage.module.css';

import { ProjectContent } from '../../helpers/types';
import { ProjectInfo } from '../../helpers/content';

import Link from 'next/link';

const ProjectId: NextPage = () => {
  const router = useRouter();
  const projectId = router.query.projectId;
  const { theme, screenWidth } = useStore();

  const projects = ProjectInfo.filter((project: ProjectContent) => {
    if (project.id === projectId) {
      return project;
    }
    return false;
  });

  return (
    <main className={classes['main-body']} data-theme={theme}>
      <Head>
        <title>Project: {projects[0]?.title}</title>
        <meta
          name="description"
          content={`A Project using ${projects[0]?.tech}`}
        />
        <link rel="icon" href="/lr512.png" />
      </Head>
      <div className={classes.container}>
        <Link href="/">
          <motion.div className={classes.return} whileTap={{ scale: 0.9 }}>
            <FontAwesomeIcon icon={faArrowLeft} /> Go Back
          </motion.div>
        </Link>

        <div className={classes['image-container']}>
          <Image
            layout="fill"
            objectFit="contain"
            src={
              screenWidth >= 1025
                ? projects[0].photos.desktop
                : projects[0].photos.mobile
            }
            alt="Project Photo"
          />
        </div>
        <div className={classes['title-container']}>
          <h2 className={classes.title}>{projects[0].title}</h2>
          <h4 className={classes.date}>{projects[0].date}</h4>
          <div className={classes.border}></div>
        </div>
        <div className={classes['description-container']}>
          <p className={classes.tech}>{projects[0].tech}</p>
          <p className={classes.description}>{projects[0].desc}</p>
        </div>
        <div className={classes['border-alt']}></div>
        <div className={classes['btn-container']}>
          <motion.a
            whileTap={{ scale: 0.95 }}
            role="button"
            href={projects[0].links.github}
            target="_blank"
            className={classes.github}
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.95 }}
            role="button"
            href={projects[0].links.view}
            target="_blank"
            className={classes['live-site']}
          >
            View Site <FontAwesomeIcon icon={faArrowRight} />
          </motion.a>
        </div>
      </div>
    </main>
  );
};

export default ProjectId;
