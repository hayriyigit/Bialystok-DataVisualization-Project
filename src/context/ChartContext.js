import React, { useState, createContext } from "react";

export const ChartContext = createContext();

export const ChartProvider = (props) => {
  const [xAxis, setXaxis] = useState(null); // For Bar and Line Charts
  const [yAxis, setYaxis] = useState(null); // For Bar and Line Charts

  const [catVars,setCatVars] = useState([]) // For Pie chart and Histogram
  const [freq, setFreq] = useState([]) // For Pie chart and Histogram

  const [isPlot, setIsPlot] = useState(false); // For controlling Modals visibility

  const store = {
    xAxis: { get: xAxis, set: setXaxis },
    yAxis: { get: yAxis, set: setYaxis },
    catVars: { get: catVars, set: setCatVars },
    freq: { get: freq, set: setFreq },
    isPlot: { get: isPlot, set: setIsPlot }    
  };

  return (
    <ChartContext.Provider value={store}>{props.children}</ChartContext.Provider>
  );
};
