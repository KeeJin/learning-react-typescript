import React, { createContext, useContext, useState } from "react";

interface CounterContextInterface {
  count: number;
  increment: () => void;
  decrement: () => void;
}

interface CounterProviderProps {
  children: React.ReactNode;
}

// Create a context
const CounterContext = createContext<CounterContextInterface>({
  count: 0,
  increment: () => {},
  decrement: () => {},
});

// Create a provider component (this is a functional component)
export const CounterProvider: React.FC<CounterProviderProps> = ({
  children,
}) => {
  const [count, setCount] = useState<number>(100);

  const increment = () => {
    console.log("incrementing by 2.");
    setCount((prevCount) => prevCount + 2);
  };

  const decrement = () => {
    console.log("decrementing by 1.");
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

// Create a custom hook to access the context
export const useCounter = () => useContext(CounterContext);
