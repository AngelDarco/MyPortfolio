import "./About.scss";
import global from "../../../global.module.css";
const About = () => {
  return (
    <div className={`containerAbout ${global.containers}`} id="about me">
      <h1>About Me</h1>
      <section>
        <p>
          Greetings! I&apos;m Angel, a 29-year-old self-taught programmer
          hailing from Peru. My love affair with the world of computing began at
          the age of 12, and since then, it has been a relentless journey of
          exploration and growth.
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
            <i>Leave a message, Don&apos;t be shy</i>
          </a>
        </p>
      </section>

      {/* </div> */}
    </div>
  );
};
export default About;
