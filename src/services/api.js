import axios from 'axios';

const baseURL = 'http://localhost:3001/api'; // Update with your backend URL

const api = axios.create({
  baseURL,
  
});

// Service requests API
export const createServiceRequest = async (requestData) => {
  try {
    const response = await api.post('/service-requests/create', requestData);
    return response.data;
  } catch (error) {
    console.error('Error creating service request:', error);
    throw error;
  }
};
// Service requestor signup API
export const signupServiceRequestor = async (formData) => {
  try {
    const response = await api.post('/service-requestors/signup', formData);
    return response.data;
  } catch (error) {
    console.error('Error during service requestor signup:', error);
    throw error;
  }
};
// Service provider signup API
export const signupServiceProvider = async (formData) => {
  try {
    const response = await api.post('/service-providers/signup', formData);
    return response.data;
  } catch (error) {
    console.error('Error during service provider signup:', error);
    throw error;
  }
};
export const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials,{withCredentials: true});
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    if (error.response) {
      console.error('Server responded with:', error.response.data);
    }
    throw error;
  }
};

export const checkAuth = async () => {
  try {
    const response = await api.get('/auth/check-auth');
    return response.data;
  } catch (error) {
    console.error('Error checking authentication:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await api.get('/auth/logout');
    return response.data;
  } catch (error) {
    console.error('Error during logout:', error);
    throw error;
  }
};