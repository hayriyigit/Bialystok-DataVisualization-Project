import React, { useState } from "react";
import ModalRender from "./ModalRender";

import "../CSS/NavDrop.css";
const NavDropdown = (props) => {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false)
  const [chartType, setChartType] = useState('')

  const swapShow = () => {
    setShow((prevState) => !prevState);
  };
  const handleModal = (e) => {
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
