import { useEffect, useRef, useState } from "react"

interface ICalendarControlled {
    value: Date;
    onChange: (val: Date) => void;
}

interface ICalendarUnControlled {
    defaultValue?: Date;
    onChange: (val: Date) => void;
}

type ICalendar = ICalendarControlled | ICalendarUnControlled;

/**
 * 
 * @param props value: 受控组件的值, defaultValue: 非受控组件
 * @param defaultStateValue 未传值时默认的值
 * @returns 
 */
function useMergeValue<T>(
    props: {value?: T, defaultValue?: T, onChange: (val: T) => void;}, 
    defaultStateValue: T
) {
    const { value, defaultValue, onChange } = props || {};
    const [mergeValue, setMergeValue] = useState<T>(() => {
        if(value) return value;
        else if(defaultValue) return defaultValue;
        else return defaultStateValue;
    });
    const isFirstRender = useRef(true);
    /**
     * 对于受控组件，当传入的值改变时的处理
     */
    useEffect(() => {
        if(value && !isFirstRender.current) setMergeValue(value);
        isFirstRender.current = false;
    }, [value]);

    const setValue = (val: T) => {
        if(val) {
            setMergeValue(val);
        }
        onChange && onChange?.(val);
    }
    
    return [mergeValue, setValue] as const;
}

function Calendar(props: ICalendar) {
    
    const [mergeValue, setValue] = useMergeValue({
        value: (props as ICalendarControlled).value,
        defaultValue: (props as ICalendarUnControlled).defaultValue,
        onChange: props.onChange
    }, new Date());
    
    return <div>
        {mergeValue?.toLocaleDateString()}
        <div onClick={() => { setValue(new Date('2024-5-1')) }}>2023-5-1</div>
        <div onClick={() => { setValue(new Date('2024-5-2')) }}>2023-5-2</div>
        <div onClick={() => { setValue(new Date('2024-5-3')) }}>2023-5-3</div>
    </div>
}

export default function App() {

    const [value, setValue] = useState(new Date());
    
    return (
        <>
            <p>Calendar Component</p>
            {/* 受控模式 */}
            <Calendar value={value} onChange={(val) => { setValue(val) }} />
            <button onClick={() => setValue(new Date())}>changeValue</button>
            <button onClick={() => console.log(value)}>getValue</button>
            <hr />
            {/* 非受控模式 */}
            <Calendar defaultValue={new Date()} onChange={(val) => { console.log('非受控模式,val: ' + val) }} />
        </>
    )
}