import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { csvJSON } from "../Tools/ConvertFiles";

const ImportFile = () => {
  const context = useContext(DataContext);

  const dataTypes = () => {
    let columns = {};
    if (context.options.get.header) {
      for (let header of context.csvFile.get.head) {
        columns[header] = { data: header, type: "text" };
      }
    }
    context.columns.set(columns);
  };

  const setCsvFile = (event) => {
    context.csvFile.set(
      csvJSON(
        event.target.result,
        context.options.get.delimeter,
        context.options.get.header
      )
    );
  };
  useEffect(dataTypes, [context.csvFile.get]);

  const handleFile = (file) => {
    const fileReader = new FileReader();
    fileReader.onload = setCsvFile;
    fileReader.readAsText(file);
  };

  const optionHandler = (e) => {
    if (e.target.id === "delimeter") {
      context.options.set({
        ...context.options.get,
        [e.target.id]: e.target.value,
      });
    }
    if (e.target.id === "header") {
      context.options.set({
        ...context.options.get,
        [e.target.id]: !context.options.get.header,
      });
    }
  };

  const handleColumnType = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    context.columns.set((prevColumns) => {
      return {...prevColumns, [`${id}`]: { data: id, type: value } };
    });
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row my-5">
          <div className="col-xl-8 mx-auto">
            <form>
              <div className="form-group row">
                <label htmlFor="delimeter" className="col-sm-2 col-form-label">
                  Delimeter
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="delimeter"
                    onChange={optionHandler}
                    required
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-sm-2">Header</div>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="header"
                      onChange={optionHandler}
                    />
                    <label className="form-check-label" htmlFor="header">
                      Table has header
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <div className="custom-file mx-3">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="validatedCustomFile"
                    onChange={(e) => handleFile(e.target.files[0])}
                    required
                  />

                  <label
                    className="custom-file-label"
                    htmlFor="validatedCustomFile"
                  >
                    Choose file...
                  </label>

                  <div className="invalid-feedback">
                    Example invalid custom file feedback
                  </div>
                </div>
              </div>

              {context.options.get.header && context.csvFile.get ? (
                <div
                  className="form-group row p-3 rounded-sm"
                  style={{ backgroundColor: "gray" }}
                >
                  {context.csvFile.get.head.map((header) => (
                    <div>
                      <div className="col-sm-2">{header}</div>
                      <div className="col-sm-10">
                        <select
                          className="custom-select"
                          onChange={(e) => handleColumnType(e)}
                          key={header}
                          id={header}
                          required
                        >
                          <option default value="none">
                            Choose...
                          </option>
                          <option value="text">Categorical</option>
                          <option value="numeric">Numerical</option>
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}

              {context.csvFile.get ? (
                <div className="form-group row">
                  <div className="col-sm-10">
                    <Link
                      to={{
                        pathname: "/datatable",
                      }}
                    >
                      <button className="btn btn-primary">Upload</button>
                    </Link>
                  </div>
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ImportFile;
