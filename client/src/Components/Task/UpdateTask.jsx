import Navbar from "../Navigation/Navbar";
import "../style.css";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Form, Formik, Field, ErrorMessage, isString } from "formik";
import * as Yup from "yup";
export default function UpdateTask() {
  let history = useHistory();
  let id = useParams();
  const [taskObject, setTaskObject] = useState({});
  const initialValues = {
    title: "",
    taskTopic: "",
    taskCondition: "",
    id: `${id.id}`,
  };
  useEffect(() => {
    console.log(id.id);
    axios.get(`http://localhost:3001/tasks/byId/${id.id}`).then((response) => {
      setTaskObject(response.data);
    });
  }, []);
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("You must input a Title!"),
    taskTopic: Yup.string().required(),
    taskCondition: Yup.string().required(),
  });
  const onSubmit = (data) => {
    axios
      .put(
        "http://localhost:3001/tasks/updated",
        {
          newTitle: data.title,
          newTopic: data.taskTopic,
          newCondition: data.taskCondition,
          id: id,
        },
        {
          headers: { accessToken: localStorage.getItem("accessToken") },
        }
      )
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <div className="content border-2 border-gray-500 pb-3">
      <Navbar />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form id="updateTask" className="px-2">
          <div className="mb-2">
            <div className="text-xl">title</div>
            <ErrorMessage
              name="title"
              component="div"
              className="text-red-700"
            />
            <Field
              type="text"
              id="inputUpdateTask"
              name="title"
              className="py-2 text-black"
              placeholder={taskObject.title}
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
              id="inputUpdateTask"
              name="taskTopic"
              className="py-2 text-black"
              placeholder={taskObject.taskTopic}
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
              id="inputUpdateTask"
              name="taskCondition"
              placeholder={taskObject.taskCondition}
              className="py-2 text-black w-1/2 h-28"
            />
          </div>
          <button type="submit" className="text-white py-2 px-6 rounded-lg">
            Update task
          </button>
        </Form>
      </Formik>
    </div>
  );
}
