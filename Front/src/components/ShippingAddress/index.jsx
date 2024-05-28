

import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import Scroll from "../../components/Scroll";
import Mode from "../../components/Mode";
import Cursor from "../../components/Cursor";
import "./style.scss";
import { Link, NavLink } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function ShippingAddress() {
  const { logOut } = useContext(UserContext);
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
          <div className="shippingAddress">
            <div className="shipping">
              <h2>Shipping address</h2>
              <div className="formik">
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    companyName: "",
                    state: "",
                    country: "",
                    street: "",
                    apartment: "",
                    town: "",
                    zip: "",
                    phone: "",
                    email: "",
                  }}
                  validationSchema={Yup.object({
                    firstName: Yup.string().required("Required"),
                    lastName: Yup.string().required("Required"),
                    companyName: Yup.string().required("Required"),
                    state: Yup.string().required("Required"),
                    country: Yup.string().required("Required"),
                    street: Yup.string().required("Required"),
                    apartment: Yup.string().required("Required"),
                    town: Yup.string().required("Required"),
                    zip: Yup.string().required("Required"),
                    phone: Yup.number().required("Required"),
                    email: Yup.string()
                      .email("Invalid email address")
                      .required("Required"),
                  })}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
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
                    <div className="input">
                      <label htmlFor="companyName" className="label">
                        Company Name (optional)
                      </label>
                      <Field name="companyName" type="text" className="field" />
                      <ErrorMessage component={"span"} name="companyName" />
                    </div>

                    <div className="input">
                      <label htmlFor="country" className="label">
                        Country / Region <span>*</span>
                      </label>
                      <Field name="country" type="text" className="field" />
                      <ErrorMessage component={"span"} name="country" />
                    </div>
                    <div className="input">
                      <label htmlFor="street" className="label">
                        Street address <span>*</span>
                      </label>
                      <Field
                        name="street"
                        type="text"
                        placeholder="House Number and street name"
                        className="field"
                      />
                      <ErrorMessage component={"span"} name="street" />
                    </div>
                    <div className="input">
                      <Field
                        name="apartment"
                        type="text"
                        className="field"
                        placeholder="Apartment, suite, unit, etc. (optional)"
                      />
                      <ErrorMessage component={"span"} name="apartment" />
                    </div>

                    <div className="input">
                      <label htmlFor="town" className="label">
                        Town / City <span>*</span>
                      </label>
                      <Field name="town" type="text" className="field" />
                      <ErrorMessage component={"span"} name="town" />
                    </div>

                    <div className="input">
                      <label htmlFor="state" className="label">
                        State / County <span>*</span>
                      </label>
                      <Field name="state" type="text" className="field" />
                      <ErrorMessage component={"span"} name="state" />
                    </div>

                    <div className="input">
                      <label htmlFor="zip" className="label">
                        ZIP Code <span>*</span>
                      </label>
                      <Field name="zip" type="text" className="field" />
                      <ErrorMessage component={"span"} name="zip" />
                    </div>
                    <div className="input">
                      <label htmlFor="phone" className="label">
                        Phone <span>*</span>
                      </label>
                      <Field name="phone" type="text" className="field" />
                      <ErrorMessage component={"span"} name="phone" />
                    </div>

                    <div className="input">
                      <label htmlFor="email" className="label">
                        Email Address <span>*</span>
                      </label>
                      <Field name="email" type="email" className="field" />
                      <ErrorMessage component={"span"} name="email" />
                    </div>
                    <button type="submit">Save address</button>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Mode />
      <Scroll />
      <Cursor />
    </>
  );
}

export default ShippingAddress;
