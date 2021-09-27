import Navbar from "../Navigation/Navbar";
import "../style.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Task = () => {
  const [postObject, setPostObject] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:3001/tasks/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });
  });
  let { id } = useParams();

  return (
    <div className="content">
      <Navbar />
      <div>
        <span className="text-3xl">{postObject.title}</span>
        <div>
          <span className="text-2xl">Condition</span>
          <div className="border-black border-2 rounded w-1/4 ">
            {postObject.taskCondition}
          </div>
          <span> Author : {postObject.taskAuthor}</span>
        </div>
      </div>
    </div>
  );
};
export default Task;
