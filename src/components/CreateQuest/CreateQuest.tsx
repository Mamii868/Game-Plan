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

type CreateQuestProps = {
  open: boolean;
  onClose: () => void;
}
export const CreateQuest: React.FC<CreateQuestProps> = ({open, onClose}) => {
  const [check, setCheck] = useState(false)

  const handleChange = () => {
    if (check) {
      setCheck(false)
    } else {
      setCheck(true)
    }
  }

  return (
    <Dialog open={open} onClose={onClose}>
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
            control={<CheckBox onChange = {handleChange} />}
            label="Experience?"
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};