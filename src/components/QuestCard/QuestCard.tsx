import { CheckBox } from "@mui/icons-material";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Quest } from "../../types/types";
type QuestProp = {
  quest: Quest;
};
const QuestCard: React.FC<QuestProp> = ({ quest }) => {
  return (
    <ListItem>
      <ListItemButton>
        <CheckBox></CheckBox>
        <ListItemText primary={quest.questName} />
      </ListItemButton>
    </ListItem>
  );
};

export default QuestCard;
