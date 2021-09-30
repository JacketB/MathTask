import "../style.css";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
const Register = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const validation = Yup.object({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });
  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then(() => {
      console.log(data);
    });
  };
  return (
    <div>
      <div className="min-h-screen text-gray-800 antialiased px-4 py-6 sm:py-12">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validation}
        >
          <Form>
            <div className="relative py-3 sm:max-w-xl mx-auto text-center">
              <span className="text-2xl font-light reg">Зарегистрируйтесь</span>
              <div className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
                <div className="py-6 px-8">
                  <label className="block font-semibold">Email</label>
                  <Field
                    name="username"
                    className=" border w-full h-5 px-3 py-3 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                  />
                  <label className="block mt-3 font-semibold">Пароль</label>
                  <Field
                    name="password"
                    className=" border w-full h-5 px-3 py-3 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                  />
                  <div className="flex justify-between items-baseline">
                    <button
                      type="submit"
                      className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg"
                    >
                      Регистрация
                    </button>
                    <a className="px-3 text-sm hover:underline">
                      или войдите в аккаунт
                    </a>
                  </div>
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
