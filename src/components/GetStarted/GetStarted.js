import React from "react";
import { Button } from "react-bootstrap";
import "./GetStarted.css";
import image from "../../images/role01.jpg";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <>
      <div className=" get-text">
        <h1>Get Started</h1>
      </div>

      <div className="d-flex get-button">
        <img className="p-3 mr-5 img-fluid" src={image} alt="" />

        <div className="d-flex flex-column align-items-end">
          <h3>I would like to Get Started as a: </h3>
          <Link to="/login">
            <Button variant="success" size="lg">
              Community Member
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
