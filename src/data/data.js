// SOCIALS
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

// PROJECTS
import insidious from "../images/insidious.png";
import kodeTech from "../images/kodeTech.png";
import marketVerse from "../images/market-verse.png";
import { FaReact, FaSass, FaBootstrap } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { DiJavascript1, DiCss3 } from "react-icons/di";

const stack = [
  { name: `sass`, years: `2 years`, logo: <FaSass className='icon' /> },
  {
    name: `bootstrap`,
    years: `2 years`,
    logo: <FaBootstrap className='icon' />,
  },
  {
    name: `javascript`,
    years: `2 years`,
    logo: <SiJavascript className='icon' />,
  },
  { name: `react`, years: `2 years`, logo: <FaReact className='icon' /> },
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
    id: 3,
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
    company: `KodeCamp`,
    position: `Intern`,
    time: `March 2022 - July 2022`,
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit dui pellentesque urna tortor tellus quis. In at eu viverra lorem amet, vulputate elementum vel. Vehicula quisque id.`,
  },
  {
    company: `KodeCamp`,
    position: `Intern`,
    time: `March 2022 - July 2022`,
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit dui pellentesque urna tortor tellus quis. In at eu viverra lorem amet, vulputate elementum vel. Vehicula quisque id.`,
  },
  {
    company: `KodeCamp`,
    position: `Intern`,
    time: `March 2022 - July 2022`,
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit dui pellentesque urna tortor tellus quis. In at eu viverra lorem amet, vulputate elementum vel. Vehicula quisque id.`,
  },
  {
    company: `KodeCamp`,
    position: `Intern`,
    time: `March 2022 - July 2022`,
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit dui pellentesque urna tortor tellus quis. In at eu viverra lorem amet, vulputate elementum vel. Vehicula quisque id.`,
  },
  {
    company: `KodeCamp`,
    position: `Intern`,
    time: `March 2022 - July 2022`,
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit dui pellentesque urna tortor tellus quis. In at eu viverra lorem amet, vulputate elementum vel. Vehicula quisque id.`,
  },
];

const skills = [
  `HTML`,
  `CSS`,
  `JAVASCRIPT`,
  `REACT`,
  `FRAMER MOTION`,
  `JQUERY`,
  `REDUX`,
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
