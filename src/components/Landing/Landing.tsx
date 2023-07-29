import { Button, Typography, Box } from "@mui/material";
export const Landing: React.FC = () => {
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
    <div className="App">
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
  );
};
