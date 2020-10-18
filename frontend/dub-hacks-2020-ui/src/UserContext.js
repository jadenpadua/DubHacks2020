import React, {createContext} from 'react';



const UserContext = createContext({user: {loggedIn: false, name: ''}, setUser: () => {}});

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
export default UserContext;