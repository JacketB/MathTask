import { Link, useHistory } from "react-router-dom";
import "../style.css";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  let history = useHistory();
  const { t, i18n } = useTranslation();
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
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
          <Link className="hover:text-white" to="/allTasks">
            Задачи
          </Link>
        </span>
        {!localStorage.getItem("accessToken") ? (
          <>
            <Link to="/login">login</Link>
            <Link to="/register">register</Link>
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
              <Link to="/login" onClick={logout}>
                logout
              </Link>
            </span>
          </>
        )}
      </div>
      <div className="inline px-6">{localStorage.getItem("userName")}</div>
    </div>
  );
};
export default Navbar;
