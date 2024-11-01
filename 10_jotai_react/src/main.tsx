
import { createRoot } from 'react-dom/client'
// 普通使用 jotai
import App from './App.tsx'
// Joati 持久化
// import App from './App2.tsx'

createRoot(document.getElementById('root')!).render(
  <App />
)
