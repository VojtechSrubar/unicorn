import React from "react";
import "./ContactPage.css";
import FormInput from "../componets/FormInput";

function ContactPage() {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    fullname: "",
    message: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "Full name",
      errorMessage:
        "Name should be 5-50 characters and shouldnt include any special character!",
      label: "Full name",
      pattern: "^[A-Za-zÁČĎÉĚÍŇÓŘŠŤÚŮÝŽáčďéěíňóřšťúůýž ]{5,50}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      pattern:
        "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$",
      required: true,
    },
    {
      id: 3,
      name: "message",
      type: "textarea",
      placeholder: "Message",
      errorMessage: "Should not be longer than 500 characters!",
      label: "Message",
      minLength: 0,
      maxLength: 500,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <div className="header-section">
        <h1 className="connectus-header">Connect with us</h1>
        <p className="intro-text">
          We would love to respond to your queries. Please fill out the form on
          the left to get in touch with us.
        </p>
      </div>
      <div className="contact-container">
        <div className="form-section">
          <h1 className="contactus">Send your request</h1>
          <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
                className="form-input"
              />
            ))}
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="info-section">
          <h1 className="reachus">Reach us</h1>
          <p>
            Feel free to reach out to us via phone or visit our office at the
            address below:
          </p>
          <p>
            <strong>Email:</strong> unicorn@unicorn.cz
          </p>
          <p>
            <strong>Phone:</strong> +420 123 456 789
          </p>
          <p>
            <strong>Address:</strong> Prokešovo náměstí 2020/6, Ostrava, Czech
            republic
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
