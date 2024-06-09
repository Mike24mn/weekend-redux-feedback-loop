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

    try {
      await axios.post("/api/feedback", currentFeedback);

      const feedbackResponse = await axios.get("/api/feedback");

      dispatch({
        type: "GET_FEEDBACK",
        payload: feedbackResponse.data,
      });
      setUnderstanding("");
      //history.push("/UnderstandingTwo");
    } catch (error) {
      console.error("failed in axios POST JSX", error);
    }
  };

  return (
    <div>
      <h1>How well are you understanding the content?</h1>
      <form>
        <input
          type="text"
          placeholder="Understanding"
          value={newUnderstanding}
          onChange={(event) => setUnderstanding(event.target.value)}
        />
      </form>
      <Link to="/SupportThree">
        <button onClick={handleSubmit}>Next</button>
      </Link>
    </div>
  );
}

export default UnderstandingTwo;
