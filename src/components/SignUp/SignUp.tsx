import { Email } from "@mui/icons-material";
import supabase from "../../config/supabaseClient";
import { useState } from "react";

export const SignUp: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");

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
    const { user, error } = await supabase.auth.signUp({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      console.log("User signed up:", user);

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
    <div>
      {errorMessage && <p>{errorMessage}</p>}
      <form method="post">
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" required />
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" required />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div>
          <label htmlFor="displayName">Display Name:</label>
          <input type="text" id="displayName" name="displayName" required />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
