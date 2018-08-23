import React from 'react';
import ReactDOM from 'react-dom';
import Lantern from './Lantern';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Lantern />, document.getElementById('root'));
registerServiceWorker();
