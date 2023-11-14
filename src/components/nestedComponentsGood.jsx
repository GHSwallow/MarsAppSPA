import {createContext, useContext, useState} from "react";

const CountContext = createContext(null);

export default function Component1Good() {
    const [count, setCount] = useState(0)
    return (
        <>
            <CountContext.Provider
                value={{
                    count,
                    setCount,
                }}>
                <Component2/>
                <Component3/>
            </CountContext.Provider>
        </>
    )
}

function CounterButton() {
    const { setCount } = useContext(CountContext);
    return (
        <>
            <button onClick={() => setCount((count) => count+1)}>
                click me!
            </button>
        </>
    )
}

function Component2() {
    return (
        <>
            <CounterButton/>
        </>
    )
}

function Component3() {
    return (
        <>
            <Component4/>
            <p>
                a message
            </p>
        </>
    )
}

function Component4() {
    const { count } = useContext(CountContext);
    return (
        <>
            counter = {count}
        </>
    )
}