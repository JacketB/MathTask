import "../Components/style.css";
import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import { AuthContext } from "../Components/Context/AuthContext";
import axios from "axios";
import * as Yup from "yup";
import { useHistory } from "react-router";
import { URL } from "../Components/Consts";
import SocialMedia from "../Components/Auth/SocialMediaLogin";
import { useTranslation } from "react-i18next";
import "../App.css";
const Register = () => {
  const { t } = useTranslation();
  const { setAuthState } = useContext(AuthContext);
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  let history = useHistory();
  const validation = Yup.object({
    username: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),
  });
  const onSubmit = (data) => {
    data.role = 0;
    axios.post(`${URL}/auth`, data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        history.push("/login");
      }
    });
  };
  return (
    <div className="login bg-right bg-no-repeat">
      <div className="reg">
        <Link to="/" className="p-2 rounded-xl hover:bg-gray-300">
          {t("gohome")}
        </Link>
      </div>
      <div className="min-h-screen text-gray-800 antialiased px-4 py-6 sm:py-12">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validation}
        >
          <Form>
            <div className="relative py-3 sm:max-w-xl text-center">
              <span className="text-2xl font-light reg">
                {t("register.regspan")}
              </span>
              <div className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
                <div className="py-6 px-8">
                  <label className="block font-semibold">Email</label>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-700"
                  />
                  <Field
                    name="email"
                    className=" border w-full h-5 px-3 py-3 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                  />
                  <label className="block font-semibold">{t("username")}</label>
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-700"
                  />
                  <Field
                    name="username"
                    className=" border w-full h-5 px-3 py-3 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                  />
                  <label className="block mt-3 font-semibold">
                    {t("register.regpass")}
                  </label>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-700"
                  />
                  <Field
                    name="password"
                    className=" border w-full h-5 px-3 py-3 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                  />
                  <div className="flex justify-between items-baseline">
                    <button
                      type="submit"
                      className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg"
                    >
                      {t("register.regbut")}
                    </button>
                    <Link to="/login" className="px-3 text-sm hover:underline">
                      {t("register.reglink")}
                    </Link>
                  </div>
                  <SocialMedia />
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default Register;
