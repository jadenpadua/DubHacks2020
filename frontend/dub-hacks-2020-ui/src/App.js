import React from "react";
import { ConnectedRouter } from 'connected-react-router';

import configureStore, { history } from './store';
import "./styles/index.less";
import "./styles/reset.less";

import { Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './containers/HomePage';
<<<<<<< HEAD
import BuyPage from './containers/BuyPage';
=======
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';
>>>>>>> 6b36a7750abed9ffe6c52644a4b858f04729c50d

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
          <Switch>
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/" component={HomePage} />
            <Route path="/buypage" component={BuyPage} />
          </Switch>
        </>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
