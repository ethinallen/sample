import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { FronteggProvider } from "@frontegg/react";

const contextOptions = {
  baseUrl: 'https://app-ygfbzolrp8mb.frontegg.com',
  clientId: 'b91270b9-b53b-4012-bfb8-14839924fa9a',
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
