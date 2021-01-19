import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const SingleDetail = (props) => {
  const { _id, ic, type, name, email, phone } = props.user;
  const [loggedInUser, , , , isLeader] = useContext(UserContext);

  const deleteResident = (_id) => {
    fetch(
      `https://resident-information-system.herokuapp.com/deleteResident/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((result) => {
        //alert("Resident deleted successfully");
      });
    alert("Resident deleted successfully");
    window.location.reload();
  };

  return (
    <Card
      style={{
        width: "24rem",
        height: "15rem",
        display: "inline-block",
        margin: "20px 0 20px 55px",
        boxShadow: "5px 2px 10px lightgrey",
      }}
    >
      <Card.Body>
        <Card.Title>Name: {name}</Card.Title>
        <Card.Text>
          <b>IC No:</b> {ic} <br />
          <b>Type:</b> {type} <br />
          <b>Email:</b> {email} <br />
          <b>Phone:</b> {phone} <br />
        </Card.Text>
        {/* <Link to={`/viewResident/${_id}`}>
          <Button variant="info">View Full Details</Button>
        </Link> */}

        {isLeader ? (
          <>
            <Link to={`/viewResident/${_id}`}>
              <Button variant="info">View Full Details</Button>
            </Link>

            <Button
              onClick={() => deleteResident(_id)} // to avoid multiple click at the same time
              className="ml-4"
              variant="danger"
            >
              Delete Resident
            </Button>
          </>
        ) : (
          <>
            {loggedInUser.email === email ? (
              <>
                <Link to={`/viewResident/${_id}`}>
                  <Button variant="info">View Full Details</Button>
                </Link>

                <Button
                  onClick={() => deleteResident(_id)} // to avoid multiple click at the same time
                  className="ml-4"
                  variant="danger"
                >
                  Delete Resident
                </Button>
              </>
            ) : (
              <>
                <Link to={`/viewResident/${_id}`}>
                  <Button variant="info" disabled>
                    View Full Details
                  </Button>
                </Link>

                <Button
                  onClick={() => deleteResident(_id)} // to avoid multiple click at the same time
                  className="ml-4"
                  variant="danger"
                  disabled
                >
                  Delete Resident
                </Button>
              </>
            )}
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default SingleDetail;
