import React from "react"
import { useNavigate } from "react-router-dom"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

const Login = () => {
  const navigate = useNavigate()

  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Username is required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Password is required")
  })

  return (
    <main>
      <div className="form-container">
        <h1>Log In</h1>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
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
              <Field name="password" type="password" placeholder="password"/>
              {errors.password && touched.password ? (
                <div className="error">{errors.password}</div>
              ) : null}
              <button type="submit">Log In</button>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  )
}
export default Login