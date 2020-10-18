import React, { useContext } from 'react';
import LoginForm from '../components/LoginForm';
import UserContext from '../UserContext';
import Navbar from '../components/Navbar';


const LoginFormContainer = () => {
  const {user, setUser} = useContext(UserContext);
  return (
    <>
    <Navbar />
    <LoginForm setUser={setUser}/>
    </>
  );
};

export default LoginFormContainer;