import axios from "axios";

let images = [];
export const AddNewImage = (image) => {
  images.push(image);
};
export const GetImages = () => {
  return images;
};

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
