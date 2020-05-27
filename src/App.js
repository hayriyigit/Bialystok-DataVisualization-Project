import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

// Components
import ImportFile from "./Pages/ImportFile";
import DataTable from "./Pages/DataTable";

const App = () => (
  <DataProvider>
    <Router>
      <Switch>
        <Route name="main" exact path="/" component={ImportFile} />
        <Route name="datatable" path="/datatable" component={DataTable} />
      </Switch>
    </Router>
  </DataProvider>
);

export default App;
