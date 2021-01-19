import React from "react";

const NoMatch = () => {
  const divStyle = {
    color: "red",
    marginTop: "250px",
  };
  return (
    <div style={divStyle} className="text-center">
      <h1> ERROR 404 - Not Found !!! </h1>
      <h4>The Route is not Valid</h4>
      <span style={{ fontSize: "150px" }}>&#128533;</span>
    </div>
  );
};

export default NoMatch;
