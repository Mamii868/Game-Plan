import { Theme } from "@mui/material";
import * as React from "react";

export function useMode(): [Theme, { toggleColorMode: () => void }];

export const ColorModeContext: React.Context<{ toggleColorMode: () => void }>;

export function tokens(mode: 'light' | 'dark'): {
    greenAccent: {
      [key: number]: string;
    };
    yellowAccent: {
      [key: number]: string;
    };
    blackAccent: {
      [key: number]: string;
    };
    grayAccent: {
      [key: number]: string;
    };
    primary: {
      [key: number]: string;
    };
  };