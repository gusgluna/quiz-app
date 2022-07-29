import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QuizContextProvider } from './context/QuizContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QuizContextProvider>
      <App />
    </QuizContextProvider>
  </React.StrictMode>
);
