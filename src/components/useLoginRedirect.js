import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';

const useLoginRedirect = () => {
  const navigate = useNavigate();

  const loginAndRedirect = async (credentials) => {
    try {
      const response= await login(credentials);
      alert("Login successful");
      return {id:response.id,isProvider: response.isProvider}; // Replace '/dashboard' with your desired route
    } catch (error) {
      alert("Error in login");
      // Handle login error (e.g., display error message)
    }
  };

  return loginAndRedirect;
};

export default useLoginRedirect;
