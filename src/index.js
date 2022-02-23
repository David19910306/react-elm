import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<h4>loading...</h4>}>
      <App/>
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root')
);

