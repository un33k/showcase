import React from 'react';
import ReactDOM from 'react-dom';

import { CounterButton } from '../components/client/counterButton';

describe('CounterButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CounterButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
