import React from "react";
import {newUserActionCreator, textareaChangedActionCreator} from "../../State/store";
import Navigation from "./navigation";


function NavigationContainer(props) {

    function textareaChanged(text) {
        props.store.dispatch(textareaChangedActionCreator(text));
    }


    function NewUser() {
        props.store.dispatch(newUserActionCreator());
    }
    return (
        <Navigation newUser={NewUser} textareaChanged={textareaChanged} textareaData={props.store.getState().statistics.textareaData}/>
    )
}

export default NavigationContainer;