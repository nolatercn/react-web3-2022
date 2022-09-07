import React from 'react';
import wallet from '@/models/wallet';
import { BrowserRouter } from 'react-router-dom';
import '@/less/index.less';
import App from '@/router';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
