import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './store';
import { populateProduce } from './store/produce';
import { populateCart } from './store/cart';

const store = configureStore();

if (process.env.NODE_ENV !== "production"){
  window.store = store;
  window.populateProduce = populateProduce;
  window.populateCart = populateCart;
}

function Root() {
  return (
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);