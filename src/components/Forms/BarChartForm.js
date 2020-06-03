import React, { Fragment, useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { ChartContext } from "../../context/ChartContext";
import BarChart from "../Charts/BarChart";

const BarChartForm = (props) => {
  const context = useContext(DataContext);
  const chartOps = useContext(ChartContext);

  return (
    <Fragment>
      <form class="form-horizontal">
        <fieldset>
          <legend>Form Name</legend>
          <div class="form-group">
            <label class="col-md-4 control-label" for="selectbasic">
              X Axis
            </label>
            <div class="col-md-4">
              <select
                id="selectbasic"
                name="selectbasic"
                class="form-control"
                onChange={(e) => {
                  chartOps.xAxis.set(e.target.value)
                }}
              >
                {context.csvFile.get.head.map((header) => (
                  <option value={header}>{header}</option>
                ))}
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="selectbasic">
              Y Axis
            </label>
            <div class="col-md-4">
              <select
                id="selectbasic"
                name="selectbasic"
                class="form-control"
                onChange={(e) => {
                  chartOps.yAxis.set(e.target.value)
                }}
              >
                {context.csvFile.get.head.map((header) => (
                  <option value={header}>{header}</option>
                ))}
              </select>
            </div>
          </div>

          <div class="form-group">
            <label class="col-md-4 control-label" for="singlebutton"></label>
            <div class="col-md-4">
              <button
                id="singlebutton"
                name="singlebutton"
                class="btn btn-primary"
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
      {chartOps.isPlot.get ? <BarChart modal={true} /> : null}
    </Fragment>
  );
};

export default BarChartForm;
