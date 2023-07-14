import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider, colors, createTheme } from "@mui/material";
import { blue, green } from "@mui/material/colors";

const lightTheme = createTheme({
  palette: {
    background: {
      main: "#ffffff",
    },
    primary: {
      main: "#44BBA4",
    },
    text: {
      main: "#E7E5DF",
    },
  },
  typography: {
    h1: {
      fontSize: "4rem",
      fontWeight: 550,
    },
  },
})

const darkTheme = createTheme({
  palette: {
    background: {
      main: "#393E41",
    },
    primary: {
      main: "#44BBA4",
    },
    text: {
      main: "#E7E5DF",
    },
    
  }
})
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
