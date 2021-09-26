import Navbar from "../Navigation/Navbar";
import "../style.css";
import { useTranslation } from "react-i18next";
import Task from "./Task";

const Homepage = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="content border-2 border-gray-500">
      <Navbar />
      <div>
        <Task />
      </div>
    </div>
  );
};
export default Homepage;
