// components/MinimalistHero.tsx
import { Box, Typography, Button, Chip } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DownloadIcon from "@mui/icons-material/Download";
import { TypeAnimation } from "react-type-animation";

import { styled } from "@mui/material/styles";

const HeroContainer = styled(Box)({
  width: "100%",
  minHeight: "100vh",
  background: "linear-gradient(135deg, #6671ea 0%, #764ba2 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  position: "relative",
  overflow: "hidden",
  padding: "0 8%",

  //   "&::before": {
  //     content: '""',
  //     position: "absolute",
  //     top: "0",
  //     right: "-20%",
  //     width: "800px",
  //     height: "800px",
  //     background: "rgba(0, 0, 0, 0.4)",
  //     borderRadius: "50%",
  //     filter: "blur(150px)",
  //   },
});

const ScriptTitle = styled(Typography)({
  fontFamily: "'Brush Script MT', cursive",
  fontSize: "clamp(4rem, 10vw, 8rem)",
  color: "white",
  marginBottom: 16,
  fontWeight: 400,
  lineHeight: 1,
});

const Subtitle = styled(Typography)({
  fontFamily: "'Courier New', monospace",
  fontSize: "1rem",
  color: "rgba(255, 255, 255, 0.7)",
  letterSpacing: 4,
  marginBottom: 32,
  fontWeight: 400,
  textTransform: "uppercase",
});

export default function HeroSection() {
  return (
    <>
      <HeroContainer>
        <Box sx={{ maxWidth: 850, position: "relative", zIndex: 1 }}>
          <ScriptTitle>
            <TypeAnimation
              sequence={["Abhijeet Kaushal"]}
              //wrapper="span"
              speed={8}
              //cursor={true}
              repeat={0} // Types only once
            />
          </ScriptTitle>

          <Subtitle>Senior Software Engineer</Subtitle>

          <Typography
            variant="h6"
            sx={{
              color: "white",
              mb: 4,
              lineHeight: 1.8,
              fontWeight: 300,
            }}
          >
            MERN Stack engineer and UI/UX enthusiast, crafting responsive,
            user-focused web apps that blend scalability, reliability &
            performance with pixel-perfect design.
          </Typography>

          <Button
            variant="contained"
            size="large"
            href="/AbhijeetResume.pdf"
            download="AbhijeetResume.pdf"
            startIcon={<DownloadIcon />}
            sx={{
              backgroundColor: "white",
              color: "#764ba2",
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              fontWeight: 600,
              borderRadius: 2,
              "&:hover": {
                backgroundColor: "rgba(214, 203, 240, 0.9)",
              },
            }}
          >
            Download Resume
          </Button>
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: 5,
            left: "50%",
            transform: "translateX(-50%)",
            //zIndex: 2,
          }}
        >
          <Chip
            icon={<ArrowDownwardIcon />}
            label="Scroll for more"
            variant="outlined"
            color="primary"
            sx={{
              backgroundColor:
                "linear-gradient(135deg, #6671ea 0%, #764ba2 100%)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "white",
              padding: "8px 16px",
              "& .MuiChip-icon": {
                color: "white",
              },
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.25)",
              },
            }}
          />
        </Box>
      </HeroContainer>
    </>
  );
}
