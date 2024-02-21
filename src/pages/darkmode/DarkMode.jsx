import Darkmode from "darco-dark-mode";
import "./DarkMode.scss";

const DarkMode = ({ isDark }) => {
  const switchStylesVariables = [
    {
      theme: "Light",
      variables: ["--bg-color", "--text-color", "--bg-menu-color"],
      values: ["rgba(255, 255, 255, 0.3)", "#000", "#ffffffd1"]
    },
    {
      theme: "Dark",
      variables: ["--bg-color", "--text-color", "--bg-menu-color"],
      values: ["rgba(0, 0, 0, 0.1)", "#fff", "#000000eb"]
    }
  ];

  return (
    <header>
      <Darkmode
        isDark={isDark}
        switchStyles={switchStylesVariables}
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
