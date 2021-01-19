import { Avatar } from "@material-ui/core";
import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";
import Logo from "../../images/Logo.png";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  //console.log(loggedInUser);

  const signOut = () => {
    sessionStorage.removeItem(`userInfo`);
    sessionStorage.removeItem(`token`);
    setLoggedInUser({ isSignIn: false });
  };

  return (
    <div className="mb-5 ">
      <Navbar fixed="top" className="nav" bg="dark" variant="dark">
        <Navbar.Brand href="/home">
          <img style={{ height: "60px", width: "150px" }} src={Logo} alt="" />
        </Navbar.Brand>

        <Nav className="ml-auto mr-4">
          <Nav.Link className="navs" href="">
            <Link
              style={{ color: "greenyellow", textDecoration: "none" }}
              to="/home"
            >
              Home
            </Link>
          </Nav.Link>

          <Nav.Link className="navs" href="">
            <Link
              style={{ color: "greenyellow", textDecoration: "none" }}
              to="/getStarted"
            >
              Get Started
            </Link>
          </Nav.Link>

          <Nav.Link className="navs" href="">
            <Link
              style={{ color: "greenyellow", textDecoration: "none" }}
              to="/allDetails"
            >
              View Details
            </Link>
          </Nav.Link>

          <Nav.Link className="navs" href="">
            <Link
              style={{ color: "greenyellow", textDecoration: "none" }}
              to="/contactUs"
            >
              Contact Us
            </Link>
          </Nav.Link>

          {loggedInUser.email ? (
            <>
              <Avatar
                style={{ margin: "0 10px 0 15px" }}
                alt=""
                src={loggedInUser.photo}
              />
              <h4 style={{ margin: "6px 0 0 15px" }}>
                {loggedInUser.name || loggedInUser.displayName}
              </h4>
              <Nav.Link
                style={{ color: "greenyellow", textDecoration: "none" }}
                className="navs"
                href=""
                onClick={signOut}
              >
                Log Out
              </Nav.Link>
            </>
          ) : (
            <Nav.Link className="navs" href="">
              <Link
                style={{ color: "greenyellow", textDecoration: "none" }}
                to="/getStarted"
              >
                Log In
              </Link>
            </Nav.Link>
          )}
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
