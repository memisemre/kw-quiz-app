import React from "react";
import Style from "./comp.module.scss"
const LoadingAnimation = () =>{
    return(
        <div className={Style.loadingAnimation}>
            <img src="./pa.png" alt="" />
        </div>
    )
}
export default LoadingAnimation;