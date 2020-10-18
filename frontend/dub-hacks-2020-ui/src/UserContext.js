import React, {createContext} from 'react';



const UserContext = createContext({user: {loggedIn: false, name: 'Jaden', email:'jaden@ucsd.edu'}, setUser: () => {}});

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
export default UserContext;