import React from "react";
import { useTranslation } from "react-i18next";
import { func, string } from "prop-types";

const Toggle = ({ theme, toggleTheme }) => {
  const { t, i18n } = useTranslation();
  return (
    <button className="text-white py-2 px-6 rounded-lg" onClick={toggleTheme}>
      {t("change_theme")}
    </button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,

  toggleTheme: func.isRequired,
};

export default Toggle;
