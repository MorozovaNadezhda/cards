import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import bootstrap from 'bootstrap/scss/bootstrap.scss';

console.log(bootstrap);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
