import { useContext } from "react";
import { DataContext } from "./ApiCall";

const useDataContext = () => {
  const context = useContext(DataContext);

  if (context === undefined) {
    throw new Error("useDataContext was used outside of its Provider");
  }

  return context;
};

export { useDataContext };
