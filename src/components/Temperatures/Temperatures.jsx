import { useState } from "react";

import Variable from "../Variable/Variable";
import "./Temperatures.css";

function Temperatures() {
    const [celsius, setCelsius] = useState(25);
    const [fahrenheit, setFahrenheit] = useState(77);
    const [kelvin, setKelvin] = useState(298.15);

    // funtion to convert between celsius, fahrenheit and kelvin
    const convertFromCelsius = (newCelsius) => {
        setCelsius(newCelsius);
        setFahrenheit((newCelsius * 9) / 5 + 32);
        setKelvin(newCelsius + 273.15);
      };
    
      // Function to convert Fahrenheit to Celsius and Kelvin
      const convertFromFahrenheit = (newFahrenheit) => {
        setFahrenheit(newFahrenheit);
        const celsiusTemp = ((newFahrenheit - 32) * 5) / 9;
        setCelsius(celsiusTemp);
        setKelvin(celsiusTemp + 273.15);
      };
    
      // Function to convert Kelvin to Celsius and Fahrenheit
      const convertFromKelvin = (newKelvin) => {
        setKelvin(newKelvin);
        const celsiusTemp = newKelvin - 273.15;
        setCelsius(celsiusTemp);
        setFahrenheit((celsiusTemp * 9) / 5 + 32);
      };

  return (
    <div className="temperatures-container">
      <h3 className="temperatures-title">Temperatures</h3>
      <h3 className="temperatures-display">
        <span className="badge bg-primary">{celsius.toFixed(2)}°C</span>
        <span className="badge bg-primary">{fahrenheit.toFixed(2)}°F</span>
        <span className="badge bg-primary">{kelvin.toFixed(2)}°K</span>
      </h3>
      <div className="temperatures-variables">
        <Variable name={"CElSIUS"} value={celsius} setValue={convertFromCelsius} />
        <Variable name={"FAHRENHEIT"} value={fahrenheit} setValue={convertFromFahrenheit} />
        <Variable name={"KELVIN"} value={kelvin} setValue={convertFromKelvin} />
      </div>
    </div>
  );
}

export default Temperatures;
