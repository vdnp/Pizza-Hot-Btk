import "./ThemeSelector.css";

import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeColors = [
  "light",
  "dark",
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
];

export default function ThemeSelector() {
  const { color, setColor } = useContext(ThemeContext);

  return (
    <div className="container theme-selector">
      <div className="theme-links">
        {ThemeColors.map((theme) => (
          <span
            key={theme}
            className={`bg-${theme}`}
            onClick={() => setColor(theme)}
          ></span>
        ))}
      </div>
    </div>
  );
}
