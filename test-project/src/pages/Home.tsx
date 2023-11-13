import React, { useEffect, useState } from "react";
import { useCounter, CounterProvider } from "../CounterContext";
import AxisVisualizer from "../AxisVisualizer";

function CounterDisplay() {
  const { count } = useCounter();

  return <p className="mt-5 text-s">Your balance: ${count}</p>;
}

function CounterControls() {
  const { increment, decrement } = useCounter()!;

  return (
    <div className="space-x-3 mt-3">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
        onClick={increment}
      >
        Add
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full"
        onClick={decrement}
      >
        Remove
      </button>
    </div>
  );
}

interface GamepadInputData {
  id: string;
  buttons: readonly GamepadButton[];
  axes: readonly number[];
}

const GamepadComponent: React.FC = () => {
  const [gamepad, setGamepad] = useState<Gamepad | null>(null);
  const [gamepadInputValue, setGamepadInputValues] =
    useState<GamepadInputData | null>(null);

  useEffect(() => {
    // Event handler for gamepad connection
    const handleGamepadConnected = (event: GamepadEvent) => {
      const connectedGamepad = event.gamepad;
      console.log("Gamepad connected:", connectedGamepad.id);
      setGamepad(connectedGamepad);
    };

    // Event handler for gamepad disconnection
    const handleGamepadDisconnected = (event: GamepadEvent) => {
      const disconnectedGamepad = event.gamepad;
      console.log("Gamepad disconnected:", disconnectedGamepad.id);
      setGamepad(null);
    };

    // Main loop for handling gamepad input
    const handleGamepadInput = () => {
      const gamepads = navigator.getGamepads();
      const updatedGamepad = gamepads[0]; // Assuming there's only one gamepad connected
      if (updatedGamepad) {
        setGamepadInputValues({
          id: updatedGamepad.id,
          buttons: updatedGamepad.buttons,
          axes: updatedGamepad.axes,
        });

        // Handle button and axis input
        // console.log('Buttons:', updatedGamepad.buttons);
        // console.log('Axes:', updatedGamepad.axes);
      }

      // Schedule the next frame
      requestAnimationFrame(handleGamepadInput);
    };

    // Add event listeners when the component mounts
    window.addEventListener("gamepadconnected", handleGamepadConnected);
    window.addEventListener("gamepaddisconnected", handleGamepadDisconnected);

    // Start the main loop
    handleGamepadInput();

    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener("gamepadconnected", handleGamepadConnected);
      window.removeEventListener(
        "gamepaddisconnected",
        handleGamepadDisconnected
      );
    };
  }, [gamepad]);

  return (
    <>
      <h2 className="font-medium mt-6 mb-4 text-4xl">Gamepad Input</h2>
      {gamepad ? (
        <>
          <p>Connected: {gamepad.id}</p>
          {gamepadInputValue !== null ? (
            <>
              <AxisVisualizer
                label="Axis 0: "
                axisValue={gamepadInputValue.axes[0]}
              />
              <AxisVisualizer
                label="Axis 1: "
                axisValue={gamepadInputValue.axes[1]}
              />
              <AxisVisualizer
                label="Axis 2: "
                axisValue={gamepadInputValue.axes[2]}
              />
              <AxisVisualizer
                label="Axis 3: "
                axisValue={gamepadInputValue.axes[3]}
              />
              <div className="flex justify-center text-xl font-semibold">
                <p className="mr-4 text-center">
                  Button 0: {gamepadInputValue.buttons[0].value}
                </p>
                <p className="mr-4 text-center">
                  Button 1: {gamepadInputValue.buttons[1].value}
                </p>
                <p className="mr-4 text-center">
                  Button 2: {gamepadInputValue.buttons[2].value}
                </p>
                <p className="mr-4 text-center">
                  Button 3: {gamepadInputValue.buttons[3].value}
                </p>
              </div>
            </>
          ) : (
            <p>null</p>
          )}
        </>
      ) : (
        <p>No gamepad connected</p>
      )}
    </>
  );
};

export default function Home() {
  return (
    <div className="App">
      <h1 className="font-bold text-4xl">St. Peters Bank Home Page</h1>
      <p className="font-medium mt-3 text-lg">
        This is really your bank account.
      </p>
      <CounterProvider>
        <CounterDisplay />
        <CounterControls />
      </CounterProvider>
      <GamepadComponent />
    </div>
  );
}
