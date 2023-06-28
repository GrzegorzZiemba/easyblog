import React from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup'
import { createPost } from '../api';

const AddPost = () => {
  return (
    <Formik
    initialValues={{
        title:"", 
        description:"",
        code: ""
    }}
    validationSchema={Yup.object({
        title: Yup.string(),
        description: Yup.string()
    })}
    onSubmit={(values, { setSubmitting }) =>
        {
            setSubmitting(false);
            createPost(values.title, values.description, values.code)
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
            type="textarea"
            />
            <ErrorMessage
            name="description"
            component="div"
            style={{ color: "red" }}
            />

            <label htmlFor="code">code</label>
            <Field
            style={{ size: "200px", width: "100%" }}
            name="code"
            type="textarea"
            />
            <ErrorMessage
            name="code"
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