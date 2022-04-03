import React from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

const AddComment = () => {
  const MessageSchema = Yup.object().shape({
    message: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Message is required")
  })

  return (
    <div>
      <h3>Add Comment</h3>
      <Formik
        initialValues={{
          message: ""
        }}
        validationSchema={MessageSchema}
        onSubmit={values => {
          console.log(values)
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="message" placeholder="message"/>
            {errors.message && touched.message ? (
              <div className="error">{errors.message}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
export default AddComment