import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import './All1.css';
import { useNavigate } from 'react-router';

const Login = () => {

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string()
        .email("Invalid email address")
        .required("Enter your email or mobile phone number"),
        password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Enter your password"),
      });

    const Navigate = useNavigate();

    const handleSubmit = (values) => {
        console.log("Form Submitted", values);

        Navigate("/homepage");

        setTimeout(() => {
            Navigate("home2");
        }, 5000);
   
      };

    return (
        <div className="container">
        <div className="content-wrapper">
          {/* Left Section */}
          <div className="left-section">
            <h1>'Tis the season</h1>
            <p>Find the perfect gift at Amazon</p>
            <span>Shop deals in every department →</span>
            <div className="door-image">
              <img
                src="https://shopvian.com/wp-content/uploads/2021/07/778f2cee60f050175dbbee93d205e194.png" 
                alt="Holiday Door"
              />
            </div>
          </div>
  
          {/* Right Section */}
          <div className="right-section">
            <div className="login-box">
              <h2>Login</h2>
              <p>
                Don't have an account? <a href="/signup">Sign up →</a>
              </p>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <div className="input-icon">
                      <Field
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                      <span className="icon">📧</span>
                    </div>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error-message"
                    />
                  </div>
  
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <div className="input-icon">
                      <Field
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                      />
                      <span className="icon">🔒</span>
                    </div>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="error-message"
                    />
                  </div>
  
                  <button type="submit" className="submit-button">
                    Login
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
   
    
  )
}

export default Login;