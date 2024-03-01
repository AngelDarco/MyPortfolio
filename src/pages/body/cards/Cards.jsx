import { useEffect, useRef, useState } from "react";
import "./Cards.scss";
import intersectionObserver from "../../../utils/intersectionObserver";
import Card from "./Card";

export default function Cards() {
  const [cards, setCards] = useState();
  const refCard = useRef();

  useEffect(() => {
    if (!refCard.current) return;
    const obv = intersectionObserver.observer(refCard.current, setCards);
    return () => {
      if (refCard.current && obv)
        intersectionObserver.unmount(refCard.current, obv);
    };
  }, []);

  return (
    <section ref={refCard} className={`cardsContainer`}>
      <Card
        style={{
          transform: cards ? "translateX(0)" : "translateX(-200%)",
          transition: "transform 3s"
        }}
        title="Test Card 01"
      />
      <Card
        style={{
          transform: cards ? "translateY(0)" : "translateY(-210%)",
          transition: "transform 3s"
        }}
        title="card02"
      />
      <Card
        style={{
          transform: cards ? "translateY(0)" : "translateY(210%)",
          transition: "transform 3s"
        }}
        title="card4"
      />
      <Card
        style={{
          transform: cards ? "translateX(0)" : "translateX(200%)",
          transition: "transform 3s"
        }}
        title="card5"
      />
    </section>
  );
}
