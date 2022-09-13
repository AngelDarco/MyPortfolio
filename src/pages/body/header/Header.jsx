import './Header.scss';
import { useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';


const Header = ()=>{
    const [ showMenu, setShowMenu ] = useState(false);
    const handlerMenu = ()=> setShowMenu(!showMenu);
    
    const handlerLinks = (e)=>{
        switch(e.target.innerText){
            case 'observer':
                window.location.href = '#observer';
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
        }
    }

    return(
        <div className="containerHeader">
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
        </div>
        </div>
    )
}
export default Header;