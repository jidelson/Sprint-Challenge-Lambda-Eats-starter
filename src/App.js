import React from "react";
import { Route } from 'react-router-dom';
import axios from 'axios';
import * as yup from "yup";
import Form from './Form.js'
import Pizza from './Pizza.js'
import HomePage from './HomePage.js'

const App = () => {



  
  return (
  <div>
  <h1>Lambda Eats</h1>

    <div>
    <Route exact path ='/'>
      <HomePage />
    </Route>
    </div>

  </div>
  );
  
};
export default App;
