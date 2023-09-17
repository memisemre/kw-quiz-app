import { incrementFalse, incrementTrue } from "./stores/answerStore";
import {useDispatch} from "react-redux";
const Buttons = () =>{ 
  const dispatch = useDispatch(); 
    return(
     <>
      <button onClick={()=>dispatch(incrementTrue())}>True Answer</button>
      <button onClick={()=>dispatch(incrementFalse())}>False Answer</button>
     </>
    )
}
export default Buttons;