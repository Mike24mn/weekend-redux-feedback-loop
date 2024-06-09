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
