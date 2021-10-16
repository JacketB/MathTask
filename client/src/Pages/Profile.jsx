import "../Components/style.css";
import { useHistory, useParams } from "react-router";
import Navbar from "../Components/Navigation/Navbar";
import { useTranslation } from "react-i18next";
import UserTasks from "../Components/Profile/UserTasks";
import SolvedUserTasks from "../Components/Profile/SolvedUserTasks";
const Profile = () => {
  let history = useHistory();
  const { t, i18n } = useTranslation();
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
          <button onClick={() => history.push("/add")}>Добавить задачу</button>
        </div>
      </div>
    </div>
  );
};
export default Profile;
