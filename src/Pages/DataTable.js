import React from 'react'
import { HotTable } from '@handsontable/react';
import Navbar from '../components/Navbar'

export default class DataTable extends React.Component {
    render(){
        const fileoptions = this.props.location.state.FileOptions
        const dataset = this.props.location.state.CsvFile
        const columns = this.props.location.state.columns

        const settings = {
            data: fileoptions.header ? dataset.body : dataset,
            colHeaders: fileoptions.header ? dataset.head : true,
            columns: Object.values(columns),
            rowHeaders: true,
            dropdownMenu: true,
            filters: true,
            licenseKey: "non-commercial-and-evaluation",

        }
        return(
        <div>
            <Navbar/>
            <HotTable settings={settings}/>
        </div >
        )
    }
}

