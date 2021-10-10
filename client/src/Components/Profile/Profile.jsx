import "../style.css";
import { useParams } from "react-router";
import Navbar from "../Navigation/Navbar";
import AddTask from "./AddTask";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useEffect, useState } from "react";
import UserTasks from "./UserTasks";
const Profile = () => {
  const { t, i18n } = useTranslation();
  const [username, setUsername] = useState("");
  let { id } = useParams();
  return (
    <div className="content border-2 border-gray-500">
      <Navbar />
      <div></div>
      <div className="m-3">
        <div className="comp">
          <div>
            <h2 className="text-3xl">{t("profile.urtask")}</h2>
            <UserTasks userid={id} />
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
