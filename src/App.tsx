import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, Navbar, QuestList } from "./components";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Router>
          <CssBaseline />
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/quests" element={<QuestList />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
