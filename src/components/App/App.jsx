import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { React, useEffect, useState } from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";

import "./App.css";
import FeelingsOne from "../FeelingsOne/FeelingsOne";
import UnderstandingTwo from "../UnderstandingTwo/UnderstandingTwo";
import SupportThree from "../SupportThree/SupportThree";
import CommentsFour from "../CommentsFour/CommentsFour";
import ReviewPage from "../ReviewPage/ReviewPage";
import SuccessPage from "../SuccessPage/SuccessPage";
import store from "../../store";

function App() {

  const mySelector = useSelector(store => store.feedbackReductionYo)

  const dispatch = useDispatch()

  const setFeelings = (feelings) => ({
    type: "SET_FEELINGS",
    payload: feelings,
  })

  const setUnderstanding = (understanding) => ({
    type: "SET_UNDERSTANDING",
    payload: understanding,
  })

  const setSupport = (support) => ({
    type: "SET_SUPPORT",
    payload: support,
  })

  const setComments = (comments) => ({
    type: "SET_COMMENTS",
    payload: comments,
  })

  const addFeedback = () => ({
    type: "ADD_FEEDBACK",
  })

  const getFeedback = (feedbackList) => ({
    type:"GET_FEEDBACK",
    payload: feedbackList,
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path="/">
          <FeelingsOne />
        </Route>
        <Route exact path="/UnderstandingTwo">
          <UnderstandingTwo />
        </Route>
        <Route exact path="/SupportThree">
          <SupportThree />
        </Route>
        <Route exact path="/CommentsFour">
          <CommentsFour />
        </Route>
        <Route exact path="/ReviewPage">
          <ReviewPage />
        </Route>
        <Route exact path="/SuccessPage">
          <SuccessPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
