import React from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup'
import { loginAccount } from '../api';

const LoginForm = () => {
  return (
    <Formik
    initialValues={{
        username:"", 
        password:"",
        
    }}
    validationSchema={Yup.object({
        username: Yup.string(),
        password: Yup.string()
    })}
    onSubmit={(values, { setSubmitting }) =>
        {
            setSubmitting(false);
            loginAccount(values.username, values.password)
            console.log(            loginAccount(values.username, values.password)
            )
        }}
    >
        <Form>s
            <label htmlFor="username">username</label>
            <Field
            style={{ size: "200px", width: "100%" }}
            name="username"
            type="text"
            />
            <ErrorMessage name="username" component="div" style={{ color: "red" }} />

            <label htmlFor="password">password</label>
            <Field
            style={{ size: "200px", width: "100%" }}
            name="password"
            type="textarea"
            />
            <ErrorMessage
            name="password"
            component="div"
            style={{ color: "red" }}
            />

           

            <button className="button-main" type="submit">
            Submit
            </button>
        </Form>

    </Formik>
  )
}

export default LoginForm