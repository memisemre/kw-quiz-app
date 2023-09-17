import React from "react";
import QUESTIONS from "./utils/questions.json";
import { useSelector } from 'react-redux';
import Buttons from "./incrementButtons.jsx";
import LoadingAnimation from "./components/loadingAnimation";
function App() {
  const trueAnswers = useSelector(state => state.answers.trueAnswers);
  const falseAnswers = useSelector(state=> state.answers.falseAnswers)
  return (
    <>
    <p style={{fontSize:"48px"}}>
      {trueAnswers} , {falseAnswers}
    </p>
    <Buttons/>
    <LoadingAnimation/>
    </>
  )
}

export default App;
