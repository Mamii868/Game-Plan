import { Typography } from "@mui/material";
import supabase from "../../config/supabaseClient";
const QuestList = () => {
    console.log(supabase)
    return (
        <div>
        <Typography variant="h1">
            Quest Board
        </Typography>

        </div>
    )
}

export default QuestList;