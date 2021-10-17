import "./Rate.css";
import toast from "react-hot-toast";
import { useParams } from "react-router";
import { URL } from "../Consts";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { TasksContext } from "../Context/TasksContext";
import { useTranslation } from "react-i18next";

export default function Rate() {
  const { t } = useTranslation();
  const [grade, setGrade] = useState();
  const { setTasksState } = useContext(TasksContext);
  let id = useParams();
  const check = () => {
    toast.success("ваша оценка - " + grade);
    Setgrade();
  };
  const Setgrade = () => {
    axios
      .post(`${URL}/rate/byId/${id.id}/grade/${grade}`, grade, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then(() => {
        axios.get(`${URL}/rate/${id.id}`).then((response) => {
          let ratings = response.data;
          let average = 0;
          ratings.forEach((element) => {
            average += element.taskGrade;
          });
          average += grade;
          average = average / (ratings.length + 1).toFixed(1);
          axios
            .put(`${URL}/tasks/average/${id.id}/${average}`, {
              average: average,
            })
            .then(() => {
              axios.get(`${URL}/tasks`).then((response) => {
                window.location.reload();
                setTasksState(response.data.listOfTasks);
              });
            });
        });
      });
  };
  return (
    <div>
      <div class="star-rating">
        <input
          type="radio"
          id="5-stars"
          name="rating"
          value="5"
          onClick={() => setGrade(5)}
        />

        <label for="5-stars" class="star">
          &#9733;
        </label>

        <input
          onClick={() => setGrade(4)}
          type="radio"
          id="4-stars"
          name="rating"
          value="4"
        />

        <label for="4-stars" class="star">
          &#9733;
        </label>

        <input
          onClick={() => setGrade(3)}
          type="radio"
          id="3-stars"
          name="rating"
          value="3"
        />

        <label for="3-stars" class="star">
          &#9733;
        </label>

        <input
          onClick={() => setGrade(2)}
          type="radio"
          id="2-stars"
          name="rating"
          value="2"
        />
        <label for="2-stars" class="star">
          &#9733;
        </label>

        <input
          onClick={() => setGrade(1)}
          type="radio"
          id="1-star"
          name="rating"
          value="1"
        />

        <label for="1-star" class="star">
          &#9733;
        </label>
      </div>
      <button onClick={check} className="text-white py-2 px-6 rounded-lg">
        {t("rate")}
      </button>
    </div>
  );
}
