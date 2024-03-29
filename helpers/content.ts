const photo = 'https://drive.google.com/uc?export=view&id=';

import { ProjectContent } from './types';

// A List of all Projects that get rendered to the page through Projects.jsx and ProjectCard.jsx
export const ProjectInfo: ProjectContent[] = [
  {
    key: 1,
    id: 'github-user-search-ii',
    title: 'Github User Search II',
    desc: 'Built with Next.js and TypeScript. Uses GraphQL to make requests and uses hooks to allow each component to receive data. TailwindCSS handles styling, and theme switching. Input form and validation is handled by the React-Hook-Form Library.',
    tech: 'Next.js, TypeScript, GraphQL, and TailwindCSS',
    photos: {
      mobile: `${photo}1G0IPaK_JQoorwJEwvnV5-E5TCjrQQLgy`,
      desktop: `${photo}196nqFTd5-ewrW9M4vtdDboynW9QdxuTv`,
    },
    links: {
      view: 'https://github-user-search-ii.netlify.app/',
      github: 'https://github.com/LogvnR/github-user-search-ii',
    },
    date: 'Feb 2022 (re-built Sept 2022)',
  },
  {
    key: 2,
    id: 'photosnap-website-demo',
    title: 'Photosnap Website Demo',
    desc: 'Uses Next.js and TypeScript and assets were provided by Frontend Mentor. It uses Next.js built in routing system to change the pages, and Zustand to help the app know what size the device is. Features Multiple layouts for different devices.',
    tech: 'Next.js, TypeScript, and Zustand',
    photos: {
      mobile: `${photo}1xG_Ak5s3F1h5QK7bTmGAkOHkm5wMSZcu`,
      desktop: `${photo}1PT5WgrEhxdz3hH75DuyN-pkGrR6FPvCs`,
    },
    links: {
      view: 'https://photosnap-app-demo.netlify.app/',
      github: 'https://github.com/LogvnR/photosnap-app',
    },
    date: 'May 2022',
  },
  {
    key: 3,
    id: 'entertainment-web-app',
    title: 'Entertainment Web App',
    desc: 'Built with React and TypeScript and assets were provided by Frontend Mentor. It uses Zustand to control the Apps overall state, and React Router to control the users view of the various components.',
    tech: 'React.js, TypeScript, and Zustand',
    photos: {
      mobile: `${photo}1X1gLXN9mxIHEiRjoyaaLQgeMOktQ5cRk`,
      desktop: `${photo}1IdqjiNiwwAd_a_b5_chepqVMxMHunphm`,
    },
    links: {
      view: 'https://entertainment-test-app.netlify.app/',
      github: 'https://github.com/LogvnR/entertainment-web-app',
    },
    date: 'May 2022',
  },
  {
    key: 4,
    id: 'planet-facts-lite',
    title: 'Planet Facts Lite',
    desc: "Built with React. Assets provided by Frontend Mentor. It uses React Router to control the users view of the various components and then uses props to pass data around. 'useState' is used to control which planet is currently selected.",
    tech: 'React.js and React Router',
    photos: {
      mobile: `${photo}1IgJtuYj7T8AsHsPalnb-BzStDZflKlnf`,
      desktop: `${photo}1DU9LRXtsemD7WW1tbFIMxcle2AAcrc4T`,
    },
    links: {
      view: 'https://planet-facts-lite.netlify.app/',
      github: 'https://github.com/LogvnR/planets-fact-site',
    },
    date: 'Jan 2022',
  },
];
