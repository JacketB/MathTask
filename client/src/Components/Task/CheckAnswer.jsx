import { Form, Formik, Field, ErrorMessage } from "formik";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
export default function CheckAnswer(props) {
  const id = localStorage.getItem("userId");
  const [answer, setAnswer] = useState();
  const check = () => {
    if (
      answer == props.answer1 ||
      answer == props.answer2 ||
      answer == props.answer3
    ) {
      alert("Верный ответ!");
      addTask(answer);
    } else {
      alert("Попробуйте снова!" + props.answer1);
    }
  };
  const addTask = (answer) => {
    axios
      .post(`http://localhost:3001/solved/byId/${id}`, answer, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then(() => {});
  };
  return (
    <div>
      <input
        type="text"
        id="answer"
        onChange={(event) => setAnswer(event.target.value)}
      />
      <button onClick={check} className="text-white py-2 px-6 rounded-lg">
        Check task
      </button>
    </div>
  );
}
