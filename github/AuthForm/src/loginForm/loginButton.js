import React from "react";
import {NavLink} from "react-router-dom";
import {getUserToken} from "../Redux/reducer";
import {useDispatch} from "react-redux";
import {LogBtn} from "../Redux/constants";

export let LoginButton = () => {
    const dispatch = useDispatch();
    return (
        <NavLink to="/profile.js">
            <LogBtn onClick={() => dispatch(getUserToken("sha-sabir@yandex.ru", "sabirmipt"))}>
                Log in </LogBtn>
        </NavLink>
    )
}