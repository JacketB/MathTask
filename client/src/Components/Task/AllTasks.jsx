import Navbar from "../Navigation/Navbar";
import Task from "./Task";

export default function AllTasks() {
  return (
    <div className="content border-2 border-gray-500">
      <Navbar />
      <Task />
    </div>
  );
}
