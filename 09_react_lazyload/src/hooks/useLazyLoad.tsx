import { CSSProperties, FC, ReactNode, useEffect, useRef, useState } from "react";

interface ILazyload{
    className?: string,
    style?: CSSProperties,
    placeholder?: ReactNode,
    offset?: number,
    width?: number | string,
    height?: string | number,
    onContentVisible?: () => void,
    children: ReactNode,
}

const useLazyLoad: FC<ILazyload> = (props) => {
    const {
        style,
        placeholder,
        offset,
        width,
        height,
        onContentVisible,
        children
    } = props;
    
    const styles = { height, width, style };
    const containerRef = useRef<HTMLDivElement>(null);
    const elementObserver = useRef<IntersectionObserver>();
    const [visable, setVisable] = useState(false);

    /**
     * 当元素离开自定义offset可视区域或者进入时触发lazyLoadHandler
     * https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserverEntry
     * @param entries 
     */
    function lazyLoadHandler(entries: IntersectionObserverEntry[]) {
        const [entry] = entries;
        /**
         * 返回一个布尔值，如果目标元素与交叉区域观察者对象的根相交，则返回 true .
         * 如果返回 true, 则 IntersectionObserverEntry 描述了变换到交叉时的状态; 
         * 如果返回 false, 那么可以由此判断，变换是从交叉状态到非交叉状态。
         */
        const { isIntersecting } = entry;

        if (isIntersecting) {
            // 变换到交叉时的状态
            setVisable(true);
            onContentVisible?.();
    
            const node = containerRef.current;
            if (node && node instanceof HTMLElement) {
                // 当目标元素出现在自定义offset范围内，则取消监听（直接下载目标元素，达到要求）
                elementObserver.current?.unobserve(node);
            }
        }
    }

    useEffect(() => {
        const options: IntersectionObserverInit = {
            rootMargin: typeof offset === 'number' ? undefined : `${offset}px`,
            threshold: 0
        }
        elementObserver.current = new IntersectionObserver(lazyLoadHandler, options);
        const node = containerRef.current;
        // 给目标元素添加监听
        if(node instanceof HTMLElement) elementObserver.current.observe(node);
        return () => {
            if(node && node instanceof HTMLElement) elementObserver.current?.unobserve(node);
        }
    }, []);
    
    return (
        <div style={styles} ref={containerRef}>
            { visable ? children : placeholder }
        </div>
    )
}

export default useLazyLoad;