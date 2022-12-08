import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Stack } from "@mui/material";

const SideBar = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      SideBar
    </Stack>
  );
};

export default SideBar;
