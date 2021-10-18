import BootstrapTable from "react-bootstrap-table-next";
import { useHistory } from "react-router";
import { UserColumns } from "../Components/Consts";
import { UsersContext } from "../Components/Context/UsersContext";
import Navbar from "../Components/Navigation/Navbar";
import { useContext } from "react";
import EditRole from "../Components/Admin/EditRole";
import DeleteUser from "../Components/Admin/DeleteUser";
export default function Panel() {
  let history = useHistory();
  const { usersState } = useContext(UsersContext);

  if (!localStorage.getItem("accessToken")) {
    history.push("/login");
  }
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      history.push(`/profile/${row.id}`);
    },
  };

  return (
    <div className="content pb-10">
      <Navbar />
      <div className="p-3">
        <BootstrapTable
          keyField="id"
          data={usersState}
          columns={UserColumns}
          rowEvents={rowEvents}
        />
      </div>
      <div className="grid grid-cols-2 grid-rows-1">
        <EditRole />
        <DeleteUser />
      </div>
    </div>
  );
}
