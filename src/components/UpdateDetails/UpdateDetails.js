import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SaveIcon from "@material-ui/icons/Save";
import { Button } from "@material-ui/core";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./UpdateDetails.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UpdateDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const { register, handleSubmit, errors } = useForm();
  const [isOrphan, setIsOrphan] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const year = user.name && user.DOB.slice(0, 4);
  const month = user.name && user.DOB.slice(5, 7);
  const day = user.name && user.DOB.slice(8, 10);
  let myDate = new Date(year, month, day);

  useEffect(() => {
    const url = `https://resident-information-system.herokuapp.com/resident/${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setIsOrphan(data.orphan);
      });
  }, [id]);

  const onSubmit = (data) => {
    data.DOB = selectedDate ? selectedDate : myDate;
    data.salary = `RM ${data.salary}`;
    data.houseRent = `RM ${data.houseRent}`;
    data.orphan = isOrphan;

    fetch(
      `https://resident-information-system.herokuapp.com/updateResident/${id}`,
      {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("updated");
      });
    alert("Your New Details has been Updated successfully");
    window.location.reload();
  };

  return (
    <div className="col-md-11 ml-5">
      <Card style={{ margin: "110px 0 30px 0" }}>
        <Card.Body>
          <Card.Text style={{ textAlign: "center" }}>
            <h3>Update {user.name}'s Details</h3>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card
        bg={"dark"}
        text={"white"}
        style={{ textAlign: "center" }}
        className="mb-2 "
      >
        <Card.Header>
          <p>Please follow the Placeholder format while Updating Details</p>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h5>
                <input
                  name="ic"
                  placeholder="IC/Passport Number"
                  defaultValue={user.ic}
                  ref={register({ required: true })}
                />
              </h5>
              {errors.ic && <span className="error">IC is required</span>}
              <br />

              <div className="d-flex" style={{ marginLeft: "525px" }}>
                <h5 style={{ color: "lightgrey" }} className="pr-4">
                  <b>Member Type :</b>
                </h5>
                <select style={{ height: "30px" }} name="type" ref={register}>
                  <option value="Resident">Resident</option>
                  <option value="Leader">Leader</option>
                </select>
              </div>
              <br />

              <h4>
                <input
                  name="name"
                  placeholder="Your Name"
                  defaultValue={user.name}
                  ref={register({
                    pattern: /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/,
                  })}
                />
              </h4>
              {errors.name && <span className="error">Name is required</span>}
              <br />

              <h5>
                <input
                  name="email"
                  placeholder="Your Email (e.g: example@gmail.com)"
                  defaultValue={user.email}
                  ref={register({ required: true })}
                />
              </h5>
              {errors.name && <span className="error">Email is required</span>}
              <br />

              <h5>
                <input
                  name="address"
                  placeholder="Address"
                  defaultValue={user.address}
                  ref={register({ required: true })}
                />
              </h5>
              {errors.name && (
                <span className="error">Address is required</span>
              )}
              <br />

              <h5>
                <input
                  name="phone"
                  placeholder="Phone Number: More than 9 digits"
                  defaultValue={user.phone}
                  ref={register({ minLength: 10 })}
                />
              </h5>
              {errors.name && (
                <span className="error">Phone Number is required</span>
              )}
              <br />

              <div style={{ width: "100px", marginLeft: "485px" }}>
                <DatePicker
                  selected={user.name && (selectedDate ? selectedDate : myDate)}
                  onChange={(date) => setSelectedDate(date)}
                  //dateFormat="dd/MM/yyyy"
                  maxDate={new Date()}
                  isClearable
                  showYearDropdown
                  scrollableMonthYearDropdown
                  placeholderText="Date of Birth"
                />
              </div>
              <br />

              <div className="d-flex">
                <h5
                  style={{ color: "lightgrey", marginLeft: "525px" }}
                  className="pr-4"
                >
                  <b>Gender :</b>
                </h5>
                <select style={{ height: "30px" }} name="gender" ref={register}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <br />

              <h5>
                <input
                  name="blood"
                  placeholder="Blood Group"
                  defaultValue={user.blood}
                  ref={register({ required: true })}
                />
              </h5>
              {errors.blood && (
                <span className="error">Blood Group is required</span>
              )}
              <br />

              <h5>
                <input
                  name="nationality"
                  placeholder="Your Name"
                  defaultValue={user.nationality}
                  ref={register({ required: true })}
                />
              </h5>
              {errors.nationality && (
                <span className="error">Nationality is required</span>
              )}
              <br />

              <div className="d-flex">
                <h5
                  style={{ color: "lightgrey", marginLeft: "525px" }}
                  className="pr-4"
                >
                  <b>Marital Status :</b>
                </h5>
                <select
                  style={{ height: "30px" }}
                  name="maritalStatus"
                  ref={register}
                >
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </select>
              </div>
              <br />

              <h5>
                <input
                  name="kids"
                  placeholder="Number of Kids"
                  defaultValue={user.kids}
                  ref={register({ validate: (value) => value >= 0 })}
                />
              </h5>
              {errors.kids && <span className="error">Kids is required</span>}
              <br />

              <h5>
                <input
                  name="religion"
                  placeholder="Religion"
                  defaultValue={user.religion}
                  ref={register({ required: true })}
                />
              </h5>
              {errors.religion && (
                <span className="error">Religion is required</span>
              )}
              <br />

              <h5>
                <input
                  name="occupation"
                  placeholder="Occupation"
                  defaultValue={user.occupation}
                  ref={register({ required: true })}
                />
              </h5>
              {errors.occupation && (
                <span className="error">Occupation is required</span>
              )}
              <br />

              <h5>
                <input
                  name="salary"
                  type="number"
                  placeholder="Monthly Salary (e.g: 500)"
                  defaultValue={user.name && Number(user.salary.slice(2))}
                  ref={register({ validate: (value) => value >= 0 })}
                />
              </h5>
              {errors.salary && (
                <span className="error">Monthly Salary is required</span>
              )}
              <br />

              <div className="d-flex">
                <h5
                  style={{ color: "lightgrey", marginLeft: "525px" }}
                  className="pr-4"
                >
                  <b>House Type :</b>
                </h5>
                <select
                  style={{ height: "30px" }}
                  name="houseType"
                  ref={register}
                >
                  <option value="Rental">Rental</option>
                  <option value="Own">Own</option>
                </select>
              </div>
              <br />

              <h5>
                <input
                  name="houseRent"
                  type="number"
                  placeholder="House Rent (e.g: 1000)"
                  defaultValue={user.name && Number(user.houseRent.slice(2))}
                  ref={register({ validate: (value) => value >= 0 })}
                />
              </h5>
              {errors.houseRent && (
                <span className="error">House Rent is required</span>
              )}
              <br />

              <div className="d-flex">
                <h5
                  style={{ color: "lightgrey", marginLeft: "525px" }}
                  className="pr-3 pt-3"
                >
                  <b>Orphan :</b>
                </h5>
                <div
                  className="d-flex"
                  style={{ width: "100px", height: "10px" }}
                >
                  <input
                    type="radio"
                    name="orphan"
                    value="Yes"
                    checked={user.name && (isOrphan === "Yes" ? true : false)}
                    onClick={() => setIsOrphan("Yes")}
                  />
                  <span style={{ color: "white" }}>Yes</span>
                  <input
                    type="radio"
                    name="orphan"
                    value="No"
                    checked={user.name && (isOrphan === "No" ? true : false)}
                    onClick={() => setIsOrphan("No")}
                  />
                  <span style={{ color: "white" }}>No</span>
                </div>
              </div>
              {errors.orphan && (
                <span className="error">Orphan is required</span>
              )}
              <br />

              <Button
                type="submit"
                size="large"
                variant="contained"
                color="primary"
                className="mr-3 mt-2"
                startIcon={<SaveIcon />}
              >
                Update Details
              </Button>
            </form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UpdateDetails;
