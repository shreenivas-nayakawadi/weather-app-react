// WEATHER CONTEXT IS CREATED
import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../api";

//creating context
const WeatherContext = createContext();

//exporting context  so that we can use it in other files
export const useWeather = () => {
  return useContext(WeatherContext);
};

// weather provider to provide the below function to all the childrens of the provider
export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);

  // hook to fetch data using city
  const fetchData = async () => {
	const response = await getWeatherDataForCity(searchCity);
	setData(response);
  };

  // hook to fetch data using user location
  const fetchCurrentUserLocationData = async () => {
	navigator.geolocation.getCurrentPosition((postion) => {
	  getWeatherDataForLocation(
		postion.coords.latitude,
		postion.coords.longitude
	  ).then((data) => setData(data));
	});
  };

  return (
	<WeatherContext.Provider
	  value={{
		searchCity,
		data,
		setSearchCity,
		fetchData,
		fetchCurrentUserLocationData,
	  }}
	>
	  {props.children}
	</WeatherContext.Provider>
  );
};
