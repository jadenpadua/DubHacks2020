import React from 'react';
import AuthPage from '../components/AuthPage';
import RegisterForm from './RegisterForm';

const RegisterPageContainer = () => {
  return (
    <AuthPage>
      <RegisterForm />
    </AuthPage>
  );
};

export default RegisterPageContainer;