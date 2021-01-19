import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import { Button } from "@material-ui/core";
import { Card } from "react-bootstrap";
import { UserContext } from "../../App";

const SingleFullDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [loggedInUser, , , , isLeader] = useContext(UserContext);

  useEffect(() => {
    const url = `https://resident-information-system.herokuapp.com/resident/${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, [id]);

  return (
    <div style={{ margin: "80px 0px 20px 0px" }} className="col-md-11 ml-5">
      <Card style={{ margin: "110px 0 30px 0" }}>
        {/* <Card.Img
          variant="top"
          style={{ width: "400px", height: "350px", margin: "auto" }}
          // src={user.picture && user.picture.large}
        /> */}
        <Card.Body>
          <Card.Text style={{ textAlign: "center" }}>
            <h2>{user.name}'s Profile </h2>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        bg={"dark"}
        text={"white"}
        style={{ textAlign: "center" }}
        className="mb-2"
      >
        <Card.Header>
          <h4>IC Number: {user.ic}</h4>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <h1>Name: {user.name}</h1>
          </Card.Title>
          <Card.Text>
            <h4>Type : {user.type}</h4>
            <h3>Email : {user.email}</h3>
            <h3>Address : {user.address}</h3>
            <h4>Phone : {user.phone}</h4>

            <h4>
              Date of Birth :{" "}
              {new Date(user.DOB).toDateString("dd/MM/yyyy").slice(4)}
            </h4>
            <h5 className="mt-5">
              Gender : <small>{user.gender}</small>
            </h5>
            <h5>
              Blood Group : <small>{user.blood}</small>
            </h5>
            <h5>
              Nationality : <small>{user.nationality}</small>
            </h5>
            <h5>
              Marital Status : <small>{user.maritalStatus}</small>
            </h5>
            <h5>
              Number of Kids : <small>{user.kids}</small>
            </h5>
            <h5>
              Religion : <small> {user.religion}</small>
            </h5>
            <h5>
              Occupation : <small>{user.occupation}</small>
            </h5>
            <h5>
              Monthly Salary : <small>{user.salary}</small>
            </h5>
            <h5>
              House Type : <small>{user.houseType}</small>
            </h5>
            <h5>
              House Rent : <small>{user.houseRent}</small>
            </h5>
            <h5>
              Orphan : <small>{user.orphan}</small>
            </h5>

            {isLeader ? (
              <>
                <Link to={`/editResident/${id}`}>
                  <Button
                    size="large"
                    variant="contained"
                    color="default"
                    className="mr-3 mt-5"
                    startIcon={<EditIcon />}
                  >
                    Edit Details
                  </Button>
                </Link>
              </>
            ) : (
              <>
                {loggedInUser.email === user.email && (
                  <>
                    <Link to={`/editResident/${id}`}>
                      <Button
                        size="large"
                        variant="contained"
                        color="default"
                        className="mr-3 mt-5"
                        startIcon={<EditIcon />}
                      >
                        Edit Details
                      </Button>
                    </Link>
                  </>
                )}
              </>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleFullDetails;
