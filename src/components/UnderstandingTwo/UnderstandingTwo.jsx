import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, HashRouter as router, Link } from "react-router-dom";

function UnderstandingTwo() {
  const [newUnderstanding, setUnderstanding] = useState("");
  const [newSupport, setSupport] = useState("");
  const [newComment, setComment] = useState("");

  const dispatch = useDispatch();

  const currentFeedback = useSelector(
    (state) => state.feedbackReductionYo.currentFeedback
  );

  const handleSubmit = async (event) => {
    dispatch({ type: "SET_UNDERSTANDING", payload: newUnderstanding });


  };

  return (
    <div>
      <h1>How well are you understanding the content?</h1>
      <form>
        <input data-testid="input"
          type="text"
          placeholder="Understanding"
          value={newUnderstanding}
          onChange={(event) => setUnderstanding(event.target.value)}
        />
      </form>
      <Link to="/SupportThree">
        <button data-testid="next" onClick={handleSubmit}>Next</button>
      </Link>
    </div>
  );
}

export default UnderstandingTwo;
