import React, { useState, useContext } from "react";
import { ChartContext } from "../../context/ChartContext";
import { DataContext } from "../../context/DataContext";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

import P5Wrapper from "react-p5-wrapper";
import PieSketch from "../../sketches/PieSketch";

import "../../CSS/Navbar.css";
const PieChart = (props) => {
  const [modal, setModal] = useState(props.modal);
  const chartOps = useContext(ChartContext);
  const context = useContext(DataContext);
  let xValues = []
  let nullObj = {}
  if (context.filterData.get.data) {
    let indexOfHeader = null

    for (let attr of context.filterData.get.headers) {
      if (attr === chartOps.xAxis.get) {
        indexOfHeader = context.filterData.get.headers.indexOf(chartOps.xAxis.get)
        break
      }
    }
    for (let attrBody of context.filterData.get.data) {
      let arrOfKeys = Object.keys(nullObj)
      if (!arrOfKeys.includes(attrBody[indexOfHeader])) {
        let val = attrBody[indexOfHeader]
        if (val) {
          nullObj[val] = 1

          xValues.push(attrBody[indexOfHeader]);
        } else {
          continue
        }


      } else {
        let value = nullObj[attrBody[indexOfHeader]]
        value += 1
        let key = attrBody[indexOfHeader]
        nullObj[key] = value
      }
    }
  } else {
    for (let attr of context.csvFile.get.body) {
      let arrOfKeys = Object.keys(nullObj)
      if (!arrOfKeys.includes(attr[chartOps.xAxis.get])) {
        let val = attr[chartOps.xAxis.get]
        if (val) {
          nullObj[val] = 1

          xValues.push(attr[chartOps.xAxis.get]);
        } else {
          continue
        }

      } else {
        let value = nullObj[attr[chartOps.xAxis.get]]
        value += 1
        let key = attr[chartOps.xAxis.get]
        nullObj[key] = value
      }

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
        <ModalTitle>Pie Chart</ModalTitle>
      </ModalHeader>
      <ModalBody>

        <div>
          <P5Wrapper
            sketch={PieSketch}
            dataX={xValues}
            jsonObject={nullObj}
            labelX={chartOps.xAxis.get}
            labelY={chartOps.yAxis.get}
            color={(255, 0, 0)}
          ></P5Wrapper>
        </div>
      </ModalBody>
      <ModalFooter>Click outside this window to close it</ModalFooter>
    </Modal>
  );
};

export default PieChart;
