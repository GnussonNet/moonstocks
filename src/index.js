import React from 'react';
import ReactDOM from 'react-dom';
import './sass/main.scss';

import App from './components/app/App.js';
import { AuthProvider } from './components/hooks/useAuth';

ReactDOM.render(
  <React.StrictMode>
    {/* Enables passing useAuth function and variables  */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
