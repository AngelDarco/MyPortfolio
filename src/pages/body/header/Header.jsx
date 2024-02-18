import "./Header.scss";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import resizeObeserver from "../../../utils/resizeObserver";
import DarkMode from "../../darkmode/DarkMode";

const Header = ({ headerObserver }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const handlerMenu = () => {
    setShowMenu(!showMenu);
    setShowLinks(!showLinks);
  };

  const handlerLinks = (e) => {
    let targetName = e.target.innerText.toLowerCase();

    if (targetName === "hire me") targetName = "contact";
    else if (targetName === "home")
      window.scrollTo({ top: 0, behavior: "smooth" });

    const target = document.getElementById(targetName);
    if (target) target.scrollIntoView({ behavior: "smooth" });

    handlerMenu();
  };

  const resizeheader = (innerWidth) => {
    if (innerWidth >= 800) {
      setShowMenu(true);
      setShowLinks(true);
    } else {
      setShowMenu(false);
      setShowLinks(false);
    }
  };

  useEffect(() => {
    const observer = new resizeObeserver();
    const fn = observer.observer(window, resizeheader);
    return () => {
      observer.unmount(window, fn);
    };
  }, []);

  return (
    <div
      className={`containerHeader ${!headerObserver ? "containerOnScroll" : ""}`}
      id="home"
    >
      <section className="header">
        {/* switch menu and close icon */}
        <div className="icons" onClick={handlerMenu}>
          {showMenu ? (
            <GrClose className="close" />
          ) : (
            <GiHamburgerMenu className="menu" />
          )}
        </div>

        {/* show the menu */}
        <div className={`links ${showMenu && showLinks ? "" : "hide"}`}>
          <ul>
            <li onClick={handlerLinks}>Home</li>
            <li onClick={handlerLinks}>Projects</li>
            <li onClick={handlerLinks}>About me</li>
            <li onClick={handlerLinks}>Skills</li>
            <li onClick={handlerLinks}>Contact</li>
          </ul>
          <button onClick={handlerLinks} className="hover-spinner">
            Hire Me
          </button>
        </div>
      </section>
      <section className="darkmode">
        <DarkMode />
      </section>
    </div>
  );
};
export default Header;
