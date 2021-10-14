import React, { useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import AddImage from "./AddImage";
import axios from "axios";
import { GetImages } from "../DatabaseQueries/Querie";
import Tags from "@yaireo/tagify/dist/react.tagify";
export default function AddTask() {
  let history = useHistory();
  const initialValues = {
    title: "",
    taskTopic: "",
    taskCondition: "",
    answer1: "",
    answer2: "",
    answer3: "",
  };

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      history.push("/login");
    }
  }, []);
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("You must input a Title!"),
    taskTopic: Yup.string().required(),
    taskCondition: Yup.string().required(),
    answer1: Yup.string().required(),
    answer2: Yup.string().required(),
    answer3: Yup.string().required(),
  });
  const onSubmit = (data) => {
    data.image1 = GetImages()[0];
    data.image2 = GetImages()[1];
    data.image3 = GetImages()[2];
    console.log(data);
    axios
      .post("http://localhost:3001/tasks", data, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <div className="m-2.5">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form id="addTask">
          <div className="mb-2">
            <div className="text-xl">title</div>
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-700"
            />
            <Field
              id="inputCreateTask"
              name="title"
              className="p-1 text-black w-2/3"
            />
          </div>
          <div className="mb-2">
            <div className="text-xl">topic</div>
            <ErrorMessage
              name="taskTopic"
              component="div"
              className="text-red-700"
            />
            <Field
              id="inputCreateTask"
              name="taskTopic"
              className="p-1 text-black w-2/3"
            />
          </div>
          <div className="mb-3">
            <div className="text-xl">condition</div>
            <ErrorMessage
              name="taskCondition"
              component="div"
              className="text-red-700"
            />
            <Field
              as="textarea"
              id="inputCreateTask"
              name="taskCondition"
              className="p-1 text-black h-28 w-2/3"
            />
            <div>
              <h4>Добавьте ответы к задаче</h4>
              <h5>Внимание! Все ответы должны быть правильными!</h5>
            </div>
            <p>Ответ 1</p>
            <ErrorMessage
              name="answer1"
              component="div"
              className="text-red-700"
            />
            <Field
              as="textarea"
              id="inputCreateTask"
              name="answer1"
              className="p-1 text-black h-28 w-2/3"
            />
            <div />
            <p>Ответ 2</p>
            <ErrorMessage
              name="answer2"
              component="div"
              className="text-red-700"
            />
            <Field
              as="textarea"
              id="inputCreateTask"
              name="answer2"
              className="p-1 text-black h-28 w-2/3"
            />
            <div />
            <p>Ответ 3</p>
            <ErrorMessage
              name="answer3"
              component="div"
              className="text-red-700"
            />
            <Field
              as="textarea"
              id="inputCreateTask"
              name="answer3"
              className="p-1 text-black h-28 w-2/3"
            />
          </div>
          <AddImage />
          <button type="submit" className="text-white py-2 px-6 rounded-lg">
            Create task
          </button>
        </Form>
      </Formik>
    </div>
  );
}
