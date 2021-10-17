import axios from "axios";
import { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { useHistory } from "react-router";
import { URL, UserColumns } from "../Components/Consts";
import Navbar from "../Components/Navigation/Navbar";
export default function Panel() {
  let history = useHistory();
  const [listOfUsers, setListOfUsers] = useState([]);

  if (!localStorage.getItem("accessToken")) {
    history.push("/login");
  }
  useEffect(() => {
    axios.get(`${URL}/list/list`).then((response) => {
      setListOfUsers(response.data.listOfUsers);
    });
  }, []);
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      history.push(`/profile/${row.id}`);
    },
  };

  return (
    <div className="content">
      <Navbar />
      <div className="p-3">
        <BootstrapTable
          keyField="id"
          data={listOfUsers}
          columns={UserColumns}
          rowEvents={rowEvents}
        />
      </div>
    </div>
  );
}
