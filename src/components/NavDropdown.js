import React, { useState, useContext } from "react";
import ModalRender from "./ModalRender";
import { useHistory } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import "../CSS/NavDrop.css";
const NavDropdown = (props) => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false)
  const [chartType, setChartType] = useState('')
  const history = useHistory();
  const dataContext = useContext(DataContext)
  const swapShow = () => {
    setShow((prevState) => !prevState);
  };
  const handleModal = (e) => {
    if(e.target.id === "Save"){
      props.saveFile()
    } else if(e.target.id === "New"){
      history.push("/");
      dataContext.csvFile.set(undefined)

    }
    setChartType(e ? e.target.id : chartType);
    setModal(prevState => !prevState);
  };
  return (
    <div className="dropdown">
      <button onClick={swapShow} className="dropbtn">
        {props.title}
      </button>
      <div className={show ? "dropdown-content" : "noshow"}>
        {props.options.map((opt) => {
          return (
            <button key={opt} id={opt} onClick={handleModal}>
              {opt}
            </button>
          );
        })}
      </div>

      <ModalRender
        modal={modal}
        chartType={chartType}
        toggleModal={handleModal}
       />
    </div>
  );
};

export default NavDropdown;
