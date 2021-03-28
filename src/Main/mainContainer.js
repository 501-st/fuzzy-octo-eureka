import React from "react"
import Main from "./main";

function MainContainer(props) {
    return (
        <Main data={props.store.getState().dashboard}/>
    )
}

export default MainContainer;
