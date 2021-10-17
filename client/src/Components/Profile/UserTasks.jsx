import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import { columnsForHomeTables, URL } from "../Consts";
export default function UserTasks(props) {
  const { t } = useTranslation();
  let history = useHistory();
  const [listOfTasks, setListOfTasks] = useState([]);
  useEffect(() => {
    axios.get(`${URL}/tasks/byuserId/${props.userid}`).then((response) => {
      setListOfTasks(response.data);
    });
  }, []);
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
        columns={columnsForHomeTables}
        rowEvents={rowEvents}
      />
    </div>
  );
}
