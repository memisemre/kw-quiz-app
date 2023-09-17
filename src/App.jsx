import React from "react";
import QUESTIONS from "./utils/questions.json";
import { useSelector } from 'react-redux';
import Buttons from "./incrementButtons.jsx";
function App() {
  const trueAnswers = useSelector(state => state.answers.trueAnswers);
  const falseAnswers = useSelector(state=> state.answers.falseAnswers)
  return (
    <>
    <p style={{fontSize:"48px"}}>
      {trueAnswers} , {falseAnswers}
    </p>
    <Buttons/>

    </>
  )
}

export default App;
