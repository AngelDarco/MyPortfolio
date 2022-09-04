import './About.scss';
import {ImHtmlFive} from 'react-icons/im';
import {SiCss3,SiJavascript,SiPhp,SiPython,SiMysql} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';

const About = ()=>{
    return(
        <div className='containerAbout' >
            <div className="body" id='about'>
                <h1>About me</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, molestias aliquid mollitia fugit sint quos repellat sapiente illum atque consectetur eum in nostrum magnam, vero totam laborum quae dolore pariatur.</p>
                <div className="icons">
                    <ImHtmlFive/>
                    <SiCss3/>
                    <SiJavascript/>
                    <FaReact/>
                    <SiPhp/>
                    <SiMysql/>
                    <SiPython/>
                </div>
                <span> Angel Darco</span>
            </div>
        </div>
    )
}
export default About;