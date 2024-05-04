import Typewriter from "typewriter-effect/dist/core";
import "./Cards.scss";
import React, { useEffect, useRef, useState } from "react";

export default function Card03({ observer }: { observer: boolean }) {
  const textRef = useRef(null);

  function writer(container: Element, text: string) {
    if (!container || container.innerHTML !== "") return;
    const typewriter = new Typewriter(textRef.current, {
      loop: false,
      delay: "5ms",
      cursor: ""
    });
    typewriter.typeString(text).start();
  }

  return (
    <section
      style={{
        transform: observer ? "translateY(0)" : "translateY(250%)",
        transition: "transform 3s"
      }}
      className="card"
    >
      <main className="thirdCard">
        <h1>Achievements</h1>
        <div ref={textRef} className="text-container">
          {textRef.current &&
            writer(
              textRef.current,
              `
              <p><strong>MDN (Mozilla Developer Network):</strong> Contributed significantly to the enhancement of MDN Web Docs by adding examples and rectifying translations in the documentation.</p>

              <p><strong>Onedrive for Linux:</strong> As a dedicated Linux user, played a pivotal role in the development of Onedrive for Linux, particularly in the realm of webpage development.</p>

              <p><strong>Ganache-UI (Ethereum Blockchain):</strong> Discovered and responsibly disclosed critical security vulnerabilities in the Ethereum blockchain's Ganache, underlining a commitment to the robustness of blockchain technologies.</p>

              <p><strong>Vite-plugin-vercel:</strong> Actively participated in the development of the Vite plugin for Vercel, contributing to the seamless integration of these technologies.</p>

              <p><strong>Assistance:</strong> A source of immense pride stems from providing assistance to individuals globally, aiding them in personal projects, learning endeavors, and homework challenges. This commitment reflects a dedication to supporting and uplifting others in their pursuits.</p>

              
          `
            )}
        </div>
      </main>
    </section>
  );
}
