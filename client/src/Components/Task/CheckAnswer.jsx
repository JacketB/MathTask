import toast from "react-hot-toast";
import { useContext, useState } from "react";
import axios from "axios";
import { URL } from "../Consts";
import { useTranslation } from "react-i18next";
import { SolvedContext } from "../Context/SolvedTasksContext";
export default function CheckAnswer(props) {
  const { t } = useTranslation();
  const { setSolvedState } = useContext(SolvedContext);
  const [answer, setAnswer] = useState();
  const check = () => {
    if (
      answer === props.answer1 ||
      answer === props.answer2 ||
      answer === props.answer3
    ) {
      toast.success(t("answerOK"));
      addSolve(answer);
    } else {
      toast.error(t("answerError"));
    }
  };
  const addSolve = (answer) => {
    axios
      .post(`${URL}/solved/byId/${props.id}`, answer, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        axios
          .get(`${URL}/solved/byUserId`, {
            headers: { accessToken: localStorage.getItem("accessToken") },
          })
          .then((response) => {
            setSolvedState(response.data);
          });
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
        {t("checktask")}
      </button>
    </div>
  );
}
