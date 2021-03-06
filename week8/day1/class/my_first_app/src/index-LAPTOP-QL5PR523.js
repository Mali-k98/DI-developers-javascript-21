import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
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
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
