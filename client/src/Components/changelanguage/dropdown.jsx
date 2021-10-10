import "./dropdown.css";
import { useTranslation } from "react-i18next";
export default function Dropdown() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="dropdown mx-3">
      <button className="dropbtn text-white py-2 px-6 rounded-lg">
        {t("changelang")}
      </button>
      <div className="dropdown-content">
        <div>
          <button onClick={() => changeLanguage("ru")}>Рус</button>
        </div>
        <div>
          <button onClick={() => changeLanguage("en")}>Eng</button>
        </div>
      </div>
    </div>
  );
}
