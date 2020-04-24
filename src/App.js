import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';
import * as yup from "yup";
import Form from './Form.js'
import Pizza from './Pizza.js'
import HomePage from './HomePage.js'

const url= 'https://reqres.in/api/users'

const initialFormValues = [{
  name:'',
  size: '',
 toppings:[
  'pepperoni',
  'sausage',
  'olives',
  'jalapenos',
  'specialInstructions'
]
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



const App = () => {

  const [customers, setCustomers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

const [formErrors, setFormErrors] = useState(initialFormErrors)
  
const getCustomers = () => {
  axios.get(url)
  .then(function(res) {
    console.log(res);
    setCustomers([...customers, res.data])
  })
  .catch(function(err) {
    console.log(err)
  })
}

useEffect(() =>{
  getCustomers()
  }, [])

  const postCustomer = customer => {
    axios.post(url, customers)
    .then(res => {
      setCustomers([...customers, res.data])
    })
    .catch(err => {
    }, [customers.id])
  }


  return (
  <div>
  <h1>Lambda Eats</h1>

    <div>
      <BrowserRouter>
    <Route path ='/'>
      <HomePage />
    </Route>
    </BrowserRouter>
    </div>

  </div>
  );
  
};
export default App;
