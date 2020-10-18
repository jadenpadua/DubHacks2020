import React, { useContext } from 'react';
import LoginForm from '../components/LoginForm';
import UserContext from '../UserContext';

const LoginFormContainer = () => {
  const {user, setUser} = useContext(UserContext);
  return (
    <LoginForm setUser={setUser}/>
  );
};

export default LoginFormContainer;