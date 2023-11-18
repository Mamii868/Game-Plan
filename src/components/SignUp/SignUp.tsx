import supabase from "../../config/supabaseClient";
import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";

export const SignUp: React.FC<{ open: boolean; handleClose: () => void }> = ({
  open,
  handleClose,
}) => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  //Login
  const gitHubLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };
  const discordLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "discord",
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const displayName = formData.get("displayName") as string;
    const email = formData.get("email") as string;
    if (isDisplayNameNotAllowed(displayName)) {
      setErrorMessage("Display name contains not allowed words.");
      return;
    }
    //TODO: Create User in Table
    const { data, error } = await supabase.auth.signUp({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      options: {
        data: {
          displayName: formData.get("displayName") as string,
        },
        emailRedirectTo: `/Quests`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      console.log("User signed up:", data);

      await supabase
        .from("profiles")
        .insert([{ displayName: displayName, email: email }])
        .select();
    }
  };
  //TODO: Create bad word list
  const isDisplayNameNotAllowed = (displayName: string) => {
    const notAllowedWords = [import.meta.env.BADWORDLIST];
    return notAllowedWords.some((word) =>
      displayName.toLowerCase().includes(word)
    );
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Login</DialogTitle>
        <Button onClick={gitHubLogin}>Login With Github</Button>
        <Button onClick={discordLogin}>Login With Discord</Button>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <TextField variant="outlined" 
        </DialogContent>
      </Dialog>
    </div>
  );
};
