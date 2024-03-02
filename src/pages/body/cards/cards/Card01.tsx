import Typewriter from "typewriter-effect/dist/core";
import "./Cards.scss";
import React, { useEffect, useRef, useState } from "react";
import arrow_right from "../../../../assets/svg/arrow-right.svg";

export default function Card01({ observer }: { observer: boolean }) {
  const refCard = useRef(null);
  const p1 = useRef(null);
  const p2 = useRef(null);
  const p3 = useRef(null);
  const p4 = useRef(null);
  const p5 = useRef(null);
  const p6 = useRef(null);
  const p7 = useRef(null);

  function writer(container: Element, text: string) {
    if (!container) return;
    const delay = Math.floor(Math.random() * 70);
    const typewriter = new Typewriter(container, {
      loop: false,
      delay,
      cursor: ""
    });
    typewriter.pauseFor(1000).typeString(text).start();
  }

  return (
    <section
      style={{
        transform: observer ? "translateX(0)" : "translateX(-200%)",
        transition: "transform 3s"
      }}
      className="card"
    >
      <main className="firstCard">
        <h1>Some data</h1>

        <div className="data">
          <article>
            <img src={arrow_right} alt="img" />
            <p ref={p1}>
              {p1.current &&
                writer(
                  p1.current,
                  "<strong>Name:</strong> Angel Goicochea Puitiza"
                )}
            </p>
          </article>
          <article>
            <img src={arrow_right} alt="img" />
            <p ref={p2}>
              {p2.current &&
                writer(p2.current, "<strong>Birthday:</strong> Sept 19, 1992")}
            </p>
          </article>
          <article>
            <img src={arrow_right} alt="img" />
            <p ref={p3}>
              {p3.current &&
                writer(p3.current, "<strong>City:</strong> Trujillo - Peru")}
            </p>
          </article>
          <article>
            <img src={arrow_right} alt="img" />
            <p ref={p4}>
              {p4.current &&
                writer(
                  p4.current,
                  "<strong>University:</strong> Leonardo da Vinci, 2010 - 2013"
                )}
            </p>
          </article>
          <article>
            <img src={arrow_right} alt="img" />
            <p ref={p5}>
              {p5.current &&
                writer(
                  p5.current,
                  "<strong>Degree:</strong> Computer Science, (unfinished)"
                )}
            </p>
          </article>
          <article>
            <img src={arrow_right} alt="img" />
            <p ref={p6}>
              {p6.current &&
                writer(p6.current, "<strong>Job:</strong> Frontend Developer")}
            </p>
          </article>
          <article>
            <img src={arrow_right} alt="img" />
            <p ref={p7}>
              {p7.current &&
                writer(
                  p7.current,
                  "<strong>Current:</strong> Learning Backend with Node and Python..."
                )}
            </p>
          </article>
        </div>
      </main>
    </section>
  );
}
