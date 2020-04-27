import React, { Component } from 'react'
import { HotTable } from '@handsontable/react';


export default class DataTable extends Component {

    componentDidMount = () => {
        console.log(this.props.location.state)
        this.identifyColumns(this.props.location.state.CsvFile)
    }

    identifyColumns(data) {
        //we should check its the correct csv data :p
        let keys = Object.keys(data[0])
        console.log(data[0])
        // we print header columns..
        for (let i = 0; i < keys.length; i++) {
            //values of first row
            let val = parseFloat(data[0][keys[i]])
            if (isNaN(val)) {
                val = data[0][keys[i]]
            }
            
        }
    }
    render() {
        return (
            <div>
                <HotTable
                    id="hot"
                    data={this.props.location.state.CsvFile}
                    colHeaders={true}
                    rowHeaders={true}
                    columnSorting={true}
                    licenseKey='non-commercial-and-evaluation'
                />
            </div>
        )
    }
}
