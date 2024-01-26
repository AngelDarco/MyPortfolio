import "./App.css";
import Proyects from "./pages/projects/Projects";
import About from "./pages/body/about/About";
import Footer from "./pages/body/footer/Footer";
import Main from "./pages/body/main/Main";
import Contact from "./pages/body/contact/Contact";
import Skills from "./pages/body/skills/Skills";
import { useEffect, useRef, useState } from "react";
import GoUp from "./pages/goup/GoUp";
// import Cursors from "darco-cursors";
import DarkMode from "./pages/darkmode/DarkMode";

function App() {
  const app = useRef();
  const containerRef = useRef();

  const [node, setNode] = useState(null);

  useEffect(() => setNode(app.current), []);

  return (
    // <Cursors className="App">
    <div ref={containerRef} className="App">
      <DarkMode />
      <Main />
      <div ref={app} style={{ position: "absolute", top: "15%" }}></div>
      {<GoUp reference={node} container={containerRef.current} />}
      <About />
      <Skills />
      <Proyects />
      <Contact />
      <Footer />
      {/* </Cursors> */}
    </div>
  );
}
export default App;
