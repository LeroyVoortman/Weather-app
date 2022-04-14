import { TextField } from "@mui/material";

export function LocationInput(props) {
  //console.log(location);
  return (
    <TextField
      fullWidth
      id="filled-basic"
      label="Weather location"
      variant="filled"
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          props.sendToParent(e.target.value);
        }
      }}
    />
  );
}
