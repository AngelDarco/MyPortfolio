/* eslint-disable react/no-unescaped-entities */
import "./Main.scss";
import logo from "../../../assets/img/owner.png";
import Typewriter from "typewriter-effect/dist/core";
import { useEffect, useRef } from "react";
import { VanillaTilt } from "../../../utils/vanilla-tilt.min.js";
import global from "../../../global.module.css";

const Main = () => {
  const app = useRef(null);

  useEffect(() => {
    if (app.current !== null) {
      const typewriter = new Typewriter(app.current, {
        loop: true,
        delay: 150
      });
      typewriter
        .pauseFor(1000)
        .typeString("<h4>Mid/Level</h4>")
        .deleteChars(9)
        .pauseFor(1000)
        .start();
    }
  }, [app.current]);

  const element = document.querySelectorAll(".js-tilt");
  if (element) {
    VanillaTilt.init(element);
  }

  return (
    <div className={`mainContainer ${global.containers}`} data-tilt>
      <div className="logo js-tilt">
        <img src={logo} alt="logo.gif" />
      </div>
      <div className="text js-tilt">
        <h5></h5>
        <i>
          <b>
            <p>Hi there, I'm Angel and I'm:</p>
          </b>
        </i>
        <h1>Frontend Developer</h1>
        <div ref={app}></div>
        <h6></h6>
      </div>
    </div>
  );
};
export default Main;
