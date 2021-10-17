import BootstrapTable from "react-bootstrap-table-next";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import { columnsForHomeTables } from "../Consts";
import { useContext } from "react";
import { TasksContext } from "../Context/TasksContext";
export default function LastTasksTable() {
  const { t } = useTranslation();
  const { tasksState } = useContext(TasksContext);
  let history = useHistory();
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      history.push(`/task/${row.id}`);
    },
  };
  return (
    <div className="p-8">
      <h2 className="mb-3">{t("lasttasks")}</h2>
      <BootstrapTable
        keyField="id"
        data={tasksState.slice(-5)}
        columns={columnsForHomeTables}
        rowEvents={rowEvents}
        className="table"
      />
    </div>
  );
}
