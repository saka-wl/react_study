
import ReactDOM from 'react-dom/client';
// useEffect 调用时机
// import App from './App';
// useLayoutEffect & useEffect 的区别
// import App from './App2';
// useReducer 的使用
// import App from './App3';
// useRef + forwardRef 暴露子组件
// import App from './App4';
// useRef + forwardRef + useImperativeHandle 暴露子组件里面的方法
// import App from './App5';
// context + helper
// import App from './App6';
// React.memo + useCallback
import App from './App7';
// useMemo
// import App from './App8';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
