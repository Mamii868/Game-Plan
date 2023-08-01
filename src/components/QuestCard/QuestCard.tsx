import { CheckBox } from "@mui/icons-material";
import { ListItem, ListItemButton, ListItemText, Box } from "@mui/material";
import { useState } from 'react'
import { Quest } from "../../types/types";
import { QuestDetails } from "../index";

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
    <ListItem onClick={handleOpen} sx={{
      paddingLeft: '0px',
    }}>
      <ListItemButton sx={{
        justifyContent: {
          xs: 'center',
          sm: 'center',
          md: 'flex-start',
          lg: 'flex-start',
          xl: 'flex-start',
        },
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CheckBox></CheckBox>
          <ListItemText primary={quest.questName} />
        </Box>
      </ListItemButton>
      <QuestDetails quest={quest} open={open} handleClose={handleClose} />
    </ListItem>
  );
};
