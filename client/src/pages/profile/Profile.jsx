import React from "react";
import { Topbar } from "../../components/topbar/Topbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Avatar, Box, Heading, Image, Text } from "@chakra-ui/react";
import { Feed } from "../../components/feed/Feed";
import { Rightbar } from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <Box>
      <Topbar />
      <Box display="flex">
        <Sidebar />
        <Box flex="9" bgColor="#121212" color="gray.400">
          <Box>
            <Box h="320px" position="relative">
              <Image
                src="/assets/test_image.jpg"
                w="100%"
                h="250px"
                objectFit="cover"
              />
              <Avatar
                size="2xl"
                src="/assets/avatars/Png/Artboards_Diversity_Avatars_by_Netguru-33.png"
                position="absolute"
                left="0"
                right="0"
                m="auto"
                top="150px"
                border="3px solid white"
              />
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
              <Heading as="h4" size="md" fontSize="24px">Arnav Saraswat</Heading>
              <Text fontWeight="300">hello!</Text>
            </Box>
          </Box>
          <Box display="flex">
            <Feed />
            <Rightbar profile />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
