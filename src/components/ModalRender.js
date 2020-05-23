import React, { Component } from "react";
import { BarChartModal, HistogramModal, LineChartModal, PieChartModal} from "./Modals";

export default class ModalRender extends Component {
  render() {
    switch (this.props.chart) {
      case "Bar Chart":
        return (
          <BarChartModal show={this.props.show} onHide={this.props.onHide} />
        );
        
      case "Histogram":
        return (
          <HistogramModal show={this.props.show} onHide={this.props.onHide} />
        );
        
      case "Line Chart":
        return (
          <LineChartModal show={this.props.show} onHide={this.props.onHide} />
        );
        
      case "Pie Chart":
        return (
          <PieChartModal show={this.props.show} onHide={this.props.onHide} />
        );
        

      default:
        return null;
    }
  }
}
