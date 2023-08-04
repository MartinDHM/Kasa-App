import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.js';
import Headers from './components/Headers.js';
import Footer from './components/Footer.js';
import './Sass/main.css';
import {BrowserRouter} from "react-router-dom"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="main-container">  
    <BrowserRouter>
      <Headers />
      <App />
      <Footer />
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

