import React from "react"
import './App.css';
import Header from "../Header/header";
import Account from "./../Account/account";
import {BrowserRouter, Route} from "react-router-dom";
import StatisticsContainer from "../Statistics/statisticsContainer";
import MainContainer from "../Main/mainContainer";
import Statistics from "../Statistics/statistics";
import Main from "../Main/main";

function App(props) {
    return (
        <BrowserRouter>
            <div className="contentWrapper">
                <Header store={props.store}/>
                <Route path="/account" render={() => <Account/>}/>
                <Route path="/statistics" render={() => <Statistics />}/>
                <Route path="/main" render={() => <Main />}/>
            </div>

        </BrowserRouter>
    )
    debugger;
}

export default App;