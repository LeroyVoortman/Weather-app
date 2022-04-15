import { TextField } from "@mui/material";

export function LocationInput(props) {
  return (
    <TextField
      fullWidth
      id="filled-basic"
      label="Weather location"
      variant="filled"
      onKeyPress={(e) => {
        if (e.key === "Enter") {
          props.sendToParent(e.target.value);
          e.target.value = "";
        }
      }}
    />
  );
}
//}
