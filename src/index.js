import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { tryLoadAndStartRecorder } from '@alwaysmeticulous/recorder-loader'

async function startApp() {
  console.log('env vars: ', process.env);
  const isDevOrPreview = process.env.NODE_ENV === 'development' ||  process.env.REACT_APP_VERCEL_ENV === 'preview';
  const runVisualTests = process.env.REACT_APP_RUN_VISUAL_TESTS === 'true';
  if(runVisualTests && isDevOrPreview) {
    await tryLoadAndStartRecorder({
     projectId: process.env.REACT_APP_METICULOUS_PROJECT_ID,
    });
    console.log('Meticulous Recorder loaded');
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}

startApp();

