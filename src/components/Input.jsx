import React from "react";
import { useWeather } from "../context/Weather";

const Input = () => {
  const weather = useWeather();

  return (
    <input
      className="input-field"
      type="text"
      // setting value of input to the searchCity
      value={weather.serchCity}
      placeholder="Enter your city:"
      onChange={(e) => {
        // whenever you type in the input it sets searchCity value to typed value
        weather.setSearchCity(e.target.value);
      }}
    />
  );
};

export default Input;
