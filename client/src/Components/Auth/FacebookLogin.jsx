import FacebookLogin from "react-facebook-login";
import axios from "axios";
import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useHistory } from "react-router";
export default function LoginWithFacebook() {
  const { setAuthState } = useContext(AuthContext);
  const history = useHistory();
  const responseFacebook = (response) => {
    LogIn(response);
  };
  const LogIn = (data) => {
    const username = data.name;
    const password = data.id;
    const email = data.email;
    axios
      .post("http://localhost:3001/auth", { username, password, email })
      .then(() => {
        axios
          .post("http://localhost:3001/auth/login", { username, password })
          .then((response) => {
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
      cssClass=""
      callback={responseFacebook}
    />
  );
}
