import "./Main.scss";
import logo from "../../../assets/img/owner.png";
import Typewriter from "typewriter-effect/dist/core";
import { useEffect, useRef } from "react";
import { VanillaTilt } from "../../../utils/vanilla-tilt.min.js";
import global from "../../../global.module.css";

const Main = ({ ...props }) => {
  const app = useRef(null);

  useEffect(() => {
    if (app.current) {
      const typewriter = new Typewriter(app.current, {
        loop: true,
        delay: 50
      });
      typewriter
        .pauseFor(500)
        .typeString("<h4>Mid/Level</h4>")
        .pauseFor(2000)
        .deleteChars(9)
        .start();
    }
  }, []);

  const element = document.querySelectorAll(".js-tilt");
  if (element) {
    VanillaTilt.init(element);
  }

  return (
    <section
      ref={props.reference}
      {...props}
      className={`mainContainer ${global.containers}`}
      data-tilt
    >
      <div className="logo js-tilt">
        <img src={logo} alt="logo.gif" />
      </div>
      <div className="text js-tilt">
        <h5></h5>
        <i>
          <b>
            <p>Hi there, Angel here, just another great </p>
          </b>
        </i>
        <h1>Frontend Developer</h1>
        <div ref={app} className="typewriter"></div>
        <h6></h6>
      </div>
    </section>
  );
};
export default Main;
