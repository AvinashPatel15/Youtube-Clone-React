import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import ChannelDetail from "./components/ChannelDetail";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import VideoDetail from "./components/VideoDetail";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        {/* <Route path="/search/:searchTerm" element={<SearchFeed />} /> */}
      </Routes>
    </Box>
  );
}

export default App;
