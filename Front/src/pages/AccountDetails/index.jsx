import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import Scroll from "../../components/Scroll";
import Mode from "../../components/Mode";
import Cursor from "../../components/Cursor";
import "./style.scss";
import { Link, NavLink } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function AccountDetails() {
  const { logOut } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="account">
        <p>
          <Link to={"/"}>
            <i className="fa-solid fa-house"></i>
          </Link>
          My Account
        </p>
      </div>
      <div className="accountPages">
        <div className="accountPage">
          <div className="nav">
            <NavLink to={"/account"}>
              <h2>Dashboard</h2>
            </NavLink>
            <NavLink to={"/order"}>
              <h2>Orders</h2>
            </NavLink>
            <NavLink to={"/adresses"}>
              <h2>Addresses</h2>
            </NavLink>
            <NavLink to={"/accountDetails"}>
              <h2>Account details</h2>
            </NavLink>
            <NavLink>
              <h2 onClick={logOut}>Log out</h2>
            </NavLink>
          </div>
          <div className="accountDetails">
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                displayName: "",
                email: "",
                password1: "",
                password2: "",
                password3: "",
              }}
              validationSchema={Yup.object({
                firstName: Yup.string().required("Required"),
                lastName: Yup.string().required("Required"),
                displayName: Yup.string().required("Required"),
                password1: Yup.string().required("Required"),
                password2: Yup.string().required("Required"),
                password3: Yup.string().required("Required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
              })}
              onSubmit={(values, { setSubmitting ,resetForm}) => {
                setTimeout(() => {
                  setSubmitting(false);
                  resetForm()
                }, 400);
              }}
            >
              <Form className="form">
                <div className="row1">
                  <div className="input">
                    <label htmlFor="firstName" className="label">
                      First Name <span>*</span>
                    </label>
                    <Field name="firstName" type="text" className="field" />
                    <ErrorMessage component={"span"} name="firstName" />
                  </div>

                  <div className="input">
                    <label htmlFor="lastName" className="label">
                      Last Name <span>*</span>
                    </label>
                    <Field name="lastName" type="text" className="field" />
                    <ErrorMessage component={"span"} name="lastName" />
                  </div>
                </div>

                <div className="row2">
                  <div className="input">
                    <label htmlFor="displayName" className="label">
                      Display Name <span>*</span>
                    </label>
                    <Field name="displayName" type="text" className="field" />
                    <ErrorMessage component={"span"} name="displayName" />
                  </div>

                  <div className="input">
                    <label htmlFor="email" className="label">
                      Email Address <span>*</span>
                    </label>
                    <Field name="email" type="email" className="field" />
                    <ErrorMessage component={"span"} name="email" />
                  </div>
                </div>

                <div className="passwordChange">
                  <h2>Password change</h2>
                  <div className="input">
                    <label htmlFor="password1" className="label">
                      Current password (leave blank to leave unchanged)
                    </label>
                    <div className="fields">
                      <Field
                        className="fieldP"
                        name="password1"
                        id="password1"
                        type={showPassword ? "text" : "password"}
                      />
                      {showPassword ? (
                        <i
                          className="fa-sharp fa-light fa-eye"
                          onClick={() => setShowPassword(false)}
                        ></i>
                      ) : (
                        <i
                          className="fa-sharp fa-light fa-eye-slash"
                          onClick={() => setShowPassword(true)}
                        ></i>
                      )}
                    </div>
                    <ErrorMessage name="password1" component={"span"} />
                  </div>
                  <div className="input">
                    <label htmlFor="password2" className="label">
                      New password (leave blank to leave unchanged)
                    </label>
                    <div className="fields">
                      <Field
                        className="fieldP"
                        name="password2"
                        id="password2"
                        type={showPassword ? "text" : "password"}
                      />
                      {showPassword ? (
                        <i
                          className="fa-sharp fa-light fa-eye"
                          onClick={() => setShowPassword(false)}
                        ></i>
                      ) : (
                        <i
                          className="fa-sharp fa-light fa-eye-slash"
                          onClick={() => setShowPassword(true)}
                        ></i>
                      )}
                    </div>
                    <ErrorMessage name="password2" component={"span"} />
                  </div>
                  <div className="input">
                    <label htmlFor="password3" className="label">
                      Confirm new password
                    </label>
                    <div className="fields">
                      <Field
                        className="fieldP"
                        name="password3"
                        id="password3"
                        type={showPassword ? "text" : "password"}
                      />
                      {showPassword ? (
                        <i
                          className="fa-sharp fa-light fa-eye"
                          onClick={() => setShowPassword(false)}
                        ></i>
                      ) : (
                        <i
                          className="fa-sharp fa-light fa-eye-slash"
                          onClick={() => setShowPassword(true)}
                        ></i>
                      )}
                    </div>
                    <ErrorMessage name="password3" component={"span"} />
                  </div>
                </div>

                <button type="submit">Save changes</button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
      <Mode />
      <Scroll />
      <Cursor />
    </>
  );
}

export default AccountDetails;
