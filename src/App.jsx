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
import Cards from "./pages/body/cards/Cards";
import { useEffect, useRef, useState } from "react";

import intersectionObserver from "./utils/intersectionObserver";
import Particles from "./particles/Particles";
import Observer from "./components/observer/Observer";

function App() {
  const headerRef = useRef();
  const canvasRef = useRef();

  const [observer, setObserver] = useState();
  const [darkTheme, setDarkTheme] = useState("");
  const [headerObserver, setHeaderObserver] = useState(false);

  useEffect(() => {
    if (headerRef.current) setObserver(headerRef.current);

    let obv = null;
    if (observer)
      obv = intersectionObserver.observer(observer, setHeaderObserver);
    return () => {
      if (observer && obv) intersectionObserver.unmount(observer, obv);
    };
  }, [headerRef.current]);

  useEffect(() => {
    if (canvasRef.current) Particles(darkTheme);
  }, [darkTheme]);

  const handlerDarkState = (isDark) => {
    setDarkTheme(isDark === "Dark");
  };

  return (
    <Cursors>
      <div id="WebGL-output" ref={canvasRef} className={styles.canvas} />
      <div className={styles.App}>
        <div ref={headerRef} />
        <Header headerObserver={headerObserver} isDark={handlerDarkState} />

        <Observer Element={Main} />
        <Cards />
        <Observer Element={Projects} />
        <Observer Element={Skills} />
        <Observer Element={About} />
        <Observer Element={Contact} />
        <Footer />
        <GoUp reference={observer && observer} />
      </div>
    </Cursors>
  );
}
export default App;
