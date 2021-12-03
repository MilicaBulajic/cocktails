import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import { BrowserRouter } from 'react-router-dom'

import 'materialize-css/dist/css/materialize.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

