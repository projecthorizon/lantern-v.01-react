import React from 'react';
import ReactDOM from 'react-dom';
import Lantern from './Lantern';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Lantern />, div);
  ReactDOM.unmountComponentAtNode(div);
});
