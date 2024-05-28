import React from "react";
import "./style.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function ContactMessage() {
  return (
    <>
      <div className="sendMesagge">
        <div className="headers">
          <h2>
            Have a question or need more information? Just drop us a line!
          </h2>
          <p>
            Give us a call or drop by anytime, we endeavour to answer all
            enquiries within 24 hours on business days. We will be happy to
            answer your questions.
          </p>
        </div>
        <Formik
          initialValues={{ name: "", phone: "", email: "", message: "" }}
          validationSchema={Yup.object({
            name: Yup.string(),
            phone: Yup.number(),
            email: Yup.string(),
            message: Yup.string(),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              setSubmitting(false);
              resetForm();
            }, 400);
          }}
        >
          <Form className="form">
            <div className="row">
              <div className="input">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <Field
                  name="name"
                  type="text"
                  className="field"
                  placeholder="Name"
                />
                <ErrorMessage name="name" />
              </div>
              <div className="input">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  className="field"
                  placeholder="Email"
                />
                <ErrorMessage name="Email" />
              </div>
              <div className="input">
                <label htmlFor="phone" className="label">
                  Phone
                </label>
                <Field
                  name="phone"
                  type="text"
                  className="field"
                  placeholder="Phone"
                />
                <ErrorMessage name="phone" />
              </div>
            </div>

            <div className="textarea">
              <label htmlFor="message" className="label">
                Message
              </label>
              <Field
                className="form-control"
                component="textarea"
                name="message"
                rows="6"
              />
            </div>

            <div className="btn">
              <button type="submit">SEND A MESSAGE</button>
              <div className="opacity"></div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default ContactMessage;
