import { incrementFalse, incrementTrue } from "../../stores/answerStore";
import {useDispatch} from "react-redux";
const QuestionCard = (props) => {
    const dispatch = useDispatch(); 
    const checkAnswer = (correctAnswer,trueAnswer)=>{
        if(correctAnswer === trueAnswer){
            dispatch(incrementTrue());
            return;
        }
        else{
            dispatch(incrementFalse());
        }
    }
    return (
        <div>
            <h1>{props.question.question}</h1>
            {props.question.answers.map((answer, index) => (
                <button key={index} onClick={() => checkAnswer(answer, props.question.trueAnswer)}>{answer}</button>
            ))}
        </div>
    )
}

export default QuestionCard;
