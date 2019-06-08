import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// Calling unregister instead of registerServiceWorker allows
// for easy cache busting (hopefully)
// https://stackoverflow.com/questions/49604821/cache-busting-with-create-react-app
unregister();
