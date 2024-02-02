// Home.jsx
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import LoginForm from './LoginForm';

const Home = (props) => {
  
  return (
    <>
    <Header id = {props.id}/>
    <div>
      <h1>Welcome to the Service Portal</h1>
      {props.loggedIn && !props.isProvider && <Link className='serviceReq' to="/request">Request Service</Link>}
      {!props.loggedIn && <LoginForm setLogIn={props.setLogIn}/>}
      {props.loggedIn && props.isProvider && <Link className='serviceReq' to="/service-requests">View Service Requests</Link>}

    </div>
    </>
  );
};

export default Home;
