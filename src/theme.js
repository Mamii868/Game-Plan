import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        // Dark Mode
        greenAccent: {
          100: "#daf1ed",
          200: "#b4e4db",
          300: "#8fd6c8",
          400: "#69c9b6",
          500: "#44bba4",
          600: "#369683",
          700: "#297062",
          800: "#1b4b42",
          900: "#0e2521",
        },
        yellowAccent: {
          100: "#faf1d9",
          200: "#f5e4b3",
          300: "#f1d68d",
          400: "#ecc967",
          500: "#e7bb41",
          600: "#b99634",
          700: "#8b7027",
          800: "#5c4b1a",
          900: "#2e250d",
        },
        blackAccent: {
          100: "#d7d8d9",
          200: "#b0b2b3",
          300: "#888b8d",
          400: "#616567",
          500: "#393e41",
          600: "#2e3234",
          700: "#222527",
          800: "#17191a",
          900: "#0b0c0d",
        },
        grayAccent: {
          100: "#f6f6f5",
          200: "#edecea",
          300: "#e5e3e0",
          400: "#dcd9d5",
          500: "#d3d0cb",
          600: "#a9a6a2",
          700: "#7f7d7a",
          800: "#545351",
          900: "#2a2a29",
        },
        primary: {
          100: "#fafaf9",
          200: "#f5f5f2",
          300: "#f1efec",
          400: "#eceae5",
          500: "#e7e5df",
          600: "#b9b7b2",
          700: "#8b8986",
          800: "#5c5c59",
          900: "#2e2e2d",
        },
      }
    : {
        // Light Mode
        greenAccent: {
          100: "#0e2521",
          200: "#1b4b42",
          300: "#297062",
          400: "#369683",
          500: "#44bba4",
          600: "#69c9b6",
          700: "#8fd6c8",
          800: "#b4e4db",
          900: "#daf1ed",
        },
        yellowAccent: {
          100: "#2e250d",
          200: "#5c4b1a",
          300: "#8b7027",
          400: "#b99634",
          500: "#e7bb41",
          600: "#ecc967",
          700: "#f1d68d",
          800: "#f5e4b3",
          900: "#faf1d9",
        },
        primary: {
          100: "#0b0c0d",
          200: "#17191a",
          300: "#222527",
          400: "#2e3234",
          500: "#393e41",
          600: "#616567",
          700: "#888b8d",
          800: "#b0b2b3",
          900: "#d7d8d9",
        },
        grayAccent: {
          900: "#2a2a29",
          800: "#545351",
          700: "#7f7d7a",
          600: "#a9a6a2",
          500: "#d3d0cb",
          400: "#dcd9d5",
          300: "#e5e3e0",
          200: "#edecea",
          100: "#f6f6f5",
        },
        lightGrayAccent: {
          100: "#fafaf9",
          200: "#f5f5f2",
          300: "#f1efec",
          400: "#eceae5",
          500: "#e7e5df",
          600: "#b9b7b2",
          700: "#8b8986",
          800: "#5c5c59",
          900: "#2e2e2d",
        },
      }),
});

//Theme Settings

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...colors(
        mode === "dark"
          ? {
              primary: {
                main: colors.primary[500],
              },
              secondary: {
                main: colors.greenAccent[500],
              },
              neutral: {
                dark: colors.blackAccent[700],
                main: colors.blackAccent[500],
                light: colors.blackAccent[100],
              },
              background: {
                default: colors.blackAccent[500],
              },
            }
          : {
              primary: {
                main: colors.primary[100],
              },
              secondary: {
                main: colors.greenAccent[500],
              },
              neutral: {
                dark: colors.blackAccent[700],
                main: colors.blackAccent[500],
                light: colors.blackAccent[100],
              },
              background: {
                default: colors.lightGrayAccent[500],
              },
              typography: {
                fontFamily: [
                  "Inter",
                  "Avenir",
                  "Helvetica",
                  "Arial",
                  "sans-serif",
                ].join(","),
                fontSize: 12,
              },
              h1: {
                fontFamily: [
                  "Inter",
                  "Avenir",
                  "Helvetica",
                  "Arial",
                  "sans-serif",
                ].join(","),
                fontSize: 40,
              },
              h2: {
                fontFamily: [
                  "Inter",
                  "Avenir",
                  "Helvetica",
                  "Arial",
                  "sans-serif",
                ].join(","),
                fontSize: 32,
              },
              h3: {
                fontFamily: [
                  "Inter",
                  "Avenir",
                  "Helvetica",
                  "Arial",
                  "sans-serif",
                ].join(","),
                fontSize: 24,
              },
              h4: {
                fontFamily: [
                  "Inter",
                  "Avenir",
                  "Helvetica",
                  "Arial",
                  "sans-serif",
                ].join(","),
                fontSize: 20,
              },
              h5: {
                fontFamily: [
                  "Inter",
                  "Avenir",
                  "Helvetica",
                  "Arial",
                  "sans-serif",
                ].join(","),
                fontSize: 16,
              },
              h6: {
                fontFamily: [
                  "Inter",
                  "Avenir",
                  "Helvetica",
                  "Arial",
                  "sans-serif",
                ].join(","),
                fontSize: 14,
              },
            }
      ),
    },
  };
};

//Context for Color Mode

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
        toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return [theme, colorMode]
};
