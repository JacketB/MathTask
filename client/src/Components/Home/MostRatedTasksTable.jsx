import BootstrapTable from "react-bootstrap-table-next";
import { useHistory } from "react-router";
import { URL } from "../DatabaseQueries/Querie";
import { useState, useEffect } from "react";

import axios from "axios";
export default function MostRatedTasksTable() {
  const [listOfTasks, setListOfTasks] = useState([]);
  function byField(field) {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
  }
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
      setListOfTasks(
        response.data.listOfTasks.sort(byField("average")).reverse()
      );
    });
  }, []);
  return (
    <div className="p-8">
      <h2 className="mb-3">Самые оцененные задачи</h2>
      <BootstrapTable
        keyField="id"
        data={listOfTasks.slice(-5)}
        columns={columns}
        rowEvents={rowEvents}
      />
    </div>
  );
}
