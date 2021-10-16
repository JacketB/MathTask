import axios from "axios";
export const URL = "https://mathtask.herokuapp.com";

let allTasks = [];
let images = [];
export const AddNewImage = (image) => {
  images.push(image);
};
export const GetImages = () => {
  return images;
};
export function GetAllTasks() {
  const listOfTasks = axios.get(URL + "tasks");
  return listOfTasks;
}

export function MostRatedTasks() {
  let tasks = GetAllTasks();
  let ratings = 0;
  let grades = {};
  tasks.forEach((elem) => {
    axios.get(`${URL}/rate/${elem.id}`).then((response) => {
      grades.push(response.data);
    });
    console.log(grades);
  });
}
export const NewRate = (rate) => {
  axios
    .post(`${URL}/ratings`, rate, {
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
