import '@/styles/main.css';
import '@linkmaster/uikit/styles';
import router from '@/router';
import React from 'react';
import 'react-intl';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
// import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  // </Provider>
);
