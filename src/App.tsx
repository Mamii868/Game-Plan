import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, Navbar, QuestList } from "./components";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Theme,
} from "@mui/material";
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <Navbar />
    <Router>
     <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/quests" element={<QuestList/>}/>
     </Routes>
    </Router>
    </ThemeProvider>
  );
};

export default App;
