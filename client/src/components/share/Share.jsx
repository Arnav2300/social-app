import {
  Box,
  Avatar,
  Input,
  Divider,
  Icon,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
import {
  ImHappy2,
  ImImages,
  ImLocation,
  ImLocation2,
  ImPriceTag,
} from "react-icons/im";

export const Share = () => {
  return (
    <Box
      w="100%"
      h="170px"
      borderRadius="10px"
      boxShadow="dark-lg"
      bgColor="#000000"
      color="gray.500"
    >
      <Box p="10px">
        <Box display="flex" alignItems="center">
          <Avatar
            size="lg"
            name="Kent Dodds"
            src="/assets/avatars/Png/Artboards_Diversity_Avatars_by_Netguru-33.png"
            cursor="pointer"
          />
          <Input
            focusBorderColor="transparent"
            type="text"
            placeholder="What's on your mind..."
            textColor="gray.500"
            w="80%"
            border="none"
          />
        </Box>
        <Divider orientation="horizontal" m="20px" w="" />
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" ml="20px">
            <Box display="flex" alignItems="center" mr="15px" cursor="pointer">
              <Icon as={ImImages} color="red.400" mr="3px" fontSize="18px" />
              <Text fontWeight="500" fontSize="14px">
                Photo or Video
              </Text>
            </Box>
            <Box display="flex" alignItems="center" mr="15px" cursor="pointer">
              <Icon as={ImPriceTag} color="blue.400" mr="3px" fontSize="18px" />
              <Text fontWeight="500" fontSize="14px">
                Tag
              </Text>
            </Box>
            <Box display="flex" alignItems="center" mr="15px" cursor="pointer">
              <Icon
                as={ImLocation2}
                color="green.400"
                mr="3px"
                fontSize="18px"
              />
              <Text fontWeight="500" fontSize="14px">
                Location
              </Text>
            </Box>
            <Box display="flex" alignItems="center" mr="15px" cursor="pointer">
              <Icon as={ImHappy2} color="goldenrod" mr="3px" fontSize="18px" />
              <Text fontWeight="500" fontSize="14px">
                Feelings
              </Text>
            </Box>
          </Box>
          <Button
          height='32px'
            bgColor="#449086"
            p="7px"
            borderRadius="5px"
            fontWeight="500"
            mr="20px"
            border="none"
            color="gray.800"
            _hover={{ bg: "#3ae9da" }}
            _active={{
              bg: "#86f363",
              transform: "scale(0.95)",
            }}
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}
          >
            Share
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
