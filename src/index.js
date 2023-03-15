import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './HomePage'
import ShortenContextProvider from './Contexts/ShortenContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShortenContextProvider>
      <HomePage />
    </ShortenContextProvider>
  </React.StrictMode>
);
