import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
export default function Task() {
  const [listOfPosts, setListOfPosts] = useState([]);
  let history = useHistory();
  useEffect(() => {
    axios.get("http://localhost:3001/tasks").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);
  return (
    <div>
      {listOfPosts.map((value, key) => {
        return (
          <div
            className="p-2 border-2 border-gray-500 rounded m-3"
            onClick={() => {
              history.push(`/task/${value.id}`);
            }}
          >
            <div className=""> {value.title} </div>
            <div className="">{value.taskTopic}</div>
            <div className="">{value.taskCondition}</div>
            <div className="">{value.taskAuthor}</div>
          </div>
        );
      })}
    </div>
  );
}
