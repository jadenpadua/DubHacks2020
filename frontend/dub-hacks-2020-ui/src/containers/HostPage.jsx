import React from 'react';
import HostPage from '../components/HostPage';
import Navbar from '../components/Navbar';

const HostPageContainer = () => {
  return (
    <>
      <Navbar>
        <HostPage />
      </Navbar>
    </>
  );
};

export default HostPageContainer;
