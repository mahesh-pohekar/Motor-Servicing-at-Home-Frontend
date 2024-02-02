import React, { useEffect, useState }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ServiceRequestorSignupForm from './components/ServiceRequestorSignupForm';
import ServiceProviderSignupForm from './components/ServiceProviderSignupForm';
import ServiceRequestForm from './components/ServiceRequestForm';
import LoginForm from './components/LoginForm';
import LogoutButton from './components/LogoutButton';
import ServiceRequestsList from './components/ServiceRequestsList';
import { checkAuth } from './services/api';

const App = () => {
  const [isLoggedIn, setIsLoggedIn]=useState(false);
  const [id, setId] = useState(0);
  const [isProvider, setIsProvider]= useState(false);

function setLogIn(res){
      if(res.id > 0){
        setIsLoggedIn(true);
        setId(res.id);
        if(res.isProvider===true){
          setIsProvider(true);
        }
      }
      else{
        setIsLoggedIn(false);
        setId(res.id);
        setIsProvider(res.isProvider);
      }

}

  return (
    <Router>
      <Routes>
        <Route path="/login"  element={<LoginForm setLogIn={setLogIn}/>} />
        <Route path="/" element={<Home id={id} loggedIn={isLoggedIn} isProvider={isProvider} setLogIn={setLogIn} />} />
        <Route path="/request" element={<ServiceRequestForm id={id}/>} />
        <Route path="/signup/requestor" element={<ServiceRequestorSignupForm id={id}/>} />
        <Route path="/signup/provider" element={<ServiceProviderSignupForm id={id}/>} />
        <Route path="/service-requests" element={<ServiceRequestsList providerId={id}/>} />
        <Route path="/logout" element={<LogoutButton id={id} setLogIn={setLogIn} />} />
      </Routes>
    </Router>
);
};

export default App;
