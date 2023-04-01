import { Box } from "@chakra-ui/react";
import React from "react";
import Post from "../post/Post";
import { Share } from "../share/Share";
import { Posts } from "../../dummmyData";
export const Feed = () => {
  return (
    <Box flex="5.5" bgColor="#121212">
      <Box p="20px">
        <Share />
        {Posts.map((p)=>(
          <Post key={p.id} post={p} />
        ))}
      </Box>
    </Box>
  );
};
