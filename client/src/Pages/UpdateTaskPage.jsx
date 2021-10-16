import Navbar from "../Components/Navigation/Navbar";
import "../Components/style.css";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Form, Formik, Field, ErrorMessage, isString } from "formik";
import * as Yup from "yup";
import { URL } from "../Components/DatabaseQueries/Querie";
import AddImage from "../Components/Profile/AddImage";
export default function UpdateTask() {
  let history = useHistory();
  let id = useParams();
  const [taskObject, setTaskObject] = useState({});
  const initialValues = {
    title: "",
    taskTopic: "",
    taskCondition: "",
    answer1: "",
    answer2: "",
    answer3: "",
    id: `${id.id}`,
  };
  useEffect(() => {
    axios.get(`${URL}/tasks/byId/${id.id}`).then((response) => {
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
        `${URL}/tasks/updated`,
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
    <div className="content pb-3  ">
      <Navbar />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form id="updateTask" className="px-2">
          <div className="grid grid-cols-3 mt-2 mx-10">
            <div className="text-xl reg ">title</div>
            <div className="text-xl reg col-span-2">topic</div>
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
                id="inputCreateTask"
                name="taskTopic"
                className="p-1 text-black w-1/2 border-1 border-indigo-500 rounded"
              />
            </div>
          </div>
          <div className=" mx-10">
            <div className="text-xl reg">condition</div>
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
              <h5 className="reg">
                Внимание! Все ответы должны быть правильными!
              </h5>
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
              className="p-1 text-black h-28 w-full border-1 border-indigo-500 rounded"
            />
            <div />
            <p>Ответ 2</p>
            <Field
              as="textarea"
              id="inputCreateTask"
              name="answer2"
              className="p-1 text-black h-28 w-full border-1 border-indigo-500 rounded"
            />
            <div />
            <p>Ответ 3</p>
            <Field
              as="textarea"
              id="inputCreateTask"
              name="answer3"
              className="p-1 text-black h-28 w-full border-1 border-indigo-500 rounded"
            />
          </div>
          <div className="mx-10">
            <AddImage />

            <button type="submit" className="text-white py-2 px-6 rounded-lg">
              Update task
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
