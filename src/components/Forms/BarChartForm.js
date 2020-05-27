import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const BarChartForm = () => {
  const context = useContext(DataContext)
  return (
    <form class="form-horizontal">
      <fieldset>
        <legend>Form Name</legend>
        <div class="form-group">
          <label class="col-md-4 control-label" for="selectbasic">
            X Axis
          </label>
          <div class="col-md-4">
            <select id="selectbasic" name="selectbasic" class="form-control">
              {context.csvFile.get.head.map((header) => (
                <option
                  value={header}
    
                >
                  {header}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div class="form-group">
          <label class="col-md-4 control-label" for="selectbasic">
            Y Axis
          </label>
          <div class="col-md-4">
            <select id="selectbasic" name="selectbasic" class="form-control">
              {context.csvFile.get.head.map((header) => (
                <option
                  value={header}
                >
                  {header}
                </option>
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
                
              }}
            >
              Plot
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default BarChartForm;
