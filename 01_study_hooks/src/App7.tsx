import { memo, useCallback, useState } from "react";

const delayFn = (): Promise<number> => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(0);
        }, 400)
    })
}

function App7() {
    const [name, setName] = useState('saka');
    const [age, setAge] = useState(22);
    const [count, setCount] = useState(0);

    const handleCount = async () => setCount(await delayFn());

    const handleCountWithMemo = useCallback(() => {
        handleCount();
    }, []);

    console.log("App7 render!");

    return (
        <div>
            <h1>Hello App7.tsx</h1>
            <button onClick={() => setAge(age + 1)}>age: {age}</button>
            <button onClick={() => setCount(count + 1)}>count: {count}</button>

            <ChildMemo name={name} handleCount={handleCountWithMemo} count={count} />
        </div>
    )
}

/**
 * 在使用memo包裹的组件，如果该组件的props里面的数据不修改时，那么该组件就不会重新渲染（即使父组件渲染）
 */
const ChildMemo = memo(Child);

function Child(props: { name: string; count: number; handleCount: () => void }) {
    console.log("Child render!");
    return (
        <>
            <div>Child</div>
            <p>name: {props.name}</p>
            <button onClick={props.handleCount}>{props.count}</button>
        </>
    )
}

export default App7;