import React, { useContext } from "react";
import { HotTable } from "@handsontable/react";
import Navbar from "../components/Navbar";
import { DataContext } from "../context/DataContext";

const DataTable = () => {
  const context = useContext(DataContext);
  const fileoptions = context.options.get
  const dataset = context.csvFile.get;
  const columns = context.columns.get;

  let vw = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  let vh = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  vw = Math.round(vw / 2);
  vw = vw.toString() + "px";
  vh = Math.round(vh / 1.2);
  vh = vh.toString() + "px";
  
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
  };
  return (
    <div>
      <Navbar data={settings.data} headers={settings.colHeaders} />
      <div className="container">
        <div className="row">
          <div className="col">
            <HotTable settings={settings} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
