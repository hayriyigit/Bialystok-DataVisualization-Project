import React, { useContext, createRef, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { HotTable } from "@handsontable/react";
import Navbar from "../components/Navbar";
import { DataContext } from "../context/DataContext";

const DataTable = () => {
  const history = useHistory()
  const context = useContext(DataContext);
  const hotRef = createRef();

  const[hotInstance,setHotInstance] = useState(null);

  if(!context.csvFile.get){
    history.push('/')
  }
  
 useEffect(() => {
  if(hotRef){
    setHotInstance(prev => {
      if(prev !== hotRef.current.hotInstance){
        return hotRef.current.hotInstance;
      }
    })
  }
 },[]);

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
    afterFilter: ((result)=> {
      let filteredDataArr = []
      filteredDataArr.push(hotInstance.getColHeader())
      filteredDataArr.push(hotInstance.getData())
      //THIS IS NOT CHANGING...
      context.filterData.set(filteredDataArr)
      console.log("im context", context.filterData)
    }),
    filters: true,
    licenseKey: "non-commercial-and-evaluation",
  };
  return (
    <div>
      <Navbar data={settings.data} headers={settings.colHeaders} />
      <HotTable ref = {hotRef} settings={settings} />
    </div>
  );
};


export default DataTable;
