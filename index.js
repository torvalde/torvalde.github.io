'use strict';

import React from 'react';
import { render } from 'react-dom';
import Hello from './js/components/Hello';

render(
  <Hello page={window.location.pathname}/>,
  document.getElementById('main')
);

