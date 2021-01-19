import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import "./SubmitDetails.css";
import banner from "../../images/bg-image.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SubmitDetails = () => {
  const [loggedInUser] = useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const [selectedDate, setSelectedDate] = useState(null);

  const onSubmit = (data) => {
    data.DOB = selectedDate;
    data.salary = `RM ${data.salary}`;
    data.houseRent = `RM ${data.houseRent}`;

    if (selectedDate) {
      fetch("https://resident-information-system.herokuapp.com/submitDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      alert("Your Details has been Posted Successfully");
      window.location.reload();
    }
  };

  return (
    <div>
      <img style={{ width: "100%" }} src={banner} alt="" />
      <div>
        <form
          className="details-form justify-content-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 style={{ color: "LightGray", padding: "70px 0 0px 0px" }}>
            Submit Personal Details
          </h1>
          <p style={{ color: "white" }}>
            Please follow the placeholder format to submit Details
          </p>

          <div className="d-flex ">
            <div className="col-md-6 mr-5">
              <input
                name="ic"
                placeholder="IC / Passport Number"
                ref={register({ required: true })}
              />

              <div className="d-flex">
                <h5 style={{ color: "lightgrey" }} className="pr-4">
                  <b>Member Type :</b>
                </h5>
                <select style={{ height: "30px" }} name="type" ref={register}>
                  <option value="Resident">Resident</option>
                  <option value="Leader">Leader</option>
                </select>
              </div>

              <input
                name="name"
                placeholder="Your Full Name (e.g: Nur Ain)"
                defaultValue={loggedInUser.name}
                ref={register({
                  pattern: /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/,
                })}
              />

              <input
                name="email"
                placeholder="Email (e.g: example@gmail.com)"
                defaultValue={loggedInUser.email}
                ref={register({ required: true })}
              />

              <input
                name="address"
                placeholder="Home Address"
                ref={register({ required: true })}
              />

              <input
                name="phone"
                placeholder="Phone Number: More than 09 digits"
                ref={register({ minLength: 10 })}
              />

              <div style={{ width: "100px" }}>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  //dateFormat="dd/MM/yyyy"
                  maxDate={new Date()}
                  isClearable
                  showYearDropdown
                  scrollableMonthYearDropdown
                  placeholderText="Date of Birth"
                />
              </div>

              <div className="d-flex">
                <h5 style={{ color: "lightgrey" }} className="pr-4">
                  <b>Gender :</b>
                </h5>
                <select style={{ height: "30px" }} name="gender" ref={register}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <input
                name="blood"
                placeholder="Blood Group"
                ref={register({ required: true })}
              />
            </div>

            <div className="col-md-6 ml-5">
              <input
                name="nationality"
                placeholder="Nationality"
                ref={register({ required: true })}
              />

              <div className="d-flex">
                <h5 style={{ color: "lightgrey" }} className="pr-4">
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

              <input
                name="kids"
                placeholder="Number of Kids"
                ref={register({ validate: (value) => value >= 0 })}
              />

              <input
                name="religion"
                placeholder="Religion"
                ref={register({ required: true })}
              />

              <input
                name="occupation"
                placeholder="Occupation"
                ref={register({ required: true })}
              />

              <input
                name="salary"
                type="number"
                placeholder="Salary per Month (e.g: 1000)"
                ref={register({ validate: (value) => value >= 0 })}
              />

              <div className="d-flex">
                <h5 style={{ color: "lightgrey" }} className="pr-4">
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

              <input
                name="houseRent"
                type="number"
                placeholder="House Rent (e.g: 1000)"
                ref={register({ validate: (value) => value >= 0 })}
              />

              <div className="d-flex">
                <h5 style={{ color: "lightgrey" }} className="pr-3 pt-3">
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
                    ref={register({ required: true })}
                  />
                  <span style={{ color: "white" }}>Yes</span>
                  <input
                    type="radio"
                    name="orphan"
                    value="No"
                    ref={register({ required: true })}
                  />
                  <span style={{ color: "white" }}>No</span>
                </div>
              </div>
            </div>
          </div>

          <input
            style={{ marginLeft: "250px", backgroundColor: "MediumSlateBlue" }}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default SubmitDetails;
