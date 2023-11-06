import '@linkmaster/uikit/styles'; // For fonts
import './styles/main.css';
import React from 'react'
import 'react-intl';
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import App from './App.tsx'
import store from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
  </Provider>
)
