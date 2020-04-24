import React from "react";

function Form(props){
    const {
        values,
        onInputChange,
        onCheckBoxChange,
        onSubmit,
        errors
    } = props

    return(
    <form className="formContainer">

        <div className='errors'>
        {errors.name}
        {errors.size}
        {errors.specialInstructions}
        </div>

        <label htmlFor='name'>Name:&nbsp;
        <input
        id='name'
        value = {values.name}
        onChange = {onInputChange}
        name='name'
        type='text'
        /></label>

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

        <label>Toppings&nbsp;
    <input
    name='termsOfService'
    type="checkbox"
    // checked={true}
    // onChange={onCheckBoxChange}
    />
    </label>


    <label>Special Instructions:&nbsp;
                <input
                value = {values.specialInstructions}
                onChange = {onInputChange}
                name='specialInstructions'
                type='text'
                />
            </label>
<div>
    <button onClick={onSubmit}>Add To Order!</button>
</div>

    </form>
)
}

export default Form;