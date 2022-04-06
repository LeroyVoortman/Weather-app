import React from "react";
import { useDataContext } from "./DataHook";

function WeatherDisplay() {
  const data = useDataContext();
  const error = useDataContext();
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!data) {
    return <div>Loading...</div>;
  } else {
    return <div>{data["location"].country}</div>;
  }
}

export default WeatherDisplay;
