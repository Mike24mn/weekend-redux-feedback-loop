import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory, HashRouter as router, Link } from "react-router-dom";

function UnderstandingTwo() {

  const [newUnderstanding, setUnderstanding] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/feedback", payload)

      .then((response) => {
        dispatch({
          type: "ADD_FEEDBACK", // Very well may wrong set up here
          payload: payload,
        });
        setUnderstanding("");
      })
      .catch((error) => {
        console.error("failed in axios POST JSX", error);
      });
  };

  return (
    <div>
      <h1>How well are you understanding the content?</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Understanding"
          value={newUnderstanding}
          onChange={(event) => setUnderstanding(event.target.value)}
        />
      </form>
      <Link to="/SupportThree">
        <button>Next</button>
      </Link>
    </div>
  );
}

export default UnderstandingTwo;
