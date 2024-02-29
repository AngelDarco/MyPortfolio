import { useEffect, useRef, useState } from "react";
import "./Cards.scss";
import intersectionObserver from "../../../utils/intersectionObserver";
import Typewriter from "typewriter-effect/dist/core";

export default function Cards() {
  const [cards, setCards] = useState();
  const refCard = useRef();
  const refCard1 = useRef();

  useEffect(() => {
    if (!refCard.current) return;
    const obv = intersectionObserver.observer(refCard.current, setCards);
    return () => {
      if (refCard.current && obv)
        intersectionObserver.unmount(refCard.current, obv);
    };
  }, []);

  useEffect(() => {
    if (cards && refCard1.current) {
      const typewriter = new Typewriter(refCard1.current, {
        loop: false,
        delay: 50,
        cursor: ""
      });
      typewriter.pauseFor(1000).typeString("<h4>Mid/Level</h4>").start();
    }
  }, [cards]);

  return (
    <section ref={refCard} className={`cardsContainer`}>
      <div
        style={{
          transform: cards ? "translateX(0)" : "translateX(-200%)",
          transition: "transform 3s"
        }}
        className="card"
      >
        <h1>Cards</h1>
        <p ref={refCard1}></p>
      </div>
      <div
        style={{
          transform: cards ? "translateY(0)" : "translateY(-210%)",
          transition: "transform 3s"
        }}
        className="card"
      ></div>
      <div
        style={{
          transform: cards ? "translateY(0)" : "translateY(210%)",
          transition: "transform 3s"
        }}
        className="card"
      ></div>
      <div
        style={{
          transform: cards ? "translateX(0)" : "translateX(200%)",
          transition: "transform 3s"
        }}
        className="card"
      ></div>
    </section>
  );
}
