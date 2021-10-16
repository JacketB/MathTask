import BootstrapTable from "react-bootstrap-table-next";
import { useHistory } from "react-router";
import { URL } from "../DatabaseQueries/Querie";
import { useState, useEffect } from "react";

import axios from "axios";
export default function LastTasksTable() {
  const [listOfTasks, setListOfTasks] = useState([]);
  let history = useHistory();
  var columns = [
    { dataField: "title", text: "Задание", sort: true },
    { dataField: "taskTopic" },
    { dataField: "username" },
    { dataField: "average", text: "Рейтинг" },
  ];
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      history.push(`/task/${row.id}`);
    },
  };

  useEffect(() => {
    axios.get(`${URL}/tasks`).then((response) => {
      setListOfTasks(response.data.listOfTasks);
    });
  }, []);
  return (
    <div className="p-8">
      <h2 className="mb-3">Последние задачи</h2>
      <BootstrapTable
        keyField="id"
        data={listOfTasks.slice(-5)}
        columns={columns}
        rowEvents={rowEvents}
        className="table"
      />
    </div>
  );
}
