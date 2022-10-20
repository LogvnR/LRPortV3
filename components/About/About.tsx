import React from 'react';
import Image from 'next/image';

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
import ScrollReveal from '../Cards/ScrollReveal/ScrollReveal';

import pfpImg from '../public/LinkedInPFPAlt.jpg';

const About = () => {
  return (
    <section
      className="flex flex-col items-center justify-center w-full py-8 bg-white dark:bg-off-black"
      id="about"
    >
      <ScrollReveal className="w-[100px] h-[100px] mt-5">
        <Image
          src={pfpImg}
          layout="responsive"
          className="rounded-full"
          alt="Logan Ricard pfp"
        />
      </ScrollReveal>
      <ScrollReveal className="w-4/5 md:w-1/2 lg:w-2/5">
        <>
          <h3 className="w-full mt-5 text-base font-semibold text-center font-Montserrat text-dark-blue dark:text-light-blue-alt">
            Hey there, I&#39;m Logan...
          </h3>
          <p className="w-full mt-5 text-sm font-normal tracking-wide text-left font-Montserrat text-dark-blue/80 dark:text-light-grey/80">
            A frontend software developer from Arizona, currently living in
            Panama who mainly focuses on building responsive web applications
            using TypeScript and React. Welcome to my little spot on the
            internet! Below you will find some of my most recent projects, and a
            way to contact me. Enjoy!
          </p>
        </>
      </ScrollReveal>

      <div className="h-[1px] w-1/5 max-w-[90px] my-6 bg-black/50 dark:bg-white/50"></div>
      <ScrollReveal className="flex flex-col w-4/5 gap-4 md:w-1/2 lg:w-2/5">
        <>
          <h4 className="text-lg font-medium font-Raleway text-dark-blue/75 dark:text-light-grey/75">
            Tech &#38; Tools:
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
