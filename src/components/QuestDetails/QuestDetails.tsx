import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { Quest } from "../../types/types";

type QuestDetailsProps = {
  quest: Quest;
  open: boolean;
  handleClose: () => void;
};

export const QuestDetails: React.FC<QuestDetailsProps> = ({
  quest,
  handleClose,
}) => {
  return (
    <div>
      <DialogTitle>{quest.questName}</DialogTitle>
      <DialogContent  sx={{color: 'white'}}>
        <DialogContentText>{quest.questDesc}</DialogContentText>
        <DialogContentText>
          {"Category EXP: " + quest.categoryEXP}
        </DialogContentText>
        {quest.rewardID && (
          <DialogContentText>{"Reward: " + quest.rewardID}</DialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </div>
  );
        };