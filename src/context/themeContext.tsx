import { createContext, useState, useMemo } from "react";
import type { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { PaletteMode } from "@mui/material/styles"; // ← Correct import
import CssBaseline from "@mui/material/CssBaseline";

interface ThemeContextType {
  mode: PaletteMode;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  toggleTheme: () => {},
});

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

export const ThemeProviderWrapper = ({
  children,
}: ThemeProviderWrapperProps) => {
  const [mode, setMode] = useState<PaletteMode>(() => {
    const savedMode = localStorage.getItem("themeMode");
    return (savedMode as PaletteMode) || "light";
  });

  const toggleTheme = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", newMode);
      return newMode;
    });
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#667eea" : "#8b9dff",
          },
          secondary: {
            main: mode === "light" ? "#764ba2" : "#9d6bc9",
          },
          background: {
            default: mode === "light" ? "#f5f7fa" : "#0a0e27",
            paper: mode === "light" ? "#ffffff" : "#1a1f3a",
          },
          text: {
            primary: mode === "light" ? "#02102c" : "#e4e6eb",
            secondary: mode === "light" ? "#6b7280" : "#9ca3af",
          },
        },
        typography: {
          fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        },
        shape: {
          borderRadius: 16,
        },
      }),
    [mode],
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
