import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { FronteggProvider } from "@frontegg/react";

import Option1 from './pages/Option1';
import Option2 from './pages/Option2';

const root = ReactDOM.createRoot(document.getElementById('root'));

const contextOptions = {
  baseUrl: 'https://app-ygfbzolrp8mb.frontegg.com',
  clientId: 'b91270b9-b53b-4012-bfb8-14839924fa9a',
};

const authOptions = {
  keepSessionAlive: true // Uncomment this in order to maintain the session alive
 };

root.render(
  <React.StrictMode>
    <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true} authOptions={authOptions}>
      <App />
    </FronteggProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
