import React from 'react';
import wallet from "@/models/wallet";
import { BrowserRouter } from 'react-router-dom';
import '@/less/index.less';
import App from '@/router';
import dva from 'dva';
const app = dva();

app.model(wallet);

app.router(() => (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
));

app.start('#root');
