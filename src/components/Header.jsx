import React from "react";
import { Link } from 'react-router-dom';

function Header(props){
    
    return(
        <div className="header">
            <h2 id="brand">ServicingAtHome</h2>
            <div className="tabs">
            <Link to="/">Home</Link>
            {props.id<=0 && <Link to="/signup/requestor">Sign Up as Requestor</Link>}        
            {props.id<=0 && <Link to="/signup/provider">Sign Up as Provider</Link>}
            {props.id>0 &&  <Link to="/logout">logout</Link>  }  
            </div>
        </div>
    );
}

export default Header;