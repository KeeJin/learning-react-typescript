import React, { useEffect } from "react";
import logo from "../logo.svg";
import axios from "axios";

// function MyButton({ title }: { title: string }) {
//   return (
//     <button className="btn text-white bg-black ease-out hover:translate-y-1 transition-all rounded">
//       {title}
//     </button>
//   );
// }

const DisplayRainfallReading = () => {
  const [rainfall, setRainfall] = React.useState<number | null>(null);

  const getCurrentRainfallReading = async () => {
    try {
      const response = await axios.get(
        "https://api.data.gov.sg/v1/environment/rainfall"
      );
      if (response.status === 200) {
        const rainfallData = response.data;
        const current_rf_reading = rainfallData.items[0].readings[28].value;
        console.log("Last rainfall reading at S203: ", current_rf_reading);
        setRainfall(current_rf_reading);
      } else {
        console.error("API call failed.");
        setRainfall(null);
      }
    } catch (error) {
      console.error("Error occurred: ", error);
      setRainfall(null);
    }
  };

  useEffect(() => {
    // Initial fetch when the component mounts
    getCurrentRainfallReading();

    // Schedule periodic updates (e.g., every 5 minutes)
    const intervalId = setInterval(() => {
      getCurrentRainfallReading();
    }, 30 * 1000); // 30 sec in milliseconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // React.useEffect(() => {
  //     GetCurrentRainfallReading().then((currentReading) => {
  //         setRainfall(currentReading);
  //     });
  // }, []);

  return (
    <div className="my-5">
      <h2 className="font-semibold text-lg text-blue-700">
        Current rainfall reading at station S203
        <span className="italic text-sm">
          {" "}
          (closest to Jurong Island)
        </span>:{" "}
      </h2>
      {rainfall !== null ? <p>{rainfall} mm</p> : <p>Loading...</p>}
    </div>
  );
};

const DisplayCurrentDateTime = () => {
  const [currentDateTime, setCurrentDateTime] = React.useState<string | null>(
    null
  );

  const getCurrentDateTime = () => {
    const dateTimeObj = new Date();
    setCurrentDateTime(dateTimeObj.toLocaleString());
    console.log("Getting current date and time.");
  };

  useEffect(() => {
    getCurrentDateTime();

    // Schedule periodic updates (e.g., every 5 minutes)
    const intervalId = setInterval(() => {
      getCurrentDateTime();
    }, 1000); // 1 sec in milliseconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2 className="mt-5 font-semibold text-lg text-blue-700">
        Current date and time:{" "}
      </h2>
      <p>{currentDateTime}</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="App">
      <h1 className="text-lg font-extrabold">Hello, React!</h1>
      <p className="text-gray-400 text-s font-mono">Welcome to my test site.</p>
      <DisplayCurrentDateTime />

      <DisplayRainfallReading />
      {/* <MyButton title="Click me" /> */}

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
};

export default About;
