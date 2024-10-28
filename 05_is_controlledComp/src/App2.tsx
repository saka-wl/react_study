import { ChangeEvent, useRef, useState } from 'react'

function App() {

  const iptRef = useRef<HTMLInputElement>(null);

  const getIptValue = () => {
    console.log(iptRef.current?.value);
  }

  console.log('render App...')

  return (
    <>
      <p>Hello React.tsx</p>
      <input type="text" ref={iptRef} />
      <button onClick={getIptValue}>getIpt Value</button>
    </>
  )
}

export default App
