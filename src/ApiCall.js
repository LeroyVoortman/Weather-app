import React, { useState, useEffect } from "react";
import WeatherDisplay from "./WeatherDisplay";

export function ApiCall() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      "http://api.weatherapi.com/v1/current.json?key=d3a6c30274a346e99ee82256222303&q=deventer&aqi=no"
    )
      .then((res) => res.json())
      .then(
        (response) => {
          setData(response);
          console.log(response["location"].country);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!data) {
  //   return <div>Loading...</div>;
  // } else {
  //   return <div>{data["location"].country}</div>;
  // }
  return <WeatherDisplay error={error} data={data} isLoaded={isLoaded} />;
}
