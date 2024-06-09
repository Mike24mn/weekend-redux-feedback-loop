import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";

// initial state object that consists of an array, feedbackList,
// and an object currentFeedback

const initialState = {
  feedbackList: [],
  currentFeedback: {
    feelings: "",
    understanding: "",
    support: "",
    comments: "",
  },
};

const feedbackReductionYo = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FEELINGS":
      return {
        ...state,
        currentFeedback: { ...state.currentFeedback, feelings: action.payload },
      };
    case "SET_UNDERSTANDING":
      return {
        ...state,
        currentFeedback: {
          ...state.currentFeedback,
          understanding: action.payload,
        },
      };
    case "SET_SUPPORT":
      return {
        ...state,
        currentFeedback: { ...state.currentFeedback, support: action.payload },
      };
    case "SET_COMMENTS":
      return {
        ...state,
        currentFeedback: { ...state.currentFeedback, comments: action.payload },
      };

      // spread current state values into a new object,
      // then create new feedbackList (if one does not exist, 
      // if it does spread new values into this array list for
      // every consecutive submission. The values that will be 
      // spread will be the most recent currentFeedback
      // submissions!!!

      // also, after submission, reset out values of currentFeedback
      // to empty strings!!!
      
    case "ADD_FEEDBACK":
      return {
        ...state,
        feedbackList: [...state.feedbackList, state.currentFeedback],
        currentFeedback: {
          feelings: "",
          understanding: "",
          support: "",
          comments: "",
        },
      };
    case "GET_FEEDBACK":
      return {
        ...state,
        feedbackList: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    feedbackReductionYo,
  }),
  applyMiddleware(logger)
);

export default store;
