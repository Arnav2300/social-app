//import "./topbar.css";
import { ImSearch, ImUser, ImBubbles, ImNotification } from "react-icons/im";
import {
  Flex,
  Box,
  Heading,
  Text,
  Avatar,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Badge,
  Icon,
} from "@chakra-ui/react";
export const Topbar = () => {
  return (
    <Flex
      as="nav"
      alignItems={"center"}
      className="topbarContainer"
      wrap="wrap"
      h="50px"
      bg="#121212"
      borderBottom="2px"
      borderBottomColor="gray.800"
      position="sticky"
      top="0px"
      zIndex="999"
    >
      <Heading
        as="h1"
        flex="3"
        pl="10px"
        bgGradient="linear(to-b, #86F363, #3AE9DA)"
        bgClip="text"
        fontFamily="Advent Pro"
        cursor="pointer"
        _hover={{
          textShadow:
            "0 0 10px #3AE9DA, 0 0 10px #3AE9DA, 0 0 20px #86F363, 0 0 20px #86F363, 0 0 20px #86F363, 0 0 20px #86F363, 0 0 20px #86F363",
          transitionDuration: "2000ms",
        }}
      >
        chatter
      </Heading>
      <Spacer />

      <Box flex="4">
        <InputGroup fontFamily="Roboto">
          <InputLeftElement
            pointerEvents="none"
            children={<ImSearch color="#449086" />}
          />
          <Input
            borderRadius="100"
            borderColor="#449086"
            focusBorderColor="#449086"
            type="text"
            placeholder="Search Anything..."
            textColor="gray.500"
          />
        </InputGroup>
      </Box>
      <Spacer />
      <Flex
        flex="4"
        alignItems="center"
        justifyContent="space-around"
        color="gray.500"
      >
        <Text
          bgGradient="linear(to-b, #86F363, #3AE9DA)"
          bgClip="text"
          fontFamily="Roboto"
          cursor="pointer"
          _hover={{
            textShadow:
              "0 0 10px #3AE9DA, 0 0 20px #3AE9DA, 0 0 30px #86F363, 0 0 40px #86F363, 0 0 50px #86F363, 0 0 60px #86F363, 0 0 70px #86F363",
            transitionDuration: "2000ms",
          }}
        >
          Homepage
        </Text>
        <Text
          bgGradient="linear(to-b, #86F363, #3AE9DA)"
          bgClip="text"
          fontFamily="Roboto"
          cursor="pointer"
          _hover={{
            textShadow:
              "0 0 10px #3AE9DA, 0 0 20px #3AE9DA, 0 0 30px #86F363, 0 0 40px #86F363, 0 0 50px #86F363, 0 0 60px #86F363, 0 0 70px #86F363",
            transitionDuration: "2000ms",
          }}
        >
          Timeline
        </Text>
        <Flex gap={3}>
          <Box position="relative" cursor="pointer">
            <Icon as={ImUser} />
            <Badge
              variant="solid"
              colorScheme="red"
              position="absolute"
              top="10px"
              right="-5px"
              fontSize="8px"
            >
              1
            </Badge>
          </Box>
          <Spacer />
          <Box position="relative" cursor="pointer">
            <Icon as={ImBubbles} />
            <Badge
              variant="solid"
              colorScheme="red"
              position="absolute"
              top="10px"
              right="-5px"
              fontSize="8px"
            >
              1
            </Badge>
          </Box>
          <Spacer />
          <Box position="relative" cursor="pointer">
            <Icon as={ImNotification} />
            <Badge
              variant="solid"
              colorScheme="red"
              position="absolute"
              top="10px"
              right="-5px"
              fontSize="8px"
            >
              1
            </Badge>
          </Box>
        </Flex>
        <Avatar
          size="sm"
          name="Kent Dodds"
          src="/assets/avatars/Png/Artboards_Diversity_Avatars_by_Netguru-33.png"
          cursor="pointer"
        />
      </Flex>
    </Flex>
  );
};
