import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {
  Box,
  Typography,
  Button,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Theme,
} from "@mui/material";
import QuestList from "./components/QuestList/QuestList";
const App = () => {
  //dark mode theme
  const theme: Theme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#393E41", // gray-black
        paper: "#44BBA4", // teal
      },
      primary: {
        main: "#44BBA4", // teal
      },
      secondary: {
        main: "#E7E5DF", // gray-white
      },
      text: {
        primary: "#E7E5DF", // gray-white
        secondary: "#393E41", // gray-black
      },
    },
    typography: {
      h1: {
        fontSize: "4rem",
        fontWeight: 550,
      },
    },
  });
  // TODO: delete this and pull user info from database
  interface user {
    fname: string;
    userName: string;
  }

  const user = {
    fname: "",
    userName: "MMoten",
  };
  // grabs the first name of user to put in landing page
  function checkUser() {
    if (!user.fname || user.fname.trim() === "") {
      user.fname = "Guest";
    } else {
      return user.fname;          
    }
  }
  // checks if user is logged in and changes landing page
  // TODO: change the home screen if user is logged in
  function checkAccount() {
    if (!user || user.fname.trim() === "Guest") {
      return (
        <div className="desc">
          <Typography variant="h4" className="title">
            Start your Game Plan Here!
          </Typography>
          <Button
            variant="contained"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            Create Account
          </Button>
        </div>
      );
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navbar />
        {/* Welcome user box */}
        <Box
          className="titleBox"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30vh",
          }}
        >
          <Typography variant="h2" className="title">
            Welcome, {checkUser()}
          </Typography>
        </Box>
        {/* create account/sign in box */}
        <Box
          className="descBox"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {checkAccount()}
        </Box>
      </div>
      <QuestList/>
    </ThemeProvider>
  );
}

export default App;
