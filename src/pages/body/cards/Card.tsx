import Typewriter from "typewriter-effect/dist/core";
import "./Cards.scss";
import React, { useEffect, useRef } from "react";

type Card = {
  style: React.CSSProperties;
  title: string;
};

export default function Card(props: Card) {
  const { style, title } = props;
  const refCard = useRef(null);

  useEffect(() => {
    if (!refCard.current) return;
    const typewriter = new Typewriter(refCard.current, {
      loop: false,
      delay: 1000,
      cursor: ""
    });
    typewriter.pauseFor(1000).typeString("Mid/Level").start();
  }, []);

  return (
    <div style={style} className="card">
      <h1>{title}</h1>
      <p ref={refCard}></p>
    </div>
  );
}
