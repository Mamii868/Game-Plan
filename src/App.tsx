import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Box, Typography, Button, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
function App() {
  
const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#393E41',
      paper: '#44BBA4', 
    },
    primary: {
      main: '#44BBA4',
    },
    secondary: {
      main: '#E7E5DF',
    },
    text: {
      primary: '#E7E5DF',
      secondary: '#393E41',
    },
  },
  typography: {
    h1: {
      fontSize: '4rem',
      fontWeight: 550,
    },
  },
});

  const user = {
    fname: "",
    userName: "MMoten",
  };

  function checkUser() {
    if (!user.fname || user.fname.trim() === "") {
      user.fname = "Guest";
    } else {
      return user.fname;
    }
  }

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
          <CssBaseline/>
      <div className="App">
        <Navbar />
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
    </ThemeProvider>
  );
}

export default App;
