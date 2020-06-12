import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';
import { HotTable } from "@handsontable/react";
import Navbar from "../components/Navbar";
import { DataContext } from "../context/DataContext";

const DataTable = () => {
  const history = useHistory()
  const context = useContext(DataContext);

  if(!context.csvFile.get){
    history.push('/')
  }
  
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
  vw = Math.round(vw);
  vw = vw.toString() + "px";
  vh = Math.round(vh-68); // 68: height of the navbar
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
      <HotTable settings={settings} />
    </div>
  );
};

export default DataTable;
