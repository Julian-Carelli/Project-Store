import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxThunks from 'redux-thunk';


import reducers from './store/reducers/index';
import './global.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import * as serviceWorker from './serviceWorker';
import App from './routes/App'

const store = createStore(reducers, {}, applyMiddleware(reduxThunks));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
