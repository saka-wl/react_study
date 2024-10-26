
import { useMemo, useState } from "react";

const getObj = (val: number) => {
    // ... 复杂度很高的 Js 处理
    return {
        name: 'saka',
        age: val
    }
}

function App8() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const getInfoWithMemo = useMemo(() => {
        return getObj(count2);
    }, [count2]);

    const getInfoNormal = () => {
        console.log('getInfoNormal!');
        return getObj(count2);
    }

    console.log("App8 render!");

    return (
        <div>
            <h1>Hello App8.tsx</h1>
            <button onClick={() => setCount(count + 1)}>count: {count}</button>
            <button onClick={() => setCount2(count2 + 1)}>count2: {count2}</button>
            <p>
                name: {getInfoWithMemo.name} -
                age: {getInfoWithMemo.age}
            </p>
        </div>
    )
}

export default App8;