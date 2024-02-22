import "./Skills.scss";
import global from "../../../global.module.css";
import { ImHtmlFive } from "react-icons/im";
import {
  SiNodedotjs,
  SiWebpack,
  SiVite,
  SiUnity,
  SiAdobephotoshop,
  SiGnubash,
  SiCss3,
  SiJavascript,
  SiPhp,
  SiPython,
  SiMysql,
  SiFirebase,
  SiVisualstudiocode,
  SiTailwindcss,
  SiHackthebox,
  SiCodewars,
  SiReactrouter,
  SiRedux,
  SiNextdotjs,
  SiAstro,
  SiJquery,
  SiVercel,
  SiNetlify,
  SiJest,
  SiTestinglibrary,
  SiTypescript,
  SiNpm
} from "react-icons/si";
import { LuFileJson2 } from "react-icons/lu";
import { DiVim } from "react-icons/di";

import { TbBrandThreejs } from "react-icons/tb";

import {
  FaReact,
  FaSass,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaBootstrap
} from "react-icons/fa";
import es from "../../../assets/svg/es.svg";
import us from "../../../assets/svg/us.svg";
import br from "../../../assets/svg/br.svg";
import ge from "../../../assets/svg/ge.svg";

const About = () => {
  return (
    <div className={`containerSkills ${global.containers}`} id="skills">
      <h1>Skills</h1>
      <div className="icons">
        <div>
          <ImHtmlFive />
          <span>HTML5</span>
        </div>
        <div>
          <SiCss3 />
          <span>Css3</span>
        </div>
        <div>
          <SiJavascript />
          <span>Javascript</span>
        </div>
        <div>
          <SiTypescript />
          <span>Typescript</span>
        </div>

        <div>
          <SiNodedotjs />
          <span>Node</span>
        </div>

        <div>
          <FaReact />
          <span>ReactJs/</span>
          <span style={{ padding: 0 }}>Native</span>
        </div>

        <div>
          <SiReactrouter />
          <span>React Router</span>
        </div>

        <div>
          <SiRedux />
          <span>Redux</span>
        </div>

        <div>
          <SiTestinglibrary />
          <span>React Testing</span>
        </div>
        <div>
          <SiJest />
          <span>Jest</span>
        </div>

        <div>
          <SiTailwindcss />
          <span>Tailwind</span>
        </div>

        <div>
          <FaBootstrap />
          <span>Bootstrap</span>
        </div>

        <div>
          <FaSass />
          <span>Sass</span>
        </div>
        <div>
          <TbBrandThreejs />
          <span>ThreeJs</span>
        </div>

        <div>
          <SiNextdotjs />
          <span>NextJs</span>
        </div>

        <div>
          <SiAstro />
          <span>Astro</span>
        </div>
        <div>
          <SiJquery />
          <span>JQuery</span>
        </div>
        <div>
          <SiPhp />
          <span>Php</span>
        </div>
        <div>
          <SiMysql />
          <span>MySql</span>
        </div>

        <div>
          <SiFirebase />
          <span>Firebase</span>
        </div>
        <div>
          <SiVercel />
          <span>Vercel</span>
        </div>

        <div>
          <SiNetlify />
          <span>Netlify</span>
        </div>
        <div>
          <SiNpm />
          <span>Npm</span>
        </div>
        <div>
          <FaGitAlt />
          <span>Git</span>
        </div>
        <div>
          <FaGithub />
          <span>GitHub</span>
        </div>
        <div>
          <LuFileJson2 />
          <span>JSON</span>
        </div>
        <div>
          <SiPython />
          <span>Python</span>
        </div>

        <div>
          <SiGnubash />
          <span>Bash</span>
        </div>

        <div>
          <FaLinux />
          <span>Linux</span>
        </div>

        <div>
          <SiHackthebox />
          <span>HackTheBox</span>
        </div>

        <div>
          <SiCodewars />
          <span>Codewars</span>
        </div>
        <div>
          <SiVite />
          <span>Vite</span>
        </div>
        <div>
          <SiWebpack />
          <span>Webpack</span>
        </div>
        <div>
          <SiVisualstudiocode />
          <span>VSCode</span>
        </div>
        <div>
          <DiVim />
          <span>Vim</span>
        </div>
        <div>
          <SiAdobephotoshop />
          <span>Photoshop</span>
        </div>

        <div>
          <SiUnity />
          <span>Unity</span>
        </div>
      </div>
      <div className="flags">
        <img src={es} alt="es.svg" />
        <img src={us} alt="us.svg" />
        <img src={br} alt="br.svg" />
        <img src={ge} alt="ge.svg" />
      </div>
      <span className="span">Angel Darco</span>
    </div>
  );
};
export default About;
