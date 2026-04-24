"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#F43F5E" },
    secondary: { main: "#FB7185" },
    background: { default: "#fff5f5", paper: "#ffffff" },
    text: { primary: "#1a0505", secondary: "#8a5a5a" },
  },
  typography: { fontFamily: "system-ui, -apple-system, sans-serif" },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: { styleOverrides: { root: { textTransform: "none", fontWeight: 700, borderRadius: 12 } } },
    MuiTextField: { styleOverrides: { root: { borderRadius: 12 } } },
    MuiCard: { styleOverrides: { root: { borderRadius: 24, border: "1px solid rgba(128,128,128,0.1)" } } },
  },
});

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
