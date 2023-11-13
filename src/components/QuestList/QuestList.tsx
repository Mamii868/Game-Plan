import {
  Typography,
  useTheme,
  useMediaQuery,
  Theme,
  Fab,
  Box,
} from "@mui/material";
import { useState, useEffect } from "react";
import supabase from "../../config/supabaseClient";
import { QuestCard } from "../index";
import { Quest } from "../../types/types";
import { QuestDetails, CreateQuest } from "../index";
import AddIcon from "@mui/icons-material/Add";

export const QuestList: React.FC = () => {
  const theme: Theme = useTheme();
  const matches: boolean = useMediaQuery(theme.breakpoints.up("md"));

  const [fetchErr, setFetchErr] = useState<string | null>(null);
  const [quests, setQuests] = useState<Quest[] | null>(null);
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);
  const [openCreateMenu, setOpenCreateMenu] = useState(false);

  useEffect(() => {
    const fetchQuests = async () => {
      const { data, error } = await supabase.from("quests").select();
      if (error) {
        setFetchErr("Cannot fetch quests");
        setQuests(null);
      }
      if (data) {
        setQuests(data);
        setFetchErr(null);
      }
    };
    fetchQuests();
  });

  const handleQuestClick = (quest: Quest) => {
    setSelectedQuest(quest);
  };

  const handleOpenCreateMenu = () => {
    setOpenCreateMenu(true)
  }

  const handleCloseCreateMenu = () => {
    setOpenCreateMenu(false)
  }

  return (
    <div>
      <Typography variant="h1" display={"flex"} justifyContent={"center"}>
        Quest Board
      </Typography>
      <Box>
          {fetchErr && <p>{fetchErr}</p>}
          {quests && (
            <Box>
              {quests.map((quest) => (
                  <QuestCard quest={quest} onQuestClick={handleQuestClick} />
              ))}
          </Box>
          )}
          </Box>

        {matches && selectedQuest && (
            <QuestDetails
              quest={selectedQuest}
              open
              handleClose={() => setSelectedQuest(null)}
            />
        )}
      <Fab color="secondary" aria-label="add" onClick={handleOpenCreateMenu} sx={{position: "fixed", bottom: "2%", right: "2%"}}>
        <AddIcon />
      </Fab>
      <CreateQuest open={openCreateMenu} onClose={handleCloseCreateMenu}/>
    </div>
  );
};
