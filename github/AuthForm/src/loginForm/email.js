import React from 'react';
import {Form, Label} from "../Redux/constants";
import {Field} from "redux-form";
import s from "./input.module.css";
import {maxLengthCreator, requiredField} from "../validators/validators";


const maxLength20 = maxLengthCreator(20);

let Email = () => {

    return (
        <Form>
            <Label>
                Email
            </Label>
            <Field className={s.input} validate={[requiredField, maxLength20]} placeholder="Enter your email" name="email" type="text" component="input"/>
        </Form>
    )
}

export default Email;