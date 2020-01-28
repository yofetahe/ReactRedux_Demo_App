import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Reducers from './reducers'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(Reducers, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
// store.subscribe(() => {
//   console.log(store.getState());
// });
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
