import React from 'react'
import { useCounter, CounterProvider } from '../CounterContext';

function CounterDisplay() {
    const { count } = useCounter()!;

    return (<div>
        Your money: ${count}
    </div>);
}

function CounterControls() {
    const { increment, decrement } = useCounter()!;

    return (
        <div className='space-x-5'>
            <button className="btn" onClick={increment}>Add</button>
            <button className="btn" onClick={decrement}>Remove</button>
        </div>
    );
}

export default function Home() {
    return (
        <div className="App">
            <h1>Shenzhen Bank Home Page</h1>
            <p>This is your bank account.</p>
            <CounterProvider>
                
                    <CounterDisplay />
                    <CounterControls />
            </CounterProvider>
        </div>
    );
}