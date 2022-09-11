import './Main.scss';
import logo from '../../../assets/img/owner.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { useState } from 'react';

const Main = ()=>{
    const [ showMenu, setShowMenu ] = useState(false);
    const handlerMenu = ()=> setShowMenu(!showMenu);

    const handlerLinks = (e)=>{
        switch(e.target.innerText){
            case 'HOME':
                window.location.href = '#home';

            break;

            case 'PROYECTS':
                window.location.href = '#proyects';

            break;

            case 'ABOUT ME':
                window.location.href = '#about';

            break;

            case 'CONTACT':
                window.location.href = '#contact';

            break;

            default:
                break;            
        }
    }

    return (
        <div className='mainContainer'>
            <div className="body">
                    <div className='menu' onClick={handlerMenu}>
                        {
                           showMenu ? <GrClose className='close'/>
                                    : <GiHamburgerMenu />
                        }
                    </div>
                <div className={`header ${!showMenu ? 'hide' : ''}`}>
                
                <ul>
                <li onClick={handlerLinks}>Home</li>
                <li onClick={handlerLinks}>Proyects</li>
                <li onClick={handlerLinks}>About me</li>
                <li onClick={handlerLinks}>Contact</li>
            </ul>
            <button>Hire Me</button>
                </div>
            <div className="logo">
                <img src={logo} alt="logo.gif" /> 
            </div>
            <div className="text">
                <h5></h5>
                <h1>Frontend Developer</h1>
                <h3>Mid/Level</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum temporibus eveniet aliquam culpa explicabo atque, incidunt tempora nihil exercitationem odit ratione in itaque, accusamus dolore voluptas, at facilis dolores voluptate.</p>
                <h6></h6>
            </div>
            </div>
        </div>
    )
}
export default Main;