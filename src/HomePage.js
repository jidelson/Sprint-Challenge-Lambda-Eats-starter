import React from "react";
import { Route, BrowserRouter, Link } from 'react-router-dom';

function GoFromHomeToForm() {

};

const HomePage = props => (
<div>
<h2>Welcome to Joe's Pizza</h2>

<div className="formButton">
    <BrowserRouter>

<Link to="/Form">Choose Your Pizza!</Link>
</BrowserRouter>
</div>

</div>
);  
export default HomePage;