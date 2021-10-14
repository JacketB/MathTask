import BootstrapTable from "react-bootstrap-table-next";
import { useHistory } from "react-router";
import { GetAllTasks } from "../DatabaseQueries/Querie";
export default function LastTasksTable() {
  let history = useHistory();
  var columns = [
    { dataField: "title", text: "Title" },
    { dataField: "taskTopic", text: "taskTopic" },
    { dataField: "username", text: "Author" },
  ];
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      history.push(`/task/${row.id}`);
    },
  };
  return (
    <div className="p-8">
      <h2 className="mb-3">Последние задачи</h2>
      <BootstrapTable
        keyField="id"
        data={GetAllTasks().slice(-5)}
        columns={columns}
        rowEvents={rowEvents}
      />
    </div>
  );
}
