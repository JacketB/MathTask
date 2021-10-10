import "../style.css";
import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { AuthContext } from "../AuthContext";
import { Link } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { setAuthState } = useContext(AuthContext);
  let history = useHistory();
  const login = () => {
    const data = { username: username, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data.token);
        localStorage.setItem("userId", response.data.id);
        localStorage.setItem("userName", response.data.username);
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
        if (response.data.username == "admin") {
          history.push("/admin");
        } else history.push("/");
      }
    });
  };
  return (
    <div>
      <div className="reg">
        <Link to="/">На главную</Link>
      </div>
      <div className="  text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl mx-auto text-center">
          <span className="text-2xl font-light reg">Войдите в аккаунт</span>
          <div className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
            <div className="py-6 px-8">
              <label className="block font-semibold">Email</label>
              <input
                type="text"
                placeholder="Email"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                className=" border w-full h-5 px-3 py-3 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md "
              />
              <label className="block mt-3 font-semibold">Пароль</label>
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
                  Вход
                </button>

                <Link className="px-3 text-sm hover:underline" to="/register">
                  или создайте аккаунт
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
