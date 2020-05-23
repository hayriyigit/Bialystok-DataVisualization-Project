import React from 'react'
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

export const BarChartModal = (props) => (
  <Modal show={props.show} onHide={props.onHide}>
    <ModalHeader>
      <ModalTitle>Bar Chart</ModalTitle>
    </ModalHeader>
    <ModalBody>Some Chart Settings</ModalBody>
    <ModalFooter>This is the footer</ModalFooter>
  </Modal>
);

export const HistogramModal = (props) => (
  <Modal show={props.show} onHide={props.onHide}>
    <ModalHeader>
      <ModalTitle>HistogramModal</ModalTitle>
    </ModalHeader>
    <ModalBody>Some Chart Settings</ModalBody>
    <ModalFooter>This is the footer</ModalFooter>
  </Modal>
);

export const LineChartModal = (props) => (
  <Modal show={props.show} onHide={props.onHide}>
    <ModalHeader>
      <ModalTitle>LineChartModal</ModalTitle>
    </ModalHeader>
    <ModalBody>Some Chart Settings</ModalBody>
    <ModalFooter>This is the footer</ModalFooter>
  </Modal>
);

export const PieChartModal = (props) => (
  <Modal show={props.show} onHide={props.onHide}>
    <ModalHeader>
      <ModalTitle>PieChartModal</ModalTitle>
    </ModalHeader>
    <ModalBody>Some Chart Settings</ModalBody>
    <ModalFooter>This is the footer</ModalFooter>
  </Modal>
);
