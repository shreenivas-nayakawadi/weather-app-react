import "./App.css";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { useWeather } from "./context/Weather";
import { useEffect } from "react";

function App() {
  const weather = useWeather();

  useEffect(() => {
    // fetching location and setting data based on the location
    weather.fetchCurrentUserLocationData();
  },[]);

  return (
    <div className="App">
      <h1>Weather Forcast</h1>
      <Input /> <Button value={"Search"} onClick={weather.fetchData} />
      <Card />
    </div>
  );
}

export default App;
