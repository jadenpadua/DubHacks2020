import React, { useState } from "react";
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from './store';
import './styles/index.less';
import './styles/reset.less';

import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './containers/HomePage';
import BuyPage from './containers/BuyPage';
import LoginPage from './containers/LoginPage';
import StorePage from './containers/StorePage';
import RegisterPage from './containers/RegisterPage';
import HostPage from './containers/HostPage';
import HostStart from './containers/HostStart';
import Profile from './containers/Profile';
import Dashboard from "./components/Dashboard";
import ThankYouModal from "./components/ThankYouModal";
import { UserProvider } from "./UserContext";
import {ItemProvider} from './ItemContext';
import { OrderProvider } from "./OrderContext";

const store = configureStore();

const App = () => {
  const [user, setUser] = useState({});
  const [order, setOrder] = useState({});
  const [item, setItem] = useState({});
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
        <UserProvider value={{user: user, setUser: setUser}}>
        <OrderProvider value={{order: order, setOrder: setOrder}}>
        <ItemProvider value={{setItem, item,}}>
          <Switch>
            <Route path="/store" component={StorePage} />
            <Route path="/host" component={HostPage} />
            <Route path="/start" component={HostStart} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/modal" component={ThankYouModal} />
            <Route path="/login" component={LoginPage} />
            <Route path="/buy" component={BuyPage} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
          </ItemProvider>
        </OrderProvider>
        </UserProvider>
        </>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
