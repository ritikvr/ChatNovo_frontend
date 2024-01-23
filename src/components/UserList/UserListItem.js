import { Avatar, Box, Text } from "@chakra-ui/react";

const UserListItem = ({ user, accessHandler }) => {
  return (
    <Box
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{ background: "#38B2AC", color: "white" }}
      w="100%"
      display="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
      onClick={accessHandler}
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={user.name}
        src={user.pic}
      />
      <Box>
        <Text>{user.name}</Text>
        <Text fontSize='xs'>
          <b>Email: </b>
          {user.email}
        </Text>
      </Box>
    </Box>
  );
};
export default UserListItem;
