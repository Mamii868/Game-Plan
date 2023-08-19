import { CheckBox } from "@mui/icons-material";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { useState } from "react";

export const CreateQuest: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>New Quest</DialogTitle>
      <DialogContent>
        <Box
          component={"form"}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <TextField required id="questName" label="Title" />
          <TextField id="questDesc" label="Description" />
          <FormControlLabel
            control={<CheckBox defaultChecked />}
            label="Experience?"
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};