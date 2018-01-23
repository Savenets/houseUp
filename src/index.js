import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';
import createStore from './store';
import './index.css';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin

const history = createHistory();
const router = routerMiddleware(history);

ReactDOM.render(
  <Provider store={createStore({}, [ router ])}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
