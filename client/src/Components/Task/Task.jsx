import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GetAllTasks } from "../DatabaseQueries/Querie";

export default function Task() {
  const { t, i18n } = useTranslation();
  const [Search, setSearch] = useState("");
  const [listOfTasks, setListOfTasks] = useState([]);
  let history = useHistory();
  useEffect(() => {
    setListOfTasks(GetAllTasks());
  }, []);

  return (
    <div>
      <div className="bg-gray-500 w-1/4 mx-auto my-3 rounded ">
        <div className="bg-gray-600 rounded-b flex justify-center">
          <button className="p-1 m-1.5 bg-gray-700 rounded">
            очистить фильтр
          </button>
        </div>
      </div>
      <div className="flex justify-center ">
        <input
          className="w-1/2 border h-5 px-3 py-3 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
          placeholder={t("search")}
          type="text"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>

      {listOfTasks
        .filter((value) => {
          if (Search == "") return value;
          else if (
            value.taskCondition.toLowerCase().includes(Search.toLowerCase()) ||
            value.title.toLowerCase().includes(Search.toLowerCase())
          ) {
            return value;
          }
        })
        .map((value) => {
          return (
            <div
              className="task p-2 border-2 border-gray-500 rounded m-3"
              onClick={() => {
                history.push(`/task/${value.id}`);
              }}
            >
              <div className=""> {value.title} </div>
              <div className="">{value.taskTopic}</div>
              <div className="">{value.username}</div>
            </div>
          );
        })}
    </div>
  );
}
