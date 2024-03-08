import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { FronteggProvider } from "@frontegg/react";

const contextOptions = {
  baseUrl: 'https://app-s1yjnqxw6o2g.frontegg.com',
  clientId: 'dd3a12f0-2f03-4ed7-9cf4-76ac4f6d3d97',
};

const authOptions = {
  keepSessionAlive: true
 };

 ReactDOM.render(
    <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true} authOptions={authOptions}>
      <App />
    </FronteggProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
