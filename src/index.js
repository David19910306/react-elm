import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {persistStore} from 'redux-persist'
import {PersistGate} from "redux-persist/integration/react";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import {Provider} from "react-redux";
import store from '../src/redux/store'

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<h4>loading...</h4>}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
          <App/>
        </PersistGate>
      </Provider>
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root')
);

