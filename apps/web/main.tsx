import '@/styles/main.css';
import router from '@/router';
import store from '@/store';
import React from 'react';
import 'react-intl';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
