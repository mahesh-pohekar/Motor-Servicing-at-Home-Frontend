// ServiceRequestsList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';

const ServiceRequestsList = (props) => {
  const [serviceRequests, setServiceRequests] = useState([]);

  useEffect(() => {
    // Fetch service requests data from your API
    const fetchServiceRequests = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/service-requests?providerId=${props.providerId}`);
        setServiceRequests(response.data);
      } catch (error) {
        console.error('Error fetching service requests:', error);
      }
    };

    fetchServiceRequests();
  }, []);
 

  return (
    <>
    <Header id={props.providerId} />
    <div>
      <h2>Service Requests</h2>
      <ul>
        {serviceRequests.map((request) => (
          <li key={request.id}>
            <strong>Type:</strong> {request.type}<br />
            <strong>Date:</strong> {request.date}<br />
            <strong>Time:</strong> {request.time}<br />
            <strong>Comment:</strong> {request.comments}<br />
            <strong>Name:</strong> {request.requestor.name}<br />
            <strong>Mobile:</strong> {request.requestor.mob}<br />
            <strong>Email:</strong> {request.requestor.email}<br />
            <strong>Location:</strong> {request.requestor.location.coordinates.join(', ')}<br/>
            <button><a
                href={`https://www.google.com/maps?q=${request.requestor.location.coordinates[0]},${request.requestor.location.coordinates[1]}&z=15`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Map
              </a></button> 
            <hr />
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default ServiceRequestsList;
