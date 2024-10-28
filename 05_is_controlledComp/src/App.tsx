import { ChangeEvent, useRef, useState } from 'react'

function App() {

  const [iptValue, setiptValue] = useState('');

  /**
   * 1. 受控组件
   * @param e 
   */
  const onIptChange = (e: ChangeEvent<HTMLInputElement>) => {
    setiptValue(e.target.value.toLocaleUpperCase());
  }

  console.log('render App...')

  return (
    <>
      <p>Hello React.tsx</p>
      <input type="text" value={iptValue} onChange={onIptChange} />
      <button onClick={() => console.log(iptValue)}>getIpt Value</button>
    </>
  )
}

export default App
