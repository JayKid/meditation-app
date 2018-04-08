import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import Store from './store';

const StoreInstance = Store(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
 <Provider store={StoreInstance}>
   <App />
 </Provider>,
 document.getElementById('root')
);
