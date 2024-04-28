import "./Projects.scss";
import global from "../../global.module.css";
import styles from "../../App.module.css";

import { FaCode, FaLaptopCode, FaArrowLeft } from "react-icons/fa";
import { ImNpm } from "react-icons/im";
import { useEffect, useRef, useState } from "react";
import NpmProjects from "../../components/projects/npm/NpmProjects";
import WebProjects from "../../components/projects/webs/WebProjects";
import ContributionsProjects from "../../components/projects/contributions/ContributionsProjects";
import intersectionObserver from "../../utils/intersectionObserver";

export default function Projects({ ...props }) {
  const [project, setProject] = useState();
  const [intersecting, setIntersecting] = useState(true);
  const projectsRef = useRef();

  const handlerLinks = (e) => {
    const name = e.currentTarget.getAttribute("name");
    setProject(name);
  };

  useEffect(() => {
    if (!projectsRef.current) return;

    const fn = (isIntersecting) => setIntersecting(isIntersecting);
    const obv = intersectionObserver.observer(projectsRef.current, fn);

    return () => {
      if (obv) intersectionObserver.unmount(projectsRef.current, obv);
    };
  }, []);

  return (
    <section
      {...props}
      ref={props.reference}
      className={`containerProjects ${global.containers} ${styles.App}`}
      id="projects"
    >
      <header ref={projectsRef}>
        {project && <FaArrowLeft onClick={() => setProject()} />}
        <h1>{project || "Projects"}</h1>
      </header>
      {project === "web" ? (
        <WebProjects />
      ) : project === "code" ? (
        <ContributionsProjects />
      ) : project === "npm" ? (
        <NpmProjects />
      ) : (
        <div className={`all ${intersecting ? "allHover" : ""}`}>
          <div className="left" name="web" onClick={handlerLinks}>
            <FaCode />
            <div className="text">Web Development</div>
          </div>

          <div className="center">
            <div className="explainer" name="code" onClick={handlerLinks}>
              <FaLaptopCode className="icon" />
              <span>Projects</span>
            </div>
            <div className="text">Code</div>
          </div>

          <div className="right" name="npm" onClick={handlerLinks}>
            <ImNpm />
            <div className="text">Npm Packages</div>
          </div>
        </div>
      )}
    </section>
  );
}
