
import { useContext, useState } from "react"
import { createContextHelper, useContextHelper } from "./utils/contextHelper";

const CountContext = createContextHelper('AComp');

function A() {
    const [count, setCount] = useState(0);
    
    return (
        <CountContext.Provider value={{ count, setCount }}>
            <p>A.tsx</p>
            <h4>A - { count }</h4>
            <B />
        </CountContext.Provider>
    )
}

function B() {
    return (
        <>
            <p>B.tsx</p>
            <C />
        </>
    )
}

function C() {
    const { count, setCount } = useContext(useContextHelper('AComp'));
    return (
        <>
            <p>C.tsx</p>
            <button onClick={() => setCount(count + 1)}>c - { count }</button>
        </>
    )
}

export default A;