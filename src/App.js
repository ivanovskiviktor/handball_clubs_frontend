import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Table from "./Table/Table";
import Cards from "../src/Cards/Cards"
import CountryDetails from "./Cards/CountryDetails";
import GroundDetails from "./Cards/GroundDetails";

function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Cards}/>
            <Route path='/clubs' exact={true} component={Table}/>
            <Route path='/clubs/:id' exact={true} component={CountryDetails}/>
            <Route path='/ground/:id' exact={true} component={GroundDetails}/>

          </Switch>
        </Router>
      </div>
  );
}

export default App;
