import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
=======
import {createStore,applyMiddleware,combineReducers} from 'redux'
import  {Provider}  from 'react-redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import reportWebVitals from './reportWebVitals';

// import {reducer,reducerLoad} from './redux/reducer'
const rootReducer = combineReducers({reducer,reducerLoad})
const store = createStore(rootReducer,applyMiddleware(logger,thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
>>>>>>> c4f1b8fd1c4f0c2666b76fb45b7942384985ae37
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
