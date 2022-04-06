import { useState, useEffect, createContext } from "react";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [, setError] = useState(null);
  const [, setIsLoaded] = useState(false);
  const [, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
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
    };
    fetchData();
  }, []);
};

export { DataContext, DataContextProvider };
