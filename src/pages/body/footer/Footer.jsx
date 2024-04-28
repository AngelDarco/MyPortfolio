import "./Footer.scss";
import global from "../../../global.module.css";
import { useEffect, useRef, useState } from "react";
import intersectionObserver from "../../../utils/intersectionObserver";

const Footer = () => {
  const footerRef = useRef(null);
  const [footer, setFooter] = useState();

  useEffect(() => {
    if (!footerRef.current) return;
    const obv = intersectionObserver.observer(footerRef.current, setFooter);
    return () => {
      if (footerRef.current && obv)
        intersectionObserver.unmount(footerRef.current, obv);
    };
  }, [footerRef.current]);

  return (
    <section
      ref={footerRef}
      className={`footerContainer ${global.containers}`}
      style={{
        transform: footer ? "translateY(0)" : "translateY(14vh)",
        opacity: footer ? 1 : 0,
        transition: "all 1.5s ease-in-out"
      }}
    >
      <h2>
        Portfolio<span>Created and developed by Angel GP</span>
      </h2>
      <p>Copyright © 1992-2022 Darco Group.</p>
    </section>
  );
};
export default Footer;
