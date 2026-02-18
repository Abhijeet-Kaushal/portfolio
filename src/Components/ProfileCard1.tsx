import {
  Box,
  Avatar,
  Typography,
  IconButton,
  Stack,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import GitHubIcon from "@mui/icons-material/GitHub";

const StyledCard = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.98) 100%)",
  backdropFilter: "blur(20px)",
  borderRadius: "24px",
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100%",
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",

  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 16px 48px rgba(0, 0, 0, 0.15)",
  },

  // Decorative gradient blob
  "&::before": {
    content: '""',
    position: "absolute",
    top: -100,
    right: -100,
    width: 200,
    height: 200,
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    borderRadius: "50%",
    opacity: 0.1,
    filter: "blur(40px)",
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  // width: 240,
  // height: 240,
  width: theme.breakpoints.values.md > 900 ? 240 : 140,
  height: theme.breakpoints.values.md > 900 ? 240 : 140,
  marginBottom: theme.spacing(3),
  border: "4px solid white",
  boxShadow: "0 8px 24px rgba(102, 126, 234, 0.3)",
  transition: "transform 0.3s ease",
  borderRadius: "24px",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const SocialIconButton = styled(IconButton)({
  width: 44,
  height: 44,
  backgroundColor: "rgba(102, 126, 234, 0.1)",
  transition: "all 0.3s ease",

  "&:hover": {
    backgroundColor: "#667eea",
    transform: "translateY(-4px)",
    boxShadow: "0 8px 16px rgba(102, 126, 234, 0.3)",

    "& svg": {
      color: "white",
    },
  },

  "& svg": {
    fontSize: "1.25rem",
    color: "#667eea",
  },
});

const InfoChip = styled(Chip)({
  backgroundColor: "rgba(102, 126, 234, 0.08)",
  border: "1px solid rgba(102, 126, 234, 0.2)",
  fontWeight: 500,
  fontSize: "0.875rem",

  "& .MuiChip-icon": {
    color: "#667eea",
  },
});

const EmailBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(2, 3),
  backgroundColor: "rgba(102, 126, 234, 0.05)",
  borderRadius: "16px",
  border: "1px solid rgba(102, 126, 234, 0.1)",
  textAlign: "center",
  width: "100%",
  transition: "all 0.3s ease",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "rgba(102, 126, 234, 0.1)",
    borderColor: "rgba(102, 126, 234, 0.3)",
  },
}));

const Divider = styled(Box)({
  width: "80%",
  height: 1,
  background:
    "linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.3), transparent)",
  margin: "24px 0",
});

export const ProfileCard1 = () => {
  return (
    <StyledCard>
      <StyledAvatar
        sx={{
          width: { xs: 140, md: 240 }, // Smaller on mobile
          height: { xs: 140, md: 240 },
        }}
        variant="square"
        src="pic2.jpeg"
        alt="Abhijeet Kaushal"
      />

      <Typography
        variant="h5"
        fontWeight="700"
        gutterBottom
        sx={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          mb: 1,
        }}
      >
        Abhijeet Kaushal
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        fontWeight="500"
        sx={{ mb: 2 }}
      >
        Senior Software Engineer
      </Typography>

      <InfoChip icon={<LocationOnIcon />} label="Bangalore" size="small" />

      <Divider />

      {/* Social Icons */}
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <SocialIconButton
          size="small"
          onClick={() =>
            window.open("https://linkedin.com/in/abhijeet-kaushal")
          }
        >
          <LinkedInIcon />
        </SocialIconButton>
        <SocialIconButton
          size="small"
          onClick={() => window.open("https://github.com/Abhijeet-Kaushal")}
        >
          <GitHubIcon />
        </SocialIconButton>
      </Stack>

      <Box sx={{ width: "100%", mt: 3 }}>
        <Typography
          variant="h6"
          fontWeight="600"
          sx={{
            mb: 2,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            display: "flex",
            justifyContent: "center",
            WebkitTextFillColor: "transparent",
          }}
        >
          Work Experience
        </Typography>

        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="caption"
              color="text.secondary"
            >
              2020 - 2024
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "rgba(102, 126, 234, 0.3)" }} />
              <TimelineDot
                sx={{
                  bgcolor: "#667eea",
                  boxShadow: "0 0 0 4px rgba(102, 126, 234, 0.2)",
                }}
              />
              <TimelineConnector sx={{ bgcolor: "rgba(102, 126, 234, 0.3)" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="subtitle2" fontWeight="600">
                System Engineer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                TCS
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="caption"
              color="text.secondary"
            >
              2024 - 2025
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "rgba(102, 126, 234, 0.3)" }} />
              <TimelineDot
                sx={{
                  bgcolor: "#667eea",
                  boxShadow: "0 0 0 4px rgba(102, 126, 234, 0.2)",
                }}
              />
              <TimelineConnector sx={{ bgcolor: "rgba(102, 126, 234, 0.3)" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="subtitle2" fontWeight="600">
                Senior Product Engineer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Harman International
              </Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              variant="caption"
              color="text.secondary"
            >
              2025 - Present
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: "rgba(102, 126, 234, 0.3)" }} />
              <TimelineDot
                variant="outlined"
                sx={{
                  bgcolor: "white",
                  borderColor: "#667eea",
                  borderWidth: 3,
                  boxShadow: "0 0 0 4px rgba(102, 126, 234, 0.2)",
                }}
              />
              <TimelineConnector sx={{ bgcolor: "rgba(102, 126, 234, 0.3)" }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="subtitle2" fontWeight="600">
                Senior Member of Technical Staff
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Aviatrix Systems
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Box>

      {/* Email */}
      <EmailBox
        onClick={() => {
          window.location.href = "mailto:abhijeet226018@gmail.com";
        }}
      >
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 0.5 }}
        >
          <EmailIcon sx={{ fontSize: "1rem", color: "#667eea" }} />
          <Typography
            variant="caption"
            color="text.secondary"
            fontWeight="600"
            textTransform="uppercase"
            letterSpacing={0.5}
          >
            Get in touch
          </Typography>
        </Stack>
        <Typography
          variant="body2"
          fontWeight="500"
          sx={{
            color: "#667eea",
            wordBreak: "break-all",
          }}
        >
          abhijeet226018@gmail.com
        </Typography>
      </EmailBox>
    </StyledCard>
  );
};
