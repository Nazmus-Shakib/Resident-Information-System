import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { UserContext } from "../../App";
import "./LogIn.css";
import {
  createUserWithEmailAndPassword,
  handleGoogleSignIn,
  initializeLogInFramework,
  signInWithEmailAndPassword,
} from "./LogInManager";
import banner from "../../images/background.jpg";
import { Link } from "react-router-dom";

const LogIn = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    photo: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  initializeLogInFramework();

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      setUser(res);
      setLoggedInUser(res);
    });
  };

  const handleBlur = (event) => {
    let isFieldValid = true;
    if (event.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFieldValid = passwordHasNumber && isPasswordValid;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
      //setLoggedInUser(newUserInfo);
    }
  };

  const handleSubmit = (event) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password).then(
        (res) => {
          setUser(res);
          setLoggedInUser(res);
        }
      );
    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        setUser(res);
        setLoggedInUser(res);
      });
    }
    event.preventDefault();
  };

  return (
    <div>
      <img style={{ width: "100%" }} src={banner} alt="" />
      <div style={{ margin: "280px 0px 0px 0px" }} className="centeredLogo">
        <h1 className="pt-5">Welcome To Smart Residenz</h1>
        <h3 className="pt-3">Kindly Provide Your Identity</h3>

        <form onSubmit={handleSubmit}>
          {newUser && (
            <input
              type="text"
              name="name"
              onBlur={handleBlur}
              placeholder="Your Name"
              required
            />
          )}
          <br />
          <input
            type="text"
            name="email"
            onBlur={handleBlur}
            placeholder="Email Address"
            required
          />
          <br />
          <input
            type="password"
            name="password"
            onBlur={handleBlur}
            placeholder="Password more than 6 characters"
            required
          />
          <br />
          <input
            style={{ backgroundColor: "LightSalmon" }}
            type="submit"
            value={newUser ? "Sign Up" : "Sign In"}
          />
        </form>
        <input
          type="checkbox"
          onChange={() => setNewUser(!newUser)}
          name="newUser"
          id=""
        />
        <label style={{ color: "LightCyan" }} htmlFor="newUser">
          <h5>New User Sign Up</h5>
        </label>
        <br />

        <h5 style={{ color: "yellow" }}>{user.error}</h5>
        {user.success === true && (
          <h5 style={{ color: "yellow" }}>
            User {newUser ? "Created" : "Logged In"} successfully
          </h5>
        )}

        <div className="mt-4">
          {loggedInUser.email ? (
            <>
              <h2 style={{ color: "LightCyan" }}>Store Your Details</h2>
              <Link to="/submitDetails">
                <Button
                  style={{ display: "inline" }}
                  variant="primary"
                  size="lg"
                >
                  Submit Personal Details
                </Button>
              </Link>
            </>
          ) : (
            <>
              <h3 style={{ color: "LightCyan" }}> Or Log In Using Google</h3>
              <Button
                style={{ display: "inline" }}
                onClick={googleSignIn}
                variant="warning"
              >
                Sign In with Google
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LogIn;
