import Darkmode from "darco-dark-mode";
import "./DarkMode.scss";
import darkmodeVariables from "../../utils/darkmodeVariables.js";

const DarkMode = ({ isDark }) => {
  return (
    <header>
      <Darkmode
        isDark={isDark}
        switchStyles={darkmodeVariables}
        icons
        styles={{
          mainContainer: {
            borderColor: "var(--text-color)",
            height: "30px",
            width: "30px"
          }
        }}
      />
    </header>
  );
};
export default DarkMode;
