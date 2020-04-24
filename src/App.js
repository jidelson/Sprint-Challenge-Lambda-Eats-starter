import React from "react";
import { Route } from 'react-router-dom';
import axios from 'axios';
import * as yup from "yup";
import Form from './Form.js'
import Pizza from './Pizza.js'
import HomePage from './HomePage.js'

const App = () => {

const initialFormValues = [{
  name:'',
  size: '',
  pepperoni: '',
  sausage:'',
  olives:'',
  jalapenos:'',
  specialInstructions: '',
}]

const initialFormErrors = {
  name:'',
  size:'',
  specialInstructions:''
}

const formSchema = yup.object().shape({
  name: yup
  .string()
  .min(2, 'Name must have at least 2 characters')
  .required('Name is required!'),
  
  specialInstructions: yup
  .string()
  .min(2, 'Instructions must have at least 2 characters')
  .required('Name is required!')
})
  
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
