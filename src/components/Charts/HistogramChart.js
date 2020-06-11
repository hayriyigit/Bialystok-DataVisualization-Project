import React, { useState, useContext } from "react";
import { ChartContext } from "../../context/ChartContext";
import { DataContext } from "../../context/DataContext";

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

import P5Wrapper from "react-p5-wrapper";
import HistogramSketch from "../../sketches/HistogramSketch";

import "../../CSS/Navbar.css";
const BarChart = (props) => {
  let xValues = [];
  let yValues = [];

  const [modal, setModal] = useState(props.modal);
  const context = useContext(DataContext);
  const chartOps = useContext(ChartContext);

  let nullObj = {}
  for (let attr of context.csvFile.get.body) {
    let arrOfKeys = Object.keys(nullObj)
    
    if (!arrOfKeys.includes(attr[chartOps.xAxis.get])) {
      let val = attr[chartOps.xAxis.get]
      nullObj[val] = 1
      xValues.push(attr[chartOps.xAxis.get]);
      
    } else {
      let value = nullObj[attr[chartOps.xAxis.get]]
      value += 1
      let key = attr[chartOps.xAxis.get]
      nullObj[key] = value
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
        <ModalTitle>Histogram Chart</ModalTitle>
      </ModalHeader>
      <ModalBody>

        <div>
          <P5Wrapper
            sketch={HistogramSketch}
            dataX={xValues}
            jsonObject={nullObj}
            labelX={chartOps.xAxis.get}
            labelY={chartOps.yAxis.get}
            color={(255, 0, 0)}
          ></P5Wrapper>
        </div>
      </ModalBody>
      <ModalFooter>This is the footer</ModalFooter>
    </Modal>
  );
};

export default BarChart;
