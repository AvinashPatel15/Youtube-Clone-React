import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import Loader from "./Loader";

const Videos = ({ videos, gridTemplateColumns }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      width={"100%"}
      display={"grid"}
      gridTemplateColumns={
        gridTemplateColumns || {
          base: "repeat(1, 1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
        }
      }
      gridTemplateRows={"auto"}
      columnGap={"5px"}
      rowGap={"15px"}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
