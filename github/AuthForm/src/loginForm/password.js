import React from 'react';
import {Form, Label} from "../Redux/constants";
import {Field} from "redux-form";
import s from "./input.module.css";
import {maxLengthCreator, requiredField} from "../validators/validators";

const maxLength15 = maxLengthCreator(15);

let Password = () => {

    return (
        <Form>
            <Label> Password </Label>
            <Field className={s.input} validate={[requiredField, maxLength15]} placeholder="Enter your password" name = "password" type = "password" component="input"/>
        </Form>
    )
}

export default Password;