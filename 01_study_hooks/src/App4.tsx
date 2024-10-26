import { forwardRef, ForwardRefRenderFunction, useEffect, useRef } from "react";


const ChildComp: ForwardRefRenderFunction<HTMLInputElement, { name: string }> = (props, ref) => {
    console.log(props.name);
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
}

const WrapedChildComp = forwardRef(ChildComp);

function App4() {

    const iptRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        console.log(iptRef.current);
    }, []);
    
    return (
        <div className="container">
            <h1>useRef + forwardRef</h1>
            <WrapedChildComp ref={iptRef} name='saka-wl' />
        </div>
    )
}

export default App4;