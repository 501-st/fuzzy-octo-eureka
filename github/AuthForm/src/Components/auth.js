import React from "react";
import Email from "../loginForm/email";
import Password from "../loginForm/password";
import {MainWindow, SignIn} from "../Redux/constants";
import {reduxForm} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {getUserToken} from "../Redux/reducer";
import s from "../loginForm/input.module.css"
import {Redirect} from "react-router-dom";
import styled from "styled-components";

const ErrorContainer = styled.div`
  color:red;
  font-size: 25px;
  margin-bottom: 7px;
  padding-bottom: 7px;
`;

let Auth = (props) => {
    const isAuth = useSelector(state => state.user.isAuth)
    const messageError = useSelector(state => state.user.error.errorMessage);
    console.log("Is auth? ", isAuth);

    if (isAuth) return <Redirect to="/"/>
    return (
        <MainWindow>
            <form onSubmit={props.handleSubmit}>
                <SignIn> Sign in </SignIn>
                <Email/>
                <Password/>
                <ErrorContainer>
                    {messageError ? messageError : ""}
                </ErrorContainer>
                <button className={s.button}>
                    Log in
                </button>
            </form>
        </MainWindow>
    )
}
let AuthReduxForm = reduxForm({form: "auth"})(Auth)

let Login = () => {
    const dispatch = useDispatch();
    const onSubmit = (values) => {
        console.log ("Email: ", values.email, "password: ", values.password)
        dispatch(getUserToken(values.email, values.password))
    }
    return (
        <AuthReduxForm onSubmit={onSubmit}/>)
}

export default Login;
