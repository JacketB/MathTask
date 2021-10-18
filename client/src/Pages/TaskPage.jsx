import Navbar from "../Components/Navigation/Navbar";
import "../Components/style.css";
import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import Rate from "../Components/Task/Rate";
import CheckAnswer from "../Components/Task/CheckAnswer";
import AverageRating from "../Components/Task/AverageRating";
import Images from "../Components/Task/Images";
import { URL } from "../Components/Consts";
import EditButton from "../Components/Task/EditButton";
export default function Task() {
  const { t } = useTranslation();
  const [comments, setComments] = useState([]);
  const [postObject, setPostObject] = useState({});
  const [newComment, setNewComment] = useState("");
  const [ratings, setRatings] = useState([]);
  const addComment = () => {
    axios
      .post(
        `${URL}/comments`,
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
    axios.get(`${URL}/tasks/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });
    axios.get(`${URL}/comments/${id}`).then((response) => {
      setComments(response.data);
    });
    axios.get(`${URL}/rate/${id}`).then((response) => {
      setRatings(response.data);
    });
  }, []);

  let { id } = useParams();

  return (
    <div className="content pb-3">
      <Navbar />
      <div className="pt-1 px-2">
        <span className="text-3xl">{postObject.title}</span>
        <div className="mt-2">
          <ReactMarkdown className="rounded w-2/3 p-2 mb-2">
            {postObject.taskCondition}
          </ReactMarkdown>
          <Images
            img1={postObject.image1}
            img2={postObject.image2}
            img3={postObject.image3}
          />
          <AverageRating ratings={postObject.average} />
          {!localStorage.getItem("accessToken") ? (
            <h4>{t("taskpage.login")}</h4>
          ) : (
            <>
              <CheckAnswer
                id={postObject.id}
                answer1={postObject.answer1}
                answer2={postObject.answer2}
                answer3={postObject.answer3}
              />
              <div className="mb-3">
                <span>{t("taskpage.rate")}</span>
              </div>
              <Rate ratings={ratings} />
            </>
          )}
          <span className="text-sm">
            Created <p>{postObject.createdAt}</p>
            {t("author")} : {postObject.username}
          </span>

          {!localStorage.getItem("accessToken") ? (
            <></>
          ) : localStorage.getItem("username") == postObject.username ? (
            <EditButton id="65" />
          ) : localStorage.getItem("role") != 0 ? (
            <EditButton id="65" />
          ) : (
            <></>
          )}
          <hr className="my-3" />
          {!localStorage.getItem("accessToken") ? (
            <></>
          ) : (
            <div>
              <div className="flex items-start">
                <textarea
                  cols="200"
                  rows="5"
                  className="text-black min-h-full rounded w-full"
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
                  {t("taskpage.addcom")}
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
    </div>
  );
}
