import React, { useState } from 'react';
import { createServiceRequest } from '../services/api';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const ServiceRequestForm = (props) => {
  console.log(props.id);
  const navigate = useNavigate();
  const [requestData, setRequestData] = useState({
    id:props.id,
    type: '',
    date: '',
    time: '',
    comments: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRequestData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createServiceRequest(requestData);
      alert('Service request created successfully!');
      navigate('/');
      // You can add logic to redirect or show a success message to the user
    } catch (error) {
      alert('Error creating service request:', error.message);
      console.error('Error creating service request:', error);
      // Handle error: show an error message to the user
    }
  };

  return (<>
    <Header id={props.id}/>
    <form onSubmit={handleSubmit}>
      <label>
        Type:
        <input
          placeholder='Type of service'
          type="text"
          name="type"
          value={requestData.type}
          onChange={handleInputChange}
          autoComplete='on'
        />
      </label>
      <br />
      <label>
        Date:
        <input
          placeholder='Select date'
          type="date"
          name="date"
          value={requestData.date}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Time:
        <input
          placeholder='Select time'
          type="time"
          name="time"
          value={requestData.time}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Comments:
        <textarea
          placeholder='Write comments'
          name="comments"
          value={requestData.comments}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Submit Service Request</button>
    </form>
    </>
  );
};

export default ServiceRequestForm;
