import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleFirstName = (event) => {
    setValues({
      ...values,
      firstName: event.target.value,
    });
  };

  const handleLastName = (event) => {
    setValues({
      ...values,
      lastName: event.target.value,
    });
  };

  const handleEmail = (event) => {
    setValues({
      ...values,
      email: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted && values.firstName && values.lastName && values.email ? (
          <div className="success-message">
            Success! Thank you for registering.
          </div>
        ) : null}
        <input
          disabled={submitted}
          onChange={handleFirstName}
          value={values.firstName}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        { submitted && !values.firstName ? <span>Please enter a first name</span> : null}

        <input
          disabled={submitted}
          onChange={handleLastName}
          value={values.lastName}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted && !values.lastName ? <span>Please enter a last name</span> : null}

        <input
          disabled={submitted}
          onChange={handleEmail}
          value={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ?<span>Please enter an email</span> : null}

        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
