import { Link } from "react-router-dom";
import "../style.css";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="nav p-3 my-3 shadow-lg  rounded">
      <div>
        <span className="nav-item py-3">
          <Link to="/">{t("navbar.link1")}</Link>
        </span>
        <span className="nav-item py-3">
          <Link to="/profile">{t("navbar.link2")}</Link>
        </span>
      </div>
    </div>
  );
};
export default Navbar;
