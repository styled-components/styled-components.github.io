import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import { colors } from './constants';
import App from './App';

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: ${colors.secondary}
  }

  #root {
    min-height: 100vh;
  }
`;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

import track from './analytics';
track();
