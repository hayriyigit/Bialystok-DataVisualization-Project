import React, { useContext, createRef, useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { HotTable } from "@handsontable/react";
import Navbar from "../components/Navbar";
import { DataContext } from "../context/DataContext";

const DataTable = () => {
  const context = useContext(DataContext);
  const history = useHistory();
  const hotRef = createRef();

  const [hotInstance, setHotInstance] = useState(null);

  if (!context.csvFile.get) {
    history.push('/')
  }

  useEffect(() => {
    if (hotRef) {
      setHotInstance(prev => {
        if (prev !== hotRef.current.hotInstance) {
          return hotRef.current.hotInstance;
        }
      })
    }
  }, []);

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
  vh = Math.round(vh - 68); // 68: height of the navbar
  vh = vh.toString() + "px";

  const settings = {
    data: fileoptions.header ? dataset.body : dataset,
    colHeaders: fileoptions.header ? dataset.head : true,
    columns: Object.values(columns),
    rowHeaders: true,
    dropdownMenu: true,
    height: vh,
    width: vw,
    afterFilter: (async (result) => {
      let headers = await hotInstance.getColHeader()
      let dataRows = await hotInstance.getData()
      console.log(dataRows)
      let filteredDataArr = {
        headers: headers,
        data: dataRows
      }
      filteredDataArr.data = []

      //assing values
      for (let outer = 0; outer < dataRows.length; outer++) {
        let obj = {}
        for (let inner = 0; inner < dataRows[0].length; inner++) {

          for (let i = 0; i < headers.length; i++) {

            obj[headers[i]] = dataRows[outer][inner]
          } 
        }
        filteredDataArr.data.push(obj)
      }


      await context.filterData.set(filteredDataArr)
    }),
    filters: true,
    licenseKey: "non-commercial-and-evaluation",
  };
  return (
    <div>
      <Navbar data={settings.data} headers={settings.colHeaders} />
      <HotTable ref={hotRef} settings={settings} />
    </div>
  );
};


export default DataTable;
