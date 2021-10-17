import React from "react";
import Createnote from "./Createnote";
import "./style.css";
import { Switch,Route } from "react-router-dom";
const App = () => {
    return (<>
        <Switch>
            <Route exact path="/" components={Createnote}/>
        </Switch>
       
    </>)
}

export default App;