import FacebookLogin from "react-facebook-login";
import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useHistory } from "react-router";
import { URL } from "../Consts";
export default function LoginWithFacebook() {
  const { setAuthState } = useContext(AuthContext);
  const history = useHistory();
  const responseFacebook = (response) => {
    LogIn(response);
  };
  const LogIn = (data) => {
    const newUser = {
      username: data.name,
      password: data.id,
      email: data.email,
      role: 0,
    };
    axios.post(`${URL}/auth`, newUser).then(() => {
      axios.post(`${URL}/auth/login`, newUser).then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          localStorage.setItem("accessToken", response.data.token);
          localStorage.setItem("userId", response.data.id);
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("role", response.data.role);
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
          history.push("/");
        }
      });
    });
  };
  return (
    <FacebookLogin
      appId="387334999406825"
      autoLoad={false}
      fields="name,email"
      callback={responseFacebook}
      cssClass="p-2 w-46 rounded-md text-white bg-indigo-500"
    />
  );
}
