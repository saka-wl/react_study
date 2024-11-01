import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const countAtom = atomWithStorage('test-jotai-count', 0);

export default function App() {

    const [count, setCount] = useAtom(countAtom);

    return (
        <div>
            <h1>atomWithStorage + Jotai</h1>
            <p>count: {count}</p>
            <button onClick={() => setCount(count + 1)}>加一</button>
        </div>
    )
}