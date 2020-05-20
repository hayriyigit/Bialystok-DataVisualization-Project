import React, { Component } from "react"
import '../CSS/Navbar.css'
import NavDropdown from './NavDropdown'
export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <NavDropdown title={"File"} options={["Save","New"]}></NavDropdown>
                <NavDropdown title={"Charts"} options={["Bar Chart", "Histogram","Line Chart","Pie Chart"]}></NavDropdown>
            </div>
        )
    }
}