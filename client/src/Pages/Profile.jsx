import "../Components/style.css";
import { useHistory, useParams } from "react-router";
import Navbar from "../Components/Navigation/Navbar";
import { useTranslation } from "react-i18next";
import UserTasks from "../Components/Profile/UserTasks";
import SolvedUserTasks from "../Components/Profile/SolvedUserTasks";
import { useEffect } from "react";
import { URL } from "../Components/Consts";
import axios from "axios";
import { useContext } from "react";
import { SolvedContext } from "../Components/Context/SolvedTasksContext";
const Profile = () => {
  const { setSolvedState } = useContext(SolvedContext);
  useEffect(() => {
    axios
      .get(`${URL}/solved/byUserId`, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        setSolvedState(response.data);
      });
  }, []);
  let history = useHistory();
  const { t } = useTranslation();
  let { id } = useParams();
  return (
    <div className="content">
      <Navbar />
      <div></div>
      <div className="m-3">
        <div className="comp">
          <div>
            <UserTasks userid={id} />
          </div>
          <div>
            <SolvedUserTasks />
          </div>
        </div>
        <div>
          {id != localStorage.getItem("userId") ? (
            <></>
          ) : (
            <button
              className="text-white mx-2 mb-10 p-2 px-6 rounded-lg"
              onClick={() => history.push("/add")}
            >
              {t("profile.newtask")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Profile;
