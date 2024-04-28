import "./About.scss";
import global from "../../../global.module.css";
import arrow_down from "../../../assets/svg/arrow-down.svg";
import arrow_up from "../../../assets/svg/arrow-up.svg";
import { useState } from "react";
const About = ({ ...props }) => {
  const [showMore, setShowMore] = useState(false);

  const handlerShowMore = () => {
    setShowMore(!showMore);
    if (showMore)
      document
        .getElementById("about me")
        .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className={`containerAbout ${global.containers}`}
      id="about me"
      ref={props.reference}
      {...props}
      style={{
        height: showMore && "fit-content"
      }}
    >
      <h1>About Me</h1>
      <section style={{ overflow: showMore ? "visible" : "hidden" }}>
        <p>
          Greetings!, Angel here, a self-taught programmer hailing from Peru. My
          love affair with the world of computing began at the age of 12, and
          since then, it has been a relentless journey of exploration and
          growth.
        </p>

        <p>
          In my early years, I delved into the realm of hacking, quickly
          realizing the need for a more constructive path. Transitioning to
          design, editing, and 3D modeling allowed me to express creativity, yet
          I yearned to be the architect behind the tools, not just a user.
        </p>

        <p>
          This quest led me to programming, where I took my first strides in
          languages like Java, C#, and Python. However, it was Javascript that
          truly captured my imagination. Its expansive architecture, diverse
          frameworks, collaborative nature with other languages, and the vibrant
          community that surrounds it became my passion.
        </p>

        <p>
          What sets me apart is my unwavering commitment to programming,
          dedicating over 50 hours weekly not for monetary gain, but for the
          sheer joy of creation. Despite not possessing a formal degree – I
          chose to drop out of university due to a misalignment with my learning
          goals – my pursuit of knowledge has never waned.
        </p>

        <p>
          I believe in continuous self-improvement, choosing to learn and adapt
          independently. If you&apos;re in need of assistance with a project or
          looking for someone passionate about tackling real challenges,
          I&apos;m here for you. Feel free to reach out; I offer my expertise
          not for a fee but for the satisfaction of overcoming meaningful
          hurdles.
        </p>

        <p>
          Thank you for taking the time to learn a bit about me. Let&apos;s
          connect and create something amazing together.
          <a href="#contact">
            <i>Don&apos;t be shy, Leave a message.</i>
          </a>
        </p>

        <div className="blur" style={{ display: showMore && "none" }} />

        <button className={showMore ? "down" : "up"} onClick={handlerShowMore}>
          {!showMore ? "Show more" : "Show less"}
          <img src={!showMore ? arrow_down : arrow_up} />
        </button>
      </section>
    </section>
  );
};
export default About;
