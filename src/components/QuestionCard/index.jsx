import React from "react";
import { useDispatch } from "react-redux";
import { incrementFalse, incrementTrue } from "../../stores/answerStore";

const QuestionCard = ({ question }) => {
  const dispatch = useDispatch();

  const checkAnswer = (selectedAnswer, correctAnswer) => {
    if (selectedAnswer === correctAnswer) {
      dispatch(incrementTrue());
    } else {
      dispatch(incrementFalse());
    }
  };

  return (
    <div>
      <h1>{question.question}</h1>
      {question.answers.map((answer, index) => (
        <button
          key={index}
          onClick={() => checkAnswer(answer, question.trueAnswer)}
        >
          {answer}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
