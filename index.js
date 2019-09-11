import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { StoreProvider } from './store';
import {ViewComp}  from './ViewComp'


const App = () => {
  return <div>
    <h1>React Hooks</h1>
    <ViewComp/>
  </div>
}
render(
  <StoreProvider>
    <App />
  </StoreProvider>
  , document.getElementById('root'));
