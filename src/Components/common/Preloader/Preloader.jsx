import React from "react";
import loaderGIF from "../../../assets/images/Eclipse-1s-197px.svg";

let Preloader = (props) => {
    return <div
        style={{backgroundColor: 'white'}}><img src={loaderGIF}/>
    </div>
}
export default Preloader;
