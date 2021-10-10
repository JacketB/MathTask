import { GetLastTasks } from "../DatabaseQueries/Querie";
import Navbar from "../Navigation/Navbar";
import "../style.css";
import LastTasksTable from "./LastTasksTable";
const Homepage = () => {
  return (
    <div className="content border-2 border-gray-500">
      <Navbar />
      <LastTasksTable />
    </div>
  );
};
export default Homepage;
