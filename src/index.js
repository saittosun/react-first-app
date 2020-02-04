//jshint esversion: 6
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// registerServiceWorker();maxi de bu var alttakinin yerine
// import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';
import App_userInAndOutput from './App_userInAndOutput';

ReactDOM.render(<App_userInAndOutput />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// registerServiceWorker();maxi de bu var alttakinin yerine
serviceWorker.unregister();
