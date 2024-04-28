import {
  adventjs,
  bash,
  codeforces,
  codember,
  coderbyte,
  codesignal,
  onedrive,
  prettier,
  vite,
  web01,
  web02,
  web03,
  web04,
  web05,
  web06,
  web07,
  web08
} from "./imports.js";

import npm01 from "../assets/img/npm01.gif";

const webData = [
  {
    id: 8,
    name: "Youtube Clone",
    img: web08,
    code: "https://github.com/AngelDarco/Css_Youtube_Twin",
    browse: "https://twin-youtube.netlify.app/",
    description: "A Clone of the Youtube page, with css only, no frameworks",
    languages: ["▹ html", "▹ css", "▹ js"]
  },
  {
    id: 7,
    name: "Chat app",
    img: web07,
    code: "https://github.com/AngelDarco/chat-firebase",
    browse: "https://cozy-semifreddo-c8ba95.netlify.app/",
    description: "Real time chat app",
    languages: [
      "▹ React",
      "▹ post-css",
      "▹ Typescript",
      "▹ vite",
      "▹ vitest",
      "▹ eslint",
      "▹ firebase"
    ]
  },
  {
    id: 6,
    name: "Clothes Store",
    img: web06,
    code: "https://github.com/AngelDarco/Web_Page-04",
    browse:
      " http://darcocorporation.scienceontheweb.net/pages/webs/page03_clothesStore/",
    description: "Responsive Clothes Store created with ThreeJs models",
    languages: ["▹ html", "▹ css", "▹ js", "▹ React three fiber"]
  },
  {
    id: 5,
    name: "Library",
    img: web05,
    code: "https://github.com/AngelDarco/FirebaseCrud",
    browse:
      "http://darcocorporation.scienceontheweb.net/pages/webs/page04_Library/",
    description: "CRUD in firebase",
    languages: ["▹ html", "▹ css", "▹ js", "▹ React", "▹ sass", "▹ firebase"]
  },
  {
    id: 4,
    name: "Test Recruters",
    img: web04,
    code: "https://github.com/AngelDarco/jobInterviewTest",
    browse:
      "http://darcocorporation.scienceontheweb.net/pages/webs/page05_TestRecruters/",
    description: "Web page for a job interview in indeed",
    languages: ["▹ html", "▹ css", "▹ js"]
  },
  {
    id: 3,
    name: "Netflix Clone",
    img: web03,
    code: "https://github.com/AngelDarco/Css_Netflix_Copia",
    browse:
      "http://darcocorporation.scienceontheweb.net/pages/webs/page06_Netflix/",
    description: "Clone of Netflix page",
    languages: ["▹ html", "▹ css", "▹ js"]
  },
  {
    id: 2,
    name: "Boutique",
    img: web02,
    code: "https://github.com/AngelDarco/TiendaRopa",
    browse:
      "http://darcocorporation.scienceontheweb.net/pages/webs/page07_Boutique/",
    description: "e-commerce with database of users, like and shoping car",
    languages: [
      "▹ html",
      "▹ css",
      "▹ js",
      "▹ php",
      "▹ mysql",
      "▹ sql",
      "▹ webpack"
    ]
  },
  {
    id: 1,
    name: "E-Commerce",
    img: web01,
    code: "https://github.com/AngelDarco/Proyecto_Branda",
    browse:
      "http://darcocorporation.scienceontheweb.net/pages/webs/page08_BrandaStore/",
    description:
      "E-commerce with database of registration of users, login and shopping car in mysql",
    languages: [
      "▹ html",
      "▹ css",
      "▹ js",
      "▹ node modules",
      "▹ php",
      "▹ mysql",
      "▹ sql",
      "▹ eslint",
      "▹ prettier",
      "▹ webpack"
    ]
  }
];

const npmData = [
  {
    id: 1,
    name: "Darkmode",
    img: npm01,
    code: "https://github.com/AngelDarco/Css_Youtube_Twin",
    browse: "https://youtube-twin.up.railway.app/",
    description:
      "A component that changes the styles of the page, better than dark and light mode, with a switch button, and the default user system theme.",
    languages: ["react", "typescript"]
  }
];

const codeData = [
  {
    id: 1,
    name: "Codesignal",
    img: codesignal,
    code: "https://github.com/AngelDarco/codesignal_challenges",
    browse: "https://github.com/AngelDarco/codesignal_challenges",
    description:
      "Github repository, where I showcase my solutions to a wide array of coding challenges, a curated collection of problems from CodeSignal, meticulously solved and explained.",
    languages: ["javascript", "typescript", "eslint", "bun"]
  },
  {
    id: 2,
    name: "Codember",
    img: codember,
    code: "https://github.com/AngelDarco/codember_2023/",
    browse: "https://github.com/AngelDarco/codember_2023/",
    description:
      "GitHub repository where I showcase my solutions to a diverse range of coding challenges sourced from Codember, meticulously solved and explained for fellow developers.",
    languages: ["javascript", "typescript", "eslint", "bun"]
  },
  {
    id: 3,
    name: "AdventJs",
    img: adventjs,
    code: "https://github.com/AngelDarco/advenJs_2023",
    browse: "https://github.com/AngelDarco/advenJs_2023",
    description:
      "GitHub repository, where I present solutions to a myriad of coding challenges from AdventJs, a curated collection, meticulously solved and explained, to elevate problem-solving skills in JavaScript and typescript.",
    languages: ["javascript", "typescript", "eslint", "bun"]
  },
  {
    id: 4,
    name: "Over The Wire",
    img: bash,
    code: "https://github.com/AngelDarco/over-the-wire_challenges/tree/master",
    browse:
      "https://github.com/AngelDarco/over-the-wire_challenges/tree/master",
    description:
      "This repository contains solutions to the bash scripting challenges from OverTheWire's wargames, a series of challenges designed to help individuals learn and practice various aspects of cybersecurity, including bash scripting in a Unix-like environment.",
    languages: ["bash", "vim", "linux"]
  },
  {
    id: 5,
    name: "Coderbyte",
    img: coderbyte,
    code: "https://github.com/AngelDarco/coderbyte_challenges",
    browse: "https://github.com/AngelDarco/coderbyte_challenges",
    description:
      "GitHub repository with solutions to a variety of coding challenges from Coderbyte. a curated collection, meticulously solved and explained, to enhance the problem-solving prowess and master the art of coding.",
    languages: ["javascript", "typescript", "eslint", "bun"]
  },
  {
    id: 6,
    name: "CodeForces",
    img: codeforces,
    code: "https://github.com/AngelDarco/code-forces_challenges/",
    browse: "https://github.com/AngelDarco/code-forces_challenges/",
    description:
      "GitHub repository featuring solutions to Codeforces challenges with Python. a meticulously crafted solutions to sharpen your problem-solving skills in competitive programming.",
    languages: ["python", "vim", "linux"]
  },
  {
    id: 7,
    name: "OneDrive",
    img: onedrive,
    code: "https://github.com/AngelDarco/Css_Youtube_Twin",
    browse: "https://youtube-twin.up.railway.app/",
    description:
      "Contribution to debug and fix bugs in the project, main page.",
    languages: ["css", "html"]
  },
  {
    id: 8,
    name: "Prettier",
    img: prettier,
    code: "https://github.com/AngelDarco/eslint-config-prettier",
    browse: "https://github.com/AngelDarco/eslint-config-prettier",
    description:
      "Contribution to debug and fix bugs in the project, eslint-config-prettier",
    languages: ["Markdown", "javascript", "bash"]
  },
  {
    id: 9,
    name: "Vite-Plugin-Vercel",
    img: vite,
    code: "https://github.com/AngelDarco/vite-plugin-vercel",
    browse: "https://github.com/AngelDarco/vite-plugin-vercel",
    description:
      "Contribution to debug and fix bugs in the project, vite-plugin-vercel",
    languages: ["Markdown", "javascript", "bash"]
  }
];

export { webData, npmData, codeData };
