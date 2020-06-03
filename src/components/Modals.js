import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import P5Wrapper from "react-p5-wrapper";
import sketch from "../components/sketch";

import BarChartForm from "./Forms/BarChartForm";

export const BarChartModal = (props) => {
  return (
    <Modal show={props.modal} onHide={props.toggleModal}>
      <ModalHeader>
        <ModalTitle>Bar Chart</ModalTitle>
      </ModalHeader>
      <ModalBody>
        Some Chart Settings
        <div>
          <P5Wrapper sketch={sketch} color={(255, 0, 0)}></P5Wrapper>
        </div>
      </ModalBody>
      <ModalFooter>This is the footer</ModalFooter>
    </Modal>
  );
};

export const HistogramModal = (props) => (
  <Modal show={props.modal} onHide={props.toggleModal}>
    <ModalHeader>
      <ModalTitle>HistogramModal</ModalTitle>
    </ModalHeader>
    <ModalBody>
      Some Chart Settings
      <div>
        <P5Wrapper sketch={sketch} color={(255, 0, 0)}></P5Wrapper>
      </div>
    </ModalBody>
    <ModalFooter>This is the footer</ModalFooter>
  </Modal>
);

export const LineChartModal = (props) => {
  
  return (
    <Modal show={props.modal} onHide={props.toggleModal}>
      <ModalHeader>
        <ModalTitle>LineChartModal</ModalTitle>
      </ModalHeader>
      <ModalBody>
        Some Chart Settings
        <div>
          <BarChartForm onHide={props.toggleModal}/>
        </div>
      </ModalBody>
    </Modal>
  );
};

export const PieChartModal = (props) => (
  <Modal show={props.modal} onHide={props.toggleModal}>
    <ModalHeader>
      <ModalTitle>PieChartModal</ModalTitle>
    </ModalHeader>
    <ModalBody>
      Some Chart Settings
      <div>
        <P5Wrapper sketch={sketch} color={(255, 0, 0)}></P5Wrapper>
      </div>
    </ModalBody>
    <ModalFooter>This is the footer</ModalFooter>
  </Modal>
);

export const Plot = (props) => (
  <Modal show={props.modal} onHide={props.toggleModal}>
    <ModalHeader>
      <ModalTitle>LineChartModal</ModalTitle>
    </ModalHeader>
    <ModalBody></ModalBody>
  </Modal>
);
