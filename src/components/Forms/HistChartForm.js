import React, { Fragment, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { ChartContext } from "../../context/ChartContext";
import HistChart from "../Charts/HistChart";

const HistChartForm = (props) => {
  const context = useContext(DataContext);
  const chartOps = useContext(ChartContext);

  return (
    <Fragment>
      <form class="form-horizontal">
        <fieldset>
          <legend>Form Name</legend>
          <div class="form-group">
            <label class="col-md-4 control-label" for="selectbasic">
              Attribute
            </label>
            <div class="col-md-4">
              <select
                id="selectbasic"
                name="selectbasic"
                class="form-control"
                onChange={(e) => {
                  chartOps.catVars.set(e.target.value)
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
      {chartOps.isPlot.get ? <HistChart modal={true} /> : null}
    </Fragment>
  );
};

export default HistChartForm;
