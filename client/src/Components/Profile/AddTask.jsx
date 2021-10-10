import React, { useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import AddImage from "./AddImage";
import { NewTask } from "../DatabaseQueries/Querie";
export default function AddTask() {
  let history = useHistory();
  const initialValues = {
    title: "",
    taskTopic: "",
    taskCondition: "",
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
  });
  const onSubmit = (data) => {
    NewTask(data);
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
              className="py-2 text-black"
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
              className="py-2 text-black"
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
              className="py-2 text-black"
            />
          </div>
          <button type="submit" className="text-white py-2 px-6 rounded-lg">
            Create task
          </button>
        </Form>
      </Formik>
      <AddImage />
    </div>
  );
}
