import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory, HashRouter as router, Link } from "react-router-dom";

function FeelingsOne() {
  const [newFeeling, setFeeling] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/feedback", payload)

      .then((response) => {
        dispatch({
          type: "ADD_FEEDBACK", // Very well may wrong set up here
          payload: payload,
        });
        setFeeling("");
      })
      .catch((error) => {
        console.error("failed in axios POST JSX", error);
      });
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
        <button>Next</button>
      </Link>
    </div>
  );
}

export default FeelingsOne;
