import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  TextField,
  Checkbox,
  Grid,
  Input,
  Slider,
  Typography,
} from "@mui/material";
import {
  DateTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useState } from "react";

type CreateQuestProps = {
  open: boolean;
  onClose: () => void;
};
export const CreateQuest: React.FC<CreateQuestProps> = ({ open, onClose }) => {
  const [check, setCheck] = useState(false);

  const [xp, setXP] = useState<number>(0);

  const handleXPSliderChange = (event: Event, newValue: number | number[]) => {
    setXP(newValue as number);
    event;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setXP(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleXPBlur = () => {
    if (xp < 0) {
      setXP(0);
    } else if (xp > 100) {
      setXP(100);
    }
  };
  const handleCheck = () => {
    if (check) {
      setCheck(false);
      setXP(0);
    } else {
      setCheck(true);
    }
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle
        sx={{
          textAlign: "center",
          color: "background.default",
          fontWeight: "bold",
          backgroundColor: "primary.main"
        }}
      >
        New Quest
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: "background.default" }}>
        <Box
          component={"form"}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
        >
          <TextField required id="questName" label="Title" />
          <TextField id="questDesc" label="Description" />
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                checked={check}
                onChange={handleCheck}
              />
            }
            label="Experience?"
          />
          {/* XP Slider */}
          {check ? (
            <Grid container spacing={2} alignItems="center" hidden>
              <Grid item>
                <Typography>XP</Typography>
              </Grid>
              <Grid item xs>
                <Slider
                  value={typeof xp === "number" ? xp : 0}
                  onChange={handleXPSliderChange}
                  aria-labelledby="input-slider"
                  color="secondary"
                />
              </Grid>
              <Grid item>
                <Input
                  value={xp}
                  size="small"
                  onChange={handleInputChange}
                  onBlur={handleXPBlur}
                  inputProps={{
                    step: 10,
                    min: 0,
                    max: 100,
                    type: "number",
                    "aria-labelledby": "input-slider",
                  }}
                />
              </Grid>
            </Grid>
          ) : (
            <br />
          )}
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker />
          </LocalizationProvider>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
