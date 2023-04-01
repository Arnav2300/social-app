import { Avatar, AvatarBadge, Box, ListItem, Text } from "@chakra-ui/react";
import React from "react";

export default function Online({user}) {
  return (
    <ListItem>
      <Box display="flex" alignItems="center" pb="15px">
        <Avatar
          src={user.profilePicture}
          cursor="pointer"
          size="sm"
          name="arnav sar"
        >
          <AvatarBadge boxSize="0.9em" bg="green.500" />
        </Avatar>
        <Text ml="10px">{user.username}</Text>
      </Box>
    </ListItem>
  );
}
