import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

const Comments = () => {
  let { id } = useParams();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, []);
  return (
    <div>
      <div>
        {comments.map((comment, key) => {
          return <div>{comment.commentBody}</div>;
        })}
      </div>
    </div>
  );
};
export default Comments;
