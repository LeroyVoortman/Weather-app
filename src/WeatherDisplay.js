import React from "react";

function WeatherDisplay(data, error, isLoaded) {
  console.log(data);
  if (!error === null) {
    return <div>Error: {error.message}</div>;
  } else if (data == null) {
    return <div>Loading...</div>;
  } else {
    return <div>{data["location"]?.country}</div>;
  }
}

export default WeatherDisplay;
