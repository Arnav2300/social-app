import { Box, Flex, Text, Heading, Button, Input } from "@chakra-ui/react";
import React from "react";

export const Login = () => {
  return (
    <Flex
      bgColor="#121212"
      alignItems="center"
      justifyContent="center"
      w="100vw"
      h="100vh"
    >
      <Box display="flex" w="70%" h="70%">
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Heading
            fontSize="60px"
            mb="10px"
            bgGradient="linear(to-b, #86F363, #3AE9DA)"
            bgClip="text"
            fontFamily="Advent Pro"
          >
            chatter
          </Heading>
          <Text as="span" fontSize="24px" color="gray.400">
            A social media app.
          </Text>
        </Box>
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Input
            borderRadius="100"
            borderColor="#449086"
            focusBorderColor="#449086"
            placeholder="Email..."
            textColor="gray.500"
            mb="10px"
            type="email"
          />
          <Input
            borderRadius="100"
            borderColor="#449086"
            focusBorderColor="#449086"
            placeholder="Password..."
            textColor="gray.500"
            mb="10px"
            type="password"
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mb="10px"
          >
            <Button
              bgColor="#449086"
              variant="solid"
              border="0px"
              borderRadius="50px"
              color="gray.800"
              w="150px"
              p="10px"
              cursor="pointer"
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
              Sign in
            </Button>
            <Text color="#3AE9DA" cursor='pointer'>Forgot Password?</Text>
          </Box>
          <Button
            bgColor="#449086"
            variant="solid"
            border="0px"
            borderRadius="50px"
            color="gray.800"
            
            p="10px"
            cursor="pointer"
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
            Sign Up!
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};
