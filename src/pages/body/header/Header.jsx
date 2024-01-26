import "./Header.scss";
import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const handlerMenu = () => !showHeader && setShowMenu(!showMenu);
  const menuRef = useRef(null);

  const handlerLinks = (e) => {
    const targetName = e.target.innerText.toLowerCase();
    const target = document.getElementById(targetName);

    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const resize = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const { width } = entry.contentRect;
        if (width >= 800) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }
      });
    });
    if (menuRef.current) resize.observe(menuRef.current);

    return () => {
      if (menuRef.current) {
        resize.unobserve(menuRef.current);
      }
    };
  }, []);

  return (
    <div className="containerHeader" ref={menuRef}>
      <div className="body">
        <div className="menu" onClick={handlerMenu}>
          {showMenu ? <GrClose className="close" /> : <GiHamburgerMenu />}
        </div>

        <div className={`header ${showMenu || showHeader ? "" : "hide"}`}>
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
      </div>
    </div>
  );
};
export default Header;
