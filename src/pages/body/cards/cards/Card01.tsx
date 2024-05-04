import Typewriter from "typewriter-effect/dist/core";
import "./Cards.scss";
import React, { useRef } from "react";
import arrow_right from "../../../../assets/svg/arrow-right.svg";

export default function Card01({ observer }: { observer: boolean }) {
  const containerRef = useRef(null);

  function writer(container: Element, text: string) {
    if (!container || container.innerHTML !== "") return;
    const typewriter = new Typewriter(container, {
      loop: false,
      delay: "15ms",
      cursor: ""
    });
    typewriter.pauseFor(1000).typeString(text).start();
  }
  const arrow = `<img src=${arrow_right} alt="svg_arrow" />`;

  return (
    <section
      style={{
        transform: observer ? "translateX(0)" : "translateX(-200%)",
        transition: "transform 3s"
      }}
      className="card"
    >
      <main className="firstCard">
        <h1>Personal Info</h1>

        <article>
          <div ref={containerRef}>
            {containerRef.current &&
              writer(
                containerRef.current,
                `
                <p>${arrow}<strong>Name:</strong> Angel Goicochea Puitiza.</p>
                <p>${arrow}<strong>Birthday:</strong> Sept 19, 1992.</p>
                <p>${arrow}<strong>City:</strong> Trujillo - Peru.</p>
                <p>${arrow}<strong>University:</strong> Leonardo da Vinci, 2010 - 2013.</p>
                <p>${arrow}<strong>Major:</strong> Computer Science. (unfinished)</p>
                <p>${arrow}<strong>Current:</strong> Working on Backend with NodeJs and Python, improving my German and learning ASL ...</p>
              `
              )}
          </div>
        </article>
      </main>
    </section>
  );
}
