import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "../style.css";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import Header from "../Header/Header";
import Navbar from "../Navigation/Navbar";

const Profile = () => {
  const collums = [
    {
      datafield: "id",
      text: "id",
    },
    {
      datafield: "name",
      text: "название задачи",
    },
    {
      datafield: "raiting",
      text: "рейтинг задачи",
    },
  ];

  const products = [
    {
      id: 1,
      name: "aaa",
    },
  ];
  return (
    <div className ="m-3">
      <div className="comp">
        <div>
          <h1 className ="text-4xl">Имя</h1>
        </div>
        <div>
          <h2 className ="text-3xl">Ваши задачи</h2>
          <BootstrapTable
            keyField="id"
            data={products}
            columns={collums}
            cellEdit={cellEditFactory({ mode: "click" })}
          />
        </div>
        <h2 className ="text-3xl">Новая задача</h2>
      </div>
      <div>
          <button className="m-2 bg-indigo-500 text-white py-2 px-6 rounded-lg">Добавить задачу</button>
        </div>
    </div>
  );
};
export default Profile;
