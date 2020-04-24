import React from "react";

function Pizza({details}){
    if (!details) {
        return <h3>Searching for your order information...</h3>
    }

    return(
        <div>
            <h2>{details.name}</h2>
            <p>Size:{details.size}</p>
            <p>Special Instructions:{details.specialInstructions}</p>

            <div className='toppings'>
    
            <p>Pepperoni?{details.pepperoni ? 'yes' : 'no'}</p>
            <p>Sausage?{details.sausage ? 'yes' : 'no'}</p>
            <p>Olives?{details.olives ? 'yes' : 'no'}</p>
            <p>Jalapenos?{details.jalapenos ? 'yes' : 'no'}</p>
            </div>
      
           { !!details.toppings && !!details.toppings.length &&
        <div>
          Toppings:
          <ul>
            {
              details.toppings.map((like, idx) => <li key={idx}>{like}</li>)
            }
          </ul>
        </div>
            }

        </div>

    )
        
    
};


export default Pizza;