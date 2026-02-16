import { useContext } from "react";
import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ThemeContext } from "../context/themeContext";

const ToggleButton = styled(IconButton)(({ theme }) => ({
  position: "fixed",
  top: 24,
  right: 24,
  zIndex: 1000,
  width: 56,
  height: 56,
  background:
    theme.palette.mode === "light"
      ? "rgba(255, 255, 255, 0.9)"
      : "rgba(26, 31, 58, 0.9)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  border: `1px solid ${
    theme.palette.mode === "light"
      ? "rgba(102, 126, 234, 0.2)"
      : "rgba(139, 157, 255, 0.2)"
  }`,
  transition: "all 0.3s ease",

  "&:hover": {
    transform: "scale(1.1) rotate(15deg)",
    background:
      theme.palette.mode === "light"
        ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        : "linear-gradient(135deg, #8b9dff 0%, #9d6bc9 100%)",
    boxShadow: "0 12px 48px rgba(102, 126, 234, 0.3)",

    "& svg": {
      color: "white",
    },
  },

  "& svg": {
    fontSize: "1.5rem",
    color: theme.palette.mode === "light" ? "#667eea" : "#8b9dff",
    transition: "all 0.3s ease",
  },
}));

export const ThemeToggle = () => {
  const { mode, toggleTheme } = useContext(ThemeContext);

  return (
    <ToggleButton onClick={toggleTheme} aria-label="toggle theme">
      {mode === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
    </ToggleButton>
  );
};
