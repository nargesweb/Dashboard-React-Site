import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import DarkmoodContextProvider from "./Context/DarkmoodContextProvider";


ReactDOM.render(
  <BrowserRouter>
    <DarkmoodContextProvider>
      <App />
    </DarkmoodContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

