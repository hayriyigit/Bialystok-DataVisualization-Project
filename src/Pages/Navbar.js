import React, { Component } from "react"
import '../CSS/Navbar.css'
import NavDropdown from './NavDropdown'
export default class Navbar extends Component {
    constructor(props){
        super(props)
        this.swapShow = this.swapShow.bind(this);
        this.state = {show: false}

    }
    swapShow() {
        this.setState((prevState) => ({ show: !prevState.show }))
    }
    render() {
        return (
            <div className="navbar">
                    <div className="dropdown">
                        <button onClick={this.swapShow} className="dropbtn">Link
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <NavDropdown show={this.state.show}></NavDropdown>
                    </div>
                    
            </div>
        )
    }
}