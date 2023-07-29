import { CheckBox } from "@mui/icons-material";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import {useState} from 'react'
import { Quest } from "../../types/types";
import {QuestDetails} from "../index";
type QuestListProps = {
  quest: Quest;
};
export const QuestCard: React.FC<QuestListProps> = ({ quest }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    
    const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        setOpen(false);
    }
  return (
    <ListItem onClick={handleOpen}>
      <ListItemButton>
        <CheckBox></CheckBox>
        <ListItemText primary={quest.questName} />
      </ListItemButton>
      <QuestDetails quest={quest} open={open} handleClose={handleClose}/>
    </ListItem>
  );
};
