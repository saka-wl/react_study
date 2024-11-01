import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const delay = (timer: number) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(1);
        }, timer);
    })
}

interface ILoginInfo {
    account: string | null;
    nickname: string | null;
}

// export const loginAtom = atom<ILoginInfo>({
//     account: null,
//     nickname: null
// });

// export const asyncLogin = atom(null, async (get, set, params?: any) => {
//     await delay(1000);
//     set(loginAtom, {
//         account: 'test',
//         nickname: 'test'
//     })
// })

/**
 * 一般的jotai原子化是atom
 * atomWithStorage则是添加了持久化储存处理
 */
const loginAtom = atomWithStorage<ILoginInfo>('react-jotai-test-login', {
    account: null,
    nickname: null
})

export const loginInfo = atom(
    (get) => get(loginAtom),
    async (get, set, params: any = null) => {
        if(params) {
            set(loginAtom, params);
            return;
        }
        await delay(1000);
        set(loginAtom, {
            account: 'saka-wl',
            nickname: 'wl'
        })
    }
)