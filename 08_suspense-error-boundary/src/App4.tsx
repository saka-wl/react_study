import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

let data: string | null = '';
function fetchData() {
    if (data) return data;
    if (Math.random() > 0.5)
        throw new Error('Network Error!');
    else
        throw new Promise((res, rej) => {
            setTimeout(() => {
                data = 'hello';
                res(data);
            }, 1000);
        });
}

function Child() {
    const data = fetchData();
    return <p>{data}</p>;
}

/**
 * Suspense 会捕获子组件 Child 内部最近的那个 Promise
 * ErrorBoundary 会捕获子组件 Child 内部抛出的错误 new Error(...),然后渲染 fallbackRender 内写的组件
 * @returns 
 */
export default function App() {
    return (
        <div>
            <p>Suspense + Promise + throw</p>
            <Suspense fallback={<div>loading...</div>}>
                <ErrorBoundary fallbackRender={({ error }) => <div>error: {error.message}</div>}>
                    <Child />
                </ErrorBoundary>
            </Suspense>
        </div>
    )
}