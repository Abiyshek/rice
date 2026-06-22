import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Catch and ignore ResizeObserver loop warning to prevent dev runtime overlay
if (typeof window !== 'undefined') {
  window.addEventListener('error', (e) => {
    if (e.message && (
      e.message.includes('ResizeObserver loop completed with undelivered notifications') || 
      e.message.includes('ResizeObserver loop limit exceeded')
    )) {
      const resizeObserverErrDiv = document.getElementById('webpack-dev-server-client-overlay-div');
      const resizeObserverErr = document.getElementById('webpack-dev-server-client-overlay');
      if (resizeObserverErrDiv) resizeObserverErrDiv.style.display = 'none';
      if (resizeObserverErr) resizeObserverErr.style.display = 'none';
      e.stopImmediatePropagation();
    }
  });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
