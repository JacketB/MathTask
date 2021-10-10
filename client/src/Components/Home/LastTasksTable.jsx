import BootstrapTable from "react-bootstrap-table-next";
import { GetAllTasks } from "../DatabaseQueries/Querie";
export default function LastTasksTable() {
  var columns = [
    { dataField: "id", text: "id" },
    { dataField: "title", text: "Title" },
    { dataField: "taskTopic", text: "taskTopic" },
    { dataField: "username", text: "Author" },
  ];
  return (
    <div className="p-8">
      <BootstrapTable
        keyField="id"
        data={GetAllTasks().slice(-5)}
        columns={columns}
      />
    </div>
  );
}
