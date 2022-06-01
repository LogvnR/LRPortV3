const photo = 'https://drive.google.com/uc?export=view&id=';

import { ProjectContent } from './types';

// A List of all Projects that get rendered to the page through Projects.jsx and ProjectCard.jsx
export const Projects: ProjectContent[] = [
  {
    key: 1,
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
    key: 2,
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
    key: 3,
    title: 'Github User Search',
    desc: 'Built with React. Uses Axios to make API requests. Uses modern CSS and Js techniques to allow for theme switching, and is fully responsive.',
    tech: 'React.js, Axios, and Responsive Design',
    photos: {
      mobile: `${photo}1G0IPaK_JQoorwJEwvnV5-E5TCjrQQLgy`,
      desktop: `${photo}196nqFTd5-ewrW9M4vtdDboynW9QdxuTv`,
    },
    links: {
      view: 'https://github-user-search-lite.netlify.app/',
      github: 'https://github.com/LogvnR/github-user-search',
    },
    date: 'Feb 2022',
  },
  {
    key: 4,
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
  {
    key: 5,
    title: 'Tip Calculator',
    desc: "Created with React and assets were provided by Frontend Mentor. It uses components and then uses props to pass data around. Then 'useState' is used to manage the different variations of those components.",
    tech: 'React.js',
    photos: {
      mobile: `${photo}14e4XacL0Gnc6WHXc9PU-tQteSnOeiMe4`,
      desktop: `${photo}1wPNdB_mDJTkFX2wUnfdHgbvdBAzrQDqo`,
    },
    links: {
      view: 'https://spli-tter-tip-calculator.netlify.app/',
      github: 'https://github.com/LogvnR/tip-calculator-app',
    },
    date: 'Dec 2021',
  },
  {
    key: 6,
    title: 'Ford GT40 Tribute',
    desc: 'Built with React using Vite. Uses modern CSS practices to give the user a fluid, responsive user experience. Content will change depending on the device type.',
    tech: 'React.js, Vite, and Responsive Design',
    photos: {
      mobile: `${photo}15bD4no47U0Yd69CVoclRgyuI_bJ53xka`,
      desktop: `${photo}1icADbTOxMTIP8hcjmUjHXSD1Y_wAdIXU`,
    },
    links: {
      view: 'https://gt40-tribute-v2.netlify.app/',
      github: 'https://github.com/LogvnR/fordgt40Tributev2',
    },
    date: 'Jun 2021 (Updated Apr 2022)',
  },
  {
    key: 7,
    title: 'visitParis',
    desc: 'Built with React. Uses various React Libraries, and modern CSS practices to give the user a fluid, responsive user experience. Content will change depending on the device type.',
    tech: 'React.js and Responsive Design',
    photos: {
      mobile: `${photo}1berGC3N2eO7qy32IQONFc0mpVQggdhpm`,
      desktop: `${photo}1OyOnn2hgGeYA0S9XMzp3zsRRuiP5LWv-`,
    },
    links: {
      view: 'https://visitparisv2.netlify.app/',
      github: '1OyOnn2hgGeYA0S9XMzp3zsRRuiP5LWv-',
    },
    date: 'Mar 2021 (Updated Mar 2022)',
  },
];
