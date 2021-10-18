import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { URL, UserRoleInitialValues } from "../Consts";
import { useContext } from "react";
import { UsersContext } from "../Context/UsersContext";
import axios from "axios";
import toast from "react-hot-toast";
export default function EditRole() {
  const { t } = useTranslation();
  const { usersState, setUsersState } = useContext(UsersContext);

  const validationSchema = Yup.object().shape({
    id: Yup.string().required(t("addtask.field")),
    role: Yup.string().required(t("addtask.field")),
  });
  const onSubmit = (data) => {
    axios.put(`${URL}/list/roleById`, data).then(() => {
      axios.get(`${URL}/list/list`).then((response) => {
        setUsersState(response.data.listOfUsers);
        toast.success("Успешно!");
      });
    });
  };
  return (
    <div className="p-3 card m-3 rounded-xl">
      <h4 className="text-center pb-1">{t("changerole")}</h4>
      <Formik
        initialValues={UserRoleInitialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form id="updateRole">
          <div>
            <p>{t("select")}</p>
            <ErrorMessage name="id" component="div" className="text-red-700" />
            <Field
              as="select"
              name="id"
              className="p-1 text-black w-full border-1 border-indigo-500 rounded"
            >
              {usersState.map((elem) => (
                <option className="text-black" value={elem.id}>
                  {elem.username}
                </option>
              ))}
            </Field>
          </div>
          <div>
            <p>{t("newrole")}</p>
            <ErrorMessage
              name="role"
              component="div"
              className="text-red-700"
            />
            <Field
              as="select"
              name="role"
              className="p-1 text-black w-full border-1 border-indigo-500 rounded"
            >
              <option className="text-black" value={0}>
                {t("user")}
              </option>
              <option className="text-black" value={1}>
                {t("Admin")}
              </option>
            </Field>
          </div>
          <button
            type="submit"
            className="text-white py-2 px-6 rounded-lg mt-3 w-full"
          >
            {t("updateData")}
          </button>
        </Form>
      </Formik>
    </div>
  );
}
