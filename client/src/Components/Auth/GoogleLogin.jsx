import GoogleLogin from "react-google-login";
import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useHistory } from "react-router";
export default function LoginWithGoogle() {
  const { setAuthState } = useContext(AuthContext);
  const history = useHistory();
  const responseGoogle = (response) => {
    console.log(response);
    LogIn(response);
  };
  const LogIn = (data) => {
    const username = data.it.Re;
    const email = data.it.Tt;
    const password = data.it.sT;
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
    <div>
      <GoogleLogin
        clientId="491733085744-kgfk2529a557qgpebuhrnkgn0svb8p1i.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}