import axios from "axios";
import { useHistory } from "react-router-dom";

let allTasks = [];
let images = [];
export const AddNewImage = (image) => {
  images.push(image);
};
export const GetImages = () => {
  console.log(images);
  return images;
};
axios.get("http://localhost:3001/tasks").then((response) => {
  allTasks = response.data.listOfTasks;
});
export const GetAllTasks = () => {
  return allTasks;
};

export const MostRatedTasks = () => {
  let tasks = GetAllTasks();
  let ratings = 0;
  let grades = {};
  tasks.forEach((elem) => {
    axios.get(`http://localhost:3001/rate/${elem.id}`).then((response) => {
      grades.push(response.data);
    });
    console.log(grades);
  });
};
export const NewRate = (rate) => {
  axios
    .post("http://localhost/3001/ratings", rate, {
      headers: { accessToken: localStorage.getItem("accessToken") },
    })
    .then(() => {
      alert("оценка сохранена");
    });
};
export const Average = (ratings) => {
  let grade = 0;
  ratings.forEach((elem) => {
    grade += elem.taskGrade;
  });
  return grade / ratings.length;
};
