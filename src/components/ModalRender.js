import React, { Component } from "react";
import { BarChartModal, HistogramModal, LineChartModal, PieChartModal} from "./Modals";

export default class ModalRender extends Component {
  render() {
    switch (this.props.chart) {
      case "Bar Chart":
        return (
          <BarChartModal show={this.props.show} onHide={this.props.onHide} />
        );
        break;
      case "Histogram":
        return (
          <HistogramModal show={this.props.show} onHide={this.props.onHide} />
        );
        break;
      case "Line Chart":
        return (
          <LineChartModal show={this.props.show} onHide={this.props.onHide} />
        );
        break;
      case "Pie Chart":
        return (
          <PieChartModal show={this.props.show} onHide={this.props.onHide} />
        );
        break;

      default:
        return null;
    }
  }
}
