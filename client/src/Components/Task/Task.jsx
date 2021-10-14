import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

import axios from "axios";
export default function Task() {
  const { t, i18n } = useTranslation();
  const [Search, setSearch] = useState("");
  const [listOfTasks, setListOfTasks] = useState([]);
  let history = useHistory();
  useEffect(() => {
    axios.get("http://localhost:3001/tasks").then((response) => {
      setListOfTasks(response.data.listOfTasks);
    });
  }, []);

  return (
    <div>
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