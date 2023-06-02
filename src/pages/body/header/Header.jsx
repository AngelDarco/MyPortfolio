import "./Header.scss";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Header = ()=>{
	const [ showMenu, setShowMenu ] = useState(false);
	const handlerMenu = ()=> setShowMenu(!showMenu);
    
	const handlerLinks = (e)=>{
		switch(e.target.innerText){
		case "observer":
			window.location.href = "#observer";
			break;

		case "PROJECTS":
			window.location.href = "#projects";
			break;

		case "ABOUT ME":
			window.location.href = "#about";
			break;

		case "CONTACT":
			window.location.href = "#contact";
			break;
		case "HIRE ME":
			window.location.href = "#contact";
			break;
		default: break;
		}
	};

	return(
		<div className="containerHeader">
			<div className="body">
				<div className='menu' onClick={handlerMenu}>
					{
						showMenu ? <GrClose className='close'/>
							: <GiHamburgerMenu />
					}
				</div>

				<div className={`header ${ showMenu ? "" : "hide" }`}>
					<ul>
						<li onClick={handlerLinks}>Home</li>
						<li onClick={handlerLinks}>Projects</li>
						<li onClick={handlerLinks}>About me</li>
						<li onClick={handlerLinks}>Contact</li>
					</ul>
					<button onClick={handlerLinks}className="hover-spinner">Hire Me</button>
				</div>
			</div>
		</div>
	);
};
export default Header;