import "./ThemeSelector.css";

import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeColors = ["primary", "secondary", "success", "danger", "warning"];

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useContext(ThemeContext);

  function toggleMode() {
    changeMode(mode === "light" ? "dark" : "light");
  }

  return (
    <div className="container theme-selector">
      <div className="mode-toggle">
        <i
          className={`bi bi-moon-stars${mode === "dark" ? "-fill" : ""}`}
          onClick={() => toggleMode()}
        />
      </div>
      <div className="theme-links">
        {ThemeColors.map((theme) => (
          <span
            key={theme}
            className={`bg-${theme}`}
            onClick={() => changeColor(theme)}
          ></span>
        ))}
      </div>
    </div>
  );
}
