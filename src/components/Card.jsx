import React from "react";
import { useWeather } from "../context/Weather";

const Card = () => {
  const weather = useWeather();
  return (
    <>
      {/* if data Exists then render card */}
      {weather.data !== null ? (
        //set all the values of the card from the fetched values
        <div className="card">
          <img src={weather?.data?.current?.condition?.icon} alt="logo" />
          <h2>{weather.data?.current?.temp_c}{" "}°C</h2>
          <h5>
            {weather.data?.location?.name}, {weather.data?.location?.region}
          </h5>
          <h5>{weather.data?.location?.country}</h5>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Card;
