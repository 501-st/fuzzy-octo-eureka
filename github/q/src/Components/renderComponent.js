import React, {useEffect} from 'react';
import {Route} from "react-router-dom";
import Auth from "./auth";
import Profile from "./profile";
import {Container} from "../Redux/constants";
import {getUser} from "../Redux/reducer";
import {useDispatch} from "react-redux";

export let RenderComponent = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(getUser())
        }
    }, [dispatch]);
    return (
        <Container>
            <Route exact path="/" render={() => localStorage.getItem("token") ? <Profile/> : <Auth/>}/>
        </Container>
    )
}

