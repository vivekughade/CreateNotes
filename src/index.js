import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {BrouserRouter} from "react-router-dom"

ReactDOM.render(
    <>
        <BrouserRouter>
        <App />
        </BrouserRouter>
        
    </>,document.getElementById("root")
)