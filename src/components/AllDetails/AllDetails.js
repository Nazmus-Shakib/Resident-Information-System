import React, { useContext, useEffect, useState } from "react";
import SingleDetail from "../SingleDetail/SingleDetail";
import { useForm } from "react-hook-form";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { UserContext } from "../../App";
import "./AllDetails.css";

const AllDetails = () => {
  const [, , users, setUsers, isLeader] = useContext(UserContext);
  const [selectOption, setSelectedOption] = useState("name");
  const [customPlaceholder, setCustomerPlaceholder] = useState(
    "Type Full Name (e.g: Nur Ain)"
  );

  const handleDataLoad = () => {
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    if (userInfo) {
      fetch("https://resident-information-system.herokuapp.com/residents")
        .then((response) => response.json())
        .then((data) => {
          setUsers(data);
        });
    }
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (selectOption === "name") {
      const matchedDataName = users.filter(
        (item) => item.name.toUpperCase() === data.name.toUpperCase()
      );
      setUsers(matchedDataName);
    }

    if (selectOption === "blood") {
      const matchedData = users.filter(
        (item) => item.blood.toUpperCase() === data.name.toUpperCase()
      );
      setUsers(matchedData);
    }

    if (selectOption === "salary") {
      const matchedData = users.filter(
        (item) => Number(item.salary.slice(3)) <= Number(data.name.slice(2))
      );

      if (matchedData.length === 0) {
        const matchedData02 = users.filter(
          (item) =>
            Number(item.salary.split(" ")[1]) <= Number(data.name.split(" ")[1])
        );
        setUsers(matchedData02);
      }

      // if (matchedData.length > 0) {
      //   console.log(matchedData);
      //   setUsers(matchedData);
      // }
      setUsers(matchedData);
    }
  };

  const handleChange = (e) => {
    setSelectedOption(e.target.value);

    if (e.target.value === "name") {
      setCustomerPlaceholder("Type Full Name (e.g: Nur Ain)");
      handleDataLoad();
    }

    if (e.target.value === "blood") {
      setCustomerPlaceholder("Type Blood Group (e.g: B+)");
      handleDataLoad();
    }

    if (e.target.value === "salary") {
      setCustomerPlaceholder("Type Salary (e.g: RM 1000)");
      handleDataLoad();
    }
  };

  const handleOnChange = (e) => {
    if (e.target.value === "") {
      handleDataLoad();
    }
  };

  useEffect(() => {
    handleDataLoad();
  }, []);

  return (
    <div style={{ backgroundColor: "lightcyan" }} className="pt-5">
      <div>
        <div className=" row pb-3">
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="residentNo d-flex">
              <h3>Total Resident: {users.length}</h3>
              <Button
                className="ml-3"
                size="small"
                variant="contained"
                color="default"
                href="/submitDetails"
                endIcon={<PersonAddIcon />}
              >
                Add Record
              </Button>
            </div>
          </div>

          <div className="col-lg-7 col-md-7 col-sm-12">
            <div className="form_container">
              {isLeader === true && (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row d-flex align-items-center">
                    <div className="col-md-3">
                      <span>
                        <b>Search by: </b>
                      </span>
                      <select onChange={handleChange} name="name01">
                        <option value="name">Name</option>
                        <option value="blood">Blood</option>
                        <option value="salary">Salary</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <input
                        style={{ width: "110%" }}
                        name="name"
                        placeholder={customPlaceholder}
                        onChange={handleOnChange}
                        ref={register({ required: true })}
                      />
                    </div>
                    <div className="col-md-2">
                      <Button
                        type="submit"
                        size="medium"
                        variant="contained"
                        color="primary"
                        endIcon={<SearchIcon />}
                      >
                        Search
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="ml-4">
        {users.map((user) => (
          <SingleDetail user={user}></SingleDetail>
        ))}
      </div>
    </div>
  );
};

export default AllDetails;
