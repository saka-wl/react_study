import { Reducer, useReducer } from 'react';

interface IData {
    result: number;
}

interface IAction {
    type: 'add' | 'minus',
    num: number;
}

function reducer(state: IData, action: IAction) {
    switch(action.type) {
        case 'add':
            return {
                result: state.result + action.num
            };
        case 'minus':
            return {
                result: state.result - action.num
            };
        default:
            return state;
    }
}

function App3() {

    const [res, dispatch] = useReducer<Reducer<IData, IAction>>(reducer, { result: 0 });
  
  return (
<div>
      <button onClick={() => dispatch({ type: 'add', num: 2 })}>加</button>
      <button onClick={() => dispatch({ type: 'minus', num: 1 })}>减</button>
      <p>{ res.result }</p>
    </div>
  );
}

export default App3;
