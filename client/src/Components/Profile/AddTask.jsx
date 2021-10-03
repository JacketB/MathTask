import { useTranslation } from "react-i18next";
import { Form, Formik, Field, ErrorMessage } from "formik";
import "../style.css";
import * as Yup from "yup";
import axios from "axios";
export default function AddTask() {
  const { t, i18n } = useTranslation();
  const initialValues = {
    title: "",
    taskTopic: "",
    taskCondition: "",
    taskAuthor: localStorage.getItem("username"),
  };

  const validation = Yup.object({
    title: Yup.string().required("error"),
    taskTopic: Yup.string().required(),
    taskCondition: Yup.string().required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/tasks", data).then(() => {
      alert("Task created!");
      document.getElementById("addTask").reset();
    });
  };
  return (
    <div className="m-2.5">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validation}
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
    </div>
  );
}
