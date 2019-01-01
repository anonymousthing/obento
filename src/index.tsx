import { Home } from 'pages/home/home';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Home/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
