import { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState(0);
  async function fetchData(delay: number = 1000): Promise<number> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        console.log("state: " + state + "--useEffect fetched.");
        res(Math.random());
      }, delay);
    });
  }

  useEffect(() => {
    console.log("state: " + state + "--useEffect start.")
    fetchData();
    return () => {
      console.log("state: " + state + "--useEffect cleanup.");
    }
  }, [state]);

  console.log("state: " + state + "--render.");
  
  return (
    <div>
      <button onClick={() => setState(i => i + 1)}>{ state }</button>
    </div>
  );
}

export default App;
