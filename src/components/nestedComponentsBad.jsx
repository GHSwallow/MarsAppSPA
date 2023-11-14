import {useState} from "react";

function CounterButton({count, setCount}) {
    return (
        <>
            <button onClick={() => setCount((count) => count + 1)}>
                click me!
            </button>
        </>
    )
}

export default function Component1Bad() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Component2 count={count} setCount = {setCount}/>
            <Component3 count={count}/>
        </>

    )
}

function Component2({count, setCount}) {
    return (
        <>
            <CounterButton count={count} setCount={setCount}/>
        </>
    )
}

function Component3({count}) {
    return (
        <>
            <Component4 count={count}/>
            <p>
                a message
            </p>
        </>
    )
}

function Component4({count}) {
    return (
        <>
            counter = {count}
        </>
    )
}