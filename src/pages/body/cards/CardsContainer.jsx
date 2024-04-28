import { useEffect, useRef, useState } from "react";
import "./CardsContainer.scss";
import intersectionObserver from "../../../utils/intersectionObserver";

import Card01 from "./cards/Card01";
import Card02 from "./cards/Card02";
import Card03 from "./cards/Card03";
import Card04 from "./cards/Card04";

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
      <Card02 observer={cards} />
      <Card04 observer={cards} />
    </section>
  );
}
