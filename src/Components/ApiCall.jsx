import React, { useState, useEffect } from "react";
import AskLocation from "./AskLocation";
import { LocationInput } from "./LocationInput";
import WeatherDisplay from "./WeatherDisplay";

export function ApiCall() {
  const [location, setLocation] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=d3a6c30274a346e99ee82256222303&q=${location}&aqi=no`
    )
      .then((res) => res.json())
      .then(
        (response) => {
          setData(response);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [location]);

  if (location === "") {
    return <AskLocation toChild={location} sendToParent={setLocation} />;
  } else {
    return (
      <>
        <WeatherDisplay {...error} {...data} {...isLoaded} />
        <LocationInput toChild={location} sendToParent={setLocation} />
      </>
    );
  }
}
