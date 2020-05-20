import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { csvJSON } from "../Tools/ConvertFiles";

export default class ImportFile extends Component {
  state = {
    CsvFile: null,
    columns: {},
    FileOptions: {
      delimeter: null,
      header: false,
    }
  }

  dataTypes = () => {
    let columns = {}
    if(this.state.FileOptions.header){
      for(let header of this.state.CsvFile.head){
        columns[header] = {data: header, type: "text"}
      }
    }
    
    this.setState({
      columns
    })
  }

  setCsvFile = (event) => {
    this.setState({
      CsvFile: csvJSON(
        event.target.result,
        this.state.FileOptions.delimeter,
        this.state.FileOptions.header
      ),
    }, this.dataTypes)
  }

  handleFile = (file) => {
    const fileReader = new FileReader()
    fileReader.onload = this.setCsvFile
    fileReader.readAsText(file);
  }

  optionHandler = (e) => {
    if (e.target.id === "delimeter") {
      this.setState({
        FileOptions: {
          ...this.state.FileOptions,
          [e.target.id]: e.target.value,
        },
      })
    }
    if (e.target.id === "header") {
      this.setState({
        FileOptions: {
          ...this.state.FileOptions,
          header: !this.state.FileOptions.header,
        },
      })
    }
  }

  handleColumnType = (e) => {
    this.setState({
        columns: {...this.state.columns,
                [e.target.id]:{data:e.target.id,type: e.target.value}}
    })
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row my-5">
            <div className="col-xl-8 mx-auto">
              <form>
                <div className="form-group row">
                  <label
                    htmlFor="delimeter"
                    className="col-sm-2 col-form-label"
                  >
                    Delimeter
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="delimeter"
                      onChange={this.optionHandler}
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
                        onChange={this.optionHandler}
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
                      onChange={(e) => this.handleFile(e.target.files[0])}
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

                {this.state.FileOptions.header && this.state.CsvFile ? (
                  <div
                    className="form-group row p-3 rounded-sm"
                    style={{ backgroundColor: "gray" }}
                  >
                    {this.state.CsvFile.head.map((header) => (
                    <div>
                      <div className="col-sm-2">{header}</div>
                      <div className="col-sm-10">
                        <select 
                            className="custom-select"
                            onChange={this.handleColumnType}
                            key={header} 
                            id={header} 
                            required
                        >
                          <option disbled default value="none">Choose...</option>
                          <option value="text">Categorical</option>
                          <option value="numeric">Numerical</option>
                        </select>
                      </div>
                    </div>
                    ))}
                  </div>
                ) : null}

                {this.state.CsvFile ? (
                  <div className="form-group row">
                    <div className="col-sm-10">
                      <Link
                        to={{
                          pathname: "/datatable",
                          state: {
                            ...this.state,
                          },
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
  }
}
