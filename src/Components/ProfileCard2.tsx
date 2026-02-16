// // components/DetailedInfoCard.tsx
// import { Box, Typography, Card, CardContent, Chip, Stack } from "@mui/material";
// import { styled } from "@mui/material/styles";

// const StyledCard = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.background.paper,
//   borderRadius: "15px",
//   padding: theme.spacing(3),
//   height: "100%",
//   overflowY: "auto",
// }));

// const PodcastCard = styled(Card)(({ theme }) => ({
//   marginBottom: theme.spacing(2),
//   cursor: "pointer",
//   transition: "transform 0.2s",
//   "&:hover": {
//     transform: "translateY(-4px)",
//     boxShadow: theme.shadows[4],
//   },
// }));

// export const ProfileCard2 = () => {
//   const podcasts = [
//     {
//       title: "Drag and drop",
//       subtitle: "Used React + dnd-kit library for Drag & Drop Feature",
//       description: `This project demonstrates a two-way drag and drop implementation in React using the dnd-kit library. Unlike one-way drag and drop, the two-way setup is a bit more complex because it requires two drop zones: One covering the existing draggable items, Another as the target zone for dropped items.`,
//     },
//     {
//       title: "SheMeansBusiness",
//       subtitle: "by HER Episode",
//       description: "How She Got 4+ Remote Jobs from a Tier-3 College in India",
//     },
//     {
//       title: "The Samkaar Show",
//       subtitle: "Episode 109",
//       description: "How She Got 422 Lakhs Remote Job in College",
//     },
//   ];

//   return (
//     <StyledCard>
//       <Typography variant="h6" gutterBottom>
//         Hey I'm Monika Rajput.
//       </Typography>

//       <Typography variant="body2" paragraph>
//         A Builder, mentor, and advocate for Data and AI. Over the past 6+ years,
//         I've helped startups and mid-sized companies turn ideas into real
//         products, from AI prototypes that solve business problems to tools that
//         feel clear, actionable, and useful. Along the way, I realized that
//         technology isn't just about building, it's about helping people
//         understand it, use it, and grow with it.
//       </Typography>

//       <Typography variant="body2" paragraph>
//         My journey hasn't been straightforward. Coming from a tier-3 college, I
//         explored NLP, computer vision, and consulting, and even navigated
//         setbacks that pushed me forward. That pivot, I started mentoring,
//         speaking at conferences, hosting 40+ community events, and running my
//         podcast TMS. Today, I thrive at the intersection of AI, product growth,
//         and developer advocacy, helping early-stage startups scale, engage
//         developers, and create meaningful impact.
//       </Typography>

//       {/* Podcast Section */}
//       <Box sx={{ mt: 4 }}>
//         <Typography variant="h6" gutterBottom>
//           Projects:
//         </Typography>

//         {podcasts.map((podcast, index) => (
//           <PodcastCard key={index} variant="outlined">
//             <CardContent>
//               <Stack direction="row" alignItems="center" spacing={1} mb={1}>
//                 <Typography variant="subtitle2" fontWeight="bold">
//                   {index + 1}.
//                 </Typography>
//                 <Typography variant="subtitle2" fontWeight="bold">
//                   {podcast.title}
//                 </Typography>
//               </Stack>
//               <Typography variant="caption" color="text.secondary">
//                 {podcast.subtitle}
//               </Typography>
//               <Typography variant="body2" sx={{ mt: 1 }}>
//                 {podcast.description}
//               </Typography>
//               <Chip
//                 label="Watch on YouTube"
//                 size="small"
//                 color="primary"
//                 variant="outlined"
//                 sx={{ mt: 1 }}
//               />
//             </CardContent>
//           </PodcastCard>
//         ))}
//       </Box>
//     </StyledCard>
//   );
// };

import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiAmazon,
  SiPython,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const StyledCard = styled(Box)(({ theme }) => ({
  background:
    "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.98) 100%)",
  backdropFilter: "blur(20px)",
  borderRadius: "24px",
  padding: theme.spacing(4),
  height: "100%",
  overflowY: "auto",
  position: "relative",
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
    left: -100,
    width: 200,
    height: 200,
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    borderRadius: "50%",
    opacity: 0.1,
    filter: "blur(40px)",
  },

  // Custom scrollbar
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-track": {
    background: "rgba(102, 126, 234, 0.05)",
    borderRadius: "10px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "rgba(102, 126, 234, 0.3)",
    borderRadius: "10px",
    "&:hover": {
      background: "rgba(102, 126, 234, 0.5)",
    },
  },
}));

const ProjectCard = styled(Card)({
  marginBottom: 16,
  cursor: "pointer",
  transition: "all 0.3s ease",
  borderRadius: "16px",
  border: "1px solid rgba(102, 126, 234, 0.1)",
  background: "rgba(102, 126, 234, 0.02)",

  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 8px 24px rgba(102, 126, 234, 0.15)",
    borderColor: "rgba(102, 126, 234, 0.3)",
    background: "rgba(102, 126, 234, 0.05)",
  },
});

const SkillBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  borderRadius: "16px",
  background: "rgba(102, 126, 234, 0.05)",
  border: "1px solid rgba(102, 126, 234, 0.1)",
  transition: "all 0.3s ease",
  cursor: "pointer",

  "&:hover": {
    transform: "translateY(-8px) scale(1.05)",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    boxShadow: "0 12px 24px rgba(102, 126, 234, 0.3)",

    "& svg": {
      color: "white",
      transform: "scale(1.1)",
    },

    "& .skill-name": {
      color: "white",
      fontWeight: 600,
    },
  },
});

const SectionTitle = styled(Typography)({
  fontWeight: 700,
  marginBottom: 24,
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

const Divider = styled(Box)({
  width: "100%",
  height: 1,
  background:
    "linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.3), transparent)",
  margin: "32px 0",
});

export const ProfileCard2 = () => {
  const skills = [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "SQL", icon: SiMysql, color: "#4479A1" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "AWS", icon: SiAmazon, color: "#FF9900" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  ];

  const projects = [
    {
      title: "Drag and Drop",
      subtitle: "React + dnd-kit library",
      description: `This project demonstrates a two-way drag and drop implementation in React using the dnd-kit library. Unlike one-way drag and drop, the two-way setup is a bit more complex because it requires two drop zones.`,
      tags: ["React", "TypeScript", "dnd-kit"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      subtitle: "Personal portfolio built with React & MUI",
      description:
        "A modern, responsive portfolio showcasing projects and skills with smooth animations and glassmorphism design.",
      tags: ["React", "MUI", "TypeScript"],
      link: "#",
    },
    {
      title: "E-commerce Dashboard",
      subtitle: "Full-stack admin panel",
      description:
        "Complete dashboard for managing products, orders, and analytics with real-time updates.",
      tags: ["Node.js", "PostgreSQL", "AWS"],
      link: "#",
    },
  ];

  return (
    <StyledCard>
      {/* About Section */}
      <SectionTitle variant="h5">About Me</SectionTitle>

      <Typography
        variant="body1"
        paragraph
        sx={{ lineHeight: 1.8, color: "text.secondary" }}
      >
        A passionate Senior Software Engineer with 6 years of experience
        building performant & scalable web applications and cloud solutions. I
        specialize in full-stack development with a focus on modern JavaScript
        frameworks and cloud infrastructure.
      </Typography>

      <Typography
        variant="body1"
        sx={{ lineHeight: 1.8, color: "text.secondary" }}
      >
        My journey spans from building enterprise applications at TCS (TCS ION)
        to developing innovative solutions at Harman International and now
        contributing to cutting-edge networking solutions at Aviatrix Systems. I
        thrive at the intersection of frontend elegance and backend robustness.
        Looking out for new opportunities
      </Typography>

      <Divider />

      {/* Skills Section */}
      <SectionTitle variant="h5">Tech Stack</SectionTitle>

      <Grid container spacing={2} sx={{ mb: 4 }}>
        {skills.map((skill) => (
          <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2.4 }} key={skill.name}>
            <SkillBox>
              <skill.icon
                size={40}
                style={{
                  color: skill.color,
                  marginBottom: 8,
                  transition: "all 0.3s ease",
                }}
              />
              <Typography
                variant="caption"
                className="skill-name"
                sx={{
                  fontWeight: 500,
                  color: "text.secondary",
                  transition: "all 0.3s ease",
                }}
              >
                {skill.name}
              </Typography>
            </SkillBox>
          </Grid>
        ))}
      </Grid>

      <Divider />

      {/* Projects Section */}
      <SectionTitle variant="h5">Featured Projects</SectionTitle>

      {projects.map((project, index) => (
        <ProjectCard key={index} variant="outlined">
          <CardContent>
            <Stack direction="row" alignItems="center" spacing={1} mb={1}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "0.875rem",
                  flexShrink: 0,
                }}
              >
                {index + 1}
              </Box>
              <Typography variant="h6" fontWeight="600">
                {project.title}
              </Typography>
            </Stack>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 2, fontStyle: "italic" }}
            >
              {project.subtitle}
            </Typography>

            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.7 }}>
              {project.description}
            </Typography>

            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
              {project.tags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    backgroundColor: "rgba(102, 126, 234, 0.1)",
                    color: "#667eea",
                    fontWeight: 500,
                    border: "1px solid rgba(102, 126, 234, 0.2)",
                    "&:hover": {
                      backgroundColor: "rgba(102, 126, 234, 0.2)",
                    },
                  }}
                />
              ))}
              <Chip
                label="View Project →"
                size="small"
                clickable
                onClick={() => window.open(project.link, "_blank")}
                sx={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  fontWeight: 600,
                  border: "none",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
                  },
                }}
              />
            </Stack>
          </CardContent>
        </ProjectCard>
      ))}
    </StyledCard>
  );
};
