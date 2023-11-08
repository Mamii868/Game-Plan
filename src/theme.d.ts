import { Theme } from "@mui/material";
import * as React from "react";

export function useMode(): [Theme, { toggleColorMode: () => void }];

export const ColorModeContext: React.Context<{ toggleColorMode: () => void }>;
