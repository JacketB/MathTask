import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "../style.css";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

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
    <div>
      <div className="comp">
        <div>
          <h1>Имя</h1>
        </div>
        <div>
          <h2>Ваши задачи</h2>
          <BootstrapTable
            keyField="id"
            data={products}
            columns={collums}
            cellEdit={cellEditFactory({ mode: "click" })}
          />
        </div>
      </div>
    </div>
  );
};
export default Profile;
