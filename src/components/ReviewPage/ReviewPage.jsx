import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, HashRouter as router, Link } from "react-router-dom";

function ReviewPage() {

  const [newReview, setReview] = useState(""); // maybe need store here

  // Import all of the above states from the store, make sure they are being send there properly
  // with reducers, dispatch/actions, etc. then useSelector them
  // here before putting into literals ${} below

    const dispatch = useDispatch();
    
    const currentFeedback = useSelector(
      (state) => state.feedbackReductionYo.currentFeedback
    );

    // Destructure our redux state stored values 
    // feelings, understanding, support and comments,
    // then assign them to currentFeedback!!!
    // REMINDER: Access these using literals or dot notation 
    // in our return below

    const { feelings, understanding, support, comments } = currentFeedback

    console.log("current feedback is", currentFeedback);
  
    const handleSubmit = async (event) => {
  
    
  
  
      dispatch({ type: "ADD_FEEDBACK", payload: newReview });
  
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
      <h1>Review Your Feedback</h1>
      <form>
        <div>
          <div>Feelings: {currentFeedback.feelings}</div>
          <div>Understanding: {currentFeedback.understanding}</div>
          <div>Support: {currentFeedback.support}</div>
          <div>Comments: {currentFeedback.comments}</div>
        </div>
        <Link to="/SuccessPage">
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </Link>
      </form>
    </div>
  );
}

export default ReviewPage;
