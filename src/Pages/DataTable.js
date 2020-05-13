import React from 'react'
import { HotTable } from '@handsontable/react';
import Navbar from '../components/Navbar';
import P5Wrapper from 'react-p5-wrapper';
import sketch from '../components/sketch'
export default class DataTable extends React.Component {
    render() {
        const fileoptions = this.props.location.state.FileOptions
        const dataset = this.props.location.state.CsvFile
        const columns = this.props.location.state.columns
        let vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        vw = Math.round(vw / 2)
        vw = vw.toString() + 'px'
        vh = Math.round(vh / 1.2)
        vh = vh.toString() + 'px'
        const settings = {
            data: fileoptions.header ? dataset.body : dataset,
            colHeaders: fileoptions.header ? dataset.head : true,
            columns: Object.values(columns),
            rowHeaders: true,
            dropdownMenu: true,
            height: vh,
            width: vw,
            filters: true,
            licenseKey: "non-commercial-and-evaluation",

        }
        return (
            <div>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <HotTable settings={settings} />
                        </div>
                        <div className="col" id="drawGraphs">
                            <P5Wrapper sketch={sketch} color={(255, 0, 0)}></P5Wrapper>

                        </div>
                    </div>

                </div>

            </div >
        )
    }
}

