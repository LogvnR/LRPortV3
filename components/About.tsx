import React from 'react';
import Title from './UI/Title';

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFigma,
} from 'react-icons/si';
import { HiCommandLine } from 'react-icons/hi2';
import ScrollReveal from './Cards/ScrollReveal';

const About = () => {
  return (
    <section
      className="flex flex-col items-center w-full py-8 bg-white dark:bg-off-black"
      id="about"
    >
      <Title title="About Me" />
      <ScrollReveal className="w-4/5">
        <p className="w-full mt-4 text-sm font-normal tracking-wide text-left font-Montserrat text-dark-blue/80 dark:text-light-grey/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          commodo, felis eu sollicitudin pulvinar, nisl turpis suscipit urna,
          non facilisis mauris ante vel elit. In faucibus posuere aliquet.
          Integer eleifend tortor vitae quam lobortis, sit amet pretium lacus
          pellentesque.
        </p>
      </ScrollReveal>

      <div className="h-[1px] w-1/5 max-w-[90px] my-4 bg-black/50 dark:bg-white/50"></div>
      <ScrollReveal className="flex flex-col w-4/5 gap-2">
        <>
          <h4 className="text-lg font-medium font-Raleway text-dark-blue/75 dark:text-light-grey/75">
            Tech and Tools:
          </h4>
          <div className="flex flex-wrap w-full gap-4 text-dark-blue dark:text-light-grey">
            <SiHtml5 size={20} />
            <SiCss3 size={20} />
            <SiJavascript size={20} />
            <SiTypescript size={20} />
            <SiReact size={20} />
            <SiNextdotjs size={20} />
            <SiTailwindcss size={20} />
            <SiGit size={20} />
            <SiGithub size={20} />
            <HiCommandLine size={20} />
            <SiFigma size={20} />
          </div>
        </>
      </ScrollReveal>
    </section>
  );
};

export default About;
