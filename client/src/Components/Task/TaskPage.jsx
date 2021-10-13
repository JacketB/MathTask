import Navbar from "../Navigation/Navbar";
import "../style.css";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import Rate from "./Rate";
import CheckAnswer from "./CheckAnswer";
import AverageRating from "./AverageRating";
export default function Task() {
  const { t, i18n } = useTranslation();
  const [comments, setComments] = useState([]);
  const [postObject, setPostObject] = useState({});
  const [newComment, setNewComment] = useState("");
  const [ratings, setRatings] = useState([]);
  const addComment = () => {
    axios
      .post(
        "http://localhost:3001/comments",
        {
          commentBody: newComment,
          TaskId: id,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          const commentToAdd = {
            commentBody: newComment,
            username: response.data.username,
          };
          setComments([...comments, commentToAdd]);
          setNewComment("");
        }
      });
  };
  useEffect(() => {
    axios.get(`http://localhost:3001/tasks/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });
    axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
      setComments(response.data);
    });
    axios.get(`http://localhost:3001/rate/${id}`).then((response) => {
      setRatings(response.data);
    });
  }, []);
  let { id } = useParams();
  let history = useHistory();
  return (
    <div className="content border-2 border-gray-500 pb-3">
      <Navbar />
      <div className="pt-1 px-2">
        <span className="text-3xl">{postObject.title}</span>
        <div className="mt-2">
          <ReactMarkdown className="border-gray-500 border-2 rounded w-2/3 p-2 mb-2">
            {postObject.taskCondition}
          </ReactMarkdown>
          <AverageRating ratings={ratings} />
          <CheckAnswer
            answer1={postObject.answer1}
            answer2={postObject.answer2}
            answer3={postObject.answer3}
          />
          <span className="text-sm">
            Created <p>{postObject.createdAt}</p>
            {t("author")} : {postObject.username}
          </span>

          <div className="mb-3">
            <span>Оцените задачу:</span>
            <Rate />
          </div>
          {localStorage.getItem("userName") == postObject.username ? (
            <div>
              <button
                className="text-white py-2 px-6 rounded-lg"
                onClick={() => {
                  history.push(`/update/${id}`);
                }}
              >
                Редактировать
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
        <hr className="my-3" />
        {!localStorage.getItem("accessToken") ? (
          <></>
        ) : (
          <div>
            <div className="flex items-start">
              <textarea
                cols="200"
                rows="5"
                className="text-black min-h-full rounded"
                type="text"
                autoComplete="off"
                value={newComment}
                onChange={(event) => {
                  setNewComment(event.target.value);
                }}
              />
              <button
                id="btn"
                className="mx-2 p-2 rounded text-white"
                onClick={addComment}
              >
                Add Comment
              </button>
            </div>
          </div>
        )}

        <div className="">
          {comments.map((comment, key) => {
            return (
              <div className="p-2 bg-gray-700 my-2.5 w-5/6 rounded comment">
                <div className="underline font-bold">{comment.username}</div>
                {comment.commentBody}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
