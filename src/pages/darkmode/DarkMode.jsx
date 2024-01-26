import Darkmode from "darco-dark-mode";
import "./DarkMode.scss";

const DarkMode = () => {
  const switchStylesVariables = [
    {
      theme: "Light",
      variables: [
        "--primary-color",
        "--secondary-color",
        "--text-color",
        "--color",
      ],
      values: ["#e0dede", "#fff", "#000", "#ffffffb7"],
    },
    {
      theme: "Dark",
      variables: [
        "--primary-color",
        "--secondary-color",
        "--text-color",
        "--menu-color",
      ],
      values: ["#303131", "#000", "#fff", "#000000b7"],
    },
  ];

  return (
    <header>
      <Darkmode
        switchStyles={switchStylesVariables}
        icons
        styles={{ mainContainer: { borderColor: "var(--text-color)" } }}
      />
    </header>
  );
};
export default DarkMode;
