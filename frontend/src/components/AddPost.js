import React from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup'
import { loginAccount } from '../api';

const AddPost = () => {
  return (
    <Formik
    initialValues={{
        title:"", 
        description:""
    }}
    validationSchema={Yup.object({
        title: Yup.string(),
        description: Yup.string()
    })}
    onSubmit={(values, { setSubmitting }) =>
        {
            setSubmitting(false);
            loginAccount(values.title, values.description)
        }}
    >
        <Form>s
            <label htmlFor="title">Title</label>
            <Field
            style={{ size: "200px", width: "100%" }}
            name="title"
            type="text"
            />
            <ErrorMessage name="title" component="div" style={{ color: "red" }} />

            <label htmlFor="description">description</label>
            <Field
            style={{ size: "200px", width: "100%" }}
            name="description"
            type="password"
            />
            <ErrorMessage
            name="description"
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

export default AddPost