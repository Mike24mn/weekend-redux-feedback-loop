import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, HashRouter as router, Link } from "react-router-dom";

function CommentsFour() {
  const [newComment, setComment] = useState("");

  const dispatch = useDispatch();

  const currentFeedback = useSelector(
    (state) => state.feedbackReductionYo.currentFeedback
  );

  const handleSubmit = async (event) => {
    dispatch({ type: "SET_COMMENTS", payload: newComment });


  };

  return (
    <div>
      <h1>Any comments you want to leave?</h1>
      <form>
        <input data-testid="input"
          type="text"
          placeholder="Comments"
          value={newComment}
          onChange={(event) => setComment(event.target.value)}
        />
      </form>
      <Link to="/ReviewPage">
        <button data-testid="next" onClick={handleSubmit}>Next</button>
      </Link>
    </div>
  );
}

export default CommentsFour;
