import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      main: "#393E41",
    },
    primary: {
      main: "#44BBA4",
    },
    secondary: {
      main: "#E7E5DF",
    },
    text: {
      main: "WHITE"
    },
  },
  typography: {
    h1: {
      fontSize: "4rem",
      fontWeight: 550, 
    },
  },
})

ReactDOM.createRoot(document.getElementById("root")).render( 
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)