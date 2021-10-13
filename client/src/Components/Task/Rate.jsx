import "./Rate.css";
import { useParams } from "react-router";
import { NewRate } from "../DatabaseQueries/Querie";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Rate() {
  const [grade, setGrade] = useState();
  let id = useParams();
  const check = () => {
    alert("ваша оценка - " + grade);
    SetGrade();
  };
  const SetGrade = () => {
    axios
      .post(`http://localhost:3001/rate/byId/${id.id}/grade/${grade}`, grade, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then(() => {
        alert("added");
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
        Оцениить
      </button>
    </div>
  );
}
