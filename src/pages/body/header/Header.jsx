import "./Header.scss";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import resizeObeserver from "../../../utils/resizeObserver";
import DarkMode from "../../darkmode/DarkMode";

const Header = ({ headerObserver, isDark }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLinks, setShowLinks] = useState(true);
  const [responsive, setResponsive] = useState(false);

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
    if (innerWidth <= 800) setResponsive(true);
    else setResponsive(false);
  };

  useEffect(() => {
    resizeheader(window.innerWidth);
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

        {/* show the links */}
        <div
          className={`links ${showMenu || (showLinks && !responsive) ? "" : "hide"}`}
        >
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
        <DarkMode isDark={isDark} />
      </section>
    </div>
  );
};
export default Header;
