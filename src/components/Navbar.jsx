import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import youtubeLogo from "../assets/youtubeLogo.png";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        p={2}
        sx={{
          position: "sticky",
          background: "white",
          top: 0,
          justifyContent: "space-between",
          boxShadow: 1,
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={youtubeLogo} alt="Logo" width={100} height={"auto"} />
        </Link>
        <SearchBar />
      </Stack>
    </>
  );
};

export default Navbar;
