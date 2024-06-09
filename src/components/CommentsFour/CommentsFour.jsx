import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, HashRouter as router, Link } from "react-router-dom";

function CommentsFour() {

    const [newComment, setComment] = useState("");
  
  
    const dispatch = useDispatch();
  
    const currentFeedback = useSelector(
      (state) => state.feedbackReductionYo.currentFeedback
    );
  
    const handleSubmit = async (event) => {
  
      
  

  
  
      dispatch({ type: "SET_COMMENTS", payload: newComment });
  
      try {
        await axios.post("/api/feedback", currentFeedback);
  
        const feedbackResponse = await axios.get("/api/feedback");
  
        dispatch({
          type: "GET_FEEDBACK",
          payload: feedbackResponse.data,
        });
        setComment("");
        //history.push("/UnderstandingTwo");
      } catch (error) {
        console.error("failed in axios POST JSX", error);
      }
    };


  return (
    <div>
      <h1>Any comments you want to leave?</h1>
      <form>
        <input
          type="text"
          placeholder="Comments"
          value={newComment}
          onChange={(event) => setComment(event.target.value)}
        />
      </form>
      <Link to="/ReviewPage">
        <button onClick={handleSubmit}>Next</button>
      </Link>
    </div>
  );
}

export default CommentsFour