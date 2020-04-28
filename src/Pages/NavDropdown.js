import React, { Component } from 'react'
import '../CSS/NavDrop.css'
export default class NavDropdown extends Component {
    render() {
        return (
            <div className={this.props.show ? "dropdown-content" : "noshow"}>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        )
    }
}