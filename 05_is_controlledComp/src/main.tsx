
import { createRoot } from 'react-dom/client'
// 受控组件模式
// import App from './App.tsx'
// 非受控模式 useRef
// import App from './App2.tsx'
// 日历demo
import App from './App3.tsx';

createRoot(document.getElementById('root')!).render(
  <App />
)
