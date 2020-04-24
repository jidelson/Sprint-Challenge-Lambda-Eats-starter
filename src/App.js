import React, { useState, useEffect } from "react";
import { Route, BrowserRouter, Link, Router } from 'react-router-dom';
import axios from 'axios';
import * as yup from "yup";
import Form from './Form.js';
import Pizza from './Pizza.js';


const url= 'https://reqres.in/api/users'

const initialFormValues = {
  name:'',
  size: '',
  specialInstructions: '',
 toppings:{
  pepperoni: false,
  sausage: false,
  olives: false,
  jalapenos: false
}
}

const initialFormErrors = {
  name:'',
  size:'',
  specialInstructions:'',
}

const formSchema = yup.object().shape({
  name: yup
  .string()
  .min(2, 'Name must have at least 2 characters')
  .required('Name is required!'),
  
  specialInstructions: yup
  .string()
  .min(2, 'Instructions must have at least 2 characters')
  .required('Name is required!'),

  size: yup
  .string()
  .matches(/(small|medium|large)/, 'either small medium or large')
.required ('size is required')
})



const App = () => {

  const [order, setOrder] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

const [formErrors, setFormErrors] = useState(initialFormErrors)
  

  const postOrder = pizzaOrder => {
    axios.post(url, initialFormValues )
    .then(res => {
      console.log(res);
      setOrder([...order, res.data])
    })
    .catch(err => {
    })
  }

const onSubmit = evt => {
  evt.preventDefault()


    const newOrder = {
    name: formValues.name,
    size: formValues.size,
    specialInstructions: formValues.specialInstructions,
    toppings: Object.keys(formValues.toppings)
    .filter(topping => formValues.toppings[topping] === true)
    
    }
    postOrder(newOrder)
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
    const {name} = evt.target
    const isChecked = evt.target.checked
  
  
    setFormValues({
      ...formValues,
      toppings: {
  ...formValues.toppings,
    [name]: isChecked,
      }
    })
  }


  return (
  <div>
<h1>Welcome to Joe's Pizza Place!</h1>

      {
      order.map(pizzaOrder => {
        return (
          <Pizza key={order.id} details={order} />
        )

      })
      }

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
