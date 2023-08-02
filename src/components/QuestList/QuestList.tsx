import { Typography, Grid, useTheme, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import supabase from "../../config/supabaseClient";
import { QuestCard } from "../index";
import { Quest } from "../../types/types";
import { QuestDetails } from "../index";

export const QuestList: React.FC = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const [fetchErr, setFetchErr] = useState<string | null>(null);
  const [quests, setQuests] = useState<Quest[] | null>(null);
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);

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



  return (
  <div>
  <Typography variant="h1" display={'flex'}  justifyContent={'center'}>Quest Board</Typography>
    <Grid container spacing={3}>
    <Grid item xs={12} md={8}>

      {fetchErr && <p>{fetchErr}</p>}
      {quests && (
        <Grid container spacing={3}>
          {quests.map((quest) => (
            <Grid item xs={12} sm={6} md={12} key={quest.id}>
              <QuestCard quest={quest} onQuestClick={handleQuestClick} />
            </Grid>
          ))}
        </Grid>
      )}
    </Grid>
    {matches && selectedQuest && (
      <Grid item xs={12} md={4}>
        <QuestDetails quest={selectedQuest} open handleClose={() => setSelectedQuest(null)} />
      </Grid>
    )}
  </Grid>
  </div>
  );
};
