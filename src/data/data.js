// TECH STACK
import html from "../images/html-logo.png";
import css from "../images/css-logo.png";
import Javascript from "../images/javascript-logo.png";
import bootstrap from "../images/bootstrap-logo.png";

// SOCIALS
import fb from "../images/facebook.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";

// PROJECTS
import insidious from "../images/insidious.png";
import kodeTech from "../images/kodeTech.png";
import marketVerse from "../images/market-verse.png";
import { FaReact, FaSass } from "react-icons/fa";
import { DiJavascript1, DiCss3 } from "react-icons/di";

const stack = [
  { name: `html`, years: `2 years`, logo: html },
  { name: `css`, years: `2 years`, logo: css },
  { name: `javascript`, years: `2 years`, logo: Javascript },
  { name: `bootstrap`, years: `2 years`, logo: bootstrap },
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
  `HTML`,
  `CSS`,
  `HTML`,
  `CSS`,
  `HTML`,
  `CSS`,
  `HTML`,
  `CSS`,
  `HTML`,
  `CSS`,
];

const socials = [
  { name: `TONAYAM AUSTIN`, icon: fb, iconName: `facebook` },
  { name: `TONAYAM AUSTIN`, icon: linkedin, iconName: `linkedin` },
  { name: `TONAYAM AUSTIN`, icon: twitter, iconName: `twitter` },
];

export { stack, projects, socials, skills, work };
