import React from 'react'
import { useCounter, CounterProvider } from '../CounterContext';

function CounterDisplay() {
    const { count } = useCounter()!;

    return (<div>
        Count: {count}
    </div>);
}

function CounterControls() {
    const { increment, decrement } = useCounter()!;

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default function Home() {
    return (
        <div className="App">
            <h1>Home Page</h1>
            <p>This is the home page.</p>
            <CounterProvider>
                
                    <CounterDisplay />
                    <CounterControls />
            </CounterProvider>
        </div>
    );
}