import { FunctionComponent, ReactElement, ReactNode } from "react";

function App() {

  const element: ReactNode = null;
  const element2: ReactElement = <p>Ts In React</p>;

  return (
    <div className="App">
      { element2 }
      <Child name="saka" />
    </div>
  );
}

const Child: FunctionComponent<{ name: string; }> = (props) => {
  return (<p>Child.tsx - { props.name }</p>);
}

export default App;
