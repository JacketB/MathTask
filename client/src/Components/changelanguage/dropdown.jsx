import "./dropdown.css";
import { useTranslation } from "react-i18next";
export default function Dropdown() {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    let lang = localStorage.getItem("i18nextLng");
    lang == "ru" ? (lang = "en") : (lang = "ru");

    i18n.changeLanguage(lang);
  };

  return (
    <div className="dropdown mx-3">
      <img
        src={t("changelang")}
        alt="1"
        width="40px"
        onClick={() => changeLanguage()}
      />
    </div>
  );
}
