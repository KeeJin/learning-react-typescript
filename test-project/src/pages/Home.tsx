import React from 'react'
import { useCounter, CounterProvider } from '../CounterContext';

function CounterDisplay() {
    const { count } = useCounter()!;

    return (
        <p className='mt-5 text-s'>
            Your balance: ${count}
        </p>
    );
}

function CounterControls() {
    const { increment, decrement } = useCounter()!;

    return (
        <div className='space-x-3 mt-3'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full" onClick={increment}>Add</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full" onClick={decrement}>Remove</button>
        </div>
    );
}

export default function Home() {
    return (
        <div className="App">
            <h1 className='font-bold text-4xl'>St. Peters Bank Home Page</h1>
            <p className='font-medium mt-3 text-lg'>This is really your bank account.</p>
            <CounterProvider>

                <CounterDisplay />
                <CounterControls />
            </CounterProvider>
        </div>
    );
}