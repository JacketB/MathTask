import { Link } from "react-router-dom";
import "../style.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";
const Navbar = () => {
  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setAuthState({
          username: response.data.usernme,
          status: true,
        });
      });
  });
  const { t, i18n } = useTranslation();
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
  };
  const [authState, setAuthState] = useState({
    username: "",
    status: false,
  });
  return (
    <div className="nav p-3 shadow-lg   border-b-2 border-gray-500">
      <div>
        <span className="nav-item py-3">
          <Link className="hover:text-white" to="/">
            {t("navbar.link1")}
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
              <Link className="hover:text-white" to="/profile">
                {t("navbar.link2")}
              </Link>
            </span>
            <Link to="/login" onClick={logout}>
              logout
            </Link>
            <span>{localStorage.getItem("username")}</span>
          </>
        )}
        <span>{authState.username}</span>
      </div>
    </div>
  );
};
export default Navbar;
