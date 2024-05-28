import { useState } from "react";
import "../componets/ContactPage.css";
import FormInput from "../componets/FormInput";

function ContactPage() {
  const [values, setValues] = useState({
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
        "Name should be 5-50 characters and shouldn't include any special character!",
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
      type: "text",
      placeholder: "Message",
      errorMessage: "Should not be longer than 255 characters!",
      label: "Message",
      maxLength: 255,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries())); // To log the submitted data
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1 className="contactus">Contact Us</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactPage;
