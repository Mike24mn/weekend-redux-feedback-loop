import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory, HashRouter as router, Link } from "react-router-dom";

function ReviewPage() {
  const [newReview, setReview] = useState(""); // maybe need store here

  // Import all of the above states from the store, make sure they are being send there properly
  // with reducers, dispatch/actions, etc. then useSelector them
  // here before putting into literals ${} below

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/feedback", payload)

      .then((response) => {
        dispatch({
          type: "ADD_FEEDBACK", // Very well may be wrong set up here
          payload: payload,
        });
        setReview("");
      })
      .catch((error) => {
        console.error("failed in axios POST JSX", error);
      });
  };

  return (
    <div>
      <h1>Review Your Feedback</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>Feelings:</div>
          <div>Understanding:</div>
          <div>Support:</div>
          <div>Comments:</div>
        </div>
        <Link to="/SuccessPage">
          <button type="submit">Submit</button>
        </Link>
      </form>
    </div>
  );
}

export default ReviewPage;
