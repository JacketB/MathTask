import axios from "axios";
import { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { useHistory } from "react-router";
export default function Panel() {
  let history = useHistory();
  const [listOfUsers, setListOfUsers] = useState([]);
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      history.push("/login");
    }
    axios.get("https://mathtask.herokuapp.com/list").then((response) => {
      setListOfUsers(response.data.listOfUsers);
    });
  }, []);
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      history.push(`/profile/${row.id}`);
    },
  };
  let columns = [
    { dataField: "id", text: "Id" },
    { dataField: "email", text: "Email" },
    { dataField: "username", text: "Username" },
  ];
  return (
    <div>
      <BootstrapTable
        keyField="id"
        data={listOfUsers}
        columns={columns}
        rowEvents={rowEvents}
      />
    </div>
  );
}
