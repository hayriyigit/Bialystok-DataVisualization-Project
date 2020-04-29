import React from 'react'
import { HotTable } from '@handsontable/react';
import Navbar from '../components/Navbar'

 const DataTable = props => {
    const FileOptions = props.location.state.FileOptions
    const DataSet = props.location.state.CsvFile

    const settings = {
        data : FileOptions.header ? DataSet.body : DataSet,
        colHeaders: FileOptions.header ? DataSet.head : true,
        rowHeaders: true,
        dropdownMenu: true,
        filters: true,
        licenseKey: "non-commercial-and-evaluation"
    }

    return (
        <div>
            <Navbar/>
            <HotTable
                settings = {settings}
            />
        </div>
    )
}

export default DataTable;