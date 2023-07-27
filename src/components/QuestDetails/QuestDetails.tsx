import {
  Dialog,
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

const QuestDetails: React.FC<QuestDetailsProps> = ({
  quest,
  open,
  handleClose,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{quest.questName}</DialogTitle>
      <DialogContent>
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
    </Dialog>
  );
};

export default QuestDetails;
