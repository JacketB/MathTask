import axios from "axios";
import { useHistory } from "react-router-dom";

let allTasks = [];
let task = {};
axios.get("http://localhost:3001/tasks").then((response) => {
  allTasks = response.data.listOfTasks;
});
export const NewTask = (data) => {
  let history = useHistory();
  axios
    .post("http://localhost:3001/tasks", data, {
      headers: { accessToken: localStorage.getItem("accessToken") },
    })
    .then(() => {
      history.push("/");
    });
};
export const GetAllTasks = () => {
  return allTasks;
};
export const GetTask = (id) => {
  axios.get(`http://localhost:3001/tasks/byId/${id}`).then((response) => {
    task = response.data;
  });
  return task;
};
