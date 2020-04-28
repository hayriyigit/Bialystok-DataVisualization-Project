import React, { Component } from 'react'
import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';

export default class DataTable extends Component {
    componentDidMount = () => {
        console.log(this.props.location.state)
    }
    render() {
        return (
            <div>
                        <HotTable
                            id="hot"
                            data={this.props.location.state.CsvFile}
                            colHeaders={true}
                            rowHeaders={true}
                            licenseKey = 'non-commercial-and-evaluation'
                        />
            </div>
        )
    }
}
