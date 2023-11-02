import '@linkmaster/uikit/styles'; // For fonts
import './styles/main.css';
import React from 'react'
import  'react-intl';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
