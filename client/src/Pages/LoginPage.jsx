import "../Components/style.css";
import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { AuthContext } from "../Components/Context/AuthContext";
import { Link } from "react-router-dom";
import { URL } from "../Components/Consts";
import { useTranslation } from "react-i18next";
import { setLoginInfo } from "../Components/Consts";
import "../App.css";
const Login = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { setAuthState } = useContext(AuthContext);
  let history = useHistory();
  const login = () => {
    const data = { username: username, password: password };
    axios.post(`${URL}/auth/login`, data).then((response) => {
      console.log(response.data);
      if (response.data.error) {
        alert(response.data.error);
      } else {
        setLoginInfo(response.data);
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
        history.push("/");
      }
    });
  };
  return (
    <div className="  login bg-right bg-no-repeat">
      <div className="reg ">
        <Link to="/" className="p-2 rounded-xl hover:bg-gray-300">
          {t("gohome")}
        </Link>
      </div>
      <div className=" min-h-screen text-gray-800 antialiased px-4 py-6 flex flex-col sm:py-12 ">
        <div className="relative py-3 sm:max-w-xl  text-center">
          <span className="text-2xl font-light reg">{t("login.logspan")}</span>
          <div className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
            <div className="py-6 px-8">
              <label className="block font-semibold">{t("username")}</label>
              <input
                type="text"
                placeholder="Username"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                className=" border w-full h-5 px-3 py-3 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md "
              />
              <label className="block mt-3 font-semibold">
                {t("login.logpass")}
              </label>
              <input
                type="password"
                placeholder="Password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                className=" border w-full h-5 px-3 py-3 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md "
              />
              <div className="flex justify-between items-baseline">
                <button
                  onClick={login}
                  className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg"
                >
                  {t("login.logbut")}
                </button>

                <Link className="px-3 text-sm hover:underline" to="/register">
                  {t("login.loglink")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
