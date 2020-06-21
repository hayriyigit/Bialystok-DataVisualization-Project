import React, { useState, createContext } from "react";

export const DataContext = createContext()

export const DataProvider = (props) => {
  const [csv, setCsv] = useState(null)
  const [columnTypes, setColumnTypes] = useState([])
  const [fileOptions, setFileOptions] = useState({
    delimeter: null,
    header: false,
  })
  const [chartOptions, setChartOptions] = useState([])
  const [filteredData, setFilteredData] = useState({
    headers:null,
    data: null
  })


  const store = {
    csvFile: { get: csv, set: setCsv },
    columns: { get: columnTypes, set: setColumnTypes },
    options: { get: fileOptions, set: setFileOptions },
    charts: { get: chartOptions, set: setChartOptions },
    filterData: { get: filteredData, set: setFilteredData }
  }

  return (
    <DataContext.Provider value={store}>
      {props.children}
    </DataContext.Provider>
  )


}
