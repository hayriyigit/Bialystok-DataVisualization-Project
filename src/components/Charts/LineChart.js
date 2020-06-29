import React, { useState, useContext } from "react";
import { ChartContext } from "../../context/ChartContext";
import { DataContext } from "../../context/DataContext";

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalTitle from "react-bootstrap/ModalTitle";

import P5Wrapper from "react-p5-wrapper";
import LineSketch from "../../sketches/LineSketch";

import "../../CSS/Navbar.css";
const LineChart = (props) => {
  let data = [];

  const [modal, setModal] = useState(props.modal);
  const context = useContext(DataContext);
  const chartOps = useContext(ChartContext);

  for (let attr of context.csvFile.get.body) {
    let val = parseFloat(attr[chartOps.catVars.get]);
    if (isNaN(val)) {
      continue;
    } else {
      data.push(val);
    }
  }

  return (
    <Modal
      show={modal}
      onHide={() => {
        chartOps.isPlot.set((prevState) => !prevState);
        setModal((prevState) => !prevState);
      }}
    >
      <ModalHeader>
        <ModalTitle>BarChart</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <div>
          <P5Wrapper
            sketch={LineSketch}
            data={data}
            label={chartOps.catVars.get}
            color={(255, 0, 0)}
          ></P5Wrapper>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default LineChart;
