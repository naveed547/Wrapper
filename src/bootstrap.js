import React from 'LibApp/react';
import ReactDOM from 'LibApp/react-dom';
import { BrowserRouter } from 'LibApp/react-router-dom';
import { Provider } from "LibApp/react-redux";
import App from './App';
import store from 'LibApp/store';
import { ContextProvider } from "@mfe/sharedapp";

ReactDOM.render(
  <Provider store={store}>
    <ContextProvider.Provider value="WrapContext">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider.Provider>
  </Provider>,
  document.getElementById(
    'root'
  )
);
