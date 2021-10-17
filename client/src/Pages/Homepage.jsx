import Navbar from "../Components/Navigation/Navbar";
import "../Components/style.css";
import LastTasksTable from "../Components/Home/LastTasksTable";
import MostRatedTasksTable from "../Components/Home/MostRatedTasksTable";
const Homepage = () => {
  return (
    <div>
      <div className="content">
        <Navbar />
        <LastTasksTable />
        <MostRatedTasksTable />
      </div>
    </div>
  );
};
export default Homepage;
