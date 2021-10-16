import toast from "react-hot-toast";
import { useState } from "react";
import axios from "axios";
import { URL } from "../DatabaseQueries/Querie";
export default function CheckAnswer(props) {
  const id = localStorage.getItem("userId");
  const [answer, setAnswer] = useState();
  const check = () => {
    if (
      answer == props.answer1 ||
      answer == props.answer2 ||
      answer == props.answer3
    ) {
      toast.success("Решено");
      addSolve(answer);
    } else {
      toast.error("Попробуйте снова!");
    }
  };
  const addSolve = (answer) => {
    axios.post(`${URL}/solved/byId/${id}`, answer, {
      headers: { accessToken: localStorage.getItem("accessToken") },
    });
  };
  return (
    <div>
      <textarea
        className="p-2 rounded w-2/5 h-2/5 mt-2 text-black"
        type="text"
        id="answer"
        onChange={(event) => setAnswer(event.target.value)}
      />
      <br />
      <button onClick={check} className="text-white py-2 px-6 rounded-lg mt-2">
        Check task
      </button>
    </div>
  );
}
