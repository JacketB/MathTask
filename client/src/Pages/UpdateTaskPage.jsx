import Navbar from "../Components/Navigation/Navbar";
import "../Components/style.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { URL } from "../Components/Consts";
import AddImage from "../Components/Profile/AddImage";
import { useHistory } from "react-router";
export default function UpdateTask() {
  let history = useHistory();
  const { t } = useTranslation();
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
  const deletePost = (id) => {
    axios.delete(`${URL}/tasks/${id}`, {
      headers: { accessToken: localStorage.getItem("accessToken") },
    });
    history.push("/");
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
        history.push("/");
      });
  };
  return (
    <div className="content pb-3  ">
      <Navbar />
      <button onClick={() => deletePost(id.id)}>Удалить задачу</button>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form id="updateTask" className="px-2">
          <div className="grid grid-cols-3 mt-2 mx-10">
            <div className="text-xl reg ">{t("addtask.title")}</div>
            <div className="text-xl reg col-span-2">{t("addtask.topic")}</div>
            <div className="mb-2 w-full ">
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-700"
              />
              <Field
                id="inputCreateTask"
                name="title"
                placeholder={taskObject.title}
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
                placeholder={taskObject.taskTopic}
                className="p-1 text-black w-1/2 border-1 border-indigo-500 rounded"
              />
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
              placeholder={taskObject.taskCondition}
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
            <button type="submit" className="text-white py-2 px-6 rounded-lg">
              {t("addtask.create")}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
