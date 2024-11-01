import { createContext, ReactNode, useContext, useRef } from "react";
import { matchPath, useLocation, useOutlet } from "react-router-dom"

interface IKeepAliveLayoutProps {
    keepPaths: (RegExp | string)[];
    children: ReactNode,
}

/**
 * 缓存组件数组
 */
const keepElements: Record<string, ReactNode> = {};

/**
 * 去除缓存的组件
 */
const clearedPaths: string[] = [];

export const KeepAliveContext = createContext<{ keepPaths: (string | RegExp)[]; keepElements?: Record<string, ReactNode>; clearOutlet?: (clearPath: string) => void; }>({
    keepPaths: [],
    keepElements,
    clearOutlet: (clearPath: string) => {
        keepElements[clearPath] = null;
        clearedPaths.push(clearPath);
    },
});

const isKeepPath = (keepPaths: IKeepAliveLayoutProps['keepPaths'], path: string) => {
    if(clearedPaths.includes(path)) return false;
    for (let item of keepPaths) {
        if (typeof item !== 'object' && item === path) return true;
        if (item instanceof RegExp && item.test(path)) return true;
    }
    return false;
}

/**
 * 将代码中原本的 <Outlet /> 替换为 useKeepOutlet()
 * @returns 
 */
export const useKeepOutlet = () => {
    const location = useLocation();
    const element = useOutlet();
    const { keepPaths } = useContext(KeepAliveContext);

    const isKeep = isKeepPath(keepPaths, location.pathname);
    if (isKeep) keepElements[location.pathname] = element;

    return (
        <>
            {
                Object.entries(keepElements).map(([pathname, elem]) => (
                    <div key={pathname} hidden={!matchPath(location.pathname, pathname)} style={{ overflow: 'hidden auto' }}>
                        {elem}
                    </div>
                ))
            }
            {!isKeep && element}
        </>
    )
}

/**
 * 在路由顶层包裹 <KeepAliveLayout>
 * @param props { keepPaths }
 * @returns 
 */
const KeepAliveLayout = (props: IKeepAliveLayoutProps) => {
    
    const { keepElements, clearOutlet } = useContext(KeepAliveContext);

    return (
        <KeepAliveContext.Provider value={{ keepPaths: props.keepPaths, keepElements, clearOutlet }}>
            {props.children}
        </KeepAliveContext.Provider>
    );
}

export default KeepAliveLayout;