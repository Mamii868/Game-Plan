import { CheckBox } from "@mui/icons-material";
import { ListItem, ListItemButton, ListItemText, Box } from "@mui/material";
import { Quest } from "../../types/types";

type QuestListProps = {
  quest: Quest;
  onQuestClick: (quest: Quest) => void;
};

export const QuestCard: React.FC<QuestListProps> = ({ quest, onQuestClick }) => {
  return (
    <ListItem
      onClick={() => onQuestClick(quest)}
      sx={{ paddingLeft: "0px" }}
    >
      <ListItemButton
        sx={{
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
            xl: "flex-start",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CheckBox></CheckBox>
          <ListItemText primary={quest.questName} />
        </Box>
      </ListItemButton>
    </ListItem>
  );
};
