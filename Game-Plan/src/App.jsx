import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import { Box, Typography, Button } from "@mui/material";

function App() {
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
  );
}

export default App;
