import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import { columnsForHomeTables } from "../Consts";
import { useContext } from "react";
import { TasksContext } from "../Context/TasksContext";
import { SolvedContext } from "../Context/SolvedTasksContext";
export default function UserTasks() {
  const { t } = useTranslation();
  let history = useHistory();
  const { tasksState } = useContext(TasksContext);
  const { solvedState } = useContext(SolvedContext);
  var tasks = [];
  for (let i = 0; i < solvedState.length; i++) {
    for (let j = 0; j < tasksState.length; j++) {
      if (solvedState[i].taskid === tasksState[j].id) tasks.push(tasksState[j]);
    }
  }

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      history.push(`/task/${row.id}`);
    },
  };
  return (
    <div>
      <h3 className="mb-2">{t("profile.solved")}</h3>
      <BootstrapTable
        keyField="id"
        data={tasks}
        columns={columnsForHomeTables}
        rowEvents={rowEvents}
      />
    </div>
  );
}
