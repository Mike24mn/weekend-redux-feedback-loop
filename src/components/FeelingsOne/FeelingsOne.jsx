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
  }
   

  return (
    <div>
      <h1>How are you feeling today?</h1>
      <form>
        <input data-testid="input"
          type="text"
          placeholder="Feeling"
          value={newFeeling}
          onChange={(event) => setFeeling(event.target.value)}
        />
      </form>

      <Link to="/UnderstandingTwo">
        <button data-testid="next" onClick={handleSubmit}>Next</button>
      </Link>
    </div>
  );
}

export default FeelingsOne;
