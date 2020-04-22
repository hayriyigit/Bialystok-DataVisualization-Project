import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// Components
import ImportFile from './Pages/ImportFile';
import DataTable from './Pages/DataTable';

export default class App extends React.Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route name = "main" exact path = '/' component={ImportFile}/>
          <Route name = "datatable" path = '/datatable' component={DataTable}/>
        </Switch>
      </Router>
    )
  }
  
}