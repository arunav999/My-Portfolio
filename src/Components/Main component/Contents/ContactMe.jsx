import React, { useState } from "react";

import "./ContactMe.css";
import CallMe from "../../../My Memoji/Without background/CallMe-NB.png";

const ContactMe = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (!data.name.trim()) {
      errors.name = "Name is required";
    } else if (data.name.length < 3) {
      errors.name = "Name must be at-least 3 characters long";
    }

    if (!data.phone) {
      errors.phone = "Phone number is required";
    } else if (
      !data.phone.startsWith("6") &&
      !data.phone.startsWith("7") &&
      !data.phone.startsWith("8") &&
      !data.phone.startsWith("9")
    ) {
      errors.phone = "Phone number must start with 6, 7, 8, or 9";
    }

    if (!data.email) {
      errors.email = "E-mail is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
      errors.email = "Invalid e-mail address";
    }

    if (!data.message.trim()) {
      errors.message = "Message is required";
    } else if (data.message.length < 10) {
      errors.message = "Message must be at least 10 characters long";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });

    const newErrors = { ...errors };

    if (name === "name" && (!value.trim() || value.length < 3)) {
      newErrors.name = "Name must be at least 3 characters long";
    } else if (
      name === "phone" &&
      (!/^\d{10}$/.test(value) || !/^[6-9]/.test(value))
    ) {
      newErrors.phone = "Phone must start with 6-9 and be exactly 10 digits";
    } else if (
      name === "email" &&
      value &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ) {
      newErrors.email = "Invalid e-mail address";
    } else if (name === "message" && value.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    } else {
      delete newErrors[name];
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      const url =
        "https://v1.nocodeapi.com/slyterkit/google_sheets/gzCkzgVfPicQcksq?tabId=Sheet1";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          [
            data.name,
            data.email,
            data.phone,
            data.message,
            new Date().toLocaleString(),
          ],
        ]),
      });

      await response.json();
      setData({
        ...data,
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.log("Submission failed:", error);
    }
  };

  return (
    <section className="contactSection" id="Contact">
      <div className="sec-container no-gap">
        <h2 className="heading-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="headIcon"
            viewBox="0 0 512 512"
          >
            <path d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z" />
          </svg>
          Get In
          <span>Touch</span>
        </h2>

        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-img">
              <img src={CallMe} alt="Call me memoji" />
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="field">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="form-icon"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                  </svg>
                </div>
                <div className="field">
                  <input
                    type="text"
                    placeholder="E-mail"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="form-icon"
                    viewBox="0 0 512 512"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                </div>
                <div className="field">
                  <input
                    type="number"
                    placeholder="Phone"
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                  {errors.phone && (
                    <span className="error">{errors.phone}</span>
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="form-icon"
                    viewBox="0 0 512 512"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                </div>
                <div className="message">
                  <textarea
                    name="message"
                    value={data.message}
                    onChange={handleChange}
                    required
                    placeholder="Message"
                  ></textarea>
                  {errors.message && (
                    <span className="error">{errors.message}</span>
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="form-icon"
                    viewBox="0 0 512 512"
                  >
                    <path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l96 0 0 80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0z" />
                  </svg>
                </div>
              </div>

              <div className="button-area">
                <button type="submit">
                  Submit
                  <i></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
