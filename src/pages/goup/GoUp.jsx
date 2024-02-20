import "./GoUp.scss";
import { useEffect, useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import intersectionObserver from "../../utils/intersectionObserver";

const GoUp = ({ reference }) => {
  const [show, setShow] = useState(true);

  const fn = (event) => {
    setShow(event);
  };

  useEffect(() => {
    let obv = null;
    if (reference instanceof HTMLElement)
      obv = intersectionObserver.observer(reference, fn);
    return () => {
      if (obv) intersectionObserver.unmount(reference, obv);
    };
  }, [reference]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="containerGoUp">
      <div className="body" onClick={scrollToTop}>
        {!show && <BsArrowUpCircle className="arrow" />}
      </div>
    </div>
  );
};

export default GoUp;
