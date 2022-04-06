import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {persistStore} from 'redux-persist';
import {PersistGate} from "redux-persist/integration/react";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import {Provider} from "react-redux";
import store from '../src/redux/store';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import Loading from "./Loading";

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<Loading/>}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
          <DevSupport
            ComponentPreviews={ComponentPreviews}
            useInitialHook={useInitial}
          >
            <App/>
          </DevSupport>
        </PersistGate>
      </Provider>
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root')
);

