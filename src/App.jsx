import './App.css';
import Proyects from './pages/body/proyects/Proyects';
import About from './pages/body/about/About';
import Footer from "./pages/body/footer/Footer"
import Main from "./pages/body/main/Main"
import Contact from './pages/body/contact/Contact';
import DarkMode from './pages/body/darkmode/DarkMode';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <DarkMode/>
       <Main/>
       <About/>
       <Proyects/>
       <Contact/>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App
