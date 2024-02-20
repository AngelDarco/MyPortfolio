import "./Footer.scss";
import global from "../../../global.module.css";

const Footer = () => {
  return (
    <div className={`footerContainer ${global.containers}`}>
      <h2>
        Portfolio<span>Created and developed by Angel GP</span>
      </h2>
      <p>Copyright © 1992-2022 Darco Group.</p>
    </div>
  );
};
export default Footer;
