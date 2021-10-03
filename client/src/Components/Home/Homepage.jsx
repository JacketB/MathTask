import Navbar from "../Navigation/Navbar";
import "../style.css";
import Task from "./Task";
import Tags from "./Tags";
import { AuthContext } from "../AuthContext";
const Homepage = () => {
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
