import React from 'react';
import ReactDOM from 'react-dom';
import Router from "./Router";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/MainStore'
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Header />
          <Router />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
