import Navbar from "../Navigation/Navbar";
import "../style.css";
import { useTranslation } from "react-i18next";
import Task from "./Task";
import Tags from "./Tags";

const Homepage = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="content border-2 border-gray-500">
      <Navbar />
      <div>
        <Tags />
        <div id="task">
          <Task />
        </div>
      </div>
    </div>
  );
};
export default Homepage;
