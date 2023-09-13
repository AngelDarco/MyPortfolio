import "./App.css";
import Proyects from "./pages/projects/Projects";
import About from "./pages/body/about/About";
import Footer from "./pages/body/footer/Footer";
import Main from "./pages/body/main/Main";
import Contact from "./pages/body/contact/Contact";
import DarkMode from "./pages/darkmode/DarkMode";
import Skills from "./pages/body/skills/Skills";
import { useEffect, useRef, useState } from "react";
import GoUp from "./pages/goup/GoUp";

function App() {
  const app = useRef();
  const [ node, setNode ] = useState(null);
  useEffect(()=> setNode(app.current),[]);

  return (
    <div  className="App">
      <DarkMode/>
      <Main/>
      <div ref={app} style={{ position:"absolute", top:"15%" }} ></div>
      { <GoUp reference={node} /> }
      <About/>
      <Skills/>
      <Proyects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;