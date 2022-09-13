import './App.css';
import Proyects from './pages/body/proyects/Proyects';
import About from './pages/body/about/About';
import Footer from "./pages/body/footer/Footer"
import Main from "./pages/body/main/Main"
import Contact from './pages/body/contact/Contact';
import DarkMode from './pages/body/darkmode/DarkMode';
import Header from './pages/body/header/Header';

function App() {
  return (
    <div className="App">
      <DarkMode/>
      <Header/>
       <Main/>
       <About/>
       <Proyects/>
       <Contact/>
      <Footer/>
    </div>
  )
}

export default App
