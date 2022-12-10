import React from "react";
import { Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SchoolIcon from "@mui/icons-material/School";
import FaceRetouchingNaturalIcon from "@mui/icons-material/FaceRetouchingNatural";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

const SideBar = () => {
  const categories = [
    {
      id: 1,
      name: "Home",
      icon: <HomeIcon />,
    },
    {
      id: 2,
      name: "Music",
      icon: <MusicNoteIcon />,
    },

    {
      id: 3,
      name: "Podcast",
      icon: <GraphicEqIcon />,
    },
    {
      id: 4,
      name: "Education",
      icon: <SchoolIcon />,
    },
    {
      id: 5,
      name: "Movie",
      icon: <OndemandVideoIcon />,
    },
    {
      id: 6,
      name: "Gaming",
      icon: <SportsEsportsIcon />,
    },
    {
      id: 7,
      name: "Live",
      icon: <LiveTvIcon />,
    },
    {
      id: 8,
      name: "Sport",
      icon: <FitnessCenterIcon />,
    },
    {
      id: 9,
      name: "Fashion",
      icon: <CheckroomIcon />,
    },
    {
      id: 10,
      name: "Beauty",
      icon: <FaceRetouchingNaturalIcon />,
    },
    {
      id: 11,
      name: "Comedy",
      icon: <TheaterComedyIcon />,
    },
    {
      id: 12,
      name: "Gym",
      icon: <FitnessCenterIcon />,
    },
    {
      id: 13,
      name: "Crypto",
      icon: <DeveloperModeIcon />,
    },
  ];
  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map(({ id, name, icon }) => (
        <button key={id} className="category-btn">
          <span>{icon}</span>
          <span>{name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
