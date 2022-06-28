import React from 'react';
import ReactDOM from 'react-dom/client';
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import App from './App';
import reducers from './reducers';
import thunk from 'redux-thunk';
import {HelmetProvider} from "react-helmet-async"

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({middleware:[thunk], reducer:reducers})
root.render(

    <Provider store={store}>
        <HelmetProvider>
             <App />
        </HelmetProvider>
    </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
