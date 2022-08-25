import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import '@/less/index.less';
import routes from './router/index';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <>{useRoutes(routes)}</>
    </BrowserRouter>
  </React.StrictMode>
);
