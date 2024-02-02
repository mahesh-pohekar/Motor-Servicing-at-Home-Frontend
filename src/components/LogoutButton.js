import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const LogoutButton = (props) => {
  const navigate= useNavigate();
  const handleLogout = async () => {
    try {
      // Call your backend logout endpoint if needed
      await axios.get('http://localhost:3001/api/auth/logout');
      
      // Clear authentication state on the client side (example using useState)
      // Replace the following lines with your actual authentication state management logic
      props.setLogIn({id:0,isProvider:false});
      alert("logged out!");
      navigate('/');
      
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <>
    <Header id={props.id}/>
    <button className='logoutbtn' onClick={handleLogout}>Confirm Logout</button>
    </>
  );
};

export default LogoutButton;
