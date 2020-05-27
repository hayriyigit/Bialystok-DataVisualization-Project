import React from "react";
import {
  BarChartModal,
  HistogramModal,
  LineChartModal,
  PieChartModal,
} from "./Modals";

const ModalRender = props => {

  switch (props.chartType) {
    case "Bar Chart":
      return (
        <BarChartModal modal={props.modal} toggleModal={props.toggleModal}/>
      );

    case "Histogram":
      return (
        <HistogramModal modal={props.modal} toggleModal={props.toggleModal}/>
      );

    case "Line Chart":
      return <LineChartModal modal={props.modal} toggleModal={props.toggleModal}/>;

    case "Pie Chart":
      return (
        <PieChartModal modal={props.modal} toggleModal={props.toggleModal}/>
      );

    default:
      return null;
  }
};

export default ModalRender;
