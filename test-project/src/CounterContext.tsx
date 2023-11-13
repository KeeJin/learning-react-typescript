import React, {createContext, useContext, useState, ReactNode} from "react";

// Create a context
const CounterContext = createContext<{ count: number; increment: () => void; decrement: () => void } | undefined>(undefined);

// Create a provider component (this is a functional component)
export const CounterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [count, setCount] = useState(100);
  
    const increment = () => {
      console.log('incrementing by 2.');
      setCount(count + 2);
    };
  
    const decrement = () => {
      console.log('decrementing by 1.');
      setCount(count - 1);
    };
  
    return (
      <CounterContext.Provider value={{ count, increment, decrement }}>
        {children}
      </CounterContext.Provider>
    );
  };

  // Create a custom hook to access the context
export const useCounter = () => {
    return useContext(CounterContext);
  };