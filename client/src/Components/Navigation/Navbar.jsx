import { Link, useHistory } from "react-router-dom";
import "../style.css";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  let history = useHistory();
  const { t } = useTranslation();
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
  };
  return (
    <div className="nav p-3 shadow-lg   border-b-2 border-gray-500 flex justify-between">
      <div>
        <span className="nav-item py-3">
          <Link className="hover:text-white" to="/">
            {t("navbar.link1")}
          </Link>
        </span>
        <span className="nav-item py-3">
          <Link className="hover:text-white " to="/allTasks">
            {t("tasks")}
          </Link>
        </span>
        {localStorage.getItem("role") !== 0 ? (
          <span className="nav-item py-3">
            <Link to="/admin" className="hover:text-white">
              {t("admin")}
            </Link>
          </span>
        ) : (
          <></>
        )}
        {!localStorage.getItem("accessToken") ? (
          <>
            <span className="nav-item py-3">
              <Link className="hover:text-white" to="/login">
                {t("login.logspan")}
              </Link>
            </span>
            <span className="nav-item py-3">
              <Link className="hover:text-white" to="/register">
                {t("register.regspan")}
              </Link>
            </span>
          </>
        ) : (
          <>
            <span className="nav-item py-3">
              <span
                className="hover:text-white cursor-pointer"
                onClick={() => {
                  history.push(`/profile/${localStorage.getItem("userId")}`);
                }}
              >
                {t("navbar.link2")}
              </span>
            </span>
            <span className="nav-item py-3">
              <Link
                className="hover:text-white cursor-pointer"
                to="/login"
                onClick={logout}
              >
                {t("logout")}
              </Link>
            </span>
          </>
        )}
      </div>
      <div className="inline px-6">{localStorage.getItem("username")}</div>
    </div>
  );
};
export default Navbar;
