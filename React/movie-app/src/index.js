import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'typeface-roboto'
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
