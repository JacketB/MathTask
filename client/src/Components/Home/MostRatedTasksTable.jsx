import BootstrapTable from "react-bootstrap-table-next";
import { useHistory } from "react-router";
import { useContext } from "react";
import { TasksContext } from "../Context/TasksContext";
import { columnsForHomeTables } from "../Consts";
import { useTranslation } from "react-i18next";
export default function MostRatedTasksTable() {
  const { t } = useTranslation();
  const { tasksState } = useContext(TasksContext);
  function byField(field) {
    return (a, b) => (a[field] > b[field] ? 1 : -1);
  }
  let history = useHistory();
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      history.push(`/task/${row.id}`);
    },
  };
  return (
    <div className="p-8">
      <h2 className="mb-3">{t("mostrated")}</h2>
      <BootstrapTable
        keyField="id"
        data={tasksState.sort(byField("average")).reverse().slice(-5)}
        columns={columnsForHomeTables}
        rowEvents={rowEvents}
      />
    </div>
  );
}
