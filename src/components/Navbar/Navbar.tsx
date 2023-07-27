import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { SportsEsports } from "@mui/icons-material";
const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge = "start" color="inherit" aria-label="logo">
          <SportsEsports />
        </IconButton>
        <Typography variant="h5" component="div">
          GamePlan
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar;