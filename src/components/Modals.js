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
        
        <div>
          <BarChartForm onHide={props.toggleModal}/>
        </div>
      </ModalBody>
      <ModalFooter>Click outside this window to close it.</ModalFooter>
    </Modal>
  );
};

export const HistogramModal = (props) => (
  <Modal show={props.modal} onHide={props.toggleModal}>
    <ModalHeader>
      <ModalTitle>Histogram chart settings</ModalTitle>
    </ModalHeader>
    <ModalBody>
    <h5>Choose a categorical variable!</h5>
      <div>
          <HistogramForm onHide={props.toggleModal}/>
      </div>
    </ModalBody>
    <ModalFooter>Click outside this window to close it.</ModalFooter>
  </Modal>
);

export const LineChartModal = (props) => {
  return (
    <Modal show={props.modal} onHide={props.toggleModal}>
      <ModalHeader>
        <ModalTitle>Line chart settings</ModalTitle>
      </ModalHeader>
      <ModalBody>
        
        <div>
          <LineChartForm onHide={props.toggleModal} />
        </div>
      </ModalBody>
      <ModalFooter>Click outside this window to close it.</ModalFooter>
    </Modal>
  );
};

export const PieChartModal = (props) => (
  <Modal show={props.modal} onHide={props.toggleModal}>
    <ModalHeader>
      <ModalTitle>Pie chart settings</ModalTitle>
    </ModalHeader>
    <ModalBody>
      
      <div>
        <PieChartForm onHide={props.toggleModal} />
      </div>
    </ModalBody>
    <ModalFooter>Click outside this window to close it.</ModalFooter>
  </Modal>
);
