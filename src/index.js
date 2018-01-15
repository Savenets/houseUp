import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppComponent from './components/AppComponent';
import routes from './routes';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <AppComponent>{ routes }</AppComponent>,
  document.getElementById('root'));
registerServiceWorker();
