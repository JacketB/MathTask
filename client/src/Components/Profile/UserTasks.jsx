import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import { URL } from "../DatabaseQueries/Querie";
export default function UserTasks(props) {
  const { t, i18n } = useTranslation();
  let history = useHistory();
  const [listOfTasks, setListOfTasks] = useState([]);
  useEffect(() => {
    axios.get(`${URL}/tasks/byuserId/${props.userid}`).then((response) => {
      setListOfTasks(response.data);
    });
  }, []);
  var columns = [
    { dataField: "title", text: "Задание" },
    { dataField: "taskTopic" },
    { dataField: "average" },
  ];
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      history.push(`/task/${row.id}`);
    },
  };
  return (
    <div>
      <h3 className="mb-2">{t("profile.urtask")}</h3>
      <BootstrapTable
        keyField="id"
        data={listOfTasks}
        columns={columns}
        rowEvents={rowEvents}
      />
    </div>
  );
}
