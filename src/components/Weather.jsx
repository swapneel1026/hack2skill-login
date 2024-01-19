import React, { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";
import WeatherCardLoader from "./Loaders/WeatherCardLoader";
import { useLocation } from "react-router-dom";

const WeatherComponent = () => {
  const [apiresponse, setApiResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  let currentUser = localStorage.getItem("username");
  const { city } = useUser(currentUser);
  const { pathname } = useLocation();

  async function getLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const coordinates = {
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            };
            resolve(coordinates);
          },
          (error) => {
            reject(`Geolocation failed: ${error.message}`);
          }
        );
      } else {
        reject("Geolocation is not supported by this browser.");
      }
    });
  }

  const FetchWeatherData = async () => {
    if (pathname === "/guestlogin") {
      try {
        const coords = await getLocation();
        const res = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${
            process.env.REACT_APP_API_KEY
          }&q=${coords && coords?.lat + "," + coords?.lon}&aqi=yes`
        );
        const dataRecived = await res.json();
        setApiResponse(dataRecived);
      } catch (error) {
        setErrorMessage(error);
      }
    }

    if (pathname === "/dashboard" || pathname === "/dashboard/") {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&aqi=yes`
      );
      const dataRecived = await res.json();
      setApiResponse(dataRecived);
    }
  };

  useEffect(() => {
    FetchWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (pathname === "/guestlogin" && errorMessage !== null)
    return (
      <h1 className="text-white font-semibold text-2xl bg-purple-800 p-2 rounded-md">
        {errorMessage}
      </h1>
    );

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        {apiresponse === null ? (
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
              <img
                src={apiresponse?.current.condition.icon}
                alt="weathericon"
              />
            </div>
            <div className="text-gray-700">
              <p>Humidity: {apiresponse?.current.humidity}%</p>
              <p>Wind Speed: {apiresponse?.current.wind_kph} km/h</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WeatherComponent;
