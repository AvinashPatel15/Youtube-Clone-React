import React from "react";
import { Paper, IconButton, Box } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Box
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid black",
        pl: 2,
        boxShadow: "none",
        // mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        placeholder="Search"
        value=""
        onChange={() => {}}
      />
      <IconButton type="submit" sx={{ p: "5px", color: "red" }}>
        <Search />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
