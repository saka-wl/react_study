import { useAtom } from "jotai"
import { loginInfo } from "./store/loginAtom"

function App() {

  const [loginMsg, setLoginMsg] = useAtom(loginInfo);

  return (
    <>
      <h1>Jotai & Vite</h1>
      <p>account: { loginMsg.account }</p>
      <p>nickname: { loginMsg.nickname }</p>
      <button onClick={() => { setLoginMsg({ account: 'saka', nickname: 'saka-wl' }) }}>change</button>
      <button onClick={() => setLoginMsg()}>async change</button>
    </>
  )
}

export default App
