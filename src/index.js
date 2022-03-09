import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import store from "./store/store";
import { Provider } from "react-redux";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/poke-styles.scss"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

