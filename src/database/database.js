import {
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

import code01 from "../assets/img/code01.gif";

const webData = [
  {
    id: 8,
    name: "Youtube Clone",
    img: web08,
    code: "https://github.com/AngelDarco/Css_Youtube_Twin",
    browse: "https://youtube-twin.up.railway.app/",
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

const contributionsData = [
  {
    id: 1,
    name: "OneDrive",
    img: code01,
    code: "https://github.com/AngelDarco/Css_Youtube_Twin",
    browse: "https://youtube-twin.up.railway.app/",
    description:
      "Contribution to debug and fix bugs in the project, main page.",
    languages: ["react", "typescript"]
  }
];

export { webData, npmData, contributionsData };
