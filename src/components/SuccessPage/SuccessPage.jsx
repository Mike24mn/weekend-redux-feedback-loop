import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, HashRouter as router, Link } from "react-router-dom";

function SuccessPage() {
  const [newFeedback, setFeedback] = useState(""); // maybe need store here

  // Import all of the above states from the store, make sure they are being send there properly
  // with reducers, dispatch/actions, etc. then useSelector them
  // here before putting into literals ${} below

  const onClickClearFeedback = (event) => {
    event.preventDefault();

    axios
      .post("/api/feedback", payload)

      .then((response) => {
        dispatch({
          type: "ADD_FEEDBACK", // Very well may be wrong set up here
          payload: payload,
        });
        setFeedback("");
      })
      .catch((error) => {
        console.error("failed in axios POST JSX", error);
      });
  };

  return (
    <div>
      <h1>Feedback Submitted</h1>

      <h2>Thank You!!!</h2>

      <Link to="/">
        <button>Leave New Feedback</button>
      </Link>
    </div>
  );
}

export default SuccessPage;
