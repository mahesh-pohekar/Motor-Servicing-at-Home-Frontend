// ServiceProviderSignupForm.js

import React, { useState } from 'react';
import { signupServiceProvider } from '../services/api';
import { useNavigate } from 'react-router-dom';

const ServiceProviderSignupForm = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id:props.id,
    name: '',
    mob: '',
    email: '',
    password: '',
    latitude: '',
    longitude: '',
    // Other fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLocationDetection = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData((prevData) => ({
            ...prevData,
            latitude: position.coords.latitude.toString(),
            longitude: position.coords.longitude.toString(),
          }));
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Error getting location. Please enter manually.');
        }
      );
    } else {
      alert('Geolocation is not supported in your browser. Please enter location manually.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signupServiceProvider(formData);
      alert('Service provider signed up successfully!');
      navigate('/');
      // Additional logic after successful signup
    } catch (error) {
      alert('Error during service provider signup. Please try again.');
      console.error('Error during service provider signup:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields for Service Provider signup */}
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </label>
      <label>
        Mobile no.:
        <input type="text" name="mob" value={formData.mob} onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </label>
      <button type="button" onClick={handleLocationDetection}>
        Detect Location
      </button>
      <label>
        Latitude:
        <input type="text" name="latitude" value={formData.latitude} onChange={handleInputChange} />
      </label>
      <label>
        Longitude:
        <input type="text" name="longitude" value={formData.longitude} onChange={handleInputChange} />
      </label>
      {/* Other fields */}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default ServiceProviderSignupForm;
