import { forwardRef, ForwardRefRenderFunction, useEffect, useImperativeHandle, useRef } from "react";

interface ICustomInputRef {
    focusFn: () => void;
}

const ChildComp: ForwardRefRenderFunction<ICustomInputRef, { name: string }> = (props, ref) => {

    const iptRef = useRef<HTMLInputElement>(null);
    
    const focusFn = () => {
        iptRef.current?.focus();
    }

    useImperativeHandle(ref, () => {
        return {
            focusFn
        }
    }, [iptRef]);
    
    return (
        <div>
            <input type="text" ref={iptRef} placeholder={ props.name } />
        </div>
    )
}

const WrapedChildComp = forwardRef(ChildComp);

function App5() {

    const iptRef = useRef<ICustomInputRef>(null);

    useEffect(() => {
        console.log(iptRef.current);
    }, []);
    
    return (
        <div className="container">
            <h1>useRef + forwardRef</h1>
            <WrapedChildComp ref={iptRef} name='saka-wl' />
            <button onClick={() => iptRef.current?.focusFn && iptRef.current?.focusFn()}>Focus Click</button>
        </div>
    )
}

export default App5;