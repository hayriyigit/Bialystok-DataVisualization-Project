import React, { Component, Fragment } from 'react'
import {Link} from "react-router-dom";

import {csvJSON} from '../Tools/ConvertFiles';

export default class ImportFile extends Component {
    state = {
        CsvFile : null,
        FileOptions : {
            delimeter : null,
            header : false
        }
    }

    setCsvFile = event => {
        this.setState({
            CsvFile: csvJSON(event.target.result, this.state.FileOptions.delimeter)
        })
    }
    
    handleFile = file => {
        const fileReader = new FileReader()
        fileReader.onload = this.setCsvFile
        fileReader.readAsText(file)
    }

    optionHandler = e => {
        if (e.target.id === "delimeter") {
            this.setState({
              FileOptions: {
                ...this.state.FileOptions,
                [e.target.id]: e.target.value
              }
            })
          }
          if (e.target.id === "header") {
            this.setState({
              FileOptions: {
                ...this.state.FileOptions,
                header: !this.state.FileOptions.header
              }
            })
          }
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row my-5">
                        <div className="col-xl-8 mx-auto">

                            <form>
                                <div className="form-group row">
                                    <label htmlFor="delimeter" className="col-sm-2 col-form-label">Delimeter</label>
                                    <div className="col-sm-10">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="delimeter"
                                            onChange = {this.optionHandler.bind(this)}
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
                                                onChange = {this.optionHandler.bind(this)}
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
                                            onChange = {e => this.handleFile(e.target.files[0])}
                                            required
                                        />
                                        <label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>
                                        <div className="invalid-feedback">Example invalid custom file feedback</div>
                                    </div>
                                </div>

                                {
                                    this.state.CsvFile ? 
                                    <div className="form-group row">
                                        <div className="col-sm-10">
                                            <Link to={{
                                                pathname : "/datatable",
                                                state : {
                                                    ...this.state
                                                }
                                            }}>
                                                <button 
                                                className="btn btn-primary"
                                                >Upload</button>
                                            </Link>
                                            
                                        </div>
                                    </div> : null
                                }
                                
                            </form>
                        
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
