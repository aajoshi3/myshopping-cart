import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import Context from './Component/context/Context';
ReactDOM.render(
  <React.StrictMode>
  <Context>

    <App />
  </Context>
  </React.StrictMode>,
  document.getElementById('root')
);

