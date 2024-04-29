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
    code: "https://github.com/AngelDarco/twin-youtube",
    browse: "https://twin-youtube.netlify.app/",
    description:
      "Twin-Youtube project, a clone of YouTube, built with HTML, CSS, and JavaScript. Experience the familiar interface and functionalities of YouTube in this project deployed on Netlify.",
    languages: ["▹ html", "▹ css", "▹ js"]
  },
  {
    id: 7,
    name: "Chat app",
    img: web07,
    code: "https://github.com/AngelDarco/chat-app",
    browse: "https://chat-app-b1911.web.app/",
    description:
      "Chat app, real time messaging app, where I utilized React and TypeScript to build a robust front-end interface. Leveraging React Router, users can navigate seamlessly, while Firebase handles real-time data synchronization and user authentication. To ensure code quality, I integrated ESLint for linting and Vite for efficient development. Post-CSS adds styling flexibility, resulting in a sleek and responsive design. With Vite for bundling and Vitest for testing, our app guarantees a smooth user experience.",
    languages: [
      "▹ React",
      "▹ react-router",
      "▹ eslint",
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
    name: "3D Store",
    img: web06,
    code: "https://github.com/AngelDarco/store-treeJs",
    browse: "https://store-threejs.netlify.app/",
    description:
      "Three.js Store, showcasing stunning 3D experiences built with HTML, CSS, and JavaScript. Leveraging React Three Fiber and TypeScript, we've crafted a seamless shopping experience deployed on Netlify. Created for the purpose of discover the endless possibilities of 3D on the web!",
    languages: ["▹ html", "▹ css", "▹ js", "▹ React three fiber"]
  },
  {
    id: 5,
    name: "Library App",
    img: web05,
    code: "https://github.com/AngelDarco/library-app",
    browse: "https://library-c4c93.web.app/",
    description:
      "Discover our library app, built with HTML, CSS, and JavaScript, powered by React and TypeScript. With features like routing using React Router, Firebase integration for real-time database, storage, and user authentication, users can like, download, upload, and delete their own books seamlessly. Plus, with the added flexibility of Sass for styling, our app offers an intuitive and responsive user experience.",
    languages: [
      "▹ html",
      "▹ css",
      "▹ js",
      "▹ React",
      "▹ sass",
      "▹ typescript",
      "▹ react-router",
      "▹ firebase"
    ]
  },
  {
    id: 4,
    name: "Los Angeles Mountains",
    img: web04,
    code: "https://github.com/AngelDarco/los-angeles-mountains",
    browse: "https://mountains-los-angeles.netlify.app/",
    description:
      "Los Angeles Mountains is a responsive web page project, tasked during a job interview. Using raw JavaScript and CSS, I created a seamless navigation experience with React Router. The page is designed to showcase the breathtaking beauty of the Los Angeles mountains, with responsive styling ensuring optimal viewing across various devices.",
    languages: ["▹ html", "▹ css", "▹ js"]
  },
  {
    id: 3,
    name: "Netflix Clone",
    img: web03,
    code: "https://github.com/AngelDarco/twin-netflix",
    browse: "http://netflix-twin.netlify.app/",
    description:
      "Netflix Twin project, a stunning replica of Netflix built from scratch using HTML, CSS, and JavaScript. Immerse yourself in the world of streaming with this faithful recreation, deployed on Netlify for easy access.",
    languages: ["▹ html", "▹ css", "▹ js"]
  },
  {
    id: 2,
    name: "Norma Store",
    img: web02,
    code: "https://github.com/AngelDarco/project-norma",
    browse: "http://norma-store.scienceontheweb.net/",
    description:
      "Norma Store, your one-stop destination for seamless shopping experiences. Our dynamic web page is crafted using HTML, CSS, JavaScript, PHP, MySQL, SQL, and Vite. Users can effortlessly like products, with their preferences securely stored in local storage. With our robust cart feature, users can add products and seamlessly upload their selections to our MySQL database. Plus, our user management system allows for easy creation and login, ensuring a personalized and convenient shopping journey.",
    languages: [
      "▹ html",
      "▹ css",
      "▹ js",
      "▹ php",
      "▹ mysql",
      "▹ sql",
      "▹ vite"
    ]
  },
  {
    id: 1,
    name: "E-Commerce",
    img: web01,
    code: "https://github.com/AngelDarco/project-branda",
    browse: "http://branda-store.scienceontheweb.net/",
    description:
      "The Beauty Face project involved the creation of a comprehensive cosmetic store, leveraging a range of technologies including HTML, CSS, JavaScript, PHP, MySQL, SQL, and Vite. The backend infrastructure was established using PHP and MySQL, with PHP scripts handling server-side operations such as database interaction and user authentication. The MySQL database was designed to store product information, user data, and cart selections securely. JavaScript was utilized to implement dynamic features on the front end, enabling functionalities like product liking, cart management, and user interaction. Additionally, Vite was employed for efficient bundling and development. Together, these technologies facilitated the creation of a robust and user-friendly cosmetic store experience for Beauty Face customers.",
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
    code: "https://github.com/AngelDarco/darco-darkmode",
    browse: "https://angeldarco.github.io/darco-darkmode/",
    description:
      "A React component that changes the styles of the page, better than dark and light mode, with a switch button, and the default user system theme.",
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
