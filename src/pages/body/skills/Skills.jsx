import './Skills.scss';
import {ImHtmlFive} from 'react-icons/im';
import {SiNodedotjs,SiWebpack,SiVite,SiUnity,SiAdobephotoshop,SiGnubash,SiCss3,SiJavascript,SiPhp,SiPython,SiMysql,SiFirebase,SiVisualstudiocode} from 'react-icons/si';
import {FaReact,FaSass} from 'react-icons/fa';
import {FaGitAlt,FaGithub,FaLinux} from 'react-icons/fa';

const About = ()=>{
    return(
        <div className='containerSkills' >
            <div className="body" id='about'>
                <h1>Skills</h1>
                <div className="icons">
                    <div>
                    <ImHtmlFive/>
                    <span>HTML5</span>
                    </div>
                        <div>
                        <SiCss3/>
                        <span>Css3</span>
                        </div>
                    <div>
                    <SiJavascript/>
                    <span>Javascript</span>
                    </div>
<div>
<SiNodedotjs/>
<span>Node</span>
</div>

<div>
<FaReact/>
<span>ReactJs/</span>
<span style={{padding:0}}>Native</span>
</div>

<div>
<FaSass/>
<span>Sass</span>
</div>
<div>
<SiFirebase/>
    <span>Firebase</span>
    </div>          
          
<div>
<SiPhp/>
<span>Php</span>
</div>
<div>
<SiMysql/>
    <span>MySql</span>
    </div>          
<div>
<SiPython/>
    <span>Python</span>
    </div>          
<div>
<FaGitAlt/>
<span>Git</span>
</div>
<div>
<FaGithub/>
<span>GitHub</span>
</div>
<div>
<SiVite/>
<span>Vite</span>
</div>
<div>
<SiWebpack/>
<span>Webpack</span>
</div>
<div>
<SiVisualstudiocode/>
<span>VSCode</span>
</div>
<div>
<SiAdobephotoshop/>
<span>Photoshop</span>
</div>
<div>
<SiGnubash/>
<span>Bash</span>
</div>
<div>
<SiUnity/>
<span>Unity</span>
</div>
<div>
<FaLinux/>
<span>Linux</span>
</div>

                </div>
                <span className='span'>Angel Darco</span>
            </div>
        </div>
    )
}
export default About;