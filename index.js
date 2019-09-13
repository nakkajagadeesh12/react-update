import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { StoreProvider } from './store';
import ViewComp  from './ViewComp';
import { BrowserRouter } from 'react-router-dom';

const App = ({ history, location, match }) => {
  console.log(history, "history");
  console.log(location, "location");
  console.log(match, "match");
  return <div>
    <marquee><h1>React Hooks</h1></marquee>
    <ViewComp />
  </div>
}
render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>
  , document.getElementById('root'));
