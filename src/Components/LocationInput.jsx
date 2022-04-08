import { TextField } from "@mui/material";
import { useState } from "react";

export default function LocationInput() {
  const [LocationName, setLocationName] = useState(null);
  console.log(LocationName);
  return (
    <TextField
      fullWidth
      id="filled-basic"
      label="Weather location"
      variant="filled"
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          setLocationName(e.target.value);
        }
      }}
      lname={LocationName}
    />
  );
}
