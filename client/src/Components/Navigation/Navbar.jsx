import { Link } from "react-router-dom";
import "../style.css";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="nav p-3 shadow-lg   border-b-2 border-gray-500">
      <div>
        <span className="nav-item py-3">
          <Link className="hover:text-white" to="/">
            {t("navbar.link1")}
          </Link>
        </span>
        <span className="nav-item py-3">
          <Link className="hover:text-white" to="/profile">
            {t("navbar.link2")}
          </Link>
        </span>
        <Link to="/login">login</Link>
      </div>
    </div>
  );
};
export default Navbar;
