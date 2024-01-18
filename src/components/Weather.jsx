import React, { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";
import WeatherCardLoader from "./Loaders/WeatherCardLoader";

const WeatherComponent = () => {
  const [apiresponse, setApiResponse] = useState(null);
  let currentUser = localStorage.getItem("username");
  const { city } = useUser(currentUser);

  const FetchWeatherData = async () => {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&aqi=yes`
    );
    const dataRecived = await res.json();
    setApiResponse(dataRecived);
  };

  useEffect(() => {
    FetchWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(apiresponse);

  return (
    <div className="flex items-center justify-center h-screen">
      {apiresponse === null || apiresponse.error ? (
        <WeatherCardLoader />
      ) : (
        <div className="px-20 py-8 mx-10 bg-white rounded-lg shadow-2xl md:mx-0 ">
          <h1 className="mb-4 text-2xl font-bold">
            {apiresponse?.location.name},{apiresponse?.location.country}
          </h1>
          <div className="mb-2 text-4xl font-bold">
            {apiresponse?.current.temp_c}°C
          </div>
          <div className="flex items-center gap-3 mb-4 text-lg font-semibold text-gray-600">
            {apiresponse?.current.condition.text}
            <img src={apiresponse?.current.condition.icon} alt="weathericon" />
          </div>
          <div className="text-gray-700">
            <p>Humidity: {apiresponse?.current.humidity}%</p>
            <p>Wind Speed: {apiresponse?.current.wind_kph} km/h</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
