import { createSlice } from "@reduxjs/toolkit";

export const Answers = createSlice({
  name: "answers",
  initialState: {
    trueAnswers: 0,
    falseAnswers: 0,
  },
  reducers: {
    incrementTrue: (state) => {
      state.trueAnswers += 1;
    },
    incrementFalse: (state) => {
      state.falseAnswers += 1;
    },
  },
});

export const { incrementFalse, incrementTrue } = Answers.actions;

export default Answers.reducer;
