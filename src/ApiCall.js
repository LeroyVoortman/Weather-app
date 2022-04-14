import React, { useState, useEffect } from "react";
import { LocationInput } from "./Components/LocationInput";
import WeatherDisplay from "./WeatherDisplay";
import { TextField } from "@mui/material";

export function ApiCall() {
  const [location, setLocation] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);

  function LocationInput() {
    console.log(location);
    return (
      <TextField
        fullWidth
        id="filled-basic"
        label="Weather location"
        variant="filled"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setLocation(e.target.value);
          }
        }}
      />
    );
  }

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

  return (
    <>
      <WeatherDisplay {...error} {...data} {...isLoaded} />
      <LocationInput {...location} />
    </>
  );
}
