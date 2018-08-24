import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Lantern from './Lantern';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Lantern />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
