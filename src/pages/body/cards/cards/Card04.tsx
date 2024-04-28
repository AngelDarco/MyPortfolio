import Typewriter from "typewriter-effect/dist/core";
import "./Cards.scss";
import React, { useEffect, useRef, useState } from "react";

export default function Card04({ observer }: { observer: boolean }) {
  const textRef = useRef(null);

  function writer(container: HTMLDivElement, text: string) {
    if (!container || container.innerHTML !== "") return;
    const typewriter = new Typewriter(container, {
      loop: false,
      delay: "5ms",
      cursor: ""
    });
    typewriter.typeString(text).start();
  }

  return (
    <section
      style={{
        transform: observer ? "translateX(0)" : "translateX(200%)",
        transition: "transform 3s"
      }}
      className="card"
    >
      <main className="fourthCard">
        <h1>Sumary</h1>
        <div ref={textRef} className="text-container">
          {textRef.current &&
            writer(
              textRef.current,
              `
            <p>After entering university, I brought with me a foundation of knowledge in the realm of Technology.</p>
            <p>So, I anticipated a more accelerated and enriching learning journey.</p>
            <p>However, after three years, I found that my academic progress was falling short of my expectations.</p>
            <p>It was at this juncture that I made the pivotal decision to step away from the traditional university path.</p>

            <p>Over the subsequent decade, my commitment to self-directed learning and practical application has propelled my growth in the IT field.</p>

            <p>Today, I confidently assert that I am well-prepared to assume a significant role within any professional setting or team, despite the absence of a formal degree.</p>

            <p>My journey is a testament to the value of hands-on experience and a relentless pursuit of knowledge in the dynamic landscape of Programming world.</p>
            `
            )}
        </div>
      </main>
    </section>
  );
}
