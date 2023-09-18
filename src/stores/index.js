import { configureStore } from "@reduxjs/toolkit";
import Answers from "./answerStore.js";
export default configureStore({
  reducer: {
    answers: Answers,
  },
});
