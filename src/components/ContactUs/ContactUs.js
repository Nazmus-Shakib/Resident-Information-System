import React from "react";
import { Jumbotron } from "react-bootstrap";

const ContactUs = () => {
  return (
    <Jumbotron style={{ textAlign: "center" }}>
      <h1 style={{ color: "MediumVioletRed" }}>
        Hello, Honorable Community Members !!!
      </h1>
      <p className="pt-3">
        We warmly welcome you for being a part of our Community. We are
        conscious about you and your privacy. This system allows you to use 24/7
        to keep your details secure and updated.
      </p>
      <div className="pt-5">
        <h3 style={{ color: "DarkMagenta" }}>For Any Emergency :</h3>
        <p>Office: Taman Bahtera, Tanjung Malim, Perak-35900, Malaysia </p>
        <p>Email: Info@gmail.com</p>
        <p>Phone: (+60)-175********* </p>
      </div>
      <div className="pt-5">
        <h5>Cordially Thanks from </h5>
        <h2 style={{ color: "darkblue" }}>Smart Residenz Administration</h2>
      </div>
      <span style={{ fontSize: "150px" }}>&#128522;</span>
    </Jumbotron>
  );
};

export default ContactUs;
