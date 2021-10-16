import FacebookLogin from "react-facebook-login";
import axios from "axios";
import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useHistory } from "react-router";
import { URL } from "../DatabaseQueries/Querie";
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
      .post(`${URL}/auth`, {
        username,
        password,
        email,
      })
      .then(() => {
        axios
          .post(`${URL}/auth/login`, {
            username,
            password,
          })
          .then((response) => {
            if (response.data.error) {
              alert(response.data.error);
            } else {
              localStorage.setItem("accessToken", response.data.token);
              localStorage.setItem("userId", response.data.id);
              localStorage.setItem("username", response.data.username);
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
      callback={responseFacebook}
    />
  );
}
