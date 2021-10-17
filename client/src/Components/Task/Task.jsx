import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { TasksContext } from "../Context/TasksContext";
export default function Task() {
  const { tasksState } = useContext(TasksContext);
  const { t } = useTranslation();
  const [Search, setSearch] = useState("");
  let history = useHistory();
  return (
    <div>
      <div className="flex justify-center ">
        <input
          className="w-1/2 border h-5 px-3 py-3 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md text-black"
          placeholder={t("search")}
          type="text"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>

      {tasksState
        .filter((value) => {
          if (Search === "") return value;
          else if (
            value.taskCondition.toLowerCase().includes(Search.toLowerCase()) ||
            value.title.toLowerCase().includes(Search.toLowerCase()) ||
            value.taskTopic.toLowerCase().includes(Search.toLowerCase())
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
