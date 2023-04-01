import { Avatar, ListItem, Text } from "@chakra-ui/react";
import React from "react";

export default function CloseFriends({user}) {
  return (
    <ListItem display="flex" alignItems="center" mb="15px">
      <Avatar
        size="sm"
        name="Kent Dodds"
        src={user.profilePicture}
        cursor="pointer"
      />
      <Text color="gray.300">{user.username}</Text>
    </ListItem>
  );
}
