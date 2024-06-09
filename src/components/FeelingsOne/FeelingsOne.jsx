import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, HashRouter as router, Link } from "react-router-dom";

function FeelingsOne() {
  const [newFeeling, setFeeling] = useState("");
  const [newUnderstanding, setUnderstanding] = useState("");
  const [newSupport, setSupport] = useState("");
  const [newComment, setComment] = useState("");

  const dispatch = useDispatch();

  const currentFeedback = useSelector(
    (state) => state.feedbackReductionYo.currentFeedback
  );

  const handleSubmit = async (event) => {
    dispatch({ type: "SET_FEELINGS", payload: newFeeling });

    try {
      await axios.post("/api/feedback", currentFeedback);

      const feedbackResponse = await axios.get("/api/feedback");

      dispatch({
        type: "GET_FEEDBACK",
        payload: feedbackResponse.data,
      });
      setFeeling("");
      //history.push("/UnderstandingTwo");
    } catch (error) {
      console.error("failed in axios POST JSX", error);
    }
  };

  return (
    <div>
      <h1>How are you feeling today?</h1>
      <form>
        <input
          type="text"
          placeholder="Feeling"
          value={newFeeling}
          onChange={(event) => setFeeling(event.target.value)}
        />
      </form>

      <Link to="/UnderstandingTwo">
        <button onClick={handleSubmit}>Next</button>
      </Link>
    </div>
  );
}

export default FeelingsOne;
