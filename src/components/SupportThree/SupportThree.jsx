import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, HashRouter as router, Link } from "react-router-dom";

function SupportThree() {
  const [newSupport, setSupport] = useState("");
  const [newComment, setComment] = useState("");

  const dispatch = useDispatch();

  const currentFeedback = useSelector(
    (state) => state.feedbackReductionYo.currentFeedback
  );

  const handleSubmit = async (event) => {
    dispatch({ type: "SET_SUPPORT", payload: newSupport });


  };

  return (
    <div>
      <h1>How well are you being supported?</h1>
      <form>
        <input data-testid="input"
          type="text"
          placeholder="Support Level"
          value={newSupport}
          onChange={(event) => setSupport(event.target.value)}
        />
      </form>
      <Link to="/CommentsFour">
        <button data-testid="next" onClick={handleSubmit}>Next</button>
      </Link>
    </div>
  );
}

export default SupportThree;
