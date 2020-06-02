import React from "react";
import NavDropdown from "./NavDropdown";

import "../CSS/Navbar.css";
const Navbar = () => (
  <div className="navbar">
    <NavDropdown title={"File"} options={["Save", "New"]}></NavDropdown>
    <NavDropdown
      title={"Charts"}
      options={["Bar Chart", "Histogram", "Line Chart", "Pie Chart"]}
    ></NavDropdown>
  </div>
)

export default Navbar