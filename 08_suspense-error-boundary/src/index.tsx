
import ReactDOM from 'react-dom/client';
// Suspense + lazy
import App from './App';
// jotai + Suspense
// import App from './App2';
// ErrorBoundary
// import App from './App3';
// Suspense + throw Promise
// import App from './App4';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);
