import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "../style.css";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import Navbar from "../Navigation/Navbar";
import AddTask from "./AddTask";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="content border-2 border-gray-500">
      <Navbar />
      <div className="m-3">
        <div className="comp">
          <div>
            <h1 className="text-4xl">{localStorage.getItem("username")}</h1>
          </div>
          <div>
            <h2 className="text-3xl">{t("profile.urtask")}</h2>
          </div>
          <h2 className="text-3xl">{t("profile.newtask")}</h2>
        </div>
        <div>
          <AddTask />
        </div>
      </div>
    </div>
  );
};
export default Profile;
