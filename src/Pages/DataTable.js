import React from 'react'
import { HotTable } from '@handsontable/react';
import Navbar from '../components/Navbar'

export default class DataTable extends React.Component {
    constructor(props) {
        super(props)
        this.HotTable = React.createRef()
    }


    componentDidMount() {
        console.log(this.HotTable)
    }

    getSelectedData=()=>{
        console.log(this.HotTable.getSelected)
    }

    render(){

        const FileOptions = this.props.location.state.FileOptions
        const DataSet = this.props.location.state.CsvFile

        const settings = {
            data: FileOptions.header ? DataSet.body : DataSet,
            colHeaders: FileOptions.header ? DataSet.head : true,
            rowHeaders: true,
            dropdownMenu: true,
            filters: true,
            licenseKey: "non-commercial-and-evaluation",
            outsideClickDeselects: false,
            selectionMode: 'multiple', // 'single', 'range' or 'multiple'
        }
        return(
            <div>
        <Navbar />
        <HotTable
            settings={settings}
            ref={this.HotTable}
        />
            <button onClick={this.getSelectedData()}>AAAA</button>
            </div >
        )
    }
    
}

