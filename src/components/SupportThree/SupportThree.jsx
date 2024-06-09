import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory, HashRouter as router, Link } from "react-router-dom";

function SupportThree() {

  const [newSupport, setSupport] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/feedback", payload)

      .then((response) => {
        dispatch({
          type: "ADD_FEEDBACK", // Very well may wrong set up here
          payload: payload,
        });
        setSupport("");
      })
      .catch((error) => {
        console.error("failed in axios POST JSX", error);
      });
  };

  return (
    <div>
      <h1>How well are you being supported?</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Support Level"
          value={newSupport}
          onChange={(event) => setSupport(event.target.value)}
        />
      </form>
      <Link to="/CommentsFour">
        <button>Next</button>
      </Link>
    </div>
  );
}

export default SupportThree