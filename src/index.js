import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppComponent from './components/AppComponent';
import routes from './routes';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <AppComponent>{ routes }</AppComponent>,
  document.getElementById('root'));
registerServiceWorker();
