import React, { useState, useContext } from "react";
import { ChartContext } from "../../context/ChartContext";
import { DataContext } from "../../context/DataContext";
import { column } from 'mathjs';

import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
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
  if (context.filterData.get.data) {
    let data = context.filterData.get.data
    let header = context.filterData.get.headers
    for (let i = 0; i < data.length; i++) {
      let xValue = column(data, header.indexOf(chartOps.xAxis.get))[i][0]
      if(xValue){
        xValues.push(column(data, header.indexOf(chartOps.xAxis.get))[i][0])
      } else{
        continue
      }
      
      let val = column(data, header.indexOf(chartOps.yAxis.get))[i][0]

      if (isNaN(parseFloat(val))) {
        continue
      } else {
        if (val) {
          yValues.push(column(val))
        } else {
          continue
        }

      }

    }
  } else {
    for (let attr of context.csvFile.get.body) {
      let xValue = attr[chartOps.xAxis.get]
      if(xValue){
        xValues.push(attr[chartOps.xAxis.get]);
      } else{
        continue
      }
      
      let val = attr[chartOps.yAxis.get]
      if (isNaN(parseFloat(val))) {
        continue
      } else {
        if (val) {
          yValues.push(val);
        } else {
          continue
        }

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
        <ModalTitle>Bar chart</ModalTitle>
      </ModalHeader>
      <ModalBody>
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
    </Modal>
  );
};

export default BarChart;
