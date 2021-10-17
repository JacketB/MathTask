import React from "react";
import { func, string } from "prop-types";
import "../style.css";
const Toggle = ({ theme, toggleTheme }) => {
  const themebutton = theme === "light" ? "🌚" : "🌞";
  return (
    <button
      className="bg-transparent rounded-lg toogler text-4xl"
      onClick={toggleTheme}
    >
      {themebutton}
    </button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,

  toggleTheme: func.isRequired,
};

export default Toggle;
