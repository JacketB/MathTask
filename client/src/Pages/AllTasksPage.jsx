import Navbar from "../Components/Navigation/Navbar";
import Task from "../Components/Task/Task";

export default function AllTasks() {
  return (
    <div className="content pb-5">
      <Navbar />
      <Task />
    </div>
  );
}
