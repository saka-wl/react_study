import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

/**
 * 
 * @param fn 计时器执行的函数
 * @param delay 计时器执行时间间隔
 * @returns 让计时器停止的回调
 */
function useInterval(fn: Function, delay: number = 1000): Function {
  const fnRef = useRef<Function>(fn);
  let cleanFnRef = useRef<Function>();

  /**
   * 减少因为clean函数产生的不必要的渲染
   */
  const clean = useCallback(() => {
    cleanFnRef?.current?.();
  }, []);

  useLayoutEffect(() => {
    fnRef.current = fn;
  })

  useEffect(() => {
    const timerId = setInterval(() => fnRef.current && fnRef.current(), delay);
    cleanFnRef.current = () => timerId && clearInterval(timerId);
    return clean;
  }, []);

  return clean;
}

function App() {
  const [count, setCount] = useState(0);
  /**
   * 1. 下面的useEffect没有依赖数组，只会在首次渲染的时候挂载setInterval
   * 里面产生了闭包，count的值一直都是0
   */
  // useEffect(() => {
  //   setInterval(() => {
  //     setCount(count + 1);
  //   }, 1000);
  // }, []);

  // 2. 使用useEffect的数组
  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     setCount(count + 1);
  //   }, 1000);
  //   return () => {
  //     timerId && clearInterval(timerId);
  //   }
  // }, [count]);

  /**
   * 3. 使用useRef来保存全局函数
   * 如果不使用useRef的话，而是使用普通函数 -> way2
   * 结果就和(1.)一样，一直显示1
   * 因为useEffect没有依赖数组，就不会因为state数据更新而刷新
   * updateCountFn函数中的state一直都会是0+1，因为产生了闭包
   * @returns 
   */
  // const updateCountFn = () => setCount(count + 1);
  // const updateCountRef = useRef(updateCountFn);
  // updateCountRef.current = updateCountFn;

  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     // updateCountFn(); // way2
  //     updateCountRef.current && updateCountRef.current();
  //   }, 1000);
  //   return () => {
  //     timerId && clearInterval(timerId);
  //   }
  // }, []);

  /**
   * 4. 使用自定义封装的hook
   */
  const cleanTimer = useInterval(() => setCount(count + 1), 1000);

  return (
    <div className="App">
      <h1>闭包</h1>
      <p>{ count }</p>
      <button onClick={() => cleanTimer()}>stop</button>
    </div>
  );
}

export default App;
