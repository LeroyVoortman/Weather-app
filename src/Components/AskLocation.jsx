import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { TextField } from "@mui/material";

function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Put in desired location</DialogTitle>
      <TextField
        id="filled-basic"
        label="Weather location"
        variant="filled"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            props.sendToParent(e.target.value);
            e.target.value = "";
          }
        }}
      ></TextField>
    </Dialog>
  );
}

export default function AskLocation(props) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <SimpleDialog {...props} open={open} onClose={handleClose} />
    </div>
  );
}
