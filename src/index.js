import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WeatherContextProvider } from './components/WeatherContext/WeatherContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <WeatherContextProvider>
    <App />
  </WeatherContextProvider>

);


