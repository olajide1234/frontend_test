
import React from 'react';
import { render } from 'react-dom';
import { Demo } from './pages/Demo';

export function start () {
  render(<Demo />, document.getElementsByTagName('body')[0]);
}
