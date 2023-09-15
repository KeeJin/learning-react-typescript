import React from 'react'
import logo from './logo.svg';

function MyButton({ title }: { title: string }) {
    return (
        <button>{title}</button>
    );
}

export default function About() {
    const currentDate = new Date();
    return (
        <div className="App">
            <h1>Hello, React!</h1>
            <p>Welcome to my portfolio website.</p>
            <p>Current date and time: {currentDate.toLocaleString()}</p>
            <MyButton title="Click me" />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}