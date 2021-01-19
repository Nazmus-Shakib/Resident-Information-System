import React from "react";
import Logo from "../../images/Logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark py-3">
      <div className="container">
        <div className="row footer-top py-5">
          <div className="col-md-3">
            <img
              style={{ height: "130px", width: "200px" }}
              src={Logo}
              alt="Smart Residenz Logo"
            />
          </div>
          <div className="col-md-3 contact">
            <h3>Contact Us</h3>
            <p>
              Call: (+60)-175xxxxxx <br />
              Email: info@example.com
            </p>
          </div>
          <div className="col-md-3 contact">
            <h3>Address</h3>
            <p>
              Smart Residenz System Sdn Bhd, Jalan Bahtera, 35900 <br />
              Tanjung Malim, Perak, Malaysia
            </p>
          </div>
          <div className="col-md-3">
            <h3>Site Map</h3>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>View Details</li>
              <li>Get Started</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom d-flex justify-content-between align-items-center">
          <small className="text-info">
            Copyright &copy; 2021 Nazmus Shakib & Team - Smart Residenz System
          </small>
          <ul className="list-inline">
            <li className="list-inline-item ml-3">
              <a href="">Privacy Policy</a>
            </li>
            <li className="list-inline-item  ml-3">
              <a href="">Terms & Conditions</a>
            </li>
            <li className="list-inline-item  ml-3">
              <a href="">FAQs</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
