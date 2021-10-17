import React from "react";
import { useTranslation } from "react-i18next";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import AddImage from "../Components/Profile/AddImage";
import axios from "axios";
import { GetImages } from "../Components/DatabaseQueries/Querie";
import { Topics, URL } from "../Components/Consts";
import "../App.css";
import Navbar from "../Components/Navigation/Navbar";
export default function AddTask() {
  let history = useHistory();
  const { t } = useTranslation();
  const initialValues = {
    title: "",
    taskTopic: "",
    taskCondition: "",
    answer1: "",
    answer2: "",
    answer3: "",
  };
  if (!localStorage.getItem("accessToken")) {
    history.push("/login");
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(t("addtask.field")),
    taskTopic: Yup.string().required(t("addtask.field")),
    taskCondition: Yup.string().required(t("addtask.field")),
    answer1: Yup.string().required(t("addtask.field")),
  });
  const onSubmit = (data) => {
    data.image1 = GetImages()[0];
    data.image2 = GetImages()[1];
    data.image3 = GetImages()[2];
    axios
      .post(`${URL}/tasks`, data, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then(() => {
        history.push("/");
      });
  };
  return (
    <div className="content">
      <Navbar />

      <div className="p-3 object-none object-center ">
        <div>
          <h2 className="text-3xl reg">{t("profile.newtask")}</h2>
        </div>
        <div className="">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form id="addTask">
              <div className="grid grid-cols-3 mt-2 mx-10">
                <div className="text-xl reg ">{t("addtask.title")}</div>
                <div className="text-xl reg ">{t("addtask.topic")}</div>
                <div>Своя тема</div>
                <div className="mb-2 w-full ">
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="text-red-700"
                  />
                  <Field
                    id="inputCreateTask"
                    name="title"
                    className="p-1 text-black w-1/2 border-1 border-indigo-500 rounded"
                  />
                </div>
                <div className="mb-2 ">
                  <ErrorMessage
                    name="taskTopic"
                    component="div"
                    className="text-red-700"
                  />
                  <Field
                    as="select"
                    name="taskTopic"
                    className="p-1 text-black w-1/2 border-1 border-indigo-500 rounded"
                  >
                    {Topics.map((elem) => (
                      <option className="text-black" value={elem}>
                        {elem}
                      </option>
                    ))}
                  </Field>
                </div>
                <div>
                  <ErrorMessage
                    name="taskTopic"
                    component="div"
                    className="text-red-700"
                  />
                  <Field
                    name="taskTopic"
                    className="p-1 text-black w-1/2 border-1 border-indigo-500 rounded"
                  ></Field>
                </div>
              </div>
              <div className=" mx-10">
                <div className="text-xl reg">{t("addtask.condition")}</div>
                <ErrorMessage
                  name="taskCondition"
                  component="div"
                  className="text-red-700"
                />
                <Field
                  as="textarea"
                  id="inputCreateTask"
                  name="taskCondition"
                  className="p-1 text-black h-28 w-full border-1 border-indigo-500 rounded"
                />
              </div>
              <div className="mb-3 mx-10">
                <div>
                  <h4 className="reg">{t("addtask.addAnswer")}</h4>
                  <h5 className="reg">{t("addtask.warning")}</h5>
                </div>
                <p>{t("addtask.answer1")}</p>
                <ErrorMessage
                  name="answer1"
                  component="div"
                  className="text-red-700"
                />
                <Field
                  as="textarea"
                  id="inputCreateTask"
                  name="answer1"
                  className="p-1 text-black h-28 w-full border-1 border-indigo-500 rounded"
                />
                <div />
                <p>{t("addtask.answer2")}</p>
                <Field
                  as="textarea"
                  id="inputCreateTask"
                  name="answer2"
                  className="p-1 text-black h-28 w-full border-1 border-indigo-500 rounded"
                />
                <div />
                <p>{t("addtask.answer3")}</p>
                <Field
                  as="textarea"
                  id="inputCreateTask"
                  name="answer3"
                  className="p-1 text-black h-28 w-full border-1 border-indigo-500 rounded"
                />
              </div>
              <div className="mx-10">
                <AddImage />
                <button
                  type="submit"
                  className="text-white py-2 px-6 rounded-lg"
                >
                  {t("addtask.create")}
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
