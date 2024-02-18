import styles from "./App.module.css";
import Projects from "./pages/projects/Projects";
import About from "./pages/body/about/About";
import Footer from "./pages/body/footer/Footer";
import Main from "./pages/body/main/Main";
import Contact from "./pages/body/contact/Contact";
import Skills from "./pages/body/skills/Skills";
import GoUp from "./pages/goup/GoUp";
import Cursors from "darco-cursors";
import Header from "./pages/body/header/Header";
import { useEffect, useRef, useState } from "react";

import intersectionObserver from "./utils/intersectionObserver";
import Particles from "./particles/Particles";

function App() {
  const observerRef = useRef();
  const canvasRef = useRef();

  const [observer, setObserver] = useState();
  const [headerObserver, setHeaderObserver] = useState(false);

  useEffect(() => {
    if (observerRef.current) setObserver(observerRef.current);

    const fn = (isObserved) => {
      setHeaderObserver(isObserved);
    };
    let obv = null;
    if (observer) obv = intersectionObserver.observer(observer, fn);
    return () => {
      if (observer && obv) intersectionObserver.unmount(observer, obv);
    };
  }, [observerRef.current]);

  useEffect(() => {
    if (canvasRef.current) Particles();
  }, [canvasRef.current]);

  return (
    <Cursors>
      <div id="WebGL-output" ref={canvasRef} className={styles.canvas} />
      <div className={styles.App}>
        <Header headerObserver={headerObserver} />
        <div ref={observerRef} style={{ width: "100%" }} />
        <Main />
        <GoUp reference={observer && observer} />
        <Projects className={styles.App} />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </Cursors>
  );
}
export default App;
