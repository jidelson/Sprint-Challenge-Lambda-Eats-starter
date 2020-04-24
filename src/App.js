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
  specialInstructions: '',
 toppings:[
  'pepperoni',
  'sausage',
  'olives',
  'jalapenos',
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
    })
  }

const onSubmit = evt => {
  evt.preventDefault()


    const newCustomer = {
    name: formValues.name,
    size: formValues.size,
    specialInstructions: formValues.specialInstructions,
    
    }
    postCustomer(newCustomer)
    setFormValues(initialFormValues)
  }
  
  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value
  
  yup
  .reach(formSchema, name)
  .validate(value)
  .then(valid => {
    setFormErrors({
      ...formErrors,
      [name]: '',
    })
  })
.catch(err => {
  setFormErrors({
    ...formErrors,
    [name]: err.errors[0],
  })
})
setFormValues({
  ...formValues,
  [name]:value,
})
  }

  const onCheckBoxChange = evt => {
    const {toppings} = evt.target.toppings
    const isChecked = evt.target.checked
  
    setFormValues({
      ...formValues,
      toppings: {
  ...formValues.toppings,
    [true]: isChecked,
      }
    })
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

    <Form
      values = {formValues}
      onInputChange = {onInputChange}
      onCheckBoxChange = {onCheckBoxChange}
      onSubmit = {onSubmit}
      errors ={formErrors}
      />


  </div>
  );
  
};
export default App;
