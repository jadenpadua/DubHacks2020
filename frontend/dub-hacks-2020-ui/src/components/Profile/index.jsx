import React, { useContext } from 'react';
import UserContext from '../../UserContext';
import './style.less';

const ProfilePage = (props) => {
  const {user} = useContext(UserContext);
  //available fields: id, name, email, address, preferences
  return (
  <div>Profile Page

    <div>Name: {user.name}</div>
  </div>
  );
};

export default ProfilePage;
