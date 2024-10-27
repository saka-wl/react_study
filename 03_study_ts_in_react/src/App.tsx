import { ComponentProps, FunctionComponent, HTMLAttributes, MouseEventHandler, ReactElement, ReactNode } from "react";

function App() {

  const element: ReactNode = null;
  const element2: ReactElement = <p>Ts In React</p>;

  return (
    <div className="App">
      { element2 }
      <Child name="saka" clickHandler={(e) => console.log(e)} />
    </div>
  );
}

/**
 * 如果你希望Child标签里面有原来的Div中HTML属性
 */
// interface IChildProps extends HTMLAttributes<HTMLDivElement> {
//   name: string;
// }
interface IChildProps extends ComponentProps<'div'> {
  name: string;
  /**
   * 添加点击事件的类型
   */
  clickHandler?: MouseEventHandler<HTMLDivElement>;
}

const Child: FunctionComponent<IChildProps> = (props) => {
  return (<div onClick={props.clickHandler}>Child.tsx - { props.name }</div>);
}

export default App;
