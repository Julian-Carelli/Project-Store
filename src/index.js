import React from 'react';
import ReactDOM from 'react-dom';

import './global.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import * as serviceWorker from './serviceWorker';
import App from './routes/App'


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
