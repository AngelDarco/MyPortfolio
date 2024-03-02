import { useEffect, useRef, useState } from "react";
import "./CardsContainer.scss";
import intersectionObserver from "../../../utils/intersectionObserver";
import Card01 from "./cards/Card01";

export default function Cards() {
  const [cards, setCards] = useState(false);
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
      <Card01 observer={cards} />
    </section>
  );
}
