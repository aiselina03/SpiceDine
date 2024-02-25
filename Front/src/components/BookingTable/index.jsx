import React from "react";
import "./style.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function BookingTable() {
  return (
    <>
      <div className="bookingSection">
        <div className="bookingTable">
          <div className="header">
            <img src="/src/images/sepreter.png" alt="" />
            <h2>ONLINE BOOKING NOW</h2>
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
                category: "",
                service: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Required"),
                phone: Yup.number().required("Required"),
                date: Yup.string().required("Required"),
                time: Yup.string().required("Required"),
                category: Yup.string().required("Required"),
                service: Yup.string().required("Required"),
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
                    <ErrorMessage name="phone" component={"span"} />
                  </div>
                </div>
                <div className="row2">
                  <div className="input">
                    <label htmlFor="category" className="label">
                      Category
                    </label>
                    <Field name="category" as="select" className="fields">
                      <option value="0">Select category</option>
                      <option value="1">Fine Dining</option>
                      <option value="2">Bistro</option>
                      <option value="3">Steakhouse</option>
                    </Field>
                    <ErrorMessage name="category" component={"span"}/>
                  </div>
                  <div className="input">
                    <label htmlFor="service" className="label">
                      Service
                    </label>
                    <Field name="service" as="select" className="fields">
                      <option value="0">Select service</option>
                      <option value="1">Dining-In</option>
                    </Field>
                    <ErrorMessage name="service" component={"span"}/>
                  </div>
                  <div className="input">
                    <label htmlFor="date" className="label">
                      I'm available on or after
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
                <div className="btn">
                  <button type="submit">BOOK NOW</button>
                  <div className="opacity"></div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingTable;
