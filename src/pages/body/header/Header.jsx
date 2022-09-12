import './Header.scss';
import { useRef, useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';


const Header = ()=>{
    const [ showMenu, setShowMenu ] = useState(false);
    const handlerMenu = ()=> setShowMenu(!showMenu);
    const home = useRef();
    const header = useRef();

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
        }
    }

    (()=>{
        const caller = (e)=>{
            const [entry] = e;
            !entry.isIntersecting ? header.current.classList.add('headerFlow')
            : header.current.classList.remove('headerFlow')
        }
        const options = {
            root: null,
            rootMargin: '10%',
            threshold: 1.0
        }
       const observer = new IntersectionObserver(caller,options)
        home.current && observer.observe(home.current);
    })();

    return(
        <div className="containerHeader">

        <div ref={home} className="body">
        <div className='menu' onClick={handlerMenu}>
                        {
                           showMenu ? <GrClose className='close'/>
                                    : <GiHamburgerMenu />
                        }
                    </div>

            <div ref={header} className={`header ${!showMenu ? 'hide' : ''}`}>
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