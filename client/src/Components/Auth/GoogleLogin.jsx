import GoogleLogin from "react-google-login";
import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useHistory } from "react-router";
import { URL } from "../Consts";
import { setLoginInfo } from "../Consts";
export default function LoginWithGoogle() {
  const { setAuthState } = useContext(AuthContext);
  const history = useHistory();
  const responseGoogle = (response) => {
    console.log(response);
    LogIn(response);
  };
  const LogIn = (data) => {
    const newUser = {
      username: data.it.Re,
      email: data.it.Tt,
      password: data.it.sT,
      role: 0,
    };
    axios.post(`${URL}/auth`, newUser).then(() => {
      axios.post(`${URL}/auth/login`, newUser).then((response) => {
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
    });
  };
  return (
    <div>
      <GoogleLogin
        clientId="491733085744-kgfk2529a557qgpebuhrnkgn0svb8p1i.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
            className="p-2 w-46 rounded-md text-white bg-indigo-500"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Login with Google
          </button>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
