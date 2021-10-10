import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
export default function UserTasks(props) {
  let history = useHistory();
  const [listOfTasks, setListOfTasks] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/tasks/byuserId/${props.userid}`)
      .then((response) => {
        setListOfTasks(response.data);
      });
  }, []);
  var columns = [
    { dataField: "id", text: "Id" },
    { dataField: "title", text: "Title" },
    { dataField: "taskTopic", text: "taskTopic" },
  ];
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      history.push(`/task/${row.id}`);
    },
  };
  return (
    <div>
      tasks
      <BootstrapTable
        keyField="id"
        data={listOfTasks}
        columns={columns}
        rowEvents={rowEvents}
      />
    </div>
  );
}
