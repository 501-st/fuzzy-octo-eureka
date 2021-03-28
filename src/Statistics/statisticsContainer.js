import React from "react";
import "./statistics.css";
import Statistics from "./statistics";


function StatisticsContainer(props) {
    debugger;
    return (
        <Statistics data={props.store.getState().statistics.people}/>
    )
}

export default StatisticsContainer;