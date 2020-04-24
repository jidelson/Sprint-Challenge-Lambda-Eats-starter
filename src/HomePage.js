import React from "react";
import { Route } from 'react-router-dom';

function GoFromHomeToForm() {

};

const HomePage = props => (
<div>
<h2>Welcome to Joe's Pizza</h2>

<div className="formButton">
<Route path='/Form'></Route>
<button>Choose Your Pizza!</button>
</div>

</div>
);  
export default HomePage;