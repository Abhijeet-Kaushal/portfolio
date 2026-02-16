import { Box, Grid } from "@mui/material";

import "./App.css";
import { ProfileCard1 } from "./Components/ProfileCard1";
import { ProfileCard2 } from "./Components/ProfileCard2";
import HeroSection from "./Components/HeroSection";

function App() {
  return (
    <>
      <HeroSection />
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundColor: "primary.main",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ width: "100%", m: "20px", height: "80%" }}
        >
          <Grid
            size={4}
            sx={{
              color: "text.primary",
              border: "2px solid white",
              borderRadius: "15px",
            }}
          >
            <ProfileCard1 />
          </Grid>

          <Grid
            size={8}
            sx={{
              color: "text.primary",
              border: "2px solid white",
              borderRadius: "15px",
            }}
          >
            <ProfileCard2 />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
