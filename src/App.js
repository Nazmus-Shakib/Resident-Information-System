import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllDetails from "./components/AllDetails/AllDetails";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LogIn from "./components/LogIn/LogIn";
import NoMatch from "./components/NoMatch/NoMatch";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import SingleFullDetails from "./components/SingleFullDetails/SingleFullDetails";
import SubmitDetails from "./components/SubmitDetails/SubmitDetails";
import UpdateDetails from "./components/UpdateDetails/UpdateDetails";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [users, setUsers] = useState([]);
  const [isLeader, setIsLeader] = useState(false);

  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    if (userInfo) {
      setLoggedInUser(userInfo);

      fetch(
        "https://resident-information-system.herokuapp.com/isLeader?email=" +
          loggedInUser.email
      )
        .then((response) => response.json())
        .then((data) => {
          setIsLeader(data);
        });
    }
  }, [loggedInUser?.email]);

  return (
    <UserContext.Provider
      value={[loggedInUser, setLoggedInUser, users, setUsers, isLeader]}
    >
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
            <Footer></Footer>
          </Route>

          <Route path="/getStarted">
            <GetStarted></GetStarted>
            <Footer></Footer>
          </Route>

          <Route path="/login">
            <LogIn></LogIn>
          </Route>

          <Route path="/contactUs">
            <ContactUs></ContactUs>
          </Route>

          <PrivateRoute path="/submitDetails">
            <SubmitDetails></SubmitDetails>
          </PrivateRoute>

          <PrivateRoute path="/allDetails">
            <AllDetails></AllDetails>
            <Footer></Footer>
          </PrivateRoute>

          <PrivateRoute path="/viewResident/:id">
            <SingleFullDetails></SingleFullDetails>
            <Footer></Footer>
          </PrivateRoute>

          <PrivateRoute path="/editResident/:id">
            <UpdateDetails></UpdateDetails>
            <Footer></Footer>
          </PrivateRoute>

          <Route exact path="/">
            <Home></Home>
            <Footer></Footer>
          </Route>

          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
