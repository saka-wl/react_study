import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import NormalComp from "./components/NormalComp";

function delay(time: number = 1000) {
  return new Promise((res, rej) => {
      setTimeout(() => {
          res(1);
      }, time)
  })
}

function App() {

  const TargetComSuspense = lazy(async () => {
    await delay();  // 模拟网络
    return import('./components/TargetCom');
  });
  
  return (
    <div className="App">
      <h1>Suspense</h1>
      <NormalComp />
      <Suspense fallback={<Loading />}>
        <TargetComSuspense />
      </Suspense>
    </div>
  );
}

export default App;
