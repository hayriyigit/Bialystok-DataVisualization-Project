import React, { Component } from 'react'
import '../CSS/NavDrop.css'
import ModalRender from './ModalRender'
export default class NavDropdown extends Component {
    state = {
        show: false,
        modal: false,
        chartType: null
    }
    
    swapShow = () => {
        this.setState((prevState) => ({ show: !prevState.show }))
    }
    handleModal = (e) => {
       this.setState({
           chartType: e ? e.target.id : this.state.chartType,
           modal: !this.state.modal
       })
    }
    render() {
        
        return (
            <div className="dropdown">
                <button onClick={this.swapShow} className="dropbtn">{this.props.title}
                            <i className="fa fa-caret-down"></i>
                </button>
                <div className={this.state.show ? "dropdown-content" : "noshow"}>
                    {this.props.options.map((opt) => {
                        return(
                        <button key={opt} id={opt} onClick={this.handleModal}>{opt}</button>
                        ) 
                        })}
                </div>
                
                <ModalRender data = {this.props.data} headers = {this.props.headers}  show={this.state.modal} onHide={this.handleModal} chart = {this.state.chartType} />
            </div>
        )
    }
}