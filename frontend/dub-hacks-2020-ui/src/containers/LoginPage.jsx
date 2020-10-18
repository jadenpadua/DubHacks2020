import React from 'react';
import LoginForm from './LoginForm';
import AuthPage from '../components/AuthPage';

const LoginPageContainer = () => {
  return (
    <AuthPage>
      <LoginForm />
    </AuthPage>
  );
};

export default LoginPageContainer;