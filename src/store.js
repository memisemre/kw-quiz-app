import { configureStore } from "@reduxjs/toolkit";
import Answers from "./stores/answerStore.js";
export default configureStore({
  reducer: {
    answers: Answers,
  },
});
