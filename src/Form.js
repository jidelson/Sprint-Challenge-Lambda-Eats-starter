import React from "react";

function Form(props){
    const {
        values,
        onInputChange,
        onCheckBoxChange,
        onSubmit,
        errors
    } = props
    console.log(values.toppings);
    return(
    <form className="formContainer">

        <div className='errors'>
        {errors.name}
        {errors.size}
        {errors.specialInstructions}
        </div>

        <div>
        <label htmlFor='name'>Name:&nbsp;
        <input
        id='name'
        value = {values.name}
        onChange = {onInputChange}
        name='name'
        type='text'
        /></label>
        </div>

        <label htmlFor='size'>Size:&nbsp;
        <select
            id= 'size'
          value ={values.size}
          onChange = {onInputChange}
          name='size'
        >
            <option value=''>Please choose</option>
          <option value='small'>small</option>
          <option value='medium'>medium</option>
          <option value='large'>large</option>
        </select></label>

    <div>
    <h4>Toppings</h4>
        

        <label>Pepperoni&nbsp;
    <input
    // checked={}
    onChange={onCheckBoxChange}
    name='pepperoni'
    type='checkbox'
    
    />
    </label>

    <label>Sausage&nbsp;
    <input
    name='sausage'
    type='checkbox'
    // checked={values.toppings.sausage}
    onChange={onCheckBoxChange}
    />
    </label>

    <label>Olives&nbsp;
    <input
    name='olives'
    type='checkbox'
    // checked={values.toppings.olives}
    onChange={onCheckBoxChange}
    />
    </label>

    <label>Jalapenos&nbsp;
    <input
    name='jalapenos'
    type='checkbox'
    // checked={values.toppings.jalapenos}
    onChange={onCheckBoxChange}
    />
    </label>

    </div>

<div>
    <label>Special Instructions:&nbsp;
                <input
                value = {values.specialInstructions}
                onChange = {onInputChange}
                name='specialInstructions'
                type='text'
                />
            </label>
            </div>
<div>
    <button onClick={onSubmit}>Add To Order!</button>
</div>

    </form>
)
}

export default Form;