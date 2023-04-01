import { Box, Image, Avatar, Text, Icon, Img } from "@chakra-ui/react";
import { SlOptionsVertical } from "react-icons/sl";
import { Users } from "../../dummmyData";
import React, { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked)
  };
  return (
    <Box
      w="100%"
      borderRadius="10px"
      shadow="dark-lg"
      mt="30px"
      mb="30px"
      bgColor="#000000"
      color="gray.500"
    >
      <Box p="10px">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Avatar
              size="sm"
              name="Kent Dodds"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              cursor="pointer"
            />
            <Text fontSize="15px" fontWeight="500" ml="10px" mr="10px">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </Text>
            <Text fontSize="12px">{post.date}</Text>
          </Box>
          <Box>
            <Icon as={SlOptionsVertical} />
          </Box>
        </Box>
        <Box mt="20px" mb="20px">
          <Text>{post?.desc}</Text>
          <Image
            src={post.photo}
            mt="20px"
            w="100%"
            maxHeight="500px"
            objectFit="contain"
          />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Img
              src="/assets/thumbs-up.png"
              w="24px"
              h="24px"
              mr="5px"
              cursor="pointer"
              onClick={likeHandler}
            />
            <Img
              src="/assets/favourite.png"
              w="24px"
              h="24px"
              mr="5px"
              cursor="pointer"
              onClick={likeHandler}
            />
            <Text fontSize="15px">liked by {like} people</Text>
          </Box>
          <Box>
            <Text
              cursor="pointer"
              borderBottom="1px"
              borderBottomColor=""
              borderBottomStyle="dashed"
              fontSize="15px"
            >
              {post.comment} comments
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
