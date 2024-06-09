import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory, HashRouter as router, Link } from "react-router-dom";

function CommentsFour() {

  const [newComment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/feedback", payload)

      .then((response) => {
        dispatch({
          type: "ADD_FEEDBACK", // Very well may wrong set up here
          payload: payload,
        });
        setComment("");
      })
      .catch((error) => {
        console.error("failed in axios POST JSX", error);
      });
  };

  return (
    <div>
      <h1>Any comments you want to leave?</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Comments"
          value={newComment}
          onChange={(event) => setComment(event.target.value)}
        />
      </form>
      <Link to="/ReviewPage">
        <button>Next</button>
      </Link>
    </div>
  );
}

export default CommentsFour