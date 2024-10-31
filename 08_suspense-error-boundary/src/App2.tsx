import { atom, useAtom } from "jotai"
import { Suspense } from "react";

function delay(time: number = 1000): Promise<string> {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('saka');
        }, time)
    })
  }

const userNameAtom = atom(async (get) => {
    const username = await delay(1000);
    return username;
})

const UserNameComp = () => {
    const [userName] = useAtom(userNameAtom);
    return (
        <div>
            <h1>{ userName }</h1>
        </div>
    )
}

export default function App() {
    return (
        <div>
            <p>Suspense + Jotai</p>
            <Suspense fallback={<div>loading...</div>}>
                <UserNameComp />
            </Suspense>
        </div>
    )
}