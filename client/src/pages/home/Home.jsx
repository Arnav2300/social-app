import React from "react";
import { Topbar } from "../../components/topbar/Topbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Feed } from "../../components/feed/Feed";
import { Rightbar } from "../../components/rightbar/Rightbar";
import { Flex, Box } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Box>
      <Topbar />
      <Flex w="100%">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Flex>
    </Box>
  );
};
