import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)
    const [other, setOther] = useState(0)

    // Without useCallback, a NEW function instance is created on every render.
    const incrementCount = () => {
        setCount(c => c + 1)
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <h2>Other: {other}</h2>

            <button onClick={() => setOther(other + 1)}>Change Other</button>

            {/* CounterButton re-renders every time App renders */}
            <CounterButton onClick={incrementCount} />
        </div>
    )
}

const CounterButton = ({ onClick }) => {
    console.log('CounterButton re-rendered')
    return <button onClick={onClick}>Increment Count</button>
}

export default App
