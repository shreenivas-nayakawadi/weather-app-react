// ALL THE API CALLS ARE DONE IN THIS FILE
const baseURL =
  "https://api.weatherapi.com/v1/current.json?key=b8c16480a3d44f2198c40511241708";

// function to fetch weather based on city from weather api
export const getWeatherDataForCity = async (city) => {
  const respone = await fetch(`${baseURL}&q=${city}&aqi=yes`);
  return await respone.json();
};

// function to fetch weather based on lattitude and longitude from weather api
export const getWeatherDataForLocation = async (lat, lon) => {
  const respone = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
  return await respone.json();
};
