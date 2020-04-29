import React, { Component } from "react"
import '../CSS/Navbar.css'
import NavDropdown from './NavDropdown'
export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <NavDropdown title={"Graphs"} options={["A", "B","C"]}></NavDropdown>
                <NavDropdown title={"Other option"} options={["A", "B","C"]}></NavDropdown>
            </div>
        )
    }
}