import "./dropdown.css";
import { useTranslation } from "react-i18next";
export default function Dropdown() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div class="dropdown bg-indigo-500 py-2 px-6 rounded-lg mx-3">
      <button class="dropbtn">Язык</button>
      <div class="dropdown-content">
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
