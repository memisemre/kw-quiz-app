import React from "react";
import QUESTIONS from "./utils/questions.json";
import { useSelector } from 'react-redux';
import Buttons from "./incrementButtons.jsx";
import LoadingAnimation from "./components/loadingAnimation";
import QuestionCard from "./components/QuestionCard";
function App() {
  const trueAnswers = useSelector(state => state.answers.trueAnswers);
  const falseAnswers = useSelector(state=> state.answers.falseAnswers)
  return (

    <div>
      <p>True Answers : {trueAnswers}</p>
      <p>False Answers : {falseAnswers}</p>
    {QUESTIONS.map((question) => (
      <QuestionCard question={question} />
    ))}
  </div>
  )
}

export default App;
