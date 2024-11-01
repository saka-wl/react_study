import { useState } from "react"


export default function Counter() {
    const [state, setState] = useState(0);
    return (
        <div>
            <p>Counter</p>
            <button onClick={() => setState(state + 1)}>{state}</button>
        </div>
    )
}