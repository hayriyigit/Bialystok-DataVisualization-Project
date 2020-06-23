import React, { Fragment, useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { ChartContext } from "../../context/ChartContext";
import PieChart from "../Charts/PieChart";

const PieChartForm = (props) => {
  const context = useContext(DataContext);
  const chartOps = useContext(ChartContext);

  return (
    <Fragment>
      <form className="form-horizontal">
        <fieldset>
          <legend>Form Name</legend>
          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="selectbasic">
              Attribute
            </label>
            <div className="col-md-4">
              <select
                id="selectbasic"
                name="selectbasic"
                className="form-control"
                onChange={(e) => {
                  chartOps.xAxis.set(e.target.value)
                }}
              >
                {context.csvFile.get.head.map((header) => (
                  <option key={header} value={header}>{header}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="col-md-4 control-label" htmlFor="singlebutton"></label>
            <div className="col-md-4">
              <button
                id="singlebutton"
                name="singlebutton"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  chartOps.isPlot.set(prevState => !prevState)
                }}
              >
                Plot
              </button>
            </div>
          </div>
        </fieldset>
      </form>
      {chartOps.isPlot.get ? <PieChart modal={true} /> : null}
    </Fragment>
  );
};

export default PieChartForm;
