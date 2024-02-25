import React from 'react'
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss"

function PrivateBooking() {
  return (
    <div className="privateBookingSection">
    <div className="privateBookingTable">
      <div className="header">
        <img src="/src/images/sepreter.png" alt="" />
        <h2>ONLINE PRIVATE BOOKING NOW</h2>
        <p>
          We invite you to make a reservation at our renowned restaurant,
          where exceptional flavors, top-notch service, and a
          welcoming ambiance await you.
        </p>
      </div>
      <div className="service">
        <h2>Please select service:</h2>
        <Formik
          initialValues={{
            name: "",
            phone: "",
            date: "",
            time: "",
            event: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Required"),
            phone: Yup.number().required("Required"),
            date: Yup.string().required("Required"),
            time: Yup.string().required("Required"),
            event: Yup.string().required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              setSubmitting(false);
              resetForm();
            }, 400);
          }}
        >
          <Form className="form">
            <div className="row1">
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
                <ErrorMessage name="name" component={"span"} />
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
                <ErrorMessage name="phone" component={"span"}/>
              </div>
            </div>
            <div className="row2">
              <div className="input">
                <label htmlFor="event" className="label">
                  Event
                </label>
                <Field name="event" as="select" className="fields">
                  <option value="0">Event</option>
                  <option value="1">Birthday</option>
                  <option value="2">Party</option>
                </Field>
                <ErrorMessage name="event" component={"span"}/>
              </div>
              <div className="input">
                <label htmlFor="event" className="label">
                  Person
                </label>
                <Field name="event" as="select" className="fields">
                  <option value="0">2 Person</option>
                  <option value="1">5 Person</option>
                  <option value="2">10 Person</option>
                </Field>
                <ErrorMessage name="event" component={"span"}/>
              </div>
              <div className="input">
                <label htmlFor="date" className="label">
                Date
                </label>
                <Field name="date" type="date" className="fields" />
                <ErrorMessage name="date" component={"span"}/>
              </div>
              <div className="input">
                <label htmlFor="time" className="label">
                  Start from
                </label>
                <Field name="time" type="time" className="fields" />
                <ErrorMessage name="time" component={"span"}/>
              </div>
              <div className="input">
                <label htmlFor="time" className="label">
                  Finish by
                </label>
                <Field name="time" type="time" className="fields" />
                <ErrorMessage name="time" component={"span"}/>
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
              <button type="submit">BOOK A PRIVATE TABLE</button>
              <div className="opacity"></div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  </div>
  )
}

export default PrivateBooking