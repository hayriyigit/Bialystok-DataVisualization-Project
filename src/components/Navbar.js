import React from "react";
import NavDropdown from "./NavDropdown";
import { ChartProvider } from "../context/ChartContext";

import "../CSS/Navbar.css";
const Navbar = () => (
  <ChartProvider>
    <div className="navbar">
      <NavDropdown title={"File"} options={["Save", "New"]}></NavDropdown>
      <NavDropdown
        title={"Charts"}
        options={["Bar Chart", "Histogram", "Line Chart", "Pie Chart"]}
      ></NavDropdown>
    </div>
  </ChartProvider>
);

export default Navbar;
