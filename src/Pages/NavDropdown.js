import React, { Component } from 'react'
import '../CSS/NavDrop.css'
export default class NavDropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
        
    }
    
    swapShow = () => {
        this.setState((prevState) => ({ show: !prevState.show }))
    }
    render() {
        
        return (
            <div className="dropdown">
                <button onClick={this.swapShow} className="dropbtn">Graphs
                            <i className="fa fa-caret-down"></i>
                </button>
                <div className={this.state.show ? "dropdown-content" : "noshow"}>
                    {this.props.options.map((opt) => {return(<a href="#">{opt}</a>) })}
                </div>
            </div>
        )
    }
}