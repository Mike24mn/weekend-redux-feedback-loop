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

function App() {

  

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Link to="/FeelingsOne">
          <button>Next</button>
        </Link>
        <Route exact path="/FeelingsOne">
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
