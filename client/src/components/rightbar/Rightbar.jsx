import {
  Avatar,
  AvatarBadge,
  Box,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { Users } from "../../dummmyData";
import Online from "../online/Online";

export const Rightbar = ({ profile }) => {
  const HomeRightbar = () => {
    return (
      <Box>
        <Box display="flex" alignItems="center">
          <Image src="/assets/gift-box.png" ww="40px" h="40px" mr="10px" />
          <Text fontSize="15px" fontWeight="300">
            <b>Jane Doe</b> and <b>3 other friends</b> have a birthday today!
          </Text>
        </Box>
        <Image
          src="/assets/ad.webp"
          w="100%"
          borderRadius="10px"
          m="30px 0 30px 0"
          maxHeight="200px"
          objectFit="cover"
        />
        <Text fontSize="2xl" mb="10px" fontStyle="18px" fontWeight="500">
          Online
        </Text>
        <UnorderedList listStyleType="none" m="0" p="0">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </UnorderedList>
      </Box>
    );
  };

  const ProfileRightbar = () => {
    return (
      <Box>
        <Heading as="h4" size="md" mb="20px">
          User Information
        </Heading>
        <Box mb="30px">
          <Box mb="10px">
            <Text as="span" fontWeight="500" mr="15px">
              City:
            </Text>
            <Text as="span" fontWeight="300">
              New Delhi
            </Text>
          </Box>
          <Box mb="10px">
            <Text as="span" fontWeight="500" mr="15px">
              From:
            </Text>
            <Text as="span" fontWeight="300">
              New Delhi
            </Text>
          </Box>
          <Box mb="10px">
            <Text as="span" fontWeight="500" mr="15px">
              Relationship:
            </Text>
            <Text as="span" fontWeight="300">
              Single
            </Text>
          </Box>
        </Box>
        <Heading as="h4" size="md" mb="20px">
          User Friends
        </Heading>
        <Box display="flex" flexWrap="wrap" justifyContent="space-between">
          <Box display="flex" flexDirection="column" mb="20px" cursor="pointer" alignItems="center">
            <Avatar
              src="/assets/avatars/Png/Artboards_Diversity_Avatars_by_Netguru-33.png"
              borderRadius="5px"
            />
            <Text as="span">John Smith</Text>
          </Box>
          <Box display="flex" flexDirection="column" mb="20px" cursor="pointer" alignItems="center">
            <Avatar
              src="/assets/avatars/Png/Artboards_Diversity_Avatars_by_Netguru-33.png"
              borderRadius="5px"
            />
            <Text as="span">John Smith</Text>
          </Box>
          <Box display="flex" flexDirection="column" mb="20px" cursor="pointer" alignItems="center">
            <Avatar
              src="/assets/avatars/Png/Artboards_Diversity_Avatars_by_Netguru-33.png"
              borderRadius="5px"
            />
            <Text as="span">John Smith</Text>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      flex="3.5"
      bgColor="#121212"
      borderLeft="2px"
      borderLeftColor="gray.800"
      color="gray.500"
    >
      <Box p="20px 20px 0 10px">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </Box>
    </Box>
  );
};
