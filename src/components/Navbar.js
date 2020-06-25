import React from "react";
import NavDropdown from "./NavDropdown";
import { ChartProvider } from "../context/ChartContext";

import "../CSS/Navbar.css";
class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state={}
  }
  render() {
    return (
      <ChartProvider>
        <div className="navbar">
          <NavDropdown saveFile={this.props.saveFile} title={"File"} options={["New", "Save"]}></NavDropdown>
          <NavDropdown
            title={"Charts"}
            options={["Bar Chart", "Histogram", "Line Chart", "Pie Chart"]}
          ></NavDropdown>
        </div>
      </ChartProvider>
    )
  }

}
export default Navbar;
