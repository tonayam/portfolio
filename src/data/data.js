// SOCIALS
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

// PROJECTS
import insidious from '../images/insidious.png';
import chessonchain from '../images/chessonchain.png';
import electricBikes from '../images/electric-bikes.png';
import springFoods from '../images/spring-foods.png';
import lendsqr from '../images/lendsqr.png';
import kodeTech from '../images/kodeTech.png';
import marketVerse from '../images/market-verse.png';

import { FaReact, FaSass, FaBootstrap } from 'react-icons/fa';
import { SiJavascript, SiNextdotjs } from 'react-icons/si';
import { DiJavascript1, DiCss3 } from 'react-icons/di';

const stack = [
  { name: `sass`, years: `3 years`, logo: <FaSass className='icon' /> },
  {
    name: `bootstrap`,
    years: `3 years`,
    logo: <FaBootstrap className='icon' />,
  },
  {
    name: `javascript`,
    years: `3 years`,
    logo: <SiJavascript className='icon' />,
  },
  { name: `react`, years: `3 years`, logo: <FaReact className='icon' /> },
  { name: `nextjs`, years: `2 years`, logo: <SiNextdotjs className='icon' /> },
];

const projects = [
  {
    id: 1,
    title: `Insidious Games`,
    brief: `A webApp that provides video game information`,
    live: `https://insidious-games.netlify.app/`,
    code: `https://github.com/tonayam/station`,
    image: insidious,
    techStack: [
      <FaReact className='icon-1 react' />,
      <FaSass className='icon-2 sass' />,
    ],
  },
  {
    id: 2,
    title: `ChessOnChain`,
    brief: `A web3 startup building the future of chess on the blockchain`,
    live: `https://chessonchain.io/`,
    code: `https://github.com/tonayam/ChessonChain`,
    image: chessonchain,
    techStack: [
      <SiNextdotjs className='icon-1 next' />,
      <FaSass className='icon-2 sass' />,
    ],
  },

  {
    id: 3,
    title: `Electric Bikes`,
    brief: `A Nigerian based e-commerce store that sells electric bikes`,
    live: `https://electric-bikes-theta.vercel.app/`,
    code: `https://github.com/tonayam/`,
    image: electricBikes,
    techStack: [
      <FaReact className='icon-1 react' />,
      <FaSass className='icon-2 sass' />,
    ],
  },
  {
    id: 4,
    title: `Spring Foods`,
    brief: `Nigeria No.1 Food Processor`,
    live: `https://spring-food.vercel.app/`,
    code: `https://github.com/tonayam/spring-food`,
    image: springFoods,
    techStack: [
      <FaReact className='icon-1 react' />,
      <FaSass className='icon-2 sass' />,
    ],
  },
  {
    id: 5,
    title: `lendsqr`,
    brief: `Dashboard for an admin page`,
    live: `https://lendsqr-fe-test.netlify.app/`,
    code: `https://github.com/tonayam/lendsqr-fe-test`,
    image: lendsqr,
    techStack: [
      <FaReact className='icon-1 react' />,
      <FaSass className='icon-2 sass' />,
    ],
  },

  {
    id: 6,
    title: `KodeTech E-Commerce`,
    brief: `A functional, fullstack E-commerce webstore`,
    live: `https://muubaraq.github.io/kodetech-test/`,
    code: `https://github.com/muubaraq/kodetech-test`,
    image: kodeTech,
    techStack: [
      <DiJavascript1 className='icon-1 javascript' />,
      <DiCss3 className='icon-2 css' />,
    ],
  },
  {
    id: 7,
    title: `Market-Verse`,
    brief: `The landing page of an NFT marketplace`,
    live: `https://tonayam.github.io/meta-verse/`,
    code: `https://github.com/tonayam/meta-verse`,
    image: marketVerse,
    techStack: [
      <DiJavascript1 className='icon-1 javascript' />,
      <DiCss3 className='icon-2 css' />,
    ],
  },
];

const work = [
  {
    company: `Astrosoft`,
    position: `Frontend Developer`,
    time: `January 2023 - Present `,
    info: `I build modern webapps using ReactJS and NextJS. I also work with a team of experienced product designers and developers as well, to build products that satisfy the needs of our clients  `,
  },
  {
    company: `KodeCamp`,
    position: `Intern`,
    time: `March 2022 - July 2022`,
    info: `I was an intern frontend developer at KodeCamp for 5 months. During that time, I received training on the technologies of the frontend development career path. As a final project task, I was assigned to a team charged with building a e-commerce store.`,
  },
  {
    company: ``,
    position: ``,
    time: ``,
    info: ``,
  },
];

const skills = [
  `HTML`,
  `CSS`,
  `BOOTSTRAP`,
  `TAILWIND`,
  `JAVASCRIPT`,
  `REACT`,
  `NextJs`,
  `NodeJs`,
  `FRAMER MOTION`,
  `Context API`,
  `FIGMA`,
];

const socials = [
  {
    name: `TONAYAM AUSTIN`,
    icon: <BsGithub className='icon' />,
    iconName: `github`,
    link: `https://github.com/tonayam`,
  },
  {
    name: `TONAYAM AUSTIN`,
    icon: <BsLinkedin className='icon' />,
    iconName: `linkedin`,
    link: `https://www.linkedin.com/in/austin-tonayam`,
  },
  {
    name: `PART-TIME JEDI`,
    icon: <BsTwitter className='icon' />,
    iconName: `twitter`,
    link: `https://twitter.com/tonayam_austin`,
  },
];

export { stack, projects, socials, skills, work };
