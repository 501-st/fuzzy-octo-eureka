import React from "react";
import s from "./navigation.module.css"
import {NavLink} from "react-router-dom";
import {newUserActionCreator, textareaChangedActionCreator} from "../../State/store";


function Navigation(props) {


    function textareaChanged(e) {
        let text = e.target.value;
        props.store.dispatch(textareaChangedActionCreator(text));
    }


    function NewUser() {
        props.store.dispatch(newUserActionCreator());
    }

    return (
        <div className={s.background}>
            <div className={`${s.nav} ${s.firstButton}`}>
                <NavLink to="./../Main/main.js"> Главная </NavLink>
            </div>
            <div className={s.nav}>
                <NavLink to="./../Statistics/statistics.js"> Статистика </NavLink></div>
            <div className={s.nav}>
                <NavLink to="./../Account/account.js"> Личный кабинет </NavLink>
            </div>
            <div className={s.nav}>
                <textarea onChange={textareaChanged} > </textarea>
            </div>
            <div className={s.nav}>
                <button onClick={NewUser}> Go</button>
            </div>
        </div>
    )
}

export default Navigation;