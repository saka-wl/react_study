import { useEffect, useLayoutEffect, useRef, useState } from 'react';

function App2() {
  const [state, setState] = useState('Hello React.js');
  
  function delayJs(time: number = 100) {
    const last = Date.now();
    while(Date.now() - last < time) {};
    return 1;
  }

  /**
   * 会发现useEffect会存在闪烁
   */
//   useEffect(() => {
//     delayJs(55);
//     setState('Hi, React.ts')
//   }, []);

  /**
   * 无闪烁
   */
  useLayoutEffect(() => {
    delayJs(55);
    setState('Hi, React.ts')
  }, []);
  
  return (
    <div>
      <p>{ state }</p>
    </div>
  );
}

export default App2;
