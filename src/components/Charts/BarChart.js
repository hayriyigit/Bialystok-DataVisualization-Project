import React, { useState, useContext } from "react";
import { ChartContext } from "../../context/ChartContext";
import { DataContext } from "../../context/DataContext";
import {column} from 'mathjs';

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

import P5Wrapper from "react-p5-wrapper";
import BarSketch from "../../sketches/BarSketch";

import "../../CSS/Navbar.css";
const BarChart = (props) => {
  let xValues = [];
  let yValues = [];

  const [modal, setModal] = useState(props.modal);
  const context = useContext(DataContext);
  const chartOps = useContext(ChartContext)
  if(context.filterData.get.data){
    let data = context.filterData.get.data
    let header = context.filterData.get.headers
    for(let i = 0; i < data.length; i++){
      xValues.push(column(data,header.indexOf(chartOps.xAxis.get))[i][0])
      yValues.push(column(data,header.indexOf(chartOps.yAxis.get))[i][0])
    }
  }else{
    for (let attr of context.csvFile.get.body) {
      xValues.push(attr[chartOps.xAxis.get]);
      yValues.push(attr[chartOps.yAxis.get]);
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
        Some Chart Settings
        <div>
          <P5Wrapper
            sketch={BarSketch}
            dataX={xValues}
            dataY={yValues}
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
