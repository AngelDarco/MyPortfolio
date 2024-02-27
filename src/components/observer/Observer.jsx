import { useEffect, useRef, useState } from "react";
import intersectionObserver from "../../utils/intersectionObserver";

export default function Observer({ Element }) {
  const observerRef = useRef(null);
  const [observer, setObserver] = useState();

  useEffect(() => {
    if (!observerRef.current) return;
    let obv = null;

    if (observerRef.current)
      obv = intersectionObserver.observer(observerRef.current, setObserver);
    return () => {
      if (observerRef.current && obv)
        intersectionObserver.unmount(observerRef.current, obv);
    };
  }, []);

  return (
    <Element
      reference={observerRef}
      style={{
        opacity: observer ? 1 : 0,
        transition: "opacity 1.5s ease-in-out"
      }}
    />
  );
}
