import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import supabase from "../../config/supabaseClient";
import {QuestCard} from "../index";
import { Quest } from "../../types/types";

export const QuestList: React.FC = () => {
  const [fetchErr, setFetchErr] = useState<string | null>(null);
  const [quests, setQuests] = useState<Quest[] | null>(null);

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
  return (
    <div>
      <Typography variant="h1">Quest Board</Typography>
      {fetchErr && <p>{fetchErr}</p>}
      {quests && (
        <Box>
          {quests.map((quest) => (
            <Typography variant="h6" key={quest.id}>
              <QuestCard quest={quest} key={quest.id} />
            </Typography>
          ))}
        </Box>
      )}
    </div>
  );
};
