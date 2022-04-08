import React from "react";
import ApiCall from "./ApiCall";

function WeatherDisplay(data, error, isLoaded) {
  console.log(data);
  if (!error === null) {
    return <div>Error: {error.message}</div>;
  } else if (data?.data == null) {
    return <div>Loading...</div>;
  } else {
    return <div>{data?.data["location"]?.country}</div>;
  }
}

export default WeatherDisplay;
