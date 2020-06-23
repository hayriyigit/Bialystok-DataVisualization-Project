import React, { Fragment, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { ChartContext } from "../../context/ChartContext";
import LineChart from "../Charts/LineChart";

const LineChartForm = (props) => {
  const context = useContext(DataContext);
  const chartOps = useContext(ChartContext);

  return (
    <Fragment>
      <form className="form-horizontal">
        <fieldset>
          <legend>Line chart plot</legend>
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
                  chartOps.catVars.set(e.target.value)
                }}
              >
                {context.csvFile.get.head.map((header) => (
                  <option value={header} key={header}>{header}</option>
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
      {chartOps.isPlot.get ? <LineChart modal={true} /> : null}
    </Fragment>
  );
};

export default LineChartForm;
