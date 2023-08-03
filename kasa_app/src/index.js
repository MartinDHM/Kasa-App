import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import Headers from './components/Headers.jsx';
import Footer from './components/Footer.jsx';
import Body from './components/Body.jsx';
import './Sass/main.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="main-container">  
    <React.StrictMode>
      <App />
      <Headers />
      <Body />
      <Footer />
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

