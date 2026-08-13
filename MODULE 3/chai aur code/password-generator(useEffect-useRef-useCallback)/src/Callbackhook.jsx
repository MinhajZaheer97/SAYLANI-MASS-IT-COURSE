import React from 'react'
import { useState, useCallback, memo } from 'react'

function Callbackhook() {
    const [count, setCount] = useState(0)
    const [other, setOther] = useState(0)

    // useCallback returns the same function instance on every render
    // (as long as the dependencies in [] don't change).
    const incrementCount = useCallback(() => {
        setCount(c => c + 1)
    }, [])

    return (
        <div>
            <h1>Count: {count}</h1>
            <h2>Other: {other}</h2>

            <button onClick={() => setOther(other + 1)}>Change Other</button>

            {/* CounterButton only re-renders when the callback changes */}
            <CounterButton onClick={incrementCount} />
        </div>
    )
}


// memo prevents re-renders unless props change
const CounterButton = memo(({ onClick }) => {
    console.log('CounterButton re-rendered')
    return <button onClick={onClick}>Increment Count</button>
})


export default Callbackhook
