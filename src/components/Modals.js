import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import BarChartForm from "./Forms/BarChartForm";
import HistogramForm from "./Forms/HistogramForm";
import LineChartForm from "./Forms/LineChartForm";
import PieChartForm from "./Forms/PieChartForm";

export const BarChartModal = (props) => {
  return (
    <Modal show={props.modal} onHide={props.toggleModal}>
      <ModalHeader>
        <ModalTitle>Bar Chart</ModalTitle>
      </ModalHeader>
      <ModalBody>
        Some Chart Settings
        <div>
          <BarChartForm onHide={props.toggleModal}/>
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
          <HistogramForm onHide={props.toggleModal}/>
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
          <LineChartForm onHide={props.toggleModal} />
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
        <PieChartForm onHide={props.toggleModal} />
      </div>
    </ModalBody>
    <ModalFooter>This is the footer</ModalFooter>
  </Modal>
);
