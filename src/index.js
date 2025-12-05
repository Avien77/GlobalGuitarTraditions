import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='header'>
    <h1 className='title'> Japanese City Pop</h1> <img src='vinyl.gif' className='vinyl'></img>
    </div>
    <App />
    <h2 className='paragraph'>Booty</h2>
  </React.StrictMode>
  
);


