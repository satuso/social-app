import React from "react"
import { useNavigate } from "react-router-dom"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

const Signup = () => {
  const navigate = useNavigate()

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Password is required")
  })

  return (
    <main>
      <div className="form-container">
        <h1>Sign Up</h1>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={values => {
            console.log(values)
            navigate("/dashboard")
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="username" placeholder="username"/>
              {errors.username && touched.username ? (
                <div className="error">{errors.username}</div>
              ) : null}
              <Field name="email" type="email" placeholder="email"/>
              {errors.email && touched.email 
                ? 
                <div className="error">{errors.email}</div> 
                : null}
              <Field name="password" type="password" placeholder="password"/>
              {errors.password && touched.password ? (
                <div className="error">{errors.password}</div>
              ) : null}
              <button type="submit">Sign Up</button>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  )
}
export default Signup